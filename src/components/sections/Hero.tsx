import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)
  const planetsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const stars = starsRef.current
    const planets = planetsRef.current
    
    if (!section || !stars || !planets) return

    const shiningStars = stars.querySelectorAll('.shining-star')
    const meteors = stars.querySelectorAll('.meteor')
    const planetElements = planets.querySelectorAll('.planet')

    shiningStars.forEach((star) => {
      const el = star as HTMLElement
      
      // Random scroll burst direction
      const xDir = Math.random() > 0.5 ? 1 : -1
      const yDir = Math.random() > 0.5 ? 1 : -1
      const xMove = (Math.random() * 80 + 30) * xDir
      const yMove = (Math.random() * 80 + 30) * yDir
      
      gsap.fromTo(el, 
        { x: 0, y: 0 },
        {
          x: `${xMove}vw`,
          y: `${yMove}vh`,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.3,
          },
        }
      )
    })
    
    meteors.forEach((meteor) => {
      const el = meteor as HTMLElement
      
      gsap.fromTo(el,
        { x: 0, y: 0 },
        {
          x: '150vw',
          y: '150vh',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.1,
          },
        }
      )
    })

    planetElements.forEach((planet, i) => {
      const speed = 0.3 + (i % 4) * 0.15
      const direction = i % 2 === 0 ? 1 : -1
      
      gsap.to(planet, {
        y: `${150 * speed * direction}vh`,
        x: `${50 * (i % 3 - 1)}vw`,
        rotation: 45 * direction,
        scale: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section) {
          trigger.kill()
        }
      })
    }
  }, [])

  const stars = Array.from({ length: 300 }, (_, i) => {
    const isMeteor = Math.random() > 0.95 // 5% are meteors
    return {
      id: i,
      type: isMeteor ? 'meteor' : 'shining',
      size: isMeteor ? 2 : Math.random() > 0.9 ? 3 : Math.random() > 0.6 ? 2 : 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: 0.3 + Math.random() * 0.7,
      duration: isMeteor ? 1 + Math.random() * 2 : 2 + Math.random() * 4,
      delay: isMeteor ? Math.random() * 10 : -Math.random() * 10,
      angle: Math.random() * 45 + 15, // 15-60 degrees for meteors
    }
  })

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen overflow-hidden bg-black" data-reveal>
      {/* Animated stars background */}
      <div ref={starsRef} className="absolute inset-0">
        {stars.map((star) =>
          star.type === 'meteor' ? (
            <div
              key={star.id}
              className="meteor absolute will-change-transform"
              style={{
                width: `${star.size * 40}px`,
                height: `${star.size}px`,
                top: star.top,
                left: star.left,
                opacity: 0,
                background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.8), rgba(34, 211, 238, 0.4))',
                borderRadius: '50%',
                transform: `rotate(${star.angle}deg)`,
                animation: `meteorShoot ${star.duration}s linear infinite`,
                animationDelay: `${star.delay}s`,
              }}
            />
          ) : (
            <div
              key={star.id}
              className="shining-star absolute rounded-full bg-cyan-300 will-change-transform"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: star.top,
                left: star.left,
                opacity: star.opacity,
                animation: `twinkle ${star.duration}s ease-in-out infinite`,
                animationDelay: `${star.delay}s`,
                boxShadow: star.size >= 2 ? `0 0 ${star.size * 2}px rgba(34, 211, 238, 0.6)` : 'none',
              }}
            />
          )
        )}
      </div>

      {/* Planets container */}
      <div ref={planetsRef} className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Giant purple planet - far right */}
        <div
          className="planet absolute h-96 w-96 rounded-full bg-gradient-to-br from-cosmic-nebula via-cosmic-cosmicDust to-cosmic-void blur-md opacity-80"
          style={{
            top: '5%',
            right: '-10%',
          }}
        />

        {/* Large blue planet - bottom left */}
        <div
          className="planet absolute h-56 w-56 rounded-full bg-gradient-to-br from-cosmic-web via-cosmic-deep to-cosmic-void blur-md opacity-70"
          style={{
            bottom: '10%',
            left: '-5%',
          }}
        />

        {/* Medium orange/automation planet - top left */}
        <div
          className="planet absolute h-32 w-32 rounded-full bg-gradient-to-br from-cosmic-automation via-cosmic-nebula to-cosmic-void blur-sm opacity-60"
          style={{
            top: '20%',
            left: '15%',
          }}
        />

        {/* Teal planet - mid right */}
        <div
          className="planet absolute h-20 w-20 rounded-full bg-gradient-to-br from-cosmic-mobile via-cosmic-deep to-cosmic-void blur-sm opacity-50"
          style={{
            top: '55%',
            right: '20%',
          }}
        />

        {/* Green data stream planet - bottom right */}
        <div
          className="planet absolute h-28 w-28 rounded-full bg-gradient-to-br from-cosmic-dataStream via-cosmic-deep to-cosmic-void blur-sm opacity-40"
          style={{
            bottom: '25%',
            right: '8%',
          }}
        />

        {/* Small cyan star planet - upper mid */}
        <div
          className="planet absolute h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 via-cosmic-web to-cosmic-void opacity-90"
          style={{
            top: '10%',
            left: '45%',
          }}
        />

        {/* Tiny pink planet - lower left */}
        <div
          className="planet absolute h-8 w-8 rounded-full bg-gradient-to-br from-cosmic-automation to-cosmic-void opacity-70"
          style={{
            bottom: '35%',
            left: '25%',
          }}
        />

        {/* Deep space dark planet - mid left */}
        <div
          className="planet absolute h-16 w-16 rounded-full bg-gradient-to-br from-cosmic-cosmicDust via-cosmic-deep to-cosmic-void blur-sm opacity-50"
          style={{
            top: '65%',
            left: '5%',
          }}
        />
      </div>

      {/* CSS animations for stars */}
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
        
        @keyframes meteorShoot {
          0% {
            opacity: 0;
            transform: translateX(0) translateY(0) rotate(var(--angle, 45deg));
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(300px) translateY(300px) rotate(var(--angle, 45deg));
          }
        }
      `}</style>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-6 px-4 py-20 text-center">
        <div className="max-w-3xl">
          <div className="text-sm font-medium tracking-wide text-white/70">Prince Christian Tolentino</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            Full-Stack Developer for Integrations & Automation
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-xl">
            I build web and mobile apps, connect CRMs and SaaS tools, and automate workflows that keep data clean and teams fast.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {['React', 'TypeScript', 'Node.js', 'Flutter', 'PostgreSQL', 'GoHighLevel', 'Make', 'n8n'].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href="#contact">Contact me</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#projects">View projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
