import './ProcessStep.css'

export type ProcessStepProps = {
  number: string
  title: string
  description: string
}

export function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <article className="process-step">
      <span
        className="process-step__number"
        aria-hidden="true"
      >
        {number}
      </span>

      <div className="process-step__content">
        <h3 className="process-step__title">
          {title}
        </h3>

        <p className="process-step__description">
          {description}
        </p>
      </div>
    </article>
  )
}
