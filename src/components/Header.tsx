import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Consulting Services' },
  { href: '#talent', label: 'Talent Development' },
  { href: '#work-exp', label: 'Work Experience' },
  { href: '#stories', label: 'Success Stories' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-950/70 border-b border-slate-800/60' : ''}`}>
      <div className="container-page h-16 flex items-center justify-between gap-4">
        <a href="#home" className="font-semibold tracking-tight text-lg">Tech <span className="text-accent">Ascend</span></a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#apply" className="btn-secondary hidden sm:inline-flex">Apply Now</a>
          <a href="#contact" className="btn-primary hidden sm:inline-flex">Contact Us</a>
          <button aria-label="Toggle menu" className="md:hidden rounded-lg border border-slate-800 p-2" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-800/60 bg-slate-950/80 backdrop-blur">
          <div className="container-page py-4 grid gap-4">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-muted hover:text-foreground" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="#apply" className="btn-secondary flex-1">Apply Now</a>
              <a href="#contact" className="btn-primary flex-1">Contact Us</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}