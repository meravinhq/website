import './Hero.css'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        <div className="hero__eyebrow">
          Digital Product Engineering
        </div>

        <h1 id="hero-title" className="hero__title">
          Engineering reliable
          <br />
          digital products
          <br />
          for business.
        </h1>

        <p className="hero__description">
          We design and develop scalable web applications, business systems,
          and automation solutions engineered for long-term value.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="hero__button hero__button--primary">
            Start Project
          </a>

          <a href="#process" className="hero__button hero__button--secondary">
            How We Work
          </a>
        </div>

        <ul className="hero__trust">
          <li>Reliable engineering</li>
          <li>Transparent process</li>
          <li>Long-term partnership</li>
        </ul>
      </div>
    </section>
  )
}