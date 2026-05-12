import { NewsCard, SectionHeader, Sidebar } from "@/components";
import { getArticlesByCategory, getPopularArticles } from "@/lib/fakeDb";
import { CATEGORY_MAP } from "@/constants/categories";
import { notFound } from "next/navigation";
import Link from "next/link";

interface KategoriViewProps {
  categorySlug: string;
}

export default function KategoriView({ categorySlug }: KategoriViewProps) {
  const categoryMeta = CATEGORY_MAP[categorySlug];
  if (!categoryMeta) notFound();

  const articles = getArticlesByCategory(categorySlug);
  const popular = getPopularArticles(5);

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER KATEGORI */}
      <div className="bg-white border-b border-gray-100 py-10 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Beranda</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{categoryMeta.label}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{categoryMeta.label}</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          <main>
            {articles.length === 0 ? (
              <div className="py-12 text-center text-gray-500">
                <p className="text-lg">Belum ada berita di kategori ini.</p>
              </div>
            ) : (
              <section>
                <SectionHeader title={`Berita ${categoryMeta.label}`} />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {articles.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
                
                {/* PAGINATION */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-10 pt-6 border-t border-gray-100 gap-4">
                  <p className="text-sm text-gray-500">Showing 1 to {articles.length} of {articles.length} results</p>
                  <div className="flex items-center gap-1">
                    <button className="px-3 py-1 text-sm text-gray-400 hover:text-blue-600 cursor-not-allowed">‹ Previous</button>
                    <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-600 text-white text-sm font-medium">1</button>
                    <button className="px-3 py-1 text-sm text-gray-400 hover:text-blue-600 cursor-not-allowed">Next ›</button>
                  </div>
                </div>
              </section>
            )}
          </main>

          <div className="sticky top-20">
            <Sidebar popularArticles={popular} />
          </div>
        </div>
      </div>
    </div>
  );
}
