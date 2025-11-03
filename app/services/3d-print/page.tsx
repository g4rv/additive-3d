import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "3D друк - Послуги - A3D",
  description: "Професійний 3D друк на технологіях FDM та MJF. Широкий вибір інженерних матеріалів для прототипування та серійного виробництва.",
};

export default function ThreeDPrintPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-light mb-6">
              3D <span className="text-gold">друк</span>
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed">
              Професійний 3D друк на промисловому обладнанні з використанням передових технологій FDM та MJF.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gold mb-6">Технології 3D друку</h2>
              
              <div className="space-y-8">
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gold mb-4">FDM (Fused Deposition Modeling)</h3>
                  <p className="text-gray-medium mb-4 leading-relaxed">
                    Технологія пошарового наплавлення термопластичних матеріалів. Ідеально підходить для створення 
                    міцних функціональних деталей з інженерних пластиків.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-light mb-3">Переваги FDM:</h4>
                  <ul className="space-y-2 text-gray-medium">
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Висока міцність деталей завдяки шаруватій структурі</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Широкий вибір інженерних матеріалів (ASA, ABS-PC, ULTEM, PC)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Можливість друку великих деталей (до 254 x 254 x 305 мм)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Термостійкість та хімічна стійкість матеріалів</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Сертифіковані матеріали для авіаційної промисловості</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gold mb-4">MJF (Multi Jet Fusion)</h3>
                  <p className="text-gray-medium mb-4 leading-relaxed">
                    Технологія HP Multi Jet Fusion використовує інфрачервоне випромінювання для спікання порошкового 
                    нейлону PA12. Забезпечує високу точність та чудові механічні властивості.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-light mb-3">Переваги MJF:</h4>
                  <ul className="space-y-2 text-gray-medium">
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Висока деталізація та точність (до 0.1 мм)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Ізотропні механічні властивості (однакова міцність у всіх напрямках)</span>
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
                      <span>Можливість друку складних геометрій без підтримок</span>
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
              <h2 className="text-3xl font-bold text-gold mb-6">Застосування</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-light mb-3">Прототипування</h3>
                  <p className="text-gray-medium text-sm">
                    Швидке створення прототипів для тестування форми, посадки та функціональності
                  </p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-light mb-3">Серійне виробництво</h3>
                  <p className="text-gray-medium text-sm">
                    Виробництво малих та середніх серій функціональних деталей
                  </p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-light mb-3">Оснастка та інструменти</h3>
                  <p className="text-gray-medium text-sm">
                    Виробничі пристосування, шаблони, кондуктори
                  </p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-light mb-3">Запасні частини</h3>
                  <p className="text-gray-medium text-sm">
                    Відтворення деталей, які більше не виробляються
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border border-gold rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gold mb-4">Готові замовити 3D друк?</h3>
                <p className="text-gray-medium mb-6">
                  Завантажте вашу 3D модель та отримайте розрахунок вартості за лічені хвилини
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/calculator"
                    className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/materials"
                    className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors text-center"
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
