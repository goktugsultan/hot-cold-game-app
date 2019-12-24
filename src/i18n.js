import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      "hot_or_cold": "HOT or COLD",
      "hot":"Hot",
      "cold":"Cold",
      "guess":"Guess",
      "how_to_play":"How to Play",
      "game_rules":"Game Rules"
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en",

    keySeparator: false, 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;