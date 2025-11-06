import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Контакти - A3D",
  description:
    "Зв'яжіться з A3D для консультації щодо 3D друку, сканування та інших послуг адитивного виробництва.",
};

export default function ContactsPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <section className="from-darker-bg to-dark-bg bg-linear-to-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-gray-light mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-gold">Контакти</span>
            </h1>
            <p className="text-gray-medium text-lg leading-relaxed">
              Зв&apos;яжіться з нами для консультації або замовлення послуг
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Contact Information */}
              <AnimatedSection>
                <div className="bg-card-bg border-border rounded-lg border p-8">
                  <h2 className="text-gold mb-6 text-2xl font-bold">
                    Контактна інформація
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <div className="mb-2 flex items-center">
                        <span className="mr-3 text-2xl">📧</span>
                        <h3 className="text-gray-light text-lg font-semibold">
                          Email
                        </h3>
                      </div>
                      <p className="text-gray-medium ml-11">info@a3d.com.ua</p>
                      <p className="text-gray-medium ml-11">sales@a3d.com.ua</p>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center">
                        <span className="mr-3 text-2xl">📞</span>
                        <h3 className="text-gray-light text-lg font-semibold">
                          Телефон
                        </h3>
                      </div>
                      <p className="text-gray-medium ml-11">
                        +380 XX XXX XX XX
                      </p>
                      <p className="text-gray-medium ml-11">
                        +380 XX XXX XX XX
                      </p>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center">
                        <span className="mr-3 text-2xl">📍</span>
                        <h3 className="text-gray-light text-lg font-semibold">
                          Адреса
                        </h3>
                      </div>
                      <p className="text-gray-medium ml-11">
                        м. Київ, Україна
                        <br />
                        вул. Прикладна, 1
                      </p>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center">
                        <span className="mr-3 text-2xl">🕐</span>
                        <h3 className="text-gray-light text-lg font-semibold">
                          Години роботи
                        </h3>
                      </div>
                      <p className="text-gray-medium ml-11">
                        Пн-Пт: 9:00 - 18:00
                        <br />
                        Сб-Нд: Вихідний
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection delay={0.2}>
                <div className="bg-card-bg border-border rounded-lg border p-8">
                  <h2 className="text-gold mb-6 text-2xl font-bold">
                    Напишіть нам
                  </h2>

                  <form className="space-y-4">
                    <div>
                      <label className="text-gray-light mb-2 block font-medium">
                        Ім&apos;я *
                      </label>
                      <input
                        type="text"
                        required
                        className="bg-darker-bg border-border text-gray-light focus:border-gold w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                        placeholder="Ваше ім'я"
                      />
                    </div>

                    <div>
                      <label className="text-gray-light mb-2 block font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="bg-darker-bg border-border text-gray-light focus:border-gold w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="text-gray-light mb-2 block font-medium">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        className="bg-darker-bg border-border text-gray-light focus:border-gold w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                        placeholder="+380 XX XXX XX XX"
                      />
                    </div>

                    <div>
                      <label className="text-gray-light mb-2 block font-medium">
                        Повідомлення *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="bg-darker-bg border-border text-gray-light focus:border-gold w-full resize-none rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                        placeholder="Опишіть ваш проект або запитання..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-gold text-dark-bg hover:bg-gold/90 w-full rounded-lg px-6 py-3 font-semibold transition-colors"
                    >
                      Надіслати
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            {/* Additional Info */}
            <AnimatedSection delay={0.4} className="mt-12">
              <div className="bg-gold/10 border-gold rounded-lg border p-8 text-center">
                <h3 className="text-gold mb-4 text-2xl font-bold">
                  Маєте питання?
                </h3>
                <p className="text-gray-medium mx-auto mb-6 max-w-2xl">
                  Наша команда завжди готова допомогти вам з вибором
                  оптимального рішення для вашого проекту. Зв&apos;яжіться з
                  нами будь-яким зручним способом!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:info@a3d.com.ua"
                    className="bg-gold text-dark-bg hover:bg-gold/90 rounded-lg px-6 py-3 font-semibold transition-colors"
                  >
                    Написати Email
                  </a>
                  <a
                    href="tel:+380XXXXXXXXX"
                    className="border-gold text-gold hover:bg-gold hover:text-dark-bg rounded-lg border px-6 py-3 font-semibold transition-colors"
                  >
                    Подзвонити
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
