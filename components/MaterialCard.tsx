import Link from "next/link";

interface MaterialCardProps {
  name: string;
  technology: string;
  description: string;
  href: string;
  properties?: string[];
}

export default function MaterialCard({
  name,
  technology,
  description,
  href,
  properties = [],
}: MaterialCardProps) {
  return (
    <Link href={href}>
      <div className="bg-card-bg border border-border rounded-lg p-6 h-full hover:border-gold transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 group">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">
            {technology}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gold mb-3 group-hover:text-gold/80">
          {name}
        </h3>
        <p className="text-gray-medium text-sm leading-relaxed mb-4">
          {description}
        </p>
        {properties.length > 0 && (
          <ul className="space-y-1 text-xs text-gray-medium">
            {properties.map((prop, index) => (
              <li key={index} className="flex items-center">
                <span className="text-gold mr-2">✓</span>
                {prop}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
