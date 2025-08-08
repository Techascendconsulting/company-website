export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60">
      <div className="container-page py-12 grid gap-10 md:grid-cols-4">
        <div>
          <p className="font-semibold tracking-tight text-lg">Tech <span className="text-accent">Ascend</span></p>
          <p className="mt-2 text-sm text-muted max-w-xs">Consulting and talent development for modern delivery teams.</p>
        </div>
        <nav className="grid gap-2 text-sm">
          <p className="font-medium text-foreground">Company</p>
          <a href="#services" className="text-muted hover:text-foreground">Services</a>
          <a href="#talent" className="text-muted hover:text-foreground">Talent</a>
          <a href="#work-exp" className="text-muted hover:text-foreground">Work Experience</a>
        </nav>
        <nav className="grid gap-2 text-sm">
          <p className="font-medium text-foreground">Resources</p>
          <a href="#stories" className="text-muted hover:text-foreground">Success Stories</a>
          <a href="#contact" className="text-muted hover:text-foreground">Contact</a>
        </nav>
        <div className="text-sm text-muted">
          <p>© {new Date().getFullYear()} Tech Ascend Consultancy Limited.</p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}