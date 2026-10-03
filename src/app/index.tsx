import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center gap-2 bg-background">
      <Text className="h1 text-purple">lingua</Text>
      <Link href="/onboarding" className="body-lg text-text-secondary">
        View onboarding
      </Link>
    </View>
  );
}
