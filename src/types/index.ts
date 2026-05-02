export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  weight: string;
  balance: string;
  material: string;
  shape: string;
  level: 'Başlangıç' | 'Orta' | 'İleri' | 'Profesyonel';
  availability: 'InStock' | 'OutOfStock' | 'PreOrder';
  description: string;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  affiliateUrl: string;
  badge?: string;
}

export interface Review {
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  authorSlug: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  tags: string[];
  category: string;
  faqs: FAQ[];
  readingTime: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  expertise: string[];
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}
