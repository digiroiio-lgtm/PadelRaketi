import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/ui/FAQSection';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/lib/schemas';
import { products } from '@/data/products';
import { FAQ } from '@/types';

export const metadata: Metadata = {
  title: 'En İyi Padel Raketleri 2026 – Uzman Seçimi ve Karşılaştırma',
  description:
    'Türkiye\'nin en kapsamlı padel raket rehberi. 2026 yılının en iyi padel raketleri, uzman değerlendirmeleri, artı-eksileri ve satın alma önerileri.',
  alternates: {
    canonical: 'https://padelraketi.com/en-iyi-padel-raketleri',
  },
};

const faqs: FAQ[] = [
  {
    question: '2026\'nın en iyi padel raketi hangisidir?',
    answer:
      'Adidas Metalbone 3.3, profesyonel oyuncular arasında en çok tercih edilen raket olma özelliğini korumaktadır. Orta seviye için Nox ML10 Pro Cup, başlangıç için Head Zephyr öne çıkmaktadır.',
  },
  {
    question: 'En iyi padel raketi markası hangisidir?',
    answer:
      'Wilson, Adidas ve Nox üçlüsü dünya genelinde en prestijli padel raket markaları olarak kabul görür. Her birinin farklı güçlü yanları bulunur.',
  },
  {
    question: 'En iyi padel raketi ne kadar tutar?',
    answer:
      'En iyi padel raketleri 2.500-5.000 TL arasında değişir. Bununla birlikte, 1.500-2.500 TL aralığında da çok kaliteli modeller mevcuttur.',
  },
  {
    question: 'Hangi padel raketi en çok satıyor?',
    answer:
      'Wilson Blade V3 ve Nox ML10 Pro Cup, hem dünyada hem Türkiye\'de en çok satan modeller arasındadır. Fiyat-performans dengeleri bu popülaritelerinin ana sebebidir.',
  },
  {
    question: 'Ünlü oyuncular hangi raketi kullanıyor?',
    answer:
      'Fernando Belasteguin ve Ale Galan Adidas Metalbone\'u, Juan Lebron Wilson\'ı tercih eder. Ancak bu raketler özel oyuncu versiyonları olup piyasadakilerden farklı olabilir.',
  },
  {
    question: 'Karbon fiber raket başlangıç için uygun mu?',
    answer:
      'Genellikle uygun değildir. Karbon raketler daha sert ve affetmez olduğundan başlangıçta hataları daha fazla hissettirirler. Fiberglas başlamak daha tavsiye edilir.',
  },
];

export default function EnIyiPadelRaketleriPage() {
  const topProducts = products.slice(0, 5);

  return (
    <>
      <JsonLd schema={faqSchema(faqs)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'En İyi Padel Raketleri', url: '/en-iyi-padel-raketleri' },
      ])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'En İyi Padel Raketleri' },
          ]}
        />

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            En İyi Padel Raketleri 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            12 yılı aşkın deneyimimiz ve yüzlerce raket incelememizle hazırladığımız bu rehberde
            2026 yılının en iyi padel raketlerini bulacaksınız.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>✍️ Ahmet Yılmaz – Sertifikalı Padel Antrenörü</span>
            <span>📅 Güncelleme: Nisan 2026</span>
          </div>
        </div>

        {/* Quick Summary Box */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold text-green-800 mb-4">⚡ Hızlı Özet</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-1">Genel En İyi</p>
              <p className="font-bold text-gray-900">Adidas Metalbone 3.3</p>
              <p className="text-sm text-gray-600">3.250 ₺</p>
            </div>
            <div>
              <p className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-1">En İyi Değer</p>
              <p className="font-bold text-gray-900">Nox ML10 Pro Cup</p>
              <p className="text-sm text-gray-600">2.150 ₺</p>
            </div>
            <div>
              <p className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-1">Başlangıç İçin</p>
              <p className="font-bold text-gray-900">Head Zephyr</p>
              <p className="text-sm text-gray-600">1.490 ₺</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg prose-gray max-w-none mb-12">
          <h2>Nasıl Seçiyoruz?</h2>
          <p>
            PadelRaketi.com olarak her raketi test ederken standart bir metodoloji uyguluyoruz.
            Sertifikalı antrenörlerimiz her modeli en az 10 saatlik aktif oyunda test ediyor.
            Değerlendirme kriterlerimiz şunlardır:
          </p>
          <ul>
            <li><strong>Güç kapasitesi:</strong> Smash ve drive vuruşlarında enerji transferi</li>
            <li><strong>Kontrol hassasiyeti:</strong> Lob, volé ve savunma oyunundaki hassasiyet</li>
            <li><strong>Spin kapasitesi:</strong> Top rotasyonu yaratma kabiliyeti</li>
            <li><strong>Konfor:</strong> Uzun oyun sürelerinde yük ve titreşim absorbsiyonu</li>
            <li><strong>Dayanıklılık:</strong> Uzun dönem kullanım performansı</li>
            <li><strong>Fiyat/Değer:</strong> Fiyata oranla sağlanan performans</li>
          </ul>
        </div>

        {/* Product Rankings */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">2026 En İyi 5 Padel Raketi</h2>
        <div className="space-y-6 mb-12">
          {topProducts.map((product, index) => {
            const discountPercent = product.oldPrice
              ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
              : null;

            return (
              <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                  {/* Rank + Image */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col items-center justify-center p-6">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">
                      {index + 1}
                    </div>
                    <div className="w-20 h-20 bg-gradient-to-br from-green-200 to-green-400 rounded-xl flex items-center justify-center">
                      <span className="text-green-900 font-bold text-2xl">{product.brand[0]}</span>
                    </div>
                    {product.badge && (
                      <span className="mt-3 text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold">{product.badge}</span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="col-span-2 p-6">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">{product.brand}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className={`w-4 h-4 ${star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm font-bold">{product.rating}</span>
                      <span className="text-sm text-gray-400">({product.reviewCount})</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.weight}</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.level}</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.material}</span>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="p-6 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-100">
                    <div className="text-3xl font-extrabold text-gray-900 mb-1">
                      {product.price.toLocaleString('tr-TR')} ₺
                    </div>
                    {product.oldPrice && (
                      <div className="flex items-center gap-1 mb-4">
                        <span className="text-sm text-gray-400 line-through">{product.oldPrice.toLocaleString('tr-TR')} ₺</span>
                        {discountPercent && <span className="text-xs text-red-500 font-bold">-%{discountPercent}</span>}
                      </div>
                    )}
                    <Link
                      href={`/padel-raketleri/${product.slug}`}
                      className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-xl transition-colors text-sm mb-2"
                    >
                      Şimdi İncele
                    </Link>
                    <a
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="w-full flex items-center justify-center border border-green-600 text-green-700 hover:bg-green-50 font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
                    >
                      En Uygun Fiyat
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Long Form SEO Content */}
        <div className="prose prose-lg prose-gray max-w-none mb-12">
          <h2>2026 Padel Raket Trendleri</h2>
          <p>
            2026 yılında padel raket teknolojisinde birkaç önemli trend öne çıkıyor. Karbon fiber
            teknolojisindeki gelişmeler, daha hafif ama daha güçlü raketlerin üretilmesini
            mümkün kılıyor. Özellikle 12K ve 18K karbon seçenekleri giderek daha uygun fiyatlara
            sunulmakta.
          </p>
          <p>
            Ayrıca ergonomi konusunda önemli adımlar atılıyor. Titreşim emme teknolojileri
            geliştirilmiş grip tasarımları ve yeni köpük formülleri, uzun oyun sürelerinde konforu
            artırıyor.
          </p>

          <h2>Seviyeye Göre En İyi Seçimler</h2>

          <h3>Başlangıç Oyuncuları İçin</h3>
          <p>
            Padele yeni başlıyorsanız en kritik özellik affedicilik. Geniş tatlı noktalı, yuvarlak
            şekilli ve fiberglas yüzeyli raketler başlangıç için idealdir. Head Zephyr bu kategorinin
            şüphesiz lideridir.
          </p>

          <h3>Orta Seviye Oyuncular İçin</h3>
          <p>
            Artık temel teknikleri öğrendiniz ve oyununuzu geliştirmek istiyorsunuz. Bu aşamada
            damla şekilli, hibrit malzemeli raketlere geçiş yapabilirsiniz. Nox ML10 Pro Cup
            bu kategori için mükemmel bir seçenek.
          </p>

          <h3>İleri ve Profesyonel Oyuncular İçin</h3>
          <p>
            Maksimum performans istiyorsanız karbon fiber ve elmas şekilli raketlere yönelmelisiniz.
            Wilson Blade V3 ve Adidas Metalbone 3.3 bu kategorinin en çok tercih edilen modelleri.
          </p>
        </div>

        <FAQSection faqs={faqs} title="En İyi Padel Raketleri – Sık Sorulan Sorular" />

        {/* Internal Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Link href="/padel-raket-fiyatlari" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">💰 Fiyat Karşılaştırması</h3>
            <p className="text-sm text-gray-500">En ucuz satıcıyı bulun</p>
          </Link>
          <Link href="/baslangic-icin-padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🌱 Başlangıç Raketleri</h3>
            <p className="text-sm text-gray-500">Yeni başlayanlar için öneriler</p>
          </Link>
        </div>
      </div>
    </>
  );
}
