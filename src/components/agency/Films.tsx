"use client"

import { useMemo, useState } from 'react'
import { FilterSidebar } from '@/components/agency/FilterSidebar'
import { ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import { defaultFilmFilters, filterFilms, getFilmYearOptions } from './actions'
import { films } from './data'
import { Tag } from '../Tag'
import { Text } from '../ui/text'

export type FilmType = {
  id: string
  title: string
  director: string
  duration: string
  year: string
  tags: { label: string }[]
  thumbnail: string
  country: string
  genre: string
}

export const FilmsSection: React.FC = () => {
  const [filters, setFilters] = useState(defaultFilmFilters)
  const [appliedFilters, setAppliedFilters] = useState(defaultFilmFilters)

  const yearOptions = useMemo(() => getFilmYearOptions(films), [])

  // TODO: once a real API exists, replace this with a fetch keyed on
  // `appliedFilters` (e.g. useEffect + setResults) instead of filtering
  // the static `films` array in memory.
  const results = useMemo(() => filterFilms(films, appliedFilters), [appliedFilters])

  const handleSearch = () => setAppliedFilters(filters)
  const handleClear = () => {
    setFilters(defaultFilmFilters)
    setAppliedFilters(defaultFilmFilters)
  }

  return (
    <section className="w-full h-auto">
      <div className="w-full max-w-360 h-auto ml-auto mr-auto">

          <div className='flex items-center justify-end mt-15'>
            <div className="flex justify-end gap-3 px-6 py-4">
              {/* 
              <Button variant={"secondary"}>
                Ordenar por
              </Button> 
              */}

              <Text className="text-[14px] leading-4" >
                {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
              </Text>
            </div>
          </div>

          <div className="flex mt-10">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              onSearch={handleSearch}
              onClear={handleClear}
              yearOptions={yearOptions}
            />
            <div className="flex-1 flex flex-col gap-4 px-6 pb-6">
              {results.map((film) => (
                <div
                  key={film.id}
                  className="flex h-56 overflow-hidden bg-[#e52b22]"
                >
                  {/* Imagem */}
                  <div className="w-[42%]">
                    <img
                      src={film.thumbnail}
                      alt={film.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-1 justify-between p-8">
                    <div className="flex flex-col">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {film.tags.map((tag, i) => (
                          <Tag label={tag.label} key={tag.label + "dhbg" + i} className='bg-rede-bg-600' />
                        ))}

                        <Tag label={film.year} className='bg-rede-bg-600' />
                      </div>

                      {/* Título */}
                      <h3 className="text-3xl font-semibold text-rede-white">
                        {film.title}
                      </h3>

                      {/* Diretor e duração */}
                      <div className="flex items-center gap-6 mt-3 text-rede-white text-sm">
                        <span>{film.director}</span>
                        <span>{film.duration}</span>
                      </div>
                    </div>

                    {/* Botão */}
                    <div className="flex items-end">
                      <Button showMainButton={false} iconPosition="right" icon={<ChevronRight width={12} height={12} />} onClick={() => console.log("htddhdt")} />
                    </div>
                  </div>
                </div>
              ))}

              {results.length === 0 && (
                <div className="flex min-h-56 items-center justify-center text-rede-white">
                  Nenhum filme encontrado para os filtros selecionados.
                </div>
              )}
            </div>
          </div>


      </div>

    </section>
  )
}
