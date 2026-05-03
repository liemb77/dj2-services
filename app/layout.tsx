import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DJ2 Services | Industrial Engineering & Procurement Consulting",
  description:
    "DJ2 Services offers expert procurement, contract management, and logistics consulting with 25+ years of industrial engineering experience. Bilingual FR/EN. Available part-time or full-time.",
  keywords: [
    "procurement consulting",
    "contract management",
    "industrial engineering",
    "logistics coordination",
    "Quebec consultant",
    "bilingual consultant",
  ],
  openGraph: {
    title: "DJ2 Services | Industrial Engineering & Procurement Consulting",
    description:
      "25+ years of industrial engineering expertise. Managed projects up to $4B. Bilingual FR/EN consulting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased font-dm bg-bg-primary text-text-primary">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
