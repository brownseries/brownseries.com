import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BROWNSERIES — Coming Soon",
  description:
    "BROWNSERIES — A premium clothing brand. Something extraordinary is coming. Stay tuned.",
  keywords: ["clothing", "fashion", "premium", "brownseries", "coming soon"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {/* Top Navigation — Brand Only */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-6 px-8 bg-background/60 backdrop-blur-xl border-b border-border/40">
          <span className="text-base tracking-[0.35em] font-light text-foreground uppercase">
            BROWNSERIES
          </span>
        </nav>

        {children}
      </body>
    </html>
  );
}
