import type { Metadata } from 'next';
import Breadcrumb from '@/components/seo/Breadcrumb';

export const metadata: Metadata = {
  title: 'Kullanım Şartları – PadelRaketi.com',
  description: 'PadelRaketi.com kullanım şartları ve koşulları.',
  alternates: {
    canonical: 'https://padelraketi.com/kullanim-sartlari',
  },
};

export default function KullanimSartlariPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Kullanım Şartları' },
        ]}
      />

      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Kullanım Şartları</h1>
      <p className="text-gray-500 mb-8">Son güncelleme: 1 Ocak 2026</p>

      <div className="prose prose-lg prose-gray max-w-none">
        <h2>1. Kabul</h2>
        <p>
          PadelRaketi.com web sitesini kullanarak aşağıdaki kullanım şartlarını kabul etmiş
          sayılırsınız. Bu şartları kabul etmiyorsanız siteyi kullanmayınız.
        </p>

        <h2>2. Hizmet Tanımı</h2>
        <p>
          PadelRaketi.com, padel raketleri hakkında bilgi, karşılaştırma ve satın alma
          rehberleri sunan bir içerik platformudur. Doğrudan ürün satışı yapmamaktayız.
        </p>

        <h2>3. Fikri Mülkiyet</h2>
        <p>
          Sitedeki tüm içerik (metin, görseller, şemalar) PadelRaketi.com&apos;a aittir ve
          Türk Fikir ve Sanat Eserleri Kanunu kapsamında korunmaktadır. İzinsiz kullanım
          yasaktır.
        </p>

        <h2>4. Sorumluluk Reddi</h2>
        <p>
          Sitemizdeki bilgiler bilgilendirme amaçlı sunulmaktadır. Ürün fiyatları ve stok
          durumu değişkenlik gösterebilir. Satın alma kararından önce satıcı sitesini
          kontrol etmenizi öneririz.
        </p>

        <h2>5. Affiliate Beyanı</h2>
        <p>
          Sitemiz, çeşitli e-ticaret platformlarının affiliate programlarına katılmaktadır.
          Sitemizdeki bazı linkler üzerinden alışveriş yapılması durumunda komisyon
          kazanabiliriz. Bu bağlantılar açıkça işaretlenmektedir.
        </p>

        <h2>6. Değişiklikler</h2>
        <p>
          Bu kullanım şartlarını herhangi bir zamanda değiştirme hakkını saklı tutarız.
          Değişiklikler siteye yayınlandığı anda yürürlüğe girer.
        </p>

        <h2>7. Uygulanacak Hukuk</h2>
        <p>Bu şartlar Türk hukukuna göre yorumlanır ve uygulanır.</p>

        <h2>8. İletişim</h2>
        <p>
          Kullanım şartlarına ilişkin sorularınız için:{' '}
          <a href="mailto:hukuk@padelraketi.com">hukuk@padelraketi.com</a>
        </p>
      </div>
    </div>
  );
}
