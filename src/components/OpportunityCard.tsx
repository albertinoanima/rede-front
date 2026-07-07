import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";

export type OpportunityType = {
  id: string;
  title: string;
  description: string;
  isAvailable: boolean;
  status: "open" | "starting" | "expired";
  startDate: string;
  endDate: string;
  type: string;
  eligibility: Array<string>,
  cover: string;
}

export const OpportunityCard: React.FC<{ opportunityData: OpportunityType }> = ({ opportunityData }) => {
  return (
    <div className="max-w-110 bg-[#1a1a1a] text-white overflow-hidden shadow-xl font-sans pb-8">
      <div className="w-full h-auto aspect-4/3 overflow-hidden">
        <img src={opportunityData.cover} alt="Diretora no set de filmagem" className="w-full h-full object-cover grayscale brightness-90" />
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          {opportunityData.status === "open" && (
            <span className="border-2 border-transparent bg-rede-white text-rede-black px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4 whitespace-nowrap">
              Aberta
            </span>
          )}

          {opportunityData.status === "starting" && (
            <span className="border-2 border-transparent bg-rede-pink text-rede-black px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4 whitespace-nowrap">
              A iniciar
            </span>
          )}

          {opportunityData.status === "expired" && (
            <span className="border-2 border-transparent bg-rede-red text-rede-black px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4 whitespace-nowrap">
              Encerrada
            </span>
          )}

          <span className="border-2 border-rede-white px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4 whitespace-nowrap">
            {`${opportunityData.startDate} - ${opportunityData.endDate}`}
          </span>

          <span className="border-2 border-rede-white px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4 whitespace-nowrap">
            {opportunityData.type}
          </span>

          {opportunityData.eligibility.map((eligibility: any, index: number) => (
            <span
              key={index}
              className="border-2 border-rede-white px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4 whitespace-nowrap"
            >
              {eligibility}
            </span>
          ))}
        </div>

        <Heading level={"h3"} className="text-[20px] font-semibold leading-5 mt-1">
          {opportunityData.title}
        </Heading>

        <div className="flex items-end justify-between gap-4 mt-2">
          <Text className="rounded-4xl text-[12px] font-medium leading-4">
            {opportunityData.description}
          </Text>

          <Button className="w-16 h-16 p-0 rounded-full">
            <ArrowRight color="black" width={20} height={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};