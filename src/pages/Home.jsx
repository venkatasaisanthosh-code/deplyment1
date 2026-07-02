import { NavLink } from 'react-router-dom'
import Hero from '../components/Hero.jsx'

const features = [
  {
    title: 'Expert Workshops',
    desc: 'Hands-on sessions led by industry professionals covering the latest in embedded systems, AI, and IoT.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    title: 'Networking',
    desc: 'Connect with peers, alumni, and professionals from across the IEEE community and industry partners.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-4a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" />
    ),
  },
  {
    title: 'Technical Talks',
    desc: 'Insightful sessions on emerging technologies, research trends, and career pathways in engineering.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-6l-4 4v-4z" />
    ),
  },
  {
    title: 'Certificates',
    desc: 'Receive an official IEEE certificate of participation to showcase your involvement and learning.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Hands-on Challenges',
    desc: 'Put your skills to the test with team-based problem solving and rapid prototyping challenges.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
  },
  {
    title: 'Goodies & Swag',
    desc: 'Take home exclusive IEEE merchandise, resources, and giveaways from our event partners.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    ),
  },
]

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Features */}
      <section className="bg-ieee-gray py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow text-ieee-blue">Why Attend</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ieee-darkblue sm:text-4xl">
              Everything You Need to Grow
            </h2>
            <p className="mt-4 text-ieee-slate">
              A full day packed with opportunities to learn, connect, and build — designed
              specifically for engineering students eager to make an impact.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="card group animate-fadeInUp p-8"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-ieee-blue/10 text-ieee-blue transition-colors duration-300 group-hover:bg-ieee-blue group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-ieee-darkblue">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ieee-slate">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-ieee-blue to-ieee-darkblue px-8 py-14 text-center shadow-cardHover sm:px-16">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <h2 className="relative font-display text-2xl font-bold text-white sm:text-3xl">
              Seats are filling up fast
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-sm text-white/80 sm:text-base">
              Secure your spot at TechSpark 2026 today — registration takes less than a minute.
            </p>
            <NavLink
              to="/register"
              className="btn-primary relative mt-8 !bg-white !text-ieee-blue hover:!bg-ieee-gray"
            >
              Register Now
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}
