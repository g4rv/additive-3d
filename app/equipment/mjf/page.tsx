import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "MJF Обладнання - Additive3D",
  description:
    "HP Jet Fusion 5210 - промислова система Multi Jet Fusion для високопродуктивного 3D друку.",
};

export default function MJFEquipmentPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-gradient-to-b py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h1 className="text-gray-light mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Обладнання <span className="text-gold">MJF</span>
            </h1>
            <p className="text-gray-medium text-xl leading-relaxed">
              Промислові системи Multi Jet Fusion від HP
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-16">
            <AnimatedSection delay={0.1}>
              <div className="bg-card-bg border-border rounded-lg border p-8">
                <h2 className="text-gold mb-6 text-3xl font-bold">
                  HP Jet Fusion 5210
                </h2>
                <p className="text-gray-medium mb-6 leading-relaxed">
                  Промислова система Multi Jet Fusion для високопродуктивного
                  друку функціональних деталей з PA12. Забезпечує відмінну
                  якість, швидкість та економічність виробництва.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-gray-light mb-2 text-lg font-semibold">
                      Робоча область
                    </h3>
                    <p className="text-gray-medium text-sm">
                      380 × 284 × 380 мм
                    </p>
                  </div>
                  <div>
                    <h3 className="text-gray-light mb-2 text-lg font-semibold">
                      Швидкість
                    </h3>
                    <p className="text-gray-medium text-sm">До 5000 см³/год</p>
                  </div>
                  <div>
                    <h3 className="text-gray-light mb-2 text-lg font-semibold">
                      Точність
                    </h3>
                    <p className="text-gray-medium text-sm">
                      ±0.3 мм (до 100 мм)
                    </p>
                  </div>
                  <div>
                    <h3 className="text-gray-light mb-2 text-lg font-semibold">
                      Матеріали
                    </h3>
                    <p className="text-gray-medium text-sm">PA12 (Nylon 12)</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-gold mb-8 text-3xl font-bold tracking-tight">
                Переваги технології
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-darker-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-2 text-lg font-semibold">
                    Висока продуктивність
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Виробництво великих партій деталей за короткий час
                  </p>
                </div>
                <div className="bg-darker-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-2 text-lg font-semibold">
                    Чудова якість
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Ізотропні властивості та гладка поверхня деталей
                  </p>
                </div>
                <div className="bg-darker-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-2 text-lg font-semibold">
                    Економічність
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Повторне використання до 80% порошку
                  </p>
                </div>
                <div className="bg-darker-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-2 text-lg font-semibold">
                    Надійність
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Стабільна робота та відмінна повторюваність
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border-gold rounded-lg border p-8">
                <h3 className="text-gold mb-4 text-2xl font-bold">
                  Замовити MJF друк
                </h3>
                <p className="text-gray-medium mb-6">
                  Скористайтеся перевагами промислової системи HP Jet Fusion
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/calculator"
                    className="bg-gold text-dark-bg hover:bg-gold/90 rounded-lg px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/3d-printing/mjf"
                    className="border-gold text-gold hover:bg-gold hover:text-dark-bg rounded-lg border px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Про технологію MJF
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
