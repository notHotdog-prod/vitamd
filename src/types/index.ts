// src/types/index.ts

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string | null;
  category: string;
  tags: string[];
  published: boolean;
  featured: boolean;
  readingTime: number;
  createdAt: Date;
  updatedAt: Date;
  author: {
    id: string;
    name: string;
    email: string;
  };
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  details: string;
  price: number;
  category: string;
  badge?: string | null;
  featured: boolean;
  active: boolean;
  imageUrl?: string | null;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
  status: 'UNREAD' | 'READ' | 'REPLIED' | 'ARCHIVED';
  createdAt: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
