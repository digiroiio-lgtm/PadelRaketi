import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/ui/FAQSection';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/lib/schemas';
import { FAQ } from '@/types';

export const metadata: Metadata = {
  title: 'Padel Raket Markaları 2026 – Wilson, Adidas, Nox, Head, Bullpadel, Babolat',
  description:
    'Tüm padel raket markalarını karşılaştırın. Wilson, Adidas, Nox, Head, Bullpadel ve Babolat hakkında kapsamlı marka rehberi, güçlü yanlar ve hangi oyuncu tipine uyduğu.',
  alternates: {
    canonical: 'https://padelraketi.com/padel-raket-markalari',
  },
};

const faqs: FAQ[] = [
  {
    question: 'En iyi padel raket markası hangisidir?',
    answer:
      'Tek bir cevap yoktur; en iyi marka, oyun stilinize ve seviyenize bağlıdır. Profesyoneller için Adidas ve Wilson öne çıkarken, orta seviye için Nox ve Babolat mükemmel fiyat-performans sunar. Başlangıç için Head ideal bir marka seçimidir.',
  },
  {
    question: 'Wilson ve Adidas padel markası arasındaki fark nedir?',
    answer:
      'Wilson dengeli güç-kontrol performansıyla bilinirken, Adidas özellikle Metalbone serisinde daha agresif ve güç odaklı raketler üretir. Adidas, dünya sıralamasındaki profesyoneller arasında daha yaygın kullanılmaktadır.',
  },
  {
    question: 'Nox padel markası neden bu kadar popüler?',
    answer:
      'Nox, Miguel Lamperti gibi profesyonel oyuncularla geliştirilen raketleriyle bilinir. Özellikle orta seviye segmentte mükemmel fiyat-performans oranı sunar. Geniş ürün gamı ve uygun fiyat noktaları Nox\'u özellikle Türkiye\'de çok popüler yapar.',
  },
  {
    question: 'Head padel markaları hakkında ne söylenebilir?',
    answer:
      'Head, teniste olduğu gibi padelde de kaliteli bir marka olarak öne çıkar. Özellikle başlangıç ve orta seviye segmentinde çok başarılı ürünler sunar. Head Zephyr, başlangıç kategorisinin en çok tercih edilen modelidir.',
  },
  {
    question: 'Bullpadel markası kimlere uygundur?',
    answer:
      'Bullpadel, özellikle saldırgan oyun stiline sahip ileri seviye oyuncular için mükemmeldir. Vertex serisi güç odaklı oyuncuların gözdesidir. Ayrıca birçok WPT profesyoneli Bullpadel kullanmaktadır.',
  },
  {
    question: 'Babolat padel raketleri kaliteli midir?',
    answer:
      'Evet, Babolat tenisteki kadar tanınmasa da padelde giderek güçlü bir konuma gelmektedir. Özellikle orta seviye ve başlangıç-orta arası segmentte çok iyi fiyat-performans oranı sunar. Air Viper serisi özellikle popülerdir.',
  },
];

const brands = [
  {
    name: 'Wilson',
    logo: 'W',
    color: 'red',
    tagline: 'Denge ve Güvenilirlik',
    description:
      'Wilson, dünya padel sahalarının en tanınan markalarından biridir. Blade serisi, güç ve kontrol dengesini mükemmel biçimde buluşturur. Juan Lebron ve Ale Galan gibi WPT oyuncuları Wilson raketleri tercih etmektedir.',
    strengths: ['Mükemmel güç-kontrol dengesi', 'Yüksek dayanıklılık', 'Geniş ürün yelpazesi', 'WPT oyuncu desteği'],
    ideal: 'İleri ve profesyonel seviye oyuncular',
    priceRange: '2.500 – 4.500 ₺',
    topModel: 'Wilson Blade V3',
    topModelSlug: 'wilson-blade-v3-padel-raketi',
  },
  {
    name: 'Adidas',
    logo: 'A',
    color: 'black',
    tagline: 'Maksimum Güç ve Spin',
    description:
      'Adidas Metalbone serisi, dünya sıralamasındaki profesyonellerin favorisidir. 12K karbon fiber teknolojisi sayesinde rakipsiz güç ve spin kapasitesi sunar. Fernando Belasteguin gibi efsanevi oyuncular Adidas tercih eder.',
    strengths: ['12K karbon fiber teknolojisi', 'Maksimum spin kapasitesi', 'Üst düzey marka prestiji', 'WPT turnuva dominasyonu'],
    ideal: 'Saldırgan oyun stiline sahip profesyoneller',
    priceRange: '3.000 – 5.500 ₺',
    topModel: 'Adidas Metalbone 3.3',
    topModelSlug: 'adidas-metalbone-3-3-padel-raketi',
  },
  {
    name: 'Nox',
    logo: 'N',
    color: 'blue',
    tagline: 'Fiyat-Performans Lideri',
    description:
      'İspanyol marka Nox, Miguel Lamperti imzalı ML10 serisiyle dünyada tanındı. Özellikle orta seviye segmentte sunduğu olağanüstü fiyat-performans oranıyla Türkiye\'de çok büyük bir kitleye ulaşmıştır.',
    strengths: ['Üstün fiyat-performans', 'Geniş tatlı nokta', 'Uygun fiyat aralığı', 'Her oyun stiline uyum'],
    ideal: 'Orta seviye oyuncular, fiyat-performans arayanlar',
    priceRange: '1.800 – 3.500 ₺',
    topModel: 'Nox ML10 Pro Cup',
    topModelSlug: 'nox-ml10-padel-raketi',
  },
  {
    name: 'Head',
    logo: 'H',
    color: 'orange',
    tagline: 'Başlangıç Dostanesi',
    description:
      'Head, tenisteki başarısını padele de taşımış güvenilir bir markadır. Özellikle başlangıç ve orta seviye oyunculara yönelik ürettiği raketlerle Türkiye\'de de geniş bir kitleye ulaşmaktadır.',
    strengths: ['Başlangıç için ideal modeller', 'Çok hafif seçenekler (355g)', 'Geniş dağıtım ağı', 'Uygun fiyat-kalite dengesi'],
    ideal: 'Başlangıç ve orta seviye oyuncular',
    priceRange: '1.200 – 3.000 ₺',
    topModel: 'Head Zephyr',
    topModelSlug: 'head-zephyr-padel-raketi',
  },
  {
    name: 'Bullpadel',
    logo: 'B',
    color: 'green',
    tagline: 'Saldırgan Oyun İçin',
    description:
      'İspanyol marka Bullpadel, agresif ve saldırgan oyun stiline odaklı raketleriyle bilinir. Vertex serisi, güç ve spin kapasitesini ön plana çıkaran profesyonel modellerdir.',
    strengths: ['Yüksek güç kapasitesi', 'Premium karbon teknolojisi', 'WPT turnuva varlığı', 'Saldırgan oyun için ideal'],
    ideal: 'Güç odaklı ileri ve profesyonel oyuncular',
    priceRange: '2.200 – 4.000 ₺',
    topModel: 'Bullpadel Vertex 04',
    topModelSlug: 'bullpadel-vertex-04-padel-raketi',
  },
  {
    name: 'Babolat',
    logo: 'Ba',
    color: 'purple',
    tagline: 'Denge ve Konfor',
    description:
      'Babolat, tenis dünyasındaki köklü deneyimini padele aktararak hızla büyüyen bir markadır. Air Viper serisi, güç ve konfor dengesini mükemmel biçimde sunar.',
    strengths: ['Tenis kökenli kalite güvencesi', 'İyi güç-kontrol dengesi', 'Konforlu tutamak', 'Uygun fiyat-performans'],
    ideal: 'Orta seviye ve kontrol odaklı oyuncular',
    priceRange: '1.600 – 3.200 ₺',
    topModel: 'Babolat Air Viper',
    topModelSlug: 'babolat-air-viper-padel-raketi',
  },
];

export default function PadelRaketMarkalariPage() {
  return (
    <>
      <JsonLd schema={faqSchema(faqs)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Padel Raket Markaları', url: '/padel-raket-markalari' },
      ])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Padel Raket Markaları' },
          ]}
        />

        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Padel Raket Markaları Rehberi 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Wilson, Adidas, Nox, Head, Bullpadel ve Babolat — piyasanın önde gelen padel
            markalarını kapsamlı şekilde inceleyin. Hangi marka size uygun?
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>✍️ Selin Kaya – Spor Gazetecisi & Padel Oyuncusu</span>
            <span>📅 Güncelleme: Nisan 2026</span>
          </div>
        </div>

        {/* Brand Quick Jump */}
        <div className="flex flex-wrap gap-2 mb-10">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={`#${brand.name.toLowerCase()}`}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-green-500 hover:text-green-600 transition-colors"
            >
              {brand.name}
            </a>
          ))}
        </div>

        {/* Brand Cards */}
        <div className="space-y-10 mb-12">
          {brands.map((brand) => (
            <div key={brand.name} id={brand.name.toLowerCase()} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden scroll-mt-24">
              <div className="grid grid-cols-1 md:grid-cols-4">
                {/* Brand Identity */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col items-center justify-center p-8">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-3">
                    {brand.logo}
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-900">{brand.name}</h2>
                  <p className="text-sm text-green-700 font-medium mt-1 text-center">{brand.tagline}</p>
                  <p className="text-xs text-gray-500 mt-3 font-semibold">{brand.priceRange}</p>
                </div>

                {/* Brand Details */}
                <div className="col-span-3 p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{brand.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-2">Güçlü Yanları</h3>
                      <ul className="space-y-1">
                        {brand.strengths.map((s) => (
                          <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-2">İdeal Oyuncu Profili</h3>
                      <p className="text-sm text-gray-600 bg-green-50 rounded-lg p-3">{brand.ideal}</p>
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-1">Önerilen Model</p>
                        <Link
                          href={`/padel-raketleri/${brand.topModelSlug}`}
                          className="text-sm font-bold text-green-700 hover:text-green-800"
                        >
                          {brand.topModel} →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prose content */}
        <div className="prose prose-lg prose-gray max-w-none mb-12">
          <h2>Marka Seçimi Nasıl Yapılmalı?</h2>
          <p>
            Padel raket markası seçerken öncelikle oyun seviyenizi ve stilinizi göz önünde
            bulundurmanız gerekir. Her markanın belirli alanlarda öne çıkan güçlü yanları
            bulunmaktadır.
          </p>

          <h3>Başlangıç için marka önerileri</h3>
          <p>
            Padele yeni başlıyorsanız, affedici ve uygun fiyatlı raket üreten markaları tercih
            etmelisiniz. <strong>Head</strong> ve <strong>Babolat</strong>, bu kategoride en iyi
            seçenekleri sunar. Head Zephyr özellikle başlangıç oyuncuları için mükemmel bir ilk
            raket olabilir.
          </p>

          <h3>Orta seviye için marka önerileri</h3>
          <p>
            Temel teknikleri öğrendiniz ve oyununuzu geliştirmek istiyorsunuz. <strong>Nox</strong>
            ve <strong>Babolat</strong>, bu seviyede olağanüstü fiyat-performans sunar. Nox ML10 Pro
            Cup, orta seviye oyuncular için yılın en çok önerilen modeli konumundadır.
          </p>

          <h3>İleri ve profesyonel seviye için marka önerileri</h3>
          <p>
            Maksimum performans istiyorsanız <strong>Wilson</strong>, <strong>Adidas</strong> ve
            <strong> Bullpadel</strong> en doğru tercihlerdir. Adidas Metalbone, WPT sahalarında
            dominant olduğu gibi Türkiye&apos;deki üst seviye oyuncular arasında da en çok tercih
            edilen modeldir.
          </p>
        </div>

        <FAQSection faqs={faqs} title="Padel Raket Markaları Hakkında SSS" />

        {/* Internal Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <Link href="/en-iyi-padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🏆 En İyi Padel Raketleri</h3>
            <p className="text-sm text-gray-500">2026 uzman sıralaması</p>
          </Link>
          <Link href="/padel-raket-fiyatlari" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">💰 Fiyat Karşılaştırması</h3>
            <p className="text-sm text-gray-500">En uygun fiyatı bulun</p>
          </Link>
          <Link href="/padel-raket-karsilastirma" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">⚖️ Model Karşılaştırması</h3>
            <p className="text-sm text-gray-500">Raketleri yan yana kıyaslayın</p>
          </Link>
          <Link href="/padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🎾 Tüm Raketler</h3>
            <p className="text-sm text-gray-500">Tam model kataloğu</p>
          </Link>
          <Link href="/baslangic-icin-padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🌱 Başlangıç Raketleri</h3>
            <p className="text-sm text-gray-500">Yeni başlayanlar için öneriler</p>
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
