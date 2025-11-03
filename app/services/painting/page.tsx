import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Фарбування пластикових деталей - Послуги - Additive3D",
  description:
    "Високоякісне фарбування пластикових деталей. Метод пропитки та розпилення, точна відповідність кольору та стійкість покриття.",
};

export default function PaintingPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="relative overflow-hidden bg-linear-to-b from-darker-bg to-dark-bg py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/1600x900/?spray-paint,industrial,coating)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.35em] text-gold">
              послуги
            </span>
            <h1 className="mt-6 text-4xl font-bold uppercase leading-tight text-gray-light md:text-6xl">
              Фарбування пластикових деталей
            </h1>
            <div className="mx-auto mt-6 h-px w-20 bg-gold" />
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-medium">
              Наша команда забезпечує індивідуальний підхід та два сучасні методи фарбування, що
              гарантують однорідне покриття, стійкість до зносу та відповідність корпоративним
              кольорам.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-16">
            <AnimatedSection>
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-gray-medium">
                  Ми спеціалізуємося на високоякісному фарбуванні деталей, надрукованих на FDM та MJF
                  обладнанні. Залежно від ваших вимог до зовнішнього вигляду, стійкості та бюджетних
                  рамок, ми запропонуємо оптимальний метод обробки.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="glass-card relative overflow-hidden rounded-2xl border border-white/10 p-8">
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                    <div className="relative space-y-5">
                      <h2 className="text-2xl font-semibold uppercase tracking-wider text-gold">
                        Метод пропитки (Dyeing)
                      </h2>
                      <p className="text-sm leading-relaxed text-gray-medium">
                        Глибоке просочення пластика барвником забезпечує рівномірне забарвлення
                        матеріалу зсередини та максимальну стійкість до стирання.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-medium">
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-gold" />
                          <span>Доступний у класичному чорному кольорі</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-gold" />
                          <span>Ідеальний для технічних деталей, що піддаються активному використанню</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-gold" />
                          <span>Не змивається та не сколюється, зберігаючи колір з часом</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="glass-card relative overflow-hidden rounded-2xl border border-white/10 p-8">
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                    <div className="relative space-y-5">
                      <h2 className="text-2xl font-semibold uppercase tracking-wider text-gold">
                        Метод розпилення (Spray Coating)
                      </h2>
                      <p className="text-sm leading-relaxed text-gray-medium">
                        Нанесення фарби методом розпилення забезпечує бездоганний зовнішній вигляд і
                        дозволяє підібрати точний відтінок згідно з палітрою RAL.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-medium">
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-gold" />
                          <span>Будь-який колір із каталогу RAL</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-gold" />
                          <span>Вибір фактури: матова, глянцева чи текстурована поверхня</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-gold" />
                          <span>Оптимально для зовнішніх або декоративних елементів, що мають
                            відповідати брендингу</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-card-bg/60 p-8">
                  <h3 className="text-xl font-semibold uppercase tracking-wide text-gray-light">
                    Підхід Additive3D
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-medium">
                    Ми пропонуємо повний супровід проєкту: від підготовки поверхні й вибору оптимального
                    методу фарбування до контролю якості покриття. Кожну деталь тестуємо на адгезію та
                    відповідність технічним вимогам.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-card-bg/70 p-8">
                  <h3 className="text-lg font-semibold uppercase tracking-wide text-gold">
                    Контроль якості покриття
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-medium">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>Перевірка рівномірності та глибини кольору</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>Тестування на стійкість до стирання та подряпин</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>Контроль відповідності корпоративним стандартам бренду</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-card-bg/70 p-8">
                  <h3 className="text-lg font-semibold uppercase tracking-wide text-gold">
                    Додаткові опції
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-medium">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>Лакове покриття для підвищення глянцю та захисту від подряпин</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>Маскування окремих зон для багатокольорових схем</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>Поверхнева підготовка: шліфування, праймування, герметизація пор</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl border border-gold/40 bg-gold/10 p-8 text-center">
                <h3 className="text-2xl font-semibold uppercase tracking-wide text-gold">
                  Готові до співпраці
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-medium">
                  Розкажіть нам про проєкт, і ми підготуємо рекомендації щодо оптимального методу
                  фарбування, підберемо необхідні матеріали та розрахуємо терміни виконання.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center border border-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-black"
                  >
                    Зв&apos;язатися з нами
                  </Link>
                  <Link
                    href="/calculator"
                    className="inline-flex items-center justify-center bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-transform duration-300 hover:scale-105"
                  >
                    Розрахувати проект
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
