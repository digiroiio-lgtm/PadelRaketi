import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/ui/FAQSection';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/lib/schemas';
import { products } from '@/data/products';
import { FAQ } from '@/types';

export const metadata: Metadata = {
  title: 'Padel Raket Karşılaştırması 2026 – Wilson, Adidas, Nox, Head',
  description:
    'Padel raketlerini yan yana karşılaştırın. Wilson Blade vs Adidas Metalbone vs Nox ML10 – ağırlık, malzeme, fiyat ve performans karşılaştırması. Doğru modeli seçin.',
  alternates: {
    canonical: 'https://padelraketi.com/padel-raket-karsilastirma',
  },
};

const faqs: FAQ[] = [
  {
    question: 'Wilson Blade mi yoksa Adidas Metalbone mi daha iyi?',
    answer:
      'Her ikisi de ileri/profesyonel seviye raketlerdir. Adidas Metalbone 3.3 daha yüksek güç ve spin kapasitesi sunarken, Wilson Blade V3 daha iyi güç-kontrol dengesi sağlar. Saldırgan oyun stili için Metalbone, dengeli oyun için Blade önerilir.',
  },
  {
    question: 'Nox ML10 Pro Cup hangi seviyeler için uygundur?',
    answer:
      'Nox ML10 Pro Cup, orta seviye oyuncular için idealdir. Geniş tatlı noktası ve fiberglas yapısı sayesinde kontrol odaklı oyun sunar. Hem ilerleme aşamasındaki oyuncular hem de kontrol tercih eden ileri seviye oyuncular kullanabilir.',
  },
  {
    question: 'Başlangıç için hangi raket en iyi karşılaştırma sonucu verir?',
    answer:
      'Head Zephyr ve Babolat Air Viper başlangıç için en iyi seçeneklerdir. Head Zephyr daha hafif (355g) ve yuvarlak şekliyle daha affedicidir. Babolat Air Viper ise damla şekliyle biraz daha fazla güç sunar.',
  },
  {
    question: 'Fiyat farkı performans farkını yansıtır mı?',
    answer:
      'Kısmen evet. 2.000 TL üzerindeki raketlerde malzeme ve teknoloji farkı belirgindir. Ancak 4.000 TL üzerindeki raketler çoğunlukla yalnızca profesyonel oyuncuların fark edeceği ince iyileştirmeler sunar.',
  },
  {
    question: 'Karbon fiber mi fiberglas raket mi daha iyi?',
    answer:
      'İkilisi farklı amaçlara hizmet eder. Fiberglas daha affedici ve kontrol odaklıyken, karbon fiber daha güçlü ve spin üretimi yüksektir. Seviyenize ve oyun stilinize göre tercih yapmalısınız.',
  },
  {
    question: 'Aynı fiyata hangi raket daha değerli?',
    answer:
      'Nox ML10 Pro Cup (2.150 TL) ve Babolat Air Viper (1.850 TL) fiyat-performans dengesi en yüksek modellerdir. Orta segmentte bu iki model diğer markalara göre belirgin şekilde öne çıkar.',
  },
];

const comparisonData = [
  { label: 'Güç', wilson: 4, adidas: 5, nox: 3, head: 2, bullpadel: 5, babolat: 3 },
  { label: 'Kontrol', wilson: 4, adidas: 3, nox: 4, head: 5, bullpadel: 3, babolat: 4 },
  { label: 'Spin', wilson: 4, adidas: 5, nox: 3, head: 3, bullpadel: 4, babolat: 3 },
  { label: 'Konfor', wilson: 4, adidas: 4, nox: 5, head: 5, bullpadel: 3, babolat: 4 },
  { label: 'Dayanıklılık', wilson: 5, adidas: 5, nox: 4, head: 4, bullpadel: 5, babolat: 4 },
];

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-gray-100 rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${(score / 5) * 100}%` }}
        />
      </div>
      <span className="text-xs font-bold text-gray-600 w-4">{score}</span>
    </div>
  );
}

export default function PadelRaketKarsilastirmaPage() {
  return (
    <>
      <JsonLd schema={faqSchema(faqs)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Padel Raket Karşılaştırması', url: '/padel-raket-karsilastirma' },
      ])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Padel Raket Karşılaştırması' },
          ]}
        />

        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Padel Raket Karşılaştırması 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            En popüler padel raketlerini yan yana karşılaştırın. Güç, kontrol, spin, konfor ve
            fiyat gibi tüm kriterlerde hangi model öne çıkıyor?
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>✍️ Ahmet Yılmaz – Sertifikalı Padel Antrenörü</span>
            <span>📅 Güncelleme: Nisan 2026</span>
          </div>
        </div>

        {/* Performance Radar Table */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-12">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Performans Puanları (1-5)</h2>
            <p className="text-sm text-gray-500 mt-1">PadelRaketi.com uzman ekibinin değerlendirmesi</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Kriter</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700 text-center">Wilson<br /><span className="text-green-600">Blade V3</span></th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700 text-center">Adidas<br /><span className="text-green-600">Metalbone</span></th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700 text-center">Nox<br /><span className="text-green-600">ML10</span></th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700 text-center">Head<br /><span className="text-green-600">Zephyr</span></th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700 text-center">Bullpadel<br /><span className="text-green-600">Vertex</span></th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700 text-center">Babolat<br /><span className="text-green-600">Air Viper</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {comparisonData.map((row) => (
                  <tr key={row.label}>
                    <td className="px-6 py-4 font-semibold text-gray-900 text-sm">{row.label}</td>
                    <td className="px-4 py-4"><ScoreBar score={row.wilson} /></td>
                    <td className="px-4 py-4"><ScoreBar score={row.adidas} /></td>
                    <td className="px-4 py-4"><ScoreBar score={row.nox} /></td>
                    <td className="px-4 py-4"><ScoreBar score={row.head} /></td>
                    <td className="px-4 py-4"><ScoreBar score={row.bullpadel} /></td>
                    <td className="px-4 py-4"><ScoreBar score={row.babolat} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Full Specs Comparison */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-12">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Teknik Özellikler Karşılaştırması</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Raket</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Seviye</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Ağırlık</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Şekil</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Malzeme</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Denge</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Fiyat</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <Link href={`/padel-raketleri/${product.slug}`} className="font-semibold text-gray-900 hover:text-green-600">
                          {product.name}
                        </Link>
                        <p className="text-xs text-gray-400">{product.brand}</p>
                      </div>
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
                    <td className="px-4 py-4 text-sm text-gray-600">{product.weight}</td>
                    <td className="px-4 py-4 text-sm text-gray-600">{product.shape}</td>
                    <td className="px-4 py-4 text-sm text-gray-600">{product.material}</td>
                    <td className="px-4 py-4 text-sm text-gray-600">{product.balance}</td>
                    <td className="px-4 py-4 text-right">
                      <div className="font-extrabold text-gray-900">{product.price.toLocaleString('tr-TR')} ₺</div>
                      {product.oldPrice && (
                        <div className="text-xs text-gray-400 line-through">{product.oldPrice.toLocaleString('tr-TR')} ₺</div>
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
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verdict blocks */}
        <div className="prose prose-lg prose-gray max-w-none mb-12">
          <h2>Detaylı Karşılaştırma: Hangi Model Kime Uygun?</h2>

          <h3>Wilson Blade V3 vs Adidas Metalbone 3.3</h3>
          <p>
            Her ikisi de ileri ve profesyonel seviye oyuncular için tasarlanmış, piyasanın en
            prestijli modelleridir. Adidas Metalbone 3.3, 12K karbon fiber yapısıyla maksimum
            güç ve spin sunar; saldırgan, agresif oyun tarzı tercih edenler için ideal seçimdir.
            Wilson Blade V3 ise güç ve kontrolü daha dengeli bir şekilde sunar; çok yönlü
            oyuncular için daha uygun bir tercih olabilir. Fiyat olarak Metalbone yaklaşık
            400 TL daha pahalıdır.
          </p>

          <h3>Nox ML10 Pro Cup vs Babolat Air Viper</h3>
          <p>
            Her ikisi de orta seviye oyuncular için cazip seçeneklerdir. Nox ML10 yuvarlak
            şekliyle daha geniş tatlı nokta sunarken, Babolat Air Viper damla şekliyle
            biraz daha fazla güç üretir. Kontrol odaklıysanız Nox ML10, güç ve kontrol
            dengesi istiyorsanız Babolat Air Viper tercih edilebilir. Nox yaklaşık 300 TL
            daha pahalıdır ama daha yüksek kullanıcı puanına sahiptir.
          </p>

          <h3>Head Zephyr: Başlangıç Kategorisinin Lider</h3>
          <p>
            1.490 TL gibi uygun bir fiyata sunulan Head Zephyr, başlangıç kategorisinin
            açık ara en popüler modelidir. 355 gram hafif ağırlığı ve düşük denge noktasıyla
            mükemmel kontrol sunar. Bu kategoride rakibi yok denecek kadar az.
          </p>

          <h3>Bullpadel Vertex 04: Güç Odaklı İleri Seviye</h3>
          <p>
            Bullpadel Vertex 04, saldırgan oyun stili için optimize edilmiş bir ileri seviye
            raketidir. Wilson Blade ile aynı seviye kategorisinde olmasına karşın daha fazla
            güç ve spin üretir, ancak kontrolü biraz daha zordur. Smash ve drive odaklı
            oyuncular için mükemmel bir seçimdir.
          </p>
        </div>

        <FAQSection faqs={faqs} title="Padel Raket Karşılaştırması – SSS" />

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
          <Link href="/padel-raket-markalari" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🎯 Markalar Rehberi</h3>
            <p className="text-sm text-gray-500">Marka bazlı karşılaştırma</p>
          </Link>
          <Link href="/padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🎾 Tüm Raketler</h3>
            <p className="text-sm text-gray-500">Tam model kataloğu</p>
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
