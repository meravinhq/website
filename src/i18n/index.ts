import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { detectLanguage } from "./language";
import { resources } from "./resources";

const initialLanguage = detectLanguage();

void i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "ru",
  supportedLngs: ["ru", "en"],
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

export default i18n;
