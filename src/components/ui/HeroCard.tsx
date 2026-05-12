import Link from "next/link";
import Image from "next/image";
import { NewsArticle } from "@/types/news";
import { formatRelativeDate } from "@/lib/formatDate";

export default function HeroCard({ article }: { article: NewsArticle }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
      <div className="flex flex-col justify-center gap-4">
        <p className="text-xs text-gray-600 uppercase tracking-widest font-medium">
          Headline
        </p>
        <h1 className="text-2xl md:text-[28px] font-bold text-gray-900 leading-snug">
          {article.title}
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
          {article.contentSnippet}
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{article.author}</span>
          <span>·</span>
          <span>{formatRelativeDate(article.publishedAt)}</span>
        </div>
        <Link
          href={`/berita/${article.id}`}
          className="text-blue-600 text-sm font-medium hover:text-blue-700 hover:underline transition-colors flex items-center gap-1 w-fit"
        >
          Baca Selengkapnya
          <i className="ri-arrow-right-up-long-line" />
        </Link>
      </div>

      <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-auto md:min-h-[280px]">
        <Image
          src={article.image.large}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
