import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import DetailView from "@/views/berita/DetailView";
import { fakeArticles, getArticleBySlug } from "@/lib/fakeDb";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
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
  return fakeArticles.map((article) => ({ slug: article.slug }));
}

export default async function BeritaDetailPage({ params }: Props) {
  const { slug } = await params;
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "24px", paddingBottom: "24px" }}>
        <DetailView slug={slug} />
      </div>
      <Footer />
    </>
  );
}
