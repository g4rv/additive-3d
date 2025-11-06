import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "FDM 3D Друк - Additive3D",
  description:
    "Fused Deposition Modeling (FDM) 3D друк. Широкий вибір інженерних термопластиків для різних застосувань.",
};

export default function FDMPrintingPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg relative overflow-hidden bg-linear-to-b py-20 md:py-28">
        <div
          className="absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/1600x900/?fdm,3dprinter,technology)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="from-darker-bg/90 to-dark-bg absolute inset-0 bg-linear-to-b"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h1 className="text-gray-light mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              <span className="text-gold">FDM</span> 3D Друк
            </h1>
            <p className="text-gray-medium mb-8 text-xl leading-relaxed">
              Fused Deposition Modeling - надійна технологія для інженерних
              застосувань
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-16">
            <AnimatedSection delay={0.1}>
              <h2 className="text-gold mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Що таке FDM?
              </h2>
              <p className="text-gray-medium mb-4 leading-relaxed">
                Fused Deposition Modeling (FDM) - це технологія пошарового
                нанесення розплавленого термопластику для створення тривимірних
                об&apos;єктів. Технологія відрізняється надійністю, доступністю
                та широким вибором матеріалів.
              </p>
              <p className="text-gray-medium leading-relaxed">
                FDM використовує промислові термопластики, які забезпечують
                високу міцність, термостійкість та хімічну стійкість деталей.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-gold mb-8 text-3xl font-bold tracking-tight md:text-4xl">
                Доступні матеріали
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Link
                  href="/materials/fdm/asa"
                  className="bg-card-bg border-border hover:border-gold group rounded-lg border p-6 transition-colors"
                >
                  <h3 className="text-gray-light group-hover:text-gold mb-3 text-xl font-semibold transition-colors">
                    ASA
                  </h3>
                  <p className="text-gray-medium text-sm">
                    УФ-стійкий матеріал для зовнішніх застосувань
                  </p>
                </Link>
                <Link
                  href="/materials/fdm/abs-pc"
                  className="bg-card-bg border-border hover:border-gold group rounded-lg border p-6 transition-colors"
                >
                  <h3 className="text-gray-light group-hover:text-gold mb-3 text-xl font-semibold transition-colors">
                    PC-ABS
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Суміш полікарбонату та ABS для підвищеної міцності
                  </p>
                </Link>
                <Link
                  href="/materials/fdm/ultem-9085"
                  className="bg-card-bg border-border hover:border-gold group rounded-lg border p-6 transition-colors"
                >
                  <h3 className="text-gray-light group-hover:text-gold mb-3 text-xl font-semibold transition-colors">
                    ULTEM 9085
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Високотемпературний матеріал з FST сертифікацією
                  </p>
                </Link>
                <Link
                  href="/materials/fdm/pc"
                  className="bg-card-bg border-border hover:border-gold group rounded-lg border p-6 transition-colors"
                >
                  <h3 className="text-gray-light group-hover:text-gold mb-3 text-xl font-semibold transition-colors">
                    PC (Polycarbonate)
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Надміцний прозорий матеріал з високою ударною в&apos;язкістю
                  </p>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-gold mb-8 text-3xl font-bold tracking-tight md:text-4xl">
                Переваги FDM
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-darker-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-2 text-lg font-semibold">
                    Широкий вибір матеріалів
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Від стандартних до високотемпературних інженерних пластиків
                  </p>
                </div>
                <div className="bg-darker-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-2 text-lg font-semibold">
                    Висока міцність
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Деталі витримують значні механічні навантаження
                  </p>
                </div>
                <div className="bg-darker-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-2 text-lg font-semibold">
                    Термостійкість
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Робочі температури до 186°C (ULTEM 9085)
                  </p>
                </div>
                <div className="bg-darker-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-2 text-lg font-semibold">
                    Хімічна стійкість
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Стійкість до масел, паливних сумішей та розчинників
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gold/10 border-gold rounded-lg border p-8">
                <h3 className="text-gold mb-4 text-2xl font-bold">
                  Замовити FDM друк
                </h3>
                <p className="text-gray-medium mb-6">
                  Оберіть матеріал та отримайте розрахунок вартості вашого
                  проекту
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/printing/calculator"
                    className="bg-gold text-dark-bg hover:bg-gold/90 rounded-lg px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/materials/fdm"
                    className="border-gold text-gold hover:bg-gold hover:text-dark-bg rounded-lg border px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Всі матеріали FDM
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
