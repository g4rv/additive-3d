import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon = "⚙️",
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="bg-card-bg border-border hover:border-gold hover:shadow-gold/10 group h-full rounded-lg border p-6 transition-all duration-300 hover:shadow-lg">
        <div className="mb-4 text-4xl transition-transform group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-gold group-hover:text-gold/80 mb-3 text-xl font-semibold">
          {title}
        </h3>
        <p className="text-gray-medium text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
