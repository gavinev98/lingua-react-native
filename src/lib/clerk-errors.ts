import type { ClerkError } from "@clerk/shared/error";

// Clerk returns a list of errors; show the first one in a friendly way.
export function getErrorMessage(error: ClerkError | unknown): string {
  if (error && typeof error === "object") {
    const { longMessage, message } = error as {
      longMessage?: string;
      message?: string;
    };
    return longMessage ?? message ?? "Something went wrong. Please try again.";
  }
  return "Something went wrong. Please try again.";
}
