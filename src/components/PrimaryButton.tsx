import { Text, TouchableOpacity, View } from "react-native";

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  showChevron?: boolean;
};

export function PrimaryButton({
  label,
  onPress,
  showChevron = true,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      className="h-16 flex-row items-center justify-between rounded-full bg-purple px-6"
    >
      <View className="w-5" />
      <Text className="btn-label text-white">{label}</Text>
      {showChevron ? (
        <Text className="btn-label text-white">{"›"}</Text>
      ) : (
        <View className="w-5" />
      )}
    </TouchableOpacity>
  );
}
