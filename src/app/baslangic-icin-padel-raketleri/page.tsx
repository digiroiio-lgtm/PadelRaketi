import type { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import FAQSection from '@/components/ui/FAQSection';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/lib/schemas';
import { getProductsByLevel } from '@/data/products';
import { FAQ } from '@/types';

export const metadata: Metadata = {
  title: 'Başlangıç İçin En İyi Padel Raketleri 2026 – Rehber',
  description:
    'Padele yeni başlayanlar için en iyi padel raket önerileri. Uygun fiyatlı, affedici ve kolayca öğrenmenizi sağlayan başlangıç raketleri.',
  alternates: {
    canonical: 'https://padelraketi.com/baslangic-icin-padel-raketleri',
  },
};

const faqs: FAQ[] = [
  {
    question: 'Başlangıç için hangi padel raketi en iyi?',
    answer:
      'Head Zephyr, Babolat Air Viper ve Dunlop Boost başlangıç için en çok önerilen modellerdir. Geniş tatlı noktaları ve affedici yapılarıyla öğrenme sürecini kolaylaştırırlar.',
  },
  {
    question: 'Başlangıç raketine ne kadar bütçe ayırmalıyım?',
    answer:
      '1.000-2.000 TL arası bir bütçe başlangıç için yeterlidir. Bu aralıkta kaliteli ve dayanıklı raketler bulabilirsiniz. Spora devam kararı verdikten sonra daha iyi bir modele yatırım yapabilirsiniz.',
  },
  {
    question: 'Başlangıç oyuncuları karbon raket kullanabilir mi?',
    answer:
      'Teknik olarak kullanabilirler ancak tavsiye edilmez. Karbon raketler daha az affedici olduğundan başlangıçta hataları daha fazla hissettirirler ve yanlış alışkanlıklara yol açabilir.',
  },
  {
    question: 'Kaç saat oynayınca daha iyi rakete geçmeliyim?',
    answer:
      'Genellikle 50-100 saat oyun deneyiminden sonra ve temel teknikleri öğrendikten sonra üst segmente geçmeyi düşünebilirsiniz. Bu süre kişiden kişiye değişir.',
  },
  {
    question: 'Çocuklar için özel raket gerekli mi?',
    answer:
      '10 yaş altı çocuklar için genellikle daha hafif ve kısa raketler önerilir. Junior serilere bakmanız tavsiye edilir.',
  },
];

export default function BaslangicPadelRaketleriPage() {
  const beginnerProducts = getProductsByLevel('Başlangıç');
  const allProducts = beginnerProducts.length > 0 ? beginnerProducts : [];

  return (
    <>
      <JsonLd schema={faqSchema(faqs)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Başlangıç İçin Padel Raketleri', url: '/baslangic-icin-padel-raketleri' },
      ])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Başlangıç Raketleri' },
          ]}
        />

        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Başlangıç İçin En İyi Padel Raketleri
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Padele yeni başlayanlar için en uygun raketleri uzman görüşüyle seçtik. Doğru
            raket, öğrenme sürecinizi hızlandırır ve oyun zevkini artırır.
          </p>
        </div>

        {/* What to Look For */}
        <div className="bg-green-50 rounded-2xl p-6 border border-green-100 mb-10">
          <h2 className="text-lg font-bold text-green-800 mb-4">Başlangıç Raketinde Nelere Bakmalı?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Yuvarlak Şekil', desc: 'Geniş tatlı nokta için' },
              { title: 'Fiberglas Yüzey', desc: 'Daha affedici yapı' },
              { title: 'Düşük Denge', desc: 'Kolay kontrol için' },
              { title: '1.000-2.000 ₺', desc: 'İdeal bütçe aralığı' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <p className="font-bold text-green-800 mb-1">{item.title}</p>
                <p className="text-sm text-green-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        {allProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {allProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} rank={index + 1} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 text-center mb-12 border border-gray-100">
            <p className="text-gray-500">Başlangıç seviyesi raketler yakında eklenecektir.</p>
            <Link href="/padel-raketleri" className="mt-4 inline-flex text-green-600 font-semibold">
              Tüm Raketlere Bak →
            </Link>
          </div>
        )}

        {/* Guide Content */}
        <div className="prose prose-lg prose-gray max-w-none mb-12">
          <h2>Neden Doğru Başlangıç Raketi Önemli?</h2>
          <p>
            Padel sporuna başlarken yapılan en yaygın hata, ya çok pahalı ve profesyonel bir raket
            almak ya da çok ucuz ve düşük kaliteli bir modelle başlamaktır. Her iki durum da
            öğrenme sürecinizi olumsuz etkiler.
          </p>
          <p>
            Başlangıç oyuncuları için tasarlanmış raketler; geniş tatlı nokta, daha yumuşak
            yüzey ve affedici yapı gibi özellikleriyle yanlış vuruşların etkisini minimize eder.
            Bu sayede teknik geliştirmek daha kolay olur.
          </p>

          <h2>Başlangıç Raket Seçim Kriterleri</h2>

          <h3>1. Yuvarlak Şekil</h3>
          <p>
            Yuvarlak şekilli raketler, elmas şekline göre çok daha geniş tatlı noktaya sahiptir.
            Bu, topu merkez dışına çarptığınızda bile makul bir vuruş elde etmenizi sağlar.
          </p>

          <h3>2. Fiberglas Yüzey</h3>
          <p>
            Karbon fiber daha sert ve güç odaklıyken, fiberglas daha esnek ve kontrol odaklıdır.
            Başlangıçta tekniği öğrenmek için fiberglas çok daha uygundur.
          </p>

          <h3>3. Hafif Ağırlık</h3>
          <p>
            355-370 gram arası raketler başlangıç için idealdir. Çok ağır raketler yorgunluk
            ve sakatlık riskini artırır.
          </p>
        </div>

        <FAQSection faqs={faqs} title="Başlangıç Padel Raketi SSS" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/en-iyi-padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🏆 En İyi Raketler</h3>
            <p className="text-sm text-gray-500">Tüm seviyelerin en iyileri</p>
          </Link>
          <Link href="/blog/padel-raketi-nasil-secilir" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">📖 Raket Seçim Rehberi</h3>
            <p className="text-sm text-gray-500">Detaylı seçim kriterleri</p>
          </Link>
        </div>
      </div>
    </>
  );
}
