import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Реверс-інжиніринг - Послуги - A3D",
  description: "Відтворення 3D моделей з фізичних об'єктів для модифікації або відтворення.",
};

export default function ReverseEngineeringPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-light mb-6">
              <span className="text-gold">Реверс-інжиніринг</span>
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed">
              Відтворення 3D моделей з фізичних об&apos;єктів на основі сканованих даних
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <AnimatedSection>
              <p className="text-gray-medium text-lg leading-relaxed">
                Реверс-інжиніринг дозволяє створити CAD модель на основі фізичного об&apos;єкта 
                для подальшої модифікації, відтворення або аналізу.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gold/10 border border-gold rounded-lg p-6">
                <p className="text-gray-medium mb-4">
                  Детальна інформація про послугу буде додана найближчим часом.
                </p>
                <Link
                  href="/contacts"
                  className="inline-block px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                >
                  Зв&apos;язатися для консультації
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
