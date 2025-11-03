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
      <div className="bg-card-bg border border-border rounded-lg p-6 h-full hover:border-gold transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 group">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gold mb-3 group-hover:text-gold/80">
          {title}
        </h3>
        <p className="text-gray-medium text-sm leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}
