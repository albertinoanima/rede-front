"use client";

import { useMemo, useState } from "react";
import { FilterSidebar } from "./FilterSidebar";
import { OpportunityCard } from "../OpportunityCard";
import { Button } from "../ui/button";
import { customBlur } from "@/app/fonts";
import { Heading } from "../ui/heading";
import { defaultOpportunityFilters, filterOpportunities } from "./actions";
import { opportunities } from "./data";
import { Text } from "../ui/text";




export const Opportunities: React.FC = () => {
  const [filters, setFilters] = useState(defaultOpportunityFilters);
  const [appliedFilters, setAppliedFilters] = useState(defaultOpportunityFilters);

  // TODO: once a real API exists, replace this with a fetch keyed on
  // `appliedFilters` (e.g. useEffect + setResults) instead of filtering
  // the static `opportunities` array in memory.
  const filteredOpportunities = useMemo(
    () => filterOpportunities(opportunities, appliedFilters),
    [appliedFilters],
  );

  const handleSearch = () => setAppliedFilters(filters);
  const handleClear = () => {
    setFilters(defaultOpportunityFilters);
    setAppliedFilters(defaultOpportunityFilters);
  };

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
            {/* 
            <Button variant="secondary">
              Ordenar por
            </Button> 
            */}

            <Text className="text-[14px] leading-4" >
              {filteredOpportunities.length}{" "}
              {filteredOpportunities.length === 1
                ? "resultado"
                : "resultados"}
            </Text>
          </div>
        </div>

        <div className="mt-10 flex">
          <div className="w-82.75 shrink-0">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              onSearch={handleSearch}
              onClear={handleClear}
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