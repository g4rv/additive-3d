import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "3D Сканування - Additive3D",
  description:
    "Професійне 3D сканування для реверс-інжинірингу, контролю якості та цифрової документації.",
};

export default function ScanningPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg relative overflow-hidden bg-linear-to-b py-20 md:py-28">
        <div
          className="absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/1600x900/?3dscanner,measurement,technology)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="from-darker-bg/90 to-dark-bg absolute inset-0 bg-linear-to-b"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h1 className="text-gray-light mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              <span className="text-gold">3D</span> Сканування
            </h1>
            <p className="text-gray-medium mb-8 text-xl leading-relaxed">
              Точне цифрове відтворення фізичних об&apos;єктів
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-16">
            <AnimatedSection delay={0.1}>
              <h2 className="text-gold mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Наші можливості
              </h2>
              <p className="text-gray-medium mb-4 leading-relaxed">
                Використовуємо професійне обладнання для високоточного 3D
                сканування об&apos;єктів різних розмірів та складності.
                Створюємо точні цифрові моделі для подальшого використання в CAD
                системах, 3D друку або контролі якості.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-gold mb-8 text-3xl font-bold tracking-tight md:text-4xl">
                Застосування
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-3 text-xl font-semibold">
                    Реверс-інжиніринг
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Створення CAD моделей на основі фізичних зразків
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-3 text-xl font-semibold">
                    Контроль якості
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Порівняння виготовлених деталей з оригінальною моделлю
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-3 text-xl font-semibold">
                    Документація
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Цифрова архівація та збереження геометрії об&apos;єктів
                  </p>
                </div>
                <div className="bg-card-bg border-border rounded-lg border p-6">
                  <h3 className="text-gray-light mb-3 text-xl font-semibold">
                    Модифікація
                  </h3>
                  <p className="text-gray-medium text-sm">
                    Внесення змін до існуючих деталей та виробів
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-gold mb-8 text-3xl font-bold tracking-tight md:text-4xl">
                Переваги
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gold mt-2 h-2 w-2 rounded-full"></div>
                  <div>
                    <h4 className="text-gray-light mb-1 text-lg font-semibold">
                      Висока точність
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Точність сканування до 0.01 мм
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold mt-2 h-2 w-2 rounded-full"></div>
                  <div>
                    <h4 className="text-gray-light mb-1 text-lg font-semibold">
                      Швидкість
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Швидке отримання цифрової моделі
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold mt-2 h-2 w-2 rounded-full"></div>
                  <div>
                    <h4 className="text-gray-light mb-1 text-lg font-semibold">
                      Універсальність
                    </h4>
                    <p className="text-gray-medium text-sm">
                      Сканування об&apos;єктів будь-якої складності
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gold/10 border-gold rounded-lg border p-8">
                <h3 className="text-gold mb-4 text-2xl font-bold">
                  Потрібне 3D сканування?
                </h3>
                <p className="text-gray-medium mb-6">
                  Зв&apos;яжіться з нами для консультації та обговорення вашого
                  проекту
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contacts"
                    className="bg-gold text-dark-bg hover:bg-gold/90 rounded-lg px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Зв&apos;язатися
                  </Link>
                  <Link
                    href="/services/3d-scanning"
                    className="border-gold text-gold hover:bg-gold hover:text-dark-bg rounded-lg border px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Детальніше про послугу
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
