import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import CartDrawer from "@/components/cart/CartDrawer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Brown Series",
  description: "Contemporary fashion rooted in earth tones and timeless design.",
  keywords: ["clothing", "fashion", "premium", "brownseries", "earth tones"],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Brown Series",
  },
  applicationName: "Brown Series",
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0a0807",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cormorant.variable} antialiased`}>
        {/* Top Navigation — Brand Name Only */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-5 px-8 bg-background/70 backdrop-blur-md border-b border-border/30">
          <span
            className="font-[family-name:var(--font-outfit)] text-sm tracking-[0.4em] font-extralight text-warm-white uppercase"
          >
            BROWN SERIES
          </span>
        </nav>

        {children}
        <CartDrawer />
      </body>
    </html>
  );
}
