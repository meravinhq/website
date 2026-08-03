import commonEn from "./locales/en/common.json";
import heroEn from "./locales/en/hero.json";
import servicesEn from "./locales/en/services.json";
import projectsEn from "./locales/en/projects.json";
import processEn from "./locales/en/process.json";
import aboutEn from "./locales/en/about.json";
import footerEn from "./locales/en/footer.json";

import commonRu from "./locales/ru/common.json";
import heroRu from "./locales/ru/hero.json";
import servicesRu from "./locales/ru/services.json";
import projectsRu from "./locales/ru/projects.json";
import processRu from "./locales/ru/process.json";
import aboutRu from "./locales/ru/about.json";
import footerRu from "./locales/ru/footer.json";

export const resources = {
  en: {
    translation: {
      ...commonEn,
      hero: heroEn,
      services: servicesEn,
      projects: projectsEn,
      process: processEn,
      about: aboutEn,
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
      footer: footerRu,
    },
  },
} as const;