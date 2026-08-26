'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { FilterSidebar } from './FilterSidebar'
import { OpportunityCard } from '../OpportunityCard'
import { customBlur } from '@/app/fonts'
import { Heading } from '../ui/heading'
import {
  defaultOpportunityFilters,
  filterOpportunities,
  OpportunityFilters,
} from './actions'
import { opportunities, opportunityCategories } from './data'
import { Text } from '../ui/text'
import { countriesList } from '../network/filters'
import { newsSubCategories } from '../news/data'
import { normalizeNewsValue } from '../news/actions'

type OpportunitiesContentProps = {
  initialTag: string
}

const normalizeTag = normalizeNewsValue

const findSubCategoryParent = (value: string) => {
  const normalizedValue = normalizeNewsValue(value)

  for (const [category, subCategories] of Object.entries(newsSubCategories)) {
    const subCategory = subCategories.find(
      (item) => normalizeNewsValue(item) === normalizedValue,
    )

    if (subCategory) {
      return {
        category,
        subCategory: normalizeNewsValue(subCategory),
      }
    }
  }

  return null
}

const getInitialFilters = (tag: string): OpportunityFilters => {
  const normalizedTag = normalizeTag(tag)

  if (!normalizedTag) {
    return defaultOpportunityFilters
  }

  const country = countriesList.find(
    (option) =>
      normalizeTag(option.value) === normalizedTag ||
      normalizeTag(option.label) === normalizedTag,
  )

  if (country) {
    return {
      ...defaultOpportunityFilters,
      country: country.value,
    }
  }

  const category = opportunityCategories.find(
    (option) =>
      normalizeTag(option.value) === normalizedTag ||
      normalizeTag(option.label) === normalizedTag,
  )

  if (category) {
    return {
      ...defaultOpportunityFilters,
      category: category.value,
    }
  }

  const subCategoryParent = findSubCategoryParent(tag)

  if (subCategoryParent) {
    return {
      ...defaultOpportunityFilters,
      category: subCategoryParent.category,
      subCategory: subCategoryParent.subCategory,
    }
  }

  return {
    ...defaultOpportunityFilters,
    search: tag,
  }
}

const OpportunitiesContent: React.FC<OpportunitiesContentProps> = ({
  initialTag,
}) => {
  const [filters, setFilters] = useState<OpportunityFilters>(() =>
    getInitialFilters(initialTag),
  )

  const filteredOpportunities = useMemo(
    () => filterOpportunities(opportunities, filters),
    [filters],
  )

  const handleClear = () => {
    setFilters(defaultOpportunityFilters)
  }

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
              onClear={handleClear}
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
  const searchParams = useSearchParams()
  const tag =
    searchParams.get('subcategory') ??
    searchParams.get('subCategory') ??
    searchParams.get('tag') ??
    ''

  return <OpportunitiesContent key={tag} initialTag={tag} />
}
