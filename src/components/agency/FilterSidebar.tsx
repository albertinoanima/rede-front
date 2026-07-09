'use client'

import { useState } from 'react'
import { ChevronDown, Search, SearchIcon, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Heading } from '../ui/heading'
import { Input } from '../ui/Input'
import { Select } from '../ui/select'
import { SelectMultiple } from '../ui/select-multiple'

const temaOptions = [
  'Direitos humanos',
  'Direitos humanos',
  'Direitos humanos',
  'Direitos humanos',
]

export const FilterSidebar: React.FC = () => {
  const [pais, setPais] = useState('');
  const [search, setSearch] = useState('');
  const [genero, setGenero] = useState('');
  const [selectedTemas, setSelectedTemas] = useState<string[]>([]);


  const [selectedProfissionais, setSelectedProfissionais] = useState<string[]>([])

  function toggleTema(tema: string) {
    setSelectedTemas((prev) =>
      prev.includes(tema) ? prev.filter((t) => t !== tema) : [...prev, tema]
    )
  }

  return (
    <aside className="w-82.75 h-auto p-6 flex flex-col gap-6">
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
            <Select variant='primary' value='Indo' placeholder='Selecione o Pais' options={[{ label: "Podes", value: "Indo" }, { label: "Podes 2", value: "Indo2" }]}
              triggerClassName="rounded-full border-2 border-white px-3 text-rede-white outline-none"
              popoverClassName="rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]"
              satelliteClassName="border-2 border-white"
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Cidade/Proíncia</Heading>
          <div className="flex items-center">
            <Select variant='primary' value='Indo' placeholder='Selecione o Pais' options={[{ label: "Podes", value: "Indo" }, { label: "Podes 2", value: "Indo2" }]}
              triggerClassName="rounded-full border-2 border-white px-3 text-rede-white outline-none"
              popoverClassName="rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]"
              satelliteClassName="border-2 border-white"
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Tipo</Heading>
          <div className="flex items-center">
            <Select variant='primary' value='Estágio' placeholder='Selecionar tipo' options={[{ label: "Estágio", value: "estagio" }, { label: "Subvenção", value: "subvencao" }]}
              triggerClassName="rounded-full border-2 border-white px-3 text-rede-white outline-none"
              popoverClassName="rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]"
              satelliteClassName="border-2 border-white"
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Categoria</Heading>
          <div className="flex items-center">
            <Select value='Indo' placeholder='Selecione o Pais' options={[{ label: "Podes", value: "Indo" }, { label: "Podes 2", value: "Indo2" }]}
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