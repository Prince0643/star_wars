import type { Workflow } from '@/data/workflows'

type Props = {
  workflows: Workflow[]
}

export function AutomationNebula({ workflows }: Props) {
  const stars = Array.from({ length: 60 }, (_, i) => {
    const seeded = (n: number) => {
      const x = Math.sin(n * 9999) * 10000
      return x - Math.floor(x)
    }

    const top = seeded(i + 1) * 100
    const left = seeded(i + 2) * 100
    const opacity = 0.2 + seeded(i + 3) * 0.8

    return {
      id: i,
      style: {
        top: `${top}%`,
        left: `${left}%`,
        opacity,
      } as const,
    }
  })

  return (
    <section id="automation" className="relative overflow-hidden bg-black py-24 text-white">
      {/* Deep space background - continuing from Integrations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-black to-black" />
      
      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute h-px w-px rounded-full bg-white"
            style={s.style}
          />
        ))}
      </div>

      {/* Floating planets */}
      <div className="planet absolute right-[20%] top-[20%] h-16 w-16 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 opacity-30 blur-sm" />
      <div className="planet absolute left-[8%] bottom-[30%] h-12 w-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 opacity-40" />
      <div className="planet absolute right-[5%] top-[60%] h-20 w-20 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 opacity-25 blur-md" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
            <span className="text-lg">⚡</span>
          </div>
          <h2 className="text-3xl font-semibold text-white">Automation Nebula</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Automation is leverage. I build workflows that are observable, retriable, and safe.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {workflows.map((w, i) => (
            <article 
              key={w.id} 
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10"
            >
              {/* Planet icon */}
              <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-bold text-white shadow-lg">
                {i + 1}
              </div>
              
              <div className="pl-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-medium text-white group-hover:text-cyan-300 transition-colors">{w.name}</h3>
                </div>
                <p className="mt-2 text-sm text-white/60">{w.summary}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {w.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <ul className="mt-4 space-y-2 text-sm text-white/50">
                  {w.steps.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
