export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-muted">Tell us about your consulting needs or training goals—we’ll get back to you promptly.</p>
          <div className="text-sm text-muted">
            <p>Email: info@techascend.co.uk</p>
            <p>Locations: UK • Remote</p>
          </div>
        </div>
        <form className="card grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm">Name</label>
            <input id="name" required className="rounded-lg bg-slate-900/70 border border-slate-800 px-3 py-2 outline-none focus:ring-2 focus:ring-accent/40" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm">Email</label>
            <input id="email" type="email" required className="rounded-lg bg-slate-900/70 border border-slate-800 px-3 py-2 outline-none focus:ring-2 focus:ring-accent/40" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="msg" className="text-sm">Message</label>
            <textarea id="msg" rows={5} required className="rounded-lg bg-slate-900/70 border border-slate-800 px-3 py-2 outline-none focus:ring-2 focus:ring-accent/40" />
          </div>
          <button className="btn-primary" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}