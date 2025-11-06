import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import MaterialTable from "@/components/MaterialTable";

export const metadata: Metadata = {
  title: "ASA FDM - Матеріали - A3D",
  description:
    "ASA для FDM 3D друку - УФ-стійкий матеріал для зовнішніх застосувань.",
};

const technicalData = [
  { property: "Міцність на розтяг", value: "36", unit: "МПа" },
  { property: "Модуль пружності", value: "2100", unit: "МПа" },
  { property: "Відносне подовження", value: "9", unit: "%" },
  { property: "Температура теплостійкості", value: "96", unit: "°C" },
  { property: "Густина", value: "1.07", unit: "г/см³" },
];

export default function ASAPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-gradient-to-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl">
            <Link
              href="/materials"
              className="text-gold hover:text-gold/80 mb-4 inline-block transition-colors"
            >
              ← Назад до матеріалів
            </Link>
            <div className="mb-6 flex items-center gap-3">
              <span className="bg-gold/10 text-gold inline-block rounded-full px-4 py-2 text-sm font-semibold">
                FDM
              </span>
            </div>
            <h1 className="text-gray-light mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-gold">ASA</span>
            </h1>
            <p className="text-gray-medium text-xl leading-relaxed">
              УФ-стійкий матеріал для зовнішніх застосувань з чудовою
              погодостійкістю
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            <AnimatedSection>
              <h2 className="text-gold mb-6 text-3xl font-bold">Опис</h2>
              <p className="text-gray-medium leading-relaxed">
                ASA (Acrylonitrile Styrene Acrylate) - це термопластичний
                полімер, схожий на ABS, але з покращеною стійкістю до
                УФ-випромінювання та атмосферних впливів. Ідеально підходить для
                деталей, які експлуатуються на відкритому повітрі.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-gold mb-6 text-3xl font-bold">
                Технічні характеристики
              </h2>
              <MaterialTable data={technicalData} />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-gold mb-6 text-3xl font-bold">
                Застосування
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="bg-card-bg border-border rounded-lg border p-4">
                  <p className="text-gray-medium text-sm">
                    Зовнішні корпуси та панелі
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-4">
                  <p className="text-gray-medium text-sm">
                    Автомобільні деталі
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-4">
                  <p className="text-gray-medium text-sm">Садова техніка</p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-4">
                  <p className="text-gray-medium text-sm">
                    Рекламні конструкції
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border-gold rounded-lg border p-6">
                <h3 className="text-gold mb-4 text-2xl font-semibold">
                  Замовити друк з ASA?
                </h3>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/calculator"
                    className="bg-gold text-dark-bg hover:bg-gold/90 rounded-lg px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/contacts"
                    className="border-gold text-gold hover:bg-gold hover:text-dark-bg rounded-lg border px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Зв&apos;язатися
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
