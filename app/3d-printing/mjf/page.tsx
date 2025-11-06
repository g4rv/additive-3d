import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "MJF 3D Друк - Additive3D",
  description:
    "Multi Jet Fusion (MJF) 3D друк від HP. Високопродуктивне виробництво функціональних деталей з PA12.",
};

export default function MJFPrintingPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg relative overflow-hidden bg-linear-to-b py-20 md:py-28">
        <div
          className="absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/1600x900/?3dprinter,industrial,manufacturing)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="from-darker-bg/90 to-dark-bg absolute inset-0 bg-linear-to-b"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h1 className="text-gray-light mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              <span className="text-gold">MJF</span> 3D Друк
            </h1>
            <p className="text-gray-medium mb-8 text-xl leading-relaxed">
              Multi Jet Fusion - передова технологія для високопродуктивного
              виробництва
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-16">
            <AnimatedSection delay={0.1}>
              <h2 className="text-gold mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Що таке MJF?
              </h2>
              <p className="text-gray-medium mb-4 leading-relaxed">
                Multi Jet Fusion (MJF) - це революційна технологія 3D друку від
                HP, яка використовує інфрачервоне випромінювання для
                селективного спікання порошкового матеріалу. Технологія
                забезпечує високу швидкість виробництва та чудову якість
                деталей.
              </p>
              <p className="text-gray-medium leading-relaxed">
                MJF ідеально підходить для функціональних прототипів та
                серійного виробництва завдяки високій міцності деталей та
                відмінній повторюваності результатів.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-gold mb-8 text-3xl font-bold tracking-tight md:text-4xl">
                Переваги MJF
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-3 text-xl font-semibold">
                    Висока швидкість
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Виробництво деталей у 10 разів швидше порівняно з
                    традиційними методами
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-3 text-xl font-semibold">
                    Чудова якість
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Ізотропні механічні властивості та гладка поверхня деталей
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-3 text-xl font-semibold">
                    Економічність
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Низька вартість деталі завдяки високій продуктивності та
                    повторному використанню порошку
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-3 text-xl font-semibold">
                    Функціональність
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Деталі готові до використання без додаткової обробки
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-gold mb-8 text-3xl font-bold tracking-tight md:text-4xl">
                Застосування
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="bg-darker-bg border-border rounded-lg border p-5 text-center">
                  <p className="text-gray-light font-medium">
                    Функціональні прототипи
                  </p>
                </div>
                <div className="bg-darker-bg border-border rounded-lg border p-5 text-center">
                  <p className="text-gray-light font-medium">
                    Серійне виробництво
                  </p>
                </div>
                <div className="bg-darker-bg border-border rounded-lg border p-5 text-center">
                  <p className="text-gray-light font-medium">
                    Виробничі пристосування
                  </p>
                </div>
                <div className="bg-darker-bg border-border rounded-lg border p-5 text-center">
                  <p className="text-gray-light font-medium">Кінцеві деталі</p>
                </div>
                <div className="bg-darker-bg border-border rounded-lg border p-5 text-center">
                  <p className="text-gray-light font-medium">Запасні частини</p>
                </div>
                <div className="bg-darker-bg border-border rounded-lg border p-5 text-center">
                  <p className="text-gray-light font-medium">Медичні вироби</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gold/10 border-gold rounded-lg border p-8">
                <h3 className="text-gold mb-4 text-2xl font-bold">
                  Готові розпочати проект?
                </h3>
                <p className="text-gray-medium mb-6">
                  Отримайте безкоштовну консультацію та розрахунок вартості
                  вашого проекту
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/calculator"
                    className="bg-gold text-dark-bg hover:bg-gold/90 rounded-lg px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/materials/mjf"
                    className="border-gold text-gold hover:bg-gold hover:text-dark-bg rounded-lg border px-6 py-3 text-center font-semibold transition-colors"
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
