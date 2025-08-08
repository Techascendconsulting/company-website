const SERVICES = [
  {
    title: 'Digital Transformation',
    description: 'Target operating models, change management, and value delivery from discovery to scale.'
  },
  {
    title: 'Agile Coaching & Delivery',
    description: 'Scrum, Kanban, and scaled agile coaching with embedded delivery teams and playbooks.'
  },
  {
    title: 'Product & Business Analysis',
    description: 'Outcome-driven product discovery and strong BA capability to shape and de-risk delivery.'
  },
  {
    title: 'Engineering Enablement',
    description: 'DevEx improvements, CI/CD, and platform practices that accelerate teams safely.'
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="section-title">Consulting Services</h2>
          <a href="#contact" className="btn-secondary">Start a conversation</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="card h-full">
              <h3 className="text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}