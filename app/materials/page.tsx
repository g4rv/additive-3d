import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import MaterialCard from "@/components/MaterialCard";

export const metadata: Metadata = {
  title: "Матеріали - A3D",
  description:
    "Широкий вибір високоякісних матеріалів для 3D друку: PA12 (MJF), ASA, ABS-PC, ULTEM 9085, PC (FDM).",
};

export default function MaterialsPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-linear-to-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-gray-light mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-gold">Матеріали</span> для 3D друку
            </h1>
            <p className="text-gray-medium text-lg leading-relaxed">
              Використовуємо тільки сертифіковані матеріали від провідних
              виробників для забезпечення найвищої якості та надійності ваших
              деталей
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* MJF Materials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-gold mb-4 text-3xl font-bold md:text-4xl">
                MJF (Multi Jet Fusion)
              </h2>
              <p className="text-gray-medium max-w-3xl">
                Технологія HP Multi Jet Fusion забезпечує високу точність та
                чудові механічні властивості. Ідеально підходить для
                функціональних деталей та серійного виробництва.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <MaterialCard
                name="PA12 (Nylon 12)"
                technology="MJF"
                description="Міцний та гнучкий матеріал з чудовими механічними властивостями, хімічною стійкістю та довговічністю."
                href="/materials/mjf/pa12"
                properties={[
                  "Висока міцність та ударна в'язкість",
                  "Хімічна стійкість",
                  "Гнучкість та еластичність",
                  "Термостійкість до 80°C",
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FDM Materials */}
      <section className="bg-darker-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-gold mb-4 text-3xl font-bold md:text-4xl">
                FDM (Fused Deposition Modeling)
              </h2>
              <p className="text-gray-medium max-w-3xl">
                Широкий вибір інженерних термопластиків для різних застосувань -
                від прототипування до виробництва функціональних деталей з
                особливими властивостями.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection delay={0.1}>
              <MaterialCard
                name="ASA"
                technology="FDM"
                description="УФ-стійкий матеріал для зовнішніх застосувань з чудовою погодостійкістю."
                href="/materials/fdm/asa"
                properties={[
                  "УФ стійкість",
                  "Погодостійкість",
                  "Висока міцність",
                  "Хімічна стійкість",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <MaterialCard
                name="ABS-PC"
                technology="FDM"
                description="Суміш ABS та полікарбонату для підвищеної міцності та термостійкості."
                href="/materials/fdm/abs-pc"
                properties={[
                  "Висока міцність",
                  "Термостійкість",
                  "Ударна в'язкість",
                  "Стабільність розмірів",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <MaterialCard
                name="ULTEM 9085"
                technology="FDM"
                description="Високотемпературний матеріал з FST сертифікацією для авіаційної промисловості."
                href="/materials/fdm/ultem-9085"
                properties={[
                  "FST сертифікація",
                  "Висока Tg (186°C)",
                  "Хімічна стійкість",
                  "Міцність",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <MaterialCard
                name="PC (Polycarbonate)"
                technology="FDM"
                description="Надміцний прозорий матеріал з високою ударною в'язкістю."
                href="/materials/fdm/pc"
                properties={[
                  "Прозорість",
                  "Висока міцність",
                  "Термостійкість",
                  "Ударна в'язкість",
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-gold mb-12 text-center text-3xl font-bold md:text-4xl">
              Як обрати матеріал?
            </h2>
          </AnimatedSection>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <div className="bg-card-bg border-border h-full rounded-lg border p-6">
                <div className="mb-4 text-4xl">🎯</div>
                <h3 className="text-gold mb-3 text-xl font-semibold">
                  Призначення
                </h3>
                <p className="text-gray-medium text-sm">
                  Визначте, для чого буде використовуватися деталь: прототип,
                  функціональна деталь, оснастка чи кінцевий виріб
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card-bg border-border h-full rounded-lg border p-6">
                <div className="mb-4 text-4xl">🌡️</div>
                <h3 className="text-gold mb-3 text-xl font-semibold">
                  Умови експлуатації
                </h3>
                <p className="text-gray-medium text-sm">
                  Врахуйте температуру, вологість, хімічне середовище та
                  механічні навантаження
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-card-bg border-border h-full rounded-lg border p-6">
                <div className="mb-4 text-4xl">💡</div>
                <h3 className="text-gold mb-3 text-xl font-semibold">
                  Консультація
                </h3>
                <p className="text-gray-medium text-sm">
                  Не впевнені? Зв&apos;яжіться з нами - ми допоможемо підібрати
                  оптимальний матеріал
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
