import type { Metadata } from 'next';
import Breadcrumb from '@/components/seo/Breadcrumb';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası – PadelRaketi.com',
  description: 'PadelRaketi.com gizlilik politikası. Kişisel verilerinizin nasıl toplandığını ve kullanıldığını öğrenin.',
  alternates: {
    canonical: 'https://padelraketi.com/gizlilik-politikasi',
  },
};

export default function GizlilikPolitikasiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Gizlilik Politikası' },
        ]}
      />

      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Gizlilik Politikası</h1>
      <p className="text-gray-500 mb-8">Son güncelleme: 1 Ocak 2026</p>

      <div className="prose prose-lg prose-gray max-w-none">
        <h2>1. Giriş</h2>
        <p>
          PadelRaketi.com (&quot;biz&quot;, &quot;bizim&quot;) olarak gizliliğinize önem veriyoruz.
          Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde hangi bilgileri topladığımızı,
          bu bilgileri nasıl kullandığımızı ve haklarınızı açıklamaktadır.
        </p>

        <h2>2. Toplanan Bilgiler</h2>
        <h3>2.1 Otomatik Olarak Toplanan Bilgiler</h3>
        <p>Sitemizi ziyaret ettiğinizde aşağıdaki bilgiler otomatik olarak toplanabilir:</p>
        <ul>
          <li>IP adresi (anonimleştirilmiş)</li>
          <li>Tarayıcı türü ve versiyonu</li>
          <li>Ziyaret edilen sayfalar</li>
          <li>Siteye geliş kaynağı (referrer)</li>
          <li>Ziyaret süresi ve tarih/saat bilgisi</li>
        </ul>

        <h3>2.2 İletişim Formu</h3>
        <p>
          İletişim formunu doldurduğunuzda adınız, e-posta adresiniz ve mesajınız toplanır.
          Bu bilgiler yalnızca yanıt vermek amacıyla kullanılır.
        </p>

        <h2>3. Çerezler (Cookies)</h2>
        <p>
          Sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır:
        </p>
        <ul>
          <li><strong>Zorunlu Çerezler:</strong> Sitenin düzgün çalışması için gereklidir</li>
          <li><strong>Analitik Çerezler:</strong> Google Analytics aracılığıyla kullanım istatistikleri</li>
          <li><strong>Pazarlama Çerezleri:</strong> Reklam kişiselleştirme (opsiyonel)</li>
        </ul>

        <h2>4. Google Analytics</h2>
        <p>
          Sitemizde Google Analytics 4 kullanılmaktadır. Bu hizmet anonim kullanım verilerini
          toplar. IP adresleri anonimleştirilmektedir.
        </p>

        <h2>5. Affiliate Bağlantıları</h2>
        <p>
          Sitemizde affiliate (ortaklık) bağlantıları bulunmaktadır. Bu bağlantılar üzerinden
          yapılan alışverişlerden komisyon kazanabiliriz. Bu durum ürün inceleme bağımsızlığımızı
          etkilememektedir.
        </p>

        <h2>6. Üçüncü Taraf Hizmetler</h2>
        <p>Sitemiz aşağıdaki üçüncü taraf hizmetleri kullanmaktadır:</p>
        <ul>
          <li>Google Analytics (analitik)</li>
          <li>Google Search Console (SEO)</li>
          <li>Amazon Associates (affiliate)</li>
        </ul>

        <h2>7. Haklarınız</h2>
        <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
        <ul>
          <li>Kişisel verilerinize erişim hakkı</li>
          <li>Düzeltme talep etme hakkı</li>
          <li>Silme talep etme hakkı</li>
          <li>İşlemeye itiraz etme hakkı</li>
          <li>Veri taşınabilirliği hakkı</li>
        </ul>

        <h2>8. İletişim</h2>
        <p>
          Gizlilik konularında sorularınız için:{' '}
          <a href="mailto:gizlilik@padelraketi.com">gizlilik@padelraketi.com</a>
        </p>

        <h2>9. Güncellemeler</h2>
        <p>
          Bu politika gerektiğinde güncellenebilir. Önemli değişikliklerde sizi e-posta ile
          bilgilendirmeye çalışırız.
        </p>
      </div>
    </div>
  );
}
