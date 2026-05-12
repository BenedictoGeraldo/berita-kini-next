export interface ApiNewsImage {
  small: string;
  medium?: string;
  large: string;
}

export interface ApiNewsItem {
  title: string;
  link: string;
  contentSnippet?: string;
  content?: string;
  description?: string;
  isoDate: string;
  pubDate?: string;
  image?: string | ApiNewsImage;
  categories?: string[];
}

export interface ApiNewsResponse {
  message?: string;
  messages?: string;
  total: number;
  data: ApiNewsItem[];
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  link: string;
  category: string;
  categoryLabel: string;
  author: string;
  publishedAt: string;
  contentSnippet: string;
  content: string;
  image: {
    small: string;
    large: string;
  };
  tags: string[];
}

export interface Category {
  id: string;
  label: string;
  endpoint: string;
}
