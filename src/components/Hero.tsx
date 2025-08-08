export default function Hero() {
  return (
    <section id="home" className="section bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container-page grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Consulting meets <span className="text-accent">Talent Development</span>
          </h1>
          <p className="text-lg text-muted max-w-prose">
            We blend innovative technology consulting with an industry-leading talent incubator. From digital transformation to training future BA, PM, PO, and SM professionals—Tech Ascend equips teams to deliver, scale, and lead.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#services" className="btn-primary">Explore Services</a>
            <a href="#talent" className="btn-secondary">View Training Programs</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="card">
            <p className="text-sm text-muted">Consulting Focus</p>
            <p className="mt-2 text-xl">Agile Delivery • Product • BA • PM</p>
          </div>
          <div className="card">
            <p className="text-sm text-muted">Talent Engine</p>
            <p className="mt-2 text-xl">Work Experience • Coaching • Placement</p>
          </div>
          <div className="card col-span-2">
            <p className="text-sm text-muted">Industries</p>
            <p className="mt-2 text-xl">Financial Services, Public Sector, Tech Startups, Energy</p>
          </div>
        </div>
      </div>
    </section>
  )
}