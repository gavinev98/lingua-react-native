import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { colors } from "@/constants/theme";

const CODE_LENGTH = 6;

type VerificationModalProps = {
  visible: boolean;
  email: string;
  onClose: () => void;
  onComplete: (code: string) => void;
};

export function VerificationModal({
  visible,
  email,
  onClose,
  onComplete,
}: VerificationModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(13,19,43,0.5)",
          justifyContent: "flex-end",
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              backgroundColor: colors.background,
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
              paddingHorizontal: 24,
              paddingTop: 16,
              paddingBottom: 36,
            }}
          >
            <View className="flex-row justify-end">
              <Pressable onPress={onClose} hitSlop={12}>
                <Ionicons name="close" size={24} color={colors.textSecondary} />
              </Pressable>
            </View>

            <Text className="h2 text-text-primary text-center mt-1">
              Check your email
            </Text>
            <Text className="body-md text-text-secondary text-center mt-2 px-4">
              We sent a 6-digit code to{"\n"}
              <Text className="body-md text-text-primary">{email}</Text>
            </Text>

            {visible ? <VerificationCodeInput onComplete={onComplete} /> : null}
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

type VerificationCodeInputProps = {
  onComplete: (code: string) => void;
};

function VerificationCodeInput({ onComplete }: VerificationCodeInputProps) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 250);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (text: string) => {
    const digits = text.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
    setCode(digits);
    if (digits.length === CODE_LENGTH) {
      onComplete(digits);
    }
  };

  return (
    <>
      <Pressable
        className="flex-row justify-center gap-2.5 mt-8"
        onPress={() => inputRef.current?.focus()}
      >
        {Array.from({ length: CODE_LENGTH }).map((_, index) => {
          const digit = code[index];
          const isActive = index === code.length;
          return (
            <View
              key={index}
              className="w-12 h-14 rounded-2xl border items-center justify-center"
              style={{
                borderColor: isActive ? colors.purple : colors.border,
                backgroundColor: colors.surface,
              }}
            >
              <Text className="h3 text-text-primary">{digit ?? ""}</Text>
            </View>
          );
        })}
      </Pressable>

      <TextInput
        ref={inputRef}
        value={code}
        onChangeText={handleChange}
        keyboardType="number-pad"
        maxLength={CODE_LENGTH}
        style={{ position: "absolute", opacity: 0, height: 1, width: 1 }}
      />
    </>
  );
}
