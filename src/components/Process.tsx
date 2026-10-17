import { useTranslation } from "react-i18next";

import { ProcessStep } from "./ProcessStep";
import "./Process.css";

type StepCopy = {
  number: string;
  title: string;
  description: string;
};

export function Process() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true }) as StepCopy[];

  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <div className="process__inner">
        <header className="process__intro">
          <p className="section-label">{t("process.label")}</p>

          <h2 id="process-title" className="section-title">
            {t("process.title")}
          </h2>

          <p className="section-lead">{t("process.lead")}</p>
        </header>

        <ol className="process__list">
          {steps.map((step) => (
            <li key={step.number} className="process__item">
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
  );
}
