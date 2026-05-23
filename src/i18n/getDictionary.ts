import { cache } from "react";
import type { Locale } from "./config";

const dictionaries = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
  ja: () => import("./dictionaries/ja").then((m) => m.default),
};

export const getDictionary = cache(async (locale: Locale) => {
  return dictionaries[locale]();
});

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
