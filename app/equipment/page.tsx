import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import EquipmentCard from "@/components/EquipmentCard";

export const metadata: Metadata = {
  title: "Обладнання - A3D",
  description: "Професійне обладнання для 3D друку: Stratasys Fortus 250mc, Stratasys Dimension SST 1200es, HP Jet Fusion 5210.",
};

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-light mb-6">
              Наше <span className="text-gold">обладнання</span>
            </h1>
            <p className="text-lg text-gray-medium leading-relaxed">
              Професійні системи 3D друку від світових лідерів індустрії для забезпечення найвищої якості
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <AnimatedSection delay={0.1}>
              <EquipmentCard
                name="HP Jet Fusion 5210"
                technology="MJF"
                description="Промислова система Multi Jet Fusion для високопродуктивного друку функціональних деталей з PA12."
                href="/equipment/hp-jet-fusion-5210"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <EquipmentCard
                name="Stratasys Fortus 250mc"
                technology="FDM"
                description="Професійний 3D принтер для друку інженерних термопластиків з високою точністю та надійністю."
                href="/equipment/stratasys-fortus-250mc"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <EquipmentCard
                name="Stratasys Dimension SST 1200es"
                technology="FDM"
                description="Надійна система для виробництва міцних ABS деталей з чудовою повторюваністю результатів."
                href="/equipment/stratasys-dimension-sst-1200es"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <div className="bg-card-bg border border-border rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gold mb-6">Чому професійне обладнання важливе?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Висока точність</h3>
                  <p className="text-gray-medium text-sm">
                    Промислові системи забезпечують точність до 0.1 мм та відмінну повторюваність
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Надійність</h3>
                  <p className="text-gray-medium text-sm">
                    Стабільна робота 24/7 для виконання навіть найскладніших замовлень
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Якість матеріалів</h3>
                  <p className="text-gray-medium text-sm">
                    Сертифіковані матеріали з гарантованими механічними властивостями
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-light mb-2">Підтримка виробника</h3>
                  <p className="text-gray-medium text-sm">
                    Регулярне обслуговування та калібрування обладнання
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
