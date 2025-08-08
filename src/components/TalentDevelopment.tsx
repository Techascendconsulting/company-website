const PROGRAMS = [
  {
    role: 'Business Analyst (BA)',
    points: ['Requirements & discovery', 'Process modelling', 'Stakeholder management']
  },
  {
    role: 'Project Manager (PM)',
    points: ['Planning & governance', 'Delivery leadership', 'Risk & dependency management']
  },
  {
    role: 'Product Owner (PO)',
    points: ['Backlog strategy', 'Outcome-first delivery', 'Customer value']
  },
  {
    role: 'Scrum Master (SM)',
    points: ['Team facilitation', 'Continuous improvement', 'Metrics that matter']
  },
]

export default function TalentDevelopment() {
  return (
    <section id="talent" className="section bg-slate-950/60">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="section-title">Talent Development</h2>
          <a href="#apply" className="btn-primary">Apply Now</a>
        </div>
        <p className="text-muted max-w-3xl">
          Our accelerated programs combine structured learning with mentored, hands-on experience on live projects. Graduates gain the competencies, confidence, and portfolio needed to thrive in modern delivery teams.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {PROGRAMS.map((p) => (
            <div key={p.role} className="card h-full">
              <h3 className="text-xl font-medium">{p.role}</h3>
              <ul className="mt-3 space-y-2 text-muted">
                {p.points.map((pt) => (
                  <li key={pt}>• {pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}