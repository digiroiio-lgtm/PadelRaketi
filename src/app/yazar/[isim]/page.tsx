import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/seo/Breadcrumb';
import BlogCard from '@/components/ui/BlogCard';
import { getAuthorBySlug, blogPosts, authors } from '@/data/blog';

interface Props {
  params: Promise<{ isim: string }>;
}

export async function generateStaticParams() {
  return authors.map((a) => ({ isim: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { isim } = await params;
  const author = getAuthorBySlug(isim);
  if (!author) return {};

  return {
    title: `${author.name} – ${author.title} | PadelRaketi.com`,
    description: author.bio.slice(0, 160),
    alternates: {
      canonical: `https://padelraketi.com/yazar/${isim}`,
    },
  };
}

export default async function YazarPage({ params }: Props) {
  const { isim } = await params;
  const author = getAuthorBySlug(isim);

  if (!author) notFound();

  const authorPosts = blogPosts.filter((p) => p.authorSlug === isim);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Yazarlar', href: '/hakkimizda' },
          { label: author.name },
        ]}
      />

      {/* Author Profile */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-3xl">
              {author.name.split(' ').map((n) => n[0]).join('')}
            </span>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">{author.name}</h1>
            <p className="text-green-600 font-semibold mb-4">{author.title}</p>
            <p className="text-gray-600 leading-relaxed max-w-2xl">{author.bio}</p>

            <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
              {author.expertise.map((exp) => (
                <span key={exp} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                  {exp}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-4 justify-center sm:justify-start">
              {author.socialLinks.twitter && (
                <a
                  href={author.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Twitter
                </a>
              )}
              {author.socialLinks.instagram && (
                <a
                  href={author.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                >
                  Instagram
                </a>
              )}
              {author.socialLinks.linkedin && (
                <a
                  href={author.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-700 transition-colors"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Author Articles */}
      {authorPosts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {author.name} Tarafından Yazılar ({authorPosts.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {authorPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}

      {authorPosts.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          <p>Bu yazara ait makale bulunamadı.</p>
          <Link href="/blog" className="mt-4 inline-flex text-green-600 font-semibold">
            Tüm Makalelere Bak →
          </Link>
        </div>
      )}
    </div>
  );
}
