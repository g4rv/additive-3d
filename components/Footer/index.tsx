import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker-bg border-border text-gray-medium border-t py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <Link href="/" className="mb-4 inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Additive3D"
                width={140}
                height={42}
                className="h-auto w-36"
                priority
              />
              <span className="sr-only">Additive3D</span>
            </Link>
            <p className="text-gray-medium mb-4 text-sm">
              Професійні послуги 3D друку, сканування та реверс-інжинірингу.
              Передові технології для вашого бізнесу.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold mb-4 text-lg font-semibold">
              Швидкі посилання
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-gray-medium hover:text-gold transition-colors"
                >
                  Послуги
                </Link>
              </li>
              <li>
                <Link
                  href="/materials"
                  className="text-gray-medium hover:text-gold transition-colors"
                >
                  Матеріали
                </Link>
              </li>
              <li>
                <Link
                  href="/equipment"
                  className="text-gray-medium hover:text-gold transition-colors"
                >
                  Обладнання
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-gray-medium hover:text-gold transition-colors"
                >
                  Калькулятор 3D друку
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-medium hover:text-gold transition-colors"
                >
                  Про нас
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold mb-4 text-lg font-semibold">Контакти</h3>
            <ul className="text-gray-medium space-y-2 text-sm">
              <li>Email: info@a3d.com.ua</li>
              <li>Телефон: +380 XX XXX XX XX</li>
              <li>Адреса: м. Київ, Україна</li>
            </ul>
          </div>
        </div>

        <div className="border-border text-gray-medium border-t pt-6 text-center text-sm">
          <p>&copy; {currentYear} Additive3D. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}
