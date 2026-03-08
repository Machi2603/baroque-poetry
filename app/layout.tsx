import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Poesía Barroca — Siglo XVII",
  description:
    "Una exploración de la poesía barroca española: Góngora, Quevedo y los grandes tópicos literarios del siglo XVII.",
  keywords: [
    "poesía barroca",
    "Góngora",
    "Quevedo",
    "literatura española",
    "siglo XVII",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${garamond.variable} ${dmSans.variable}`}
    >
      <body className="bg-[#0a0a0a] text-[#f5f5f7] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
