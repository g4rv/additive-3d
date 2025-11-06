import React from 'react';
import Link from 'next/link';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function Hero({ title, subtitle, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="bg-linear-to-br from-warm to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-neutral-700 mb-8 max-w-3xl">
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap gap-4">
          {primaryCTA && (
            <Link href={primaryCTA.href}>
              <Button variant="primary">{primaryCTA.text}</Button>
            </Link>
          )}
          {secondaryCTA && (
            <Link href={secondaryCTA.href}>
              <Button variant="secondary">{secondaryCTA.text}</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
