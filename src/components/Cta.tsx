import './Cta.css'

export function Cta() {
  return (
    <section
      className="cta"
      id="contact"
      aria-labelledby="cta-title"
    >
      <div className="cta__inner">
        <p className="section-label">
          Contact
        </p>

        <h2
          id="cta-title"
          className="cta__title"
        >
          Ready to start your project?
        </h2>

        <p className="cta__text">
          Tell us what you are building. We will help define the right technical
          approach and a clear path forward.
        </p>

        <a
          href="mailto:hello@meravin.com"
          className="cta__button"
        >
          Start Project
        </a>
      </div>
    </section>
  )
}
