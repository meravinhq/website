import './About.css'

type Principle = {
  title: string
  description: string
}

const principles: Principle[] = [
  {
    title: 'Reliability first',
    description:
      'Systems are designed to remain stable, understandable, and dependable under real business conditions.',
  },
  {
    title: 'Long-term ownership',
    description:
      'We build with maintainability in mind so products can evolve without accumulating unnecessary complexity.',
  },
  {
    title: 'Clear engineering',
    description:
      'Technical decisions stay practical, transparent, and aligned with measurable business priorities.',
  },
]

export function About() {
  return (
    <section
      className="about"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about__inner">
        <header className="about__intro">
          <p className="section-label">
            About
          </p>

          <h2
            id="about-title"
            className="section-title"
          >
            Software engineering with a long-term mindset.
          </h2>

          <p className="section-lead">
            MERAVIN develops modern web applications, business systems,
            automation solutions, and digital products with a focus on
            reliability, maintainability, and lasting value.
          </p>
        </header>

        <ul className="about__list">
          {principles.map((principle) => (
            <li
              key={principle.title}
              className="about__item"
            >
              <h3 className="about__item-title">
                {principle.title}
              </h3>

              <p className="about__item-description">
                {principle.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
