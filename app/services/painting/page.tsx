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
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg relative overflow-hidden bg-linear-to-b py-20 md:py-28">
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
        <div className="relative z-10 container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <span className="text-gold inline-block text-sm font-semibold tracking-[0.35em] uppercase">
              послуги
            </span>
            <h1 className="text-gray-light mt-6 text-4xl leading-tight font-bold uppercase md:text-6xl">
              Фарбування пластикових деталей
            </h1>
            <div className="bg-gold mx-auto mt-6 h-px w-20" />
            <p className="text-gray-medium mx-auto mt-8 max-w-2xl text-lg leading-relaxed">
              Наша команда забезпечує індивідуальний підхід та два сучасні
              методи фарбування, що гарантують однорідне покриття, стійкість до
              зносу та відповідність корпоративним кольорам.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-16">
            <AnimatedSection>
              <div className="space-y-8">
                <p className="text-gray-medium text-lg leading-relaxed">
                  Ми спеціалізуємося на високоякісному фарбуванні деталей,
                  надрукованих на FDM та MJF обладнанні. Залежно від ваших вимог
                  до зовнішнього вигляду, стійкості та бюджетних рамок, ми
                  запропонуємо оптимальний метод обробки.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="glass-card relative overflow-hidden rounded-2xl border border-white/10 p-8">
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                    <div className="relative space-y-5">
                      <h2 className="text-gold text-2xl font-semibold tracking-wider uppercase">
                        Метод пропитки (Dyeing)
                      </h2>
                      <p className="text-gray-medium text-sm leading-relaxed">
                        Глибоке просочення пластика барвником забезпечує
                        рівномірне забарвлення матеріалу зсередини та
                        максимальну стійкість до стирання.
                      </p>
                      <ul className="text-gray-medium space-y-2 text-sm">
                        <li className="flex items-start gap-3">
                          <span className="bg-gold mt-1.5 block h-1.5 w-1.5 rounded-full" />
                          <span>Доступний у класичному чорному кольорі</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-gold mt-1.5 block h-1.5 w-1.5 rounded-full" />
                          <span>
                            Ідеальний для технічних деталей, що піддаються
                            активному використанню
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-gold mt-1.5 block h-1.5 w-1.5 rounded-full" />
                          <span>
                            Не змивається та не сколюється, зберігаючи колір з
                            часом
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="glass-card relative overflow-hidden rounded-2xl border border-white/10 p-8">
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                    <div className="relative space-y-5">
                      <h2 className="text-gold text-2xl font-semibold tracking-wider uppercase">
                        Метод розпилення (Spray Coating)
                      </h2>
                      <p className="text-gray-medium text-sm leading-relaxed">
                        Нанесення фарби методом розпилення забезпечує
                        бездоганний зовнішній вигляд і дозволяє підібрати точний
                        відтінок згідно з палітрою RAL.
                      </p>
                      <ul className="text-gray-medium space-y-2 text-sm">
                        <li className="flex items-start gap-3">
                          <span className="bg-gold mt-1.5 block h-1.5 w-1.5 rounded-full" />
                          <span>Будь-який колір із каталогу RAL</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-gold mt-1.5 block h-1.5 w-1.5 rounded-full" />
                          <span>
                            Вибір фактури: матова, глянцева чи текстурована
                            поверхня
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-gold mt-1.5 block h-1.5 w-1.5 rounded-full" />
                          <span>
                            Оптимально для зовнішніх або декоративних елементів,
                            що мають відповідати брендингу
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card-bg/60 rounded-2xl border border-white/10 p-8">
                  <h3 className="text-gray-light text-xl font-semibold tracking-wide uppercase">
                    Підхід Additive3D
                  </h3>
                  <p className="text-gray-medium mt-4 text-sm leading-relaxed">
                    Ми пропонуємо повний супровід проєкту: від підготовки
                    поверхні й вибору оптимального методу фарбування до контролю
                    якості покриття. Кожну деталь тестуємо на адгезію та
                    відповідність технічним вимогам.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-card-bg/70 rounded-2xl border border-white/10 p-8">
                  <h3 className="text-gold text-lg font-semibold tracking-wide uppercase">
                    Контроль якості покриття
                  </h3>
                  <ul className="text-gray-medium mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="bg-gold mt-1.5 block h-1.5 w-1.5 rounded-full" />
                      <span>Перевірка рівномірності та глибини кольору</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-gold mt-1.5 block h-1.5 w-1.5 rounded-full" />
                      <span>
                        Тестування на стійкість до стирання та подряпин
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-gold mt-1.5 block h-1.5 w-1.5 rounded-full" />
                      <span>
                        Контроль відповідності корпоративним стандартам бренду
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card-bg/70 rounded-2xl border border-white/10 p-8">
                  <h3 className="text-gold text-lg font-semibold tracking-wide uppercase">
                    Додаткові опції
                  </h3>
                  <ul className="text-gray-medium mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="bg-gold mt-1.5 block h-1.5 w-1.5 rounded-full" />
                      <span>
                        Лакове покриття для підвищення глянцю та захисту від
                        подряпин
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-gold mt-1.5 block h-1.5 w-1.5 rounded-full" />
                      <span>
                        Маскування окремих зон для багатокольорових схем
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-gold mt-1.5 block h-1.5 w-1.5 rounded-full" />
                      <span>
                        Поверхнева підготовка: шліфування, праймування,
                        герметизація пор
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="border-gold/40 bg-gold/10 rounded-2xl border p-8 text-center">
                <h3 className="text-gold text-2xl font-semibold tracking-wide uppercase">
                  Готові до співпраці
                </h3>
                <p className="text-gray-medium mx-auto mt-4 max-w-2xl text-sm leading-relaxed">
                  Розкажіть нам про проєкт, і ми підготуємо рекомендації щодо
                  оптимального методу фарбування, підберемо необхідні матеріали
                  та розрахуємо терміни виконання.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contacts"
                    className="border-gold text-gold hover:bg-gold inline-flex items-center justify-center border px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:text-black"
                  >
                    Зв&apos;язатися з нами
                  </Link>
                  <Link
                    href="/calculator"
                    className="bg-gold inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide text-black uppercase transition-transform duration-300 hover:scale-105"
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
