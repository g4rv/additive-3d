import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import MaterialTable from "@/components/MaterialTable";

export const metadata: Metadata = {
  title: "PA12 (Nylon 12) MJF - Матеріали - A3D",
  description:
    "PA12 (Nylon 12) для технології MJF - міцний та гнучкий матеріал з чудовими механічними властивостями.",
};

const technicalData = [
  { property: "Міцність на розтяг", value: "48", unit: "МПа" },
  { property: "Модуль пружності при розтягу", value: "1700", unit: "МПа" },
  { property: "Відносне подовження при розриві", value: "20", unit: "%" },
  { property: "Ударна в'язкість за Ізодом", value: "5.5", unit: "кДж/м²" },
  { property: "Температура теплостійкості (HDT)", value: "172", unit: "°C" },
  { property: "Температура плавлення", value: "184", unit: "°C" },
  { property: "Густина", value: "1.01", unit: "г/см³" },
  { property: "Водопоглинання (24 год)", value: "0.8", unit: "%" },
];

const additionalProperties = [
  { property: "Хімічна стійкість", value: "Відмінна до більшості хімікатів" },
  { property: "УФ стійкість", value: "Помірна (рекомендується покриття)" },
  { property: "Біосумісність", value: "Так (ISO 10993)" },
  { property: "Стерилізація", value: "Можлива (пара, EtO)" },
];

export default function PA12Page() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-linear-to-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl">
            <div className="mb-4">
              <Link
                href="/materials"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                ← Назад до матеріалів
              </Link>
            </div>
            <div className="mb-6 flex items-center gap-3">
              <span className="bg-gold/10 text-gold inline-block rounded-full px-4 py-2 text-sm font-semibold">
                MJF
              </span>
            </div>
            <h1 className="text-gray-light mb-6 text-4xl font-bold md:text-5xl">
              PA12 <span className="text-gold">(Nylon 12)</span>
            </h1>
            <p className="text-gray-medium text-xl leading-relaxed">
              Високоякісний поліамід для технології Multi Jet Fusion з чудовими
              механічними властивостями та універсальністю застосування
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            <AnimatedSection>
              <h2 className="text-gold mb-6 text-3xl font-bold">
                Опис матеріалу
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-medium mb-4 leading-relaxed">
                  PA12 (поліамід 12, також відомий як Nylon 12) - це
                  високоякісний інженерний термопластик, який виробляється
                  методом Multi Jet Fusion. Матеріал відзначається відмінним
                  балансом між міцністю, гнучкістю та хімічною стійкістю.
                </p>
                <p className="text-gray-medium leading-relaxed">
                  Завдяки технології MJF, деталі з PA12 мають ізотропні
                  механічні властивості (однакова міцність у всіх напрямках) та
                  гладку поверхню без видимих шарів друку.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-gold mb-6 text-3xl font-bold">
                Переваги PA12
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Висока міцність
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Міцність на розтяг до 48 МПа
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Гнучкість
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Відносне подовження до 20%
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Хімічна стійкість
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Стійкість до більшості хімікатів
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Термостійкість
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Робоча температура до 80°C
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
                <div className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="text-gray-light mb-1 font-semibold">
                      Ізотропні властивості
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Однакова міцність у всіх напрямках
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
                    Функціональні прототипи
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Тестування форми, посадки та функціональності перед серійним
                    виробництвом
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gold mb-3 text-xl font-semibold">
                    Серійне виробництво
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Виробництво малих та середніх серій кінцевих деталей
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gold mb-3 text-xl font-semibold">
                    Медичні вироби
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Хірургічні інструменти, ортопедичні вироби, протези
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gold mb-3 text-xl font-semibold">
                    Автомобільна промисловість
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Кріплення, кронштейни, повітропроводи, декоративні елементи
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gold mb-3 text-xl font-semibold">
                    Споживчі товари
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Корпуси електроніки, спортивний інвентар, аксесуари
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gold mb-3 text-xl font-semibold">
                    Промислові деталі
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Корпуси, кришки, захисні елементи, оснастка
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-gold/10 border-gold rounded-lg border p-6">
                <h3 className="text-gold mb-4 text-2xl font-semibold">
                  Замовити друк з PA12?
                </h3>
                <p className="text-gray-medium mb-6">
                  Завантажте вашу 3D модель та отримайте розрахунок вартості
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
                    Зв&apos;язатися з нами
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
