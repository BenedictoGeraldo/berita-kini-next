export interface NewsArticle {
  id: string;
  slug?: string;
  title: string;
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
  id: string;
  label: string;
  endpoint: string;
}
