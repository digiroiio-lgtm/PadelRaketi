import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/seo/Breadcrumb';

export const metadata: Metadata = {
  title: 'Hakkımızda – PadelRaketi.com',
  description:
    'PadelRaketi.com hakkında: Kim olduğumuz, metodolojimiz ve padel sporuna olan bağlılığımız.',
  alternates: {
    canonical: 'https://padelraketi.com/hakkimizda',
  },
};

export default function HakkimizdaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hakkımızda' },
        ]}
      />

      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Hakkımızda</h1>

      <div className="prose prose-lg prose-gray max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          PadelRaketi.com, Türkiye&apos;nin en kapsamlı padel raket karşılaştırma ve rehber platformudur.
          Amacımız, her seviyedeki oyuncunun doğru raket kararını vermesine yardımcı olmaktır.
        </p>

        <div className="bg-green-50 rounded-2xl p-6 border border-green-100 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-3">Misyonumuz</h2>
          <p className="text-green-700">
            Her padel oyuncusunun, seviyesine ve bütçesine en uygun raketi kolayca bulabilmesi için
            dürüst, bağımsız ve uzman analizler sunmak.
          </p>
        </div>

        <h2>Biz Kimiz?</h2>
        <p>
          PadelRaketi.com ekibi; sertifikalı padel antrenörleri, deneyimli spor gazetecileri ve
          tutkulu padel oyuncularından oluşmaktadır. Ekibimiz toplamda 50 yılı aşkın padel deneyimine
          sahiptir.
        </p>
        <p>
          İçeriklerimiz reklamcılık kaygısıyla değil, gerçek test ve analizlerle oluşturulmaktadır.
          Siteye gelen reklam ve affiliate geliri, ekibimizin bağımsız çalışmasını finanse eder.
        </p>

        <h2>Nasıl Test Ediyoruz?</h2>
        <p>
          Her raket değerlendirmemiz, standart bir metodoloji çerçevesinde yapılmaktadır:
        </p>
        <ol>
          <li><strong>Fiziksel İnceleme:</strong> Raket yapısı, ağırlık, denge ve malzeme analizi</li>
          <li><strong>Saha Testi:</strong> Minimum 10 saatlik aktif oyun testi</li>
          <li><strong>Teknik Analiz:</strong> Güç, kontrol, spin ve konfor ölçümleri</li>
          <li><strong>Karşılaştırma:</strong> Aynı fiyat segmentindeki rakiplerle karşılaştırma</li>
          <li><strong>Kullanıcı Geri Bildirimi:</strong> Gerçek kullanıcı deneyimleri entegrasyonu</li>
        </ol>

        <h2>E-E-A-T Taahhüdümüz</h2>
        <p>
          Google&apos;ın Deneyim, Uzmanlık, Otorite ve Güvenilirlik (E-E-A-T) ilkelerine bağlıyız.
          Bu nedenle:
        </p>
        <ul>
          <li>Tüm içerikler gerçek adlarla imzalanır</li>
          <li>Yazar biyografileri ve uzmanlık alanları şeffaf biçimde paylaşılır</li>
          <li>Affiliate bağlantıları açıkça belirtilir</li>
          <li>Test metodolojimiz kamuoyuyla paylaşılır</li>
        </ul>

        <h2>Ekibimiz</h2>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
        {[
          {
            name: 'Ahmet Yılmaz',
            title: 'Padel Uzmanı & Sertifikalı Antrenör',
            slug: 'ahmet-yilmaz',
            expertise: 'Raket teknolojisi, oyun teknikleri',
          },
          {
            name: 'Selin Kaya',
            title: 'Spor Gazetecisi & Padel Oyuncusu',
            slug: 'selin-kaya',
            expertise: 'Turnuva analizi, ekipman incelemeleri',
          },
        ].map((member) => (
          <Link
            key={member.slug}
            href={`/yazar/${member.slug}`}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.title}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Uzman Alanı: {member.expertise}</p>
          </Link>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Bize Ulaşın</h2>
        <p className="text-gray-600 mb-4">
          Sorularınız, önerileriniz veya iş birliği için bizimle iletişime geçebilirsiniz.
        </p>
        <Link
          href="/iletisim"
          className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-green-700 transition-colors"
        >
          İletişime Geç
        </Link>
      </div>
    </div>
  );
}
