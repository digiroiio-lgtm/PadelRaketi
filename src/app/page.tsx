import type { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import FAQSection from '@/components/ui/FAQSection';
import BlogCard from '@/components/ui/BlogCard';
import JsonLd from '@/components/seo/JsonLd';
import { faqSchema } from '@/lib/schemas';
import { getFeaturedProducts, products } from '@/data/products';
import { blogPosts } from '@/data/blog';
import { FAQ } from '@/types';

export const metadata: Metadata = {
  title: 'En İyi Padel Raketleri 2026 – Uzman Rehberi & Karşılaştırma | PadelRaketi.com',
  description:
    "Türkiye'nin en kapsamlı padel raketi rehberi. 2026'nın en iyi padel raketlerini inceleyin, fiyat karşılaştırın ve doğru raketi seçin.",
  alternates: {
    canonical: 'https://padelraketi.com',
  },
};

const homeFaqs: FAQ[] = [
  {
    question: 'En iyi padel raketi hangisidir?',
    answer:
      'En iyi padel raketi, oyun seviyenize ve stilinize bağlıdır. İleri seviye için Wilson Blade V3 veya Adidas Metalbone 3.3, orta seviye için Nox ML10 Pro Cup, başlangıç için Head Zephyr önerilir.',
  },
  {
    question: 'Padel raketi fiyatları ne kadar?',
    answer:
      "Türkiye'de padel raketi fiyatları 800 TL'den başlayıp 6.000 TL'ye kadar çıkabilir. Başlangıç raketleri 1.000-2.000 TL, orta seviye 2.000-3.500 TL, profesyonel modeller ise 3.500 TL ve üzeri fiyatlarda bulunur.",
  },
  {
    question: 'Hangi padel markası en iyi?',
    answer:
      'Wilson, Adidas, Nox, Head ve Bullpadel en güvenilir markalar arasındadır. Her markanın farklı sevilere hitap eden modelleri mevcuttur. Marka prestijinden çok kendi seviyenize ve bütçenize uygun seçim yapın.',
  },
  {
    question: 'Başlangıç için hangi padel raketi almalıyım?',
    answer:
      'Başlangıç için yuvarlak şekilli, orta veya düşük dengeli ve fiberglas yüzeyli bir raket önerilir. Head Zephyr ve Babolat Air Viper bu kategoride popüler seçeneklerdir. Bütçenizi 1.000-2.000 TL arasında tutmanız mantıklıdır.',
  },
  {
    question: 'Padel raketini nereden satın alabilirim?',
    answer:
      "Padel raketlerini Amazon Türkiye, Decathlon, spor mağazaları ve online spor perakendecilerinden satın alabilirsiniz. Sitemizdeki linkler üzerinden en uygun fiyatları karşılaştırabilirsiniz.",
  },
  {
    question: 'Padel ile tenis raketi aynı mı?',
    answer:
      'Hayır, padel ve tenis raketleri birbirinden çok farklıdır. Padel raketleri daha kısa, daha ağır ve deliklidir. Tenis raketleriyle padel oynamak mümkün değildir.',
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <JsonLd schema={faqSchema(homeFaqs)} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
              2026 Güncel Rehber
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              En İyi Padel Raketleri
              <span className="block text-green-200">2026 Rehberi</span>
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-8 leading-relaxed">
              Uzman analizleri, gerçek kullanıcı deneyimleri ve fiyat karşılaştırmalarıyla
              seviyenize en uygun padel raketini bulun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/en-iyi-padel-raketleri"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-700 hover:bg-green-50 font-bold py-3.5 px-8 rounded-xl transition-colors shadow-lg"
              >
                En İyi Raketleri Gör
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/padel-raket-fiyatlari"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold py-3.5 px-8 rounded-xl transition-colors"
              >
                Fiyatları Karşılaştır
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '⭐', title: '500+ İnceleme', desc: 'Doğrulanmış kullanıcı yorumları' },
              { icon: '🏆', title: 'Uzman Analizi', desc: 'Sertifikalı antrenörler tarafından' },
              { icon: '🔄', title: 'Güncel Fiyatlar', desc: 'Sürekli güncellenen karşılaştırma' },
              { icon: '✅', title: 'Güvenilir Rehber', desc: '12+ yıllık deneyim' },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">En Çok Satanlar</h2>
            <p className="text-gray-600 mt-1">2026 yılının en popüler padel raketleri</p>
          </div>
          <Link
            href="/padel-raketleri"
            className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1"
          >
            Tümünü Gör
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} rank={index + 1} />
          ))}
        </div>
      </section>

      {/* Comparison Block */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Hızlı Karşılaştırma</h2>
            <p className="text-gray-600">Seviyenize göre doğru raketi seçin</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                level: 'Başlangıç',
                icon: '🌱',
                color: 'gray',
                price: '1.000 – 2.000 ₺',
                features: ['Yuvarlak şekil', 'Fiberglas yüzey', 'Geniş tatlı nokta', 'Düşük denge'],
                href: '/baslangic-icin-padel-raketleri',
                cta: 'Başlangıç Raketleri',
              },
              {
                level: 'Orta Seviye',
                icon: '⚡',
                color: 'green',
                price: '2.000 – 3.500 ₺',
                features: ['Damla veya yuvarlak', 'Hibrit malzeme', 'Orta denge', 'Güç-kontrol dengesi'],
                href: '/padel-raketleri',
                cta: 'Orta Seviye Raketler',
              },
              {
                level: 'Profesyonel',
                icon: '🏆',
                color: 'gray',
                price: '3.500 ₺ +',
                features: ['Elmas şekil', 'Karbon fiber', 'Yüksek denge', 'Maksimum güç'],
                href: '/en-iyi-padel-raketleri',
                cta: 'Profesyonel Raketler',
              },
            ].map((item) => (
              <div
                key={item.level}
                className={`rounded-2xl p-6 border-2 ${item.color === 'green' ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.level}</h3>
                <p className="text-green-600 font-bold text-lg mb-4">{item.price}</p>
                <ul className="space-y-2 mb-6">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.href}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors ${
                    item.color === 'green'
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Uzman Rehberleri</h2>
            <p className="text-gray-600 mt-1">Padel dünyasında bilinmeniz gerekenler</p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1"
          >
            Tüm Yazılar
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            En Uygun Fiyatı Bulmaya Hazır mısınız?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Tüm popüler satıcıları karşılaştırın, en ucuz fiyatı bulun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/padel-raket-fiyatlari"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-8 rounded-xl transition-colors"
            >
              Fiyatları Karşılaştır
            </Link>
            <Link
              href="/en-iyi-padel-raketleri"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold py-3.5 px-8 rounded-xl transition-colors"
            >
              Şimdi İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Category Links */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Kategorilere Göz Atın</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Tüm Raketler', href: '/padel-raketleri', emoji: '🎾' },
              { label: 'En İyi Raketler', href: '/en-iyi-padel-raketleri', emoji: '🏆' },
              { label: 'Başlangıç İçin', href: '/baslangic-icin-padel-raketleri', emoji: '🌱' },
              { label: 'Fiyat Karşılaştır', href: '/padel-raket-fiyatlari', emoji: '💰' },
              { label: 'Yenilenmiş Raketler', href: '/yenilenmis-padel-raketleri', emoji: '♻️' },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors group"
              >
                <span className="text-2xl">{cat.emoji}</span>
                <span className="font-medium text-gray-700 group-hover:text-green-700 text-sm">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSection faqs={homeFaqs} title="Padel Raketi Hakkında Sık Sorulan Sorular" />
      </div>
    </>
  );
}
