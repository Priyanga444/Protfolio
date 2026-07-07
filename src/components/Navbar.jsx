import { useEffect, useState } from 'react'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Education',   href: '#education' },
  { label: 'Achievements',href: '#achievements' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false)
  const [active, setActive]           = useState('#home')
  const [menuOpen, setMenuOpen]       = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navItems.map(n => n.href.slice(1))
      let current = sections[0]
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      }
      setActive('#' + current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); handleNav('#home') }}>
          <div className="nav-logo-icon">P</div>
          <span className="nav-logo-text">Priyanka</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNav(href) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="nav-cta">
          <a href="/resume.pdf" download className="btn btn-primary" style={{ fontSize: '0.82rem', padding: '0.55rem 1.2rem' }}>
            <FiDownload /> Resume
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={(e) => { e.preventDefault(); handleNav(href) }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" download style={{ color: 'var(--primary)' }}>
              ⬇ Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
