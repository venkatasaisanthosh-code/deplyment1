const objectives = [
  {
    title: 'Foster Innovation',
    desc: 'Encourage students to explore emerging technologies and translate ideas into real-world prototypes.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a4 4 0 115.657 0M9 17v1a3 3 0 006 0v-1" />
    ),
  },
  {
    title: 'Build Technical Skills',
    desc: 'Provide hands-on workshops on trending domains like AI, IoT, robotics, and embedded systems.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    title: 'Encourage Networking',
    desc: 'Create opportunities for students to connect with mentors, alumni, and industry professionals.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-4a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" />
    ),
  },
  {
    title: 'Promote Leadership',
    desc: 'Empower students to organize, lead, and manage technical initiatives within their community.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
]

const reasons = [
  {
    title: 'Boost Your Resume',
    desc: 'Add valuable certifications and hands-on project experience that stand out to recruiters.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
  },
  {
    title: 'Learn from Experts',
    desc: 'Gain insights directly from experienced engineers, researchers, and IEEE professionals.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0112 20.055 12.083 12.083 0 015.84 10.578L12 14z" />
    ),
  },
  {
    title: 'Free Access',
    desc: 'Participate in premium-quality workshops and talks at absolutely no cost as a student.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2" />
    ),
  },
  {
    title: 'Build Your Network',
    desc: 'Meet like-minded peers and future collaborators who share your passion for technology.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9a3 3 0 11-6 0 3 3 0 016 0zM12 21a8.966 8.966 0 01-6-2.292M6 21v-1a6 6 0 0112 0v1" />
    ),
  },
]

function SectionHeading({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="section-eyebrow text-ieee-blue">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold text-ieee-darkblue sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-ieee-slate">{desc}</p>}
    </div>
  )
}

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-ieee-darkblue to-ieee-blue py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <span className="section-eyebrow rounded-full border border-white/25 bg-white/10 px-4 py-1.5">
            Get to Know Us
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold sm:text-5xl">About Us</h1>
          <p className="mt-4 text-white/80">
            Discover who we are, what we stand for, and why this event matters for the
            next generation of engineers.
          </p>
        </div>
      </section>

      {/* About IEEE */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fadeInUp">
            <span className="section-eyebrow text-ieee-blue">Who We Are</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ieee-darkblue">About IEEE</h2>
            <p className="mt-5 leading-relaxed text-ieee-slate">
              The Institute of Electrical and Electronics Engineers (IEEE) is the world's
              largest technical professional organization dedicated to advancing technology
              for the benefit of humanity. With members spanning over 160 countries, IEEE
              drives innovation across computing, communications, power, aerospace, and
              countless other engineering disciplines through publications, conferences,
              standards, and professional development.
            </p>
            <p className="mt-4 leading-relaxed text-ieee-slate">
              Since its founding, IEEE has been at the forefront of shaping the technologies
              that define modern life — from the electrical grid to the internet itself.
            </p>
          </div>
          <div className="card animate-fadeInUp p-10" style={{ animationDelay: '0.15s' }}>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="font-display text-3xl font-bold text-ieee-blue">400K+</p>
                <p className="mt-1 text-sm text-ieee-slate">Members Worldwide</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-ieee-blue">160+</p>
                <p className="mt-1 text-sm text-ieee-slate">Countries</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-ieee-blue">39</p>
                <p className="mt-1 text-sm text-ieee-slate">Societies</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-ieee-blue">1884</p>
                <p className="mt-1 text-sm text-ieee-slate">Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Branch */}
      <section className="bg-ieee-gray py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 card p-10 lg:order-1">
              <ul className="space-y-4">
                {[
                  'Weekly technical workshops and coding sessions',
                  'Industry mentorship and guest lecture series',
                  'Collaborative student-led research projects',
                  'Annual flagship technical events and hackathons',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-ieee-blue/10 text-ieee-blue">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-ieee-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-eyebrow text-ieee-blue">Our Community</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-ieee-darkblue">
                About the IEEE Student Branch
              </h2>
              <p className="mt-5 leading-relaxed text-ieee-slate">
                Our IEEE Student Branch is a vibrant community of engineering students
                passionate about technology and innovation. We organize technical events,
                workshops, and networking opportunities that bridge the gap between
                classroom learning and real-world application.
              </p>
              <p className="mt-4 leading-relaxed text-ieee-slate">
                As part of a global network, our branch empowers members to develop
                technical, leadership, and professional skills that prepare them for
                successful careers in engineering and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="Our Purpose"
          title="Objectives of the Event"
          desc="TechSpark 2026 is designed with clear goals to maximize value for every attendee."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((o, i) => (
            <div key={o.title} className="card animate-fadeInUp p-7" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ieee-blue/10 text-ieee-blue">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {o.icon}
                </svg>
              </div>
              <h3 className="font-display text-base font-bold text-ieee-darkblue">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ieee-slate">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Participate */}
      <section className="bg-ieee-gray py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Your Benefits"
            title="Why Students Should Participate"
            desc="Here's what you gain by being part of this experience."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="card animate-fadeInUp p-7 text-center"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ieee-blue text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {r.icon}
                  </svg>
                </div>
                <h3 className="font-display text-base font-bold text-ieee-darkblue">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ieee-slate">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
