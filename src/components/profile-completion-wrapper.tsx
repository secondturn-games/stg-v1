"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProfileCompletionWrapperProps {
  children: React.ReactNode;
}

export function ProfileCompletionWrapper({ children }: ProfileCompletionWrapperProps) {
  const { isSignedIn, isLoaded, user } = useUser();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !isLoaded) return;

    if (isSignedIn && user) {
      // Check if user has country in unsafe metadata
      const country = user.unsafeMetadata?.country;
      if (!country) {
        router.push("/complete-profile");
      }
    }
  }, [isSignedIn, isLoaded, user, mounted, router]);

  if (!mounted || !isLoaded) {
    return (
      <div className="min-h-screen bg-light-beige flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-vibrant-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-dark-green-600">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
