import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Контакти - A3D",
  description: "Зв'яжіться з A3D для консультації щодо 3D друку, сканування та інших послуг адитивного виробництва.",
};

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <section className="bg-gradient-to-b from-darker-bg to-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-light mb-6">
              <span className="text-gold">Контакти</span>
            </h1>
            <p className="text-lg text-gray-medium leading-relaxed">
              Зв&apos;яжіться з нами для консультації або замовлення послуг
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <AnimatedSection>
                <div className="bg-card-bg border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-gold mb-6">Контактна інформація</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">📧</span>
                        <h3 className="text-lg font-semibold text-gray-light">Email</h3>
                      </div>
                      <p className="text-gray-medium ml-11">info@a3d.com.ua</p>
                      <p className="text-gray-medium ml-11">sales@a3d.com.ua</p>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">📞</span>
                        <h3 className="text-lg font-semibold text-gray-light">Телефон</h3>
                      </div>
                      <p className="text-gray-medium ml-11">+380 XX XXX XX XX</p>
                      <p className="text-gray-medium ml-11">+380 XX XXX XX XX</p>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">📍</span>
                        <h3 className="text-lg font-semibold text-gray-light">Адреса</h3>
                      </div>
                      <p className="text-gray-medium ml-11">
                        м. Київ, Україна<br />
                        вул. Прикладна, 1
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">🕐</span>
                        <h3 className="text-lg font-semibold text-gray-light">Години роботи</h3>
                      </div>
                      <p className="text-gray-medium ml-11">
                        Пн-Пт: 9:00 - 18:00<br />
                        Сб-Нд: Вихідний
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection delay={0.2}>
                <div className="bg-card-bg border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-gold mb-6">Напишіть нам</h2>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-light font-medium mb-2">
                        Ім&apos;я *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-darker-bg border border-border rounded-lg text-gray-light focus:outline-none focus:border-gold transition-colors"
                        placeholder="Ваше ім'я"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-light font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-darker-bg border border-border rounded-lg text-gray-light focus:outline-none focus:border-gold transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-light font-medium mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-darker-bg border border-border rounded-lg text-gray-light focus:outline-none focus:border-gold transition-colors"
                        placeholder="+380 XX XXX XX XX"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-light font-medium mb-2">
                        Повідомлення *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-darker-bg border border-border rounded-lg text-gray-light focus:outline-none focus:border-gold transition-colors resize-none"
                        placeholder="Опишіть ваш проект або запитання..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                    >
                      Надіслати
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            {/* Additional Info */}
            <AnimatedSection delay={0.4} className="mt-12">
              <div className="bg-gold/10 border border-gold rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gold mb-4">Маєте питання?</h3>
                <p className="text-gray-medium mb-6 max-w-2xl mx-auto">
                  Наша команда завжди готова допомогти вам з вибором оптимального рішення для вашого проекту. 
                  Зв&apos;яжіться з нами будь-яким зручним способом!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:info@a3d.com.ua"
                    className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                  >
                    Написати Email
                  </a>
                  <a
                    href="tel:+380XXXXXXXXX"
                    className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark-bg transition-colors"
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
