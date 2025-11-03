import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import MaterialCard from "@/components/MaterialCard";

export const metadata: Metadata = {
  title: "FDM Матеріали - Additive3D",
  description: "Інженерні термопластики для FDM 3D друку. ASA, PC-ABS, ULTEM 9085, PC.",
};

export default function FDMMaterialsPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-light mb-6 tracking-tight">
              Матеріали <span className="text-gold">FDM</span>
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed">
              Інженерні термопластики для професійного 3D друку
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <MaterialCard
                  name="ASA"
                  technology="FDM"
                  description="УФ-стійкий матеріал для зовнішніх застосувань з чудовою погодостійкістю."
                  href="/materials/fdm/asa"
                />
                <MaterialCard
                  name="PC-ABS"
                  technology="FDM"
                  description="Суміш полікарбонату та ABS для підвищеної міцності та термостійкості."
                  href="/materials/fdm/abs-pc"
                />
                <MaterialCard
                  name="ULTEM 9085"
                  technology="FDM"
                  description="Високотемпературний матеріал з FST сертифікацією для авіації."
                  href="/materials/fdm/ultem-9085"
                />
                <MaterialCard
                  name="PC"
                  technology="FDM"
                  description="Надміцний прозорий матеріал з найвищою ударною в'язкістю."
                  href="/materials/fdm/pc"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card-bg border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gold mb-6">Як обрати матеріал?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-light mb-1">ASA</h3>
                      <p className="text-gray-medium text-sm">
                        Для зовнішніх застосувань, корпусів, автомобільних деталей
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-light mb-1">PC-ABS</h3>
                      <p className="text-gray-medium text-sm">
                        Для функціональних прототипів, виробничих пристосувань
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-light mb-1">ULTEM 9085</h3>
                      <p className="text-gray-medium text-sm">
                        Для авіації, космосу, медицини - FST сертифікований
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-light mb-1">PC</h3>
                      <p className="text-gray-medium text-sm">
                        Для захисних кожухів, оптичних компонентів, ударостійких деталей
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border border-gold rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold text-gold mb-4">Потрібна консультація?</h3>
                <p className="text-gray-medium mb-6">
                  Наші фахівці допоможуть обрати оптимальний матеріал для вашого проекту
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
