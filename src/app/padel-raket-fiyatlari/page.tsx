import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/ui/FAQSection';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/lib/schemas';
import { products } from '@/data/products';
import { FAQ } from '@/types';

export const metadata: Metadata = {
  title: 'Padel Raket Fiyatları 2026 – Karşılaştırma Tablosu',
  description:
    'En güncel padel raket fiyatlarını karşılaştırın. Wilson, Adidas, Nox, Head ve daha fazlası. En uygun fiyatı bulun.',
  alternates: {
    canonical: 'https://padelraketi.com/padel-raket-fiyatlari',
  },
};

const faqs: FAQ[] = [
  {
    question: 'Padel raketi fiyatları ne kadar?',
    answer:
      'Başlangıç raketleri 800-2.000 TL, orta seviye 2.000-3.500 TL, profesyonel modeller 3.500-6.000 TL arasında değişir.',
  },
  {
    question: 'En ucuz iyi padel raketi hangisidir?',
    answer:
      'Fiyat-performans en iyi dengede sunan modeller arasında Nox ML10 Pro Cup (2.150 TL) ve Head Zephyr (1.490 TL) öne çıkmaktadır.',
  },
  {
    question: 'Padel raketi fiyatları yıl içinde değişir mi?',
    answer:
      'Evet, özellikle yeni model çıkışlarında eski modellerin fiyatları düşebilir. Sezon sonu indirimleri de faydalı bir fırsat olabilir.',
  },
  {
    question: 'Online alışveriş mi mağazadan alım mı daha ucuz?',
    answer:
      'Genellikle online platformlar, düşük genel gider maliyetleri nedeniyle daha uygun fiyatlar sunar. Ancak mağazalarda ürünü test etme imkanı bulunabilir.',
  },
  {
    question: 'İkinci el padel raketi almak mantıklı mı?',
    answer:
      'İyi durumda bir ikinci el raket, başlangıç seviyesi için makul bir seçenek olabilir. Ancak fiziksel hasar veya çatlak kontrolü mutlaka yapılmalıdır.',
  },
];

export default function PadelRaketFiyatlariPage() {
  return (
    <>
      <JsonLd schema={faqSchema(faqs)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Padel Raket Fiyatları', url: '/padel-raket-fiyatlari' },
      ])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Padel Raket Fiyatları' },
          ]}
        />

        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Padel Raket Fiyatları 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Güncel padel raketi fiyat karşılaştırması. En uygun fiyatı bulun, en akıllı seçimi yapın.
          </p>
          <p className="text-sm text-gray-400 mt-2">Son güncelleme: Nisan 2026</p>
        </div>

        {/* Price Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { tier: 'Giriş Seviyesi', range: '800 – 2.000 ₺', icon: '🌱', color: 'blue', features: ['Fiberglas yüzey', 'Yuvarlak şekil', 'Başlangıç için ideal', 'Geniş tatlı nokta'] },
            { tier: 'Orta Segment', range: '2.000 – 3.500 ₺', icon: '⚡', color: 'green', features: ['Hibrit veya karbon', 'Damla/yuvarlak şekil', 'Orta-ileri oyuncular', 'İyi güç-kontrol dengesi'] },
            { tier: 'Premium', range: '3.500 ₺+', icon: '💎', color: 'purple', features: ['Karbon fiber (12K+)', 'Elmas şekil', 'Profesyonel seviye', 'Maksimum performans'] },
          ].map((tier) => (
            <div key={tier.tier} className={`rounded-2xl p-6 border-2 ${tier.color === 'green' ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}>
              <div className="text-3xl mb-3">{tier.icon}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{tier.tier}</h2>
              <p className="text-2xl font-extrabold text-green-600 mb-4">{tier.range}</p>
              <ul className="space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full Price Comparison Table */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-12">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Tam Fiyat Karşılaştırması</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Raket</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Marka</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Seviye</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Malzeme</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Puan</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Fiyat</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <Link href={`/padel-raketleri/${product.slug}`} className="font-semibold text-gray-900 hover:text-green-600">
                        {product.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.brand}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        product.level === 'Profesyonel' ? 'bg-purple-100 text-purple-700' :
                        product.level === 'İleri' ? 'bg-orange-100 text-orange-700' :
                        product.level === 'Orta' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {product.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.material}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-bold">{product.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div>
                        <span className="font-extrabold text-gray-900">{product.price.toLocaleString('tr-TR')} ₺</span>
                        {product.oldPrice && (
                          <span className="block text-xs text-gray-400 line-through">{product.oldPrice.toLocaleString('tr-TR')} ₺</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={product.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                      >
                        En İyi Fiyat
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SEO Content */}
        <div className="prose prose-lg prose-gray max-w-none mb-12">
          <h2>Padel Raketi Fiyatlarını Etkileyen Faktörler</h2>
          <p>
            Padel raketi fiyatları; malzeme kalitesi, marka prestiji, teknoloji ve üretim
            kalitesine göre büyük farklılıklar gösterir. Daha pahalı raketler her zaman daha
            iyi anlamına gelmez; seviyenize uygun bir raket her zaman daha pahalı olandan
            daha iyi performans sağlayabilir.
          </p>

          <h3>Malzeme ve Fiyat İlişkisi</h3>
          <p>
            Fiberglas yüzeyli raketler genellikle 800-2.500 TL arasında fiyatlanırken, karbon
            fiber modeller 2.000 TL'nin üzerinde başlar. Premium 12K karbon seçenekler ise
            3.500 TL ve üzeri segmenti oluşturur.
          </p>

          <h3>Marka Etkisi</h3>
          <p>
            Adidas ve Wilson gibi köklü markalar, marka prestiji nedeniyle benzer özelliklerdeki
            daha az bilinen markalara göre daha yüksek fiyatlar talep edebilir. Ancak bu markalar
            genellikle daha güçlü garanti ve servis ağına sahiptir.
          </p>
        </div>

        <FAQSection faqs={faqs} title="Padel Raket Fiyatları Hakkında SSS" />

        {/* Internal Link Cluster */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <Link href="/en-iyi-padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🏆 En İyi Padel Raketleri</h3>
            <p className="text-sm text-gray-500">2026 uzman seçimi ve sıralama</p>
          </Link>
          <Link href="/padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🎾 Tüm Raketler</h3>
            <p className="text-sm text-gray-500">Tam model kataloğu</p>
          </Link>
          <Link href="/ucuz-padel-raket" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">💸 Ucuz Padel Raket</h3>
            <p className="text-sm text-gray-500">Bütçe dostu seçenekler</p>
          </Link>
          <Link href="/baslangic-icin-padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🌱 Başlangıç Raketleri</h3>
            <p className="text-sm text-gray-500">Yeni başlayanlar için öneriler</p>
          </Link>
          <Link href="/padel-raket-karsilastirma" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">⚖️ Model Karşılaştırması</h3>
            <p className="text-sm text-gray-500">Raketleri yan yana kıyaslayın</p>
          </Link>
          <Link href="/padel-raket-markalari" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🎯 Markalar Rehberi</h3>
            <p className="text-sm text-gray-500">Wilson, Adidas, Nox karşılaştırması</p>
          </Link>
        </div>
      </div>
    </>
  );
}
