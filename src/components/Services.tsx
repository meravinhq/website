import { useTranslation } from "react-i18next";

import { ServiceItem } from "./ServiceItem";
import "./Services.css";

type ServiceCopy = {
  title: string;
  description: string;
};

export function Services() {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true }) as ServiceCopy[];

  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services__inner">
        <header className="services__intro">
          <p className="section-label">{t("services.label")}</p>

          <h2 id="services-title" className="section-title">
            {t("services.title")}
          </h2>

          <p className="section-lead">{t("services.lead")}</p>

          <a href="#contact" className="services__cta">
            {t("services.cta")}
          </a>
        </header>

        <ul className="services__grid">
          {services.map((service) => (
            <li key={service.title} className="services__item">
              <ServiceItem
                title={service.title}
                description={service.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
