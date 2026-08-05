'use client'

import { useEffect, useState } from 'react'
import { SearchIcon, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Heading } from '../ui/heading'
import { Input } from '../ui/Input'
import { Select } from '../ui/select'
import { customBlur } from '@/app/fonts'
import { angolaCitiesByProvince, angolaProvincesList, caboVerdeIslandsList, caboVerdeMunicipalitiesByIsland, countriesList, guineaBissauRegionsList, guineaBissauSectorsByRegion, mozambiqueDistrictsByProvince, mozambiqueProvincesList, saoTomePrincipeCitiesByRegion, saoTomePrincipeRegionsList, SelectItemType, timorLesteAdministrativePostsByMunicipality, timorLesteMunicipalitiesList } from './palop'

export type CountryCode =
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


export const profileTypesList: SelectItemType[] = [
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


export const categoriesList: SelectItemType[] = [
  { label: "Aderecistas", value: "aderecistas" },
  { label: "Animadorxs", value: "animadorxs" },
  { label: "Anotadorxs", value: "anotadorxs" },
  { label: "Argumentistas", value: "argumentistas" },
  { label: "Atores/Atrizes", value: "atores-atrizes" },
  { label: "Chefes de produção e assistentes", value: "chefes-de-producao-e-assistentes" },
  { label: "Compositorxs de músicas", value: "compositorxs-de-musicas" },
  { label: "Coloristxs", value: "coloristxs" },
  { label: "Coordenadorxs de intimidade", value: "coordenadorxs-de-intimidade" },
  {
    label: "Coordenadorxs de distribuição e ou aquisições",
    value: "coordenadorxs-de-distribuicao-e-ou-aquisicoes",
  },
  {
    label: "Coordenadorxs de licenciamento e propriedade intelectual",
    value: "coordenadorxs-de-licenciamento-e-propriedade-intelectual",
  },
  {
    label: "Coordenadorxs de pós produção",
    value: "coordenadorxs-de-pos-producao",
  },
  { label: "Críticxs", value: "criticxs" },
  { label: "Curadorxs", value: "curadorxs" },
  {
    label: "Diretorxs de arte e assistentes",
    value: "diretorxs-de-arte-e-assistentes",
  },
  {
    label: "Diretorxs de casting e assistentes",
    value: "diretorxs-de-casting-e-assistentes",
  },
  { label: "Diretorxs de fotografia", value: "diretorxs-de-fotografia" },
  {
    label: "Diretorxs de guarda roupa e figurinistas",
    value: "diretorxs-de-guarda-roupa-e-figurinistas",
  },
  { label: "Diretorxs de som", value: "diretorxs-de-som" },
  { label: "Fotógrafxs", value: "fotografxs" },
  { label: "Green consultants", value: "green-consultants" },
  { label: "Guionistas", value: "guionistas" },
  { label: "Investigadorxs", value: "investigadorxs" },
  {
    label: "Montadorxs/Editorxs e assistentes",
    value: "montadorxs-editorxs-e-assistentes",
  },
  {
    label: "Operadorxs de câmara e assistentes",
    value: "operadorxs-de-camara-e-assistentes",
  },
  { label: "Perchistxs", value: "perchistxs" },
  { label: "Pós-produtx de som", value: "pos-produtx-de-som" },
  { label: "Produtorxs", value: "produtorxs" },
  { label: "Produtorxs de animação", value: "produtorxs-de-animacao" },
  { label: "Produtorxs executivas", value: "produtorxs-executivas" },
  { label: "Professorxs/Formadorxs", value: "professorxs-formadorxs" },
  { label: "Programadorxs", value: "programadorxs" },
  { label: "Realizadorxs e assistentes", value: "realizadorxs-e-assistentes" },
  { label: "Tradutorxs", value: "tradutorxs" },
  { label: "Videógrafxs", value: "videografxs" },
  { label: "Videoartista", value: "videoartista" },
  { label: "Videomapping", value: "videomapping" },
  { label: "VFX", value: "vfx" },
  { label: "Outros", value: "outros" },
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