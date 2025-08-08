import { useEffect, useState } from 'react'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/70 border-b border-slate-800/60' : ''}`}>
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
          <a href="#contact" className="btn-primary">Contact Us</a>
        </div>
      </div>
    </header>
  )
}