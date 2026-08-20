'use client'

import { SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Heading } from '../ui/heading'
import { Input } from '../ui/Input'
import { Select } from '../ui/select'
import { countriesList, SelectItemType } from '../network/filters'
import { categories } from './data'
import { NewsFilters } from './actions'

type FilterSidebarProps = {
  filters: NewsFilters
  onFiltersChange: (filters: NewsFilters) => void
  onClear: () => void
  yearOptions: SelectItemType[]
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFiltersChange, onClear, yearOptions }) => {
  const { search, country: selectedCountry, category: selectedCategory, year: selectedYear } = filters

  const handleSearchChange = (value: string) =>
    onFiltersChange({ ...filters, search: value })

  const handleCountryChange = (value: string) =>
    onFiltersChange({ ...filters, country: value })

  const handleCategoryChange = (value: string) =>
    onFiltersChange({ ...filters, category: value })

  const handleYearChange = (value: string) =>
    onFiltersChange({ ...filters, year: value })

  return (
    <aside className="w-82.75 h-auto pl-6 pr-6 flex flex-col gap-6">
      {/* Search */}
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex items-center">
          <Input
            placeholder='Pesquisar...'
            value={search}
            onChange={({ target }) => handleSearchChange(target.value)}
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
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Ano</Heading>
          <div className="flex items-center">
            <Select
              variant='primary'
              value={selectedYear}
              placeholder={yearOptions.length > 0 ? 'Selecione o ano' : 'Sem anos disponíveis'}
              options={yearOptions}
              triggerClassName="border-[1.3px] border-white px-3 text-rede-white outline-none"
              popoverClassName="rounded-[8px] border-[1.3px] border-white px-3 text-rede-white outline-none mt-[10px]"
              satelliteClassName="border-[1.3px] border-white"
              onChange={handleYearChange}
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
          <Button containerClassName='w-full' variant={"primary"} onClick={onClear}>
            Limpar filtro
          </Button>
        </div>

      </div>
    </aside>
  )
}
