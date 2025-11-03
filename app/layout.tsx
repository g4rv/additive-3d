import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "A3D - Професійний 3D друк та сканування",
  description: "A3D - лідер у сфері адитивних технологій. Професійний 3D друк (FDM, MJF), 3D сканування, реверс-інжиніринг та інспекція геометрії.",
  keywords: ["3D друк", "3D сканування", "адитивні технології", "FDM", "MJF", "PA12", "ULTEM", "Stratasys", "HP Jet Fusion"],
  openGraph: {
    title: "A3D - Професійний 3D друк та сканування",
    description: "Професійні послуги 3D друку, сканування та реверс-інжинірингу",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="h-full">
      <body className={`${inter.className} antialiased flex flex-col h-full min-h-screen bg-dark-bg text-gray-light`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
