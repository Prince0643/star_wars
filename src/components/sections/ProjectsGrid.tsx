import type { Project } from '@/data/projects'

type Props = {
  projects: Project[]
}

export function ProjectsGrid({ projects }: Props) {
  return (
    <section id="projects" className="relative overflow-hidden bg-black py-20 text-white">
      {/* Deep space background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-black to-black" />
      
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-px rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.8,
              boxShadow: Math.random() > 0.9 ? '0 0 4px rgba(255,255,255,0.8)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Sun - Central glowing orb */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 blur-3xl" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 blur-2xl" />
      </div>

      {/* Orbit rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
        <div className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
        <div className="absolute h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      </div>

      {/* Floating planets in background */}
      <div className="planet absolute right-[15%] top-[20%] h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-40 blur-sm" />
      <div className="planet absolute left-[10%] top-[60%] h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 opacity-30 blur-md" />
      <div className="planet absolute right-[25%] bottom-[15%] h-12 w-12 rounded-full bg-gradient-to-br from-green-400 to-teal-600 opacity-50" />

      {/* CSS for twinkling stars */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-[0_0_30px_rgba(251,191,36,0.5)]" />
          <h2 className="text-3xl font-semibold text-white">Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Selected work across web apps, mobile products, and systems integration.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article 
              key={p.id} 
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10"
            >
              {/* Planet icon */}
              <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-bold text-white shadow-lg">
                {i + 1}
              </div>
              
              <div className="flex items-start justify-between gap-4 pl-6">
                <div>
                  <h3 className="text-xl font-medium text-white group-hover:text-cyan-300 transition-colors">{p.name}</h3>
                  <div className="mt-1 text-sm text-white/50">{p.year}</div>
                </div>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  {p.type}
                </span>
              </div>

              <p className="mt-4 pl-6 text-sm text-white/60">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2 pl-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-2 pl-6 text-sm text-white/50">
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
