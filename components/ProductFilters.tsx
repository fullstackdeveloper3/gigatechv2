"use client";

import { categories, brands, priceRanges } from "@/data/products";

interface ProductFiltersProps {
  activeCategory: string;
  activeBrand: string;
  activePriceRange: string;
  onCategoryChange: (id: string) => void;
  onBrandChange: (id: string) => void;
  onPriceRangeChange: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductFilters({
  activeCategory,
  activeBrand,
  activePriceRange,
  onCategoryChange,
  onBrandChange,
  onPriceRangeChange,
  isOpen,
  onClose,
}: ProductFiltersProps) {
  const relevantBrands = brands.filter((b) => {
    if (b.id === "all") return true;
    if (activeCategory === "all") return true;
    const brandCategoryMap: Record<string, string[]> = {
      laptop: ["dell", "hp", "lenovo", "asus"],
      desktop: ["custom", "hp"],
      cctv: ["hikvision", "dahua"],
      printer: ["hp", "canon", "brother"],
    };
    return brandCategoryMap[activeCategory]?.includes(b.id);
  });

  const hasActiveFilters =
    activeCategory !== "all" ||
    activeBrand !== "all" ||
    activePriceRange !== "all";

  const clearAll = () => {
    onCategoryChange("all");
    onBrandChange("all");
    onPriceRangeChange("all");
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-[300px] z-50 overflow-y-auto
          glass-elevated rounded-l-3xl p-6
          transition-transform duration-300 ease-in-out
          lg:top-24 lg:h-auto lg:w-[260px] lg:rounded-3xl lg:translate-x-0
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile close button */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <h2 className="text-lg font-bold">الفلاتر</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl glass-subtle flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Desktop heading */}
        <div className="hidden lg:flex items-center gap-2 mb-6">
          <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
          </svg>
          <h2 className="text-lg font-bold">الفلاتر</h2>
        </div>

        {/* Clear all */}
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="w-full mb-5 py-2 px-4 rounded-xl text-xs font-medium text-accent border border-accent/20 hover:bg-accent/10 transition-colors"
          >
            مسح جميع الفلاتر
          </button>
        )}

        {/* Category / Type */}
        <FilterSection title="النوع">
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <FilterButton
                key={cat.id}
                label={cat.label}
                active={activeCategory === cat.id}
                onClick={() => {
                  onCategoryChange(cat.id);
                  if (cat.id !== "all" && cat.id !== activeCategory) {
                    onBrandChange("all");
                  }
                }}
              />
            ))}
          </div>
        </FilterSection>

        {/* Brand */}
        <FilterSection title="الماركة">
          <div className="flex flex-col gap-2">
            {relevantBrands.map((brand) => (
              <FilterButton
                key={brand.id}
                label={brand.label}
                active={activeBrand === brand.id}
                onClick={() => onBrandChange(brand.id)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Price Range */}
        <FilterSection title="السعر">
          <div className="flex flex-col gap-2">
            {priceRanges.map((range) => (
              <FilterButton
                key={range.id}
                label={range.label}
                active={activePriceRange === range.id}
                onClick={() => onPriceRangeChange(range.id)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Social Links */}
        <div className="mt-4 pt-4 border-t border-white/[0.06]">
          <h3 className="text-sm font-semibold text-foreground/70 mb-3 flex items-center gap-2">
            <div className="w-1 h-4 rounded-full bg-accent" />
            تابعنا
          </h3>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/giga.tech1?igsh=ejVhZXE3NDNzamNx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass-subtle flex items-center justify-center text-foreground/50 hover:text-pink-400 hover:bg-pink-400/10 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/17CQyZEEG2/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass-subtle flex items-center justify-center text-foreground/50 hover:text-blue-400 hover:bg-blue-400/10 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-foreground/70 mb-3 flex items-center gap-2">
        <div className="w-1 h-4 rounded-full bg-accent" />
        {title}
      </h3>
      {children}
    </div>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-right w-full px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
        active
          ? "bg-accent/15 text-accent border border-accent/30 font-medium"
          : "text-foreground/50 hover:text-foreground/80 hover:bg-white/[0.04] border border-transparent"
      }`}
    >
      {label}
    </button>
  );
}
