import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "Language": "Language",
            "Note list": "Note list",
            "New note": "New note",
            "Note detail": "Note detail",
            "Title": "Title",
            "Delete": "Delete",
            "Edit": "Edit",
            "Dialog title": "Do you realy want to delete this item?",
            "Dialog description": "It can't be undone.",
            "Cancel": "Cancel",
            "OK": "OK",
            "Note edit": "Note edit",
            "Submit": "Submit"
        }
    },
    cs: {
        translation: {
            "Language": "Jazyk",
            "Note list": "Poznámky",
            "New note": "Nová poznámka",
            "Note detail": "Detail poznámky",
            "Title": "Popisek",
            "Delete": "Smazat",
            "Edit": "Upravit",
            "Dialog title": "Opravdu si přejete smazat tuto položku?",
            "Dialog description": "Tato akce nelze vrátit zpět.",
            "Cancel": "Zrušit",
            "OK": "Potvrdit",
            "Note edit": "Úprava poznámky",
            "Submit": "Uložit"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,

        fallbackLng: ['en', 'cs'],

        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
