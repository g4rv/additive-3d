"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    label: "Головна",
    href: "/",
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
  {
    label: "Калькулятор",
    href: "/calculator",
  },
  {
    label: "Контакти",
    href: "/contacts",
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-darker-bg border-b border-border text-gray-light shadow-lg">
      <nav className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image alt="A3D Logo" src="/logo.png" width={120} height={38} className="h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`inline-block px-4 py-2 rounded-md transition-colors hover:bg-card-bg hover:text-gold ${
                  pathname === href ? "text-gold font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden gap-4 lg:flex items-center">
          <Link
            href="/login"
            className="px-4 py-2 rounded-md border border-gold text-gold hover:bg-gold hover:text-dark-bg transition-colors"
          >
            Вхід
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card-bg border-t border-border">
          <ul className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`block px-4 py-3 hover:bg-darker-bg transition-colors ${
                    pathname === href ? "text-gold font-semibold" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="block px-4 py-3 text-gold hover:bg-darker-bg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Вхід
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
