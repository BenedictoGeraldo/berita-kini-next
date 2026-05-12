import Link from "next/link";
import Image from "next/image";
import { NewsArticle } from "@/types/news";
import { formatRelativeDate } from "@/lib/formatDate";

interface PopularCardProps {
  article: NewsArticle;
  rank: number;
}

export default function PopularCard({ article, rank }: PopularCardProps) {
  return (
    <Link
      href={`/berita/${article.id}`}
      className="group flex bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="relative w-28 flex-shrink-0">
        <Image
          src={article.image.small}
          alt={article.title}
          fill
          sizes="112px"
          className="object-cover"
        />
        <span className="absolute top-2 left-2 bg-gray-900/75 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
          {rank}
        </span>
      </div>
      <div className="p-3 flex flex-col gap-1 min-w-0">
        <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wide">
          {article.categoryLabel}
        </span>
        <h3 className="text-[12px] font-semibold text-gray-800 leading-snug line-clamp-3">
          {article.title}
        </h3>
        <p className="text-[11px] text-gray-400 mt-auto">
          {formatRelativeDate(article.publishedAt)}
        </p>
      </div>
    </Link>
  );
}
