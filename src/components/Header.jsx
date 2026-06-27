import { useEffect, useState } from 'react'

export default function Header({ navItems, activeSection, goTo }) {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
  }, [open])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const handleNav = (index) => {
    goTo(index)
    setOpen(false)
  }

  return (
    <header>
      <a className="logo" onClick={() => handleNav(0)}>Aryan</a>

      <nav className={`navbar${open ? ' active' : ''}`}>
        {navItems.map((link) => (
          <a
            key={link.label}
            className={activeSection === link.section ? 'active' : ''}
            onClick={() => handleNav(link.index)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div
        className={`mobile-menu-btn${open ? ' active' : ''}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="icons">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          <i className={theme === 'dark' ? 'bx bx-sun' : 'bx bx-moon'}></i>
        </button>
        <a href="https://github.com/1102Aryan" target="_blank" rel="noreferrer">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/aryan-sunil-532920287/" target="_blank" rel="noreferrer">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </header>
  )
}
