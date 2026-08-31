import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";
import { OpportunityCard, OpportunityType } from "../OpportunityCard";

export const SimilarOpportunities: React.FC<{ similarOpportunities: OpportunityType[] }> = ({ similarOpportunities }) => {
  return (
    <section className="w-full h-auto bg-rede-surface">
      <div className="relative w-full max-w-360 h-auto mx-auto flex flex-col justify-center items-center gap-2.5 pt-28 pb-10">
        <div className="w-full h-36">
          <div className="w-full h-36">
            <Heading className={`${customBlur.className} text-rede-white text-[48px] font-medium leading-12`}>Oportunidades relacionadas</Heading>
          </div>
        </div>

        {similarOpportunities.length === 0 ? (
          <p className="text-white">
            Não existem oportunidades relacionadas.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {similarOpportunities.map((opportunity, index) => (
              <OpportunityCard opportunityData={opportunity} key={opportunity.id + "-" + index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
