'use client'

import { useEffect, useState } from 'react'
import { SearchIcon, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Heading } from '../ui/heading'
import { Input } from '../ui/Input'
import { Select } from '../ui/select'
import { customBlur } from '@/app/fonts'
import { angolaCitiesByProvince, angolaProvincesList, caboVerdeIslandsList, caboVerdeMunicipalitiesByIsland, countriesList, guineaBissauRegionsList, guineaBissauSectorsByRegion, mozambiqueDistrictsByProvince, mozambiqueProvincesList, saoTomePrincipeCitiesByRegion, saoTomePrincipeRegionsList, SelectItemType, timorLesteAdministrativePostsByMunicipality, timorLesteMunicipalitiesList } from './palop'

type CountryCode =
  | 'angola'
  | 'cabo-verde'
  | 'guine-bissau'
  | 'mocambique'
  | 'sao-tome-e-principe'
  | 'timor-leste'

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


const profileTypesList: SelectItemType[] = [
  {
    label: "Empresa",
    value: "empresa"
  },
  {
    label: "Festival",
    value: "festival"
  },
  {
    label: "Profissionais",
    value: "profissionais"
  }
];


const categoriesList: SelectItemType[] = [
  { label: "Aderecistas", value: "aderecistas" },
  { label: "Animadoras", value: "animadoras" },
  { label: "Anotadoras", value: "anotadoras" },
  { label: "Argumentistas", value: "argumentistas" },
  { label: "Atrizes", value: "atrizes" },
  { label: "Chefes de produção e assistentes", value: "chefes-de-producao-e-assistentes" },
  { label: "Compositoras e músicas", value: "compositoras-e-musicas" },
  { label: "Coloristas", value: "coloristas" },
  { label: "Coordenadoras de intimidade", value: "coordenadoras-de-intimidade" },
  { label: "Coordenadoras de distribuição e ou aquisições", value: "coordenadoras-de-distribuicao-e-ou-aquisicoes" },
  { label: "Coordenadoras de licenciamento e propriedade intelectual", value: "coordenadoras-de-licenciamento-e-propriedade-intelectual" },
  { label: "Coordenadoras de pós-produção", value: "coordenadoras-de-pos-producao" },
  { label: "Críticas", value: "criticas" },
  { label: "Curadoras", value: "curadoras" },
  { label: "Diretoras de arte e assistentes", value: "diretoras-de-arte-e-assistentes" },
  { label: "Diretoras de casting e assistentes", value: "diretoras-de-casting-e-assistentes" },
  { label: "Diretoras de fotografia", value: "diretoras-de-fotografia" },
  { label: "Diretoras de guarda roupa e figurinistas", value: "diretoras-de-guarda-roupa-e-figurinistas" },
  { label: "Diretoras de som", value: "diretoras-de-som" },
  { label: "Fotógrafas", value: "fotografas" },
  { label: "Green consultants", value: "green-consultants" },
  { label: "Investigadoras", value: "investigadoras" },
  { label: "Montadoras/editoras e assistentes", value: "montadoras-editoras-e-assistentes" },
  { label: "Operadoras de câmara e assistentes", value: "operadoras-de-camara-e-assistentes" },
  { label: "Perchistas", value: "perchistas" },
  { label: "Pós-produtora de som", value: "pos-produtora-de-som" },
  { label: "Produtoras", value: "produtoras" },
  { label: "Produtoras de animação", value: "produtoras-de-animacao" },
  { label: "Produtoras executivas", value: "produtoras-executivas" },
  { label: "Professoras/formadoras", value: "professoras-formadoras" },
  { label: "Programadoras", value: "programadoras" },
  { label: "Realizadoras e assistentes", value: "realizadoras-e-assistentes" },
  { label: "Tradutoras", value: "tradutoras" },
];



export const FilterSidebar: React.FC = () => {
  const [search, setSearch] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedType, setSelectedType] = useState<string>(profileTypesList[0].value)
  const [selectedCategory, setSelectedCategory] = useState('')

  const provinceOptions = selectedCountry
    ? provincesByCountry[selectedCountry as CountryCode] ?? []
    : []

  const cityOptions = selectedCountry && selectedProvince
    ? citiesByCountryAndProvince[selectedCountry as CountryCode]?.[selectedProvince] ?? []
    : []

  useEffect(() => {
    setSelectedProvince('')
    setSelectedCity('')
  }, [selectedCountry])

  useEffect(() => {
    setSelectedCity('')
  }, [selectedProvince])

  useEffect(() => {
    if (selectedType === 'profissionais') return
    setSelectedCategory('')
  }, [selectedType])

  function handleClear() {
    setSearch('')
    setSelectedCountry('')
    setSelectedProvince('')
    setSelectedCity('')
    setSelectedType(profileTypesList[0].value)
    setSelectedCategory('')
  }

  function handleSearch() {
    // TODO: ligar aos query params / chamada à API quando existir
    console.log({
      search,
      selectedCountry,
      selectedProvince,
      selectedCity,
      selectedType,
      selectedCategory,
    })
  }

  return (
    <aside className="w-82.75 h-auto p-6 flex flex-col gap-6">
      {/* Search */}
      <div className="flex flex-col gap-4">

        <div className="flex items-center">
          <Input placeholder='Pesquisar...' className="h-10 w-full rounded-full border-2 border-white bg-transparent px-3 text-rede-white outline-none placeholder:text-rede-white" icon={<SearchIcon size={18} className="text-rede-white" />} iconPosition={"right"} iconContainerClassName='h-10 w-10 rounded-full border-2 border-white p-2.5"' />
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

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Tipo</Heading>
          <div className="flex items-center">
            <Select
              variant='primary'
              value={selectedType}
              placeholder='Selecionar tipo'
              options={profileTypesList}
              triggerClassName="rounded-full border-2 border-white px-3 text-rede-white outline-none"
              popoverClassName="rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]"
              satelliteClassName="border-2 border-white"
              onChange={(val: string) => setSelectedType(val)}
            />
          </div>
        </div>

    {
      (selectedType === 'profissionais') && 
      <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Categoria</Heading>
          <div className="flex items-center">
            <Select
              variant='primary'
              value={selectedCategory}
              placeholder='Selecione a categoria'
              options={categoriesList}
              triggerClassName="rounded-full border-2 border-white bg-transparent px-3 text-rede-white outline-none"
              popoverClassName="rounded-[12px] border-1 mt-[15px] border-white px-3 text-rede-white outline-none"
              satelliteClassName="rounded-full border-2 border-white bg-transparent px-3 text-rede-white outline-none"
              onChange={(val: string) => setSelectedCategory(val)}
            />
          </div>
        </div>
    }
        
      </div>
    </aside>
  )
}