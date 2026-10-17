import { LanguageId, Unit } from "@/types/learning";

export const units: Unit[] = [
  {
    id: "spanish-basics",
    languageId: "spanish",
    title: "Basics",
    description: "Greet people and introduce yourself",
    level: "beginner",
  },
  {
    id: "spanish-food",
    languageId: "spanish",
    title: "Food & Drinks",
    description: "Order something at a café",
    level: "elementary",
  },
  {
    id: "french-basics",
    languageId: "french",
    title: "Basics",
    description: "Greet people and introduce yourself",
    level: "beginner",
  },
  {
    id: "japanese-basics",
    languageId: "japanese",
    title: "Basics",
    description: "Greet people and introduce yourself",
    level: "beginner",
  },
];

export const getUnitsByLanguage = (languageId: LanguageId) =>
  units.filter((unit) => unit.languageId === languageId);
