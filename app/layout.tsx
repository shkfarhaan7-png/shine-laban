import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Shine Laban | Luxury Egyptian Desserts in Mumbai",
  description:
    "A cinematic, premium dessert experience for Shine Laban, serving indulgent Egyptian specialties in Mumbra."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <SmoothScrollProvider>
          <div className="site-shell">
            {children}
            <FloatingWhatsApp />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
