import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Berita Kini — Portal Berita Indonesia Terpercaya",
    template: "%s | Berita Kini",
  },
  description:
    "Portal berita Indonesia terpercaya. Dapatkan berita terkini nasional, internasional, ekonomi, olahraga, teknologi, hiburan, dan gaya hidup.",
  keywords: ["berita", "indonesia", "nasional", "internasional", "terkini"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
