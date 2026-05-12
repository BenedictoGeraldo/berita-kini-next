import {
  HeadlineCarousel,
  PopularCard,
  SectionHeader,
  PaginatedGrid,
} from "@/components";
import {
  getHeadlineArticles,
  getMixedPopularArticles,
  getNewsByCategory,
} from "@/services/berita";
import Image from "next/image";

export default async function HomeView() {
  const headlineArticles = await getHeadlineArticles();
  const terpopuler = await getMixedPopularArticles();
  const rekomendasi = await getNewsByCategory("nasional");

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADLINE CAROUSEL */}
        <section className="pt-6 pb-12">
          <HeadlineCarousel articles={headlineArticles} />
        </section>

        {/* BERITA TERPOPULER */}
        {terpopuler.length > 0 && (
          <section className="py-8 border-t border-gray-100">
            <SectionHeader title="Berita Terpopuler" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {terpopuler.map((article, index) => (
                <PopularCard
                  key={article.id}
                  article={article}
                  rank={index + 1}
                />
              ))}
            </div>
          </section>
        )}

        {/* REKOMENDASI UNTUK ANDA */}
        <section className="py-8">
          <PaginatedGrid
            title="Rekomendasi Untuk Anda"
            articles={rekomendasi}
            pageSize={8}
            gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          />
        </section>

        {/* PROMO BANNER */}
        <section className="py-8 mb-10">
          <Image
            src="/promo.png"
            alt="Promo Petualangan Edukatif Malang Mbois City Tour"
            width={1200}
            height={300}
            className="w-full h-auto rounded-2xl shadow-sm object-cover"
          />
        </section>
      </div>
    </div>
  );
}
