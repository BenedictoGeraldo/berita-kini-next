"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/types/news";
import { formatRelativeDate } from "@/lib/formatDate";

interface HeadlineCarouselProps {
  articles: NewsArticle[];
}

export default function HeadlineCarousel({ articles }: HeadlineCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = articles.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [total, next]);

  if (total === 0) return null;

  const article = articles[current];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex items-center gap-3">
          <p className="text-xs text-gray-600 uppercase tracking-widest font-medium">
            Headline
          </p>
          <div className="flex items-center gap-1.5">
            {articles.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-5 bg-blue-600" : "w-1.5 bg-gray-300"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <h1 className="text-2xl md:text-[28px] font-bold text-gray-900 leading-snug">
          <Link
            href={`/berita/${article.id}?kategori=${article.category}`}
            className="hover:text-blue-600 transition-colors"
          >
            {article.title}
          </Link>
        </h1>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
          {article.contentSnippet}
        </p>

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{article.author}</span>
          <span>·</span>
          <span>{formatRelativeDate(article.publishedAt)}</span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/berita/${article.id}?kategori=${article.category}`}
            className="text-blue-600 text-sm font-medium hover:text-blue-700 hover:underline transition-colors flex items-center gap-1 w-fit"
          >
            Baca Selengkapnya
            <i className="ri-arrow-right-up-long-line" />
          </Link>

          <div className="flex items-center gap-1">
            <button
              onClick={prev}
              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-colors"
              aria-label="Sebelumnya"
            >
              <i className="ri-arrow-left-s-line text-sm" />
            </button>
            <button
              onClick={next}
              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-colors"
              aria-label="Selanjutnya"
            >
              <i className="ri-arrow-right-s-line text-sm" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-auto md:min-h-[280px]">
        {articles.map((a, i) => (
          <Link
            key={a.id}
            href={`/berita/${a.id}?kategori=${a.category}`}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={a.image.large}
              alt={a.title}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
              priority={i === 0}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
