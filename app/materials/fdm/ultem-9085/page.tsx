import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import MaterialTable from "@/components/MaterialTable";

export const metadata: Metadata = {
  title: "ULTEM 9085 FDM - Матеріали - A3D",
  description:
    "ULTEM 9085 для FDM 3D друку - високотемпературний матеріал з FST сертифікацією для авіації.",
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
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-gradient-to-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl">
            <Link
              href="/materials"
              className="text-gold hover:text-gold/80 mb-4 inline-block transition-colors"
            >
              ← Назад до матеріалів
            </Link>
            <div className="mb-6 flex items-center gap-3">
              <span className="bg-gold/10 text-gold inline-block rounded-full px-4 py-2 text-sm font-semibold">
                FDM
              </span>
              <span className="bg-gold text-dark-bg inline-block rounded-full px-4 py-2 text-xs font-semibold">
                FST CERTIFIED
              </span>
            </div>
            <h1 className="text-gray-light mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-gold">ULTEM 9085</span>
            </h1>
            <p className="text-gray-medium text-xl leading-relaxed">
              Високотемпературний матеріал з FST сертифікацією для авіаційної та
              космічної промисловості
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            <AnimatedSection>
              <h2 className="text-gold mb-6 text-3xl font-bold">Опис</h2>
              <p className="text-gray-medium mb-4 leading-relaxed">
                ULTEM 9085 - це високоефективний поліефіримід (PEI) від
                Stratasys, спеціально розроблений для авіаційної та космічної
                промисловості. Матеріал має FST (Flame, Smoke, Toxicity)
                сертифікацію, що відповідає вимогам FAR 25.853.
              </p>
              <p className="text-gray-medium leading-relaxed">
                Завдяки виключним механічним та термічним властивостям, ULTEM
                9085 є ідеальним вибором для виробництва деталей, що
                експлуатуються в екстремальних умовах.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-gold mb-6 text-3xl font-bold">Переваги</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      FST сертифікація
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Відповідає FAR 25.853 для авіації
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Висока Tg
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Температура склування 186°C
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Вогнестійкість
                    </h4>
                    <p className="text-gray-medium text-sm">V-0 за UL94</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Хімічна стійкість
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Стійкість до авіаційних рідин
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Міцність
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Висока міцність на розтяг (72 МПа)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Біосумісність
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Сертифікований за ISO 10993
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-gold mb-6 text-3xl font-bold">
                Технічні характеристики
              </h2>
              <MaterialTable data={technicalData} />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-gold mb-6 text-3xl font-bold">
                Додаткові властивості
              </h2>
              <MaterialTable data={additionalProperties} />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h2 className="text-gold mb-6 text-3xl font-bold">
                Застосування
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gold mb-3 text-xl font-semibold">
                    Авіаційна промисловість
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Внутрішні панелі кабіни, повітропроводи, кронштейни
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gold mb-3 text-xl font-semibold">
                    Космічна промисловість
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Компоненти супутників, оснастка для космічних апаратів
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gold mb-3 text-xl font-semibold">
                    Медицина
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Хірургічні інструменти, медичні пристрої
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gold mb-3 text-xl font-semibold">
                    Автомобільна промисловість
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Деталі під капотом, високотемпературні компоненти
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-gold/10 border-gold rounded-lg border p-6">
                <h3 className="text-gold mb-4 text-2xl font-semibold">
                  Замовити друк з ULTEM 9085?
                </h3>
                <p className="text-gray-medium mb-6">
                  ULTEM 9085 - преміум матеріал для критичних застосувань.
                  Зв&apos;яжіться з нами для консультації та розрахунку
                  вартості.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/calculator"
                    className="bg-gold text-dark-bg hover:bg-gold/90 rounded-lg px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/contacts"
                    className="border-gold text-gold hover:bg-gold hover:text-dark-bg rounded-lg border px-6 py-3 text-center font-semibold transition-colors"
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
