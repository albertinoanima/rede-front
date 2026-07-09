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
          <Button className="w-34.25 h-7 bg-rede-yellow py-4 px-1.5 rounded-4xl text-rede-surface">
            Pesquisar
          </Button>

          <Button className="w-34.25 h-7 bg-rede-surface py-3.5 px-1.5 border-2 border-white text-rede-surface">
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

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-rede-white'>Género</Heading>
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