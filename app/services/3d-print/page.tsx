import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "3D друк - Послуги - A3D",
  description:
    "Професійний 3D друк на технологіях FDM та MJF. Широкий вибір інженерних матеріалів для прототипування та серійного виробництва.",
};

export default function ThreeDPrintPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-linear-to-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl">
            <h1 className="text-gray-light mb-6 text-4xl font-bold md:text-5xl">
              3D <span className="text-gold">друк</span>
            </h1>
            <p className="text-gray-medium text-xl leading-relaxed">
              Професійний 3D друк на промисловому обладнанні з використанням
              передових технологій FDM та MJF.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            <AnimatedSection>
              <h2 className="text-gold mb-6 text-3xl font-bold">
                Технології 3D друку
              </h2>

              <div className="space-y-8">
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gold mb-4 text-2xl font-semibold">
                    FDM (Fused Deposition Modeling)
                  </h3>
                  <p className="text-gray-medium mb-4 leading-relaxed">
                    Технологія пошарового наплавлення термопластичних
                    матеріалів. Ідеально підходить для створення міцних
                    функціональних деталей з інженерних пластиків.
                  </p>
                  <h4 className="text-gray-light mb-3 text-lg font-semibold">
                    Переваги FDM:
                  </h4>
                  <ul className="text-gray-medium space-y-2">
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>
                        Висока міцність деталей завдяки шаруватій структурі
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>
                        Широкий вибір інженерних матеріалів (ASA, ABS-PC, ULTEM,
                        PC)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>
                        Можливість друку великих деталей (до 254 x 254 x 305 мм)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>
                        Термостійкість та хімічна стійкість матеріалів
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>
                        Сертифіковані матеріали для авіаційної промисловості
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gold mb-4 text-2xl font-semibold">
                    MJF (Multi Jet Fusion)
                  </h3>
                  <p className="text-gray-medium mb-4 leading-relaxed">
                    Технологія HP Multi Jet Fusion використовує інфрачервоне
                    випромінювання для спікання порошкового нейлону PA12.
                    Забезпечує високу точність та чудові механічні властивості.
                  </p>
                  <h4 className="text-gray-light mb-3 text-lg font-semibold">
                    Переваги MJF:
                  </h4>
                  <ul className="text-gray-medium space-y-2">
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Висока деталізація та точність (до 0.1 мм)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>
                        Ізотропні механічні властивості (однакова міцність у
                        всіх напрямках)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Швидкість виробництва - до 4115 см³/год</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Гладка поверхня без видимих шарів</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>
                        Можливість друку складних геометрій без підтримок
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Ідеально для серійного виробництва</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-gold mb-6 text-3xl font-bold">
                Застосування
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-3 text-xl font-semibold">
                    Прототипування
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Швидке створення прототипів для тестування форми, посадки та
                    функціональності
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-3 text-xl font-semibold">
                    Серійне виробництво
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Виробництво малих та середніх серій функціональних деталей
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-3 text-xl font-semibold">
                    Оснастка та інструменти
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Виробничі пристосування, шаблони, кондуктори
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-3 text-xl font-semibold">
                    Запасні частини
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Відтворення деталей, які більше не виробляються
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border-gold rounded-lg border p-6">
                <h3 className="text-gold mb-4 text-2xl font-semibold">
                  Готові замовити 3D друк?
                </h3>
                <p className="text-gray-medium mb-6">
                  Завантажте вашу 3D модель та отримайте розрахунок вартості за
                  лічені хвилини
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/calculator"
                    className="bg-gold text-dark-bg hover:bg-gold/90 rounded-lg px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/materials"
                    className="border-gold text-gold hover:bg-gold hover:text-dark-bg rounded-lg border px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Переглянути матеріали
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
