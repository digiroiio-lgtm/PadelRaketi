import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/ui/FAQSection';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/lib/schemas';
import { FAQ } from '@/types';

export const metadata: Metadata = {
  title: 'Padel Raketi Nedir? – Özellikler, Malzemeler ve Kurallar 2026',
  description:
    'Padel raketi nedir, nasıl yapılır, tenis raketinden farkı nedir? Padel raketiyle ilgili merak ettiğiniz her şey: boyutlar, malzemeler, kurallar ve özellikler.',
  alternates: {
    canonical: 'https://padelraketi.com/padel-raket-nedir',
  },
};

const faqs: FAQ[] = [
  {
    question: 'Padel raketi ile tenis raketi arasındaki fark nedir?',
    answer:
      'Padel raketlerinde yüz yoktur — solid (dolu) bir yüzeye sahiptirler ve delikler açılmıştır. Tenis raketleri ise gergin tel kafes yapısına sahiptir. Padel raketleri daha kısa, daha hafif ve sap bölgesi yoktur; tutuş kordela (lanyard) ile sağlanır.',
  },
  {
    question: 'Padel raketi kaç cm olmalıdır?',
    answer:
      'WPT (World Padel Tour) kurallarına göre padel raketinin maksimum uzunluğu 45,5 cm, genişliği 26 cm olmalıdır. Toplam uzunluk (sap dahil) 38 cm\'yi aşmamalıdır. Bu boyutlar tüm resmi üreticiler tarafından sabitlenmiştir.',
  },
  {
    question: 'Padel raketinin delikleri ne işe yarar?',
    answer:
      'Delikler raketin aerodynamiğini iyileştirir (hava direncini azaltır) ve ağırlığı azaltır. Ayrıca topla temas anında biraz daha fazla hava çıkışı sağlayarak kontrol dengesini etkiler. Delik deseni markadan markaya farklılık gösterir.',
  },
  {
    question: 'Padel raketi kaç gramda olmalı?',
    answer:
      'Standart bir padel raketi 340 ile 390 gram arasında değişir. Başlangıç için 355-365 gram idealdir. Daha hafif raketler daha fazla kontrol sunarken, daha ağır raketler daha fazla güç üretir.',
  },
  {
    question: 'Padel raketinin kordela (lanyard) şeridi zorunlu mu?',
    answer:
      'Evet, tüm resmi padel kurallarına göre oyun sırasında raketin bilek kordelası (lanyard) bileğe bağlı olmalıdır. Bu kural, raketin kaza sonucu fırlamasını önlemek için getirilmiştir.',
  },
  {
    question: 'Padel raketi nasıl tutulur?',
    answer:
      'Padelde en yaygın tutuş "continental grip" (kıta tutuşu) dir. Raketi tutuş şekli; hem forehand hem backhand vuruşlarda aynı tutuşla oynamayı mümkün kılar ve hızlı el değişimlerini kolaylaştırır.',
  },
];

const specsTable = [
  { spec: 'Maksimum Uzunluk', value: '45,5 cm' },
  { spec: 'Maksimum Genişlik', value: '26 cm' },
  { spec: 'Maksimum Sap Dahil Uzunluk', value: '38 cm' },
  { spec: 'Ağırlık Aralığı', value: '340 – 390 gram' },
  { spec: 'Yüzey', value: 'Solid (delikli)' },
  { spec: 'Malzeme (Yüzey)', value: 'Fiberglas veya Karbon Fiber' },
  { spec: 'Malzeme (Çerçeve)', value: 'Karbon Fiber, Fiberglas veya Kombinasyon' },
  { spec: 'İç Dolgu', value: 'EVA veya Foam Köpük' },
  { spec: 'Tutuş Yardımcısı', value: 'Kordela (Lanyard) – Zorunlu' },
];

export default function PadelRaketNedirPage() {
  return (
    <>
      <JsonLd schema={faqSchema(faqs)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Padel Raketi Nedir?', url: '/padel-raket-nedir' },
      ])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Padel Raketi Nedir?' },
          ]}
        />

        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Padel Raketi Nedir?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Padel raketinin özellikleri, yapısı, malzemeleri ve diğer raketlerden farkları hakkında
            merak ettiğiniz her şeyi bu kapsamlı rehberde bulabilirsiniz.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>✍️ Ahmet Yılmaz – Sertifikalı Padel Antrenörü</span>
            <span>📅 Güncelleme: Nisan 2026</span>
          </div>
        </div>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold text-green-800 mb-3">⚡ Kısa Tanım</h2>
          <p className="text-gray-700 leading-relaxed">
            Padel raketi, padel sporunda kullanılan, <strong>solid (dolu)</strong> ve üzerinde
            delikler bulunan kısa bir rakettir. Tel kafes yerine dolu yüzeye sahiptir; bu
            en temel özelliğiyle tenis ve badminton raketlerinden ayrılır. Çerçeve genellikle
            karbon fiber veya fiberglastan, iç dolgu ise EVA veya foam köpükten üretilir.
          </p>
        </div>

        {/* Official Specs */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-12">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Resmi Ölçüler ve Özellikler</h2>
            <p className="text-sm text-gray-500 mt-1">WPT (World Padel Tour) kurallarına göre</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Özellik</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Değer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {specsTable.map((row) => (
                  <tr key={row.spec} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900 text-sm">{row.spec}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Long-form content */}
        <div className="prose prose-lg prose-gray max-w-none mb-12">
          <h2>Padel Raketi Nasıl Yapılır?</h2>
          <p>
            Padel raketleri üç ana bileşenden oluşur: <strong>çerçeve (frame)</strong>,
            <strong> yüzey (face)</strong> ve <strong>iç dolgu (core)</strong>.
          </p>

          <h3>Çerçeve</h3>
          <p>
            Raket çerçevesi genellikle karbon fiber, fiberglas veya bu ikisinin kombinasyonundan
            üretilir. Karbon fiber çerçeveler daha sert ve dayanıklıyken, fiberglas çerçeveler
            biraz daha esneklik sağlar. Çerçeve kalınlığı da performansı etkiler: daha kalın çerçeve
            daha fazla sertlik ve güç, daha ince çerçeve daha iyi his anlamına gelir.
          </p>

          <h3>Yüzey</h3>
          <p>
            Padel raketi yüzeyi, tenis raketinin aksine tel kafes değil, dolu bir levhadır.
            Bu levhada aerodynamik amaçlı ve ağırlık azaltma için delikler açılmıştır.
            Yüzey malzemesi ya <strong>fiberglas</strong> ya da <strong>karbon fiber</strong>
            olur. Karbon fiber yüzey daha sert ve güçlüdür, fiberglas ise daha esnek ve
            affedicidir.
          </p>
          <p>
            12K karbon fiber, piyasadaki en premium yüzey malzemesidir. &quot;12K&quot; ifadesi,
            karbon ipliğinin yoğunluğunu (12.000 iplik) ifade eder ve daha yüksek sertlik ve
            güç anlamına gelir.
          </p>

          <h3>İç Dolgu (Core)</h3>
          <p>
            Raket yüzeyleri arasındaki iç dolgu iki türde olur:
          </p>
          <ul>
            <li>
              <strong>EVA Köpük:</strong> Sert ve yüksek yoğunluklu. Güç odaklı oyuncular
              için uygundur. Kontrol daha zorlaşır ama smash gücü artar.
            </li>
            <li>
              <strong>Foam (Yumuşak Köpük):</strong> Daha yumuşak ve esnek. Titreşim emilimi
              daha iyidir; konfor ve kontrol önceliklilerin tercihi. Başlangıç raketlerinde
              yaygındır.
            </li>
          </ul>

          <h2>Padel Raketi vs Tenis Raketi</h2>
          <p>
            Padel ve tenis raketleri arasındaki temel farklar şöyle sıralanabilir:
          </p>
          <ul>
            <li><strong>Yüzey:</strong> Padel = dolu/delikli levha. Tenis = gergin tel kafes</li>
            <li><strong>Boyut:</strong> Padel daha kısa ve kompakttır</li>
            <li><strong>Ağırlık:</strong> Padel genellikle 340-390g, tenis 280-340g</li>
            <li><strong>Tutuş:</strong> Padelde sap yoktur; yuvarlak ya da çok köşeli tutamak vardır</li>
            <li><strong>Kordela:</strong> Padelde zorunlu; teniste isteğe bağlı</li>
          </ul>

          <h2>Padel Raketi Şekilleri</h2>
          <p>
            Padel raketleri üç temel şekilde üretilir; her birinin farklı özellikleri vardır:
          </p>
          <ul>
            <li><strong>Yuvarlak (Redondo):</strong> Geniş tatlı nokta, kontrol odaklı, başlangıç için ideal</li>
            <li><strong>Damla (Lagrima):</strong> Orta seviye — güç ve kontrol dengesi</li>
            <li><strong>Elmas (Diamante):</strong> Dar tatlı nokta üstte, maksimum güç, profesyoneller için</li>
          </ul>

          <h2>Padel Raketinde Kordela (Lanyard) Nedir?</h2>
          <p>
            Kordela, raketin bileğe bağlandığı güvenlik ipidir. WPT kuralları gereği tüm resmi
            maçlarda kordelasız oynamak yasaktır. Kordela, raketin oyun sırasında kaza sonucu
            fırlamasını ve başkasına çarpmasını önler. Her padel raketinde fabrikadan kordela
            deliği standart olarak bulunur.
          </p>
        </div>

        <FAQSection faqs={faqs} title="Padel Raketi Nedir? – SSS" />

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
          <Link href="/padel-raket-rehberi" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">📖 Alım Rehberi</h3>
            <p className="text-sm text-gray-500">Doğru raket nasıl seçilir?</p>
          </Link>
          <Link href="/padel-raketleri" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🎾 Tüm Raketler</h3>
            <p className="text-sm text-gray-500">Tüm modelleri inceleyin</p>
          </Link>
          <Link href="/padel-raket-markalari" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-colors group">
            <h3 className="font-bold text-gray-900 group-hover:text-green-700">🎯 Markalar Rehberi</h3>
            <p className="text-sm text-gray-500">Wilson, Adidas, Nox incelemesi</p>
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
