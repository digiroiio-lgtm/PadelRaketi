import Link from 'next/link';

const navLinks = [
  { href: '/padel-raketleri', label: 'Raketler' },
  { href: '/en-iyi-padel-raketleri', label: 'En İyiler' },
  { href: '/padel-raket-fiyatlari', label: 'Fiyatlar' },
  { href: '/padel-raket-karsilastirma', label: 'Karşılaştır' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PR</span>
            </div>
            <span className="font-bold text-xl text-gray-900">
              Padel<span className="text-green-600">Raketi</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/padel-raket-fiyatlari"
              className="hidden sm:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Fiyatları Karşılaştır
            </Link>
            {/* Mobile menu button */}
            <button
              aria-label="Menüyü Aç"
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
