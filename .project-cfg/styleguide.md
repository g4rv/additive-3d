# Additive 3D Style Guide

> Single-source, machine- and developer-friendly style guide for the project. Use this document to generate the Next.js app, components, pages, assets, SEO data, JSON-LD, and copy.

## 0. Quick-Use Summary

- All visible copy must remain Ukrainian.
- Folder and file names stay English.
- Static assets belong in `/public` (e.g., `/public/logo.png`, `/public/d68d98d2-f795-4376-b385-69cc6c8f0e4e.png`).
- Follow the site-structure sketch for navigation hierarchy.
- Deliverables include HTML/TSX, CSS tokens, JSON-LD, asset manifests, and accessibility/performance guidance.

## Table of Contents

1. [Purpose & Usage Notes](#1-purpose--usage-notes)
2. [Tech Stack & Architecture](#2-tech-stack--architecture)
3. [Route & Folder Structure (App Router)](#3-route--folder-structure-app-router)
4. [Navigation (Ukrainian labels — exact text)](#4-navigation-ukrainian-labels--exact-text)
5. [Assets & Public Folder](#5-assets--public-folder)
6. [Brand & Logo Rules](#6-brand--logo-rules)
7. [Design Tokens & Tailwind Mapping](#7-design-tokens--tailwind-mapping)
8. [Typography](#8-typography)
9. [Layout & Responsive Grid](#9-layout--responsive-grid)
10. [Core Components (Required)](#10-core-components-required)
11. [Example Component Snippets](#11-example-component-snippets)
12. [Data Models (TypeScript Interfaces)](#12-data-models-typescript-interfaces)
13. [Content Mapping & Copy (Use Verbatim Where Provided)](#13-content-mapping--copy-use-verbatim-where-provided)
14. [Page Templates & Generation Rules](#14-page-templates--generation-rules)
15. [Accessibility & Internationalization](#15-accessibility--internationalization)
16. [Performance & Best Practices](#16-performance--best-practices)
17. [SEO & Structured Data](#17-seo--structured-data)
18. [API & Server Stubs](#18-api--server-stubs)
19. [Testing & QA Checklist (for Generated Pages)](#19-testing--qa-checklist-for-generated-pages)
20. [Asset Naming & Export Conventions](#20-asset-naming--export-conventions)
21. [Deliverables List (What to Produce from This Guide)](#21-deliverables-list-what-to-produce-from-this-guide)
22. [Example Copy Snippets (Ukrainian, Ready to Paste)](#22-example-copy-snippets-ukrainian-ready-to-paste)
23. [Final Rules & Reminders](#23-final-rules--reminders)
24. [Next Automated Step Options](#24-next-automated-step-options)

## 1. Purpose & Usage Notes

This document is intentionally comprehensive so an automated assistant or developer can:

- Scaffold a Next.js 16 (App Router) + TypeScript + Tailwind project,
- Generate pages, components and content in Ukrainian,
- Produce accessible, performant UI with a consistent design system,
- Produce final deliverables (HTML/TSX, CSS tokens, JSON-LD, asset manifest).

### Important Notes

- Do not change visible copy language — always Ukrainian.
- Keep file/folder names English.
- Keep logo in `/public/logo.png`.
- Use the site-structure sketch (`/public/d68d98d2-f795-4376-b385-69cc6c8f0e4e.png`) as authoritative for nav hierarchy.

## 2. Tech Stack & Architecture

* Next.js 16 (App Router)
* TypeScript (strict)
* Tailwind CSS (JIT)
* Optional: Framer Motion for micro-animations
* Testing: Playwright or Vitest + React Testing Library
* Images: store in /public; reference via next/image
* Deployment: Vercel-ready (Node 18+), supports SSR / static / hybrid pages

## Route & Folder Structure (App Router)

Keep exact folder names in English. Create page.tsx in each folder. Where noted, create head.tsx and loading.tsx if dynamic data will be added later.

### Folder Structure

```markdown
/app
├── layout.tsx
├── page.tsx                        --> Головна (home)
│
├── printing/                       --> (3d-друк)
│   ├── page.tsx                    --> 3D-друк overview
│   ├── calculator/page.tsx         --> Калькулятор (keep EMPTY placeholder for now)
│   ├── mjf/page.tsx                --> MJF
│   └── fdm/page.tsx                --> FDM
│
├── scanning/                       --> 3D-сканування
│   └── page.tsx
│
├── services/                       --> Послуги
│   ├── page.tsx
│   ├── printing/page.tsx
│   ├── scanning/page.tsx
│   ├── painting/page.tsx           --> Фарбування (full content provided)
│   ├── smoothing/page.tsx          --> Згладжування парою
│   ├── modeling/page.tsx           --> 3D-моделювання
│   ├── reverse-engineering/page.tsx--> Реверс-інженіринг
│   └── inspection/page.tsx         --> Інспекція геометрії
│
├── materials/                      --> Матеріали
│   ├── page.tsx
│   ├── mjf/page.tsx
│   └── fdm/page.tsx
│
├── equipment/                      --> Обладнання
│   ├── page.tsx
│   ├── mjf/page.tsx
│   └── fdm/page.tsx
│
└── login/                          --> Вхід (логін)
    └── page.tsx
```

### Calculator Note

app/printing/calculator/page.tsx must contain a simple placeholder UI (title + "Coming soon" in Ukrainian). No calculator logic now.

## Navigation (Ukrainian labels — exact text)

### Top-level Header Menu

* 3D-друк (dropdown: Калькулятор, MJF, FDM)
* 3D-сканування
* Послуги (submenu: 3D-друк, 3D-сканування, Фарбування, Згладжування парою, 3D-моделювання, Реверс-інженіринг, Інспекція геометрії)
* Матеріали (submenu: MJF, FDM)
* Обладнання (submenu: MJF, FDM)
* Вхід (login)

### Header Behavior

* Desktop: horizontal nav with dropdowns on hover/click.
* Mobile: hamburger menu with accordion submenus.
* Sticky header with compact variant on scroll (logo scales to ~40px).

## Assets & Public Folder

Place static images here:

```markdown
/public
  /logo.png
  /d68d98d2-f795-4376-b385-69cc6c8f0e4e.png  (site structure sketch)
  /hero/...
  /materials/...
  /equipment/...
  /services/...
```

Use next/image to reference images, or static `<img src="/logo.png" alt="...">` when appropriate.

## Brand & Logo Rules

* Primary logo: /public/logo.png.
* Provide SVG later, but use logo.png now.
* Minimum clear space: height of “A” in logo on all sides.
* Minimum header display size: 36–48px height.
* Do not recolor, stretch, or alter the logo.

## Design Tokens & Tailwind Mapping

Use CSS variables and mirror them in tailwind.config.ts.

### CSS Tokens

```css
:root{
  --brand-gold: #D4AF37;
  --brand-gold-700: #B18624;
  --neutral-900: #0F1720;
  --neutral-700: #374151;
  --neutral-600: #6B7280;
  --neutral-200: #F3F4F6;
  --warm-bg: #FBF8F1;
  --white: #FFFFFF;
  --danger: #E53E3E;
  --success: #2F855A;

  --space-xxs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;

  --radius-lg: 12px;
}
```

### Tailwind Theme Extension

```javascript
import { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#D4AF37',
          700: '#B18624'
        },
        neutral: {
          900: '#0F1720',
          700: '#374151',
          600: '#6B7280',
          200: '#F3F4F6'
        },
        warm: '#FBF8F1'
      },
      borderRadius: {
        xl: '12px'
      },
      boxShadow: {
        soft: '0 6px 20px rgba(15,23,32,0.08)'
      }
    }
  },
  plugins: []
};
export default config;
```

### Accessibility Rule

Do not use --brand-gold for paragraph text (contrast). Use it for accents, buttons, icons.

## Typography

* Primary UI font: Inter (variable/regular)
* Heading font (optional): Montserrat / Poppins

### Sizes & Scale

| Heading | Size |
| --- | --- |
| H1 | text-4xl md:text-5xl (40px) |
| H2 | text-3xl (28px) |
| H3 | text-xl (20px) |
| Body | text-base (16px) |
| Small | text-sm (13px) |

### Line Heights & Weights

* Body: 1.5
* Headings: 1.2–1.35
* Weights: 400 (regular), 600 (semibold), 700 (bold)

### Formatting Rules

* Numeric specs use monospace font in tables or inline (font-mono).
* Keep paragraphs short; use bullet lists for features/specs.

## Layout & Responsive Grid

* Container max width: 1280–1360px.
* Breakpoints:
	+ sm < 640px
	+ md 768px
	+ lg 1024px
	+ xl 1280px+
* 12-column grid on md+.
* Gutter sizes: 24px desktop, 16px tablet, stacked on mobile.
* Base spacing unit: 8px.

## Core Components (Required)

Create reusable components under /components. Each component is TypeScript + Tailwind.

* Header.tsx — logo, nav, dropdown logic, login button
* Footer.tsx — site links, contact, social
* Button.tsx — primary / secondary / ghost variants
* Card.tsx — generic card
* SpecsTable.tsx — reusable table for material/equipment specs
* Hero.tsx — page hero with CTA
* CalculatorPlaceholder.tsx — empty placeholder for calculator page
* ImageCarousel.tsx — equipment images
* LayoutContainer.tsx — central max-width wrapper

Provide use client for interactive parts (dropdowns, mobile menu, calculator form).

## Example Component Snippets

### Header (Simplified Example)

```typescript
// components/Header.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur z-50 shadow-sm">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" aria-label="Головна" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Логотип" width={160} height={40} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <div className="group relative">
            <button className="font-medium">3D-друк</button>
            {/* dropdown with links: Калькулятор, MJF, FDM */}
          </div>
          <Link href="/scanning" className="font-medium">3D-сканування</Link>
          <Link href="/services" className="font-medium">Послуги</Link>
          <Link href="/materials" className="font-medium">Матеріали</Link>
          <Link href="/equipment" className="font-medium">Обладнання</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm">Вхід</Link>
          <Link href="/printing/calculator" className="inline-block bg-[var(--brand-gold)] hover:bg-[var(--brand-gold-700)] text-white px-4 py-2 rounded-lg font-semibold">Отримати розрахунок</Link>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Меню">☰</button>
        </div>
      </div>

      {/* mobile menu when open */}
      {open && (
        <div className="md:hidden bg-white px-4 py-3 border-t">
          {/* mobile nav links */}
        </div>
      )}
    </header>
  );
}
```

### Calculator Placeholder (Required)

```typescript
// components/CalculatorPlaceholder.tsx
export default function CalculatorPlaceholder(){
  return (
    <section className="max-w-4xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Калькулятор друку</h1>
      <p className="text-base text-neutral-600">Функціональність калькулятора буде додана пізніше. Сторінка тимчасово порожня.</p>
    </section>
  );
}
```

## Data Models (TypeScript Interfaces)

```typescript
// types/index.ts
export interface SpecRow { param: string; value: string; }
export interface Material {
  id: string;
  name_uk: string;
  summary_uk: string;
  advantages_uk: string[];
  specs: SpecRow[];
  notes_uk?: string[];
}
export interface Equipment {
  id: string;
  name_uk: string;
  technology: 'MJF' | 'FDM';
  specs: SpecRow[];
  images?: string[];
}
export interface Service {
  id: string;
  title_uk: string;
  summary_uk: string;
  content_uk: string; // markdown
  relatedMaterials?: string[];
}
```

## Content Mapping & Copy (Use Verbatim Where Provided)

All visible copy must be in Ukrainian. The following mappings must be used. Copy the specifications exactly (numeric values, units, punctuation).

### Painting Service Page (/services/painting/page.tsx)

* Title: Послуги фарбування пластикових деталей
* Content (verbatim):

Наша компанія спеціалізується на високоякісному фарбуванні пластикових деталей із використанням двох сучасних технологій:

1. Метод пропитки (Dyeing)

Цей метод передбачає глибоке просочення пластика барвником, що забезпечує рівномірне фарбування матеріалу зсередини.
- Доступний лише у класичному чорному кольорі
- Ідеально підходить для технічних деталей, де важлива стійкість кольору до зношування

2. Метод розпилення (Spray Coating)

Фарбування шляхом нанесення фарби методом розпилення дозволяє досягти естетичного вигляду та забезпечити точну відповідність кольору згідно з палітрою RAL.
- Широкий вибір кольорів — будь-який відтінок по RAL
- Підходить для зовнішніх та декоративних елементів

Обидва методи гарантують високу якість покриття, довговічність та точну відповідність технічним вимогам. Ми забезпечуємо індивідуальний підхід до кожного замовлення та готові реалізувати навіть найскладніші завдання.

### FDM Advantages Block (Use on FDM Pages)

Переваги FDM-друку:

Висока точність та повторюваність результатів
Стійкість до механічних навантажень
Широкий вибір інженерних матеріалів
Економічно вигідне рішення для прототипування та дрібносерійного виробництва

### Materials and Equipment: Use the Full Blocks Supplied Below — Copy Numeric Values and Text Exactly into Materials/Equipment Pages.

#### ASA (Acrylonitrile Styrene Acrylate) — FDM (Use as-is)

Short: Ідеальний для зовнішніх застосувань. Має високу стійкість до ультрафіолету, вологи та атмосферних впливів.
Bullets:

-UV-стійкий
-Гарна механічна міцність
-Плавне матове покриття

Технічні характеристики material ASA (Acrylic Styrene Acrylonitrile)

Технологія друку: FDM (Fused Deposition Modeling)

Параметр	Значення
Колір (базовий)	Натуральний / Білий / Чорний
Густина (щільність)	~1.07 г/см³
Межа міцності на розтяг	~45–50 МПа
Модуль пружності на розтяг (E)	~2000–2300 МПа
Подовження при розриві	~6–20%
Ударна в’язкість (IZOD, notched)	~3.5–5.0 кДж/м²
Температура теплового викривлення	~95–105°C (при 0.45 МПа)
Робоча температура (постійна)	до 85°C
УФ-стійкість	Висока
Атмосферостійкість	Відмінна (стійкий до вологи, сонця)
Хімічна стійкість	Добра (до води, спиртів, миючих засобів)
Точність виготовлення	±0.2–0.3 мм
Товщина шару	100–200 мкм
Обробка поверхні	Шліфування, ґрунтування, фарбування

#### Additional Bullets

🔧 Додаткові властивості:
Прекрасно підходить для зовнішнього використання
Стійкий до вицвітання та атмосферних умов
Краща альтернатива ABS для деталей, що піддаються впливу УФ
Гарна адгезія між шарами при правильному налаштуванні друку

#### ABS-PC (Acrylonitrile Butadiene Styrene + Polycarbonate) — FDM

Bullets & technical table (copy exactly):

Комбінація двох полімерів, яка забезпечує відмінну ударну міцність та термостійкість.
-Висока стійкість до ударів
-Добра термостійкість
-Використовується в автомобільній та електронній промисловості

Технічні характеристики матеріалу ABS-PC (Acrylonitrile Butadiene Styrene + Polycarbonate)

Технологія друку: FDM (Fused Deposition Modeling)

Параметр	Значення
Колір (базовий)	Натуральний / Чорний
Густина (щільність)	~1.12 г/см³
Межа міцності на розтяг	~45–55 МПа
Модуль пружності (Юнга)	~2200–2500 МПа
Подовження при розриві	~5–10%
Ударна в’язкість (IZOD, notched)	~8–12 кДж/м²
Температура теплового викривлення	~110–125°C (при 0.45 МПа)
Робоча температура (постійна)	до 100°C
УФ-стійкість	Середня (рекомендується фарбування)
Хімічна стійкість	Висока до масел, жирів, розчинників
Вогнестійкість	UL 94 V-0 (залежно від модифікації)
Точність виготовлення	±0.2–0.3 мм
Товщина шару	100–200 мкм
Обробка поверхні	Шліфування, фарбування, механічна обробка

🔧 Додаткові властивості:
Поєднує жорсткість та термостійкість полікарбонату з оброблюваністю ABS
Ідеальний для деталей, які повинні витримувати ударні навантаження
Часто використовується в автомобільній, електронній та побутовій галузях
Може бути пофарбований або загрунтований для зовнішнього застосування

#### Ultem™ 9085 (PEI – Polyetherimide)

Високопродуктивний матеріал авіаційного класу з сертифікацією FST (вогонь, дим, токсичність).
-Легкий і надзвичайно міцний
-Відповідає стандартам аерокосмічної галузі
- Висока хімічна та термічна стійкість

Технічні характеристики матеріалу Ultem™ 9085 (PEI – Polyetherimide)

Технологія друку: FDM (Fused Deposition Modeling)

Параметр	Значення
Колір (базовий)	Натуральний (напівпрозорий бурштиновий) / Чорний
Густина (щільність)	~1.34 г/см³
Межа міцності на розтяг	~70–80 МПа
Модуль пружності (Юнга)	~2100–2300 МПа
Подовження при розриві	~5–7%
Ударна в’язкість (IZOD, notched)	~8–13 кДж/м²
Температура теплового викривлення	~153°C (при 0.45 МПа)
Робоча температура (постійна)	до 160°C
Вогнестійкість	UL 94 V-0, FAR 25.853 (аерокосмічний стандарт)
УФ-стійкість	Висока (у чорному варіанті)
Хімічна стійкість	Висока — стійкий до пального, мастил, хімікатів
Точність виготовлення	±0.2 мм або ±0.3%
Товщина шару	100–254 мкм
Обробка поверхні	Мінімальна потреба, можливе шліфування

Додаткові властивості:

Легкий, але дуже міцний інженерний термопластик
Ідеально підходить для високонавантажених функціональних деталей
Сертифікований для використання в авіаційній промисловості (FST – вогонь, дим, токсичність)
Сумісний із жорсткими вимогами до безпеки та довговічності

#### Полікарбонат (PC)

Надзвичайно міцний матеріал, що витримує високі температури та механічні навантаження.
-Висока теплостійкість (до 110–130°C)
-Стійкий до ударів
-Ідеальний для технічних та функціональних деталей

Технічні характеристики матеріалу Полікарбонат (PC – Polycarbonate)

Технологія друку: FDM (Fused Deposition Modeling)

Параметр	Значення
Колір (базовий)	Натуральний (напівпрозорий) / Чорний
Густина (щільність)	~1.20 г/см³
Межа міцності на розтяг	~60–70 МПа
Модуль пружності (Юнга)	~2300–2500 МПа
Подовження при розриві	~6–10%
Ударна в’язкість (IZOD, notched)	> 12 кДж/м² (висока ударостійкість)
Температура теплового викривлення	~135–145°C (при 0.45 МПа)
Робоча температура (постійна)	до 110–120°C
Вогнестійкість	UL 94 V-2 (залежно від виробника філаменту)
УФ-стійкість	Низька (рекомендується покриття)
Хімічна стійкість	Висока (до кислот, масел, спиртів)
Точність виготовлення	±0.2–0.3 мм
Товщина шару	100–200 мкм
Обробка поверхні	Шліфування, термообробка, фарбування

🔧 Додаткові властивості:

Надзвичайна ударна міцність — не тріскається при деформації
Стійкий до деформацій при високих температур
Підходить для друку функціональних, навантажених деталей
Рекомендується для закритих принтерів з підігрівом платформи та камери

#### MJF (Multi Jet Fusion) + PA12 Specs (Use Verbatim)

Технологія MJF (Multi Jet Fusion)

MJF (Multi Jet Fusion) — це високотехнологічний метод 3D-друку, розроблений компанією HP, що забезпечує надзвичайну деталізацію, міцність та однорідність готових виробів. Процес полягає у пошаровому нанесенні порошкового полімеру (зазвичай — PA12) з одночасним вибірковим спіканням матеріалу за допомогою термоактивного агента і теплового впливу.

Переваги технології MJF:

Висока точність та деталізація геометрії
Швидке виробництво серійних деталей
Відсутність потреби у підтримках (supports)
Міцні та функціональні деталі прямо "з принтера"
Гарна повторюваність результатів

Матеріал: PA12 (Polyamide 12 / Nylon 12)

PA12 — це інженерний термопластик, що поєднує високу міцність, зносостійкість та хімічну стійкість. Завдяки своїм властивостям, він ідеально підходить для серійного виробництва, функціональних прототипів та кінцевих деталей.

- Висока механічна міцність і жорсткість
- Стійкий до масел, мастил, палива, хімікатів
- Стабільність розмірів та точність
- Матова, однорідна поверхня без видимих шарів
- Можливість подальшої обробки: фарбування, просочення, шліфування

Технічні характеристики матеріалу PA12 (Nylon 12)

Технологія друку: MJF (Multi Jet Fusion)

Параметр	Значення
Колір (базовий)	Сірий / Чорний (після обробки)
Густина (щільність)	~1.01 г/см³
Пористість	< 5% (залежно від геометрії)
Межа міцності на розтяг (XY)	~48–50 МПа
Модуль пружності (модуль Юнга)	~1700–1900 МПа
Подовження при розриві	15–20%
Ударна в’язкість (IZOD, notched)	~4.5 кДж/м²
Температура теплового викривлення	~175°C (при 0.45 МПа)
Робоча температура (постійна)	до 100°C
Водопоглинання	Низьке
Хімічна стійкість	Висока (до масел, мастил, палив)
Точність виготовлення	±0.2 мм або ±0.3%
Товщина шару	80 мкм
Обробка поверхні	Шліфування, фарбування, просочення

Додаткові властивості:
Відмінна стабільність розмірів
Стійкий до ультрафіолету при відповідній обробці
Можливість фарбування у будь-який колір (після друку)
Підходить для виготовлення шарнірних з'єднань та складних механізмів

#### Equipment Content (Use Verbatim)

Stratasys Fortus 250mc

Технологія: FDM (Fused Deposition Modeling)

Професійна система для виготовлення точних і міцних пластикових деталей зі стабільною якістю. Ідеально підходить для функціональних прототипів та виробничих компонентів.

Характеристика	Значення
Робоча камера	254 × 254 × 305 мм
Мін. товщина шару	0.178 мм
Матеріали	ABS-M30
Точність друку	±0.1 – 0.2 мм
Підігрів платформи	Так
Камера з підігрівом	Так
Підтримки	Розчинні (S support)

Stratasys Dimension SST 1200es

Технологія: FDM (Fused Deposition Modeling)

Надійна система для друку ABS-пластиком з використанням розчинних підтримок, що дозволяє створювати складні геометрії з високою точністю.

Характеристика	Значення
Робоча камера	254 × 254 × 305 мм
Товщина шару	0.254 / 0.33 мм
Матеріали	ABSplus
Підтримки	Розчинні (SST – Soluble Support Technology)
Камера з підігрівом	Так
Застосування	Прототипування, функціональні деталі

HP Jet Fusion 5210

Технологія: MJF (Multi Jet Fusion)

Високопродуктивна система для серійного виробництва деталей зі складною геометрією, високою точністю та однорідними механічними властивостями.
Це індустріальне рішення, яке дозволяє виготовляти сотні деталей за день з якістю, придатною до кінцевого використання.

Характеристика	Значення
Робоча камера	380 × 284 × 380 мм
Товщина шару	80 мкм
Матеріали	PA12
Швидкість друку	До 5058 см³/год
Точність	±0.2 мм або ±0.3%
Охолодження/обробка	Автоматизовані модулі пост-обробки
Застосування	Серійне виробництво, функціональні деталі, прототипи з високою точністю

## Page Templates & Generation Rules

### Hero Template

H1 (Ukrainian) — short value proposition

Subtitle (1-2 lines)

Primary CTA: Отримати розрахунок (links to /printing/calculator)

Secondary CTA: Детальніше про матеріали (links to materials)

### Service Detail

H1, short summary, features (bulleted), specs table, CTA (quote request)

### Material Detail

Short summary, advantages, full specs table (use verbatim), downloadable PDF link (if provided)

### Equipment Detail

Hero image, short description, specs table, throughput + contact CTA

### Calculator Page

app/printing/calculator/page.tsx must render a placeholder with the title Калькулятор and the text Функціональність калькулятора буде додана пізніше. Сторінка тимчасово порожня.

## Accessibility & Internationalization

* Language attribute: html lang="uk"
* All images must have descriptive alt (Ukrainian) text
* All interactive controls keyboard-accessible and labeled with ARIA as needed
* Color contrast minimum WCAG AA for body text and WCAG AAA where possible for headings
* Use rel="noopener noreferrer" on external links

## Performance & Best Practices

* Prefer next/image with priority for hero images
* Serve images as WebP/AVIF in production, keep originals in /public
* Inline critical CSS for hero; lazy-load non-critical assets
* Preload fonts with font-display: swap and limit font weights
* Cache API responses and static assets with CDN; set proper cache headers

## SEO & Structured Data

* Every page must have a unique title and meta description in Ukrainian.
* Provide Open Graph tags: og:title, og:description, og:image (use /public/logo.png or hero)
* Include JSON-LD:

Organization (site-wide)

Service for each service page (painting, printing, etc.)

Example JSON-LD (Organization):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Назва компанії",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png"
}
```

## API & Server Stubs

Create a simple API endpoint for quote requests: app/api/quotes/route.ts (Next.js route).

Minimal route (stub)

```typescript
// app/api/quotes/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // validate form data, files, etc.
  // For now, return a placeholder response
  return NextResponse.json({
    id: 'Q-0001',
    estimate: null,
    message_uk: 'Запит отримано. Розрахунок буде доступний пізніше.'
  });
}
```

Security: validate file types (STL, STEP), max 50 MB, scan or sanitize filenames.

## Testing & QA Checklist (for Generated Pages)

Before finalizing, verify:

* H1 exists and is unique per page.
* All links navigate to routes defined in the structure.
* app/printing/calculator/page.tsx shows the placeholder text and has no calculator logic.
* Images have alt text.
* Buttons and inputs are keyboard-navigable.
* Specs tables preserve numeric precision and units exactly as provided.
* Lighthouse performance: attempt LCP < 2.5s on homepage.

## Asset Naming & Export Conventions

* logo.png or logo.svg → /public/logo.png
* hero-production@2x.webp → /public/hero/...
* materials/pa12-thumb@1x.webp → /public/materials/...
* equipment/hp-jetfusion-5210@2x.webp

Filenames: lowercase, hyphen-separated, include @1x, @2x when appropriate

## Deliverables List (What to Produce from This Guide)

* app/layout.tsx + components/Header.tsx, Footer.tsx
* app/page.tsx (homepage) using provided hero copy
* All pages in /app/printing, /app/services, /app/materials, /app/equipment with content mapped above
* app/printing/calculator/page.tsx — empty placeholder (see exact Ukrainian text)
* components/* (Button, Card, SpecsTable, Hero, CalculatorPlaceholder)
* styles/tokens.css + tailwind.config.ts
* app/api/quotes/route.ts (stub)
* JSON-LD snippets added to page head where appropriate
* Asset manifest describing /public images to include

## Example Copy Snippets (Ukrainian, Ready to Paste)

### Hero Title (Example)

Професійний 3D-друк та фарбування пластикових деталей — від прототипу до серії

### Hero Subtitle

MJF • FDM • PA12 • Ultem • ASA — точність, міцність, довговічність. Отримайте розрахунок прямо зараз.

### Calculator Placeholder (Exact Text to Use in Page)

<h1>Калькулятор</h1>
<p>Функціональність калькулятора буде додана пізніше. Сторінка тимчасово порожня.</p>

## Final Rules & Reminders

* Folder/file names must remain English. Visible UI text must be Ukrainian.
* Use /public/logo.png now; create logo.svg later if available.
* Do not implement calculator logic yet; the calculator page should be a placeholder.
* Preserve numeric values and technical specs exactly as provided (no rounding).
* Maintain accessibility standards and performance best practices.

If you want, the next automated step I can produce now (pick one):

* Full code skeleton (files under /app + /components) with placeholder content.
* Header + Navigation component only (TSX + Tailwind) ready to drop into an existing project.
* Fully populated material & equipment pages (TSX/Markdown) using the exact specs above.

Which deliverable should I generate immediately?