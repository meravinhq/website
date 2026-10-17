import type { AppLanguage } from "../config";
import { LANGUAGE_STORAGE_KEY, SITE_ORIGIN } from "../config";

export function languageFromPath(pathname: string): AppLanguage | null {
  const segment = pathname.replace(/\/+$/, "").split("/").filter(Boolean)[0];

  if (segment === "en") {
    return "en";
  }

  if (segment === "ru") {
    return "ru";
  }

  return null;
}

export function pathForLanguage(language: AppLanguage, hash = window.location.hash) {
  const path = language === "en" ? "/en" : "/";
  return `${path}${hash}`;
}

export function canonicalForLanguage(language: AppLanguage) {
  return language === "en" ? `${SITE_ORIGIN}/en` : `${SITE_ORIGIN}/`;
}

export function detectLanguage(): AppLanguage {
  const fromPath = languageFromPath(window.location.pathname);

  if (fromPath) {
    return fromPath;
  }

  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (stored === "en" || stored === "ru") {
      return stored;
    }
  } catch {
    // Private browsing can block localStorage.
  }

  return "ru";
}

export function persistLanguage(language: AppLanguage) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Ignore quota / privacy errors.
  }
}
