import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "FDM Обладнання - Additive3D",
  description:
    "Професійні FDM 3D принтери Stratasys для друку інженерних термопластиків.",
};

export default function FDMEquipmentPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-gradient-to-b py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h1 className="text-gray-light mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Обладнання <span className="text-gold">FDM</span>
            </h1>
            <p className="text-gray-medium text-xl leading-relaxed">
              Професійні системи Fused Deposition Modeling від Stratasys
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-16">
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-card-bg border-border rounded-lg border p-8">
                  <h2 className="text-gold mb-4 text-2xl font-bold">
                    Stratasys Fortus 250mc
                  </h2>
                  <p className="text-gray-medium mb-4">
                    Професійний 3D принтер для друку інженерних термопластиків з
                    високою точністю та надійністю.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-medium">
                      <span className="text-gray-light font-medium">
                        Робоча область:
                      </span>{" "}
                      254 × 254 × 305 мм
                    </p>
                    <p className="text-gray-medium">
                      <span className="text-gray-light font-medium">
                        Точність:
                      </span>{" "}
                      ±0.127 мм
                    </p>
                    <p className="text-gray-medium">
                      <span className="text-gray-light font-medium">
                        Матеріали:
                      </span>{" "}
                      ASA, PC-ABS, ULTEM, PC
                    </p>
                  </div>
                </div>

                <div className="bg-card-bg border-border rounded-lg border p-8">
                  <h2 className="text-gold mb-4 text-2xl font-bold">
                    Stratasys Dimension SST 1200es
                  </h2>
                  <p className="text-gray-medium mb-4">
                    Надійна система для виробництва міцних деталей з чудовою
                    повторюваністю результатів.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-medium">
                      <span className="text-gray-light font-medium">
                        Робоча область:
                      </span>{" "}
                      254 × 254 × 305 мм
                    </p>
                    <p className="text-gray-medium">
                      <span className="text-gray-light font-medium">
                        Точність:
                      </span>{" "}
                      ±0.127 мм
                    </p>
                    <p className="text-gray-medium">
                      <span className="text-gray-light font-medium">
                        Матеріали:
                      </span>{" "}
                      ABS, ASA
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-gold mb-8 text-3xl font-bold tracking-tight">
                Переваги FDM технології
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
                    Точність
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Точність до 0.127 мм для деталей складної геометрії
                  </p>
                </div>
                <div className="bg-darker-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-2 text-lg font-semibold">
                    Надійність
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Промислові системи для безперервної роботи
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border-gold rounded-lg border p-8">
                <h3 className="text-gold mb-4 text-2xl font-bold">
                  Замовити FDM друк
                </h3>
                <p className="text-gray-medium mb-6">
                  Оберіть матеріал та отримайте розрахунок вартості
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/calculator"
                    className="bg-gold text-dark-bg hover:bg-gold/90 rounded-lg px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/materials/fdm"
                    className="border-gold text-gold hover:bg-gold hover:text-dark-bg rounded-lg border px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Матеріали FDM
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
