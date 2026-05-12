import Link from "next/link";
import Image from "next/image";
import { NAV_CATEGORIES } from "@/constants/categories";

export default function Footer() {
  return (
    <footer className="bg-[#1e2a3a] text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
              </svg>
            </div>
            <span className="font-bold text-base">Berita Kini</span>
          </div>
          <p className="text-[11px] text-gray-400">© 2023 Berita Kini. All Rights Reserved.</p>
          <p className="text-xs text-gray-400 mt-4 mb-3 font-medium">Ikuti Kami</p>
          <div className="flex gap-2">
            {[
              { label: "YouTube", path: "M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 19 12 19 12 19s4.8 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.2 3L10 15z" },
              { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
              { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
            ].map((s) => (
              <a key={s.label} href="#" aria-label={s.label}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">Telusuri</p>
          <ul className="flex flex-col gap-2.5">
            {NAV_CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link href={cat.slug === "terbaru" ? "/" : `/kategori/${cat.slug}`}
                  className="text-xs text-gray-400 hover:text-white transition-colors">
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">Bantuan</p>
          <ul className="flex flex-col gap-2.5">
            {["Kontak Kami", "Laporan Pembajakan", "Kebijakan"].map((item) => (
              <li key={item}>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">
            Berlangganan Berita Terbaru
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Masukan email..."
              className="flex-1 bg-white/10 border border-white/15 border-r-0 rounded-l-md px-3 py-2 text-xs text-white placeholder-white/40 outline-none focus:border-blue-400"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-r-md transition-colors">
              <svg className="w-3.5 h-3.5 fill-none stroke-white" viewBox="0 0 24 24" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-[11px] text-gray-500">© 2023 Berita Kini. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
