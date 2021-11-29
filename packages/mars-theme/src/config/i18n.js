import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
import { Filipino } from "./languages/Filipino";

i18n.use(XHR).use(LanguageDetector).init({
    // we init with resources
    resources: {
        Filipino: {
            translations: Filipino
        },
    },
    lng: "Filipino",
    // fallbackLng: "Filipino",
    debug: false,
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false, // we use content as keys
    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },
    react: {
        wait: true
    }
});

export default i18n;