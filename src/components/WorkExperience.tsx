const STEPS = [
  { title: 'Foundation', text: 'Core skills for your chosen path (BA, PM, PO, SM) with assessment and coaching.' },
  { title: 'On-project Delivery', text: 'Embed with a real team to practice agile ways of working and deliver outcomes.' },
  { title: 'Portfolio & Career', text: 'Build case studies, refine your CV, and prepare through interview coaching.' },
]

export default function WorkExperience() {
  return (
    <section id="work-exp" className="section">
      <div className="container-page">
        <h2 className="section-title mb-10">Work Experience Program</h2>
        <div className="relative grid gap-8 md:grid-cols-[280px_1fr]">
          <div className="card h-max">
            <h3 className="text-xl font-medium">Why it works</h3>
            <p className="mt-2 text-muted">Practical, mentored delivery beats theory. We help you ship real work and show it.</p>
            <ul className="mt-4 space-y-2 text-muted text-sm list-disc list-inside">
              <li>Mentors from real delivery teams</li>
              <li>Outcome-first learning</li>
              <li>Career support and community</li>
            </ul>
          </div>
          <ol className="relative border-slate-800/60 md:border-s-l md:ps-8 grid gap-8">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative">
                <div className="md:absolute md:-start-3 md:top-1 size-6 rounded-full bg-accent shadow" />
                <div className="card">
                  <h4 className="text-lg font-medium">{i + 1}. {s.title}</h4>
                  <p className="mt-1 text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}