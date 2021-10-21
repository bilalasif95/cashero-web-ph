import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
import { english } from "./languages/english";
import { brazilian } from "./languages/brazilian";
import { portuguese } from "./languages/portuguese";
import { spanish } from "./languages/spanish";
import { arspanish } from "./languages/arspanish";
import { clspanish } from "./languages/clspanish";
import { french } from "./languages/french";
import { german } from "./languages/german";
import { italian } from "./languages/italian";
import { zaenglish } from "./languages/zaenglish";
import { inenglish } from "./languages/inenglish";
import { ruenglish } from "./languages/ruenglish";
import { nlenglish } from "./languages/nlenglish";
import { bahasa } from "./languages/bahasa";
import { filipino } from "./languages/filipino";
import { malay } from "./languages/malay";
import { spspanish } from "./languages/spspanish";
import { enfilipino } from "./languages/enfilipino";

i18n.use(XHR).use(LanguageDetector).init({
    // we init with resources
    resources: {
        english: {
            translations: english
        },
        brazilian: {
            translations: brazilian
        },
        portuguese: {
            translations: portuguese
        },
        spanish: {
            translations: spanish
        },
        arspanish: {
            translations: arspanish
        },
        clspanish: {
            translations: clspanish
        },
        french: {
            translations: french
        },
        german: {
            translations: german
        },
        italian: {
            translations: italian
        },
        zaenglish: {
            translations: zaenglish
        },
        inenglish: {
            translations: inenglish
        },
        ruenglish: {
            translations: ruenglish
        },
        nlenglish: {
            translations: nlenglish
        },
        bahasa: {
            translations: bahasa
        },
        filipino: {
            translations: filipino
        },
        malay: {
            translations: malay
        },
        spspanish: {
            translations: spspanish
        },
        enfilipino: {
            translations: enfilipino
        }
    },
    // lng:"eng",
    fallbackLng: "english",
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