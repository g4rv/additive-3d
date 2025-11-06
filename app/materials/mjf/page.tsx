import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import MaterialCard from "@/components/MaterialCard";

export const metadata: Metadata = {
  title: "MJF Матеріали - Additive3D",
  description:
    "Матеріали для Multi Jet Fusion 3D друку. PA12 (Nylon 12) для функціональних деталей.",
};

export default function MJFMaterialsPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-gradient-to-b py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h1 className="text-gray-light mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Матеріали <span className="text-gold">MJF</span>
            </h1>
            <p className="text-gray-medium text-xl leading-relaxed">
              Високоякісні матеріали для Multi Jet Fusion 3D друку
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <AnimatedSection delay={0.1}>
              <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <MaterialCard
                  name="PA12 (Nylon 12)"
                  technology="MJF"
                  description="Універсальний матеріал з чудовим балансом міцності, гнучкості та хімічної стійкості."
                  href="/materials/mjf/pa12"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card-bg border-border rounded-lg border p-8">
                <h2 className="text-gold mb-6 text-2xl font-bold">
                  Чому PA12?
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-gray-light mb-2 text-lg font-semibold">
                      Механічні властивості
                    </h3>
                    <p className="text-gray-medium text-sm">
                      Висока міцність на розтяг (48 МПа) та відмінна ударна
                      в&apos;язкість
                    </p>
                  </div>
                  <div>
                    <h3 className="text-gray-light mb-2 text-lg font-semibold">
                      Хімічна стійкість
                    </h3>
                    <p className="text-gray-medium text-sm">
                      Стійкість до масел, паливних сумішей та більшості
                      хімікатів
                    </p>
                  </div>
                  <div>
                    <h3 className="text-gray-light mb-2 text-lg font-semibold">
                      Гнучкість
                    </h3>
                    <p className="text-gray-medium text-sm">
                      Відносне подовження до 20% забезпечує гнучкість деталей
                    </p>
                  </div>
                  <div>
                    <h3 className="text-gray-light mb-2 text-lg font-semibold">
                      Біосумісність
                    </h3>
                    <p className="text-gray-medium text-sm">
                      Сертифікований для контакту зі шкірою (ISO 10993-5,
                      10993-10)
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border-gold mt-12 rounded-lg border p-8">
                <h3 className="text-gold mb-4 text-2xl font-bold">
                  Готові замовити?
                </h3>
                <p className="text-gray-medium mb-6">
                  Отримайте безкоштовну консультацію та розрахунок вартості
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/calculator"
                    className="bg-gold text-dark-bg hover:bg-gold/90 rounded-lg px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/3d-printing/mjf"
                    className="border-gold text-gold hover:bg-gold hover:text-dark-bg rounded-lg border px-6 py-3 text-center font-semibold transition-colors"
                  >
                    Про технологію MJF
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
