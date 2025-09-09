import Link from 'next/link';
import { SignUpButton } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="my-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Welcome to Second Turn Games
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-6 max-w-3xl mx-auto">
            Connect, trade, and share board games, card games, and tabletop treasures with fellow enthusiasts across Estonia, Latvia, and Lithuania.
          </p>
        </div>

        {/* Launch CTA Section */}
        <div className="bg-surface-50 rounded-md p-2 border-2 border-vibrant-orange my-4">
          <h2 className="text-2xl font-display font-bold mb-2 text-primary">Be Part of Our Launch</h2>
          <p className="text-lg mb-4 text-secondary">Sign up now to join the waitlist and become part of our growing community from day one.</p>
          <SignUpButton mode="modal">
            <button className="btn-primary text-lg px-6 py-2">
              Join Waitlist
            </button>
          </SignUpButton>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-2 my-4">
          <div className="card-elevated">
            <div className="w-12 h-12 bg-vibrant-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-vibrant-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Discover & Browse Games</h3>
            <p className="text-secondary text-sm">Explore a world of games shared by people just like you. From board games to card games and hidden gems, find your next favorite — and help someone else find theirs.</p>
          </div>

          <div className="card-elevated">
            <div className="w-12 h-12 bg-warm-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-warm-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Share & Sell Your Games</h3>
            <p className="text-secondary text-sm">Give your unused games a second turn. List them quickly, share your stories, and connect with buyers who truly appreciate the games you love.</p>
          </div>

          <div className="card-elevated">
            <div className="w-12 h-12 bg-dark-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-dark-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Join a Thriving Community</h3>
            <p className="text-secondary text-sm">Second Turn isn't just a marketplace — it's a hub for Baltic gamers. Chat, trade tips, post comments, and celebrate your love for games together.</p>
          </div>
        </div>
      </div>
    </div>
  );
}