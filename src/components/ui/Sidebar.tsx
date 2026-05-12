import Link from "next/link";
import { NewsArticle } from "@/types/news";

interface SidebarProps {
  popularArticles: NewsArticle[];
}

export default function Sidebar({ popularArticles }: SidebarProps) {
  return (
    <aside className="flex flex-col w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
        <h2 className="text-[22px] font-bold text-gray-900 tracking-tight">
          Berita Terpopuler
        </h2>
      </div>

      <div className="flex flex-col">
        {popularArticles.slice(0, 4).map((article, index) => {
          const formattedDate = new Date(article.publishedAt).toLocaleDateString(
            "id-ID",
            { day: "numeric", month: "short", year: "numeric" }
          );

          return (
            <div
              key={article.id}
              className="border-b border-gray-100 py-5 first:pt-0 last:border-b-0 last:pb-0"
            >
              <Link
                href={`/berita/${article.id}?kategori=${article.category}`}
                className="flex gap-4 group items-start"
              >
                <div className="relative flex-shrink-0 mt-1">
                  <div className="w-[88px] h-[88px] relative rounded-xl overflow-hidden">
                    <img
                      src={article.image.small}
                      alt={article.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#1e293b] text-white rounded-full flex items-center justify-center text-[15px] font-medium shadow-sm">
                    {index + 1}
                  </div>
                </div>

                <div className="flex flex-col flex-1 min-w-0 pt-1">
                  <h3 className="text-[15px] font-semibold text-gray-800 leading-[1.4] line-clamp-3 group-hover:text-blue-600 transition-colors mb-2.5 pr-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[13px]">
                    <span className="text-[#0ea5e9] font-semibold">
                      {article.categoryLabel}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500">{formattedDate}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
