import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "FDM 3D Друк - Additive3D",
  description: "Fused Deposition Modeling (FDM) 3D друк. Широкий вибір інженерних термопластиків для різних застосувань.",
};

export default function FDMPrintingPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="relative bg-gradient-to-b from-darker-bg to-dark-bg py-20 md:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: 'url(https://source.unsplash.com/1600x900/?fdm,3dprinter,technology)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-darker-bg/90 to-dark-bg"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-light mb-6 tracking-tight">
              <span className="text-gold">FDM</span> 3D Друк
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed mb-8">
              Fused Deposition Modeling - надійна технологія для інженерних застосувань
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6 tracking-tight">Що таке FDM?</h2>
              <p className="text-gray-medium leading-relaxed mb-4">
                Fused Deposition Modeling (FDM) - це технологія пошарового нанесення розплавленого 
                термопластику для створення тривимірних об&apos;єктів. Технологія відрізняється 
                надійністю, доступністю та широким вибором матеріалів.
              </p>
              <p className="text-gray-medium leading-relaxed">
                FDM використовує промислові термопластики, які забезпечують високу міцність, 
                термостійкість та хімічну стійкість деталей.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8 tracking-tight">Доступні матеріали</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/materials/fdm/asa" className="bg-card-bg border border-border rounded-lg p-6 hover:border-gold transition-colors group">
                  <h3 className="text-xl font-semibold text-gray-light mb-3 group-hover:text-gold transition-colors">ASA</h3>
                  <p className="text-gray-medium text-sm">
                    УФ-стійкий матеріал для зовнішніх застосувань
                  </p>
                </Link>
                <Link href="/materials/fdm/abs-pc" className="bg-card-bg border border-border rounded-lg p-6 hover:border-gold transition-colors group">
                  <h3 className="text-xl font-semibold text-gray-light mb-3 group-hover:text-gold transition-colors">PC-ABS</h3>
                  <p className="text-gray-medium text-sm">
                    Суміш полікарбонату та ABS для підвищеної міцності
                  </p>
                </Link>
                <Link href="/materials/fdm/ultem-9085" className="bg-card-bg border border-border rounded-lg p-6 hover:border-gold transition-colors group">
                  <h3 className="text-xl font-semibold text-gray-light mb-3 group-hover:text-gold transition-colors">ULTEM 9085</h3>
                  <p className="text-gray-medium text-sm">
                    Високотемпературний матеріал з FST сертифікацією
                  </p>
                </Link>
                <Link href="/materials/fdm/pc" className="bg-card-bg border border-border rounded-lg p-6 hover:border-gold transition-colors group">
                  <h3 className="text-xl font-semibold text-gray-light mb-3 group-hover:text-gold transition-colors">PC (Polycarbonate)</h3>
                  <p className="text-gray-medium text-sm">
                    Надміцний прозорий матеріал з високою ударною в&apos;язкістю
                  </p>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8 tracking-tight">Переваги FDM</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-darker-bg border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Широкий вибір матеріалів</h3>
                  <p className="text-gray-medium text-sm">
                    Від стандартних до високотемпературних інженерних пластиків
                  </p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Висока міцність</h3>
                  <p className="text-gray-medium text-sm">
                    Деталі витримують значні механічні навантаження
                  </p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Термостійкість</h3>
                  <p className="text-gray-medium text-sm">
                    Робочі температури до 186°C (ULTEM 9085)
                  </p>
                </div>
                <div className="bg-darker-bg border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Хімічна стійкість</h3>
                  <p className="text-gray-medium text-sm">
                    Стійкість до масел, паливних сумішей та розчинників
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gold/10 border border-gold rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gold mb-4">Замовити FDM друк</h3>
                <p className="text-gray-medium mb-6">
                  Оберіть матеріал та отримайте розрахунок вартості вашого проекту
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/calculator"
                    className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/materials/fdm"
                    className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors text-center"
                  >
                    Всі матеріали FDM
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
