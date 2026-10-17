import { create } from "zustand";

import { LanguageId } from "@/types/learning";

type LanguageState = {
  selectedLanguageId: LanguageId;
  setSelectedLanguageId: (id: LanguageId) => void;
};

export const useLanguageStore = create<LanguageState>((set) => ({
  selectedLanguageId: "spanish",
  setSelectedLanguageId: (id) => set({ selectedLanguageId: id }),
}));
