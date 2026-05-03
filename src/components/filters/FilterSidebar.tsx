'use client';

import { Product } from '@/types';

export interface FilterState {
  brands: string[];
  levels: string[];
  playStyles: string[];
  minPrice: number;
  maxPrice: number;
  minRating: number;
  onSaleOnly: boolean;
  inStockOnly: boolean;
  sort: 'bestseller' | 'rating' | 'price-asc' | 'price-desc' | 'newest';
}

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  allProducts: Product[];
  onClose?: () => void;
}

const PRICE_OPTIONS = [0, 1000, 1500, 2000, 2500, 3000, 4000, 5000];

function CheckboxGroup({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="mb-5">
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{label}</h3>
      <div className="space-y-1.5">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => onToggle(opt)}
              className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
            />
            <span className="text-sm text-gray-700 group-hover:text-green-700 transition-colors">
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function FilterSidebar({ filters, onChange, allProducts, onClose }: FilterSidebarProps) {
  const brands = Array.from(new Set(allProducts.map((p) => p.brand))).sort();
  const levels = ['Başlangıç', 'Orta', 'İleri', 'Profesyonel'];
  const playStyles = ['Güç', 'Kontrol', 'Dengeli'];

  function toggleArray(arr: string[], value: string): string[] {
    return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
  }

  function reset() {
    const max = Math.max(...allProducts.map((p) => p.price));
    onChange({
      brands: [],
      levels: [],
      playStyles: [],
      minPrice: 0,
      maxPrice: max,
      minRating: 0,
      onSaleOnly: false,
      inStockOnly: false,
      sort: 'bestseller',
    });
  }

  const activeCount = [
    filters.brands.length > 0,
    filters.levels.length > 0,
    filters.playStyles.length > 0,
    filters.minPrice > 0,
    filters.maxPrice < Math.max(...allProducts.map((p) => p.price)),
    filters.minRating > 0,
    filters.onSaleOnly,
    filters.inStockOnly,
  ].filter(Boolean).length;

  return (
    <aside className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-gray-900 text-base">Filtreler</h2>
          {activeCount > 0 && (
            <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full font-bold">
              {activeCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {activeCount > 0 && (
            <button
              onClick={reset}
              className="text-xs text-red-500 hover:text-red-700 font-medium transition-colors"
            >
              Temizle
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Filtreleri kapat"
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors md:hidden"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="space-y-1 divide-y divide-gray-100">
        {/* Price range */}
        <div className="pb-5">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Fiyat Aralığı</h3>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Min (₺)</label>
              <select
                value={filters.minPrice}
                onChange={(e) => onChange({ ...filters, minPrice: Number(e.target.value) })}
                className="w-full text-sm border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {PRICE_OPTIONS.filter((p) => p < filters.maxPrice).map((p) => (
                  <option key={p} value={p}>{p === 0 ? 'Tümü' : `${p.toLocaleString('tr-TR')} ₺`}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Max (₺)</label>
              <select
                value={filters.maxPrice}
                onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
                className="w-full text-sm border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {PRICE_OPTIONS.filter((p) => p > filters.minPrice || p === 5000).map((p) => (
                  <option key={p} value={p}>{p === 5000 ? '5.000+ ₺' : `${p.toLocaleString('tr-TR')} ₺`}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className="pt-4">
          <CheckboxGroup
            label="Marka"
            options={brands}
            selected={filters.brands}
            onToggle={(v) => onChange({ ...filters, brands: toggleArray(filters.brands, v) })}
          />
        </div>

        {/* Level */}
        <div className="pt-4">
          <CheckboxGroup
            label="Seviye"
            options={levels}
            selected={filters.levels}
            onToggle={(v) => onChange({ ...filters, levels: toggleArray(filters.levels, v) })}
          />
        </div>

        {/* Play style */}
        <div className="pt-4">
          <CheckboxGroup
            label="Oyun Tipi"
            options={playStyles}
            selected={filters.playStyles}
            onToggle={(v) => onChange({ ...filters, playStyles: toggleArray(filters.playStyles, v) })}
          />
        </div>

        {/* Rating */}
        <div className="pb-5 pt-4">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Minimum Puan</h3>
          <div className="space-y-1.5">
            {[0, 4, 4.5].map((r) => (
              <label key={r} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="minRating"
                  checked={filters.minRating === r}
                  onChange={() => onChange({ ...filters, minRating: r })}
                  className="w-4 h-4 border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                />
                <span className="text-sm text-gray-700 group-hover:text-green-700 transition-colors">
                  {r === 0 ? 'Tümü' : `${r}⭐ ve üzeri`}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div className="pt-4 space-y-3">
          <label className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm text-gray-700 group-hover:text-green-700 transition-colors">
              Yalnızca İndirimli
            </span>
            <button
              role="switch"
              aria-checked={filters.onSaleOnly}
              onClick={() => onChange({ ...filters, onSaleOnly: !filters.onSaleOnly })}
              className={`relative w-10 h-5 rounded-full transition-colors ${filters.onSaleOnly ? 'bg-green-600' : 'bg-gray-200'}`}
            >
              <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${filters.onSaleOnly ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
          </label>
          <label className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm text-gray-700 group-hover:text-green-700 transition-colors">
              Yalnızca Stokta
            </span>
            <button
              role="switch"
              aria-checked={filters.inStockOnly}
              onClick={() => onChange({ ...filters, inStockOnly: !filters.inStockOnly })}
              className={`relative w-10 h-5 rounded-full transition-colors ${filters.inStockOnly ? 'bg-green-600' : 'bg-gray-200'}`}
            >
              <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${filters.inStockOnly ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
          </label>
        </div>
      </div>
    </aside>
  );
}
