import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";

import type { AppLanguage } from "../config";
import { LanguageSwitcher } from "./LanguageSwitcher";
import "./Header.css";

const navKeys = [
  { href: "#services", key: "nav.services" },
  { href: "#process", key: "nav.process" },
  { href: "#cases", key: "nav.cases" },
  { href: "#about", key: "nav.about" },
  { href: "#contact", key: "nav.contact" },
] as const;

export function Header() {
  const { i18n, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const language: AppLanguage = i18n.resolvedLanguage === "en" ? "en" : "ru";
  const homeHref = language === "en" ? "/en" : "/";

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href={homeHref} className="site-header__brand" aria-label={t("nav.home")}>
          <span className="site-header__brand-text">MERAVIN</span>
        </a>

        <nav className="site-header__nav" aria-label={t("nav.primary")}>
          <ul className="site-header__list">
            {navKeys.map((item) => (
              <li key={item.href} className="site-header__item">
                <a href={item.href} className="site-header__link">
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher onSelect={() => setMenuOpen(false)} />

          <a href="#contact" className="site-header__cta">
            {t("cta.discuss")}
          </a>

          <button
            type="button"
            className="site-header__menu"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id={menuId}
          className="site-header__drawer"
          aria-label={t("nav.mobile")}
        >
          <ul className="site-header__drawer-list">
            {navKeys.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="site-header__drawer-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="site-header__cta site-header__cta--drawer"
            onClick={() => setMenuOpen(false)}
          >
            {t("cta.discuss")}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
