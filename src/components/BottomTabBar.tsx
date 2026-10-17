import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "expo-router/build/react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/constants/theme";

type IconName = keyof typeof Ionicons.glyphMap;

const tabConfig: Record<string, { label: string; icon: IconName; activeIcon: IconName }> = {
  index: { label: "Home", icon: "home-outline", activeIcon: "home" },
  learn: { label: "Learn", icon: "book-outline", activeIcon: "book" },
  "ai-teacher": { label: "AI Teacher", icon: "happy-outline", activeIcon: "happy" },
  chat: { label: "Chat", icon: "chatbubble-outline", activeIcon: "chatbubble" },
  profile: { label: "Profile", icon: "person-outline", activeIcon: "person" },
};

const CIRCLE_SIZE = 56;

export function BottomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const [barWidth, setBarWidth] = useState(0);
  const tabWidth = barWidth / state.routes.length;
  const translateX = useSharedValue(0);

  useEffect(() => {
    const target = state.index * tabWidth + (tabWidth - CIRCLE_SIZE) / 2;
    translateX.value = withTiming(target, { duration: 250, easing: Easing.linear });
  }, [state.index, tabWidth, translateX]);

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 12) }]}
      pointerEvents="box-none"
    >
      <View
        className="h-[72px] flex-row rounded-[28px] bg-white"
        style={styles.bar}
        onLayout={(e) => setBarWidth(e.nativeEvent.layout.width)}
      >
        {barWidth > 0 && (
          <Animated.View style={[styles.circle, circleStyle]} />
        )}
        {state.routes.map((route, index) => {
          const config = tabConfig[route.name];
          if (!config) return null;
          const focused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              accessibilityRole="button"
              accessibilityState={{ selected: focused }}
              accessibilityLabel={config.label}
              className="flex-1 items-center justify-center"
            >
              {focused ? (
                <Ionicons name={config.activeIcon} size={26} color="#FFFFFF" />
              ) : (
                <>
                  <Ionicons name={config.icon} size={26} color={colors.textSecondary} />
                  <Text className="caption mt-0.5 text-text-secondary">
                    {config.label}
                  </Text>
                </>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
  },
  bar: {
    shadowColor: "#0D132B",
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  circle: {
    position: "absolute",
    top: (72 - CIRCLE_SIZE) / 2,
    left: 0,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: colors.purple,
  },
});
