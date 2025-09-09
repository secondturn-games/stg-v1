# Second Turn Games - Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret_here

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Getting Clerk Keys

1. Go to [clerk.com](https://clerk.com) and create an account
2. Create a new application
3. Copy the publishable key and secret key from the dashboard
4. Set up webhooks:
   - Go to Webhooks in your Clerk dashboard
   - Create a new webhook endpoint: `https://your-domain.com/api/webhooks/clerk`
   - Subscribe to: `user.created` and `user.updated`
   - Copy the webhook secret
5. Add all keys to your `.env.local` file

## Getting Supabase Keys

1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Go to Settings > API
4. Copy the Project URL and anon public key
5. Add them to your `.env.local` file

## Setting up Supabase Database

Run this SQL in your Supabase SQL editor to create the profiles table:

```sql
-- First, create the set_updated_at function
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the profiles table
CREATE TABLE profiles (
  id text primary key,                   -- Clerk user ID
  email text not null unique,            -- Primary email
  first_name text,                       -- Clerk's first_name
  last_name text,                        -- Clerk's last_name
  country text check (country in ('LV','EE','LT','OTHER')),
  avatar_url text,                       -- Clerk's image_url
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Create the trigger to keep updated_at in sync automatically
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at();
```

## Running the Project

```bash
npm run dev
```

The project will be available at `http://localhost:3000`

## Features

- ✅ Ultra-compact design system with 2px grid
- ✅ Clerk authentication integration with waitlist mode
- ✅ Supabase integration for user profile management
- ✅ Webhook sync between Clerk and Supabase
- ✅ Complete profile flow with country selection
- ✅ Authentication gating for marketplace access
- ✅ Responsive homepage with hero section
- ✅ Feature cards and CTA section
- ✅ Custom Tailwind configuration
- ✅ Google Fonts integration (Righteous, Manrope, Bebas Neue)
