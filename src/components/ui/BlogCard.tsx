import Link from 'next/link';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden group">
      {/* Image */}
      <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-2">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">{post.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-gray-500">{post.author}</span>
          <span className="text-gray-300">·</span>
          <span className="text-xs text-gray-500">{post.readingTime} dk okuma</span>
        </div>

        <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1"
        >
          Devamını Oku
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
