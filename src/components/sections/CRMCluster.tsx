const systems = ['GoHighLevel', 'HubSpot', 'Kajabi', 'Karta', 'WordPress']

export function CRMCluster() {
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
    <section id="integrations" className="relative overflow-hidden bg-black py-20 text-white">
      {/* Deep space background - continuing from Projects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black" />
      
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
      <div className="planet absolute left-[15%] top-[25%] h-20 w-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-30 blur-sm" />
      <div className="planet absolute right-[10%] bottom-[20%] h-14 w-14 rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            <span className="text-lg">🔗</span>
          </div>
          <h2 className="text-3xl font-semibold text-white">CRM / SaaS Integrations</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            I design reliable integrations: mapping, deduplication, retries, and rate-limit safe sync.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="mb-6 flex items-center gap-3 text-sm text-white/50 uppercase tracking-wider">
            <span className="h-px w-8 bg-cyan-400/50" />
            Connected Systems
          </div>
          <div className="flex flex-wrap gap-3">
            {systems.map((s, i) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors"
              >
                <span className="mr-2 text-cyan-400/60">{String(i + 1).padStart(2, '0')}</span>
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-white/50">
            <span className="text-cyan-400">◆</span> Patterns: bi-directional sync, event-driven updates, idempotency, and observability.
          </div>
        </div>
      </div>
    </section>
  )
}
