"use client";

import { useState } from "react";
import { FilterSidebar } from "./FilterSidebar";
import { OpportunityCard, OpportunityType } from "../OpportunityCard";
import { Button } from "../ui/button";
import { customBlur } from "@/app/fonts";
import { Heading } from "../ui/heading";

const opportunities: OpportunityType[] = [
  {
    id: "dxtjdtjtdjdtj",
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "open",
    startDate: "12",
    endDate: "15 Fev",
    type: "Financiamento",
    eligibility: ["Angola", "Luanda"],
    cover: "/assets/opportunities/image-1.png",
  },
  {
    id: "dxtjdtjtdjdtj2",
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "open",
    startDate: "12",
    endDate: "15 Fev",
    type: "Parceria",
    eligibility: ["Angola", "Luanda"],
    cover: "/assets/opportunities/image-2.png",
  },
  {
    id: "dxtjdtjtdjdtj33",
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "open",
    startDate: "12",
    endDate: "15 Fev",
    type: "Co-produção",
    eligibility: ["Angola", "Luanda"],
    cover: "/assets/opportunities/image-3.png",
  },
  {
    id: "dxtjdtjtdjdtj44",
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "starting",
    startDate: "12",
    endDate: "15 Fev",
    type: "Financiamento",
    eligibility: ["Angola", "Luanda"],
    cover: "/assets/opportunities/image-4.png",
  },
  {
    id: "dxtjdtjtdjdtj55",
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "starting",
    startDate: "12",
    endDate: "15 Fev",
    type: "Financiamento",
    eligibility: ["Angola", "Luanda"],
    cover: "/assets/opportunities/image-5.png",
  },
  {
    id: "dxtjdtjtdjdtj66",
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "starting",
    startDate: "12",
    endDate: "15 Fev",
    type: "Financiamento",
    eligibility: ["Angola", "Luanda"],
    cover: "/assets/opportunities/image-6.png",
  },
  {
    id: "dxtjdtjtdjdtj77",
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "expired",
    startDate: "12",
    endDate: "15 Fev",
    type: "Financiamento",
    eligibility: ["Angola", "Luanda"],
    cover: "/assets/opportunities/image-7.png",
  },
  {
    id: "dxtjdtjtdjdtj88",
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "expired",
    startDate: "12",
    endDate: "15 Fev",
    type: "Financiamento",
    eligibility: ["Angola", "Luanda"],
    cover: "/assets/opportunities/image-8.png",
  },
  {
    id: "dxtjdtjtdjdtj99",
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "expired",
    startDate: "12",
    endDate: "15 Fev",
    type: "Financiamento",
    eligibility: ["Angola", "Luanda"],
    cover: "/assets/opportunities/image-9.png",
  },
];

export const Opportunities: React.FC = () => {
  const [filteredOpportunities, setFilteredOpportunities] =
    useState<OpportunityType[]>(opportunities);

  return (
    <section className="mt-20 h-auto w-full">
      <div className="mx-auto h-auto w-full max-w-360">
        <div className="flex items-center justify-between">
          <Heading
            level="h2"
            className={`${customBlur.className} ml-3 mb-5 text-[48px] leading-11.5 font-medium text-rede-yellow`}
          >
            Todas <br />
            Oportunidades
          </Heading>

          <div className="flex justify-end gap-3 px-6 py-4">
            <Button variant="secondary">
              Ordenar por
            </Button>

            <Button variant="secondary">
              {filteredOpportunities.length}{" "}
              {filteredOpportunities.length === 1
                ? "resultado"
                : "resultados"}
            </Button>
          </div>
        </div>

        <div className="mt-10 flex">
          <div className="w-82.75 shrink-0">
            <FilterSidebar
              opportunities={opportunities}
              setFilteredOpportunities={setFilteredOpportunities}
            />
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 px-6 pb-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunityData={opportunity}
              />
            ))}

            {filteredOpportunities.length === 0 && (
              <div className="col-span-full flex min-h-60 items-center justify-center">
                <p className="text-center text-rede-gray">
                  Nenhuma oportunidade encontrada.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};