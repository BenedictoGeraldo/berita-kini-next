"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_CATEGORIES } from "@/constants/categories";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (slug: string) => {
    if (slug === "terbaru") return pathname === "/";
    return pathname === `/kategori/${slug}`;
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center h-14 gap-6">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
            </svg>
          </div>
          <span className="font-bold text-gray-900 text-[15px]">
            Berita Kini
          </span>
        </Link>

        <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide flex-1 justify-end">
          {NAV_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug === "terbaru" ? "/" : `/kategori/${cat.slug}`}
              className={`px-3 py-1.5 text-sm whitespace-nowrap rounded-md transition-colors ${
                isActive(cat.slug)
                  ? "text-blue-600 font-semibold"
                  : "text-gray-500 hover:text-blue-600 font-semibold"
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
