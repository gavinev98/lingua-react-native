import { useSSO } from "@clerk/expo/experimental";
import { useState } from "react";
import { Alert } from "react-native";

import { getErrorMessage } from "@/lib/clerk-errors";

type SocialStrategy = "oauth_google" | "oauth_facebook" | "oauth_apple";

export function useSocialAuth() {
  const { startSSOFlow } = useSSO();
  const [loading, setLoading] = useState(false);

  // On success Clerk activates the session and the route guards redirect to "/".
  const signInWith = async (strategy: SocialStrategy) => {
    if (loading) return;
    setLoading(true);
    try {
      await startSSOFlow({ strategy });
    } catch (error) {
      Alert.alert("Sign in failed", getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return { signInWith, loading };
}
