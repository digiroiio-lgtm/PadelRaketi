import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import FAQSection from '@/components/ui/FAQSection';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { articleSchema, faqSchema, breadcrumbSchema } from '@/lib/schemas';
import { getBlogPostBySlug, blogPosts } from '@/data/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://padelraketi.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd schema={articleSchema(post)} />
      <JsonLd schema={faqSchema(post.faqs)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: post.title, url: `/blog/${slug}` },
      ])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">{post.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-100">
                <Link href={`/yazar/${post.authorSlug}`} className="flex items-center gap-2 hover:text-green-600 transition-colors">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{post.author.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <span className="font-medium">{post.author}</span>
                </Link>
                <span>·</span>
                <span>{post.readingTime} dakika okuma</span>
                <span>·</span>
                <time dateTime={post.updatedAt}>Güncelleme: {new Date(post.updatedAt).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
            </div>

            {/* Article Image Placeholder */}
            <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl h-64 flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-green-700 font-semibold">{post.category}</p>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-gray max-w-none mb-10">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index} className="font-bold text-gray-800">{paragraph.replace(/\*\*/g, '')}</p>;
                }
                if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                  const items = paragraph.split('\n').filter(l => l.startsWith('- ') || l.startsWith('* '));
                  return (
                    <ul key={index} className="list-disc list-inside space-y-1 my-4">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-600">{item.replace(/^[-*] /, '')}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.includes('|') && paragraph.includes('---')) {
                  return null; // Skip markdown tables for simplicity
                }
                return <p key={index} className="text-gray-600 leading-relaxed">{paragraph}</p>;
              })}
            </div>

            {/* FAQ Section */}
            <FAQSection faqs={post.faqs} title="Sık Sorulan Sorular" />

            {/* Internal Links */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100 mt-8">
              <h3 className="font-bold text-gray-900 mb-4">İlgili Rehberler</h3>
              <div className="space-y-2">
                <Link href="/en-iyi-padel-raketleri" className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  En İyi Padel Raketleri 2026
                </Link>
                <Link href="/padel-raket-fiyatlari" className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Padel Raket Fiyat Karşılaştırması
                </Link>
                <Link href="/baslangic-icin-padel-raketleri" className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Başlangıç İçin Padel Raketleri
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Author Box */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide text-gray-500">Yazar</h3>
              <Link href={`/yazar/${post.authorSlug}`} className="flex items-center gap-3 mb-4 group">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{post.author.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-green-600 transition-colors text-sm">{post.author}</p>
                  <p className="text-xs text-gray-500">Padel Uzmanı</p>
                </div>
              </Link>

              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">İlgili Yazılar</h3>
                <div className="space-y-3">
                  {relatedPosts.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                      <p className="text-sm text-gray-700 group-hover:text-green-600 transition-colors font-medium line-clamp-2">
                        {p.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{p.readingTime} dk</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
