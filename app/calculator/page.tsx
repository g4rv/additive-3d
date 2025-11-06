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
      ASA: 0.25,
      "ABS-PC": 0.3,
      "ULTEM-9085": 1.2,
      PC: 0.35,
      PA12: 0.4,
    };

    const infillCoefficient = parseInt(infill) / 100;
    const baseCost =
      vol *
      (materialCoefficients[material] || 0.25) *
      (0.5 + infillCoefficient);

    setEstimatedCost(Math.round(baseCost * 100) / 100);
  };

  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-linear-to-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-gray-light mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-gold">Калькулятор</span> 3D друку
            </h1>
            <p className="text-gray-medium text-lg leading-relaxed">
              Розрахуйте орієнтовну вартість 3D друку вашої деталі
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <AnimatedSection>
              <div className="bg-card-bg border-border rounded-lg border p-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    calculateCost();
                  }}
                  className="space-y-6"
                >
                  {/* Technology */}
                  <div>
                    <label className="text-gray-light mb-2 block font-semibold">
                      Технологія
                    </label>
                    <select
                      value={technology}
                      onChange={(e) => setTechnology(e.target.value)}
                      className="bg-darker-bg border-border text-gray-light focus:border-gold w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                    >
                      <option value="FDM">
                        FDM (Fused Deposition Modeling)
                      </option>
                      <option value="MJF">MJF (Multi Jet Fusion)</option>
                    </select>
                  </div>

                  {/* Material */}
                  <div>
                    <label className="text-gray-light mb-2 block font-semibold">
                      Матеріал
                    </label>
                    <select
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="bg-darker-bg border-border text-gray-light focus:border-gold w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
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
                    <label className="text-gray-light mb-2 block font-semibold">
                      Об&apos;єм деталі (см³)
                    </label>
                    <input
                      type="number"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      placeholder="Введіть об'єм"
                      min="0"
                      step="0.1"
                      className="bg-darker-bg border-border text-gray-light focus:border-gold w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                      required
                    />
                  </div>

                  {/* Infill */}
                  <div>
                    <label className="text-gray-light mb-2 block font-semibold">
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
                    <div className="text-gray-medium mt-1 flex justify-between text-xs">
                      <span>10%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-gold text-dark-bg hover:bg-gold/90 w-full rounded-lg px-6 py-4 font-semibold transition-colors"
                  >
                    Розрахувати вартість
                  </button>
                </form>

                {/* Result */}
                {estimatedCost !== null && (
                  <AnimatedSection delay={0.2}>
                    <div className="bg-gold/10 border-gold mt-8 rounded-lg border p-6">
                      <h3 className="text-gold mb-2 text-xl font-semibold">
                        Орієнтовна вартість
                      </h3>
                      <p className="text-gray-light mb-4 text-3xl font-bold">
                        {estimatedCost} грн
                      </p>
                      <p className="text-gray-medium text-sm">
                        * Це орієнтовний розрахунок. Точна вартість залежить від
                        складності моделі, необхідності підтримок та
                        постобробки. Зв&apos;яжіться з нами для детального
                        розрахунку.
                      </p>
                    </div>
                  </AnimatedSection>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="mt-8">
              <div className="bg-darker-bg border-border rounded-lg border p-6">
                <h3 className="text-gold mb-4 text-xl font-semibold">
                  Як отримати точний розрахунок?
                </h3>
                <ol className="text-gray-medium space-y-3">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 font-bold">1.</span>
                    <span>
                      Підготуйте 3D модель у форматі STL, OBJ або STEP
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 font-bold">2.</span>
                    <span>
                      Надішліть модель на наш email або через форму зв&apos;язку
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 font-bold">3.</span>
                    <span>
                      Отримайте детальний розрахунок протягом 24 годин
                    </span>
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
