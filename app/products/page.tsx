"use client";

import { useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="relative min-h-screen">
      {/* Background orb */}
      <div className="orb orb-1" style={{ opacity: 0.15 }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">المنتجات</h1>
          <p className="text-foreground/40 text-sm">
            تصفح مجموعتنا الكاملة من المنتجات التقنية
          </p>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`category-pill rounded-xl px-5 py-2.5 text-sm font-medium ${
                activeCategory === cat.id
                  ? "category-pill-active"
                  : "glass-subtle hover:bg-white/[0.06] text-foreground/60 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-xs text-foreground/30 mb-6 text-center">
          {filtered.length} منتج
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="glass rounded-2xl p-16 text-center">
            <p className="text-foreground/40 text-lg">
              لا توجد منتجات في هذا التصنيف حالياً.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
