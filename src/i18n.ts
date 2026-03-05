import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import sk from "./locales/sk.json";

export const supportedLngs = ["en", "ru", "sk"] as const;
export type Locale = (typeof supportedLngs)[number];

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, ru: { translation: ru }, sk: { translation: sk } },
  lng: "en",
  fallbackLng: "en",
  supportedLngs: [...supportedLngs],
  interpolation: { escapeValue: false },
});

export default i18n;
