import { fetchApi } from "./client";
import { ApiNewsResponse, NewsArticle } from "@/types/news";
import { mapApiToNewsArticle } from "@/lib/utils";
import { CATEGORY_MAP } from "@/constants/categories";

export async function getNewsByCategory(
  categoryId: string,
): Promise<NewsArticle[]> {
  const category = CATEGORY_MAP[categoryId];
  if (!category) return [];

  const response = await fetchApi<ApiNewsResponse>(category.endpoint);
  return response.data.map((item) =>
    mapApiToNewsArticle(item, categoryId, category.label),
  );
}

export async function getNewsById(
  id: string,
  categoryId: string,
): Promise<NewsArticle | null> {
  const articles = await getNewsByCategory(categoryId);
  return articles.find((a) => a.id === id) ?? null;
}

export async function getLatestNews(): Promise<NewsArticle[]> {
  return getNewsByCategory("terbaru");
}

export async function getPopularArticles(limit = 5): Promise<NewsArticle[]> {
  const articles = await getLatestNews();
  return articles.slice(0, limit);
}

export async function getHeroArticle(): Promise<NewsArticle | null> {
  const articles = await getLatestNews();
  return articles.length > 0 ? articles[0] : null;
}

export async function getHeadlineArticles(): Promise<NewsArticle[]> {
  const articles = await getLatestNews();
  return articles.slice(0, 3);
}

export async function getMixedPopularArticles(): Promise<NewsArticle[]> {
  const categories = ["nasional", "olahraga", "teknologi"];
  const results = await Promise.all(
    categories.map((id) => getNewsByCategory(id)),
  );
  return results.map((articles) => articles[0]).filter(Boolean);
}

export async function getRelatedArticles(
  currentId: string,
  categoryId: string,
  limit = 3,
): Promise<NewsArticle[]> {
  const articles = await getNewsByCategory(categoryId);
  return articles.filter((a) => a.id !== currentId).slice(0, limit);
}
