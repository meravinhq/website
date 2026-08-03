import './Hero.css'

export function Hero() {
  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero__inner">
        <p className="hero__brand">
          <span className="hero__brand-text">
            MERAVIN
          </span>
        </p>

        <h1
          id="hero-title"
          className="hero__headline"
        >
          Engineering reliable digital products for business.
        </h1>

        <p className="hero__subheadline">
          Custom web applications, automation and business systems engineered
          for long-term value.
        </p>

        <div className="hero__actions">
          <a
            href="#contact"
            className="hero__button hero__button--primary"
          >
            Start Project
          </a>

          <a
            href="#services"
            className="hero__button hero__button--secondary"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  )
}
