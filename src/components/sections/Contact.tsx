import { Button } from '@/components/ui/button'

export function Contact() {
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
        {/* Outer Portal Ring */}
        <div className="relative mx-auto aspect-square max-w-lg">
          {/* Glowing outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.3),inset_0_0_60px_rgba(34,211,238,0.1)]" />
          
          {/* Rotating ring segments */}
          <div className="absolute inset-2 rounded-full border-2 border-dashed border-cyan-400/20 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-4 rounded-full border border-cyan-400/10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          
          {/* Portal inner glow */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-purple-600/20 blur-xl" />
          
          {/* Vortex effect */}
          <div className="absolute inset-12 rounded-full bg-gradient-to-r from-cyan-400/10 via-blue-500/20 to-cyan-400/10" />
          
          {/* Portal center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <div className="mb-4 text-4xl">🌀</div>
            <h2 className="text-2xl font-bold tracking-wider uppercase text-cyan-100">Contact Portal</h2>
            <p className="mt-3 max-w-xs text-sm text-cyan-200/60">
              Establish connection. Send transmission through the gateway.
            </p>
            
            <div className="mt-6 flex flex-col gap-3">
              <Button 
                asChild
                className="rounded-full bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                <a href="mailto:tolentinochristian89@gmail.com">📡 Open Channel</a>
              </Button>
              <div className="flex gap-3">
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
                  <a href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Portal corner markers */}
          <div className="absolute -left-2 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <div className="absolute -right-2 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <div className="absolute left-1/2 -top-2 h-6 w-6 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <div className="absolute left-1/2 -bottom-2 h-6 w-6 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
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
