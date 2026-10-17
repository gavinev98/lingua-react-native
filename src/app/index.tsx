import { useAuth } from "@clerk/expo";
import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";

import { PrimaryButton } from "@/components/PrimaryButton";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/language-store";

export default function Index() {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const selectedLanguage = languages.find(
    (language) => language.id === selectedLanguageId,
  );

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/onboarding" />;

  return (
    <View className="flex-1 justify-center items-center gap-2 bg-background">
      <Text className="h1 text-purple">lingua</Text>
      <Text className="body-lg text-text-secondary">You&apos;re signed in</Text>
      <Link href="/languages" className="body-lg text-purple mt-2">
        {selectedLanguage ? `Learning ${selectedLanguage.name}` : "Choose a language"}
      </Link>
      <View className="w-full px-6 mt-6">
        <PrimaryButton
          label="Sign Out"
          showChevron={false}
          onPress={() => signOut()}
        />
      </View>
    </View>
  );
}
