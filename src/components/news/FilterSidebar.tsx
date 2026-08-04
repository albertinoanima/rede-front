'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, Search, SearchIcon, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Heading } from '../ui/heading'
import { Input } from '../ui/Input'
import { Select } from '../ui/select'
import { SelectMultiple } from '../ui/select-multiple'
import { CountryCode } from '../network/FilterSidebar'
import { angolaCitiesByProvince, angolaProvincesList, caboVerdeIslandsList, caboVerdeMunicipalitiesByIsland, countriesList, guineaBissauRegionsList, guineaBissauSectorsByRegion, mozambiqueDistrictsByProvince, mozambiqueProvincesList, saoTomePrincipeCitiesByRegion, saoTomePrincipeRegionsList, SelectItemType, timorLesteAdministrativePostsByMunicipality, timorLesteMunicipalitiesList } from '../network/palop'

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

export const FilterSidebar: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('');


  return (
    <aside className="w-82.75 h-auto pl-6 pr-6 flex flex-col gap-6">
      {/* Search */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <Input placeholder='Pesquisar...' className="h-10 w-full rounded-full border-2 border-white bg-transparent px-3 text-rede-white outline-none placeholder:text-rede-white" icon={<SearchIcon size={18} className="text-rede-white" />} iconPosition={"right"} iconContainerClassName='h-10 w-10 rounded-full border-2 border-white p-2.5"' />
        </div>

        <div className="flex gap-2">
          <Button containerClassName='w-full'>
            Pesquisar
          </Button>

          <Button containerClassName='w-full' variant={"secondary"}>
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
              triggerClassName="rounded-full border-2 border-white bg-transparent px-3 text-rede-white outline-none"
              popoverClassName="rounded-[12px] border-1 mt-[15px] border-white px-3 text-rede-white outline-none"
              satelliteClassName="rounded-full border-2 border-white bg-transparent px-3 text-rede-white outline-none"
              onChange={(val: string) => setSelectedCountry(val)}
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Ano</Heading>
          <div className="flex items-center">
            <Input placeholder='Pesquisar...' type='month' className="h-10 w-full rounded-full border-2 border-white bg-transparent px-3 text-rede-white outline-none placeholder:text-rede-white" icon={<ArrowRight size={18} className="text-rede-white" />} iconPosition={"right"} iconContainerClassName='h-10 w-10 rounded-full border-2 border-white p-2.5"' />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Categoria</Heading>
          <div className="flex items-center">
            <Select value='Indo' placeholder='Selecione o Pais' options={[{ label: "Opção 1", value: "opcao-1" }, { label: "Opção 2", value: "opcao-2" }]}
              triggerClassName="rounded-full border-2 border-white bg-transparent px-3 text-rede-white outline-none"
              popoverClassName="rounded-[12px] border-1 mt-[15px] border-white px-3 text-rede-white outline-none"
              satelliteClassName="rounded-full border-2 border-white bg-transparent px-3 text-rede-white outline-none"
            />
          </div>
        </div>
      </div>
    </aside>
  )
}