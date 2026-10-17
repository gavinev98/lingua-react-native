import { Language, LanguageId } from "@/types/learning";

export const languages: Language[] = [
  {
    id: "spanish",
    name: "Spanish",
    nativeName: "Español",
    flag: `https://flagcdn.com/w320/es.png`,
    learners: "28.4M",
    speechCode: "es-ES",
  },
  {
    id: "french",
    name: "French",
    nativeName: "Français",
    flag: `https://flagcdn.com/w320/fr.png`,
    learners: "19.4M",
    speechCode: "fr-FR",
  },
  {
    id: "japanese",
    name: "Japanese",
    nativeName: "日本語",
    flag: `https://flagcdn.com/w320/jp.png`,
    learners: "12.7M",
    speechCode: "ja-JP",
  },
];

export const getLanguageById = (id: LanguageId) =>
  languages.find((language) => language.id === id);
