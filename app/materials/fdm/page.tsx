import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import MaterialCard from "@/components/MaterialCard";

export const metadata: Metadata = {
  title: "FDM Матеріали - Additive3D",
  description:
    "Інженерні термопластики для FDM 3D друку. ASA, PC-ABS, ULTEM 9085, PC.",
};

export default function FDMMaterialsPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-gradient-to-b py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h1 className="text-gray-light mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Матеріали <span className="text-gold">FDM</span>
            </h1>
            <p className="text-gray-medium text-xl leading-relaxed">
              Інженерні термопластики для професійного 3D друку
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <AnimatedSection delay={0.1}>
              <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              <div className="bg-card-bg border-border rounded-lg border p-8">
                <h2 className="text-gold mb-6 text-2xl font-bold">
                  Як обрати матеріал?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold mt-2 h-2 w-2 rounded-full"></div>
                    <div>
                      <h3 className="text-gray-light mb-1 text-lg font-semibold">
                        ASA
                      </h3>
                      <p className="text-gray-medium text-sm">
                        Для зовнішніх застосувань, корпусів, автомобільних
                        деталей
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gold mt-2 h-2 w-2 rounded-full"></div>
                    <div>
                      <h3 className="text-gray-light mb-1 text-lg font-semibold">
                        PC-ABS
                      </h3>
                      <p className="text-gray-medium text-sm">
                        Для функціональних прототипів, виробничих пристосувань
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gold mt-2 h-2 w-2 rounded-full"></div>
                    <div>
                      <h3 className="text-gray-light mb-1 text-lg font-semibold">
                        ULTEM 9085
                      </h3>
                      <p className="text-gray-medium text-sm">
                        Для авіації, космосу, медицини - FST сертифікований
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gold mt-2 h-2 w-2 rounded-full"></div>
                    <div>
                      <h3 className="text-gray-light mb-1 text-lg font-semibold">
                        PC
                      </h3>
                      <p className="text-gray-medium text-sm">
                        Для захисних кожухів, оптичних компонентів, ударостійких
                        деталей
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border-gold mt-12 rounded-lg border p-8">
                <h3 className="text-gold mb-4 text-2xl font-bold">
                  Потрібна консультація?
                </h3>
                <p className="text-gray-medium mb-6">
                  Наші фахівці допоможуть обрати оптимальний матеріал для вашого
                  проекту
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
