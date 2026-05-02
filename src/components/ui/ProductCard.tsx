import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  rank?: number;
}

export default function ProductCard({ product, rank }: ProductCardProps) {
  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden group">
      {/* Image Area */}
      <div className="relative bg-gray-50 h-48 flex items-center justify-center">
        {rank && (
          <div className="absolute top-3 left-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
            {rank}
          </div>
        )}
        {product.badge && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            {product.badge}
          </div>
        )}
        {discountPercent && (
          <div className="absolute bottom-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            %{discountPercent} İndirim
          </div>
        )}
        {/* Placeholder image */}
        <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
          <span className="text-green-700 font-bold text-lg">{product.brand[0]}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
          {product.brand}
        </p>
        <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
          <span className="text-sm text-gray-400">({product.reviewCount})</span>
        </div>

        {/* Specs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.weight}</span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.level}</span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.shape}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">
            {product.price.toLocaleString('tr-TR')} ₺
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {product.oldPrice.toLocaleString('tr-TR')} ₺
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/padel-raketleri/${product.slug}`}
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
        >
          Şimdi İncele
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
