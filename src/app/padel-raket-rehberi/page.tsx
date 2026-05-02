import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/ui/FAQSection';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/lib/schemas';
import { FAQ } from '@/types';

export const metadata: Metadata = {
  title: 'Padel Raket Rehberi 2026 – Nasıl Seçilir? Kapsamlı Alım Kılavuzu',
  description:
    'Padel raketi nasıl seçilir? Ağırlık, denge, şekil, malzeme, seviye ve bütçe. 2026 kapsamlı padel raket alım rehberi – uzman tavsiyesi ile doğru raket seçin.',
  alternates: {
    canonical: 'https://padelraketi.com/padel-raket-rehberi',
  },
};

const faqs: FAQ[] = [
  {
    question: 'Padel raketi seçerken en önemli kriter nedir?',
    answer:
      'Oyun seviyeniz en kritik kriterdir. Seviyenize uygun raket; öğrenmeyi hızlandırır, sakatlık riskini azaltır ve oyun deneyimini artırır. İkinci önemli kriter ise oyun stiliniz: kontrol mü tercih edersiniz, güç mü?',
  },
  {
    question: 'Raket ağırlığı nasıl seçilmeli?',
    answer:
      'Başlangıç için 355-365g, orta seviye için 360-375g, ileri-profesyonel için 365-385g önerilir. Çok ağır raket; omuz ve dirsek sorunlarına yol açabilir. Hafif raket ise yeterli güç üretemeyebilir.',
  },
  {
    question: 'Yuvarlak mı damla mı elmas şekil seçmeliyim?',
    answer:
      'Başlangıç: yuvarlak (geniş tatlı nokta, affedici). Orta seviye: damla (güç-kontrol dengesi). İleri-profesyonel: elmas (maksimum güç ve spin, tatlı nokta üstte).',
  },
  {
    question: 'Padel raketi satın almadan önce test etmeli miyim?',
    answer:
      'Mümkünse evet. Pek çok padel kulübü kiralık raket seçeneği sunar. Birkaç seans farklı modeller deneyin. Çevrimiçi alımda iade politikasını kontrol edin.',
  },
  {
    question: 'Denge noktası (balance point) nedir?',
    answer:
      'Denge noktası, raketin tutamak ucundan itibaren ölçülen ağırlık merkezi konumudur. Düşük denge (240-255mm) → kontrol odaklı. Orta denge (255-270mm) → karma. Yüksek denge (270mm+) → güç odaklı.',
  },
  {
    question: 'Ne sıklıkla raket değiştirmeliyim?',
    answer:
      'Düzenli haftada 2-3 kez oynayan oyuncular için orta seviye raket 2-3 yıl dayanır. Grip her 3-6 ayda bir, bant ise gerektiğinde yenilenmelidir. Çatlak ya da deformasyon gözlemlerseniz raket değişimi kaçınılmazdır.',
  },
];

const criteria = [
  {
    title: 'Oyun Seviyesi',
    icon: '📊',
    options: [
      { label: 'Başlangıç (0-1 yıl)', rec: 'Yuvarlak şekil, fiberglas, 355-365g, düşük denge' },
      { label: 'Orta (1-3 yıl)', rec: 'Damla/yuvarlak, hibrit malzeme, 360-370g, orta denge' },
      { label: 'İleri (3+ yıl)', rec: 'Elmas/damla, karbon fiber, 365-380g, orta-yüksek denge' },
      { label: 'Profesyonel', rec: 'Elmas, 12K karbon, 365-385g, yüksek denge' },
    ],
  },
  {
    title: 'Oyun Stili',
    icon: '🎯',
    options: [
      { label: 'Kontrol Odaklı', rec: 'Yuvarlak/damla şekil, fiberglas, düşük denge' },
      { label: 'Güç Odaklı', rec: 'Elmas şekil, karbon fiber, yüksek denge' },
      { label: 'Dengeli', rec: 'Damla şekil, hibrit malzeme, orta denge' },
      { label: 'Savunma', rec: 'Yuvarlak şekil, fiberglas, düşük-orta denge' },
    ],
  },
  {
    title: 'Bütçe',
    icon: '💰',
    options: [
      { label: '800-1.500 ₺', rec: 'Giriş segmenti — Head, Babolat giriş modelleri' },
      { label: '1.500-2.500 ₺', rec: 'Optimum segment — Nox ML10, Babolat Air Viper, Head Zephyr' },
      { label: '2.500-3.500 ₺', rec: 'Orta-üst — Wilson Blade, Bullpadel Vertex' },
      { label: '3.500 ₺+', rec: 'Premium — Adidas Metalbone, üst Wilson/Bullpadel modelleri' },
    ],
  },
];

export default function PadelRaketRehberiPage() {
  return (
    <>
      <JsonLd schema={faqSchema(faqs)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Padel Raket Rehberi', url: '/padel-raket-rehberi' },
      ])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Padel Raket Rehberi' },
          ]}
        />

        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Padel Raket Rehberi 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Doğru padel raketini nasıl seçersiniz? Ağırlık, denge, şekil, malzeme, seviye ve
            bütçe — tüm kriterleri uzman gözüyle açıklıyoruz.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>✍️ Ahmet Yılmaz – Sertifikalı Padel Antrenörü</span>
            <span>📅 Güncelleme: Nisan 2026</span>
          </div>
        </div>

        {/* Selection Matrix */}
        <div className="space-y-8 mb-12">
          {criteria.map((section) => (
            <div key={section.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100 bg-green-50">
                <h2 className="text-xl font-bold text-gray-900">
                  {section.icon} {section.title}
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Profil</th>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Önerilen Özellikler</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {section.options.map((opt) => (
                      <tr key={opt.label} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900 text-sm whitespace-nowrap">{opt.label}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{opt.rec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Long form guide */}
        <div className="prose prose-lg prose-gray max-w-none mb-12">
          <h2>Padel Raketi Seçim Kriterleri – Detaylı Rehber</h2>

          <h3>1. Şekil: Yuvarlak, Damla ve Elmas</h3>
          <p>
            Padel raketleri üç temel şekilde üretilir ve bu şekil, raketin karakterini belirleyen
            en önemli faktördür.
          </p>
          <p>
            <strong>Yuvarlak (Redondo):</strong> Tatlı nokta orta bölgededir ve geniştir. Hata payı
            yüksek, öğrenmesi kolay, kontrol odaklı raketlerdir. Başlangıç ve kontrol oyuncuları için
            idealdir.
          </p>
          <p>
            <strong>Damla (Lagrima/Teardrop):</strong> Yuvarlak ile elmas arası bir şekildir. Tatlı
            nokta biraz yukarıdadır; güç ve kontrolü dengeler. Orta seviye oyuncular için mükemmel
            bir geçiş raketidir.
          </p>
          <p>
            <strong>Elmas (Diamante):</strong> Tatlı nokta üst bölgededir ve dardır. Yüksek güç ve
            spin kapasitesi sunar ancak hata payı azdır. İleri ve profesyonel oyuncular için tasarlanmıştır.
          </p>

          <h3>2. Malzeme: Fiberglas vs Karbon Fiber</h3>
          <p>
            <strong>Fiberglas:</strong> Daha esnek bir yüzey oluşturur. Topun yüzeyde daha uzun
            kalmasını sağlar, bu da daha iyi kontrol anlamına gelir. Titreşim emilimi iyidir ve
            kolları daha az yorar. Başlangıç ve orta seviye için en uygun seçimdir.
          </p>
          <p>
            <strong>Karbon Fiber:</strong> Daha sert bir yüzeydir. Enerji transferi anında gerçekleşir
            ve daha yüksek güç üretilir. Spin kapasitesi yüksektir. 12K karbon fiber, en premium
            seçenektir. İleri ve profesyonel seviye için uygundur.
          </p>

          <h3>3. Ağırlık: Hafif mi Ağır mı?</h3>
          <p>
            Padel raketleri genellikle 340-390 gram arasında üretilir. Ağırlık seçimi şu faktörlere
            bağlıdır:
          </p>
          <ul>
            <li><strong>Başlangıç:</strong> 355-365 gram — kollar daha az yorulur, kontrol kolaylaşır</li>
            <li><strong>Orta seviye:</strong> 360-370 gram — güç ve kontrol dengesi</li>
            <li><strong>İleri-Profesyonel:</strong> 365-385 gram — maksimum güç için daha fazla kütle</li>
          </ul>

          <h3>4. Denge Noktası</h3>
          <p>
            Denge noktası, raketin tutamak tarafından ölçülen ağırlık merkezidir:
          </p>
          <ul>
            <li><strong>Düşük denge (240-255mm):</strong> Tutamağa daha yakın ağırlık merkezi — kontrol ve manevra</li>
            <li><strong>Orta denge (255-270mm):</strong> Dengeli — çok yönlü oyuncular için</li>
            <li><strong>Yüksek denge (270mm+):</strong> Başa daha yakın ağırlık merkezi — smash gücü ve agresif oyun</li>
          </ul>

          <h3>5. Köpük Tipi</h3>
          <p>
            Raket iç dolgusu (köpük) de performansı etkiler. <strong>EVA köpük</strong> daha sert
            ve güç odaklıyken, <strong>Foam (yumuşak köpük)</strong> daha iyi titreşim emilimi ve
            konfor sağlar. Başlangıç için Foam, ileri seviye için EVA tercih edilir.
          </p>

          <h3>6. Grip ve Tutamak</h3>
          <p>
            Tutamak boyutu standart olmakla birlikte bazı modeller farklı kalınlıklarda gelir. İnce
            tutamaklar daha fazla bilek hareketi sağlarken, kalın tutamaklar dirsek üzerindeki baskıyı
            azaltır. Grip her 3-6 ayda bir yenilenmelidir.
          </p>

          <h2>Raket Bakımı: Ömrünü Uzatın</h2>
          <p>
            Doğru bakım, raketinizin ömrünü önemli ölçüde uzatır:
          </p>
          <ul>
            <li>Raketin çerçevesini bant ile koruyun; kenar darbelerine karşı önemli koruma sağlar</li>
            <li>Nemli ortamlarda veya doğrudan güneş ışığında bırakmayın</li>
            <li>Her oyun sonrası kılıfına koyun</li>
            <li>Grip yıprandıkça değiştirin; kaymayan gripten iyi kontrol gelir</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} title="Padel Raket Rehberi – SSS" />

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
          <Link href="/baslangic-icin-padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🌱 Başlangıç Raketleri</h3>
            <p className="text-sm text-gray-500">Yeni başlayanlar için öneriler</p>
          </Link>
          <Link href="/padel-raket-markalari" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🎯 Markalar Rehberi</h3>
            <p className="text-sm text-gray-500">Wilson, Adidas, Nox incelemesi</p>
          </Link>
          <Link href="/padel-raket-nedir" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">❓ Padel Raketi Nedir?</h3>
            <p className="text-sm text-gray-500">Temel bilgiler ve özellikler</p>
          </Link>
        </div>
      </div>
    </>
  );
}
