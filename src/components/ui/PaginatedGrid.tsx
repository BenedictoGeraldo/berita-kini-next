"use client";

import { useState } from "react";
import { NewsCard, SectionHeader } from "@/components";
import type { NewsArticle } from "@/types/news";

interface PaginatedGridProps {
  title?: string;
  articles: NewsArticle[];
  pageSize?: number;
  showHeader?: boolean;
  gridClass?: string;
}

export default function PaginatedGrid({
  title = "",
  articles,
  pageSize = 8,
  showHeader = true,
  gridClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
}: PaginatedGridProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(articles.length / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paged = articles.slice(start, end);

  return (
    <>
      {showHeader && <SectionHeader title={title} />}

      <div className={`grid ${gridClass} gap-6`}>
        {paged.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Showing {start + 1} to {Math.min(end, articles.length)} of{" "}
            {articles.length} results
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-2 py-1 text-sm text-gray-500 hover:text-blue-600 disabled:text-gray-300 disabled:cursor-not-allowed"
            >
              <span>&larr;</span> Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(
                (n) =>
                  n === 1 ||
                  n === totalPages ||
                  (n >= page - 1 && n <= page + 1)
              )
              .map((n, i, arr) => (
                <span key={n} className="flex items-center">
                  {i > 0 && arr[i - 1] !== n - 1 && (
                    <span className="px-2 text-sm text-gray-500">...</span>
                  )}
                  <button
                    onClick={() => setPage(n)}
                    className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                      n === page
                        ? "bg-blue-500 text-white"
                        : "bg-transparent text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {n}
                  </button>
                </span>
              ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex items-center gap-1 px-2 py-1 text-sm text-gray-500 hover:text-blue-600 disabled:text-gray-300 disabled:cursor-not-allowed"
            >
              Next <span>&rarr;</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
