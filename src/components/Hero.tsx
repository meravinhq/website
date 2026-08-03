import './Hero.css'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <a href="/" className="hero__brand" aria-label="MERAVIN home">
          MERAVIN
        </a>

        <h1 id="hero-title" className="hero__headline">
          Engineering reliable digital products for business.
        </h1>

        <p className="hero__subheadline">
          Custom web applications, automation, and business systems engineered
          for long-term value.
        </p>

        <div className="hero__actions">
          <a
            className="hero__button hero__button--primary"
            href="#contact"
          >
            Start a project
          </a>

          <a
            className="hero__button hero__button--secondary"
            href="#services"
          >
            Explore services
          </a>
        </div>
      </div>
    </section>
  )
}