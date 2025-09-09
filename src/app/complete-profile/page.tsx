"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CompleteProfile() {
  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function saveCountry(country: string) {
    if (!user) return;
    
    setIsLoading(true);
    try {
      await user.update({
        unsafeMetadata: { country },
      });
      router.push("/");
    } catch (error) {
      console.error("Error updating country:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const countries = [
    { code: "LV", name: "Latvia", flag: "🇱🇻" },
    { code: "EE", name: "Estonia", flag: "🇪🇪" },
    { code: "LT", name: "Lithuania", flag: "🇱🇹" },
    { code: "OTHER", name: "Other", flag: "🌍" },
  ];

  return (
    <div className="min-h-screen bg-light-beige py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-medium p-6">
          <h2 className="text-2xl font-display font-bold text-dark-green-600 mb-2">
            Complete Your Profile
          </h2>
          <p className="text-dark-green-500 mb-6">
            Choose your country to get started with Second Turn Games
          </p>
          
          <div className="space-y-3">
            {countries.map((country) => (
              <button
                key={country.code}
                onClick={() => saveCountry(country.code)}
                disabled={isLoading}
                className="w-full flex items-center gap-4 p-4 rounded-md border-2 border-light-beige-200 hover:border-vibrant-orange hover:bg-vibrant-orange-50 transition-all duration-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="font-medium text-dark-green-600">{country.name}</span>
                {isLoading && (
                  <div className="ml-auto">
                    <div className="w-4 h-4 border-2 border-vibrant-orange border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
