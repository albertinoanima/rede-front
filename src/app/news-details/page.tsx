import { Hero } from "@/components/news/Hero";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { SectionViewNews } from "@/components/news/SectionViewNews";
import { NEWS } from "@/components/news/data";
import { SimilarNews } from "@/components/news/SimilarNews";
import { getSimilarNews } from "@/components/news/actions";

interface NewsDetailsPageProps {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function NewsDetailsPage({
  searchParams,
}: NewsDetailsPageProps) {
  const resolvedSearchParams = await searchParams;
  const id = resolvedSearchParams?.id;

  const theNews = NEWS.find(
    (news) => news.id === String(id),
  );

  if (!theNews) {
    return null;
  }

  const similarNews = getSimilarNews(
    theNews,
    NEWS,
    3,
  );

  return (
    <main className="bg-rede-bg">
      <TopBar />
      <Hero imageUrl={theNews.imageUrl} />
      <SectionViewNews selectedNews={theNews} />
      <SimilarNews similarNews={similarNews} />
      <Footer />
    </main>
  );


}

