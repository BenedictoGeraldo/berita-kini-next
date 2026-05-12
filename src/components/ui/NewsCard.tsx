import Link from "next/link";
import Image from "next/image";
import { NewsArticle } from "@/types/news";
import { formatRelativeDate } from "@/lib/formatDate";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <Link
      href={`/berita/${article.id}`}
      className="group bg-white rounded-lg overflow-hidden border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={article.image.small}
          alt={article.title}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 300px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wide">
          {article.categoryLabel}
        </span>
        <h3 className="text-[13px] font-semibold text-gray-800 leading-snug line-clamp-3">
          {article.title}
        </h3>
        <p className="text-[11px] text-gray-400 mt-auto">
          {formatRelativeDate(article.publishedAt)}
        </p>
      </div>
    </Link>
  );
}
