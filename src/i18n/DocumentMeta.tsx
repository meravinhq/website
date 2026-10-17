import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { SITE_ORIGIN } from "../config";
import type { AppLanguage } from "../config";
import { canonicalForLanguage, languageFromPath, persistLanguage } from "./language";

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    if (hreflang) {
      element.setAttribute("hreflang", hreflang);
    }
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export function DocumentMeta() {
  const { i18n, t } = useTranslation();
  const language = (i18n.resolvedLanguage === "en" ? "en" : "ru") as AppLanguage;

  useEffect(() => {
    persistLanguage(language);

    const title = t("meta.title");
    const description = t("meta.description");
    const canonical = canonicalForLanguage(language);
    const ogImage = `${SITE_ORIGIN}/og.svg`;

    document.documentElement.lang = language;
    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:locale", language === "en" ? "en_US" : "ru_RU");
    upsertMeta("property", "og:site_name", "MERAVIN");
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    upsertLink("canonical", canonical);
    upsertLink("alternate", `${SITE_ORIGIN}/`, "ru");
    upsertLink("alternate", `${SITE_ORIGIN}/en`, "en");
    upsertLink("alternate", `${SITE_ORIGIN}/`, "x-default");

    const pathLanguage = languageFromPath(window.location.pathname);

    if (pathLanguage !== language && !pathLanguage) {
      const nextPath = language === "en" ? "/en" : "/";
      window.history.replaceState({}, "", `${nextPath}${window.location.hash}`);
    }
  }, [language, t]);

  return null;
}
