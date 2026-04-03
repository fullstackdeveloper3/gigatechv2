import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import WhatsAppButton from "./WhatsAppButton";

const categoryLabel: Record<string, string> = {
  laptop: "لابتوب",
  desktop: "كمبيوتر",
  cctv: "كاميرات",
  printer: "طابعة",
};

const brandLabel: Record<string, string> = {
  dell: "Dell",
  hp: "HP",
  lenovo: "Lenovo",
  asus: "ASUS",
  custom: "تجميع",
  hikvision: "Hikvision",
  dahua: "Dahua",
  canon: "Canon",
  brother: "Brother",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="glass glass-interactive rounded-2xl overflow-hidden flex flex-col group">
      {/* Image area */}
      <Link href={`/products/${product.id}`} className="relative block">
        <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/[0.03] flex items-center justify-center overflow-hidden">
          <Image
            src={product.img}
            alt={product.title}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Category + Brand badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5">
          <span className="badge">{categoryLabel[product.category]}</span>
          <span className="badge badge-brand">{brandLabel[product.brand]}</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 gap-3">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-sm leading-relaxed text-foreground/90 group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {product.title}
          </h3>
        </Link>

        <p className="text-xs text-foreground/40 leading-relaxed line-clamp-2">
          {product.shortSpecs}
        </p>

        <div className="mt-auto pt-4">
          <div className="section-divider mb-4" />
          <div className="flex items-center justify-between gap-2">
            <span className="text-accent font-bold text-xs sm:text-sm text-glow whitespace-nowrap">
              {product.price}
            </span>
            <WhatsAppButton productName={product.title} size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
