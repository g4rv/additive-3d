import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Згладжування парою - Послуги - A3D",
  description:
    "Хімічне згладжування поверхні 3D друкованих деталей для досягнення гладкої поверхні.",
};

export default function VaporSmoothingPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-linear-to-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl">
            <h1 className="text-gray-light mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-gold">Згладжування</span> парою
            </h1>
            <p className="text-gray-medium text-xl leading-relaxed">
              Хімічне згладжування поверхні для досягнення гладкої, майже
              дзеркальної поверхні
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <AnimatedSection>
              <p className="text-gray-medium text-lg leading-relaxed">
                Згладжування парою - це процес хімічної обробки 3D друкованих
                деталей для покращення якості поверхні. Метод дозволяє усунути
                видимі шари друку та досягти гладкої поверхні.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gold/10 border-gold rounded-lg border p-6">
                <p className="text-gray-medium mb-4">
                  Детальна інформація про послугу буде додана найближчим часом.
                </p>
                <Link
                  href="/contacts"
                  className="bg-gold text-dark-bg hover:bg-gold/90 inline-block rounded-lg px-6 py-3 font-semibold transition-colors"
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
