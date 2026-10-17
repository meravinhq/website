import aboutEn from "./locales/en/about.json";
import commonEn from "./locales/en/common.json";
import contactEn from "./locales/en/contact.json";
import footerEn from "./locales/en/footer.json";
import heroEn from "./locales/en/hero.json";
import processEn from "./locales/en/process.json";
import projectsEn from "./locales/en/projects.json";
import servicesEn from "./locales/en/services.json";

import aboutRu from "./locales/ru/about.json";
import commonRu from "./locales/ru/common.json";
import contactRu from "./locales/ru/contact.json";
import footerRu from "./locales/ru/footer.json";
import heroRu from "./locales/ru/hero.json";
import processRu from "./locales/ru/process.json";
import projectsRu from "./locales/ru/projects.json";
import servicesRu from "./locales/ru/services.json";

export const resources = {
  en: {
    translation: {
      ...commonEn,
      hero: heroEn,
      services: servicesEn,
      projects: projectsEn,
      process: processEn,
      about: aboutEn,
      contact: contactEn,
      footer: footerEn,
    },
  },
  ru: {
    translation: {
      ...commonRu,
      hero: heroRu,
      services: servicesRu,
      projects: projectsRu,
      process: processRu,
      about: aboutRu,
      contact: contactRu,
      footer: footerRu,
    },
  },
} as const;
