import { products, getProduct } from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return {};
  return {
    title: `${product.title} | گيگا تك`,
    description: `${product.title} - ${product.shortSpecs}. ${product.price}. گيگا تك - كركوك، العراق.`,
  };
}

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

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-foreground/40 hover:text-accent transition-colors mb-6 sm:mb-10 group"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16">
          {/* Image */}
          <div className="glass-elevated rounded-2xl sm:rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${product.img}`}
              alt={product.title}
              width={600}
              height={600}
              className="w-full h-full object-contain p-6 sm:p-8"
              priority
            />
            {/* Category + Brand badges */}
            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex flex-col gap-1.5">
              <span className="badge">{categoryLabel[product.category]}</span>
              <span className="badge badge-brand">{brandLabel[product.brand]}</span>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                {product.title}
              </h1>
              <p className="text-foreground/40 leading-relaxed text-sm sm:text-base">
                {product.shortSpecs}
              </p>
            </div>

            {/* Price card */}
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs text-foreground/30 mb-1">السعر</p>
                <p className="text-lg sm:text-2xl font-bold text-accent text-glow">
                  {product.price}
                </p>
              </div>
              <div className="badge shrink-0">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                مع الضمان
              </div>
            </div>

            <WhatsAppButton productName={product.title} size="lg" fullWidth />

            {/* Description */}
            <div className="mt-1 sm:mt-2">
              <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                <div className="w-1 h-5 rounded-full bg-accent" />
                الوصف
              </h2>
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <p className="text-foreground/60 leading-relaxed text-xs sm:text-sm">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Full specs */}
            <div>
              <h2 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5 flex items-center gap-2">
                <div className="w-1 h-5 rounded-full bg-accent" />
                المواصفات الكاملة
              </h2>
              <div className="glass rounded-xl sm:rounded-2xl overflow-hidden">
                <table className="w-full text-xs sm:text-sm">
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
                        <td className="px-3 sm:px-5 py-3 sm:py-4 font-medium text-foreground/60 w-2/5">
                          {spec.label}
                        </td>
                        <td className="px-3 sm:px-5 py-3 sm:py-4 text-foreground/80">
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
