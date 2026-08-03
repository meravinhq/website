import './ServiceItem.css'

export type ServiceItemProps = {
  title: string
  description: string
}

export function ServiceItem({
  title,
  description,
}: ServiceItemProps) {
  return (
    <article className="service-item">
      <h3 className="service-item__title">
        {title}
      </h3>

      <p className="service-item__description">
        {description}
      </p>
    </article>
  )
}
