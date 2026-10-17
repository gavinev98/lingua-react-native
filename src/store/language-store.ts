import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { LanguageId } from "@/types/learning";

type LanguageState = {
  selectedLanguageId: LanguageId;
  setSelectedLanguageId: (id: LanguageId) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageId: "spanish",
      setSelectedLanguageId: (id) => set({ selectedLanguageId: id }),
    }),
    {
      name: "language-store",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ selectedLanguageId: state.selectedLanguageId }),
    },
  ),
);
