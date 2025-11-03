import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "FDM Обладнання - Additive3D",
  description: "Професійні FDM 3D принтери Stratasys для друку інженерних термопластиків.",
};

export default function FDMEquipmentPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-light mb-6 tracking-tight">
              Обладнання <span className="text-gold">FDM</span>
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed">
              Професійні системи Fused Deposition Modeling від Stratasys
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card-bg border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-gold mb-4">Stratasys Fortus 250mc</h2>
                  <p className="text-gray-medium mb-4">
                    Професійний 3D принтер для друку інженерних термопластиків з високою 
                    точністю та надійністю.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-medium"><span className="text-gray-light font-medium">Робоча область:</span> 254 × 254 × 305 мм</p>
                    <p className="text-gray-medium"><span className="text-gray-light font-medium">Точність:</span> ±0.127 мм</p>
                    <p className="text-gray-medium"><span className="text-gray-light font-medium">Матеріали:</span> ASA, PC-ABS, ULTEM, PC</p>
                  </div>
                </div>

                <div className="bg-card-bg border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-gold mb-4">Stratasys Dimension SST 1200es</h2>
                  <p className="text-gray-medium mb-4">
                    Надійна система для виробництва міцних деталей з чудовою повторюваністю результатів.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-medium"><span className="text-gray-light font-medium">Робоча область:</span> 254 × 254 × 305 мм</p>
                    <p className="text-gray-medium"><span className="text-gray-light font-medium">Точність:</span> ±0.127 мм</p>
                    <p className="text-gray-medium"><span className="text-gray-light font-medium">Матеріали:</span> ABS, ASA</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold text-gold mb-8 tracking-tight">Переваги FDM технології</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-darker-bg border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Широкий вибір матеріалів</h3>
                  <p className="text-gray-medium text-sm">
                    Від стандартних до високотемпературних інженерних пластиків
                  </p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Висока міцність</h3>
                  <p className="text-gray-medium text-sm">
                    Деталі витримують значні механічні навантаження
                  </p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Точність</h3>
                  <p className="text-gray-medium text-sm">
                    Точність до 0.127 мм для деталей складної геометрії
                  </p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Надійність</h3>
                  <p className="text-gray-medium text-sm">
                    Промислові системи для безперервної роботи
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border border-gold rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gold mb-4">Замовити FDM друк</h3>
                <p className="text-gray-medium mb-6">
                  Оберіть матеріал та отримайте розрахунок вартості
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/calculator"
                    className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/materials/fdm"
                    className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors text-center"
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
