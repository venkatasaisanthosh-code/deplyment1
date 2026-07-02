import { NavLink } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ieee-darkblue via-ieee-blue to-ieee-lightblue">
      {/* Decorative floating shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 animate-float rounded-full bg-white/5 blur-3xl" />
        <div
          className="absolute -right-10 bottom-0 h-96 w-96 animate-float rounded-full bg-white/10 blur-3xl"
          style={{ animationDelay: '1.5s' }}
        />
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-10 lg:py-32">
        <span className="section-eyebrow mb-5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-white animate-fadeIn">
          IEEE Student Branch Presents
        </span>

        <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl animate-fadeInUp">
          TechSpark 2026 <br className="hidden sm:block" />
          <span className="text-ieee-gray/90">Innovate. Build. Lead.</span>
        </h1>

        <p
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg animate-fadeInUp"
          style={{ animationDelay: '0.15s' }}
        >
          Join fellow engineering students for a day of workshops, technical talks, and
          hands-on challenges designed to spark your next big idea. Network with industry
          experts and level up your skills.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-fadeInUp"
          style={{ animationDelay: '0.3s' }}
        >
          <NavLink to="/register" className="btn-primary !bg-white !text-ieee-blue hover:!bg-ieee-gray">
            Register Now
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NavLink>
          <NavLink to="/about" className="btn-outline">
            Learn More
          </NavLink>
        </div>

        <div
          className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-6 border-t border-white/15 pt-8 animate-fadeInUp"
          style={{ animationDelay: '0.45s' }}
        >
          {[
            { value: '500+', label: 'Participants' },
            { value: '20+', label: 'Speakers' },
            { value: '10+', label: 'Workshops' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
