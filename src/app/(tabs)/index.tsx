import { useAuth } from "@clerk/expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";

import { PrimaryButton } from "@/components/PrimaryButton";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/language-store";

export default function Index() {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const hasHydrated = useLanguageStore((state) => state.hasHydrated);
  const resetLanguage = useLanguageStore((state) => state.resetLanguage);
  const selectedLanguage = languages.find(
    (language) => language.id === selectedLanguageId,
  );

  if (!isLoaded || !hasHydrated) return null;
  if (!isSignedIn) return <Redirect href="/onboarding" />;
  if (!selectedLanguageId) return <Redirect href="/languages" />;

  // For testing: wipe AsyncStorage so the language selection flow runs again
  const clearStorage = async () => {
    await AsyncStorage.clear();
    resetLanguage();
  };

  return (
    <View className="flex-1 justify-center items-center gap-2 bg-background">
      <Text className="h1 text-purple">lingua</Text>
      <Text className="body-lg text-text-secondary">You&apos;re signed in</Text>
      {selectedLanguage && (
        <View className="items-center gap-2 mt-4">
          <Image
            source={{ uri: selectedLanguage.flag }}
            contentFit="cover"
            style={{ width: 72, height: 72, borderRadius: 36 }}
          />
          <Text className="h4 text-text-primary">{selectedLanguage.name}</Text>
          <Text className="body-sm text-text-secondary">
            {selectedLanguage.nativeName}
          </Text>
        </View>
      )}
      <Link href="/languages" className="body-lg text-purple mt-2">
        Choose Language
      </Link>
      <View className="w-full px-6 mt-6">
        <PrimaryButton
          label="Sign Out"
          showChevron={false}
          onPress={() => signOut()}
        />
        <View className="mt-3">
          <PrimaryButton
            label="Clear Storage"
            showChevron={false}
            onPress={clearStorage}
          />
        </View>
      </View>
    </View>
  );
}
