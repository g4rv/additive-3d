"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function CalculatorPage() {
  const [technology, setTechnology] = useState("FDM");
  const [material, setMaterial] = useState("ASA");
  const [volume, setVolume] = useState("");
  const [infill, setInfill] = useState("20");
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const calculateCost = () => {
    const vol = parseFloat(volume);
    if (isNaN(vol) || vol <= 0) {
      alert("Будь ласка, введіть коректний об'єм");
      return;
    }

    // Mock formula: cost = volume * material_coefficient * infill_coefficient
    const materialCoefficients: { [key: string]: number } = {
      "ASA": 0.25,
      "ABS-PC": 0.30,
      "ULTEM-9085": 1.20,
      "PC": 0.35,
      "PA12": 0.40,
    };

    const infillCoefficient = parseInt(infill) / 100;
    const baseCost = vol * (materialCoefficients[material] || 0.25) * (0.5 + infillCoefficient);
    
    setEstimatedCost(Math.round(baseCost * 100) / 100);
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-light mb-6">
              <span className="text-gold">Калькулятор</span> 3D друку
            </h1>
            <p className="text-lg text-gray-medium leading-relaxed">
              Розрахуйте орієнтовну вартість 3D друку вашої деталі
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <div className="bg-card-bg border border-border rounded-lg p-8">
                <form onSubmit={(e) => { e.preventDefault(); calculateCost(); }} className="space-y-6">
                  {/* Technology */}
                  <div>
                    <label className="block text-gray-light font-semibold mb-2">
                      Технологія
                    </label>
                    <select
                      value={technology}
                      onChange={(e) => setTechnology(e.target.value)}
                      className="w-full px-4 py-3 bg-darker-bg border border-border rounded-lg text-gray-light focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="FDM">FDM (Fused Deposition Modeling)</option>
                      <option value="MJF">MJF (Multi Jet Fusion)</option>
                    </select>
                  </div>

                  {/* Material */}
                  <div>
                    <label className="block text-gray-light font-semibold mb-2">
                      Матеріал
                    </label>
                    <select
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="w-full px-4 py-3 bg-darker-bg border border-border rounded-lg text-gray-light focus:outline-none focus:border-gold transition-colors"
                    >
                      {technology === "FDM" ? (
                        <>
                          <option value="ASA">ASA</option>
                          <option value="ABS-PC">ABS-PC</option>
                          <option value="ULTEM-9085">ULTEM 9085</option>
                          <option value="PC">PC (Polycarbonate)</option>
                        </>
                      ) : (
                        <option value="PA12">PA12 (Nylon 12)</option>
                      )}
                    </select>
                  </div>

                  {/* Volume */}
                  <div>
                    <label className="block text-gray-light font-semibold mb-2">
                      Об&apos;єм деталі (см³)
                    </label>
                    <input
                      type="number"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      placeholder="Введіть об'єм"
                      min="0"
                      step="0.1"
                      className="w-full px-4 py-3 bg-darker-bg border border-border rounded-lg text-gray-light focus:outline-none focus:border-gold transition-colors"
                      required
                    />
                  </div>

                  {/* Infill */}
                  <div>
                    <label className="block text-gray-light font-semibold mb-2">
                      Заповнення ({infill}%)
                    </label>
                    <input
                      type="range"
                      value={infill}
                      onChange={(e) => setInfill(e.target.value)}
                      min="10"
                      max="100"
                      step="10"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-medium mt-1">
                      <span>10%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                  >
                    Розрахувати вартість
                  </button>
                </form>

                {/* Result */}
                {estimatedCost !== null && (
                  <AnimatedSection delay={0.2}>
                    <div className="mt-8 p-6 bg-gold/10 border border-gold rounded-lg">
                      <h3 className="text-xl font-semibold text-gold mb-2">
                        Орієнтовна вартість
                      </h3>
                      <p className="text-3xl font-bold text-gray-light mb-4">
                        {estimatedCost} грн
                      </p>
                      <p className="text-sm text-gray-medium">
                        * Це орієнтовний розрахунок. Точна вартість залежить від складності моделі, 
                        необхідності підтримок та постобробки. Зв&apos;яжіться з нами для детального розрахунку.
                      </p>
                    </div>
                  </AnimatedSection>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="mt-8">
              <div className="bg-darker-bg border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold mb-4">Як отримати точний розрахунок?</h3>
                <ol className="space-y-3 text-gray-medium">
                  <li className="flex items-start">
                    <span className="text-gold font-bold mr-3">1.</span>
                    <span>Підготуйте 3D модель у форматі STL, OBJ або STEP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold font-bold mr-3">2.</span>
                    <span>Надішліть модель на наш email або через форму зв&apos;язку</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold font-bold mr-3">3.</span>
                    <span>Отримайте детальний розрахунок протягом 24 годин</span>
                  </li>
                </ol>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
