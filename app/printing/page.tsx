import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "3D Друк - Additive3D",
  description:
    "Професійні послуги 3D друку. Технології MJF та FDM для прототипування та серійного виробництва.",
};

export default function PrintingPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg relative overflow-hidden bg-linear-to-b py-20 md:py-28">
        <div className="relative z-10 container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h1 className="text-gray-light mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              <span className="text-gold">3D Друк</span>
            </h1>
            <p className="text-gray-medium mb-8 text-xl leading-relaxed">
              Передові технології адитивного виробництва
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <AnimatedSection delay={0.1}>
                <Link href="/printing/mjf">
                  <div className="bg-card-bg border-border hover:border-gold group rounded-lg border p-8 transition-all hover:shadow-xl">
                    <h2 className="text-gold mb-4 text-3xl font-bold">MJF</h2>
                    <p className="text-gray-medium mb-6 leading-relaxed">
                      Multi Jet Fusion - високопродуктивна технологія для серійного виробництва деталей з PA12
                    </p>
                    <span className="text-gold group-hover:underline">
                      Детальніше →
                    </span>
                  </div>
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Link href="/printing/fdm">
                  <div className="bg-card-bg border-border hover:border-gold group rounded-lg border p-8 transition-all hover:shadow-xl">
                    <h2 className="text-gold mb-4 text-3xl font-bold">FDM</h2>
                    <p className="text-gray-medium mb-6 leading-relaxed">
                      Fused Deposition Modeling - широкий вибір інженерних матеріалів для функціональних деталей
                    </p>
                    <span className="text-gold group-hover:underline">
                      Детальніше →
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.3} className="mt-12 text-center">
              <Link
                href="/printing/calculator"
                className="bg-gold text-dark-bg hover:bg-gold/90 inline-block rounded-lg px-8 py-4 font-semibold shadow-lg transition-colors"
              >
                Розрахувати вартість
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
