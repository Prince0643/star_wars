export function CosmicStory() {
  return (
    <section id="about" className="relative bg-slate-50 py-20 text-slate-900" data-reveal>
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8),0_0_20px_rgba(34,211,238,0.6),0_0_30px_rgba(34,211,238,0.4)]" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8),0_0_20px_rgba(34,211,238,0.6),0_0_30px_rgba(34,211,238,0.4)]" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="shrink-0">
            <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
              <img
                src="/avatar.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="flex h-full w-full items-center justify-center text-4xl">👋</div>';
                }}
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              I ship web & mobile products end-to-end, and I love the messy middle: integrating CRMs,
              automating operations, and building reliable data flows.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {
            title: 'Build',
            text: 'Modern UIs, scalable APIs, and production-ready tooling.',
          },
          {
            title: 'Integrate',
            text: 'GoHighLevel, HubSpot, Kajabi, WordPress and more.',
          },
          {
            title: 'Automate',
            text: 'Make/n8n workflows with retries, alerts, and clean data.',
          },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border border-cyan-200 bg-white p-5 shadow-sm">
            <div className="font-medium text-cyan-700">{c.title}</div>
            <div className="mt-2 text-sm text-slate-600">{c.text}</div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
