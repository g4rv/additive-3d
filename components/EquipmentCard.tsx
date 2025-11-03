import Link from "next/link";

interface EquipmentCardProps {
  name: string;
  technology: string;
  description: string;
  href: string;
  imageUrl?: string;
}

export default function EquipmentCard({
  name,
  technology,
  description,
  href,
}: EquipmentCardProps) {
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
        <p className="text-gray-medium text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="mt-4 text-gold text-sm font-medium group-hover:translate-x-2 transition-transform inline-flex items-center">
          Детальніше →
        </div>
      </div>
    </Link>
  );
}
