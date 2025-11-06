"use client";

import { ChevronDown, LogIn, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useCallback, useEffect, useState } from "react";

const navLinks = [
  {
    label: "3D Друк",
    href: "/printing",
    dropdown: [
      { label: "Калькулятор", href: "/printing/calculator" },
      { label: "MJF", href: "/printing/mjf" },
      { label: "FDM", href: "/printing/fdm" },
    ],
  },
  {
    label: "3D Сканування",
    href: "/scanning",
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

const DesktopNavItem = memo(function DesktopNavItem({
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
      <Link
        href={item.href}
        className={`hover:text-gold inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 ${
          isActive ? "text-gold" : "text-gray-light"
        }`}
        onClick={() => setIsOpen(false)}
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
      </Link>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 overflow-hidden rounded-lg border border-border bg-dark-bg shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
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
        </div>
      )}
    </div>
  );
});

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null,
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMobileMenuClose = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  }, []);

  const toggleMobileDropdown = useCallback((label: string) => {
    setMobileDropdownOpen((prev) => (prev === label ? null : label));
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-[#111] shadow-2xl"
          : "border-b border-card-bg bg-[#111]"
      }`}
    >
      <div className="relative">
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
          <div className="absolute inset-x-0 top-full z-40 lg:hidden">
            <div className="max-h-[calc(100vh-96px)] overflow-y-auto rounded-none border border-border bg-[#0f1319] p-3 shadow-2xl">
                <ul className="space-y-2">
                  {navLinks.map((item) => {
                    const isActive =
                      pathname === item.href || pathname.startsWith(`${item.href}/`);
                    const isDropdownOpen = mobileDropdownOpen === item.label;

                    return (
                      <li key={item.label}>
                        <div className="rounded-xl border border-border/50 bg-[#161b23] shadow-inner">
                          {item.dropdown ? (
                            <>
                              <div className="flex overflow-hidden rounded-xl">
                                <Link
                                  href={item.href}
                                  className={`flex flex-1 items-center px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#1d232b] ${
                                    isActive ? "text-gold" : "text-gray-light"
                                  }`}
                                  onClick={handleMobileMenuClose}
                                >
                                  {item.label}
                                </Link>
                                <button
                                  type="button"
                                  className={`flex items-center justify-center border-l border-border/40 px-3 text-gold transition-colors hover:bg-[#1d232b] ${
                                    isDropdownOpen ? "bg-[#1d232b]" : ""
                                  }`}
                                  onClick={() => toggleMobileDropdown(item.label)}
                                  aria-expanded={isDropdownOpen}
                                  aria-label={`Toggle submenu for ${item.label}`}
                                >
                                  <ChevronDown
                                    className={`h-5 w-5 transition-transform ${
                                      isDropdownOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                              </div>
                              <div
                                className={`overflow-hidden border-t border-border/40 transition-[max-height,opacity] duration-200 ease-out ${
                                  isDropdownOpen
                                    ? "max-h-[720px] opacity-100"
                                    : "max-h-0 opacity-0"
                                }`}
                              >
                                <div className="space-y-2 px-3 py-3">
                                  {item.dropdown.map((dropItem) => (
                                    <div key={dropItem.label} className="space-y-2">
                                      <Link
                                        href={dropItem.href}
                                        className="block rounded-lg px-3 py-2 text-sm text-gray-light transition-colors hover:bg-[#1d232b] hover:text-gold"
                                        onClick={handleMobileMenuClose}
                                      >
                                        {dropItem.label}
                                      </Link>
                                      {dropItem.submenu && (
                                        <div className="space-y-1 pl-3">
                                          {dropItem.submenu.map((subItem) => (
                                            <Link
                                              key={subItem.label}
                                              href={subItem.href}
                                              className="block rounded-lg px-3 py-2 text-xs text-gray-medium transition-colors hover:bg-[#1d232b] hover:text-gold"
                                              onClick={handleMobileMenuClose}
                                            >
                                              → {subItem.label}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </>
                          ) : (
                            <Link
                              href={item.href}
                              className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#1d232b] ${
                                pathname === item.href ? "text-gold" : "text-gray-light"
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-3 border-t border-border/40 pt-3">
                  <Link
                    href="/login"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gold px-4 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-[#111]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LogIn className="h-4 w-4" />
                    Вхід
                  </Link>
                </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
