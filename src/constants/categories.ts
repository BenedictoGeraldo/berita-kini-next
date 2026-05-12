import { Category } from "@/types/news";

export const CATEGORIES: Category[] = [
  {
    slug: "terbaru",
    label: "Terbaru",
    endpoint: "/api/cnn-news",
  },
  {
    slug: "nasional",
    label: "Nasional",
    endpoint: "/api/cnn-news/nasional",
  },
  {
    slug: "internasional",
    label: "Internasional",
    endpoint: "/api/cnn-news/internasional",
  },
  {
    slug: "ekonomi",
    label: "Ekonomi",
    endpoint: "/api/cnbc-news",
  },
  {
    slug: "olahraga",
    label: "Olahraga",
    endpoint: "/api/cnn-news/olahraga",
  },
  {
    slug: "teknologi",
    label: "Teknologi",
    endpoint: "/api/cnn-news/teknologi",
  },
  {
    slug: "hiburan",
    label: "Hiburan",
    endpoint: "/api/cnn-news/hiburan",
  },
  {
    slug: "gaya-hidup",
    label: "Gaya Hidup",
    endpoint: "/api/cnn-news/gaya-hidup",
  },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((cat) => [cat.slug, cat])
);

export const NAV_CATEGORIES = CATEGORIES;
