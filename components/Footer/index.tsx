import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker-bg border-t border-border text-gray-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-gold font-semibold text-lg mb-4">A3D</h3>
            <p className="text-gray-medium text-sm mb-4">
              Професійні послуги 3D друку, сканування та реверс-інжинірингу.
              Передові технології для вашого бізнесу.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold text-lg mb-4">Швидкі посилання</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-medium hover:text-gold transition-colors">
                  Послуги
                </Link>
              </li>
              <li>
                <Link href="/materials" className="text-gray-medium hover:text-gold transition-colors">
                  Матеріали
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="text-gray-medium hover:text-gold transition-colors">
                  Обладнання
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-medium hover:text-gold transition-colors">
                  Калькулятор 3D друку
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-medium hover:text-gold transition-colors">
                  Про нас
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-semibold text-lg mb-4">Контакти</h3>
            <ul className="space-y-2 text-sm text-gray-medium">
              <li>Email: info@a3d.com.ua</li>
              <li>Телефон: +380 XX XXX XX XX</li>
              <li>Адреса: м. Київ, Україна</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-gray-medium">
          <p>&copy; {currentYear} A3D. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}
