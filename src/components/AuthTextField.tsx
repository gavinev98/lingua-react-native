import type { ReactNode } from "react";
import { Text, TextInput, type TextInputProps, View } from "react-native";

import { colors } from "@/constants/theme";

type AuthTextFieldProps = TextInputProps & {
  label: string;
  rightElement?: ReactNode;
};

export function AuthTextField({
  label,
  rightElement,
  ...inputProps
}: AuthTextFieldProps) {
  return (
    <View className="rounded-2xl border border-border px-4 py-2.5">
      <Text className="caption text-text-secondary">{label}</Text>
      <View className="flex-row items-center">
        <TextInput
          className="body-lg text-text-primary flex-1 py-0.5"
          placeholderTextColor={colors.textSecondary}
          {...inputProps}
        />
        {rightElement}
      </View>
    </View>
  );
}
