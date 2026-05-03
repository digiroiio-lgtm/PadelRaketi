import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/ui/FAQSection';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schemas';
import { getRefurbishedProducts } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import { FAQ } from '@/types';

export const metadata: Metadata = {
  title: 'Yenilenmiş Padel Raketleri – Uygun Fiyatlı Performans Seçenekleri 2026',
  description:
    "Kontrol edilmiş, test edilmiş ve yenilenmiş padel raketleri. Wilson, Adidas, Nox ve Head – orijinal performansını koruyan yenilenmiş raketlerle büyük tasarruf edin.",
  alternates: {
    canonical: 'https://padelraketi.com/yenilenmis-padel-raketleri',
  },
};

const faqs: FAQ[] = [
  {
    question: 'Yenilenmiş padel raketi nedir?',
    answer:
      'Yenilenmiş padel raketi, daha önce kullanılmış ancak uzman teknisyenler tarafından kapsamlı şekilde kontrol edilmiş, gerekli parçaları yenilenmiş ve performans testinden geçirilmiş bir rakettir. Orijinal performansını büyük ölçüde korurken çok daha uygun fiyata satılır.',
  },
  {
    question: 'Yenilenmiş raketler güvenilir mi?',
    answer:
      'Evet, güvenilir kaynaklardan satın alındığında yenilenmiş raketler mükemmel performans sunar. Her yenilenmiş raket stres testi, grip değişimi ve yüzey kontrolünden geçirilir. Sınıflandırma sistemi (A/B) sizi bilinçli tercih yaparken yönlendirir.',
  },
  {
    question: 'Yenilenmiş raket sınıfları ne anlama gelir?',
    answer:
      'A Sınıfı: Çok az kullanılmış, kozmetik durumu çok iyi, tam performans. B Sınıfı: Görünür kozmetik izler olabilir ancak performansı eksiksizdir. Her iki sınıf da aynı kapsamlı performans testinden geçirilir.',
  },
  {
    question: 'Yenilenmiş raketlerde garanti var mı?',
    answer:
      '6 ay performans garantisi ile satılmaktadır. Bu süre içinde ortaya çıkan yapısal sorunlar ücretsiz olarak giderilir. Kozmetik sorunlar garanti kapsamı dışındadır.',
  },
  {
    question: 'Yenilenmiş raket ne kadar ucuz?',
    answer:
      'Yenilenmiş raketler genellikle orijinal fiyatının %40-60 daha ucuzuna satılır. Örneğin 3.000 ₺ değerindeki bir raketi 1.200-1.800 ₺ arasında temin edebilirsiniz. Bu, üst segment raketlere çok daha az bütçeyle ulaşma imkânı sunar.',
  },
  {
    question: 'Hangi seviyedeki oyuncular için uygundur?',
    answer:
      'Yenilenmiş raketler her seviyeden oyuncu için uygundur. Özellikle bütçesini aşmadan üst sınıf raket denemek isteyen orta ve ileri seviye oyuncular için mükemmel bir seçenektir. Başlangıç oyuncuları da uygun fiyatlı yenilenmiş modelleri tercih edebilir.',
  },
];

export default function YenilenmisRaketlerPage() {
  const refurbishedProducts = getRefurbishedProducts();

  return (
    <>
      <JsonLd schema={breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Padel Raketleri', url: '/padel-raketleri' },
        { name: 'Yenilenmiş Padel Raketleri', url: '/yenilenmis-padel-raketleri' },
      ])} />
      <JsonLd schema={faqSchema(faqs)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Padel Raketleri', href: '/padel-raketleri' },
            { label: 'Yenilenmiş Padel Raketleri' },
          ]}
        />

        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
            <span>♻️</span>
            Yenilenmiş & Test Edilmiş
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Yenilenmiş Padel Raketleri 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Kontrol edilmiş, test edilmiş ve yenilenmiş padel raketleri. Orijinal performansını koruyan
            Wilson, Adidas, Nox ve Head raketlerini %40-60 daha uygun fiyata edinin.
          </p>
        </div>

        {/* Trust Signals Block */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: '🔍',
              title: 'Kontrol Edilmiş Ürün',
              desc: 'Her raket 22 noktalı kapsamlı kalite kontrolünden geçer. Çerçeve bütünlüğü, yüzey durumu, grip ve denge noktası tek tek incelenir.',
            },
            {
              icon: '⚡',
              title: 'Performans Testinden Geçti',
              desc: 'Stres testi, vuruş tepkisi ve titreşim analizi ile her raket orijinal performans standartlarını karşıladığı doğrulanır.',
            },
            {
              icon: '💰',
              title: 'Uygun Fiyat Avantajı',
              desc: 'Orijinal fiyatının %40-60 daha ucuzu. Üst segment markaları bütçe dostu fiyatlarla deneyimleyin. 6 ay performans garantisi dahil.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-teal-900 mb-2">{item.title}</h3>
              <p className="text-sm text-teal-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Grading info */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-10">
          <h2 className="font-bold text-gray-900 mb-3">📊 Sınıflandırma Sistemi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 font-bold rounded-full text-sm flex-shrink-0">A</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">A Sınıfı</p>
                <p className="text-xs text-gray-500">Çok az kullanılmış. Kozmetik durumu çok iyi. Tam performans garantili.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-700 font-bold rounded-full text-sm flex-shrink-0">B</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">B Sınıfı</p>
                <p className="text-xs text-gray-500">Görünür kozmetik izler olabilir. Performans eksiksiz ve test edilmiş.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Marketplace Grid with Filters */}
        <ProductGrid products={refurbishedProducts} />

        {/* SEO Content */}
        <div className="prose prose-lg prose-gray max-w-none mb-12 mt-16">
          <h2>Yenilenmiş Padel Raketi Hakkında Her Şey</h2>
          <p>
            Yenilenmiş (refurbished) padel raketleri, son yıllarda sürdürülebilir tüketim anlayışının
            yaygınlaşmasıyla birlikte giderek daha popüler hale gelmektedir. Bir yenilenmiş raket,
            daha önce kullanılmış ancak uzman teknisyenler tarafından kapsamlı bir denetim ve
            yenileme sürecinden geçirilmiş bir üründür.
          </p>

          <h3>Yenileme Süreci Nasıl İşliyor?</h3>
          <p>
            Her yenilenmiş raket şu adımlardan geçer: İlk olarak raket, yapısal hasar ve
            çerçeve bütünlüğü açısından incelenir. Ardından yüzey (bead) kontrolü yapılır; grip
            her durumda yenilenir. Denge noktası ölçülür ve orijinal spesifikasyonlarla
            karşılaştırılır. Son olarak vuruş testi ile raket performansı onaylanır.
          </p>

          <h3>Kimler İçin İdeal?</h3>
          <p>
            <strong>Bütçe bilinçli oyuncular:</strong> Orijinal fiyatın yarısına üst segment marka
            deneyimi yaşamak isteyenler için mükemmeldir.
          </p>
          <p>
            <strong>Geçiş yapan oyuncular:</strong> Yeni bir seviyeye veya oyun stiline geçmeden
            önce farklı özelliklerde raketleri düşük riskle denemek isteyenler.
          </p>
          <p>
            <strong>Çoklu raket isteyen oyuncular:</strong> Hem antrenman hem de maç için ayrı raket
            kullanmak isteyen oyuncular, ikinci raketle için yenilenmiş modeli tercih edebilir.
          </p>

          <h3>Yenilenmiş vs Sıfır Raket: Fiyat-Değer Karşılaştırması</h3>
          <p>
            Örneğin Wilson Blade V3 sıfır olarak 3.499 ₺ iken, Wilson Blade V2 yenilenmiş
            (benzer performans profili) 1.650 ₺&apos;ye edinilebilir. Bu fark, yeni başlayan bir
            oyuncu için kaliteli bir aksesuar seti veya bir yıllık antrenman ücreti anlamına
            gelebilir.
          </p>
        </div>

        <FAQSection faqs={faqs} title="Yenilenmiş Padel Raketleri Hakkında Sık Sorulan Sorular" />

        {/* Internal Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <Link href="/padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🎾 Tüm Padel Raketleri</h3>
            <p className="text-sm text-gray-500">Sıfır ürün kataloğumuzu inceleyin</p>
          </Link>
          <Link href="/en-iyi-padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🏆 En İyi Padel Raketleri</h3>
            <p className="text-sm text-gray-500">2026 uzman seçimi</p>
          </Link>
          <Link href="/padel-raket-fiyatlari" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">💰 Fiyat Karşılaştırması</h3>
            <p className="text-sm text-gray-500">En uygun fiyatı bulun</p>
          </Link>
          <Link href="/ucuz-padel-raket" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">💸 Ucuz Padel Raketleri</h3>
            <p className="text-sm text-gray-500">Uygun bütçe için öneriler</p>
          </Link>
          <Link href="/baslangic-icin-padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🌱 Başlangıç Raketleri</h3>
            <p className="text-sm text-gray-500">Yeni başlayanlar için</p>
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
