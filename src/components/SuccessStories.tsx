const STORIES = [
  {
    quote: 'The Tech Ascend program helped me move from theory to delivery. I led discovery conversations and shipped work with confidence.',
    name: 'Amina, Business Analyst'
  },
  {
    quote: 'I transitioned into a Scrum Master role with a strong portfolio and the right coaching. The work experience was a game-changer.',
    name: 'Daniel, Scrum Master'
  },
  {
    quote: 'From zero to product outcomes—Tech Ascend gave me the structure and practical exposure to succeed as a Product Owner.',
    name: 'Priya, Product Owner'
  },
]

export default function SuccessStories() {
  return (
    <section id="stories" className="section bg-slate-950/60">
      <div className="container-page">
        <h2 className="section-title mb-10">Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <figure key={i} className="card">
              <blockquote className="text-lg leading-relaxed">“{s.quote}”</blockquote>
              <div className="mt-4 h-px bg-slate-800/60" />
              <figcaption className="mt-3 text-sm text-muted">— {s.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}