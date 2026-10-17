import { useTranslation } from "react-i18next";

import "./About.css";

type PrincipleCopy = {
  title: string;
  description: string;
};

export function About() {
  const { t } = useTranslation();
  const principles = t("about.principles", { returnObjects: true }) as PrincipleCopy[];

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__inner">
        <header className="about__intro">
          <p className="section-label">{t("about.label")}</p>

          <h2 id="about-title" className="section-title">
            {t("about.title")}
          </h2>

          <p className="section-lead">{t("about.lead")}</p>
        </header>

        <ul className="about__list">
          {principles.map((principle) => (
            <li key={principle.title} className="about__item">
              <h3 className="about__item-title">{principle.title}</h3>
              <p className="about__item-description">{principle.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
