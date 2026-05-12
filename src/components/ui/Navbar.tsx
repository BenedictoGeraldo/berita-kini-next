"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_CATEGORIES } from "@/constants/categories";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (id: string) => {
    if (id === "terbaru") return pathname === "/";
    return pathname === `/kategori/${id}`;
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center py-5 ">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/logo.png"
            alt="Berita Kini Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="font-bold text-gray-900 text-[15px]">
            Berita Kini
          </span>
        </Link>

        <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide flex-1 justify-end">
          {NAV_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.id === "terbaru" ? "/" : `/kategori/${cat.id}`}
              className={`px-3 py-1.5 text-sm whitespace-nowrap rounded-md transition-colors ${
                isActive(cat.id)
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
