import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

//Localisaton
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(Backend)
  .init({
    supportedLngs: ["en", "ru"],
    fallbackLng: "en",
    debug: true,
    detection: {
      order: [
        "queryString",
        "cookie",
        "localStorage",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    // backend: {
    //   loadPath: "/public/locales/{{lng}}.json",
    // },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
