import type { ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";

type SocialButtonProps = {
  icon: ReactNode;
  label: string;
  onPress: () => void;
};

export function SocialButton({ icon, label, onPress }: SocialButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="h-14 flex-row items-center justify-center gap-3 rounded-2xl border border-border"
    >
      {icon}
      <Text className="body-lg text-text-primary">{label}</Text>
    </TouchableOpacity>
  );
}
