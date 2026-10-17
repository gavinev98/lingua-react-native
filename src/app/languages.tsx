import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PrimaryButton } from "@/components/PrimaryButton";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/language-store";
import { LanguageId } from "@/types/learning";

export default function Languages() {
  const router = useRouter();
  const savedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const setSelectedLanguageId = useLanguageStore(
    (state) => state.setSelectedLanguageId,
  );
  const [selectedId, setSelectedId] = useState<LanguageId>(savedLanguageId);
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const visibleLanguages = languages.filter(
    (language) =>
      language.name.toLowerCase().includes(normalizedQuery) ||
      language.nativeName.toLowerCase().includes(normalizedQuery),
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-5">
          {/* Header */}
          <View className="h-12 items-center justify-center">
            <Pressable
              onPress={() => router.back()}
              hitSlop={12}
              className="absolute left-0"
            >
              <Ionicons name="chevron-back" size={26} color={colors.textPrimary} />
            </Pressable>
            <Text className="h4 text-text-primary">Choose a language</Text>
          </View>

          {/* Search */}
          <View className="mt-4 h-14 flex-row items-center gap-3 rounded-full border border-border bg-surface px-5">
            <Ionicons name="search-outline" size={22} color={colors.textSecondary} />
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search languages"
              placeholderTextColor={colors.textSecondary}
              style={{ flex: 1, fontFamily: "Poppins-Regular", fontSize: 16 }}
            />
          </View>

          <Text className="h4 mt-6 mb-3 text-text-primary">Popular</Text>

          {/* Language list */}
          <View className="gap-3">
            {visibleLanguages.map((language) => {
              const selected = language.id === selectedId;
              return (
                <TouchableOpacity
                  key={language.id}
                  activeOpacity={0.85}
                  onPress={() => setSelectedId(language.id)}
                  className={`h-24 flex-row items-center rounded-3xl border bg-white px-4 ${
                    selected ? "border-purple bg-[#F5F3FF]" : "border-border"
                  }`}
                  style={{
                    shadowColor: "#0D132B",
                    shadowOpacity: 0.05,
                    shadowRadius: 8,
                    shadowOffset: { width: 0, height: 2 },
                    elevation: 1,
                  }}
                >
                  <Image
                    source={{ uri: language.flag }}
                    contentFit="cover"
                    style={{ width: 52, height: 52, borderRadius: 26 }}
                  />
                  <View className="ml-5 flex-1">
                    <Text className="h4 text-text-primary">{language.name}</Text>
                    <Text className="body-sm text-text-secondary">
                      {language.learners} learners
                    </Text>
                  </View>
                  {selected ? (
                    <Ionicons name="checkmark-circle" size={32} color={colors.purple} />
                  ) : (
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color={colors.textSecondary}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          <View className="mt-4">
            <PrimaryButton
              label="Confirm"
              onPress={() => {
                setSelectedLanguageId(selectedId);
                router.back();
              }}
            />
          </View>
        </View>

        {/* Earth illustration anchored to the bottom */}
        <View className="flex-1 justify-end">
          <Image
            source={images.earth}
            contentFit="cover"
            contentPosition="top"
            style={{ width: "100%", aspectRatio: 2 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
