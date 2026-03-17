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

      <div className="relative mx-auto max-w-full">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
            <span className="text-lg">⚡</span>
          </div>
          <h2 className="text-3xl font-semibold text-white">Automation Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Automation is leverage. I build workflows that are observable, retriable, and safe.
          </p>
        </div>

        <div className="mt-12 relative overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              animation: scroll 30s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="marquee-track flex gap-6 w-max">
            {[...workflows, ...workflows].map((w, idx) => (
              <article 
                key={`${w.id}-${idx}`} 
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 w-72 flex-shrink-0 transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10"
              >
                <img
                  src={w.imageSrc}
                  alt={w.name}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
