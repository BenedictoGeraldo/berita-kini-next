import { Category } from "@/types/news";

export const CATEGORIES: Category[] = [
  {
    id: "terbaru",
    label: "Terbaru",
    endpoint: "/api/cnn-news",
  },
  {
    id: "nasional",
    label: "Nasional",
    endpoint: "/api/cnn-news/nasional",
  },
  {
    id: "internasional",
    label: "Internasional",
    endpoint: "/api/cnn-news/internasional",
  },
  {
    id: "ekonomi",
    label: "Ekonomi",
    endpoint: "/api/cnbc-news",
  },
  {
    id: "olahraga",
    label: "Olahraga",
    endpoint: "/api/cnn-news/olahraga",
  },
  {
    id: "teknologi",
    label: "Teknologi",
    endpoint: "/api/cnn-news/teknologi",
  },
  {
    id: "hiburan",
    label: "Hiburan",
    endpoint: "/api/cnn-news/hiburan",
  },
  {
    id: "gaya-hidup",
    label: "Gaya Hidup",
    endpoint: "/api/cnn-news/gaya-hidup",
  },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((cat) => [cat.id, cat])
);

export const NAV_CATEGORIES = CATEGORIES;
