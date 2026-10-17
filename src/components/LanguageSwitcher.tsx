import { useTranslation } from "react-i18next";

import type { AppLanguage } from "../config";
import { pathForLanguage, persistLanguage } from "../i18n/language";

interface LanguageSwitcherProps {
  onSelect?: () => void;
}

export function LanguageSwitcher({ onSelect }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const current: AppLanguage = i18n.resolvedLanguage === "en" ? "en" : "ru";

  function select(language: AppLanguage) {
    persistLanguage(language);
    void i18n.changeLanguage(language);
    window.history.pushState({}, "", pathForLanguage(language));
    onSelect?.();
  }

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={t("language.label")}
    >
      <button
        type="button"
        className={
          current === "ru"
            ? "language-switcher__option language-switcher__option--active"
            : "language-switcher__option"
        }
        aria-pressed={current === "ru"}
        aria-label={t("language.ru")}
        onClick={() => select("ru")}
      >
        RU
      </button>
      <span className="language-switcher__divider" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={
          current === "en"
            ? "language-switcher__option language-switcher__option--active"
            : "language-switcher__option"
        }
        aria-pressed={current === "en"}
        aria-label={t("language.en")}
        onClick={() => select("en")}
      >
        EN
      </button>
    </div>
  );
}
