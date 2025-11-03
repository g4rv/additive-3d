import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import MaterialTable from "@/components/MaterialTable";

export const metadata: Metadata = {
  title: "PC (Polycarbonate) FDM - Матеріали - A3D",
  description: "PC (Polycarbonate) для FDM 3D друку - надміцний прозорий матеріал.",
};

const technicalData = [
  { property: "Міцність на розтяг", value: "57", unit: "МПа" },
  { property: "Модуль пружності", value: "2300", unit: "МПа" },
  { property: "Ударна в'язкість", value: "600+", unit: "Дж/м" },
  { property: "Температура теплостійкості", value: "138", unit: "°C" },
  { property: "Густина", value: "1.20", unit: "г/см³" },
];

export default function PCPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <Link href="/materials" className="text-gold hover:text-gold/80 transition-colors mb-4 inline-block">
              ← Назад
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full">FDM</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-light mb-6">
              <span className="text-gold">PC</span> (Polycarbonate)
            </h1>
            <p className="text-xl text-gray-medium">Надміцний прозорий матеріал з високою ударною в&apos;язкістю</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gold mb-6">Опис</h2>
              <p className="text-gray-medium leading-relaxed">
                Полікарбонат - високоміцний інженерний термопластик з виняткovou ударною в&apos;язкістю 
                та оптичною прозорістю. Один з найміцніших матеріалів для FDM 3D друку.
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
                  <p className="text-gray-medium text-sm">Захисні кожухи та панелі</p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-4">
                  <p className="text-gray-medium text-sm">Оптичні компоненти</p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-4">
                  <p className="text-gray-medium text-sm">Корпуси електроніки</p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-4">
                  <p className="text-gray-medium text-sm">Медичні інструменти</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border border-gold rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gold mb-4">Замовити друк з PC?</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/calculator" className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center">
                    Розрахувати вартість
                  </Link>
                  <Link href="/contacts" className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors text-center">
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
