import { Button } from '@/components/ui/button'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#integrations', label: 'Integrations' },
  { href: '#automation', label: 'Automation' },
]

export function Header() {
  return (
    <header className="fixed left-1/2 top-4 z-50 -translate-x-1/2" data-reveal>
      <nav className="flex items-center gap-1 rounded-full border border-cyan-400/30 bg-black/80 px-2 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)]">
        {/* Logo/Name - inside capsule */}
        <a href="#hero" className="hidden whitespace-nowrap px-3 text-xl font-semibold tracking-wide text-cyan-100 lg:block">
          Prince Christian Tolentino
        </a>
        
        {/* Short name for smaller screens */}
        <a href="#hero" className="whitespace-nowrap px-3 text-xl font-semibold tracking-wide text-cyan-100 lg:hidden">
          PCT
        </a>

        {/* Divider */}
        <div className="mx-1 hidden h-4 w-px bg-cyan-400/30 md:block" />

        {/* Nav Links */}
        {links.map((l) => (
          <a 
            key={l.href} 
            href={l.href} 
            className="rounded-full px-3 py-1.5 text-lg text-cyan-200/80 transition-colors hover:bg-cyan-400/10 hover:text-cyan-100"
          >
            {l.label}
          </a>
        ))}

        {/* Divider */}
        <div className="mx-1 h-4 w-px bg-cyan-400/30" />

        {/* Contact Button */}
        <Button 
          asChild 
          size="sm"
          className="rounded-full bg-cyan-400 text-black hover:bg-cyan-300"
        >
          <a href="#contact">Contact</a>
        </Button>
      </nav>
    </header>
  )
}
