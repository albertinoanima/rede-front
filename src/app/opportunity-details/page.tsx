import { Hero } from "@/components/opportunities/Hero";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { SectionViewOpportunity } from "@/components/opportunities/SectionViewOpportunity";
import { opportunities } from "@/components/opportunities/data";
import { SimilarOpportunities } from "@/components/opportunities/SimilarOpportunities";
import { getSimilarOpportunities } from "@/components/opportunities/actions";

interface OpportunityDetailsPageProps {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function OpportunityDetailsPage({
  searchParams,
}: OpportunityDetailsPageProps) {
  const resolvedSearchParams = await searchParams;
  const id = resolvedSearchParams?.id;

  const theOpportunity = opportunities.find(
    (opportunity) => opportunity.id === String(id),
  );

  if (!theOpportunity) {
    return null;
  }

  const similarOpportunities = getSimilarOpportunities(
    theOpportunity,
    opportunities,
    3,
  );

  return (
    <main className="bg-rede-bg">
      <TopBar />
      <Hero imageUrl={theOpportunity.cover} />
      <SectionViewOpportunity selectedOpportunity={theOpportunity} />
      <SimilarOpportunities similarOpportunities={similarOpportunities} />
      <Footer />
    </main>
  );
}
