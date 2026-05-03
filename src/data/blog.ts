import { BlogPost, Author } from '@/types';

export const authors: Author[] = [
  {
    slug: 'ahmet-yilmaz',
    name: 'Ahmet Yılmaz',
    title: 'Padel Uzmanı & Sertifikalı Antrenör',
    bio: 'Ahmet Yılmaz, 12 yıllık padel deneyimiyle Türkiye\'nin önde gelen padel uzmanlarından biridir. ITF sertifikalı antrenör olarak birçok ulusal turnuvaya katılmış ve 500\'den fazla öğrenci yetiştirmiştir. Raket teknolojileri ve oyun teknikleri konusunda uzmanlaşmıştır.',
    image: '/images/authors/ahmet-yilmaz.jpg',
    expertise: ['Raket Teknolojisi', 'Oyun Teknikleri', 'Ekipman Seçimi', 'Başlangıç Eğitimi'],
    socialLinks: {
      twitter: 'https://twitter.com/ahmetyilmazpadel',
      instagram: 'https://instagram.com/ahmetyilmazpadel',
    },
  },
  {
    slug: 'selin-kaya',
    name: 'Selin Kaya',
    title: 'Spor Gazetecisi & Padel Oyuncusu',
    bio: 'Selin Kaya, 8 yıldır spor gazeteciliği yapan ve padel tutkusunu yazılarına yansıtan bir içerik üreticisidir. Uluslararası turnuvaları takip etmiş, dünya sıralamalarındaki oyuncularla röportajlar yapmıştır.',
    image: '/images/authors/selin-kaya.jpg',
    expertise: ['Turnuva Analizi', 'Ekipman İncelemeleri', 'Oyuncu Profilleri'],
    socialLinks: {
      twitter: 'https://twitter.com/selinkayapadel',
      linkedin: 'https://linkedin.com/in/selinkaya',
    },
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'padel-raketi-nasil-secilir',
    title: 'Padel Raketi Nasıl Seçilir? 2026 Kapsamlı Rehber',
    description:
      'Doğru padel raketini seçmek oyununuzu dönüştürebilir. Ağırlık, denge, şekil ve malzeme konularında bilmeniz gereken her şeyi bu rehberde bulabilirsiniz.',
    author: 'Ahmet Yılmaz',
    authorSlug: 'ahmet-yilmaz',
    publishedAt: '2026-01-10',
    updatedAt: '2026-04-15',
    image: '/images/blog/padel-raketi-nasil-secilir.jpg',
    tags: ['raket seçimi', 'rehber', 'başlangıç'],
    category: 'Rehberler',
    readingTime: 8,
    faqs: [
      {
        question: 'Kaç gramı olan raket başlangıç için uygundur?',
        answer:
          '355-370 gram arası raketler başlangıç için idealdir. Çok ağır raketler yorgunluğa, çok hafifler ise yetersiz güce yol açabilir.',
      },
      {
        question: 'Yuvarlak mu elmas şekil mi seçmeliyim?',
        answer:
          'Başlangıç ve orta seviye oyuncular yuvarlak veya damla şekli tercih etmelidir. Elmas şekil daha fazla güç ama daha az af verme özelliği sunar, genellikle ileri seviye oyuncular için önerilir.',
      },
      {
        question: 'Düşük denge mi yüksek denge mi?',
        answer:
          'Düşük denge (300mm altı): Daha fazla kontrol, başlangıç ve kontrol oyuncuları için. Orta denge (300-310mm): En iyi denge noktası. Yüksek denge (310mm üstü): Daha fazla güç, saldırgan oyuncular için.',
      },
      {
        question: 'Fiberglas mı karbon mu tercih edilmeli?',
        answer:
          'Fiberglas: Daha esnek, daha fazla af verme, daha uygun fiyat. Karbon: Daha sert, daha fazla güç ve spin, daha yüksek fiyat. Başlangıç için fiberglas, ileri seviye için karbon önerilir.',
      },
      {
        question: 'İlk raketem için ne kadar bütçe ayırmalıyım?',
        answer:
          'İlk raket için 1.000-2.000 TL arası bir bütçe mantıklıdır. Bu aralıkta kaliteli başlangıç ve orta seviye raketler bulabilirsiniz. Spora devam kararı verdikten sonra daha kaliteli bir rakete yatırım yapabilirsiniz.',
      },
    ],
    content: `## Doğru Raket Seçiminin Önemi

Padel raketiniz oyununuzun en kritik bileşenidir. Yanlış raket seçimi, gelişiminizi yavaşlatabilir, sakatlanma riskini artırabilir ve spordan aldığınız zevki azaltabilir. Bu kapsamlı rehberde, doğru padel raketini seçmeniz için bilmeniz gereken her şeyi bulacaksınız.

## 1. Ağırlık: En Kritik Faktör

Padel raketleri genellikle 340-390 gram arasında bulunur. Ağırlık seçimi, oyun stilinize ve fiziksel durumunuza göre yapılmalıdır.

**340-360 gram:** Çok hafif raketler. Hız ve manevra kabiliyeti yüksek, ancak güç düşük. Küçük yapılı oyuncular veya bilek sorunları olanlar için ideal.

**360-375 gram:** Orta ağırlık aralığı. Çoğu oyuncu için ideal denge noktasıdır.

**375-390 gram:** Ağır raketler. Daha fazla güç sağlar ama yorgunluğa yol açabilir. Güçlü fiziksel yapıya sahip oyuncular için uygundur.

## 2. Denge Noktası: Kontrol vs Güç

Denge noktası, raketin nasıl hissettirdiğini ve hangi oyun stiline uyduğunu belirler.

**Düşük Denge (Ortalama altı):** Raket ağırlığı kol tarafında yoğunlaşır. Kontrol artarken güç azalır. Defansif oyuncular ve başlangıç seviyesi için önerilir.

**Orta Denge:** En dengeli seçenek. Hem kontrol hem güç açısından iyi bir performans sağlar.

**Yüksek Denge (Ortalama üstü):** Raket ağırlığı kafa tarafında yoğunlaşır. Güç artarken kontrol zorlaşır. Saldırgan oyun stiline sahip ileri seviye oyuncular için idealdir.

## 3. Raket Şekli

### Yuvarlak Şekil
- Geniş tatlı nokta
- Daha fazla af verme özelliği
- Kontrol odaklı
- Başlangıç ve orta seviye için ideal

### Damla (Teardrop) Şekil
- Orta büyüklükte tatlı nokta
- Kontrol ve güç dengesi
- Orta ve ileri seviye için uygun

### Elmas Şekil
- Küçük tatlı nokta
- Maksimum güç
- Spin kapasitesi yüksek
- Profesyonel ve ileri seviye için

## 4. Malzeme Seçimi

### Yüzey Malzemesi

**Fiberglas:** Esnek yapısıyla topu daha iyi hissettirmenizi sağlar. Daha affedici ve konforlu. Başlangıç ve orta seviye için önerilen malzeme.

**Karbon Fiber:** Sert yapısıyla güç ve spin kapasitesini artırır. Daha hassas vuruş noktası gerektirir. İleri seviye ve profesyonel oyuncular için.

**Hibrit (Karbon + Fiberglas):** İki malzemenin avantajlarını birleştirir. Orta-ileri seviye için iyi bir seçenek.

### İç Dolgu Malzemesi

**EVA Foam:** Yüksek yoğunluklu poliüretan köpük. Sert, daha fazla güç.

**Memory Foam:** Yumuşak ve konforlu. Titreşim emme özelliği yüksek.

**FOAM:** Genel köpük dolgu. Denge amaçlı.

## 5. Raket Seçiminde Seviye Rehberi

### Başlangıç Seviyesi
- Yuvarlak şekil tercih edin
- Düşük veya orta denge
- Fiberglas yüzey
- 355-370 gram
- Bütçe: 1.000-2.000 TL

**Öneriler:** Head Zephyr, Dunlop Boost, Babolat Air Viper

### Orta Seviye (6-18 ay deneyim)
- Damla veya yuvarlak şekil
- Orta denge
- Fiberglas veya hibrit
- 360-375 gram
- Bütçe: 2.000-3.500 TL

**Öneriler:** Nox ML10 Pro Cup, Babolat Air Viper, Head Alpha

### İleri Seviye (2+ yıl deneyim)
- Damla veya elmas şekil
- Orta veya yüksek denge
- Karbon fiber
- 360-380 gram
- Bütçe: 3.000-5.000 TL

**Öneriler:** Wilson Blade V3, Bullpadel Vertex, Nox AT10

### Profesyonel
- Elmas şekil genellikle tercih edilir
- Yüksek denge
- Premium karbon (12K, 18K)
- 355-375 gram
- Bütçe: 4.000 TL üstü

**Öneriler:** Adidas Metalbone 3.3, Wilson Bela Pro

## 6. Tutuş ve Grip

Tutuş boyutu önemlidir. Çok ince grip bilek sorunlarına, çok kalın grip ise kontrol kaybına yol açabilir. Standart grip boyutu çoğu oyuncu için uygundur.

## Sonuç

Doğru padel raketi seçimi kişisel ve oyun stilinize göre değişir. Mümkünse farklı raketleri deneyip hangisinin size en iyi hissettirdiğini bulun. Başlangıçta aşırı pahalı raketlere yatırım yapmak yerine, seviyenize uygun bir raketle başlayın ve gelişiminizle birlikte daha gelişmiş raketlere geçin.`,
  },
  {
    slug: 'baslangic-vs-profesyonel-padel-raketi-farki',
    title: 'Başlangıç vs Profesyonel Padel Raketi Farkı – Hangisi Size Uygun?',
    description:
      'Başlangıç ve profesyonel padel raketleri arasındaki farkları, fiyat, teknoloji ve performans açısından karşılaştırıyoruz.',
    author: 'Ahmet Yılmaz',
    authorSlug: 'ahmet-yilmaz',
    publishedAt: '2026-01-25',
    updatedAt: '2026-04-20',
    image: '/images/blog/baslangic-vs-profesyonel.jpg',
    tags: ['başlangıç', 'profesyonel', 'karşılaştırma'],
    category: 'Rehberler',
    readingTime: 6,
    faqs: [
      {
        question: 'Başlangıç raketi ile profesyonel raket arasındaki fiyat farkı ne kadar?',
        answer:
          'Başlangıç raketleri 800-2.000 TL arasında, profesyonel raketler ise 3.500-6.000 TL arasında bulunur. Fiyat farkı malzeme ve teknoloji kalitesinden kaynaklanır.',
      },
      {
        question: 'Başlangıçta pahalı raket almak mantıklı mı?',
        answer:
          'Hayır, değil. Başlangıçta teknik doğru düzgün oturmamışken pahalı raket fayda sağlamaz. Seviyenize uygun bir raket alıp temel teknikleri öğrendikten sonra upgrade yapmanız daha mantıklıdır.',
      },
      {
        question: 'Karbon raket başlangıç için uygun mu?',
        answer:
          'Genellikle hayır. Karbon raketler sert ve affetmez. Başlangıçta daha esnek fiberglas raket teknik geliştirmenize yardımcı olur. Ancak fiyat farkı önemsiz ise karbon-fiberglas hibrit bir raket tercih edilebilir.',
      },
      {
        question: 'Ne zaman profesyonel rakete geçilmeli?',
        answer:
          'En az 1-2 yıl düzenli oynamak ve orta-ileri seviyeye ulaşmak gerekir. Eğer tekniğiniz iyi ama raketinizin sizi sınırladığını hissediyorsanız, profesyonel rakete geçme zamanı gelmiş demektir.',
      },
      {
        question: 'Profesyonel oyuncuların kullandığı raketler herkese uyar mı?',
        answer:
          'Hayır. Profesyonel oyuncuların tercihleri seviyeye özgüdür. Orta seviye bir oyuncunun profesyonel raket kullanması kontrolü zorlaştırır ve hatalı alışkanlıklara yol açabilir.',
      },
    ],
    content: `## Giriş

Padel dünyasına ilk adımınızı atarken veya gelişiminize göre raket seçerken, başlangıç ve profesyonel raketler arasındaki farkları anlamak kritik öneme sahiptir. Bu karşılaştırma rehberi, doğru karar vermenize yardımcı olacak.

## Temel Farklar

### Malzeme Kalitesi

**Başlangıç Raketleri:** Genellikle fiberglas yüzey ve standart foam dolgu içerir. Bu kombinezon daha affedici bir vuruş yüzeyi yaratır.

**Profesyonel Raketler:** 12K, 18K veya 24K karbon fiber yüzey kullanır. Bu materyaller daha sert yapı, artırılmış güç ve üstün spin kapasitesi sağlar.

### Şekil Tercihi

**Başlangıç:** Çoğunlukla yuvarlak şekil, orta veya düşük denge. Geniş tatlı nokta sayesinde afçı niteliği yüksektir.

**Profesyonel:** Genellikle elmas veya damla şekli, orta veya yüksek denge. Küçük ama güçlü vuruş bölgesi.

### Ağırlık ve Denge

Başlangıç raketleri genellikle daha hafif (350-365g) olup bilek ve omzu daha az zorlar.

Profesyonel raketlerin bazıları daha ağır (365-385g) olabilir, ancak bazı modeller hafif karbon yapısıyla 355g'a kadar inebilir.

### Fiyat

- **Başlangıç:** 800 – 2.000 TL
- **Orta Seviye:** 2.000 – 3.500 TL
- **İleri Seviye:** 3.500 – 5.000 TL
- **Profesyonel:** 5.000 TL+

## Hangi Seviyede Hangi Raket?

### Yeni Başlayanlar (0-6 Ay)

Yeni başlayanlar için en önemli özellikler: geniş tatlı nokta ve affedici yapı.

Önerilen özellikler:
- Yuvarlak şekil
- Fiberglas yüzey
- Düşük veya orta denge
- 350-370 gram

### Gelişen Oyuncular (6-18 Ay)

Artık bazı teknikler oturmuştur. Biraz daha güç ve spin kapasitesi arayışına girebilirsiniz.

Önerilen özellikler:
- Damla şekil
- Fiberglas veya hibrit
- Orta denge

### İleri Seviye (18 Ay+)

Teknik artık yerleşmiştir. Maksimum performansı raketinizden çıkarmak istiyorsunuz.

Önerilen özellikler:
- Elmas veya damla şekil
- Karbon fiber
- Tercihlerinize göre denge

## Sonuç: Seviyenize Uygun Yatırım Yapın

Padelde "daha pahalı = daha iyi" kuralı geçerli değildir. Seviyenize uygun olmayan bir raket, oyununuzu geliştirir değil kısıtlar. Önce tekniği öğrenin, sonra teknolojiye yatırım yapın.`,
  },
  {
    slug: 'en-iyi-padel-markalari-wilson-adidas-nox',
    title: 'En İyi Padel Markaları – Wilson, Adidas, Nox Karşılaştırması',
    description:
      'Dünya genelinde en popüler padel markaları olan Wilson, Adidas ve Nox\'u detaylı biçimde karşılaştırıyoruz.',
    author: 'Selin Kaya',
    authorSlug: 'selin-kaya',
    publishedAt: '2026-02-05',
    updatedAt: '2026-04-22',
    image: '/images/blog/padel-markalari.jpg',
    tags: ['markalar', 'Wilson', 'Adidas', 'Nox', 'karşılaştırma'],
    category: 'Marka İncelemeleri',
    readingTime: 7,
    faqs: [
      {
        question: 'Wilson ve Adidas padel raketleri arasında hangisi daha iyi?',
        answer:
          'Her iki marka da üst düzey kalite sunar. Wilson özellikle kontrol ve teknik oyun için, Adidas ise Metalbone serisiyle maksimum güç arayanlar için tercih edilir. Seçim kişisel oyun stiline göre yapılmalıdır.',
      },
      {
        question: 'Nox raketleri iyi mi?',
        answer:
          'Nox, özellikle fiyat-performans dengesi açısından mükemmeldir. Özellikle orta ve ileri seviye oyuncular için çok iyi seçenekler sunar. ML10 Pro Cup serisi büyük popülerlik kazanmıştır.',
      },
      {
        question: 'Türkiye\'de en çok hangi marka tercih ediliyor?',
        answer:
          'Türkiye\'de Wilson ve Head en yaygın markalar arasındadır. Fiyat-performans açısından ise Nox ve Bullpadel popülerlik kazanmaktadır.',
      },
      {
        question: 'Hangi marka başlangıç için en uygun?',
        answer:
          'Head ve Babolat, geniş başlangıç raket yelpazesiyle öne çıkar. Uygun fiyatlı ve affedici modelleri başlangıç için idealdir.',
      },
      {
        question: 'Marka seçimi mi raket özellikleri mi daha önemli?',
        answer:
          'Raket özellikleri her zaman markadan daha önemlidir. Markanın prestiji yerine ağırlık, denge, şekil ve seviyenize uygunluk kriterlerine göre karar verin.',
      },
    ],
    content: `## Padel Dünyasının Dev Markaları

Padel sporu dünya genelinde büyürken, raket üreticileri de teknoloji yarışında birbirini geçmeye çalışıyor. Bu yazıda üç önemli markayı - Wilson, Adidas ve Nox - detaylı şekilde inceliyoruz.

## Wilson Padel

### Tarihçe ve Kimlik

Tenis dünyasının efsanevi markası Wilson, padel sporununa geç de olsa ciddi bir yatırımla girdi. Tenis teknolojisindeki birikimini padle raketlerine taşıyan Wilson, kısa sürede üst düzey bir konuma geldi.

### Öne Çıkan Özellikler

- **Karbon Fiber Teknolojisi:** Premium karbon kullanımı
- **Tasarım:** Klasik ve şık görünüm
- **Serileri:** Blade, Bela Pro, Ultra

### Wilson Blade V3

Wilson'ın amiral gemisi modelidir. Orta-yüksek denge, karbon yüzey ve 365g ağırlığıyla ileri seviye oyuncular için mükemmeldir.

**Fiyat Aralığı:** 1.500 – 4.000 TL

## Adidas Padel

### Metalbone Efsanesi

Adidas, Metalbone serisiyle padel dünyasının tartışmasız en tanınan markalarından biri haline geldi. Fernando Belasteguin başta olmak üzere dünya sıralamasının zirvesindeki oyuncuların tercihi Adidas oldu.

### Öne Çıkan Özellikler

- **12K Karbon Fiber:** Piyasanın en gelişmiş karbon teknolojisi
- **Yaratıcı Tasarım:** Dikkat çekici estetik
- **Geniş Yelpaze:** Her seviyeye uygun modeller

### Adidas Metalbone 3.3

Dünya çapında satış rekoru kıran bu model, 12K karbon fiber yüzeyiyle maksimum güç ve spin sunar. Ancak yalnızca ileri seviye oyuncular için önerilir.

**Fiyat Aralığı:** 1.800 – 5.500 TL

## Nox Padel

### İspanya'nın Gizli Silahı

İspanyol padel markası Nox, dünya sıralamasının önde gelen oyuncularıyla imzaladığı anlaşmalarla hızla büyüdü. Miguel Lamperti ile geliştirilen ML serisi, fiyat-performans dengesinde rakipsizdir.

### Öne Çıkan Özellikler

- **Fiyat-Performans:** Kaliteyi uygun fiyata sunar
- **Geniş Yelpage:** Başlangıçtan profesyonele her seviye
- **Spin Kapasitesi:** Özellikle üst serilerde mükemmel

### Nox ML10 Pro Cup

Nox'un en popüler modeli, 203 değerlendirmeyle güçlü bir kullanıcı kitlesine sahip. Orta denge ve yuvarlak şekliyle affedici ve çok yönlüdür.

**Fiyat Aralığı:** 1.200 – 4.500 TL

## Karşılaştırma Tablosu

| Kriter | Wilson | Adidas | Nox |
|--------|--------|--------|-----|
| Fiyat | ✦✦✦ | ✦✦✦✦ | ✦✦ |
| Teknoloji | ✦✦✦✦ | ✦✦✦✦✦ | ✦✦✦✦ |
| Başlangıç | ✦✦✦ | ✦✦✦ | ✦✦✦✦ |
| Profesyonel | ✦✦✦✦ | ✦✦✦✦✦ | ✦✦✦✦ |
| Dağıtım (TR) | ✦✦✦ | ✦✦✦ | ✦✦✦ |

## Sonuç

Her üç marka da kaliteli ürünler sunar. Seçiminizi yaparken marka prestijinden çok kendi seviyenize ve oyun stilinize uygunluk kriterlerine göre karar verin. Bütçeniz izin veriyorsa deneme fırsatı yaratın; birkaç farklı raketi denedikten sonra kendi hissiyatınıza göre karar vermek en doğrusudur.`,
  },
  {
    slug: 'padel-raketi-agirlik-denge-kontrol-guc-rehberi',
    title: 'Padel Raketinde Ağırlık, Denge, Kontrol ve Güç Rehberi',
    description:
      'Padel raketinin teknik özelliklerini derinlemesine anlayın: ağırlık, denge noktası, kontrol ve güç nasıl seçilir?',
    author: 'Ahmet Yılmaz',
    authorSlug: 'ahmet-yilmaz',
    publishedAt: '2026-02-20',
    updatedAt: '2026-04-25',
    image: '/images/blog/agirlik-denge-rehberi.jpg',
    tags: ['ağırlık', 'denge', 'kontrol', 'güç', 'teknik'],
    category: 'Teknik',
    readingTime: 9,
    faqs: [
      {
        question: 'Hafif raket mi ağır raket mi daha iyi?',
        answer:
          'Bu tamamen oyun stilinize ve fiziksel yapınıza bağlıdır. Hafif raketler (350-365g) kontrol ve hız sağlarken, ağır raketler (375-390g) daha fazla güç üretir. Başlangıç için orta ağırlık (360-375g) en güvenli seçimdir.',
      },
      {
        question: 'Raket dengesi nasıl hesaplanır?',
        answer:
          'Denge noktası, raketin tutma noktasından kafa tarafına olan mesafe ile ölçülür. Bu değer raket uzunluğunun yarısından az ise düşük denge, fazla ise yüksek dengedir.',
      },
      {
        question: 'Kontrol raketi mi güç raketi mi seçmeliyim?',
        answer:
          'Başlangıç ve orta seviyede kontrol raketi tercih edilmelidir. İleri seviyede güç ve kontrol arasındaki dengeyi kendi oyun stilinize göre belirleyin.',
      },
      {
        question: 'Bilek ağrıları için hangi raket özellikleri önemlidir?',
        answer:
          'Bilek ağrıları için hafif ağırlık (350-365g), düşük denge ve memory foam dolgu tercih edilmelidir. Fiberglas yüzey titreşim emme özelliğiyle ağrıyı azaltır.',
      },
      {
        question: 'Raket ağırlığı eklenerek artırılabilir mi?',
        answer:
          'Evet, kurşun bant ekleyerek ağırlık artırılabilir. Ancak bu işlem denge noktasını da etkiler. Profesyonel yardım almadan bu değişikliği yapmamak tavsiye edilir.',
      },
    ],
    content: `## Raket Tekniğini Anlamak

Padel raketinizin teknik özelliklerini anlamak, doğru seçim yapmanızı kolaylaştırır ve oyununuzun gelişimine katkı sağlar. Bu rehberde ağırlık, denge, kontrol ve güç kavramlarını derinlemesine inceliyoruz.

## Ağırlık Analizi

### Gram Aralıkları ve Etkileri

Standart bir padel raketi 340-390 gram arasında değişir. Her gram aralığının farklı bir profili vardır:

**340-355 gram (Çok Hafif):**
- Hızlı bilek hareketi
- Daha az güç
- Yorulma riski düşük
- Küçük yapılı veya genç oyuncular için

**355-370 gram (Hafif-Orta):**
- Kontrol dostu
- Manevra kabiliyeti yüksek
- Başlangıç ve orta seviye için ideal

**370-380 gram (Orta-Ağır):**
- Güç ve kontrol dengesi
- İleri seviye için uygun

**380-390 gram (Ağır):**
- Maksimum güç
- Deneyimli ve güçlü oyuncular için
- Yorgunluk riski yüksek

## Denge Noktası: Oyunun DNA'sı

Denge noktası belki de en önemli teknik faktördür. Raketin nasıl hissettireceğini bu değer belirler.

### Düşük Denge (Baş Hafif)

Ağırlık tutma koluna doğru yoğunlaşır. Raket manevra kabiliyeti yüksek ve kontrol odaklıdır.

**Avantajlar:**
- Hızlı bilek reaksiyonu
- Daha fazla kontrol
- Uzun rallilerde daha az yorgunluk
- Savunma oyunu için ideal

### Orta Denge

En dengeli yapı. Her iki taraftaki oyun için de güçlüdür.

**Avantajlar:**
- Güç ve kontrol dengesi
- Çok yönlü oyun
- Çoğu oyuncu için ideal

### Yüksek Denge (Baş Ağır)

Ağırlık kafa tarafına doğru yoğunlaşır. Swing momentumu artar.

**Avantajlar:**
- Maksimum güç
- Smash ve volé için ideal
- Saldırgan oyun için

## Kontrol Faktörü

Kontrol; topu istediğiniz yere, istediğiniz hızda gönderebilme kapasitesidir.

### Kontrolü Artıran Faktörler

1. **Düşük veya orta denge:** Raket daha tahmin edilebilir davranır
2. **Yuvarlak veya damla şekil:** Geniş tatlı nokta hataları azaltır
3. **Fiberglas veya hibrit yüzey:** Topa daha uzun temas süresi
4. **Orta ağırlık:** Yorulmadan uzun süre oynama imkanı

## Güç Faktörü

Güç; aynı swing hızında topu daha hızlı ve uzağa gönderebilme kapasitesidir.

### Gücü Artıran Faktörler

1. **Yüksek denge:** Swing momentumu
2. **Elmas şekil:** Tatlı nokta küçük ama güçlü
3. **Karbon fiber yüzey:** Sert yapı enerji transferini artırır
4. **Ağır raket:** Doğal ağırlık katkısı

## Spin Kapasitesi

Spin, modern padelin en kritik unsurlarından biridir.

**Spin için ideal özellikler:**
- Kaba yüzey dokusu
- Karbon fiber
- Elmas veya damla şekil
- Yüksek veya orta denge

## Sonuç ve Öneri Matrisi

| Oyun Stili | Ağırlık | Denge | Şekil | Yüzey |
|------------|---------|-------|-------|-------|
| Başlangıç | 355-370g | Düşük | Yuvarlak | Fiberglas |
| Kontrol | 360-375g | Düşük-Orta | Damla | Hibrit |
| Denge | 365-375g | Orta | Damla | Karbon |
| Güç | 370-385g | Yüksek | Elmas | Karbon |
| Savunma | 355-370g | Düşük | Yuvarlak | Fiberglas |

Teknik özellikler önemli olsa da en iyi raket elinizdeki hissettirdiği raket. Mümkünse deneme fırsatı yaratın.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
