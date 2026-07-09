"use client"

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import Card from "./ui/card";

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
    <Card
      image={<img
        src={opportunityData.cover}
        className="w-full h-full object-cover" alt="Diretora no set de filmagem" />}
      footer={
        <div className="flex items-end justify-between gap-4 mt-2">
          <Text className="rounded-4xl text-[12px] font-medium leading-4">
            {opportunityData.description}
          </Text>

          <Button showMainButton={false} iconPosition="right" icon={<ArrowRight width={12} height={12} />} onClick={() => console.log("htddhdt")} />
        </div>
      }>

      <div className="flex flex-wrap gap-2.5">
        {opportunityData.status === "open" && (
          <span className="border-2 border-transparent bg-rede-white text-rede-surface px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4 whitespace-nowrap">
            Aberta
          </span>
        )}

        {opportunityData.status === "starting" && (
          <span className="border-2 border-transparent bg-rede-gray text-rede-surface px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4 whitespace-nowrap">
            A iniciar
          </span>
        )}

        {opportunityData.status === "expired" && (
          <span className="border-2 border-transparent bg-rede-red text-rede-surface px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4 whitespace-nowrap">
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

    </Card>
  );
};