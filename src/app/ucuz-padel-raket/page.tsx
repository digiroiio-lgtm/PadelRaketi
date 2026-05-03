import type { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import FAQSection from '@/components/ui/FAQSection';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/lib/schemas';
import { products } from '@/data/products';
import { FAQ } from '@/types';

export const metadata: Metadata = {
  title: 'Ucuz Padel Raket 2026 – Uygun Fiyatlı ve Kaliteli Seçenekler',
  description:
    'Bütçenize uygun en iyi padel raketleri. 1.000 TL\'den başlayan fiyatlarla kaliteli padel raketi seçenekleri, indirimli modeller ve fiyat-performans önerileri.',
  alternates: {
    canonical: 'https://padelraketi.com/ucuz-padel-raket',
  },
};

const faqs: FAQ[] = [
  {
    question: 'Ucuz padel raketi kaliteli olabilir mi?',
    answer:
      'Evet, 1.500-2.500 TL arasında çok kaliteli padel raketleri bulmak mümkündür. Head Zephyr, Nox ML10 Pro Cup ve Babolat Air Viper bu kategorinin en iyi örnekleridir. Düşük fiyat her zaman düşük kalite anlamına gelmez.',
  },
  {
    question: 'En ucuz iyi padel raketi hangisidir?',
    answer:
      'Head Zephyr (1.490 TL) piyasadaki fiyat-performans dengesi en yüksek başlangıç raketidir. Babolat Air Viper (1.850 TL) ise orta seviye oyuncular için çok cazip bir seçimdir.',
  },
  {
    question: 'Padel raketinde ne kadar harcamalıyım?',
    answer:
      'Başlangıç oyuncuları için 1.000-2.000 TL yeterlidir. Spora devam kararı verip orta seviyeye geçince 2.000-3.500 TL\'ye yükselebilirsiniz. İlk raket için 4.000 TL+ harcamak gerekmez.',
  },
  {
    question: 'İndirimli padel raketi nereden alınır?',
    answer:
      'Amazon Türkiye, Trendyol ve Hepsiburada gibi e-ticaret platformları sık sık indirim kampanyaları düzenler. Sezon sonları (Ekim-Kasım) ve özel günler (Black Friday) en iyi indirim dönemleridir.',
  },
  {
    question: 'İkinci el padel raketi almak mantıklı mı?',
    answer:
      'Başlangıç için makul bir seçenek olabilir. Ancak fiziksel hasar, çatlak veya deforme olmuş çerçeve gibi sorunları mutlaka kontrol edin. Güvenilir bir platformdan ya da tanıdıklardan almayı tercih edin.',
  },
  {
    question: '1.000 TL altında padel raketi bulunabilir mi?',
    answer:
      'Evet, 800-1.200 TL arasında giriş seviyesi raketler mevcuttur. Ancak bu fiyat aralığında malzeme ve işçilik kalitesi daha sınırlı olur. Biraz daha bütçe ayırabiliyorsanız 1.500 TL+ segmenti daha iyi değer sunar.',
  },
];

export default function UcuzPadelRaketPage() {
  const budgetProducts = products.filter((p) => p.price <= 2200);
  const allProducts = budgetProducts.length > 0 ? budgetProducts : products.slice(0, 3);

  return (
    <>
      <JsonLd schema={faqSchema(faqs)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Ucuz Padel Raket', url: '/ucuz-padel-raket' },
      ])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Ucuz Padel Raket' },
          ]}
        />

        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Ucuz Padel Raket 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Bütçenizi zorlamadan kaliteli padel raketi seçenekleri. Uzman önerisi modeller,
            indirimli fiyatlar ve fiyat-performans karşılaştırması bir arada.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>✍️ Ahmet Yılmaz – Sertifikalı Padel Antrenörü</span>
            <span>📅 Güncelleme: Nisan 2026</span>
          </div>
        </div>

        {/* Budget Tier Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            {
              range: '800 – 1.500 ₺',
              label: 'Giriş Bütçesi',
              icon: '💚',
              desc: 'Padele yeni başlayanlar için yeterli kalite',
            },
            {
              range: '1.500 – 2.500 ₺',
              label: 'Optimum Bütçe',
              icon: '⭐',
              desc: 'Fiyat-performans dengesi en yüksek aralık',
              highlight: true,
            },
            {
              range: '2.500 – 3.500 ₺',
              label: 'Orta-Üst Bütçe',
              icon: '🔥',
              desc: 'Performanstan taviz vermeden makul fiyat',
            },
          ].map((tier) => (
            <div
              key={tier.label}
              className={`rounded-2xl p-6 border-2 ${
                tier.highlight
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="text-3xl mb-2">{tier.icon}</div>
              <h2 className="text-xl font-bold text-gray-900">{tier.label}</h2>
              <p className="text-2xl font-extrabold text-green-600 my-2">{tier.range}</p>
              <p className="text-sm text-gray-600">{tier.desc}</p>
              {tier.highlight && (
                <span className="mt-3 inline-block text-xs bg-green-600 text-white px-2 py-0.5 rounded-full font-bold">
                  Önerilen Aralık
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Budget Products */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Uygun Fiyatlı Öneriler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} rank={index + 1} />
          ))}
        </div>

        {/* Tips and content */}
        <div className="prose prose-lg prose-gray max-w-none mb-12">
          <h2>Ucuz Padel Raketi Alırken Nelere Dikkat Edilmeli?</h2>
          <p>
            Düşük fiyatlı bir raket satın alırken sadece fiyata bakmamalısınız. Doğru
            tercih yapıldığında ekonomik bütçeyle de çok tatmin edici bir raket sahibi
            olabilirsiniz. İşte dikkat etmeniz gereken kritik noktalar:
          </p>

          <h3>1. Seviyenize Uygun Model Seçin</h3>
          <p>
            Başlangıç oyuncuları için tasarlanmış raketler, orta ve ileri seviye raketlerden
            daha ucuz olmakla birlikte, başlangıç seviyesinde çok daha iyi performans sunar.
            Seviyenizin üzerinde pahalı bir raket almak mantıklı bir yatırım değildir.
          </p>

          <h3>2. Malzeme Kalitesini Kontrol Edin</h3>
          <p>
            Düşük fiyatlı raketlerde fiberglas yüzey beklenmesi normaldir. Ancak çerçeve
            kalitesi ve köpük tipi önemlidir. EVA köpük ve fiberglas kombinasyonu, giriş
            segmentinde en iyi performansı sunar.
          </p>

          <h3>3. İndirim Dönemlerini Takip Edin</h3>
          <p>
            Orta ve üst segment raketler yıl içinde büyük indirimlerle sunulabilir. Özellikle
            sezon sonu kampanyalarında (Ekim-Kasım) ve Black Friday döneminde 3.000 TL&apos;lik
            raketleri 1.800-2.000 TL&apos;ye bulabilirsiniz.
          </p>

          <h3>4. Markalı Modellere Öncelik Verin</h3>
          <p>
            Bilinmeyen markalar ucuz görünse de garanti, servis ve yedek parça konusunda
            sorun yaşatabilir. Head, Babolat ve Nox&apos;un giriş segmenti modelleri, bilinmez
            markalardan çok daha iyi bir yatırımdır.
          </p>

          <h3>5. Eski Modeller İyi Fiyat Sunar</h3>
          <p>
            Markaların önceki sezon modelleri, yeni modellerle büyük ölçüde aynı teknolojiyi
            sunmakta ancak %20-40 daha uygun fiyata gelmektedir. Önceki yılın modelini incelemek
            her zaman akıllıca bir tercihtir.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-12">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Fiyat Aralığına Göre En İyi Modeller</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Raket</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Seviye</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Puan</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Fiyat</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Tasarruf</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {products
                  .filter((p) => p.oldPrice)
                  .sort((a, b) => a.price - b.price)
                  .map((product) => {
                    const saving = product.oldPrice
                      ? product.oldPrice - product.price
                      : 0;
                    return (
                      <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <Link href={`/padel-raketleri/${product.slug}`} className="font-semibold text-gray-900 hover:text-green-600">
                            {product.name}
                          </Link>
                          <p className="text-xs text-gray-400">{product.brand}</p>
                        </td>
                        <td className="px-4 py-4">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            product.level === 'Profesyonel' ? 'bg-purple-100 text-purple-700' :
                            product.level === 'İleri' ? 'bg-orange-100 text-orange-700' :
                            product.level === 'Orta' ? 'bg-blue-100 text-blue-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {product.level}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-bold">{product.rating}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="font-extrabold text-gray-900">{product.price.toLocaleString('tr-TR')} ₺</div>
                          {product.oldPrice && (
                            <div className="text-xs text-gray-400 line-through">{product.oldPrice.toLocaleString('tr-TR')} ₺</div>
                          )}
                        </td>
                        <td className="px-4 py-4 text-right">
                          {saving > 0 && (
                            <span className="text-sm font-bold text-red-500">
                              -{saving.toLocaleString('tr-TR')} ₺
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-4">
                          <Link
                            href={`/padel-raketleri/${product.slug}`}
                            className="inline-flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                          >
                            İncele
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        <FAQSection faqs={faqs} title="Ucuz Padel Raket Hakkında SSS" />

        {/* Internal Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <Link href="/en-iyi-padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🏆 En İyi Padel Raketleri</h3>
            <p className="text-sm text-gray-500">Tüm seviyelerde uzman sıralaması</p>
          </Link>
          <Link href="/padel-raket-fiyatlari" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">💰 Fiyat Karşılaştırması</h3>
            <p className="text-sm text-gray-500">Tam fiyat tablosu</p>
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
            <p className="text-sm text-gray-500">En iyi markalar hangileri?</p>
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
