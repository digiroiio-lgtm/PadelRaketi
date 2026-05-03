import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  rank?: number;
}

function getProductDetailUrl(product: Product): string {
  return product.isRefurbished
    ? `/yenilenmis-padel-raketleri/${product.slug}`
    : `/padel-raketleri/${product.slug}`;
}

const levelColors: Record<string, string> = {
  Başlangıç: 'bg-green-100 text-green-700',
  Orta: 'bg-blue-100 text-blue-700',
  İleri: 'bg-orange-100 text-orange-700',
  Profesyonel: 'bg-purple-100 text-purple-700',
};

const playStyleIcons: Record<string, string> = {
  Güç: '⚡',
  Kontrol: '🎯',
  Dengeli: '⚖️',
};

export default function ProductCard({ product, rank }: ProductCardProps) {
  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  const badgeColor = product.isRefurbished
    ? 'bg-teal-500'
    : product.isBestSeller
    ? 'bg-orange-500'
    : product.isOnSale && discountPercent
    ? 'bg-red-500'
    : 'bg-orange-500';

  const badgeLabel = product.isRefurbished
    ? '♻️ Yenilenmiş'
    : product.badge ?? null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all overflow-hidden group flex flex-col">
      {/* Image Area */}
      <div className="relative bg-gray-50 h-52 flex items-center justify-center flex-shrink-0">
        {rank && (
          <div className="absolute top-3 left-3 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xs z-10">
            {rank}
          </div>
        )}

        {/* Primary badge */}
        {badgeLabel && (
          <div className={`absolute top-3 right-3 ${badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full z-10 max-w-[120px] truncate`}>
            {badgeLabel}
          </div>
        )}

        {/* Discount badge (bottom left) */}
        {discountPercent && !product.isRefurbished && (
          <div className="absolute bottom-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            %{discountPercent} İndirim
          </div>
        )}

        {/* Refurbished savings */}
        {product.isRefurbished && discountPercent && (
          <div className="absolute bottom-3 left-3 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            %{discountPercent} Tasarruf
          </div>
        )}

        {/* Product image placeholder */}
        <div className="w-36 h-36 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex flex-col items-center justify-center gap-1">
          <span className="text-green-700 font-extrabold text-2xl">{product.brand[0]}</span>
          <span className="text-green-600 text-xs font-medium">{product.brand}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Brand + play style */}
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">
            {product.brand}
          </p>
          {product.playStyle && (
            <span className="text-xs text-gray-500 flex items-center gap-0.5">
              {playStyleIcons[product.playStyle]} {product.playStyle}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-green-700 transition-colors leading-snug">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-3.5 h-3.5 ${star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-bold text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>

        {/* Spec chips */}
        <div className="flex flex-wrap gap-1 mb-3">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${levelColors[product.level] ?? 'bg-gray-100 text-gray-600'}`}>
            {product.level}
          </span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.weight}</span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.shape}</span>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2 mb-1 mt-auto">
          <span className="text-xl font-extrabold text-gray-900">
            {product.price.toLocaleString('tr-TR')} ₺
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through pb-0.5">
              {product.oldPrice.toLocaleString('tr-TR')} ₺
            </span>
          )}
        </div>

        {/* Delivery info */}
        <p className="text-xs text-green-600 font-medium mb-3 flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {product.availability === 'InStock' ? 'Stokta — Hızlı kargo' : 'Stok tükendi'}
        </p>

        <div className="flex flex-col gap-2">
          <Link
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-xl transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m10 0H7" />
            </svg>
            En Uygun Fiyat
          </Link>
          <Link
            href={getProductDetailUrl(product)}
            className="w-full flex items-center justify-center gap-1 border border-gray-200 hover:border-green-500 text-gray-700 hover:text-green-700 font-medium py-2 px-4 rounded-xl transition-colors text-xs"
          >
            Detaylı İncele
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
