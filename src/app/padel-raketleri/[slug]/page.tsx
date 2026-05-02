import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import FAQSection from '@/components/ui/FAQSection';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { productSchema, breadcrumbSchema, reviewSchema, faqSchema } from '@/lib/schemas';
import { getProductBySlug, productReviews, products } from '@/data/products';
import { FAQ } from '@/types';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} İncelemesi – Fiyat & Özellikler 2026`,
    description: `${product.name} incelemesi: ${product.description.slice(0, 150)}...`,
    alternates: {
      canonical: `https://padelraketi.com/padel-raketleri/${slug}`,
    },
    openGraph: {
      title: `${product.name} – PadelRaketi.com`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

const productFaqs: FAQ[] = [
  {
    question: 'Bu raket hangi seviyeye uygundur?',
    answer:
      'Ürün sayfasında belirtilen seviye bilgisine göre en iyi performansı o seviyede gösterir. Ancak bireysel tercihler de belirleyici olabilir.',
  },
  {
    question: 'Garanti süresi ne kadar?',
    answer:
      'Resmi distribütörden satın alınan ürünlerde genellikle 1 yıl üretici garantisi mevcuttur.',
  },
  {
    question: 'Grip değiştirilebilir mi?',
    answer:
      'Evet, padel raketlerindeki grip kolayca değiştirilebilir. Yedek grip spor mağazalarında bulunur.',
  },
  {
    question: 'Raket ağırlığı artırılabilir mi?',
    answer:
      'Kurşun bant eklenerek ağırlık artırılabilir, ancak bu denge noktasını etkiler. Profesyonel yardım alınması önerilir.',
  },
  {
    question: 'Kargo ne kadar sürer?',
    answer:
      'Satıcıya göre değişmekle birlikte, büyük platformlarda 1-3 iş günü kargo süresi standart kabul edilir.',
  },
];

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const reviews = productReviews[slug] || [];
  const breadcrumbs = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Padel Raketleri', url: '/padel-raketleri' },
    { name: product.name, url: `/padel-raketleri/${slug}` },
  ];

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : product.rating;

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  return (
    <>
      <JsonLd schema={productSchema(product)} />
      <JsonLd schema={breadcrumbSchema(breadcrumbs)} />
      <JsonLd schema={faqSchema(productFaqs)} />
      {reviews.length > 0 && <JsonLd schema={reviewSchema(product, reviews)} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Padel Raketleri', href: '/padel-raketleri' },
            { label: product.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl h-80 flex items-center justify-center mb-4 relative">
              {product.badge && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {product.badge}
                </div>
              )}
              {discountPercent && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  %{discountPercent} İndirim
                </div>
              )}
              <div className="w-40 h-40 bg-gradient-to-br from-green-200 to-green-400 rounded-2xl flex items-center justify-center">
                <span className="text-green-900 font-bold text-3xl">{product.brand[0]}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.slice(0, 3).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-xl h-20 flex items-center justify-center cursor-pointer hover:bg-green-50 transition-colors border-2 border-transparent hover:border-green-500"
                >
                  <span className="text-gray-400 text-xs">Fotoğraf {i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-bold text-green-600 uppercase tracking-wide">{product.brand}</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">{product.level}</span>
            </div>

            <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star <= Math.round(avgRating) ? 'text-yellow-400' : 'text-gray-200'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-gray-800">{avgRating.toFixed(1)}</span>
              <span className="text-gray-500 text-sm">({product.reviewCount} değerlendirme)</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-extrabold text-gray-900">
                {product.price.toLocaleString('tr-TR')} ₺
              </span>
              {product.oldPrice && (
                <div className="flex flex-col">
                  <span className="text-gray-400 line-through text-lg">
                    {product.oldPrice.toLocaleString('tr-TR')} ₺
                  </span>
                  {discountPercent && (
                    <span className="text-red-500 text-sm font-semibold">%{discountPercent} İndirim</span>
                  )}
                </div>
              )}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`w-2.5 h-2.5 rounded-full ${product.availability === 'InStock' ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-sm text-gray-700">
                {product.availability === 'InStock' ? 'Stokta mevcut' : 'Stokta yok'}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg shadow-lg"
              >
                En Uygun Fiyatı Gör
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full flex items-center justify-center gap-2 border-2 border-green-600 text-green-700 hover:bg-green-50 font-bold py-3.5 px-8 rounded-xl transition-colors"
              >
                Satın Al
              </a>
            </div>

            <p className="text-xs text-gray-400 mt-3 text-center">
              * Fiyatlar değişkenlik gösterebilir. Satıcı sitesi güncel fiyatı yansıtır.
            </p>
          </div>
        </div>

        {/* Specs Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Teknik Özellikler</h2>
            <dl className="space-y-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <dt className="text-sm text-gray-500">{key}</dt>
                  <dd className="text-sm font-semibold text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Pros and Cons */}
          <div className="space-y-6">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                Artılar
              </h3>
              <ul className="space-y-2">
                {product.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-green-700">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                </svg>
                Eksiler
              </h3>
              <ul className="space-y-2">
                {product.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-red-700">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* User Reviews */}
        {reviews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Kullanıcı Değerlendirmeleri
            </h2>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-bold text-gray-900">{review.author}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                            Doğrulanmış Alım
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        <FAQSection faqs={productFaqs} title="Ürün Hakkında Sık Sorulan Sorular" />

        {/* Internal Links */}
        <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">İlgili Sayfalar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/en-iyi-padel-raketleri" className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              En İyi Padel Raketleri 2026
            </Link>
            <Link href="/padel-raket-fiyatlari" className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Padel Raket Fiyatları Karşılaştırması
            </Link>
            <Link href="/blog/padel-raketi-nasil-secilir" className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Padel Raketi Nasıl Seçilir?
            </Link>
            <Link href="/baslangic-icin-padel-raketleri" className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Başlangıç İçin Padel Raketleri
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
