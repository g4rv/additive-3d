import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Вхід - A3D",
  description: "Вхід до особистого кабінету A3D",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-md mx-auto">
          <div className="bg-card-bg border border-border rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gold mb-6 text-center">Вхід</h1>
            <p className="text-gray-medium text-center mb-8">
              Функціонал особистого кабінету буде доступний найближчим часом
            </p>
            <Link
              href="/"
              className="block w-full px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center"
            >
              На головну
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
