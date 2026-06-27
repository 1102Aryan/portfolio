import { useCallback, useEffect, useRef, useState } from 'react'

// One continuous rAF loop eases `pos` toward `target`, so navigation is
// interruptible and the same position drives per-section parallax.
export function useHorizontalScroll(count) {
  const containerRef = useRef(null)
  const pos = useRef(-0.14) // section units; starts off-screen for an entrance ease-in
  const target = useRef(0)
  const dragging = useRef(false)
  const lastActive = useRef(0)
  const [active, setActive] = useState(0)

  const goTo = useCallback(
    (i) => {
      target.current = Math.max(0, Math.min(count - 1, i))
    },
    [count],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lerp = reduce ? 1 : 0.09

    let width = window.innerWidth
    const onResize = () => {
      width = window.innerWidth
    }
    window.addEventListener('resize', onResize)

    let rafId = 0
    const frame = () => {
      const sections = container.children
      if (!dragging.current) {
        pos.current += (target.current - pos.current) * lerp
        if (Math.abs(target.current - pos.current) < 0.0006) pos.current = target.current
      }

      const p = pos.current
      container.style.transform = `translate3d(${-p * width}px, 0, 0)`

      for (let i = 0; i < sections.length; i++) {
        const inner = sections[i].firstElementChild
        if (!inner) continue
        const d = i - p // 0 at centre, ±1 for neighbours
        const ad = Math.min(Math.abs(d), 1)
        if (reduce) {
          inner.style.opacity = ad < 0.5 ? '1' : '0'
          inner.style.transform = 'none'
        } else {
          inner.style.opacity = String(1 - ad * 0.65)
          inner.style.transform = `translate3d(${d * 6}%, ${ad * 14}px, 0) scale(${1 - ad * 0.07})`
        }
      }

      const idx = Math.round(p)
      if (idx !== lastActive.current && idx >= 0 && idx < count) {
        lastActive.current = idx
        setActive(idx)
      }
      rafId = requestAnimationFrame(frame)
    }
    rafId = requestAnimationFrame(frame)

    // Wheel: one section per gesture, with a short cooldown.
    let wheelLock = 0
    const onWheel = (e) => {
      e.preventDefault()
      const now = performance.now()
      if (now < wheelLock) return
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX
      if (Math.abs(delta) < 8) return
      wheelLock = now + 460
      goTo(Math.round(target.current) + (delta > 0 ? 1 : -1))
    }
    window.addEventListener('wheel', onWheel, { passive: false })

    // Touch: drag to scrub (with edge rubber-band), flick to advance a section.
    let startX = 0
    let startY = 0
    let startPos = 0
    let lastX = 0
    let vx = 0
    let axisLocked = null
    const onTouchStart = (e) => {
      const t = e.touches[0]
      startX = lastX = t.clientX
      startY = t.clientY
      startPos = pos.current
      vx = 0
      axisLocked = null
      dragging.current = true
    }
    const onTouchMove = (e) => {
      if (!dragging.current) return
      const t = e.touches[0]
      const dx = t.clientX - startX
      const dy = t.clientY - startY
      if (axisLocked === null && Math.abs(dx) + Math.abs(dy) > 8) {
        axisLocked = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'
      }
      if (axisLocked === 'y') return
      e.preventDefault()
      vx = t.clientX - lastX
      lastX = t.clientX
      let np = startPos - dx / width
      if (np < 0) np *= 0.35
      else if (np > count - 1) np = count - 1 + (np - (count - 1)) * 0.35
      pos.current = np
    }
    const onTouchEnd = () => {
      if (!dragging.current) return
      dragging.current = false
      const fromIdx = Math.round(startPos)
      let dest = Math.round(pos.current)
      if (Math.abs(vx) > 4) dest = fromIdx + (vx < 0 ? 1 : -1)
      goTo(dest)
    }
    container.addEventListener('touchstart', onTouchStart, { passive: true })
    container.addEventListener('touchmove', onTouchMove, { passive: false })
    container.addEventListener('touchend', onTouchEnd, { passive: true })
    container.addEventListener('touchcancel', onTouchEnd, { passive: true })

    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(Math.round(target.current) + 1)
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goTo(Math.round(target.current) - 1)
    }
    window.addEventListener('keydown', onKey)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('wheel', onWheel)
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchmove', onTouchMove)
      container.removeEventListener('touchend', onTouchEnd)
      container.removeEventListener('touchcancel', onTouchEnd)
      window.removeEventListener('keydown', onKey)
    }
  }, [count, goTo])

  return { containerRef, active, goTo }
}
