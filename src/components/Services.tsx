import { ServiceItem } from './ServiceItem'
import type { ServiceItemProps } from './ServiceItem'
import './Services.css'

type Service = ServiceItemProps

const services: Service[] = [
  {
    title: 'Web applications',
    description:
      'Custom platforms engineered for performance, clarity, and long-term maintainability.',
  },
  {
    title: 'Business systems',
    description:
      'Internal tools that streamline operations, reduce friction, and support daily work.',
  },
  {
    title: 'Automation',
    description:
      'Reliable process automation that connects data, systems, and teams with precision.',
  },
  {
    title: 'Digital products',
    description:
      'Product engineering focused on stability, usability, and sustainable business growth.',
  },
]

export function Services() {
  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="services__inner">
        <header className="services__intro">
          <p className="section-label">
            Services
          </p>

          <h2
            id="services-title"
            className="section-title"
          >
            Capabilities built for lasting business value.
          </h2>

          <p className="section-lead">
            MERAVIN designs and engineers digital systems with a focus on
            reliability, maintainability, and practical outcomes.
          </p>
        </header>

        <ul className="services__grid">
          {services.map((service) => (
            <li
              key={service.title}
              className="services__item"
            >
              <ServiceItem
                title={service.title}
                description={service.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
