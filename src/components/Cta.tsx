import { useTranslation } from "react-i18next";

import { EMAIL, TELEGRAM_HANDLE, TELEGRAM_URL } from "../config";
import "./Cta.css";

function TelegramIcon() {
  return (
    <svg
      className="cta-card__icon"
      viewBox="0 0 24 24"
      width="28"
      height="28"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M21.5 3.3c.2-.9-.6-1.6-1.4-1.3L2.8 8.7c-.9.3-.9 1.6.1 1.9l4.6 1.5 1.8 5.7c.3.9 1.5 1.1 2.1.4l2.6-2.8 4.7 3.5c.7.5 1.7.1 1.9-.7l2.9-14.9ZM8.3 11.6l9.4-5.8-7.3 7.9-.3 2.4-1.8-4.5Z"
      />
    </svg>
  );
}

export function Cta() {
  const { t } = useTranslation();

  return (
    <section className="cta" id="contact" aria-labelledby="cta-title">
      <div className="cta__inner">
        <header className="cta__intro">
          <p className="section-label">{t("contact.label")}</p>

          <h2 id="cta-title" className="cta__title">
            {t("contact.title")}
          </h2>

          <p className="cta__text">{t("contact.lead")}</p>
          <p className="cta__note">{t("contact.note")}</p>
        </header>

        <div className="cta__channels">
          <a
            className="cta-card"
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="cta-card__icon-wrap">
              <TelegramIcon />
            </span>
            <span className="cta-card__body">
              <span className="cta-card__title">{t("contact.telegram.title")}</span>
              <span className="cta-card__handle">{TELEGRAM_HANDLE}</span>
              <span className="cta-card__text">
                {t("contact.telegram.description")}
              </span>
              <span className="cta-card__action">
                {t("contact.telegram.cta")}
                <span aria-hidden="true"> ↗</span>
              </span>
            </span>
            <span className="visually-hidden">{t("contact.telegram.external")}</span>
          </a>

          <a className="cta-email" href={`mailto:${EMAIL}`}>
            <span className="cta-email__title">{t("contact.email.title")}</span>
            <span className="cta-email__address">{EMAIL}</span>
            <span className="cta-email__text">{t("contact.email.description")}</span>
            <span className="cta-email__action">{t("contact.email.cta")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
