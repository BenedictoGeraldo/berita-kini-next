import { HeroCard, NewsCard, PopularCard, SectionHeader } from "@/components";
import {
  getHeroArticle,
  getArticlesByCategory,
  getPopularArticles,
} from "@/lib/fakeDb";
import Image from "next/image";

export default function HomeView() {
  const hero = getHeroArticle();
  const terpopuler = getPopularArticles(3); // Di design cuma ada 3 card horizontal
  const rekomendasi = getArticlesByCategory("internasional").slice(0, 8);

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* HERO SECTION */}
        <section className="pt-6 pb-12">
          <HeroCard article={hero} />
        </section>

        {/* BERITA TERPOPULER */}
        <section className="py-8 border-t border-gray-100">
          <SectionHeader title="Berita Terpopuler" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {terpopuler.map((article, index) => (
              <PopularCard key={article.id} article={article} rank={index + 1} />
            ))}
          </div>
        </section>

        {/* REKOMENDASI UNTUK ANDA */}
        <section className="py-8">
          <SectionHeader
            title="Rekomendasi Untuk Anda"
            rightElement={
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Cari disini..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-md text-sm outline-none focus:border-blue-500 transition-colors"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </button>
              </div>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rekomendasi.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* PAGINATION */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
          <p className="text-sm text-gray-500">Showing 1 to 10 of 97 results</p>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 text-sm text-gray-500 hover:text-blue-600">‹ Previous</button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-600 text-white text-sm font-medium">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-white text-gray-500 hover:bg-gray-100 text-sm font-medium">2</button>
            <span className="px-2 text-gray-400">..</span>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-white text-gray-500 hover:bg-gray-100 text-sm font-medium">8</button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-white text-gray-500 hover:bg-gray-100 text-sm font-medium">9</button>
            <button className="px-3 py-1 text-sm text-gray-500 hover:text-blue-600">Next ›</button>
          </div>
        </div>

        {/* PROMO BANNER */}
        <section className="py-8 mb-10">
          <div className="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl overflow-hidden shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" 
                 style={{ backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)", backgroundSize: "30px 30px" }}>
            </div>
            
            <div className="flex-1 relative z-10 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Petualangan<br/>Edukatif bersama<br/>Malang Mbois<br/>City Tour!
              </h2>
              <p className="text-white/90 text-sm md:text-base max-w-sm">
                Petualangan Edukatif bersama Malang Mbois City Tour!
              </p>
            </div>
            
            <div className="w-full md:w-[450px] relative z-10 hidden md:block">
              {/* Fake collage placeholder matching the design */}
              <div className="aspect-[4/3] bg-white/20 rounded-xl border border-white/30 backdrop-blur-sm flex items-center justify-center p-4">
                 <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <div className="bg-white/80 rounded-lg overflow-hidden h-32 self-end transform -rotate-3">
                      <Image src="https://akcdn.detik.net.id/visual/2026/05/12/warga-gaza-city-gelar-pesta-rayakan-nikah-massal-1778550391374_169.jpeg?w=360&q=90" alt="Promo" width={200} height={150} className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-white/80 rounded-lg overflow-hidden h-32 self-start transform rotate-3">
                      <Image src="https://akcdn.detik.net.id/visual/2026/05/12/netflix-1778562711158_169.jpeg?w=360&q=90" alt="Promo" width={200} height={150} className="w-full h-full object-cover" />
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
