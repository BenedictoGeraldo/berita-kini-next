import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import KategoriView from "@/views/kategori/KategoriView";
import { CATEGORY_MAP } from "@/constants/categories";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const cat = CATEGORY_MAP[id];
  if (!cat) return {};
  return {
    title: `Berita ${cat.label}`,
    description: `Kumpulan berita ${cat.label} terkini dari Indonesia dan dunia.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((id) => ({ id }));
}

export default async function KategoriPage({ params }: Props) {
  const { id } = await params;
  if (!CATEGORY_MAP[id]) notFound();

  return (
    <>
      <Navbar />
      <KategoriView categoryId={id} />
      <Footer />
    </>
  );
}
