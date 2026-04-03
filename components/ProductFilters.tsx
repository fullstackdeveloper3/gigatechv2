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
          lg:static lg:h-auto lg:z-auto lg:rounded-3xl lg:translate-x-0
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
