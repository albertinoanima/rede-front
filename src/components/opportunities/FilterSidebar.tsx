'use client'

import { SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Heading } from '../ui/heading'
import { Input } from '../ui/Input'
import { Select } from '../ui/select'
import { opportunityCategories } from './data'
import { countriesList, SelectItemType } from '../network/filters'
import { OpportunityFilters } from './actions'

const categories: SelectItemType[] = opportunityCategories.map((category) => ({
  label: category,
  value: category.toLowerCase(),
}))

type FilterSidebarProps = {
  filters: OpportunityFilters
  onFiltersChange: (filters: OpportunityFilters) => void
  onClear: () => void
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFiltersChange,
  onClear,
}) => {
  const {
    search,
    country: selectedCountry,
    category: selectedCategory,
  } = filters

  const handleSearchChange = (value: string) => {
    onFiltersChange({
      ...filters,
      search: value,
    })
  }

  const handleCountryChange = (value: string) => {
    onFiltersChange({
      ...filters,
      country: value,
    })
  }

  const handleCategoryChange = (value: string) => {
    onFiltersChange({
      ...filters,
      category: value,
    })
  }

  const selectTriggerClassName =
    'w-full border-[1.3px] border-white px-3 text-rede-white outline-none'

  const selectPopoverClassName =
    'mt-2.5 max-w-[calc(100vw-2rem)] rounded-[8px] border-[1.3px] border-white px-3 text-rede-white outline-none sm:max-w-none'

  return (
    <aside className="flex h-auto w-full min-w-0 flex-col gap-6 px-4 py-6 sm:px-6 lg:w-82.75 lg:p-6">
      <div className="mb-6 flex w-full min-w-0 flex-col gap-4 lg:mb-10">
        <div className="flex w-full min-w-0 items-center lg:-mt-5">
          <Input
            placeholder="Pesquisar..."
            value={search}
            onChange={({ target }) => handleSearchChange(target.value)}
            className="h-10 w-full min-w-0 border-[1.3px] border-white bg-transparent px-3 text-rede-white outline-none placeholder:text-rede-white"
            icon={<SearchIcon size={18} className="text-rede-white" />}
            iconPosition="right"
            iconContainerClassName="h-10 w-10 shrink-0 border-[1.3px] border-white p-2.5"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-2">
          <Heading className="text-lg font-medium leading-7 text-rede-white sm:text-[20px]">
            País
          </Heading>

          <div className="flex w-full min-w-0 items-center">
            <Select
              variant="primary"
              value={selectedCountry}
              placeholder="Selecione o país"
              options={countriesList}
              triggerClassName={selectTriggerClassName}
              popoverClassName={selectPopoverClassName}
              satelliteClassName="border-[1.3px] border-white"
              onChange={handleCountryChange}
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-2">
          <Heading className="text-lg font-medium leading-7 text-rede-white sm:text-[20px]">
            Categoria
          </Heading>

          <div className="flex w-full min-w-0 items-center">
            <Select
              variant="primary"
              value={selectedCategory}
              placeholder="Selecione a categoria"
              options={categories}
              triggerClassName={selectTriggerClassName}
              popoverClassName={selectPopoverClassName}
              satelliteClassName="border-[1.3px] border-white"
              onChange={handleCategoryChange}
            />
          </div>
        </div>

        <div className="mt-3 flex w-full gap-2 lg:mt-5">
          <Button
            containerClassName="w-full"
            variant="primary"
            onClick={onClear}
          >
            Limpar filtros
          </Button>
        </div>
      </div>
    </aside>
  )
}