export default function BeritaDetailLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 bg-white border-b border-gray-200" />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
          <main>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-4 bg-gray-200 rounded w-14 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-3 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-3 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-40 animate-pulse" />
            </div>

            {/* Category badge */}
            <div className="h-6 w-20 bg-gray-200 rounded mb-4 animate-pulse" />

            {/* Title */}
            <div className="space-y-2 mb-4">
              <div className="h-8 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
            </div>

            {/* Author + date */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
              <div className="h-5 bg-gray-200 rounded w-32 animate-pulse" />
              <div className="h-5 bg-gray-200 rounded w-24 animate-pulse" />
              <div className="h-5 bg-gray-200 rounded w-20 animate-pulse" />
            </div>

            {/* Hero image */}
            <div className="aspect-[16/9] w-full rounded-xl bg-gray-200 animate-pulse mb-8" />

            {/* Content paragraphs */}
            <div className="space-y-3 mb-8">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-[95%] animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-[90%] animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-[60%] animate-pulse" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
              <div className="h-7 w-16 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-7 w-20 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-7 w-14 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-7 w-24 bg-gray-200 rounded-full animate-pulse" />
            </div>

            {/* Comments section */}
            <div className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-6" />
              <div className="space-y-6">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 ${i < 1 ? "pb-6 border-b border-gray-200" : ""}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-40 animate-pulse" />
                      <div className="space-y-1.5">
                        <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                      </div>
                      <div className="h-4 bg-gray-200 rounded w-12 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related articles */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="h-7 bg-gray-200 rounded w-40 mb-6 animate-pulse" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="bg-gray-100 rounded-lg overflow-hidden">
                    <div className="aspect-video bg-gray-200 animate-pulse" />
                    <div className="p-3 space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-16 animate-pulse" />
                      <div className="space-y-1.5">
                        <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                      </div>
                      <div className="h-3 bg-gray-200 rounded w-20 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* Sidebar skeleton */}
          <div className="sticky top-20">
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gray-200 px-4 py-3 animate-pulse">
                <div className="h-5 w-32" />
              </div>
              <div className="flex flex-col">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-4 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="h-7 w-7 bg-gray-200 rounded animate-pulse flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-16 animate-pulse" />
                      <div className="space-y-1.5">
                        <div className="h-3.5 bg-gray-200 rounded w-full animate-pulse" />
                        <div className="h-3.5 bg-gray-200 rounded w-5/6 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
