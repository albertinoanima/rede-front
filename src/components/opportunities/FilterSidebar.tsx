'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Heading } from '../ui/heading'
import { Input } from '../ui/Input'
import { Select } from '../ui/select'
import { opportunityCategories } from './categories'
import { angolaCitiesByProvince, angolaProvincesList, caboVerdeIslandsList, caboVerdeMunicipalitiesByIsland, countriesList, guineaBissauRegionsList, guineaBissauSectorsByRegion, mozambiqueDistrictsByProvince, mozambiqueProvincesList, saoTomePrincipeCitiesByRegion, saoTomePrincipeRegionsList, SelectItemType, timorLesteAdministrativePostsByMunicipality, timorLesteMunicipalitiesList } from '../network/palop'
import { CountryCode } from '../network/FilterSidebar'

const categories: SelectItemType[] = opportunityCategories.map((item) => ({ label: item, value: item.toLowerCase() }));

const provincesByCountry: Record<CountryCode, SelectItemType[]> = {
  angola: angolaProvincesList,
  'cabo-verde': caboVerdeIslandsList,
  'guine-bissau': guineaBissauRegionsList,
  mocambique: mozambiqueProvincesList,
  'sao-tome-e-principe': saoTomePrincipeRegionsList,
  'timor-leste': timorLesteMunicipalitiesList,
}

const citiesByCountryAndProvince: Record<CountryCode, Record<string, SelectItemType[]>> = {
  angola: angolaCitiesByProvince,
  'cabo-verde': caboVerdeMunicipalitiesByIsland,
  'guine-bissau': guineaBissauSectorsByRegion,
  mocambique: mozambiqueDistrictsByProvince,
  'sao-tome-e-principe': saoTomePrincipeCitiesByRegion,
  'timor-leste': timorLesteAdministrativePostsByMunicipality,
}

type FilterSidebarType = {
  opportunities: any[];
  setFilteredOpportunities: Dispatch<SetStateAction<any[]>>;
}

export const FilterSidebar: React.FC<FilterSidebarType> = ({ opportunities, setFilteredOpportunities }) => {
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].label);

  const provinceOptions = selectedCountry
    ? provincesByCountry[selectedCountry as CountryCode] ?? []
    : []

  const cityOptions = selectedCountry && selectedProvince
    ? citiesByCountryAndProvince[selectedCountry as CountryCode]?.[selectedProvince] ?? []
    : []

  const handleClear = () => {
    setSearch('')
    setSelectedCountry('')
    setSelectedCategory('')
  }

  const handleSearch = () => {
    // TODO: ligar aos query params / chamada à API quando existir
    console.log({
      search,
      selectedCountry,
      selectedCategory
    })
  }

  return (
    <aside className="w-82.75 h-auto p-6 flex flex-col gap-6">
      {/* Search */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <Input placeholder='Pesquisar...' value={search} onChange={({ target }) => setSearch(target.value)} className="h-10 w-full rounded-full border-2 border-white bg-transparent px-3 text-rede-white outline-none placeholder:text-rede-white" icon={<SearchIcon size={18} className="text-rede-white" />} iconPosition={"right"} iconContainerClassName='h-10 w-10 rounded-full border-2 border-white p-2.5"' />
        </div>

        <div className="flex gap-2">
          <Button containerClassName='w-full' onClick={handleSearch}>
            Pesquisar
          </Button>

          <Button containerClassName='w-full' variant={"secondary"} onClick={handleClear}>
            Limpar
          </Button>
        </div>

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>País</Heading>
          <div className="flex items-center">
            <Select
              variant='primary'
              value={selectedCountry}
              placeholder='Selecione o país'
              options={countriesList}
              triggerClassName="rounded-full border-2 border-white px-3 text-rede-white outline-none"
              popoverClassName="rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]"
              satelliteClassName="border-2 border-white"
              onChange={(val: string) => setSelectedCountry(val)}
            />
          </div>
        </div>


        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Província</Heading>
          <div className="flex items-center">
            <Select
              variant='primary'
              value={selectedProvince}
              placeholder={selectedCountry ? 'Selecione a província' : 'Selecione o país primeiro'}
              options={provinceOptions}
              triggerClassName="rounded-full border-2 border-white px-3 text-rede-white outline-none"
              popoverClassName="rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]"
              satelliteClassName="border-2 border-white"
              onChange={(val: string) => setSelectedProvince(val)}
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Localidade/Cidade</Heading>
          <div className="flex items-center">
            <Select
              variant='primary'
              value={selectedCity}
              placeholder={selectedProvince ? 'Selecione a localidade' : 'Selecione a província primeiro'}
              options={cityOptions}
              triggerClassName="rounded-full border-2 border-white px-3 text-rede-white outline-none"
              popoverClassName="rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]"
              satelliteClassName="border-2 border-white"
              onChange={(val: string) => setSelectedCity(val)}
            />
          </div>
        </div>


        {/* 
        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Tema</Heading>
          <div className="flex items-center">
            <SelectMultiple
              placeholder="Selecionar profissional"
              options={[
                { label: 'Aderecistas', value: 'aderecistas' },
                { label: 'Animadorxs', value: 'animadorxs' },
                { label: 'Anotadorxs', value: 'anotadorxs' },
                { label: 'Argumentistas', value: 'argumentistas' },
                { label: 'Aderecistas1', value: 'aderecistassx' },
                { label: 'Animadorxs2', value: 'animadorxssx' },
                { label: 'Anotadorxs3', value: 'anotadorxssx' },
                { label: 'Argumentistas4', value: 'argumentistassx' },
              ]}
              value={selectedProfissionais}
              onChange={(vals) => setSelectedProfissionais(vals)}
              triggerClassName="rounded-full border-2 border-white px-3 text-rede-white outline-none"
              popoverClassName="rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]"
              satelliteClassName="border-2 border-white"
            />
          </div>
        </div> 
        */}

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Categoria</Heading>
          <div className="flex items-center">
            <Select
              value={selectedCategory}
              placeholder='Selecione a categoria'
              options={categories}
              triggerClassName="rounded-full border-2 border-white bg-transparent px-3 text-rede-white outline-none"
              popoverClassName="rounded-[12px] border-1 mt-[15px] border-white px-3 text-rede-white outline-none"
              satelliteClassName="rounded-full border-2 border-white bg-transparent px-3 text-rede-white outline-none"
              onChange={(val: string) => setSelectedCategory(val)}
            />
          </div>
        </div>
      </div>
    </aside>
  )
}