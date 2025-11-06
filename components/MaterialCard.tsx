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
      <div className="bg-card-bg border-border hover:border-gold hover:shadow-gold/10 group h-full rounded-lg border p-6 transition-all duration-300 hover:shadow-lg">
        <div className="mb-4">
          <span className="bg-gold/10 text-gold inline-block rounded-full px-3 py-1 text-xs font-semibold">
            {technology}
          </span>
        </div>
        <h3 className="text-gold group-hover:text-gold/80 mb-3 text-xl font-semibold">
          {name}
        </h3>
        <p className="text-gray-medium mb-4 text-sm leading-relaxed">
          {description}
        </p>
        {properties.length > 0 && (
          <ul className="text-gray-medium space-y-1 text-xs">
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
