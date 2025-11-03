import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import MaterialTable from "@/components/MaterialTable";

export const metadata: Metadata = {
  title: "ASA FDM - Матеріали - A3D",
  description: "ASA для FDM 3D друку - УФ-стійкий матеріал для зовнішніх застосувань.",
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
    <div className="min-h-screen bg-dark-bg">
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <Link href="/materials" className="text-gold hover:text-gold/80 transition-colors mb-4 inline-block">
              ← Назад до матеріалів
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full">
                FDM
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-light mb-6">
              <span className="text-gold">ASA</span>
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed">
              УФ-стійкий матеріал для зовнішніх застосувань з чудовою погодостійкістю
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gold mb-6">Опис</h2>
              <p className="text-gray-medium leading-relaxed">
                ASA (Acrylonitrile Styrene Acrylate) - це термопластичний полімер, схожий на ABS, але з покращеною 
                стійкістю до УФ-випромінювання та атмосферних впливів. Ідеально підходить для деталей, які 
                експлуатуються на відкритому повітрі.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl font-bold text-gold mb-6">Технічні характеристики</h2>
              <MaterialTable data={technicalData} />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold text-gold mb-6">Застосування</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card-bg border border-border rounded-lg p-4">
                  <p className="text-gray-medium text-sm">Зовнішні корпуси та панелі</p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-4">
                  <p className="text-gray-medium text-sm">Автомобільні деталі</p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-4">
                  <p className="text-gray-medium text-sm">Садова техніка</p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-4">
                  <p className="text-gray-medium text-sm">Рекламні конструкції</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border border-gold rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gold mb-4">Замовити друк з ASA?</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/calculator"
                    className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/contacts"
                    className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors text-center"
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
