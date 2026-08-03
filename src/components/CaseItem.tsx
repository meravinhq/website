import './CaseItem.css'

export type CaseItemProps = {
  title: string
  category: string
  description: string
}

export function CaseItem({
  title,
  category,
  description,
}: CaseItemProps) {
  return (
    <article className="case-item">
      <p className="case-item__category">
        {category}
      </p>

      <h3 className="case-item__title">
        {title}
      </h3>

      <p className="case-item__description">
        {description}
      </p>
    </article>
  )
}
