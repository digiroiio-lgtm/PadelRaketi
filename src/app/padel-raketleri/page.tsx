import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/ui/FAQSection';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schemas';
import { getRegularProducts } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import { FAQ } from '@/types';

export const metadata: Metadata = {
  title: 'Padel Raketleri 2026 – Tüm Modeller, Fiyatlar ve İncelemeler',
  description:
    "Türkiye'nin en kapsamlı padel raket kataloğu. Wilson, Adidas, Nox, Head, Bullpadel ve Babolat – marka/fiyat/seviye filtreleri ile doğru raketi anında bulun.",
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
  const regularProducts = getRegularProducts();

  return (
    <>
      <JsonLd schema={breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Padel Raketleri', url: '/padel-raketleri' },
      ])} />
      <JsonLd schema={faqSchema(faqs)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Padel Raketleri' },
          ]}
        />

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Padel Raketleri 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Türkiye&apos;nin en kapsamlı padel raket kataloğu. Marka, seviye, fiyat ve oyun stiline
            göre filtreleyin — doğru raketi hızla bulun.
          </p>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <span>✍️ Ahmet Yılmaz – Sertifikalı Padel Antrenörü</span>
            <span>📅 Güncelleme: Nisan 2026</span>
          </div>
        </div>

        {/* Marketplace Grid with Filters */}
        <ProductGrid products={regularProducts} />

        {/* Long-form SEO Content */}
        <div className="prose prose-lg prose-gray max-w-none mb-12 mt-16">
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
          <Link href="/yenilenmis-padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">♻️ Yenilenmiş Raketler</h3>
            <p className="text-sm text-gray-500">Uygun fiyatlı yenilenmiş seçenekler</p>
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
