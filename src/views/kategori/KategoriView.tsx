import { PaginatedGrid, SectionHeader, Sidebar } from "@/components";
import { getNewsByCategory, getPopularArticles } from "@/services/berita";
import { CATEGORY_MAP } from "@/constants/categories";
import { notFound } from "next/navigation";
import Link from "next/link";

interface KategoriViewProps {
  categoryId: string;
}

export default async function KategoriView({ categoryId }: KategoriViewProps) {
  const categoryMeta = CATEGORY_MAP[categoryId];
  if (!categoryMeta) notFound();

  const articles = await getNewsByCategory(categoryId);
  const popular = await getPopularArticles(5);

  return (
    <div className="bg-white min-h-screen">
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
                <PaginatedGrid
                  articles={articles}
                  pageSize={9}
                  showHeader={false}
                />
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
