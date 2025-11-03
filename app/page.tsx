import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import MaterialCard from "@/components/MaterialCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-darker-bg to-dark-bg py-20 md:py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-light mb-6 leading-tight">
              Професійний <span className="text-gold">3D друк</span> та{" "}
              <span className="text-gold">сканування</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-medium mb-8 leading-relaxed">
              Точність. Інновації. Якість.
            </p>
            <p className="text-lg text-gray-medium mb-10 max-w-2xl mx-auto">
              Передові технології адитивного виробництва для вашого бізнесу.
              Від прототипування до серійного виробництва.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/calculator"
                className="px-8 py-4 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors shadow-lg hover:shadow-gold/30"
              >
                Розрахувати 3D друк
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors"
              >
                Наші послуги
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-4">
              Наші технології
            </h2>
            <p className="text-center text-gray-medium mb-12 max-w-2xl mx-auto">
              Використовуємо найсучасніше обладнання для забезпечення найвищої
              якості продукції
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <ServiceCard
                title="3D друк FDM"
                description="Технологія пошарового наплавлення для створення міцних функціональних деталей з інженерних пластиків."
                href="/services/3d-print"
                icon="🖨️"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <ServiceCard
                title="3D друк MJF"
                description="Multi Jet Fusion - технологія для виробництва високоточних деталей з PA12 з чудовими механічними властивостями."
                href="/services/3d-print"
                icon="⚡"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <ServiceCard
                title="3D сканування"
                description="Високоточне 3D сканування об'єктів для реверс-інжинірингу та контролю якості."
                href="/services/3d-scanning"
                icon="📷"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 md:py-24 bg-darker-bg">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-4">
              Матеріали
            </h2>
            <p className="text-center text-gray-medium mb-12 max-w-2xl mx-auto">
              Широкий вибір високоякісних матеріалів для різних застосувань
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={0.1}>
              <MaterialCard
                name="PA12 (Nylon 12)"
                technology="MJF"
                description="Міцний та гнучкий матеріал з чудовими механічними властивостями."
                href="/materials/mjf/pa12"
                properties={["Висока міцність", "Хімічна стійкість", "Гнучкість"]}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <MaterialCard
                name="ULTEM 9085"
                technology="FDM"
                description="Високотемпературний матеріал для авіаційної та космічної промисловості."
                href="/materials/fdm/ultem-9085"
                properties={["FST сертифікація", "Висока Tg", "Міцність"]}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <MaterialCard
                name="ASA"
                technology="FDM"
                description="УФ-стійкий матеріал для зовнішніх застосувань."
                href="/materials/fdm/asa"
                properties={["УФ стійкість", "Погодостійкість", "Міцність"]}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <MaterialCard
                name="PC (Polycarbonate)"
                technology="FDM"
                description="Надміцний прозорий матеріал з високою ударною в'язкістю."
                href="/materials/fdm/pc"
                properties={["Прозорість", "Висока міцність", "Термостійкість"]}
              />
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-10">
            <Link
              href="/materials"
              className="inline-block px-8 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors"
            >
              Всі матеріали
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-4">
              Наші переваги
            </h2>
            <p className="text-center text-gray-medium mb-12 max-w-2xl mx-auto">
              Чому обирають A3D
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gold mb-3">
                  Висока точність
                </h3>
                <p className="text-gray-medium text-sm">
                  Професійне обладнання забезпечує точність до 0.1 мм
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gold mb-3">
                  Швидкість виконання
                </h3>
                <p className="text-gray-medium text-sm">
                  Оперативне виробництво від прототипів до серійних партій
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gold mb-3">
                  Повний цикл послуг
                </h3>
                <p className="text-gray-medium text-sm">
                  Від 3D моделювання до постобробки готових деталей
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-gold mb-3">
                  Досвідчена команда
                </h3>
                <p className="text-gray-medium text-sm">
                  Експерти з багаторічним досвідом у адитивних технологіях
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gold mb-3">
                  Сертифіковані матеріали
                </h3>
                <p className="text-gray-medium text-sm">
                  Використовуємо тільки перевірені матеріали від провідних виробників
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="text-center">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-gold mb-3">
                  Індивідуальний підхід
                </h3>
                <p className="text-gray-medium text-sm">
                  Консультації та підбір оптимального рішення для вашого проекту
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-darker-bg to-dark-bg">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-light mb-6">
              Готові розпочати проект?
            </h2>
            <p className="text-lg text-gray-medium mb-8">
              Зв&apos;яжіться з нами для консультації або розрахунку вартості вашого проекту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacts"
                className="px-8 py-4 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors shadow-lg"
              >
                Зв&apos;язатися з нами
              </Link>
              <Link
                href="/calculator"
                className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors"
              >
                Калькулятор вартості
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
