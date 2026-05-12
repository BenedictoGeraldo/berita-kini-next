import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import DetailView from "@/views/berita/DetailView";
import { getNewsById } from "@/services/berita";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORY_MAP } from "@/constants/categories";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ kategori?: string }>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { id } = await params;
  const { kategori } = await searchParams;

  if (!kategori || !CATEGORY_MAP[kategori]) return {};

  const article = await getNewsById(id, kategori);
  if (!article) return {};

  return {
    title: article.title,
    description: article.contentSnippet,
    openGraph: {
      title: article.title,
      description: article.contentSnippet,
      images: [{ url: article.image.large }],
      type: "article",
    },
  };
}

export default async function BeritaDetailPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { kategori } = await searchParams;

  if (!kategori || !CATEGORY_MAP[kategori]) notFound();

  const article = await getNewsById(id, kategori);
  if (!article) notFound();

  return (
    <>
      <Navbar />
      <DetailView article={article} />
      <Footer />
    </>
  );
}
