import type { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schemas';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Padel Raketleri – Tüm Modeller ve Fiyatlar 2026',
  description:
    'En iyi padel raketlerini inceleyin. Wilson, Adidas, Nox, Head, Bullpadel başlangıçtan profesyonele tüm seviyeler için raket seçenekleri.',
  alternates: {
    canonical: 'https://padelraketi.com/padel-raketleri',
  },
};

export default function PadelRaketleriPage() {
  const breadcrumbs = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Padel Raketleri', url: '/padel-raketleri' },
  ];

  return (
    <>
      <JsonLd schema={breadcrumbSchema(breadcrumbs)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Padel Raketleri' },
          ]}
        />

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Padel Raketleri
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            2026 yılının en popüler padel raketleri. Uzman değerlendirmeleri ve gerçek kullanıcı
            yorumlarıyla doğru raket seçimini yapın.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Tümü', 'Başlangıç', 'Orta', 'İleri', 'Profesyonel'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'Tümü'
                  ? 'bg-green-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} rank={index + 1} />
          ))}
        </div>

        {/* SEO Text */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Padel Raketi Seçim Rehberi
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Doğru padel raketini seçmek, oyununuzu bir üst seviyeye taşıyabilir. Yüzlerce model
              arasından en uygun olanı bulmak için önce seviyenizi, ardından oyun stilinizi
              belirlemeniz gerekir.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Başlangıç oyuncuları</strong> için yuvarlak şekilli ve fiberglas yüzeyli
              raketler tavsiye edilir. Bu raketler geniş tatlı noktaları sayesinde daha affedicidir
              ve teknik öğrenmeyi kolaylaştırır.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Orta ve ileri seviye oyuncular</strong> karbon fiber veya hibrit malzemeli,
              damla veya elmas şekilli raketlere geçiş yapabilir. Bu modeller daha fazla güç ve
              spin kapasitesi sağlar.
            </p>
          </div>
          <div className="mt-6 flex gap-4">
            <Link
              href="/blog/padel-raketi-nasil-secilir"
              className="text-green-600 font-semibold text-sm hover:text-green-700 flex items-center gap-1"
            >
              Raket Seçim Rehberini Oku
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
