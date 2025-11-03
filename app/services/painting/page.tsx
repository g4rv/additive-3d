import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Фарбування пластикових деталей - Послуги - A3D",
  description: "Професійне фарбування пластикових деталей. Широка палітра кольорів RAL та Pantone. Матові, глянцеві та текстуровані покриття.",
};

export default function PaintingPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-light mb-6">
              <span className="text-gold">Фарбування</span> пластикових деталей
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed">
              Професійне фарбування 3D друкованих деталей для покращення естетики та захисту поверхні
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-medium text-lg leading-relaxed mb-6">
                  Фарбування пластикових деталей — це процес нанесення захисного або декоративного покриття на поверхню 
                  виробів з пластику. Цей метод широко використовується для покращення зовнішнього вигляду, підвищення 
                  стійкості до зовнішніх факторів та надання деталям бажаного кольору або текстури.
                </p>

                <h2 className="text-3xl font-bold text-gold mb-6 mt-12">Основні методи фарбування пластику</h2>

                <div className="space-y-8">
                  <div className="bg-card-bg border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-gold mb-4">1. Фарбування розпиленням (spray painting)</h3>
                    <p className="text-gray-medium mb-4 leading-relaxed">
                      Один з найпопулярніших методів, який передбачає нанесення фарби за допомогою пульверизатора або 
                      аерозольного балончика.
                    </p>
                    <h4 className="text-lg font-semibold text-gray-light mb-3">Переваги:</h4>
                    <ul className="space-y-2 text-gray-medium mb-4">
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span>Рівномірне покриття поверхні</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span>Можливість створення складних кольорових ефектів</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span>Швидкість виконання</span>
                      </li>
                    </ul>
                    <h4 className="text-lg font-semibold text-gray-light mb-3">Застосування:</h4>
                    <p className="text-gray-medium">
                      Автомобільна промисловість, виробництво побутової техніки, декоративні вироби.
                    </p>
                  </div>

                  <div className="bg-card-bg border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-gold mb-4">2. Порошкове фарбування</h3>
                    <p className="text-gray-medium mb-4 leading-relaxed">
                      Метод нанесення сухої порошкової фарби на поверхню деталі з подальшим запіканням у печі.
                    </p>
                    <h4 className="text-lg font-semibold text-gray-light mb-3">Переваги:</h4>
                    <ul className="space-y-2 text-gray-medium mb-4">
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span>Висока міцність покриття</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span>Екологічність (відсутність розчинників)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span>Стійкість до корозії та механічних пошкоджень</span>
                      </li>
                    </ul>
                    <h4 className="text-lg font-semibold text-gray-light mb-3">Застосування:</h4>
                    <p className="text-gray-medium">
                      Промислові деталі, меблі, спортивний інвентар.
                    </p>
                  </div>

                  <div className="bg-card-bg border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-gold mb-4">3. Занурення у фарбу (dip coating)</h3>
                    <p className="text-gray-medium mb-4 leading-relaxed">
                      Деталь занурюється у рідку фарбу, після чого зайва фарба стікає, а покриття висихає.
                    </p>
                    <h4 className="text-lg font-semibold text-gray-light mb-3">Переваги:</h4>
                    <ul className="space-y-2 text-gray-medium mb-4">
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span>Простота процесу</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span>Рівномірне покриття складних форм</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span>Економічність для великих партій</span>
                      </li>
                    </ul>
                    <h4 className="text-lg font-semibold text-gray-light mb-3">Застосування:</h4>
                    <p className="text-gray-medium">
                      Дрібні деталі, інструменти, захисні покриття.
                    </p>
                  </div>

                  <div className="bg-card-bg border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-gold mb-4">4. Гідрографічне фарбування (hydrographics)</h3>
                    <p className="text-gray-medium mb-4 leading-relaxed">
                      Метод перенесення зображення з водорозчинної плівки на поверхню деталі.
                    </p>
                    <h4 className="text-lg font-semibold text-gray-light mb-3">Переваги:</h4>
                    <ul className="space-y-2 text-gray-medium mb-4">
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span>Можливість створення складних візерунків (дерево, камінь, карбон)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span>Покриття деталей будь-якої форми</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span>Унікальний зовнішній вигляд</span>
                      </li>
                    </ul>
                    <h4 className="text-lg font-semibold text-gray-light mb-3">Застосування:</h4>
                    <p className="text-gray-medium">
                      Автомобільний тюнінг, спортивне спорядження, декоративні елементи.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gold mb-6 mt-12">Типи фарб для пластику</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card-bg border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gold mb-3">Акрилові фарби</h3>
                    <p className="text-gray-medium text-sm leading-relaxed">
                      Швидко сохнуть, мають хорошу адгезію до пластику, доступні у широкій палітрі кольорів.
                    </p>
                  </div>
                  <div className="bg-card-bg border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gold mb-3">Поліуретанові фарби</h3>
                    <p className="text-gray-medium text-sm leading-relaxed">
                      Високоміцні, стійкі до хімічних речовин та механічних впливів.
                    </p>
                  </div>
                  <div className="bg-card-bg border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gold mb-3">Епоксидні фарби</h3>
                    <p className="text-gray-medium text-sm leading-relaxed">
                      Забезпечують міцне та довговічне покриття, стійке до води та хімікатів.
                    </p>
                  </div>
                  <div className="bg-card-bg border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gold mb-3">Спеціалізовані фарби</h3>
                    <p className="text-gray-medium text-sm leading-relaxed">
                      Для конкретних типів пластику (ABS, PC, PA тощо).
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gold mb-6 mt-12">Етапи фарбування пластикових деталей</h2>

                <div className="space-y-4">
                  <div className="bg-card-bg border-l-4 border-gold p-6">
                    <h3 className="text-xl font-semibold text-gray-light mb-2">1. Підготовка поверхні</h3>
                    <p className="text-gray-medium text-sm">
                      Очищення від бруду, жиру та пилу. Шліфування для покращення адгезії.
                    </p>
                  </div>
                  <div className="bg-card-bg border-l-4 border-gold p-6">
                    <h3 className="text-xl font-semibold text-gray-light mb-2">2. Грунтування</h3>
                    <p className="text-gray-medium text-sm">
                      Нанесення грунтовки для кращого зчеплення фарби з поверхнею.
                    </p>
                  </div>
                  <div className="bg-card-bg border-l-4 border-gold p-6">
                    <h3 className="text-xl font-semibold text-gray-light mb-2">3. Нанесення фарби</h3>
                    <p className="text-gray-medium text-sm">
                      Рівномірне нанесення фарби обраним методом (розпилення, занурення тощо).
                    </p>
                  </div>
                  <div className="bg-card-bg border-l-4 border-gold p-6">
                    <h3 className="text-xl font-semibold text-gray-light mb-2">4. Сушіння та затвердіння</h3>
                    <p className="text-gray-medium text-sm">
                      Природне висихання або термічна обробка залежно від типу фарби.
                    </p>
                  </div>
                  <div className="bg-card-bg border-l-4 border-gold p-6">
                    <h3 className="text-xl font-semibold text-gray-light mb-2">5. Фінішна обробка</h3>
                    <p className="text-gray-medium text-sm">
                      Полірування, нанесення захисного лаку (за потреби).
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gold mb-6 mt-12">Переваги фарбування пластику</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-gold text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="text-gray-light font-semibold mb-1">Покращення естетики</h4>
                      <p className="text-gray-medium text-sm">Надання виробу привабливого зовнішнього вигляду</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="text-gray-light font-semibold mb-1">Захист від УФ-випромінювання</h4>
                      <p className="text-gray-medium text-sm">Запобігання вигоранню та руйнуванню</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="text-gray-light font-semibold mb-1">Підвищення стійкості</h4>
                      <p className="text-gray-medium text-sm">До вологи, хімікатів та механічних впливів</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="text-gray-light font-semibold mb-1">Брендинг</h4>
                      <p className="text-gray-medium text-sm">Можливість нанесення логотипів та корпоративних кольорів</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border border-gold rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gold mb-4">Потрібне фарбування деталей?</h3>
                <p className="text-gray-medium mb-6">
                  Зв&apos;яжіться з нами для консультації щодо оптимального методу фарбування для ваших деталей
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contacts"
                    className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center"
                  >
                    Зв&apos;язатися з нами
                  </Link>
                  <Link
                    href="/services"
                    className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors text-center"
                  >
                    Всі послуги
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
