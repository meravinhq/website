import { CaseItem } from './CaseItem'
import type { CaseItemProps } from './CaseItem'
import './Cases.css'

type CaseStudy = CaseItemProps

const cases: CaseStudy[] = [
  {
    category: 'Operations',
    title: 'Internal workflow platform',
    description:
      'A custom system that replaced fragmented tools and reduced manual processing across teams.',
  },
  {
    category: 'Product',
    title: 'Customer-facing web application',
    description:
      'A reliable product experience engineered for clarity, performance, and long-term iteration.',
  },
  {
    category: 'Automation',
    title: 'Process automation layer',
    description:
      'Connected systems and repeatable workflows that cut operational overhead without sacrificing control.',
  },
  {
    category: 'Infrastructure',
    title: 'Business systems modernization',
    description:
      'A maintainable foundation that improved stability and made future development more predictable.',
  },
]

export function Cases() {
  return (
    <section
      className="cases"
      id="cases"
      aria-labelledby="cases-title"
    >
      <div className="cases__inner">
        <header className="cases__intro">
          <p className="section-label">
            Cases
          </p>

          <h2
            id="cases-title"
            className="section-title"
          >
            Selected work shaped by business outcomes.
          </h2>

          <p className="section-lead">
            Representative engagements focused on reliability, practical
            delivery, and systems that remain valuable over time.
          </p>
        </header>

        <ul className="cases__grid">
          {cases.map((item) => (
            <li
              key={item.title}
              className="cases__item"
            >
              <CaseItem
                category={item.category}
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
