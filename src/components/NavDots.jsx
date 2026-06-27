export default function NavDots({ count, active, goTo }) {
  return (
    <div className="nav-dots">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`nav-dot${i === active ? ' active' : ''}`}
          onClick={() => goTo(i)}
        ></div>
      ))}
    </div>
  )
}
