import { useState } from 'react'
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-1/2 top-4 z-50 -translate-x-1/2" data-reveal>
      <nav className="relative flex items-center gap-1 rounded-full border border-cyan-400/30 bg-black/80 px-2 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)]">
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
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-lg text-cyan-200/80 transition-colors hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-1 hidden h-4 w-px bg-cyan-400/30 md:block" />

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-full bg-cyan-400 text-black hover:bg-cyan-300">
            <a href="#contact">Contact</a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-black/40 text-cyan-100 transition-colors hover:bg-cyan-400/10 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-200 ${
                isOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-200 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform duration-200 ${
                isOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>

        {/* Mobile dropdown */}
        {isOpen ? (
          <div className="absolute left-0 right-0 top-[calc(100%+10px)] md:hidden">
            <div className="rounded-2xl border border-cyan-400/30 bg-black/90 p-2 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.18)]">
              <div className="grid gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3 text-base text-cyan-100/90 transition-colors hover:bg-cyan-400/10 hover:text-cyan-100"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <div className="mt-2 border-t border-white/10 pt-2">
                <Button
                  asChild
                  size="sm"
                  className="w-full rounded-xl bg-cyan-400 text-black hover:bg-cyan-300"
                >
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Contact
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  )
}
