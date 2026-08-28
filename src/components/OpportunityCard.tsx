"use client"

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import Card from "./ui/card";
import { Tag } from "./Tag";

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
  themes?: string[];
  country: string;
  cover: string;
}

export const OpportunityCard: React.FC<{ opportunityData: OpportunityType }> = ({ opportunityData }) => {
  return (
    <Card
      image={<img
        src={opportunityData.cover}
        className="w-full h-full object-cover" alt="Diretora no set de filmagem" />}
      footer={
        <div className="w-full h-12 flex items-center justify-between gap-4 mt-2">
          <Text className="text-[14px] leading-relaxed font-medium line-clamp-2">
            {/* {opportunityData.description} */}
          </Text>

          <Button showMainButton={false} iconPosition="right" icon={<ArrowRight width={12} height={12} />} onClick={() => console.log("htddhdt")} />
        </div>
      }>

      <div className="flex flex-wrap gap-2.5">
        {opportunityData.status === "open" && (
          <Tag label="Aberta" className="border-transparent bg-rede-white text-rede-surface" />
        )}

        {opportunityData.status === "starting" && (
          <Tag label="A iniciar" className="border-transparent bg-rede-gray text-rede-surface" />
        )}

        {opportunityData.status === "expired" && (
          <Tag label="Encerrada" className="border-transparent bg-rede-red text-rede-surface" />
        )}

        <Tag label={`${opportunityData?.startDate} - ${opportunityData.endDate}`} href={``} />
        <Tag label={`${opportunityData?.type}`} href={`/opportunities?tag=${encodeURIComponent(opportunityData.type)}`} />

        {opportunityData.eligibility.map((eligibility: string, index: number) => (
          <Tag href={`/opportunities?tag=${encodeURIComponent(eligibility)}`} label={eligibility} key={eligibility + "xD" + index}/>
        ))}
      </div>

      <Heading level={"h3"} className="text-[20px] font-semibold leading-7 mt-1">
        {opportunityData.title}
      </Heading>

    </Card>
  );
};