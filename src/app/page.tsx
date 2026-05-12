import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HomeView from "@/views/home/HomeView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita Kini — Portal Berita Indonesia Terpercaya",
  description:
    "Berita terkini Indonesia: nasional, internasional, ekonomi, olahraga, teknologi, hiburan, dan gaya hidup.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomeView />
      <Footer />
    </>
  );
}
