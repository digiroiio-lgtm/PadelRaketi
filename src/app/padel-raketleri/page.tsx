import type { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import FAQSection from '@/components/ui/FAQSection';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schemas';
import { products } from '@/data/products';
import { FAQ } from '@/types';

export const metadata: Metadata = {
  title: 'Padel Raketleri 2026 – Tüm Modeller, Fiyatlar ve İncelemeler',
  description:
    'Türkiye\'nin en kapsamlı padel raket kataloğu. Wilson, Adidas, Nox, Head, Bullpadel ve Babolat – başlangıçtan profesyonele tüm seviyeler için raketler, uzman yorumları ve güncel fiyatlar.',
  alternates: {
    canonical: 'https://padelraketi.com/padel-raketleri',
  },
};

const faqs: FAQ[] = [
  {
    question: 'Padel raketi nasıl seçilir?',
    answer:
      'Padel raketi seçerken oyun seviyenizi, bütçenizi ve oyun stilinizi göz önünde bulundurmanız gerekir. Başlangıç oyuncuları için yuvarlak şekilli, fiberglas yüzeyli raketler önerilirken, ileri seviye oyuncular için karbon fiber ve elmas şekilli modeller daha uygundur.',
  },
  {
    question: 'Padel raketi ağırlığı ne kadar olmalı?',
    answer:
      'Başlangıç için 355-365 gram arası ideal ağırlıktır. Orta seviye oyuncular 360-370 gram tercih ederken, ileri ve profesyonel oyuncular 365-375 gram arasında raketlere yönelebilir. Çok ağır raketler sakatlık riskini artırır.',
  },
  {
    question: 'Yuvarlak ve elmas şekilli raket arasındaki fark nedir?',
    answer:
      'Yuvarlak şekilli raketlerde tatlı nokta merkezde ve geniştir; bu sayede daha affedici ve kontrol odaklıdır. Elmas şekilli raketlerde tatlı nokta üst bölgededir; güç ve spin kapasitesi daha yüksek olup ileri seviye oyuncular içindir.',
  },
  {
    question: 'Karbon fiber mi yoksa fiberglas raket mi tercih edilmeli?',
    answer:
      'Fiberglas raketler daha esnek ve affedicidir; kontrol odaklı oyuncular ve başlangıç seviyeleri için uygundur. Karbon fiber raketler daha sert ve güçlüdür; spin kapasitesi yüksek olup ileri seviye oyuncular için tasarlanmıştır.',
  },
  {
    question: 'Padel raketinin ömrü ne kadardır?',
    answer:
      'Düzenli bakım yapıldığında orta seviye bir padel raketi 2-3 yıl, profesyonel modeller ise 1-2 yıl kullanılabilir. Grip değişimi ve düzenli temizlik raket ömrünü önemli ölçüde uzatır.',
  },
  {
    question: 'Hangi padel markaları en kalitelidir?',
    answer:
      'Adidas, Wilson ve Nox dünya genelinde en prestijli markalar arasındadır. Head ve Bullpadel de yüksek kaliteli modeller sunar. Babolat ise fiyat-performans dengesinde öne çıkar. Her markanın farklı güçlü yanları bulunmaktadır.',
  },
];

export default function PadelRaketleriPage() {
  const breadcrumbs = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Padel Raketleri', url: '/padel-raketleri' },
  ];

  return (
    <>
      <JsonLd schema={breadcrumbSchema(breadcrumbs)} />
      <JsonLd schema={faqSchema(faqs)} />

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
            Padel Raketleri 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Türkiye&apos;nin en kapsamlı padel raket kataloğu. Wilson, Adidas, Nox, Head, Bullpadel ve
            Babolat — uzman değerlendirmeleri ve gerçek kullanıcı yorumlarıyla doğru raket seçimini yapın.
          </p>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <span>✍️ Ahmet Yılmaz – Sertifikalı Padel Antrenörü</span>
            <span>📅 Güncelleme: Nisan 2026</span>
          </div>
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

        {/* Long-form SEO Content */}
        <div className="prose prose-lg prose-gray max-w-none mb-12">
          <h2>Padel Raketi Seçim Rehberi 2026</h2>
          <p>
            Doğru padel raketini seçmek, oyununuzu bir üst seviyeye taşıyabilir. Yüzlerce model
            arasından en uygun olanı bulmak için önce seviyenizi, ardından oyun stilinizi
            belirlemeniz gerekir. Piyasada başlangıçtan profesyonel seviyeye kadar geniş bir yelpazeye
            hitap eden modeller mevcuttur.
          </p>

          <h3>Seviyeye Göre Padel Raketi</h3>
          <p>
            <strong>Başlangıç oyuncuları</strong> için yuvarlak şekilli ve fiberglas yüzeyli raketler
            tavsiye edilir. Bu raketler geniş tatlı noktaları sayesinde daha affedicidir ve teknik
            öğrenmeyi kolaylaştırır. Head Zephyr bu kategorinin en gözde modelidir.
          </p>
          <p>
            <strong>Orta seviye oyuncular</strong> artık temel teknikleri öğrenmiş ve oyunlarını
            geliştirmek isteyen oyunculardır. Hibrit malzemeli, damla veya yuvarlak şekilli raketler
            bu aşama için idealdir. Nox ML10 Pro Cup ve Babolat Air Viper bu kategorinin popüler seçenekleridir.
          </p>
          <p>
            <strong>İleri ve profesyonel oyuncular</strong> için karbon fiber ve elmas şekilli raketler
            en uygun seçenektir. Wilson Blade V3, Adidas Metalbone 3.3 ve Bullpadel Vertex 04 bu
            kategorinin lider modelleridir.
          </p>

          <h3>Raket Şekli ve Özellikleri</h3>
          <p>
            Padel raketleri üç ana şekil kategorisinde üretilir: <strong>yuvarlak</strong>,
            <strong> damla</strong> ve <strong>elmas</strong>. Yuvarlak raketler kontrol ve afvedicilik
            sunarken, elmas raketler güç ve spin kapasitesini maksimize eder. Damla şekilli raketler
            ise bu ikisi arasında denge kurar.
          </p>

          <h3>Malzeme Seçimi</h3>
          <p>
            Raket yüzeyi <strong>fiberglas</strong> veya <strong>karbon fiber</strong> olabilir.
            Fiberglas esnekliği sayesinde daha iyi kontrol sağlarken, karbon fiber daha sert yapısıyla
            daha yüksek güç ve spin üretir. Yüksek kaliteli 12K karbon fiber, profesyonel raketlerde
            kullanılır ve en iyi performansı sunar.
          </p>

          <h3>Ağırlık ve Denge Noktası</h3>
          <p>
            Raket ağırlığı 340-390 gram arasında değişir. Denge noktası ise tutacaktan itibaren
            ölçülür: düşük denge (240-255mm) kontrol odaklı, orta denge (255-270mm) karma, yüksek
            denge (270mm+) ise güç odaklı oyun tarzına hitap eder.
          </p>

          <h3>Popüler Markalar</h3>
          <p>
            Türkiye padel pazarında en çok tercih edilen markalar Wilson, Adidas, Nox, Head,
            Bullpadel ve Babolat&apos;tır. Her markanın farklı teknoloji altyapısı ve ürün gamı
            bulunmaktadır.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-12">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Tüm Raketler – Hızlı Karşılaştırma</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Raket</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Seviye</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Şekil</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Malzeme</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Fiyat</th>
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
                    <td className="px-6 py-4 text-sm text-gray-600">{product.shape}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.material}</td>
                    <td className="px-6 py-4 text-right font-extrabold text-gray-900">
                      {product.price.toLocaleString('tr-TR')} ₺
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <FAQSection faqs={faqs} title="Padel Raketleri Hakkında Sık Sorulan Sorular" />

        {/* Internal Link Cluster */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <Link href="/en-iyi-padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🏆 En İyi Padel Raketleri</h3>
            <p className="text-sm text-gray-500">2026 uzman seçimi ve sıralama</p>
          </Link>
          <Link href="/padel-raket-fiyatlari" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">💰 Fiyat Karşılaştırması</h3>
            <p className="text-sm text-gray-500">En uygun fiyatı bulun</p>
          </Link>
          <Link href="/padel-raket-karsilastirma" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">⚖️ Model Karşılaştırması</h3>
            <p className="text-sm text-gray-500">Raketleri yan yana kıyaslayın</p>
          </Link>
          <Link href="/baslangic-icin-padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🌱 Başlangıç Raketleri</h3>
            <p className="text-sm text-gray-500">Yeni başlayanlar için öneriler</p>
          </Link>
          <Link href="/padel-raket-markalari" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🎯 Markalar Rehberi</h3>
            <p className="text-sm text-gray-500">Wilson, Adidas, Nox ve daha fazlası</p>
          </Link>
          <Link href="/padel-raket-rehberi" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">📖 Alım Rehberi</h3>
            <p className="text-sm text-gray-500">Doğru raket nasıl seçilir?</p>
          </Link>
        </div>
      </div>
    </>
  );
}
