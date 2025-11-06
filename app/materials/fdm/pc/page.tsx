import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import MaterialTable from "@/components/MaterialTable";

export const metadata: Metadata = {
  title: "PC (Polycarbonate) FDM - Матеріали - A3D",
  description:
    "PC (Polycarbonate) для FDM 3D друку - надміцний прозорий матеріал.",
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
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-gradient-to-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl">
            <Link
              href="/materials"
              className="text-gold hover:text-gold/80 mb-4 inline-block transition-colors"
            >
              ← Назад
            </Link>
            <div className="mb-6 flex items-center gap-3">
              <span className="bg-gold/10 text-gold rounded-full px-4 py-2 text-sm font-semibold">
                FDM
              </span>
            </div>
            <h1 className="text-gray-light mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-gold">PC</span> (Polycarbonate)
            </h1>
            <p className="text-gray-medium text-xl">
              Надміцний прозорий матеріал з високою ударною в&apos;язкістю
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
                Полікарбонат - високоміцний інженерний термопластик з виняткovou
                ударною в&apos;язкістю та оптичною прозорістю. Один з
                найміцніших матеріалів для FDM 3D друку.
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
                    Захисні кожухи та панелі
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-4">
                  <p className="text-gray-medium text-sm">Оптичні компоненти</p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-4">
                  <p className="text-gray-medium text-sm">
                    Корпуси електроніки
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-4">
                  <p className="text-gray-medium text-sm">
                    Медичні інструменти
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border-gold rounded-lg border p-6">
                <h3 className="text-gold mb-4 text-2xl font-semibold">
                  Замовити друк з PC?
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
