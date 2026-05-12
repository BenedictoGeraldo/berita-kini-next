export default function KategoriLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar placeholder */}
      <div className="h-16 bg-white border-b border-gray-200" />

      {/* Category header */}
      <div className="bg-white border-b border-gray-100 py-10 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-3 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
          </div>
          <div className="h-9 bg-gray-200 rounded w-48 animate-pulse" />
        </div>
      </div>

      {/* Main content + Sidebar */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Main content */}
          <div>
            {/* Section header */}
            <div className="h-7 bg-gray-200 rounded w-48 mb-6 animate-pulse" />

            {/* Article grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
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

            {/* Pagination placeholder */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-10 pt-6 border-t border-gray-100 gap-4">
              <div className="h-4 bg-gray-200 rounded w-48 animate-pulse" />
              <div className="flex items-center gap-1">
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>

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
