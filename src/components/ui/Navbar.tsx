"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_CATEGORIES } from "@/constants/categories";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (id: string) => {
    if (id === "terbaru") return pathname === "/";
    return pathname === `/kategori/${id}`;
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm" ref={menuRef}>
      <div className="max-w-6xl mx-auto px-4 flex items-center py-5">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
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

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-end">
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden ml-auto p-2 text-gray-500 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? (
            <i className="ri-close-line text-xl" />
          ) : (
            <i className="ri-menu-line text-xl" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={cat.id === "terbaru" ? "/" : `/kategori/${cat.id}`}
                className={`px-3 py-2.5 text-sm rounded-md transition-colors ${
                  isActive(cat.id)
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50 font-medium"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
