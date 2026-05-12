import Image from "next/image";
import Link from "next/link";
import { NewsCard, SectionHeader, Sidebar } from "@/components";
import {
  getArticleBySlug,
  getRelatedArticles,
  getPopularArticles,
} from "@/lib/fakeDb";
import { formatFullDate, formatRelativeDate } from "@/lib/formatDate";
import { notFound } from "next/navigation";

const DUMMY_COMMENTS = [
  {
    id: "c1",
    author: "AJUAN YUSMAR S.P., M.Agr",
    date: "14 Jan 2024",
    text: "Mohon maaf, apakah verifikatornya sudah tidak dapat diprint? Karena saya mau download tapi tidak bisa. Apakah ada solusinya bagaimana ya terimanya?",
    avatar: "A",
  },
  {
    id: "c2",
    author: "ERNA MINA INDASARI S.Tn",
    date: "14 Jan 2024",
    text: "Saya mengucapkan terimakasih kita sudah bertemu lagi",
    avatar: "E",
  },
];

interface DetailViewProps {
  slug: string;
}

export default function DetailView({ slug }: DetailViewProps) {
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.id, article.category, 3);
  const popular = getPopularArticles(5);

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
          <main>
            <article>
              {/* BREADCRUMB */}
              <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-blue-600">Beranda</Link>
                <span>›</span>
                <Link href={`/kategori/${article.category}`} className="hover:text-blue-600">
                  {article.categoryLabel}
                </Link>
                <span>›</span>
                <span className="text-gray-900 truncate max-w-[200px]">
                  {article.title}
                </span>
              </nav>

              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide rounded mb-4">
                {article.categoryLabel}
              </span>
              
              <h1 className="text-2xl md:text-[32px] font-bold text-gray-900 leading-tight mb-4">
                {article.title}
              </h1>

              <div className="flex items-center gap-3 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                <span className="font-medium text-gray-900">✍ {article.author}</span>
                <span>·</span>
                <time dateTime={article.publishedAt}>
                  {formatFullDate(article.publishedAt)}
                </time>
                <span>·</span>
                <span>{formatRelativeDate(article.publishedAt)}</span>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-8">
                <Image
                  src={article.image.large}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  priority
                />
              </div>

              <div 
                className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-4 text-[15px]"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </article>

            {/* KOMENTAR */}
            <div className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-6">
                Komentar ({DUMMY_COMMENTS.length})
              </h2>
              <div className="space-y-6">
                {DUMMY_COMMENTS.map((comment) => (
                  <div key={comment.id} className="flex gap-4 pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {comment.avatar}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-semibold text-sm text-gray-900">{comment.author}</span>
                        <span className="text-xs text-gray-400">· {comment.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-2">
                        {comment.text}
                      </p>
                      <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
                        Balas
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BERITA TERKAIT */}
            {related.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-100">
                <SectionHeader 
                  title="Berita Terkait" 
                  linkHref={`/kategori/${article.category}`}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {related.map((rel) => (
                    <NewsCard key={rel.id} article={rel} />
                  ))}
                </div>
              </div>
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
