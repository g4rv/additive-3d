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
      <div className="bg-card-bg border-border hover:border-gold hover:shadow-gold/10 group h-full rounded-lg border p-6 transition-all duration-300 hover:shadow-lg">
        <div className="mb-4">
          <span className="bg-gold/10 text-gold inline-block rounded-full px-3 py-1 text-xs font-semibold">
            {technology}
          </span>
        </div>
        <h3 className="text-gold group-hover:text-gold/80 mb-3 text-xl font-semibold">
          {name}
        </h3>
        <p className="text-gray-medium line-clamp-3 text-sm leading-relaxed">
          {description}
        </p>
        <div className="text-gold mt-4 inline-flex items-center text-sm font-medium transition-transform group-hover:translate-x-2">
          Детальніше →
        </div>
      </div>
    </Link>
  );
}
