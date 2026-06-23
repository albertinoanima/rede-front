'use client'
import { useState } from 'react'
import { ChevronDown, Search, SearchIcon, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { SearchInput } from '../ui/SearchInput'
import { Heading } from '../ui/heading'

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
          <input
            placeholder="Pesquisar..."
            className="h-10 w-full rounded-full border-2 border-white bg-transparent px-3 text-white outline-none placeholder:text-white "
          />

          <Button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white p-2.5">
            <SearchIcon size={18} className="text-white" />
          </Button>
        </div>

        <div className="flex gap-2">
          <Button className="w-34.25 h-7 bg-[#FCCB1C] py-4 px-1.5 rounded-4xl text-[#1D1D1B]">
            Pesquisar
          </Button>

          <Button className="w-34.25 h-7 bg-black py-3.5 px-1.5 border-2 border-white text-[#ffffff]">
            Limpar
          </Button>
        </div>


        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-white'>País</Heading>
          <div className="flex items-center">
            <input
              placeholder='Selecionar país'
              className="h-10 w-full rounded-full border-2 border-white bg-transparent px-3 text-white outline-none placeholder:text-white "
            />

            <Button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white p-2.5">
              <ChevronDown size={18} className="text-white" />
            </Button>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-white'>Tema</Heading>
          <div className="flex items-center">
            <input
              placeholder='Selecionar país'
              className="h-10 w-full rounded-full border-2 border-white bg-transparent px-3 text-white outline-none placeholder:text-white "
            />

            <Button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white p-2.5">
              <ChevronDown size={18} className="text-white" />
            </Button>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Heading className='text-[20px] font-medium leading-7 text-white'>Género</Heading>
          <div className="flex items-center">
            <input
              placeholder='Selecionar país'
              className="h-10 w-full rounded-full border-2 border-white bg-transparent px-3 text-white outline-none placeholder:text-white "
            />

            <Button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white p-2.5">
              <ChevronDown size={18} className="text-white" />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}