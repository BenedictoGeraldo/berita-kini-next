import { ApiNewsItem, NewsArticle } from "@/types/news";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225'%3E%3Crect fill='%23e2e8f0' width='400' height='225'/%3E%3Ctext fill='%2394a3b8' x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='14'%3EBerita Kini%3C/text%3E%3C/svg%3E";

function hashLink(link: string): string {
  let hash = 0;
  for (let i = 0; i < link.length; i++) {
    hash = (hash << 5) - hash + link.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 120);
}

function resolveImage(raw: ApiNewsItem["image"]): {
  small: string;
  large: string;
} {
  if (!raw) {
    return { small: PLACEHOLDER, large: PLACEHOLDER };
  }

  // Antara sends image as string, not object
  if (typeof raw === "string") {
    return raw.startsWith("http")
      ? { small: raw, large: raw }
      : { small: PLACEHOLDER, large: PLACEHOLDER };
  }

  const small =
    typeof raw.small === "string" && raw.small.startsWith("http")
      ? raw.small
      : PLACEHOLDER;
  const large =
    typeof raw.large === "string" && raw.large.startsWith("http")
      ? raw.large
      : PLACEHOLDER;

  return { small, large };
}

export function mapApiToNewsArticle(
  item: ApiNewsItem,
  categoryId: string,
  categoryLabel: string,
): NewsArticle {
  const snippet = item.contentSnippet || item.description || item.content || "";
  const tags = item.categories ?? [categoryLabel];

  return {
    id: hashLink(item.link),
    title: item.title,
    slug: generateSlug(item.title),
    link: item.link,
    category: categoryId,
    categoryLabel,
    author: "Redaksi Berita Kini",
    publishedAt: item.isoDate,
    contentSnippet: snippet,
    content: `<p>${snippet}</p><p><a href="${item.link}" target="_blank" rel="noopener noreferrer">Baca selengkapnya di sumber asli</a></p>`,
    image: resolveImage(item.image),
    tags,
  };
}
