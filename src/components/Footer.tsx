export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60">
      <div className="container-page py-10 text-sm text-muted flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Tech Ascend Consultancy Limited. All rights reserved.</p>
        <nav className="flex gap-6">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#talent" className="hover:text-foreground">Talent</a>
          <a href="#work-exp" className="hover:text-foreground">Work Experience</a>
          <a href="#stories" className="hover:text-foreground">Success Stories</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  )
}