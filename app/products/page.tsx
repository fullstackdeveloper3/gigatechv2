"use client";

import { useState, useMemo } from "react";
import { products, priceRanges } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeBrand, setActiveBrand] = useState("all");
  const [activePriceRange, setActivePriceRange] = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activeBrand !== "all") {
      result = result.filter((p) => p.brand === activeBrand);
    }

    if (activePriceRange !== "all") {
      const range = priceRanges.find((r) => r.id === activePriceRange);
      if (range) {
        result = result.filter(
          (p) => p.priceNum >= range.min && p.priceNum <= range.max
        );
      }
    }

    return result;
  }, [activeCategory, activeBrand, activePriceRange]);

  const activeFilterCount = [activeCategory, activeBrand, activePriceRange].filter(
    (f) => f !== "all"
  ).length;

  return (
    <section className="relative min-h-screen">
      {/* Background orb */}
      <div className="orb orb-1" style={{ opacity: 0.15 }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">المنتجات</h1>
          <p className="text-foreground/40 text-sm">
            تصفح مجموعتنا الكاملة من المنتجات التقنية
          </p>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* Mobile filter toggle */}
        <div className="lg:hidden mb-6 flex items-center justify-between">
          <button
            onClick={() => setFiltersOpen(true)}
            className="glass glass-interactive inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-foreground/70 hover:text-foreground"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
            الفلاتر
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-accent text-[10px] font-bold text-background flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
          <p className="text-xs text-foreground/30">
            {filtered.length} منتج
          </p>
        </div>

        {/* Main layout: sidebar + grid */}
        <div className="lg:flex lg:gap-8 lg:items-start">
          {/* Filter sidebar — fixed drawer on mobile, static sidebar on desktop */}
          <div className="lg:w-[260px] lg:shrink-0 lg:sticky lg:top-24">
            <ProductFilters
              activeCategory={activeCategory}
              activeBrand={activeBrand}
              activePriceRange={activePriceRange}
              onCategoryChange={setActiveCategory}
              onBrandChange={setActiveBrand}
              onPriceRangeChange={setActivePriceRange}
              isOpen={filtersOpen}
              onClose={() => setFiltersOpen(false)}
            />
            <p className="hidden lg:block text-xs text-foreground/30 mt-4 text-center">
              {filtered.length} منتج
            </p>
          </div>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Active filter pills */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeCategory !== "all" && (
                  <FilterPill
                    label={
                      activeCategory === "laptop"
                        ? "لابتوبات"
                        : activeCategory === "desktop"
                        ? "كمبيوترات"
                        : activeCategory === "cctv"
                        ? "كاميرات المراقبة"
                        : "طابعات"
                    }
                    onRemove={() => setActiveCategory("all")}
                  />
                )}
                {activeBrand !== "all" && (
                  <FilterPill
                    label={activeBrand.charAt(0).toUpperCase() + activeBrand.slice(1)}
                    onRemove={() => setActiveBrand("all")}
                  />
                )}
                {activePriceRange !== "all" && (
                  <FilterPill
                    label={
                      priceRanges.find((r) => r.id === activePriceRange)?.label ??
                      ""
                    }
                    onRemove={() => setActivePriceRange("all")}
                  />
                )}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="glass rounded-2xl p-12 sm:p-16 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <p className="text-foreground/40 text-lg mb-2">
                  لا توجد منتجات مطابقة
                </p>
                <p className="text-foreground/25 text-sm">
                  جرب تغيير الفلاتر للعثور على ما تبحث عنه
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterPill({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
      {label}
      <button
        onClick={onRemove}
        className="w-4 h-4 rounded-full hover:bg-accent/20 flex items-center justify-center transition-colors"
      >
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </span>
  );
}
