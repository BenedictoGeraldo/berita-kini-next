import Link from "next/link";
import { NewsArticle } from "@/types/news";

interface SidebarProps {
  popularArticles: NewsArticle[];
}

export default function Sidebar({ popularArticles }: SidebarProps) {
  return (
    <aside className="flex flex-col gap-8 w-full">
      {/* Popular Widget */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-blue-600 px-4 py-3">
          <h2 className="text-white font-bold text-sm">Berita Terpopuler</h2>
        </div>
        <div className="flex flex-col">
          {popularArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/berita/${article.id}?kategori=${article.category}`}
              className="flex gap-3 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors group last:border-b-0"
            >
              <span className="text-2xl font-black text-blue-100 leading-none min-w-[28px] mt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1">
                  {article.categoryLabel}
                </span>
                <span className="text-[13px] font-semibold text-gray-800 leading-snug line-clamp-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
