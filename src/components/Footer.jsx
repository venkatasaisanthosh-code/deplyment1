import { NavLink } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ieee-darkblue text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3 lg:px-10">
        {/* Branch info */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white font-display text-lg font-bold text-ieee-blue">
              IE
            </div>
            <div>
              <p className="font-display text-base font-bold">IEEE Student Branch</p>
              <p className="text-xs text-white/60">Advancing Technology for Humanity</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            The Institute of Electrical and Electronics Engineers Student Branch fosters
            innovation, leadership, and technical excellence among engineering students.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white/90">
            Quick Links
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <NavLink to="/" className="transition-colors hover:text-white">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="transition-colors hover:text-white">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/register" className="transition-colors hover:text-white">Register</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white/90">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ieee.studentbranch@university.edu
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Department of ECE, Engineering College
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-white/50 lg:px-10">
          © {year} IEEE Student Branch. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
