'use client';

import { useUser } from '@clerk/nextjs';
import { SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Navbar() {
  const { isSignedIn, isLoaded, user } = useUser();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) {
    // Show loading state during hydration and while Clerk is loading
    return (
      <header className="border-b border-dark-green/10 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-3 md:px-4 py-2.5 md:py-3 flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3 group">
          <Link href="/" className="relative" aria-label="Second Turn Games - Home">
            <Image 
              src="/nav-logo-mobile.svg" 
              alt="Second Turn Games" 
              width={32}
              height={32}
              className="h-8 w-auto md:hidden transition-transform duration-300 group-hover:scale-105"
            />
            <Image 
              src="/nav-logo.svg" 
              alt="Second Turn Games" 
              width={80}
              height={40}
              className="hidden md:block h-10 w-auto lg:h-12 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-vibrant-orange-500 to-warm-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />
          </Link>
          </div>

          {/* Search Bar - Hidden for coming-soon phase */}
          {/* <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for games..."
                className="w-full px-4 py-2 pl-10 rounded-lg border-2 border-light-beige-200 bg-white text-dark-green-600 placeholder-dark-green-400 focus:outline-none focus:ring-2 focus:ring-vibrant-orange focus:border-vibrant-orange transition-all duration-200 shadow-sm text-sm"
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-dark-green-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div> */}

          {/* Loading state for auth controls */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-20 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-9 w-16 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="border-b border-dark-green/10 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-3 md:px-4 py-2.5 md:py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 group">
          <Link href="/" className="relative" aria-label="Second Turn Games - Home">
            <Image 
              src="/nav-logo-mobile.svg" 
              alt="Second Turn Games" 
              width={32}
              height={32}
              className="h-8 w-auto md:hidden transition-transform duration-300 group-hover:scale-105"
            />
            <Image 
              src="/nav-logo.svg" 
              alt="Second Turn Games" 
              width={80}
              height={40}
              className="hidden md:block h-10 w-auto lg:h-12 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-vibrant-orange-500 to-warm-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />
          </Link>
        </div>

          {/* Desktop Search Bar - Hidden for coming-soon phase */}
          {/* <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for games..."
                className="w-full px-4 py-2 pl-10 rounded-lg border-2 border-light-beige-200 bg-white text-dark-green-600 placeholder-dark-green-400 focus:outline-none focus:ring-2 focus:ring-vibrant-orange focus:border-vibrant-orange transition-all duration-200 shadow-sm text-sm"
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-dark-green-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div> */}

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
          {/* Profile link removed - now accessible via avatar click */}
        </nav>

        {/* Auth controls - Coming-soon phase: Only Join button */}
        <div className="flex items-center gap-3">
          {isLoaded && !isSignedIn && (
            <SignUpButton mode="modal">
              <button className="btn-primary">
                Join Waitlist
              </button>
            </SignUpButton>
          )}

          {isLoaded && isSignedIn && (
            <>
              <button
                onClick={() => router.push('/profile')}
                className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden hover:ring-2 hover:ring-vibrant-orange-500 hover:ring-offset-2 transition-all duration-200"
                title="Go to Profile"
              >
                {user?.imageUrl ? (
                  <Image 
                    src={user.imageUrl} 
                    alt="Profile" 
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-vibrant-orange-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {user?.firstName?.charAt(0) || user?.emailAddresses[0]?.emailAddress?.charAt(0) || 'U'}
                    </span>
                  </div>
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
