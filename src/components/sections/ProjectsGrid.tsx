import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import type { Project } from '@/data/projects'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  projects: Project[]
}

export function ProjectsGrid({ projects }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  const stars = useMemo(() => Array.from({ length: 100 }, (_, i) => i), [])
  const starStyles = useMemo(() => {
    const seeded = (n: number) => {
      const x = Math.sin(n * 9999) * 10000
      return x - Math.floor(x)
    }

    return stars.map((i) => {
      const top = seeded(i + 1) * 100
      const left = seeded(i + 2) * 100
      const opacity = 0.2 + seeded(i + 3) * 0.8
      const glow = seeded(i + 4) > 0.9

      return {
        top: `${top}%`,
        left: `${left}%`,
        opacity,
        boxShadow: glow ? '0 0 4px rgba(255,255,255,0.8)' : 'none',
      } as const
    })
  }, [stars])

  useLayoutEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduceMotion(mql.matches)
    onChange()

    if (typeof mql.addEventListener === 'function') mql.addEventListener('change', onChange)
    else mql.addListener(onChange)

    return () => {
      if (typeof mql.removeEventListener === 'function') mql.removeEventListener('change', onChange)
      else mql.removeListener(onChange)
    }
  }, [])

  useLayoutEffect(() => {
    if (reduceMotion) return
    if (!sectionRef.current) return
    if (!trackRef.current) return
    if (projects.length <= 1) return

    const sectionEl = sectionRef.current
    const trackEl = trackRef.current

    const ctx = gsap.context(() => {
      const slideWidthPercent = 42 // 40% width + ~2% gap
      const totalWidthPercent = slideWidthPercent * projects.length
      const scrollDistance = totalWidthPercent - 100 // How much needs to scroll past viewport

      const tween = gsap.to(trackEl, {
        xPercent: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top top',
          end: () => `+=${window.innerWidth * 0.6}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      const slides = Array.from(trackEl.querySelectorAll<HTMLElement>('.project-slide'))
      // No per-slide animations - plain static cards
      void slides

      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
      }
    }, sectionEl)

    return () => ctx.revert()
  }, [projects.length, reduceMotion])

  return (
    <section ref={sectionRef} id="projects" className="relative overflow-hidden bg-black py-20 text-white">
      {/* Deep space background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-black to-black" />
      
      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((i) => (
          <div
            key={i}
            className="absolute h-px w-px rounded-full bg-white"
            style={starStyles[i]}
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

      <div className="relative w-full px-4 md:px-8">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-[0_0_30px_rgba(251,191,36,0.5)]" />
          <h2 className="text-3xl font-semibold text-white">Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Selected work across web apps, mobile products, and systems integration.
          </p>
        </div>

        {reduceMotion ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article 
                key={p.id} 
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-4 pl-6">
                  <div>
                    <h3 className="text-xl font-medium text-white group-hover:text-cyan-300 transition-colors">{p.name}</h3>
                    <div className="mt-1 text-sm text-white/50">{p.year}</div>
                  </div>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    {p.type}
                  </span>
                </div>

                <div className="mt-4 pl-6">
                  <a 
                    href={p.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-xl border border-white/10 bg-black/20 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  >
                    <img
                      src={p.imageSrc}
                      alt={p.name}
                      loading="lazy"
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </a>
                </div>

                <p className="mt-4 pl-6 text-sm text-white/60">{p.description}</p>

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
        ) : (
          <div className="mt-12 overflow-hidden">
            <div ref={trackRef} className="flex will-change-transform">
              {projects.map((p) => (
                <div key={p.id} className="project-slide w-[40%] flex-shrink-0 pr-4">
                  <article 
                    className="project-card group relative h-full w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 md:p-10"
                  >
                    <div className="flex flex-col gap-6 pl-6 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0">
                        <h3 className="text-2xl font-medium text-white transition-colors group-hover:text-cyan-300">{p.name}</h3>
                        <div className="mt-1 text-sm text-white/50">{p.year}</div>
                        <p className="mt-4 text-sm text-white/60">{p.description}</p>
                      </div>
                      <div className="flex items-start justify-between gap-4 md:flex-col md:items-end">
                        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                          {p.type}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 pl-6">
                      <a 
                        href={p.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded-2xl border border-white/10 bg-black/20 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                      >
                        <img
                          src={p.imageSrc}
                          alt={p.name}
                          loading="lazy"
                          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </a>
                    </div>

                    <ul className="mt-6 space-y-2 pl-6 text-sm text-white/50">
                      {p.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center text-sm text-white/40">
              Scroll to explore • {projects.length} projects
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
