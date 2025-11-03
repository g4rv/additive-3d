import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "3D Сканування - Additive3D",
  description: "Професійне 3D сканування для реверс-інжинірингу, контролю якості та цифрової документації.",
};

export default function ScanningPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="relative bg-gradient-to-b from-darker-bg to-dark-bg py-20 md:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: 'url(https://source.unsplash.com/1600x900/?3dscanner,measurement,technology)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-darker-bg/90 to-dark-bg"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-light mb-6 tracking-tight">
              <span className="text-gold">3D</span> Сканування
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed mb-8">
              Точне цифрове відтворення фізичних об&apos;єктів
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6 tracking-tight">Наші можливості</h2>
              <p className="text-gray-medium leading-relaxed mb-4">
                Використовуємо професійне обладнання для високоточного 3D сканування об&apos;єктів 
                різних розмірів та складності. Створюємо точні цифрові моделі для подальшого 
                використання в CAD системах, 3D друку або контролі якості.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8 tracking-tight">Застосування</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-light mb-3">Реверс-інжиніринг</h3>
                  <p className="text-gray-medium text-sm">
                    Створення CAD моделей на основі фізичних зразків
                  </p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-light mb-3">Контроль якості</h3>
                  <p className="text-gray-medium text-sm">
                    Порівняння виготовлених деталей з оригінальною моделлю
                  </p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-light mb-3">Документація</h3>
                  <p className="text-gray-medium text-sm">
                    Цифрова архівація та збереження геометрії об&apos;єктів
                  </p>
                </div>
                <div className="bg-card-bg border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-light mb-3">Модифікація</h3>
                  <p className="text-gray-medium text-sm">
                    Внесення змін до існуючих деталей та виробів
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8 tracking-tight">Переваги</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-light mb-1">Висока точність</h4>
                    <p className="text-gray-medium text-sm">Точність сканування до 0.01 мм</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-light mb-1">Швидкість</h4>
                    <p className="text-gray-medium text-sm">Швидке отримання цифрової моделі</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-light mb-1">Універсальність</h4>
                    <p className="text-gray-medium text-sm">Сканування об&apos;єктів будь-якої складності</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gold/10 border border-gold rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gold mb-4">Потрібне 3D сканування?</h3>
                <p className="text-gray-medium mb-6">
                  Зв&apos;яжіться з нами для консультації та обговорення вашого проекту
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contacts"
                    className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center"
                  >
                    Зв&apos;язатися
                  </Link>
                  <Link
                    href="/services/3d-scanning"
                    className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors text-center"
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
