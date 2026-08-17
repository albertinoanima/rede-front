'use client'

import { SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Heading } from '../ui/heading'
import { Input } from '../ui/Input'
import { Select } from '../ui/select'
import { opportunityCategories } from './data'
import { countriesList, SelectItemType } from '../network/filters'
import { OpportunityFilters } from './actions'

const categories: SelectItemType[] = opportunityCategories.map((item) => ({ label: item, value: item.toLowerCase() }))

type FilterSidebarProps = {
  filters: OpportunityFilters
  onFiltersChange: (filters: OpportunityFilters) => void
  onSearch: () => void
  onClear: () => void
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({filters, onFiltersChange, onSearch, onClear }) => {
  const { search, country: selectedCountry, category: selectedCategory } = filters

  const handleSearchChange = (value: string) =>
    onFiltersChange({ ...filters, search: value })

  const handleCountryChange = (value: string) =>
    onFiltersChange({ ...filters, country: value })

  const handleCategoryChange = (value: string) =>
    onFiltersChange({ ...filters, category: value })

  return (
    <aside className="w-82.75 h-auto p-6 flex flex-col gap-6">
      {/* Search */}
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex items-center -mt-5">
          <Input
            onIconClick={onSearch}
            placeholder='Pesquisar...'
            value={search}
            onChange={({ target }) => handleSearchChange(target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            className="h-10 w-full border-[1.3px] border-white bg-transparent px-3 text-rede-white outline-none placeholder:text-rede-white"
            icon={<SearchIcon size={18} className="text-rede-white" />}
            iconPosition={"right"}
            iconContainerClassName='h-10 w-10 border-[1.3px] border-white p-2.5"'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>País</Heading>
          <div className="flex items-center">
            <Select
              variant='primary'
              value={selectedCountry}
              placeholder='Selecione o país'
              options={countriesList}
              triggerClassName="border-[1.3px] border-white px-3 text-rede-white outline-none"
              popoverClassName="rounded-[8px] border-[1.3px] border-white px-3 text-rede-white outline-none mt-[10px]"
              satelliteClassName="border-[1.3px] border-white"
              onChange={handleCountryChange}
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Categoria</Heading>
          <div className="flex items-center">
            <Select
              variant='primary'
              value={selectedCategory}
              placeholder='Selecione a categoria'
              options={categories}
              triggerClassName="border-[1.3px] border-white px-3 text-rede-white outline-none"
              popoverClassName="rounded-[8px] border-[1.3px] border-white px-3 text-rede-white outline-none mt-[10px]"
              satelliteClassName="border-[1.3px] border-white"
              onChange={handleCategoryChange}
            />
          </div>
        </div>


        <div className="flex gap-2 mt-5">
          <Button containerClassName='w-full' variant={"secondary"} onClick={onClear}>
            Limpar filtro
          </Button>
        </div>

      </div>
    </aside>
  )
}
