import { useTranslation } from "react-i18next";

import type { AppLanguage } from "../config";
import { EMAIL } from "../config";
import "./Footer.css";

const navKeys = [
  { href: "#services", key: "nav.services" },
  { href: "#process", key: "nav.process" },
  { href: "#cases", key: "nav.cases" },
  { href: "#about", key: "nav.about" },
  { href: "#contact", key: "nav.contact" },
] as const;

export function Footer() {
  const { i18n, t } = useTranslation();
  const year = new Date().getFullYear();
  const language: AppLanguage = i18n.resolvedLanguage === "en" ? "en" : "ru";
  const homeHref = language === "en" ? "/en" : "/";

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <a
            href={homeHref}
            className="site-footer__brand"
            aria-label={t("nav.home")}
          >
            <span className="site-footer__brand-text">MERAVIN</span>
          </a>

          <nav className="site-footer__nav" aria-label={t("nav.footer")}>
            <ul className="site-footer__list">
              {navKeys.map((item) => (
                <li key={item.href} className="site-footer__item">
                  <a href={item.href} className="site-footer__link">
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__meta">
            <p className="site-footer__tagline">{t("footer.tagline")}</p>

            <a className="site-footer__email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>

          <p className="site-footer__copy">{t("footer.copy", { year })}</p>
        </div>
      </div>
    </footer>
  );
}
