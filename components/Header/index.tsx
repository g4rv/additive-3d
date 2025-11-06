"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, LogIn, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  {
    label: "3D Друк",
    href: "/3d-printing",
    dropdown: [
      { label: "Калькулятор", href: "/calculator" },
      { label: "MJF", href: "/3d-printing/mjf" },
      { label: "FDM", href: "/3d-printing/fdm" },
    ],
  },
  {
    label: "3D Сканування",
    href: "/3d-scanning",
  },
  {
    label: "Послуги",
    href: "/services",
    dropdown: [
      { label: "3D Друк", href: "/services/3d-print" },
      { label: "3D Сканування", href: "/services/3d-scanning" },
      { label: "Фарбування", href: "/services/painting" },
      { label: "Згладжування парою", href: "/services/vapor-smoothing" },
      { label: "3D Моделювання", href: "/services/3d-modeling" },
      { label: "Реверс-інжиніринг", href: "/services/reverse-engineering" },
      { label: "Інспекція геометрії", href: "/services/geometry-inspection" },
    ],
  },
  {
    label: "Матеріали",
    href: "/materials",
    dropdown: [
      { label: "MJF", href: "/materials/mjf" },
      {
        label: "FDM",
        href: "/materials/fdm",
        submenu: [
          { label: "ABS", href: "/materials/fdm/abs" },
          { label: "ASA", href: "/materials/fdm/asa" },
          { label: "PC-ABS", href: "/materials/fdm/abs-pc" },
          { label: "ULTEM 9085", href: "/materials/fdm/ultem-9085" },
        ],
      },
    ],
  },
  {
    label: "Обладнання",
    href: "/equipment",
    dropdown: [
      { label: "MJF", href: "/equipment/mjf" },
      { label: "FDM", href: "/equipment/fdm" },
    ],
  },
];

interface NavLinkType {
  label: string;
  href: string;
  dropdown?: Array<{
    label: string;
    href: string;
    submenu?: Array<{ label: string; href: string }>;
  }>;
}

function DesktopNavItem({
  item,
  pathname,
}: {
  item: NavLinkType;
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        className={`hover:text-gold relative inline-block px-3 py-2 text-sm font-medium transition-all duration-200 ${
          isActive ? "text-gold" : "text-gray-light"
        }`}
      >
        {item.label}
        {isActive && (
          <span className="bg-gold absolute right-0 bottom-0 left-0 h-0.5"></span>
        )}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`hover:text-gold inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 ${
          isActive ? "text-gold" : "text-gray-light"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        {isActive && (
          <span className="bg-gold absolute right-0 bottom-0 left-0 h-0.5"></span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-56 overflow-hidden rounded-lg border border-border bg-dark-bg shadow-2xl"
          >
            {item.dropdown.map((dropItem) => (
              <div key={dropItem.label}>
                <Link
                  href={dropItem.href}
                  className="text-gray-light hover:text-gold block px-4 py-3 text-sm transition-colors hover:bg-card-bg"
                >
                  {dropItem.label}
                </Link>
                {dropItem.submenu && (
                  <div className="bg-[#111]/50">
                    {dropItem.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="text-gray-medium hover:text-gold block px-6 py-2 text-xs transition-colors hover:bg-card-bg"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null,
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-[#111]/95 shadow-2xl backdrop-blur-md"
          : "border-b border-card-bg bg-[#111]/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              alt="Additive3D Logo"
              src="/logo.png"
              width={140}
              height={42}
              className="h-auto"
            />
          </Link>

          {/* Navigation - Center */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                pathname={pathname}
              />
            ))}
          </nav>

          {/* Login Button - Right */}
          <div className="hidden items-center lg:flex">
            <Link
              href="/login"
              className="border-gold text-gold hover:bg-gold inline-flex items-center gap-2 rounded-lg border-2 px-5 py-2.5 font-medium transition-all duration-200 hover:text-[#111]"
            >
              <LogIn className="h-4 w-4" />
              <span>Вхід</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 transition-colors hover:bg-card-bg lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="text-gold h-6 w-6" />
            ) : (
              <Menu className="text-gray-light h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-card-bg border-border max-h-[80vh] overflow-y-auto border-t lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((item) => (
              <li key={item.label}>
                <div>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`hover:bg-darker-bg block flex-1 px-4 py-3 transition-colors ${
                        pathname === item.href ? "text-gold font-semibold" : ""
                      }`}
                      onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() =>
                          setMobileDropdownOpen(
                            mobileDropdownOpen === item.label
                              ? null
                              : item.label,
                          )
                        }
                        className="px-4 py-3"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.dropdown && mobileDropdownOpen === item.label && (
                    <div className="bg-darker-bg/50">
                      {item.dropdown.map((dropItem) => (
                        <div key={dropItem.label}>
                          <Link
                            href={dropItem.href}
                            className="hover:bg-darker-bg block px-8 py-2 text-sm transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropItem.label}
                          </Link>
                          {dropItem.submenu && (
                            <div className="pl-4">
                              {dropItem.submenu.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="hover:bg-darker-bg block px-8 py-2 text-xs transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  → {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="text-gold hover:bg-darker-bg block px-4 py-3 transition-colors"
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
