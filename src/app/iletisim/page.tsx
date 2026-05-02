import type { Metadata } from 'next';
import Breadcrumb from '@/components/seo/Breadcrumb';

export const metadata: Metadata = {
  title: 'İletişim – PadelRaketi.com',
  description: 'PadelRaketi.com ile iletişime geçin. Sorularınız, önerileriniz veya iş birliği için buradayız.',
  alternates: {
    canonical: 'https://padelraketi.com/iletisim',
  },
};

export default function IletisimPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'İletişim' },
        ]}
      />

      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">İletişim</h1>
      <p className="text-xl text-gray-600 mb-10">
        Sorularınız, önerileriniz veya iş birliği teklifleriniz için aşağıdaki formu
        kullanabilir ya da direkt email ile ulaşabilirsiniz.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Mesaj Gönderin</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Adınız
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Konu
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Konu seçin</option>
                <option value="genel">Genel Soru</option>
                <option value="icerik">İçerik Önerisi</option>
                <option value="isbirligi">İş Birliği</option>
                <option value="duzeltme">Hata Bildirimi</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder="Mesajınızı buraya yazın..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <h3 className="font-bold text-gray-900 mb-3">📧 E-posta</h3>
            <a
              href="mailto:info@padelraketi.com"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              info@padelraketi.com
            </a>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="font-bold text-gray-900 mb-3">📱 Sosyal Medya</h3>
            <div className="space-y-2">
              <a
                href="https://instagram.com/padelraketi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Instagram: @padelraketi
              </a>
              <a
                href="https://twitter.com/padelraketi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Twitter/X: @padelraketi
              </a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">⏰ Yanıt Süresi</h3>
            <p className="text-sm text-gray-600">
              Mesajlarınıza genellikle 1-2 iş günü içinde yanıt veriyoruz.
            </p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
            <h3 className="font-bold text-gray-900 mb-3">🤝 İş Birliği</h3>
            <p className="text-sm text-gray-600 mb-3">
              Marka iş birlikleri, ürün incelemeleri ve reklam için iletişime geçin.
            </p>
            <a
              href="mailto:isbirligi@padelraketi.com"
              className="text-sm font-medium text-orange-600 hover:text-orange-700"
            >
              isbirligi@padelraketi.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
