import {
  siReact,
  siTypescript,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siMysql,
  siPostgresql,
  siSupabase,
  siFirebase,
  siPhp,
  siLaravel,
  siHubspot,
  siRender,
  siVercel,
  siVite,
  siGithub,
  siN8n,
  siFlutter,
  siHtml5,
  siCss,
  siJavascript,
  siDart,
  type SimpleIcon,
} from 'simple-icons'

const miniStars = Array.from({ length: 15 }, (_, i) => {
  const seeded = (n: number) => {
    const x = Math.sin(n * 9999) * 10000
    return x - Math.floor(x)
  }

  const top = seeded(i + 1) * 100
  const left = seeded(i + 2) * 100
  const opacity = 0.3 + seeded(i + 3) * 0.7

  return {
    id: i,
    style: {
      top: `${top}%`,
      left: `${left}%`,
      opacity,
    } as const,
  }
})

const siJava = {
  title: 'Java',
  slug: 'java',
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.184 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-7.943-1.149M8.276 15.985s-1.027.762.543.924c2.033.209 3.638.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.013.052-7.943-1.218"/></svg>',
  path: 'M8.851 18.56s-.917.534.653.714c1.902.218 2.874.184 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-7.943-1.149M8.276 15.985s-1.027.762.543.924c2.033.209 3.638.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.013.052-7.943-1.218',
  source: '',
  hex: '007396',
} satisfies SimpleIcon

const siHostinger = {
  title: 'Hostinger',
  slug: 'hostinger',
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4z"/></svg>',
  path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4z',
  source: '',
  hex: '673DE6',
} satisfies SimpleIcon

const siAWS = {
  title: 'AWS',
  slug: 'amazonaws',
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.763 10.036c0-.296.032-.534.088-.71a.929.929 0 0 1 .296-.452c.128-.117.28-.21.456-.266.176-.058.376-.087.6-.087.264 0 .496.032.688.088a1.87 1.87 0 0 1 .456.168l.136.08c.024.016.048.024.08.024a.11.11 0 0 0 .088-.04l.104-.144.168-.248c.024-.04.016-.088-.024-.12a2.53 2.53 0 0 0-.376-.216 3.05 3.05 0 0 0-.528-.184 2.63 2.63 0 0 0-.664-.08c-.376 0-.712.064-1.008.2-.296.136-.544.32-.744.56-.2.24-.352.52-.456.848-.104.328-.152.688-.152 1.08 0 .448.056.84.176 1.176.12.336.288.616.504.84.216.224.472.392.768.504.296.112.616.168.96.168.28 0 .544-.024.792-.08a2.78 2.78 0 0 0 .592-.176c.056-.024.088-.08.088-.136l.152-.528.04-.144c.008-.04 0-.072-.032-.096a.104.104 0 0 0-.096-.024l-.136.064c-.08.032-.168.064-.264.096a2.01 2.01 0 0 1-.312.072c-.128.024-.272.032-.44.032-.24 0-.448-.032-.624-.104a1.1 1.1 0 0 1-.432-.312 1.37 1.37 0 0 1-.256-.512 2.55 2.55 0 0 1-.088-.688zm8.032.08c0-.296.032-.536.096-.72a.95.95 0 0 1 .296-.448c.128-.12.28-.216.456-.272.176-.056.376-.088.6-.088.264 0 .496.032.688.088.192.056.368.136.528.232l.08.056c.024.016.056.024.088.024a.1.1 0 0 0 .08-.04l.112-.144.168-.248c.024-.04.016-.088-.024-.12a2.53 2.53 0 0 0-.376-.216 3.05 3.05 0 0 0-.528-.184 2.63 2.63 0 0 0-.664-.08c-.376 0-.712.064-1.008.2-.296.136-.544.32-.744.56-.2.24-.352.52-.456.848-.104.328-.152.688-.152 1.08 0 .448.056.84.176 1.176.12.336.288.616.504.84.216.224.472.392.768.504.296.112.616.168.96.168.28 0 .544-.024.792-.08a2.78 2.78 0 0 0 .592-.176c.056-.024.088-.08.088-.136l.152-.528.04-.144c.008-.04 0-.072-.032-.096a.104.104 0 0 0-.096-.024l-.136.064c-.08.032-.168.064-.264.096a2.01 2.01 0 0 1-.312.072c-.128.024-.272.032-.44.032-.24 0-.448-.032-.624-.104a1.1 1.1 0 0 1-.432-.312 1.37 1.37 0 0 1-.256-.512 2.55 2.55 0 0 1-.088-.688zM12 0C5.373 0 0 5.373 0 12c0 4.28 2.123 8.057 5.373 10.34l.016.016c.02.016.04.024.056.04.168.12.352.232.536.328l.072.04c.024.016.048.024.08.04.16.088.336.168.52.232l.08.032c.024.008.04.016.064.024.184.072.376.128.568.176l.048.016c.032.008.056.016.088.024.184.048.376.08.576.112l.072.016c.024.008.056.008.08.016.2.032.4.056.608.072h.016c.232.016.472.024.712.024s.48-.008.712-.024h.016c.208-.016.408-.04.608-.072.024-.008.056-.008.08-.016l.072-.016c.2-.032.392-.064.576-.112.032-.008.056-.016.088-.024l.048-.016c.192-.048.384-.104.568-.176.024-.008.04-.016.064-.024l.08-.032c.184-.064.36-.144.52-.232.032-.016.056-.024.08-.04l.072-.04c.184-.096.368-.208.536-.328.016-.016.04-.024.056-.04l.016-.016C21.877 20.057 24 16.28 24 12c0-6.627-5.373-12-12-12z"/></svg>',
  path: 'M6.763 10.036c0-.296.032-.534.088-.71a.929.929 0 0 1 .296-.452c.128-.117.28-.21.456-.266.176-.058.376-.087.6-.087.264 0 .496.032.688.088a1.87 1.87 0 0 1 .456.168l.136.08c.024.016.048.024.08.024a.11.11 0 0 0 .088-.04l.104-.144.168-.248c.024-.04.016-.088-.024-.12a2.53 2.53 0 0 0-.376-.216 3.05 3.05 0 0 0-.528-.184 2.63 2.63 0 0 0-.664-.08c-.376 0-.712.064-1.008.2-.296.136-.544.32-.744.56-.2.24-.352.52-.456.848-.104.328-.152.688-.152 1.08 0 .448.056.84.176 1.176.12.336.288.616.504.84.216.224.472.392.768.504.296.112.616.168.96.168.28 0 .544-.024.792-.08a2.78 2.78 0 0 0 .592-.176c.056-.024.088-.08.088-.136l.152-.528.04-.144c.008-.04 0-.072-.032-.096a.104.104 0 0 0-.096-.024l-.136.064c-.08.032-.168.064-.264.096a2.01 2.01 0 0 1-.312.072c-.128.024-.272.032-.44.032-.24 0-.448-.032-.624-.104a1.1 1.1 0 0 1-.432-.312 1.37 1.37 0 0 1-.256-.512 2.55 2.55 0 0 1-.088-.688zm8.032.08c0-.296.032-.536.096-.72a.95.95 0 0 1 .296-.448c.128-.12.28-.216.456-.272.176-.056.376-.088.6-.088.264 0 .496.032.688.088.192.056.368.136.528.232l.08.056c.024.016.056.024.088.024a.1.1 0 0 0 .08-.04l.112-.144.168-.248c.024-.04.016-.088-.024-.12a2.53 2.53 0 0 0-.376-.216 3.05 3.05 0 0 0-.528-.184 2.63 2.63 0 0 0-.664-.08c-.376 0-.712.064-1.008.2-.296.136-.544.32-.744.56-.2.24-.352.52-.456.848-.104.328-.152.688-.152 1.08 0 .448.056.84.176 1.176.12.336.288.616.504.84.216.224.472.392.768.504.296.112.616.168.96.168.28 0 .544-.024.792-.08a2.78 2.78 0 0 0 .592-.176c.056-.024.088-.08.088-.136l.152-.528.04-.144c.008-.04 0-.072-.032-.096a.104.104 0 0 0-.096-.024l-.136.064c-.08.032-.168.064-.264.096a2.01 2.01 0 0 1-.312.072c-.128.024-.272.032-.44.032-.24 0-.448-.032-.624-.104a1.1 1.1 0 0 1-.432-.312 1.37 1.37 0 0 1-.256-.512 2.55 2.55 0 0 1-.088-.688zM12 0C5.373 0 0 5.373 0 12c0 4.28 2.123 8.057 5.373 10.34l.016.016c.02.016.04.024.056.04.168.12.352.232.536.328l.072.04c.024.016.048.024.08.04.16.088.336.168.52.232l.08.032c.024.008.04.016.064.024.184.072.376.128.568.176l.048.016c.032.008.056.016.088.024.184.048.376.08.576.112l.072.016c.024.008.056.008.08.016.2.032.4.056.608.072h.016c.232.016.472.024.712.024s.48-.008.712-.024h.016c.208-.016.408-.04.608-.072.024-.008.056-.008.08-.016l.072-.016c.2-.032.392-.064.576-.112.032-.008.056-.016.088-.024l.048-.016c.192-.048.384-.104.568-.176.024-.008.04-.016.064-.024l.08-.032c.184-.064.36-.144.52-.232.032-.016.056-.024.08-.04l.072-.04c.184-.096.368-.208.536-.328.016-.016.04-.024.056-.04l.016-.016C21.877 20.057 24 16.28 24 12c0-6.627-5.373-12-12-12z',
  source: '',
  hex: 'FF9900',
} satisfies SimpleIcon

const siMake = {
  title: 'Make',
  slug: 'make',
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 1.97a3.155 3.155 0 00-4.456 0l-1.97-1.97a5.728 5.728 0 018.396 0zm-2.788 7.537a3.155 3.155 0 01-4.456 0l-1.97 1.97a5.728 5.728 0 008.396 0l-1.97-1.97z"/></svg>',
  path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 1.97a3.155 3.155 0 00-4.456 0l-1.97-1.97a5.728 5.728 0 018.396 0zm-2.788 7.537a3.155 3.155 0 01-4.456 0l-1.97 1.97a5.728 5.728 0 008.396 0l-1.97-1.97z',
  source: '',
  hex: '6D00CC',
} satisfies SimpleIcon

const siGoHighLevel = {
  title: 'GoHighLevel',
  slug: 'gohighlevel',
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
  path: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  source: '',
  hex: '006AFF',
} satisfies SimpleIcon

const siKajabi = {
  title: 'Kajabi',
  slug: 'kajabi',
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z"/></svg>',
  path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z',
  source: '',
  hex: '2C6BFF',
} satisfies SimpleIcon

const siKarta = {
  title: 'Karta',
  slug: 'karta',
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.5L18.5 7 12 10.25 5.5 7 12 4.5z"/></svg>',
  path: 'M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.5L18.5 7 12 10.25 5.5 7 12 4.5z',
  source: '',
  hex: 'FF6B00',
} satisfies SimpleIcon

const iconMap: Record<string, SimpleIcon> = {
  React: siReact,
  TypeScript: siTypescript,
  Tailwind: siTailwindcss,
  'Node.js': siNodedotjs,
  Express: siExpress,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  Supabase: siSupabase,
  PHP: siPhp,
  Laravel: siLaravel,
  Firebase: siFirebase,
  GoHighLevel: siGoHighLevel,
  HubSpot: siHubspot,
  Kajabi: siKajabi,
  Karta: siKarta,
  Hostinger: siHostinger,
  AWS: siAWS,
  Render: siRender,
  Vercel: siVercel,
  Vite: siVite,
  GitHub: siGithub,
  Make: siMake,
  n8n: siN8n,
  'React Native': siReact,
  Flutter: siFlutter,
  Dart: siDart,
  HTML: siHtml5,
  CSS: siCss,
  JavaScript: siJavascript,
  Java: siJava,
}

const stacks = {
  frontend: ['React', 'TypeScript', 'Tailwind', 'HTML', 'CSS', 'JavaScript'],
  mobile: ['React Native', 'Flutter', 'Dart'],
  backend: ['Node.js', 'Express', 'PHP', 'Laravel', 'Java'],
  databases: ['MySQL', 'PostgreSQL', 'Supabase', 'Firebase'],
  crm: ['GoHighLevel', 'HubSpot', 'Kajabi', 'Karta'],
  deployment: ['Hostinger', 'AWS', 'Render', 'Vercel'],
  tools: ['Vite', 'GitHub'],
  automation: ['Make', 'n8n'],
}

function TechIcon({ name, icon }: { name: string; icon: SimpleIcon }) {
  // These logos have dark brand colors - use white instead
  const darkLogos = ['Render', 'Vercel', 'GitHub', 'Express']
  const brandColor = darkLogos.includes(name) ? '#FFFFFF' : `#${icon.hex}`
  return (
    <div
      key={name}
      className="group flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 transition-all hover:border-white/30 hover:bg-white/10"
      title={name}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="h-7 w-7 transition-transform group-hover:scale-110"
        style={{ fill: brandColor }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon.path} />
      </svg>
      <span className="text-xs text-white/80">
        {name}
      </span>
    </div>
  )
}

export function TechGalaxies() {
  return (
    <section id="skills" className="relative overflow-hidden bg-black py-20 text-white" data-reveal>
      {/* Unique dark gray to black gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black" />
      
      {/* Metal panel lines */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-slate-600/20 to-transparent" />
        <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-slate-600/20 to-transparent" />
      </div>
      
      {/* Window to space - left side */}
      <div className="absolute left-5 top-24 h-40 w-40 md:h-56 md:w-56">
        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/10 bg-black shadow-[0_0_30px_rgba(34,211,238,0.2)]">
          {/* Stars */}
          <div className="absolute inset-0">
            {miniStars.map((s) => (
              <div
                key={s.id}
                className="absolute h-1 w-1 rounded-full bg-white"
                style={s.style}
              />
            ))}
          </div>
          {/* Planet */}
          <div className="absolute bottom-1/3 right-1/4 h-6 w-6 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-600/40 blur-sm" />
        </div>
        <div className="absolute -inset-2 -z-10 rounded-full bg-cyan-400/20 blur-xl" />
      </div>

      {/* Sci-fi corner accents */}
      <div className="absolute left-5 top-5 h-16 w-16 border-l-2 border-t-2 border-cyan-400/50" />
      <div className="absolute bottom-5 right-5 h-16 w-16 border-b-2 border-r-2 border-cyan-400/50" />

      {/* Lightsaber borders */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8),0_0_20px_rgba(34,211,238,0.6)]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold text-white">Technology Galaxies</h2>
        <p className="mt-4 max-w-3xl text-white/60">
          A curated snapshot of the stacks I use to build apps, integrations, and automations.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(stacks).map(([k, items]) => (
            <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-sm">
              <div className="font-medium capitalize text-white">{k}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((t) => (
                  <TechIcon key={t} name={t} icon={iconMap[t]} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
