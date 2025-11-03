import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "MJF Обладнання - Additive3D",
  description: "HP Jet Fusion 5210 - промислова система Multi Jet Fusion для високопродуктивного 3D друку.",
};

export default function MJFEquipmentPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-light mb-6 tracking-tight">
              Обладнання <span className="text-gold">MJF</span>
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed">
              Промислові системи Multi Jet Fusion від HP
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <AnimatedSection delay={0.1}>
              <div className="bg-card-bg border border-border rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gold mb-6">HP Jet Fusion 5210</h2>
                <p className="text-gray-medium leading-relaxed mb-6">
                  Промислова система Multi Jet Fusion для високопродуктивного друку функціональних 
                  деталей з PA12. Забезпечує відмінну якість, швидкість та економічність виробництва.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-light mb-2">Робоча область</h3>
                    <p className="text-gray-medium text-sm">380 × 284 × 380 мм</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-light mb-2">Швидкість</h3>
                    <p className="text-gray-medium text-sm">До 5000 см³/год</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-light mb-2">Точність</h3>
                    <p className="text-gray-medium text-sm">±0.3 мм (до 100 мм)</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-light mb-2">Матеріали</h3>
                    <p className="text-gray-medium text-sm">PA12 (Nylon 12)</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold text-gold mb-8 tracking-tight">Переваги технології</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-darker-bg border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Висока продуктивність</h3>
                  <p className="text-gray-medium text-sm">
                    Виробництво великих партій деталей за короткий час
                  </p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Чудова якість</h3>
                  <p className="text-gray-medium text-sm">
                    Ізотропні властивості та гладка поверхня деталей
                  </p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Економічність</h3>
                  <p className="text-gray-medium text-sm">
                    Повторне використання до 80% порошку
                  </p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Надійність</h3>
                  <p className="text-gray-medium text-sm">
                    Стабільна робота та відмінна повторюваність
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border border-gold rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gold mb-4">Замовити MJF друк</h3>
                <p className="text-gray-medium mb-6">
                  Скористайтеся перевагами промислової системи HP Jet Fusion
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/calculator"
                    className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/3d-printing/mjf"
                    className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors text-center"
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
