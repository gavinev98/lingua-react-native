import { useSignUp } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthTextField } from "@/components/AuthTextField";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SocialButton } from "@/components/SocialButton";
import { VerificationModal } from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { useSocialAuth } from "@/hooks/useSocialAuth";
import { getErrorMessage } from "@/lib/clerk-errors";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const { signUp, fetchStatus } = useSignUp();
  const { signInWith } = useSocialAuth();
  const isFetching = fetchStatus === "fetching";

  // Step 1: create the account and email a verification code.
  const handleSignUp = async () => {
    if (isFetching) return;
    const { error } = await signUp.password({
      emailAddress: email.trim(),
      password,
    });
    if (error) {
      Alert.alert("Couldn't sign up", getErrorMessage(error));
      return;
    }
    const { error: sendError } = await signUp.verifications.sendEmailCode();
    if (sendError) {
      Alert.alert("Couldn't send code", getErrorMessage(sendError));
      return;
    }
    setShowVerification(true);
  };

  // Step 2: verify the code and activate the session.
  const handleVerify = async (code: string) => {
    const { error } = await signUp.verifications.verifyEmailCode({ code });
    if (error) {
      Alert.alert("Invalid code", getErrorMessage(error));
      return;
    }
    const { error: finalizeError } = await signUp.finalize({
      navigate: () => router.replace("/"),
    });
    if (finalizeError) {
      Alert.alert("Couldn't sign up", getErrorMessage(finalizeError));
      return;
    }
    setShowVerification(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          className="flex-1 px-6"
          keyboardShouldPersistTaps="handled"
          contentContainerClassName="pb-8"
        >
          <Pressable
            onPress={() => router.back()}
            hitSlop={12}
            className="mt-4"
          >
            <Ionicons name="chevron-back" size={28} color={colors.textPrimary} />
          </Pressable>

          <View className="mt-6">
            <Text className="h1 text-text-primary">Create your account</Text>
            <Text className="body-lg text-text-secondary mt-2">
              Start your language journey today ✨
            </Text>
          </View>

          <View className="items-center my-6" style={{ height: 180 }}>
            <View className="absolute" style={{ top: 4, left: 24 }}>
              <Ionicons name="sparkles" size={16} color={colors.streak} />
            </View>
            <View className="absolute" style={{ top: 28, right: 36 }}>
              <Ionicons name="sparkles" size={14} color={colors.blue} />
            </View>
            <View className="absolute" style={{ bottom: 10, right: 60 }}>
              <Ionicons name="sparkles" size={12} color={colors.streak} />
            </View>
            <Image
              source={images.mascotAuth}
              style={{ width: 230, height: 190 }}
              contentFit="contain"
            />
          </View>

          <View className="gap-4">
            <AuthTextField
              label="Email"
              placeholder="alex@gmail.com"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              autoComplete="email"
            />

            <AuthTextField
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoComplete="password-new"
              rightElement={
                <Pressable
                  onPress={() => setShowPassword((prev) => !prev)}
                  hitSlop={8}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color={colors.textSecondary}
                  />
                </Pressable>
              }
            />
          </View>

          {/* Required by Clerk for web bot protection; invisible on native. */}
          <View nativeID="clerk-captcha" />

          <View className="mt-6">
            <PrimaryButton
              label="Sign Up"
              showChevron={false}
              onPress={handleSignUp}
            />
          </View>

          <View className="flex-row items-center gap-3 my-6">
            <View className="flex-1 h-px bg-border" />
            <Text className="body-md text-text-secondary">
              or continue with
            </Text>
            <View className="flex-1 h-px bg-border" />
          </View>

          <View className="gap-3">
            <SocialButton
              icon={<Ionicons name="logo-google" size={20} color="#4285F4" />}
              label="Continue with Google"
              onPress={() => signInWith("oauth_google")}
            />
            <SocialButton
              icon={
                <Ionicons name="logo-facebook" size={20} color="#1877F2" />
              }
              label="Continue with Facebook"
              onPress={() => signInWith("oauth_facebook")}
            />
            <SocialButton
              icon={
                <Ionicons name="logo-apple" size={20} color={colors.textPrimary} />
              }
              label="Continue with Apple"
              onPress={() => signInWith("oauth_apple")}
            />
          </View>

          <View className="flex-row justify-center mt-8">
            <Text className="body-md text-text-secondary">
              Already have an account?{" "}
            </Text>
            <Link href="/sign-in" className="body-md text-purple">
              Log in
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={showVerification}
        email={email || "your email"}
        onClose={() => setShowVerification(false)}
        onComplete={handleVerify}
      />
    </SafeAreaView>
  );
}
