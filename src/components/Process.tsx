import { ProcessStep } from './ProcessStep'
import type { ProcessStepProps } from './ProcessStep'
import './Process.css'

type Step = ProcessStepProps

const steps: Step[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We clarify goals, constraints, and success criteria before any technical decisions are made.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Architecture and product direction are defined for clarity, scalability, and long-term ownership.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Systems are engineered with disciplined execution, clean code, and continuous validation.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'We launch with stability in mind and leave behind maintainable foundations for future growth.',
  },
]

export function Process() {
  return (
    <section
      className="process"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="process__inner">
        <header className="process__intro">
          <p className="section-label">
            Process
          </p>

          <h2
            id="process-title"
            className="section-title"
          >
            A clear path from problem to production.
          </h2>

          <p className="section-lead">
            A structured approach that reduces risk and keeps delivery aligned
            with business priorities.
          </p>
        </header>

        <ol className="process__list">
          {steps.map((step) => (
            <li
              key={step.number}
              className="process__item"
            >
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
