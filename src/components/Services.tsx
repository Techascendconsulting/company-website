import { Cog, Rocket, ListChecks, Wrench } from 'lucide-react'

const SERVICES = [
  {
    icon: Rocket,
    title: 'Digital Transformation',
    description: 'Target operating models, change management, and value delivery from discovery to scale.'
  },
  {
    icon: ListChecks,
    title: 'Agile Coaching & Delivery',
    description: 'Scrum, Kanban, and scaled agile coaching with embedded delivery teams and playbooks.'
  },
  {
    icon: Cog,
    title: 'Product & Business Analysis',
    description: 'Outcome-driven product discovery and strong BA capability to shape and de-risk delivery.'
  },
  {
    icon: Wrench,
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
              <s.icon className="size-6 text-accent" />
              <h3 className="mt-3 text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}