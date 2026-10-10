import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PrimaryButton } from "@/components/PrimaryButton";
import { images } from "@/constants/images";
import { fonts } from "@/constants/theme";

type SpeechBubbleProps = {
  label: string;
  bg: string;
  color: string;
  align: "left" | "right";
};

function SpeechBubble({ label, bg, color, align }: SpeechBubbleProps) {
  const isLeft = align === "left";
  return (
    <View className={`flex-row ${isLeft ? "justify-start" : "justify-end"}`}>
      <View className="relative">
        <View className="rounded-xl px-5 py-3" style={{ backgroundColor: bg }}>
          <Text
            className="body-md"
            style={{ color, fontFamily: fonts.medium, fontSize: 17 }}
          >
            {label}
          </Text>
        </View>
        <View
          className="absolute w-4 h-4 rounded-sm"
          style={{
            backgroundColor: bg,
            bottom: -6,
            ...(isLeft ? { left: 18 } : { right: 18 }),
            transform: [{ rotate: "45deg" }],
          }}
        />
      </View>
    </View>
  );
}

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row items-center justify-center mt-4">
          <Image
            source={images.mascotLogo}
            style={{ width: 36, height: 36 }}
            contentFit="contain"
          />
          <Text className="h1 text-text-primary ml-2">lingoquest</Text>
        </View>

        <View className="mt-10">
          <Text className="h1 text-text-primary">Your AI language</Text>
          <Text className="h1 text-purple">teacher.</Text>
          <Text className="body-lg text-text-secondary mt-3">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="items-center mt-6">
          <View className="w-full gap-2.5" style={{ maxWidth: 260 }}>
            <SpeechBubble
              label="Hello!"
              bg="#EFF6FD"
              color="#0D132B"
              align="left"
            />
            <SpeechBubble
              label="¡Hola!"
              bg="#F5F5FD"
              color="#0000EF"
              align="right"
            />
            <SpeechBubble
              label="你好!"
              bg="#FCF2ED"
              color="#E70000"
              align="left"
            />
          </View>
          <Image
            source={images.mascotWelcome}
            style={{ width: 260, height: 260, marginTop: 12 }}
            contentFit="contain"
          />
        </View>

      </ScrollView>

      <View className="px-6 pb-4 pt-2">
        <PrimaryButton
          label="Get Started"
          onPress={() => router.push("/sign-up")}
        />
      </View>
    </SafeAreaView>
  );
}
