import { useTranslation } from "react-i18next";

import CaseItem from "./CaseItem";
import { projects } from "../data/projects";
import "./Cases.css";

export function Cases() {
  const { t } = useTranslation();

  return (
    <section className="cases" id="cases" aria-labelledby="cases-title">
      <div className="cases__inner">
        <header className="cases__intro">
          <p className="section-label">{t("projects.label")}</p>

          <h2 id="cases-title" className="section-title">
            {t("projects.title")}
          </h2>

          <p className="section-lead">{t("projects.lead")}</p>
        </header>

        <ul className="cases__list">
          {projects.map((project) => (
            <li
              key={project.id}
              className={
                project.featured
                  ? "cases__item cases__item--featured"
                  : "cases__item"
              }
            >
              <CaseItem project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
