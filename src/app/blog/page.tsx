import type { Metadata } from 'next';
import BlogCard from '@/components/ui/BlogCard';
import Breadcrumb from '@/components/seo/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schemas';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Padel Blog – Rehberler, İncelemeler ve Haberler',
  description:
    'Padel raket seçimi, teknik rehberler, marka incelemeleri ve oyun stratejileri hakkında uzman makaleleri.',
  alternates: {
    canonical: 'https://padelraketi.com/blog',
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Blog', url: '/blog' },
      ])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Blog' },
          ]}
        />

        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Padel Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Raket seçiminden oyun tekniklerine, marka incelemelerinden rehberlere kadar
            her şey burada.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Tümü', 'Rehberler', 'Marka İncelemeleri', 'Teknik', 'Turnuvalar'].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === 'Tümü'
                  ? 'bg-green-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
