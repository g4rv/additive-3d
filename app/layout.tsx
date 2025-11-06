import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Additive3D - Професійний 3D друк та сканування",
  description:
    "Професійні послуги 3D друку, сканування та реверс-інжинірингу в Україні. Технології FDM, MJF для прототипування та серійного виробництва.",
  keywords: [
    "3D друк",
    "3D сканування",
    "адитивні технології",
    "FDM",
    "MJF",
    "PA12",
    "ULTEM",
    "Stratasys",
    "HP Jet Fusion",
  ],
  openGraph: {
    title: "Additive3D - Професійний 3D друк та сканування",
    description:
      "Професійні послуги 3D друку, сканування та реверс-інжинірингу",
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
      <body
        className={`${inter.className} bg-dark-bg text-gray-light flex h-full min-h-screen flex-col overflow-x-hidden antialiased`}
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
