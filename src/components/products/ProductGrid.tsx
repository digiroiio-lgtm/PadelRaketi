'use client';

import { useState, useMemo } from 'react';
import { Product } from '@/types';
import ProductCard from './ProductCard';
import FilterSidebar, { FilterState } from '@/components/filters/FilterSidebar';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const SORT_OPTIONS: { value: FilterState['sort']; label: string }[] = [
  { value: 'bestseller', label: 'En Çok Satan' },
  { value: 'rating', label: 'En Yüksek Puan' },
  { value: 'price-asc', label: 'Fiyat (Artan)' },
  { value: 'price-desc', label: 'Fiyat (Azalan)' },
  { value: 'newest', label: 'Yeni Eklenen' },
];

function buildDefaultFilters(products: Product[]): FilterState {
  const max = Math.max(...products.map((p) => p.price), 5000);
  return {
    brands: [],
    levels: [],
    playStyles: [],
    minPrice: 0,
    maxPrice: max,
    minRating: 0,
    onSaleOnly: false,
    inStockOnly: false,
    sort: 'bestseller',
  };
}

export default function ProductGrid({ products, title }: ProductGridProps) {
  const [filters, setFilters] = useState<FilterState>(() => buildDefaultFilters(products));
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.brands.length > 0) {
      result = result.filter((p) => filters.brands.includes(p.brand));
    }
    if (filters.levels.length > 0) {
      result = result.filter((p) => filters.levels.includes(p.level));
    }
    if (filters.playStyles.length > 0) {
      result = result.filter((p) => p.playStyle && filters.playStyles.includes(p.playStyle));
    }
    result = result.filter((p) => p.price >= filters.minPrice && p.price <= filters.maxPrice);
    if (filters.minRating > 0) {
      result = result.filter((p) => p.rating >= filters.minRating);
    }
    if (filters.onSaleOnly) {
      result = result.filter((p) => p.isOnSale || !!p.oldPrice);
    }
    if (filters.inStockOnly) {
      result = result.filter((p) => p.availability === 'InStock');
    }

    switch (filters.sort) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => Number(b.id) - Number(a.id));
        break;
      case 'bestseller':
      default:
        result.sort((a, b) => {
          const aScore = (a.isBestSeller ? 2 : 0) + (b.reviewCount - a.reviewCount) / 1000;
          const bScore = (b.isBestSeller ? 2 : 0) + (a.reviewCount - b.reviewCount) / 1000;
          return bScore - aScore;
        });
        break;
    }

    return result;
  }, [products, filters]);

  // Active filter chips for display
  const activeChips: { label: string; clear: () => void }[] = [];
  filters.brands.forEach((b) =>
    activeChips.push({ label: b, clear: () => setFilters((f) => ({ ...f, brands: f.brands.filter((v) => v !== b) })) })
  );
  filters.levels.forEach((l) =>
    activeChips.push({ label: l, clear: () => setFilters((f) => ({ ...f, levels: f.levels.filter((v) => v !== l) })) })
  );
  filters.playStyles.forEach((s) =>
    activeChips.push({ label: s, clear: () => setFilters((f) => ({ ...f, playStyles: f.playStyles.filter((v) => v !== s) })) })
  );
  if (filters.minRating > 0)
    activeChips.push({ label: `${filters.minRating}⭐+`, clear: () => setFilters((f) => ({ ...f, minRating: 0 })) });
  if (filters.onSaleOnly)
    activeChips.push({ label: 'İndirimli', clear: () => setFilters((f) => ({ ...f, onSaleOnly: false })) });
  if (filters.inStockOnly)
    activeChips.push({ label: 'Stokta', clear: () => setFilters((f) => ({ ...f, inStockOnly: false })) });
  if (filters.minPrice > 0)
    activeChips.push({ label: `Min ${filters.minPrice.toLocaleString('tr-TR')} ₺`, clear: () => setFilters((f) => ({ ...f, minPrice: 0 })) });

  return (
    <div className="relative">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile slide-over filter panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-50 shadow-xl transform transition-transform duration-300 overflow-y-auto md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 pt-6">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            allProducts={products}
            onClose={() => setMobileOpen(false)}
          />
        </div>
      </div>

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden md:block w-56 flex-shrink-0">
          <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 p-5">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              allProducts={products}
            />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Top bar: mobile filter button + sort */}
          <div className="flex items-center gap-3 mb-5">
            {/* Mobile filter button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden flex items-center gap-2 bg-white border border-gray-200 hover:border-green-500 text-gray-700 hover:text-green-700 text-sm font-medium px-3 py-2 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
              </svg>
              Filtrele
              {activeChips.length > 0 && (
                <span className="text-xs bg-green-600 text-white px-1.5 py-0.5 rounded-full font-bold">
                  {activeChips.length}
                </span>
              )}
            </button>

            {/* Result count */}
            <p className="text-sm text-gray-500 flex-1">
              <span className="font-bold text-gray-900">{filtered.length}</span> ürün bulundu
            </p>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort-select" className="text-sm text-gray-500 hidden sm:block whitespace-nowrap">
                Sırala:
              </label>
              <select
                id="sort-select"
                value={filters.sort}
                onChange={(e) => setFilters((f) => ({ ...f, sort: e.target.value as FilterState['sort'] }))}
                className="text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active filter chips */}
          {activeChips.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {activeChips.map((chip) => (
                <button
                  key={chip.label}
                  onClick={chip.clear}
                  className="flex items-center gap-1 text-xs bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors font-medium"
                >
                  {chip.label}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ))}
              <button
                onClick={() => setFilters(buildDefaultFilters(products))}
                className="text-xs text-gray-500 hover:text-red-600 px-2 py-1 rounded-full transition-colors font-medium"
              >
                Tümünü temizle
              </button>
            </div>
          )}

          {/* Product grid */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <div className="text-5xl mb-4">🎾</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sonuç bulunamadı</h3>
              <p className="text-gray-500 mb-4">Filtrelerinizi genişletmeyi deneyin</p>
              <button
                onClick={() => setFilters(buildDefaultFilters(products))}
                className="text-sm font-medium text-green-600 hover:text-green-700 underline"
              >
                Tüm filtreleri temizle
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {filtered.map((product, index) => (
                <ProductCard key={product.id} product={product} rank={index + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
