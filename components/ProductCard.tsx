import Link from "next/link";
import type { Product } from "@/data/products";
import WhatsAppButton from "./WhatsAppButton";

const categoryIcon: Record<string, string> = {
  laptop: "💻",
  desktop: "🖥️",
  cctv: "📹",
  printer: "🖨️",
};

const categoryLabel: Record<string, string> = {
  laptop: "لابتوب",
  desktop: "كمبيوتر",
  cctv: "كاميرات",
  printer: "طابعة",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="glass glass-interactive rounded-2xl overflow-hidden flex flex-col group">
      {/* Image area */}
      <Link href={`/products/${product.id}`} className="relative">
        <div className="aspect-[4/3] bg-gradient-to-br from-white/[0.03] to-transparent flex items-center justify-center overflow-hidden">
          {/* Subtle glow behind icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-all duration-500" />
          </div>
          <span className="relative text-5xl select-none group-hover:scale-110 transition-transform duration-500">
            {categoryIcon[product.category] || "📦"}
          </span>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span className="badge">{categoryLabel[product.category]}</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-sm leading-relaxed text-foreground/90 group-hover:text-accent transition-colors duration-300">
            {product.title}
          </h3>
        </Link>

        <p className="text-xs text-foreground/40 leading-relaxed">
          {product.shortSpecs}
        </p>

        <div className="mt-auto pt-4">
          <div className="section-divider mb-4" />
          <div className="flex items-center justify-between">
            <span className="text-accent font-bold text-sm text-glow">
              {product.price}
            </span>
            <WhatsAppButton productName={product.title} size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
