import { NewsArticle } from "@/types/news";

const BASE_IMAGES = [
  {
    small: "https://akcdn.detik.net.id/visual/2026/05/12/timnas-indonesia-u-17-1778552196072_169.png?w=360&q=90",
    large: "https://akcdn.detik.net.id/visual/2026/05/12/timnas-indonesia-u-17-1778552196072_169.png?w=360&q=100",
  },
  {
    small: "https://akcdn.detik.net.id/visual/2026/05/12/latsarmil-komcad-asn-pemprov-sulsel-1778562680261_169.jpeg?w=360&q=90",
    large: "https://akcdn.detik.net.id/visual/2026/05/12/latsarmil-komcad-asn-pemprov-sulsel-1778562680261_169.jpeg?w=360&q=100",
  },
  {
    small: "https://akcdn.detik.net.id/visual/2026/05/12/barcelona-rayakan-kemenangan-gelar-liga-spanyol-ke-29-1778552845852_169.jpeg?w=360&q=90",
    large: "https://akcdn.detik.net.id/visual/2026/05/12/barcelona-rayakan-kemenangan-gelar-liga-spanyol-ke-29-1778552845852_169.jpeg?w=360&q=100",
  },
  {
    small: "https://akcdn.detik.net.id/visual/2026/05/12/ilustrasi-hantavirus-1778549396948_169.jpeg?w=360&q=90",
    large: "https://akcdn.detik.net.id/visual/2026/05/12/ilustrasi-hantavirus-1778549396948_169.jpeg?w=360&q=100",
  },
  {
    small: "https://akcdn.detik.net.id/visual/2026/05/10/moto-prix-fra-motogp-1778416931781_169.jpeg?w=360&q=90",
    large: "https://akcdn.detik.net.id/visual/2026/05/10/moto-prix-fra-motogp-1778416931781_169.jpeg?w=360&q=100",
  },
  {
    small: "https://akcdn.detik.net.id/visual/2025/11/26/purbaya-yudhi-sadewa-1764160185418_169.jpeg?w=360&q=90",
    large: "https://akcdn.detik.net.id/visual/2025/11/26/purbaya-yudhi-sadewa-1764160185418_169.jpeg?w=360&q=100",
  },
  {
    small: "https://akcdn.detik.net.id/visual/2026/05/12/warga-gaza-city-gelar-pesta-rayakan-nikah-massal-1778550391374_169.jpeg?w=360&q=90",
    large: "https://akcdn.detik.net.id/visual/2026/05/12/warga-gaza-city-gelar-pesta-rayakan-nikah-massal-1778550391374_169.jpeg?w=360&q=100",
  },
  {
    small: "https://akcdn.detik.net.id/visual/2026/05/12/netflix-1778562711158_169.jpeg?w=360&q=90",
    large: "https://akcdn.detik.net.id/visual/2026/05/12/netflix-1778562711158_169.jpeg?w=360&q=100",
  },
];

const LONG_CONTENT = `
<p>Pemerintah telah mengumumkan serangkaian kebijakan baru yang akan berdampak signifikan bagi masyarakat luas di seluruh wilayah Indonesia. Kebijakan ini merupakan hasil dari diskusi panjang antara berbagai pemangku kepentingan, termasuk perwakilan dari sektor swasta, organisasi masyarakat sipil, dan para pakar dari berbagai bidang.</p>

<p>Menurut keterangan resmi yang disampaikan oleh juru bicara pemerintah, implementasi kebijakan ini akan dilakukan secara bertahap dimulai dari bulan depan. "Kami berkomitmen untuk memastikan bahwa transisi ini berjalan dengan lancar dan semua pihak mendapat manfaat yang setara," ujar juru bicara tersebut dalam konferensi pers yang digelar kemarin.</p>

<p>Para pengamat menilai bahwa kebijakan ini merupakan langkah yang tepat mengingat kondisi global yang terus berubah. Namun demikian, mereka juga mengingatkan perlunya pengawasan yang ketat dalam proses implementasinya agar tujuan yang diharapkan dapat tercapai dengan optimal.</p>

<p>Sementara itu, berbagai kalangan masyarakat memberikan respons yang beragam terhadap kebijakan ini. Sebagian menyambut positif dengan harapan bahwa hal ini akan membawa perubahan nyata dalam kehidupan sehari-hari, sementara sebagian lainnya masih wait-and-see dan menunggu bukti konkret dari implementasinya.</p>

<p>Pemerintah juga menegaskan bahwa akan ada mekanisme evaluasi berkala setiap tiga bulan sekali untuk memastikan bahwa kebijakan ini berjalan sesuai dengan rencana dan dapat disesuaikan apabila diperlukan perubahan.</p>
`;

export const fakeArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Timnas Indonesia U-17 Siap Hadapi Tantangan di Piala Asia",
    slug: "timnas-indonesia-u17-siap-hadapi-tantangan-di-piala-asia",
    category: "olahraga",
    categoryLabel: "Olahraga",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Timnas Indonesia U-17 menunjukkan performa yang menjanjikan menjelang perempat final Piala Asia U-17 2026 yang akan digelar pekan ini.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[0],
    tags: ["timnas", "piala asia", "sepak bola"],
  },
  {
    id: "2",
    title: "500 ASN Pemprov Sulsel Ikuti Pelatihan Komponen Cadangan TNI",
    slug: "500-asn-pemprov-sulsel-ikuti-pelatihan-komcad-tni",
    category: "nasional",
    categoryLabel: "Nasional",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Sejumlah siswa Komponen Cadangan (Komcad) unsur Aparatur Sipil Negara (ASN) Pemprov Sulawesi Selatan mengikuti Latihan Dasar Militer.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[1],
    tags: ["nasional", "TNI", "ASN"],
  },
  {
    id: "3",
    title: "Barcelona Rayakan Gelar Liga Spanyol ke-29 dengan Parade Meriah",
    slug: "barcelona-rayakan-gelar-liga-spanyol-ke-29",
    category: "olahraga",
    categoryLabel: "Olahraga",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Ribuan suporter Barcelona turun ke jalan merayakan sukses tim asuhan Hansi Flick meraih gelar juara Liga Spanyol ke-29.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[2],
    tags: ["barcelona", "liga spanyol", "sepak bola"],
  },
  {
    id: "4",
    title: "BRIN Jelaskan Risiko Hantavirus dan Cara Pencegahannya",
    slug: "brin-jelaskan-risiko-hantavirus-dan-cara-pencegahan",
    category: "teknologi",
    categoryLabel: "Teknologi",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Empat kasus hantavirus di DKI Jakarta menimbulkan kekhawatiran. Peneliti BRIN menjelaskan penularan, gejala, dan langkah pencegahan yang tepat.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[3],
    tags: ["kesehatan", "hantavirus", "BRIN"],
  },
  {
    id: "5",
    title: "Jadwal Lengkap MotoGP Catalunya 2026: Duel Ducati vs Aprilia",
    slug: "jadwal-lengkap-motogp-catalunya-2026",
    category: "olahraga",
    categoryLabel: "Olahraga",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Perburuan poin dalam MotoGP 2026 akan berlanjut ke MotoGP Catalunya 2026 di Sirkuit Catalunya, 15-17 Mei nanti.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[4],
    tags: ["motogp", "olahraga", "balap"],
  },
  {
    id: "6",
    title: "Rupiah Tembus Rp17.500, Menkeu Ungkap Dampak ke APBN",
    slug: "rupiah-tembus-rp17500-menkeu-ungkap-dampak-ke-apbn",
    category: "ekonomi",
    categoryLabel: "Ekonomi",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Purbaya mengungkap dampak rupiah tembus Rp17.500 per dolar AS terhadap kondisi Anggaran Pendapatan dan Belanja Negara 2026.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[5],
    tags: ["rupiah", "ekonomi", "APBN"],
  },
  {
    id: "7",
    title: "Warga Gaza Gelar Pernikahan Massal di Tengah Puing Perang",
    slug: "warga-gaza-gelar-pernikahan-massal-di-tengah-puing-perang",
    category: "internasional",
    categoryLabel: "Internasional",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Puluhan pasangan di Jalur Gaza menggelar pernikahan massal di tengah situasi pascaperang dan puing-puing bangunan runtuh.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[6],
    tags: ["gaza", "palestina", "internasional"],
  },
  {
    id: "8",
    title: "Netflix Digugat karena Dituding Bikin Anak-anak Kecanduan",
    slug: "netflix-digugat-dituding-bikin-anak-anak-kecanduan",
    category: "hiburan",
    categoryLabel: "Hiburan",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Netflix digugat karena dianggap membuat penonton, terutama anak-anak, kecanduan menonton hingga mengumpulkan data pengguna tanpa persetujuan.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[7],
    tags: ["netflix", "hiburan", "streaming"],
  },
  {
    id: "9",
    title: "DPR Filipina Setuju Makzulkan Wapres Sara Duterte",
    slug: "dpr-filipina-setuju-makzulkan-wapres-sara-duterte",
    category: "internasional",
    categoryLabel: "Internasional",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Parlemen Filipina memberikan suara dengan selisih besar untuk memakzulkan Wakil Presiden Sara Duterte untuk kedua kalinya.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[0],
    tags: ["filipina", "duterte", "internasional"],
  },
  {
    id: "10",
    title: "WhatsApp Plus Berbayar Resmi Rilis untuk iPhone",
    slug: "whatsapp-plus-berbayar-resmi-rilis-untuk-iphone",
    category: "teknologi",
    categoryLabel: "Teknologi",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "WhatsApp resmi meluncurkan paket langganan berbayar bernama WhatsApp Plus bagi pengguna iOS setelah sebelumnya hadir lebih dulu di Android.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[3],
    tags: ["whatsapp", "teknologi", "aplikasi"],
  },
  {
    id: "11",
    title: "Tips Hadapi Cuaca Panas bagi Jemaah Haji di Tanah Suci",
    slug: "tips-hadapi-cuaca-panas-jemaah-haji-di-tanah-suci",
    category: "gaya-hidup",
    categoryLabel: "Gaya Hidup",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Cuaca panas ditambah ibadah yang padat membuat jemaah perlu memperhatikan kondisi tubuhnya. Berikut tips menghadapi cuaca panas bagi jemaah haji.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[6],
    tags: ["haji", "gaya hidup", "kesehatan"],
  },
  {
    id: "12",
    title: "IHSG Amblas ke 6.807, Jelang MSCI Umumkan Rebalancing Saham",
    slug: "ihsg-amblas-ke-6807-jelang-msci-umumkan-rebalancing",
    category: "ekonomi",
    categoryLabel: "Ekonomi",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Indeks Harga Saham Gabungan terkoreksi 1,43 persen ke 6.807 pada perdagangan sesi I Selasa, menjelang pengumuman rebalancing saham MSCI.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[5],
    tags: ["IHSG", "saham", "ekonomi"],
  },
  {
    id: "13",
    title: "Banjir Rendam 4 Kecamatan di Tebing Tinggi, 3.539 Warga Terdampak",
    slug: "banjir-rendam-4-kecamatan-tebing-tinggi",
    category: "nasional",
    categoryLabel: "Nasional",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 13 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Banjir merendam empat kecamatan di Kota Tebing Tinggi akibat hujan deras. 966 rumah terendam, BPBD lakukan evakuasi dan penanganan darurat.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[1],
    tags: ["banjir", "nasional", "bencana"],
  },
  {
    id: "14",
    title: "Masha and the Bear Akan Dibuat Versi Film Panjang Perdana",
    slug: "masha-and-the-bear-dibuat-versi-film-panjang",
    category: "hiburan",
    categoryLabel: "Hiburan",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Animasi Masha and the Bear akan dibuat film panjang pertamanya yang akan segera diproduksi oleh studio animasi ternama.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[7],
    tags: ["animasi", "film", "hiburan"],
  },
  {
    id: "15",
    title: "Jakarta Terpanggang, Suhu Terasa Tembus 41 Derajat Celsius",
    slug: "jakarta-terpanggang-suhu-terasa-tembus-41-derajat",
    category: "teknologi",
    categoryLabel: "Teknologi",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 15 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Cuaca panas Jakarta mencapai 34°C, namun terasa di atas 40°C. Kelembapan tinggi dan faktor lingkungan membuat suhu terasa lebih menyengat.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[4],
    tags: ["cuaca", "Jakarta", "iklim"],
  },
  {
    id: "16",
    title: "Musim Pendakian Everest 2026 Dibuka, Serac Jadi Ancaman Maut",
    slug: "musim-pendakian-everest-2026-dibuka-serac-jadi-ancaman",
    category: "gaya-hidup",
    categoryLabel: "Gaya Hidup",
    author: "Redaksi Berita Kini",
    publishedAt: new Date(Date.now() - 16 * 60 * 60 * 1000).toISOString(),
    contentSnippet: "Musim pendakian Gunung Everest di perbatasan Nepal dan Tibet resmi dibuka meski ancaman maut mengintai di jalur utama.",
    content: LONG_CONTENT,
    image: BASE_IMAGES[2],
    tags: ["everest", "pendakian", "gaya hidup"],
  },
];

export function getArticlesByCategory(category: string): NewsArticle[] {
  if (category === "terbaru") return fakeArticles;
  return fakeArticles.filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return fakeArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(
  currentId: string,
  category: string,
  limit = 3
): NewsArticle[] {
  return fakeArticles
    .filter((a) => a.id !== currentId && a.category === category)
    .slice(0, limit);
}

export function getPopularArticles(limit = 5): NewsArticle[] {
  return fakeArticles.slice(0, limit);
}

export function getHeroArticle(): NewsArticle {
  return fakeArticles[0];
}

export function getLatestArticles(limit = 8): NewsArticle[] {
  return fakeArticles.slice(0, limit);
}
