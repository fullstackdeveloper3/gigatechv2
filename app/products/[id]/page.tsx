import { products, getProduct } from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

const categoryEmoji: Record<string, string> = {
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

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <section className="relative min-h-screen">
      {/* Background orbs */}
      <div className="orb orb-1" style={{ opacity: 0.12 }} />
      <div className="orb orb-2" style={{ opacity: 0.1 }} />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-foreground/40 hover:text-accent transition-colors mb-10 group"
        >
          <svg
            className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          العودة إلى المنتجات
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="glass-elevated rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            <div className="absolute w-40 h-40 rounded-full bg-accent/10 blur-3xl" />
            <span className="relative text-[120px] select-none">
              {categoryEmoji[product.category] || "📦"}
            </span>
            {/* Category badge */}
            <div className="absolute top-5 right-5">
              <span className="badge">{categoryLabel[product.category]}</span>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                {product.title}
              </h1>
              <p className="text-foreground/40 leading-relaxed">
                {product.shortSpecs}
              </p>
            </div>

            {/* Price card */}
            <div className="glass rounded-2xl p-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-foreground/30 mb-1">السعر</p>
                <p className="text-2xl font-bold text-accent text-glow">
                  {product.price}
                </p>
              </div>
              <div className="badge">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                مع الضمان
              </div>
            </div>

            <WhatsAppButton productName={product.title} size="lg" fullWidth />

            {/* Full specs */}
            <div className="mt-2">
              <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
                <div className="w-1 h-5 rounded-full bg-accent" />
                المواصفات الكاملة
              </h2>
              <div className="glass rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {product.fullSpecs.map((spec, i) => (
                      <tr
                        key={spec.label}
                        className={`spec-row ${i % 2 === 0 ? "bg-white/[0.02]" : ""} ${
                          i < product.fullSpecs.length - 1
                            ? "border-b border-white/[0.04]"
                            : ""
                        }`}
                      >
                        <td className="px-5 py-4 font-medium text-foreground/60 w-2/5">
                          {spec.label}
                        </td>
                        <td className="px-5 py-4 text-foreground/80">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
