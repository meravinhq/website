import { useTranslation } from "react-i18next";

import "./Hero.css";

export function Hero() {
  const { t } = useTranslation();
  const titleLines = t("hero.titleLines", { returnObjects: true }) as string[];
  const capabilities = t("hero.capabilities", { returnObjects: true }) as string[];

  return (
    <section className="hero hero--loaded" aria-labelledby="hero-title">
      <div className="hero__ambient" aria-hidden="true" />

      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">{t("hero.eyebrow")}</span>

          <h1 id="hero-title" className="hero__title">
            {titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <p className="hero__description">{t("hero.description")}</p>

          <div className="hero__actions">
            <a href="#contact" className="hero__button hero__button--primary">
              {t("cta.discuss")}
            </a>

            <a href="#cases" className="hero__button hero__button--secondary">
              {t("cta.work")}
            </a>
          </div>

          <ul className="hero__trust">
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
