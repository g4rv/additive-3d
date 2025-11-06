import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Про нас - A3D",
  description:
    "A3D - провідна компанія у сфері адитивних технологій в Україні. Професійний 3D друк та сканування.",
};

export default function AboutPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-linear-to-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-gray-light mb-6 text-4xl font-bold md:text-5xl">
              Про <span className="text-gold">A3D</span>
            </h1>
            <p className="text-gray-medium text-xl leading-relaxed">
              Ваш надійний партнер у світі адитивних технологій
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            <AnimatedSection>
              <h2 className="text-gold mb-6 text-3xl font-bold">Хто ми</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-medium mb-4 text-lg leading-relaxed">
                  A3D - це провідна компанія у сфері адитивних технологій в
                  Україні. Ми спеціалізуємося на професійному 3D друку, 3D
                  скануванні та супутніх послугах для бізнесу та промисловості.
                </p>
                <p className="text-gray-medium text-lg leading-relaxed">
                  Наша місія - зробити передові технології адитивного
                  виробництва доступними для українських компаній, допомагаючи
                  їм впроваджувати інновації та підвищувати
                  конкурентоспроможність.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-gold mb-6 text-3xl font-bold">
                Наші цінності
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <div className="mb-3 text-4xl">🎯</div>
                  <h3 className="text-gold mb-3 text-xl font-semibold">
                    Якість
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Використовуємо тільки професійне обладнання та сертифіковані
                    матеріали від провідних виробників
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <div className="mb-3 text-4xl">⚡</div>
                  <h3 className="text-gold mb-3 text-xl font-semibold">
                    Швидкість
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Оперативне виконання замовлень без компромісів щодо якості
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <div className="mb-3 text-4xl">🔧</div>
                  <h3 className="text-gold mb-3 text-xl font-semibold">
                    Експертиза
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Команда досвідчених фахівців з глибокими знаннями у
                    адитивних технологіях
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <div className="mb-3 text-4xl">💼</div>
                  <h3 className="text-gold mb-3 text-xl font-semibold">
                    Індивідуальний підхід
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Кожен проект унікальний - ми знаходимо оптимальне рішення
                    для ваших потреб
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-gold mb-6 text-3xl font-bold">
                Наше обладнання
              </h2>
              <div className="bg-card-bg border-border rounded-lg border p-6">
                <p className="text-gray-medium mb-4">
                  Ми інвестуємо в найсучасніше обладнання для забезпечення
                  найвищої якості послуг:
                </p>
                <ul className="text-gray-medium space-y-3">
                  <li className="flex items-start">
                    <span className="text-gold mr-3">•</span>
                    <span>
                      <strong className="text-gray-light">
                        HP Jet Fusion 5210
                      </strong>{" "}
                      - промислова система MJF для високоточного друку з PA12
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">•</span>
                    <span>
                      <strong className="text-gray-light">
                        Stratasys Fortus 250mc
                      </strong>{" "}
                      - професійний FDM принтер для інженерних матеріалів
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">•</span>
                    <span>
                      <strong className="text-gray-light">
                        Stratasys Dimension SST 1200es
                      </strong>{" "}
                      - надійна система для ABS друку
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">•</span>
                    <span>
                      <strong className="text-gray-light">
                        Професійні 3D сканери
                      </strong>{" "}
                      - для високоточного сканування об&apos;єктів
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-gold mb-6 text-3xl font-bold">
                Чому обирають нас
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-gold mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Багаторічний досвід
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Працюємо з адитивними технологіями з моменту їх появи на
                      ринку
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Широкий спектр послуг
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Від 3D моделювання до постобробки готових деталей
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Конкурентні ціни
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Оптимальне співвідношення ціни та якості
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Підтримка на всіх етапах
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Консультації та супровід від ідеї до готового виробу
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gold/10 border-gold rounded-lg border p-8 text-center">
                <h3 className="text-gold mb-4 text-2xl font-bold">
                  Готові працювати з нами?
                </h3>
                <p className="text-gray-medium mb-6">
                  Зв&apos;яжіться з нами для обговорення вашого проекту
                </p>
                <a
                  href="/contacts"
                  className="bg-gold text-dark-bg hover:bg-gold/90 inline-block rounded-lg px-8 py-3 font-semibold transition-colors"
                >
                  Контакти
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
