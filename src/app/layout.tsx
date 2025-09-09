import type { Metadata } from "next";
import { Righteous, Manrope, Bebas_Neue } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const righteous = Righteous({
  subsets: ["latin"],
  variable: "--font-righteous",
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Second Turn Games",
  description: "Give your games a second life - Buy and sell used board games in the Baltics",
  metadataBase: new URL("https://second-turn-games.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://second-turn-games.vercel.app",
    title: "Second Turn Games",
    description: "Give your games a second life - Buy and sell used board games in the Baltics",
    siteName: "Second Turn Games",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Second Turn Games Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Turn Games",
    description: "Give your games a second life - Buy and sell used board games in the Baltics",
    images: ["/icon-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: '#D95323',
          colorText: '#1B1B1B',
          colorTextSecondary: '#29432B',
          colorBackground: '#F7F8F4',
          colorInputBackground: '#FFFFFF',
          colorBorder: '#29432B',
          borderRadius: '0.5rem',
          fontFamily: 'var(--font-manrope), sans-serif',
        },
        elements: {
          formButtonPrimary: 'bg-vibrant-orange hover:bg-vibrant-orange-600 text-white font-medium rounded-md px-4 py-2.5 transition-all duration-200 hover:scale-105 shadow-soft hover:shadow-medium',
          formButtonSecondary: 'border-2 border-dark-green-300 text-dark-green-600 hover:bg-dark-green-50 hover:border-dark-green-400 hover:text-dark-green-600 font-medium rounded-md px-4 py-2.5 transition-all duration-200 hover:scale-105 shadow-soft hover:shadow-medium bg-white',
          formInput: 'rounded-md border-2 border-dark-green-300 bg-white text-dark-green-600 placeholder-dark-green-400 focus:outline-none focus:ring-2 focus:ring-vibrant-orange focus:border-vibrant-orange transition-all duration-200 px-3 py-2.5 text-sm shadow-medium',
          formLabel: 'text-sm font-semibold text-dark-green-600 mb-2 block',
          formFieldInput: 'w-full',
          formField: 'mb-4',
          formFieldLabel: 'text-sm font-semibold text-dark-green-600 mb-2 block',
          formFieldInputRow: 'flex items-center gap-2',
          formFieldInputShowPasswordButton: 'text-dark-green-400 hover:text-dark-green-600 transition-colors duration-200',
          formFieldInputShowPasswordIcon: 'w-4 h-4',
          formHeaderTitle: 'text-2xl font-bold text-dark-green-600 mb-2',
          formHeaderSubtitle: 'text-sm text-dark-green-600 mb-6',
          formResendCodeLink: 'text-vibrant-orange hover:text-vibrant-orange-600 font-medium transition-colors duration-200',
          formFooterAction: 'text-sm text-dark-green-600',
          formFooterActionLink: 'text-vibrant-orange hover:text-vibrant-orange-600 font-medium transition-colors duration-200',
          card: 'bg-white rounded-lg shadow-lg border-2 border-dark-green-200 p-6',
          headerTitle: 'text-2xl font-bold text-dark-green-600',
          headerSubtitle: 'text-sm text-dark-green-600',
          socialButtonsBlockButton: 'border-2 border-dark-green-300 bg-white text-dark-green-600 hover:bg-dark-green-50 hover:border-dark-green-400 hover:text-dark-green-600 font-medium rounded-md px-4 py-2.5 transition-all duration-200 hover:scale-105 shadow-medium hover:shadow-lg',
          socialButtonsBlockButtonText: 'text-dark-green-600',
          dividerLine: 'bg-light-beige-200',
          dividerText: 'text-dark-green-500 font-medium text-sm',
          footerAction: 'text-sm text-dark-green-600',
          footerActionLink: 'text-vibrant-orange hover:text-vibrant-orange-600 font-medium transition-colors duration-200',
        }
      }}
    >
            <html lang="en" className={`${righteous.variable} ${manrope.variable} ${bebasNeue.variable}`}>
              <body className="bg-light-beige text-dark-green font-sans min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
              </body>
            </html>
    </ClerkProvider>
  );
}