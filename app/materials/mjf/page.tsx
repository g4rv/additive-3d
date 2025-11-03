import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import MaterialCard from "@/components/MaterialCard";

export const metadata: Metadata = {
  title: "MJF Матеріали - Additive3D",
  description: "Матеріали для Multi Jet Fusion 3D друку. PA12 (Nylon 12) для функціональних деталей.",
};

export default function MJFMaterialsPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-light mb-6 tracking-tight">
              Матеріали <span className="text-gold">MJF</span>
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed">
              Високоякісні матеріали для Multi Jet Fusion 3D друку
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <MaterialCard
                  name="PA12 (Nylon 12)"
                  technology="MJF"
                  description="Універсальний матеріал з чудовим балансом міцності, гнучкості та хімічної стійкості."
                  href="/materials/mjf/pa12"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card-bg border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gold mb-6">Чому PA12?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-light mb-2">Механічні властивості</h3>
                    <p className="text-gray-medium text-sm">
                      Висока міцність на розтяг (48 МПа) та відмінна ударна в&apos;язкість
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-light mb-2">Хімічна стійкість</h3>
                    <p className="text-gray-medium text-sm">
                      Стійкість до масел, паливних сумішей та більшості хімікатів
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-light mb-2">Гнучкість</h3>
                    <p className="text-gray-medium text-sm">
                      Відносне подовження до 20% забезпечує гнучкість деталей
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-light mb-2">Біосумісність</h3>
                    <p className="text-gray-medium text-sm">
                      Сертифікований для контакту зі шкірою (ISO 10993-5, 10993-10)
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gold/10 border border-gold rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold text-gold mb-4">Готові замовити?</h3>
                <p className="text-gray-medium mb-6">
                  Отримайте безкоштовну консультацію та розрахунок вартості
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/calculator"
                    className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center"
                  >
                    Розрахувати вартість
                  </Link>
                  <Link
                    href="/3d-printing/mjf"
                    className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors text-center"
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
