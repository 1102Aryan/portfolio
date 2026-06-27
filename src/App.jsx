import Header from './components/Header'
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NavDots from './components/NavDots'
import { useHorizontalScroll } from './hooks/useHorizontalScroll'
import { experiences, projects } from './data'

// Split a list into evenly balanced pages so no single panel overflows.
function paginate(items, maxPerPage) {
  const pageCount = Math.max(1, Math.ceil(items.length / maxPerPage))
  const perPage = Math.ceil(items.length / pageCount)
  const pages = []
  for (let i = 0; i < items.length; i += perPage) {
    pages.push(items.slice(i, i + perPage))
  }
  return pages
}

// Build the ordered list of horizontal panels. Experience and projects each
// spill onto extra panels when they hold more than fits comfortably.
function buildPanels() {
  const panels = [{ type: 'home' }]
  paginate(experiences, 4).forEach((items) => panels.push({ type: 'experience', items }))
  paginate(projects, 3).forEach((items) => panels.push({ type: 'projects', items }))
  panels.push({ type: 'contact' })
  return panels
}

const panels = buildPanels()

const navItems = ['home', 'experience', 'projects', 'contact'].map((section) => ({
  label: section.charAt(0).toUpperCase() + section.slice(1),
  section,
  index: panels.findIndex((p) => p.type === section),
}))

export default function App() {
  const { containerRef, active, goTo } = useHorizontalScroll(panels.length)
  const activeSection = panels[active]?.type

  return (
    <>
      <Header navItems={navItems} activeSection={activeSection} goTo={goTo} />

      <div
        className="container"
        ref={containerRef}
        style={{ width: `${panels.length * 100}vw` }}
      >
        {panels.map((panel, i) => {
          if (panel.type === 'home') return <Home key={i} />
          if (panel.type === 'experience') return <Experience key={i} items={panel.items} />
          if (panel.type === 'projects') return <Projects key={i} items={panel.items} />
          return <Contact key={i} />
        })}
      </div>

      <NavDots count={panels.length} active={active} goTo={goTo} />

      <div className="scroll-indicator" style={{ opacity: active > 0 ? 0 : 0.7 }}>
        <div>Scroll to explore</div>
        <div className="scroll-arrow">→</div>
      </div>
    </>
  )
}
