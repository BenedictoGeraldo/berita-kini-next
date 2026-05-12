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
          />
        </section>

        {/* PROMO BANNER */}
        <section className="py-8 mb-10">
          <div className="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl overflow-hidden shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div
              className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 2px, transparent 2px)",
                backgroundSize: "30px 30px",
              }}
            ></div>

            <div className="flex-1 relative z-10 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Petualangan
                <br />
                Edukatif bersama
                <br />
                Malang Mbois
                <br />
                City Tour!
              </h2>
              <p className="text-white/90 text-sm md:text-base max-w-sm">
                Petualangan Edukatif bersama Malang Mbois City Tour!
              </p>
            </div>

            <div className="w-full md:w-[450px] relative z-10 hidden md:block">
              <div className="aspect-[4/3] bg-white/20 rounded-xl border border-white/30 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="bg-white/80 rounded-lg overflow-hidden h-32 self-end transform -rotate-3">
                    <Image
                      src="https://akcdn.detik.net.id/visual/2026/05/12/warga-gaza-city-gelar-pesta-rayakan-nikah-massal-1778550391374_169.jpeg?w=360&q=90"
                      alt="Promo"
                      width={200}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white/80 rounded-lg overflow-hidden h-32 self-start transform rotate-3">
                    <Image
                      src="https://akcdn.detik.net.id/visual/2026/05/12/netflix-1778562711158_169.jpeg?w=360&q=90"
                      alt="Promo"
                      width={200}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
