import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "MJF 3D Друк - Additive3D",
  description: "Multi Jet Fusion (MJF) 3D друк від HP. Високопродуктивне виробництво функціональних деталей з PA12.",
};

export default function MJFPrintingPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="relative bg-gradient-to-b from-darker-bg to-dark-bg py-20 md:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: 'url(https://source.unsplash.com/1600x900/?3dprinter,industrial,manufacturing)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-darker-bg/90 to-dark-bg"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-light mb-6 tracking-tight">
              <span className="text-gold">MJF</span> 3D Друк
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed mb-8">
              Multi Jet Fusion - передова технологія для високопродуктивного виробництва
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6 tracking-tight">Що таке MJF?</h2>
              <p className="text-gray-medium leading-relaxed mb-4">
                Multi Jet Fusion (MJF) - це революційна технологія 3D друку від HP, яка використовує 
                інфрачервоне випромінювання для селективного спікання порошкового матеріалу. 
                Технологія забезпечує високу швидкість виробництва та чудову якість деталей.
              </p>
              <p className="text-gray-medium leading-relaxed">
                MJF ідеально підходить для функціональних прототипів та серійного виробництва 
                завдяки високій міцності деталей та відмінній повторюваності результатів.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8 tracking-tight">Переваги MJF</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-light mb-3">Висока швидкість</h3>
                  <p className="text-gray-medium text-sm">
                    Виробництво деталей у 10 разів швидше порівняно з традиційними методами
                  </p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-light mb-3">Чудова якість</h3>
                  <p className="text-gray-medium text-sm">
                    Ізотропні механічні властивості та гладка поверхня деталей
                  </p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-light mb-3">Економічність</h3>
                  <p className="text-gray-medium text-sm">
                    Низька вартість деталі завдяки високій продуктивності та повторному використанню порошку
                  </p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-light mb-3">Функціональність</h3>
                  <p className="text-gray-medium text-sm">
                    Деталі готові до використання без додаткової обробки
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8 tracking-tight">Застосування</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-darker-bg border border-border rounded-lg p-5 text-center">
                  <p className="text-gray-light font-medium">Функціональні прототипи</p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-5 text-center">
                  <p className="text-gray-light font-medium">Серійне виробництво</p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-5 text-center">
                  <p className="text-gray-light font-medium">Виробничі пристосування</p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-5 text-center">
                  <p className="text-gray-light font-medium">Кінцеві деталі</p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-5 text-center">
                  <p className="text-gray-light font-medium">Запасні частини</p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-5 text-center">
                  <p className="text-gray-light font-medium">Медичні вироби</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gold/10 border border-gold rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gold mb-4">Готові розпочати проект?</h3>
                <p className="text-gray-medium mb-6">
                  Отримайте безкоштовну консультацію та розрахунок вартості вашого проекту
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/calculator"
                    className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/materials/mjf"
                    className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors text-center"
                  >
                    Матеріали MJF
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
