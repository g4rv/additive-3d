import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import MaterialTable from "@/components/MaterialTable";

export const metadata: Metadata = {
  title: "ULTEM 9085 FDM - Матеріали - A3D",
  description: "ULTEM 9085 для FDM 3D друку - високотемпературний матеріал з FST сертифікацією для авіації.",
};

const technicalData = [
  { property: "Міцність на розтяг", value: "72", unit: "МПа" },
  { property: "Модуль пружності", value: "2300", unit: "МПа" },
  { property: "Відносне подовження", value: "6", unit: "%" },
  { property: "Температура склування (Tg)", value: "186", unit: "°C" },
  { property: "Температура теплостійкості", value: "153", unit: "°C" },
  { property: "Ударна в'язкість", value: "53", unit: "Дж/м" },
  { property: "Густина", value: "1.34", unit: "г/см³" },
];

const additionalProperties = [
  { property: "FST сертифікація", value: "Відповідає FAR 25.853" },
  { property: "Вогнестійкість", value: "V-0 за UL94" },
  { property: "Хімічна стійкість", value: "Відмінна" },
  { property: "Біосумісність", value: "ISO 10993-5, 10993-10" },
];

export default function ULTEM9085Page() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <Link href="/materials" className="text-gold hover:text-gold/80 transition-colors mb-4 inline-block">
              ← Назад до матеріалів
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full">
                FDM
              </span>
              <span className="inline-block px-4 py-2 bg-gold text-dark-bg text-xs font-semibold rounded-full">
                FST CERTIFIED
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-light mb-6">
              <span className="text-gold">ULTEM 9085</span>
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed">
              Високотемпературний матеріал з FST сертифікацією для авіаційної та космічної промисловості
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gold mb-6">Опис</h2>
              <p className="text-gray-medium leading-relaxed mb-4">
                ULTEM 9085 - це високоефективний поліефіримід (PEI) від Stratasys, спеціально розроблений 
                для авіаційної та космічної промисловості. Матеріал має FST (Flame, Smoke, Toxicity) 
                сертифікацію, що відповідає вимогам FAR 25.853.
              </p>
              <p className="text-gray-medium leading-relaxed">
                Завдяки виключним механічним та термічним властивостям, ULTEM 9085 є ідеальним вибором 
                для виробництва деталей, що експлуатуються в екстремальних умовах.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl font-bold text-gold mb-6">Переваги</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="text-gray-light font-semibold mb-1">FST сертифікація</h4>
                    <p className="text-gray-medium text-sm">Відповідає FAR 25.853 для авіації</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="text-gray-light font-semibold mb-1">Висока Tg</h4>
                    <p className="text-gray-medium text-sm">Температура склування 186°C</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="text-gray-light font-semibold mb-1">Вогнестійкість</h4>
                    <p className="text-gray-medium text-sm">V-0 за UL94</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="text-gray-light font-semibold mb-1">Хімічна стійкість</h4>
                    <p className="text-gray-medium text-sm">Стійкість до авіаційних рідин</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="text-gray-light font-semibold mb-1">Міцність</h4>
                    <p className="text-gray-medium text-sm">Висока міцність на розтяг (72 МПа)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="text-gray-light font-semibold mb-1">Біосумісність</h4>
                    <p className="text-gray-medium text-sm">Сертифікований за ISO 10993</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold text-gold mb-6">Технічні характеристики</h2>
              <MaterialTable data={technicalData} />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-3xl font-bold text-gold mb-6">Додаткові властивості</h2>
              <MaterialTable data={additionalProperties} />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h2 className="text-3xl font-bold text-gold mb-6">Застосування</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gold mb-3">Авіаційна промисловість</h3>
                  <p className="text-gray-medium text-sm">
                    Внутрішні панелі кабіни, повітропроводи, кронштейни
                  </p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gold mb-3">Космічна промисловість</h3>
                  <p className="text-gray-medium text-sm">
                    Компоненти супутників, оснастка для космічних апаратів
                  </p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gold mb-3">Медицина</h3>
                  <p className="text-gray-medium text-sm">
                    Хірургічні інструменти, медичні пристрої
                  </p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gold mb-3">Автомобільна промисловість</h3>
                  <p className="text-gray-medium text-sm">
                    Деталі під капотом, високотемпературні компоненти
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-gold/10 border border-gold rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gold mb-4">Замовити друк з ULTEM 9085?</h3>
                <p className="text-gray-medium mb-6">
                  ULTEM 9085 - преміум матеріал для критичних застосувань. Зв&apos;яжіться з нами 
                  для консультації та розрахунку вартості.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/calculator"
                    className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/contacts"
                    className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors text-center"
                  >
                    Зв&apos;язатися
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
