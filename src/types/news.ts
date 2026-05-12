export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
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

export interface NewsResponse {
  data: NewsArticle[];
  total: number;
}

export interface Category {
  slug: string;
  label: string;
  endpoint: string;
}
