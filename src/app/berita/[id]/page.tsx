import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import DetailView from "@/views/berita/DetailView";
import { fakeArticles, getArticleById } from "@/lib/fakeDb";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleById(id);
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

export async function generateStaticParams() {
  return fakeArticles.map((article) => ({ id: article.id }));
}

export default async function BeritaDetailPage({ params }: Props) {
  const { id } = await params;
  return (
    <>
      <Navbar />
      <div>
        <DetailView id={id} />
      </div>
      <Footer />
    </>
  );
}
