export default function WorkExperience() {
  return (
    <section id="work-exp" className="section">
      <div className="container-page grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="section-title">Work Experience Program</h2>
          <p className="text-muted">
            Trainees embed into real delivery teams, contributing to live outcomes under experienced mentorship. We emphasize practical, portfolio-ready experience—so graduates are truly job-ready.
          </p>
          <ul className="grid gap-3 text-muted">
            <li className="card">On-project mentoring and shadowing</li>
            <li className="card">Practical deliverables: user stories, roadmaps, dashboards</li>
            <li className="card">Career support: CV review, interview coaching, communities of practice</li>
          </ul>
        </div>
        <div className="card self-start">
          <h3 className="text-xl font-medium">Program Outcomes</h3>
          <ul className="mt-3 space-y-2 text-muted">
            <li>Verified portfolio of work</li>
            <li>Experience with agile ways of working</li>
            <li>Confidence operating in cross-functional teams</li>
          </ul>
        </div>
      </div>
    </section>
  )
}