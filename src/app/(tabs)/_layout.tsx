import { useAuth } from "@clerk/expo";
import { Redirect, Tabs } from "expo-router";

import { BottomTabBar } from "@/components/BottomTabBar";
import { useLanguageStore } from "@/store/language-store";

export default function TabsLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const hasHydrated = useLanguageStore((state) => state.hasHydrated);

  if (!isLoaded || !hasHydrated) return null;
  if (!isSignedIn) return <Redirect href="/onboarding" />;
  if (!selectedLanguageId) return <Redirect href="/languages" />;

  return (
    <Tabs
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="learn" options={{ title: "Learn" }} />
      <Tabs.Screen name="ai-teacher" options={{ title: "AI Teacher" }} />
      <Tabs.Screen name="chat" options={{ title: "Chat" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
