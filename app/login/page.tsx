import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Вхід - A3D",
  description: "Вхід до особистого кабінету A3D",
};

export default function LoginPage() {
  return (
    <div className="bg-dark-bg flex min-h-screen items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto max-w-md">
          <div className="bg-card-bg border-border rounded-lg border p-8">
            <h1 className="text-gold mb-6 text-center text-3xl font-bold">
              Вхід
            </h1>
            <p className="text-gray-medium mb-8 text-center">
              Функціонал особистого кабінету буде доступний найближчим часом
            </p>
            <Link
              href="/"
              className="bg-gold text-dark-bg hover:bg-gold/90 block w-full rounded-lg px-6 py-3 text-center font-semibold transition-colors"
            >
              На головну
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
