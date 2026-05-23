export const locales = ["en", "es", "ja"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

export function localizedHref(path: string, lang: Locale): string {
  if (lang === defaultLocale) return path;
  if (path === "/") return `/${lang}`;
  return `/${lang}${path}`;
}
