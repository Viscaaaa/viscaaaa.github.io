import { useEffect, useState } from 'react'
import { FaMicrochip, FaBars, FaXmark } from 'react-icons/fa6'
import { profile } from '../data/portfolio'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'career', label: 'Karir' },
  { id: 'certificates', label: 'Sertifikat' },
  { id: 'projects', label: 'Project' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container nav-inner" aria-label="Navigasi utama">
        <a href="#home" className="logo" id="nav-logo">
          <FaMicrochip className="logo-icon" />
          {profile.name.toUpperCase()}
          <span>.</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l, i) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                id={`nav-${l.id}`}
                className={active === l.id ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                <span className="idx">0{i}.</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-toggle"
          id="nav-toggle"
          aria-label="Buka menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </nav>
    </header>
  )
}
