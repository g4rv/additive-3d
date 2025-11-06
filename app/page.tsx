import AnimatedSection from "@/components/AnimatedSection";
import MaterialCard from "@/components/MaterialCard";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="from-darker-bg to-dark-bg relative overflow-hidden bg-linear-to-b py-20 md:py-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-40 md:opacity-25"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/1600x900/?3dprinting,technology,manufacturing)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="from-darker-bg/80 to-dark-bg absolute inset-0 bg-linear-to-b"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
            <AnimatedSection className="w-full max-w-2xl text-center md:text-left">
              <h1 className="text-gray-light mb-6 text-4xl leading-tight font-bold md:text-6xl">
                Професійний <span className="text-gold">3D друк</span> та{" "}
                <span className="text-gold">сканування</span>
              </h1>
              <p className="text-gray-medium mb-8 text-xl leading-relaxed md:text-2xl">
                Точність. Інновації. Якість.
              </p>
              <p className="text-gray-medium mb-10 max-w-2xl md:mx-0 md:text-lg">
                Передові технології адитивного виробництва для вашого бізнесу. Від
                прототипування до серійного виробництва.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                <Link
                  href="/calculator"
                  className="bg-gold text-dark-bg hover:bg-gold/90 hover:shadow-gold/30 rounded-lg px-8 py-4 font-semibold shadow-lg transition-colors"
                >
                  Розрахувати 3D друк
                </Link>
                <Link
                  href="/services"
                  className="border-gold text-gold hover:bg-gold hover:text-dark-bg rounded-lg border-2 px-8 py-4 font-semibold transition-colors"
                >
                  Наші послуги
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="w-full max-w-xl">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-gold/40 bg-dark-bg/50 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092152835-30ab079f19b9?auto=format&fit=crop&w=1600&q=80"
                  alt="Промисловий 3D-принтер у роботі"
                  fill
                  priority
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="object-cover"
                />
                <div className="from-dark-bg/10 via-dark-bg/20 to-dark-bg/70 absolute inset-0 bg-linear-to-b" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-gold mb-4 text-center text-3xl font-bold md:text-4xl">
              Наші технології
            </h2>
            <p className="text-gray-medium mx-auto mb-12 max-w-2xl text-center">
              Використовуємо найсучасніше обладнання для забезпечення найвищої
              якості продукції
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="bg-darker-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-gold mb-4 text-center text-3xl font-bold md:text-4xl">
              Матеріали
            </h2>
            <p className="text-gray-medium mx-auto mb-12 max-w-2xl text-center">
              Широкий вибір високоякісних матеріалів для різних застосувань
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection delay={0.1}>
              <MaterialCard
                name="PA12 (Nylon 12)"
                technology="MJF"
                description="Міцний та гнучкий матеріал з чудовими механічними властивостями."
                href="/materials/mjf/pa12"
                properties={[
                  "Висока міцність",
                  "Хімічна стійкість",
                  "Гнучкість",
                ]}
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

          <AnimatedSection delay={0.5} className="mt-10 text-center">
            <Link
              href="/materials"
              className="border-gold text-gold hover:bg-gold hover:text-dark-bg inline-block rounded-lg border px-8 py-3 font-semibold transition-colors"
            >
              Всі матеріали
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-gold mb-4 text-center text-3xl font-bold md:text-4xl">
              Наші переваги
            </h2>
            <p className="text-gray-medium mx-auto mb-12 max-w-2xl text-center">
              Чому обирають A3D
            </p>
          </AnimatedSection>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="mb-4 text-5xl">🎯</div>
                <h3 className="text-gold mb-3 text-xl font-semibold">
                  Висока точність
                </h3>
                <p className="text-gray-medium text-sm">
                  Професійне обладнання забезпечує точність до 0.1 мм
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="mb-4 text-5xl">⚡</div>
                <h3 className="text-gold mb-3 text-xl font-semibold">
                  Швидкість виконання
                </h3>
                <p className="text-gray-medium text-sm">
                  Оперативне виробництво від прототипів до серійних партій
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="mb-4 text-5xl">🔧</div>
                <h3 className="text-gold mb-3 text-xl font-semibold">
                  Повний цикл послуг
                </h3>
                <p className="text-gray-medium text-sm">
                  Від 3D моделювання до постобробки готових деталей
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="mb-4 text-5xl">🏆</div>
                <h3 className="text-gold mb-3 text-xl font-semibold">
                  Досвідчена команда
                </h3>
                <p className="text-gray-medium text-sm">
                  Експерти з багаторічним досвідом у адитивних технологіях
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="text-center">
                <div className="mb-4 text-5xl">🌍</div>
                <h3 className="text-gold mb-3 text-xl font-semibold">
                  Сертифіковані матеріали
                </h3>
                <p className="text-gray-medium text-sm">
                  Використовуємо тільки перевірені матеріали від провідних
                  виробників
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="text-center">
                <div className="mb-4 text-5xl">💼</div>
                <h3 className="text-gold mb-3 text-xl font-semibold">
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
      <section className="from-darker-bg to-dark-bg bg-linear-to-b py-16 md:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-gray-light mb-6 text-3xl font-bold md:text-4xl">
              Готові розпочати проект?
            </h2>
            <p className="text-gray-medium mb-8 text-lg">
              Зв&apos;яжіться з нами для консультації або розрахунку вартості
              вашого проекту
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contacts"
                className="bg-gold text-dark-bg hover:bg-gold/90 rounded-lg px-8 py-4 font-semibold shadow-lg transition-colors"
              >
                Зв&apos;язатися з нами
              </Link>
              <Link
                href="/calculator"
                className="border-gold text-gold hover:bg-gold hover:text-dark-bg rounded-lg border-2 px-8 py-4 font-semibold transition-colors"
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
