export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} prinz</div>
        <div className="flex gap-4">
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
          <a className="hover:text-white" href="#projects">
            Projects
          </a>
        </div>
      </div>
    </footer>
  )
}
