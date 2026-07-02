import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/register', label: 'Register' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ieee-blue font-display text-lg font-bold text-white shadow-card transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            IE
          </div>
          <div className="leading-tight">
            <p className="font-display text-base font-bold text-ieee-darkblue">IEEE</p>
            <p className="text-[11px] font-medium tracking-wide text-ieee-slate">Student Branch</p>
          </div>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-ieee-blue text-white shadow-card'
                    : 'text-ieee-darkblue hover:bg-ieee-gray'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink to="/register" className="hidden md:inline-flex btn-primary !py-2.5 !px-6 !text-sm">
          Register Now
        </NavLink>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ieee-darkblue transition-colors hover:bg-ieee-gray md:hidden"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'max-h-72 border-t border-slate-100' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 bg-white px-6 py-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-ieee-blue text-white' : 'text-ieee-darkblue hover:bg-ieee-gray'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
