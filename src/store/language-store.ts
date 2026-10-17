import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { LanguageId } from "@/types/learning";

type LanguageState = {
  selectedLanguageId: LanguageId | null;
  // true once the persisted value has been read from AsyncStorage
  hasHydrated: boolean;
  setSelectedLanguageId: (id: LanguageId) => void;
  resetLanguage: () => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageId: null,
      hasHydrated: false,
      setSelectedLanguageId: (id) => set({ selectedLanguageId: id }),
      resetLanguage: () => set({ selectedLanguageId: null }),
    }),
    {
      name: "language-store",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ selectedLanguageId: state.selectedLanguageId }),
      onRehydrateStorage: () => () => {
        useLanguageStore.setState({ hasHydrated: true });
      },
    },
  ),
);
