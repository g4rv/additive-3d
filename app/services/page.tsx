import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Послуги - A3D",
  description: "Повний спектр послуг адитивного виробництва: 3D друк, 3D сканування, фарбування, згладжування, 3D моделювання, реверс-інжиніринг та інспекція геометрії.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-light mb-6">
              Наші <span className="text-gold">послуги</span>
            </h1>
            <p className="text-lg text-gray-medium leading-relaxed">
              Повний цикл послуг адитивного виробництва - від ідеї до готового виробу.
              Професійне обладнання та досвідчена команда для реалізації ваших проектів.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <ServiceCard
                title="3D друк"
                description="Професійний 3D друк на технологіях FDM та MJF. Широкий вибір матеріалів для різних застосувань - від прототипування до серійного виробництва."
                href="/services/3d-print"
                icon="🖨️"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <ServiceCard
                title="3D сканування"
                description="Високоточне 3D сканування об'єктів будь-якої складності. Створення цифрових копій для реверс-інжинірингу та контролю якості."
                href="/services/3d-scanning"
                icon="📷"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <ServiceCard
                title="Фарбування"
                description="Професійне фарбування пластикових деталей. Широка палітра кольорів RAL та Pantone. Матові, глянцеві та текстуровані покриття."
                href="/services/painting"
                icon="🎨"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <ServiceCard
                title="Згладжування парою"
                description="Хімічне згладжування поверхні деталей для досягнення гладкої, майже дзеркальної поверхні. Покращення естетики та функціональності."
                href="/services/vapor-smoothing"
                icon="✨"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <ServiceCard
                title="3D моделювання"
                description="Створення 3D моделей будь-якої складності. Від концептуального дизайну до технічної документації для виробництва."
                href="/services/3d-modeling"
                icon="📐"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <ServiceCard
                title="Реверс-інжиніринг"
                description="Відтворення 3D моделей з фізичних об'єктів. Створення CAD моделей на основі сканованих даних для модифікації або відтворення."
                href="/services/reverse-engineering"
                icon="🔄"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <ServiceCard
                title="Інспекція геометрії"
                description="Високоточний контроль геометрії виробів. Порівняння з CAD моделлю, виявлення відхилень та створення звітів про якість."
                href="/services/geometry-inspection"
                icon="🔍"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-darker-bg">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-12">
              Як ми працюємо
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gold mb-2">Консультація</h3>
                <p className="text-gray-medium text-sm">
                  Обговорюємо ваш проект та підбираємо оптимальне рішення
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gold mb-2">Підготовка</h3>
                <p className="text-gray-medium text-sm">
                  Підготовка 3D моделі та розрахунок вартості
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gold mb-2">Виробництво</h3>
                <p className="text-gray-medium text-sm">
                  Друк або сканування на професійному обладнанні
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gold mb-2">Постобробка</h3>
                <p className="text-gray-medium text-sm">
                  Фінішна обробка та контроль якості
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-light mb-6">
              Маєте проект?
            </h2>
            <p className="text-lg text-gray-medium mb-8">
              Зв&apos;яжіться з нами для детальної консультації
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacts"
                className="px-8 py-4 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors"
              >
                Контакти
              </Link>
              <Link
                href="/calculator"
                className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors"
              >
                Калькулятор
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
