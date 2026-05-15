import { Button } from '@/components/ui/button'
import { useMemo, useState } from 'react'

export function Contact() {
  const endpointUrl = useMemo(() => import.meta.env.VITE_CONTACT_FORM_URL as string | undefined, [])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'missing_endpoint'>('idle')

  const isSubmitting = status === 'submitting'

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!endpointUrl) {
      setStatus('missing_endpoint')
      return
    }

    setStatus('submitting')
    try {
      const body = new URLSearchParams({
        firstName,
        lastName,
        email,
        message,
      })

      const res = await fetch(endpointUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body,
      })

      if (!res.ok) {
        setStatus('error')
        return
      }

      setFirstName('')
      setLastName('')
      setEmail('')
      setMessage('')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-24 text-white">
      {/* Deep space background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black" />
      
      {/* Moving spaceship */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="spaceship absolute">
          {/* UFO SVG */}
          <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-80">
            {/* Tractor beam */}
            <path d="M35 50 L25 90 L75 90 L65 50 Z" fill="url(#beamGradient)" opacity="0.3">
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
            </path>
            {/* UFO dome */}
            <ellipse cx="50" cy="20" rx="25" ry="15" fill="#22d3ee" opacity="0.6">
              <animate attributeName="opacity" values="0.5;0.7;0.5" dur="3s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="50" cy="22" rx="20" ry="12" fill="#67e8f9" opacity="0.4" />
            {/* UFO body - main saucer */}
            <ellipse cx="50" cy="35" rx="45" ry="18" fill="url(#ufoGradient)" />
            {/* UFO rim lights with pulse */}
            <circle cx="20" cy="35" r="4" fill="#22d3ee" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="35" cy="42" r="4" fill="#22d3ee" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="45" r="4" fill="#22d3ee" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="65" cy="42" r="4" fill="#22d3ee" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="35" r="4" fill="#22d3ee" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
            </circle>
            {/* UFO outer glow */}
            <ellipse cx="50" cy="35" rx="55" ry="25" fill="none" stroke="#22d3ee" strokeWidth={2} opacity={0.2}>
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
            </ellipse>
            <defs>
              <linearGradient id="ufoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="50%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          {/* Engine trail */}
          <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 h-1 w-20 bg-gradient-to-r from-cyan-400/80 to-transparent blur-sm" />
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes randomFly {
          0% {
            left: 10%;
            top: 20%;
            transform: rotate(5deg);
          }
          20% {
            left: 70%;
            top: 60%;
            transform: rotate(-10deg);
          }
          40% {
            left: 30%;
            top: 80%;
            transform: rotate(15deg);
          }
          60% {
            left: 80%;
            top: 30%;
            transform: rotate(-5deg);
          }
          80% {
            left: 50%;
            top: 50%;
            transform: rotate(8deg);
          }
          100% {
            left: 10%;
            top: 20%;
            transform: rotate(5deg);
          }
        }
        .spaceship {
          animation: randomFly 20s ease-in-out infinite;
        }
      `}</style>

      {/* Portal entrance border */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8),0_0_20px_rgba(34,211,238,0.6)]" />
      
      {/* Portal exit border */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8),0_0_20px_rgba(34,211,238,0.6)]" />

      {/* Portal Container */}
      <div className="relative mx-auto max-w-4xl px-4">
        {/* Portal Frame */}
        <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-black/40 p-8 shadow-[0_0_60px_rgba(34,211,238,0.25),inset_0_0_60px_rgba(34,211,238,0.08)] backdrop-blur-sm sm:p-10">
          {/* Glowing outer frame */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-cyan-400/20" />
          
          {/* Rotating segments */}
          <div
            className="pointer-events-none absolute inset-4 rounded-3xl border-2 border-dashed border-cyan-400/15 animate-spin"
            style={{ animationDuration: '20s' }}
          />
          <div
            className="pointer-events-none absolute inset-8 rounded-3xl border border-cyan-400/10 animate-spin"
            style={{ animationDuration: '15s', animationDirection: 'reverse' }}
          />
          
          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-12 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-600/25 to-purple-600/20 blur-xl" />
          
          {/* Vortex wash */}
          <div className="pointer-events-none absolute inset-16 rounded-3xl bg-gradient-to-r from-cyan-400/10 via-blue-500/15 to-cyan-400/10" />
          
          {/* Portal content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <div className="mb-4 text-4xl">🌀</div>
            <h2 className="text-2xl font-bold tracking-wider uppercase text-cyan-100">Contact Portal</h2>
            <p className="mt-3 max-w-xs text-sm text-cyan-200/60">
              Establish connection. Send transmission through the gateway.
            </p>
            
            <div className="mt-6 flex w-full max-w-sm flex-col gap-3">
              <form onSubmit={onSubmit} className="flex flex-col gap-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    value={firstName}
                    onChange={(ev) => setFirstName(ev.target.value)}
                    required
                    placeholder="First name"
                    autoComplete="given-name"
                    className="h-11 rounded-full border border-cyan-400/25 bg-black/50 px-4 text-sm text-white placeholder:text-cyan-200/35 outline-none ring-1 ring-transparent transition focus:border-cyan-400/45 focus:ring-cyan-400/20"
                  />
                  <input
                    value={lastName}
                    onChange={(ev) => setLastName(ev.target.value)}
                    required
                    placeholder="Last name"
                    autoComplete="family-name"
                    className="h-11 rounded-full border border-cyan-400/25 bg-black/50 px-4 text-sm text-white placeholder:text-cyan-200/35 outline-none ring-1 ring-transparent transition focus:border-cyan-400/45 focus:ring-cyan-400/20"
                  />
                </div>
                <input
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  required
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  className="h-11 rounded-full border border-cyan-400/25 bg-black/50 px-4 text-sm text-white placeholder:text-cyan-200/35 outline-none ring-1 ring-transparent transition focus:border-cyan-400/45 focus:ring-cyan-400/20"
                />
                <textarea
                  value={message}
                  onChange={(ev) => setMessage(ev.target.value)}
                  required
                  placeholder="Message"
                  rows={4}
                  className="resize-none rounded-3xl border border-cyan-400/25 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-cyan-200/35 outline-none ring-1 ring-transparent transition focus:border-cyan-400/45 focus:ring-cyan-400/20"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 rounded-full bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending…' : 'Send Transmission'}
                </Button>

                {status === 'success' ? (
                  <p className="text-xs tracking-wide text-cyan-200/70">Transmission received.</p>
                ) : null}
                {status === 'error' ? (
                  <p className="text-xs tracking-wide text-red-200/70">Transmission failed. Try again.</p>
                ) : null}
                {status === 'missing_endpoint' ? (
                  <p className="text-xs tracking-wide text-amber-200/80">Form endpoint not configured yet.</p>
                ) : null}
              </form>

              <div className="flex flex-wrap justify-center gap-3">
                <Button 
                  asChild 
                  variant="outline"
                  size="sm"
                  className="rounded-full border-cyan-400/30 bg-black/50 text-cyan-300 hover:bg-cyan-400/10"
                >
                  <a href="https://github.com/Prince0643" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  size="sm"
                  className="rounded-full border-cyan-400/30 bg-black/50 text-cyan-300 hover:bg-cyan-400/10"
                >
                  <a href="https://www.linkedin.com/in/prince-christian-tolentino-087128268/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  size="sm"
                  className="rounded-full border-cyan-400/30 bg-black/50 text-cyan-300 hover:bg-cyan-400/10"
                >
                  <a href="https://www.facebook.com/princechristian.tolentino.7" target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  size="sm"
                  className="rounded-full border-cyan-400/30 bg-black/50 text-cyan-300 hover:bg-cyan-400/10"
                >
                  <a href="https://www.instagram.com/xtian.env" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Portal corner markers */}
          <div className="pointer-events-none absolute left-4 top-4 h-4 w-4 rounded bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <div className="pointer-events-none absolute right-4 top-4 h-4 w-4 rounded bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <div className="pointer-events-none absolute left-4 bottom-4 h-4 w-4 rounded bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <div className="pointer-events-none absolute right-4 bottom-4 h-4 w-4 rounded bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        </div>

        {/* Portal status indicators */}
        <div className="mt-12 flex justify-center gap-8 text-xs text-cyan-400/50 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            System Online
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Gateway Active
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            Awaiting Transmission
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin linear infinite;
        }
      `}</style>
    </section>
  )
}
