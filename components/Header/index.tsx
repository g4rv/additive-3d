import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    label: "3D Друк",
    href: "/3d-print",
  },
  {
    label: "3D Сканування",
    href: "/3d-scan",
  },
  {
    label: "Послуги",
    href: "/services",
  },
  {
    label: "Матеріали",
    href: "/materials",
  },
  {
    label: "Обладнання",
    href: "/equipment",
  },
];

export function Header() {
  return (
    <header className="bg-dark-navy px-4 text-white">
      <nav className="container mx-auto flex items-center justify-between gap-4">
        <Link href="/">
          <Image alt="logo" src="/logo.png" width={140} height={44} />
        </Link>

        <ul className="hidden lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className="inline-block px-4 py-6">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden gap-4 lg:flex">
          <Link href="#">Вхід</Link>
          <Link href="#">Реєстрація</Link>
        </div>
      </nav>
    </header>
  );
}
