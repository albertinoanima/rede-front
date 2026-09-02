'use client'

import { useMemo } from 'react'
import { FilterSidebar } from './FilterSidebar'
import { OpportunityCard } from '../OpportunityCard'
import { customBlur } from '@/app/fonts'
import { Heading } from '../ui/heading'
import { filterOpportunities } from './actions'
import { opportunities } from './data'
import { Text } from '../ui/text'
import { useOpportunityFilters } from './useOpportunityFilters'

const OpportunitiesContent: React.FC = () => {
  const { filters, setFilters, clearFilters } = useOpportunityFilters()

  const filteredOpportunities = useMemo(
    () => filterOpportunities(opportunities, filters),
    [filters],
  )


  return (
    <section className="mt-12 h-auto w-full sm:mt-16 lg:mt-20">
      <div className="mx-auto h-auto w-full max-w-360">
        <div className="flex items-end justify-between gap-4 px-4 sm:items-center sm:px-6 lg:px-0">
          <Heading
            level="h2"
            className={`${customBlur.className} mb-3 text-[38px] font-medium leading-[0.95] text-rede-yellow sm:mb-5 sm:text-[44px] lg:ml-3 lg:text-[48px] lg:leading-11.5`}
          >
            Todas as
            <br />
            oportunidades
          </Heading>

          <div className="flex shrink-0 justify-end py-4 sm:px-6">
            <Text className="text-[14px] leading-4">
              {filteredOpportunities.length}{' '}
              {filteredOpportunities.length === 1
                ? 'resultado'
                : 'resultados'}
            </Text>
          </div>
        </div>

        <div className="mt-6 flex w-full min-w-0 flex-col lg:mt-10 lg:flex-row">
          <div className="w-full shrink-0 lg:w-82.75">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              onClear={clearFilters}
            />
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 px-4 pb-6 sm:grid-cols-2 sm:px-6 xl:grid-cols-3">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunityData={opportunity}
              />
            ))}

            {filteredOpportunities.length === 0 && (
              <div className="col-span-full flex min-h-60 items-center justify-center px-4">
                <p className="text-center text-rede-gray">
                  Nenhuma oportunidade encontrada para os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export const Opportunities: React.FC = () => {
  return <OpportunitiesContent />
}
