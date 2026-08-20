"use client"

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { FilterSidebar } from '@/components/agency/FilterSidebar'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { defaultFilmFilters, FilmFilters, filterFilms, getFilmYearOptions } from './actions'
import { filmGenres, films } from './data'
import { Tag } from '../Tag'
import { Text } from '../ui/text'
import { countriesList } from '../network/filters'

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

const normalizeParam = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()

const palopCountryAliases: Record<string, string> = {
  angola: 'angola',
  'cabo verde': 'cabo-verde',
  'cabo-verde': 'cabo-verde',
  'guine bissau': 'guine-bissau',
  'guine-bissau': 'guine-bissau',
  mocambique: 'mocambique',
  'sao tome': 'sao-tome-e-principe',
  'sao tome e principe': 'sao-tome-e-principe',
  'sao-tome-e-principe': 'sao-tome-e-principe',
  'timor leste': 'timor-leste',
  'timor-leste': 'timor-leste',
}

const getCountryValue = (tag: string) => {
  const normalizedTag = normalizeParam(tag)
  const alias = palopCountryAliases[normalizedTag]

  if (alias) return alias

  return countriesList.find(
    (country) => normalizeParam(country.value) === normalizedTag || normalizeParam(country.label) === normalizedTag,
  )?.value
}

const getGenreValue = (tag: string) =>
  filmGenres.find(
    (genre) => normalizeParam(genre.value) === normalizeParam(tag) || normalizeParam(genre.label) === normalizeParam(tag),
  )?.value

const getFilmTagHref = (tag: string) => {
  const country = getCountryValue(tag)
  if (country) return `/agency?country=${encodeURIComponent(country)}`

  const genre = getGenreValue(tag)
  if (genre) return `/agency?genre=${encodeURIComponent(genre)}`

  return `/agency?tag=${encodeURIComponent(tag)}`
}

const getInitialFilters = ({
  tag,
  country,
  genre,
  year,
}: {
  tag: string
  country: string
  genre: string
  year: string
}): FilmFilters => {
  const tagCountry = getCountryValue(tag)
  const tagGenre = getGenreValue(tag)

  return {
    ...defaultFilmFilters,
    country: country || tagCountry || '',
    genre: genre || tagGenre || '',
    year,
    search: country || tagCountry || genre || tagGenre ? '' : tag,
  }
}

const FilmsContent: React.FC<{ initialTag: string; initialCountry: string; initialGenre: string; initialYear: string }> = ({
  initialTag,
  initialCountry,
  initialGenre,
  initialYear,
}) => {
  const [filters, setFilters] = useState(() => getInitialFilters({
    tag: initialTag,
    country: initialCountry,
    genre: initialGenre,
    year: initialYear,
  }))

  const yearOptions = useMemo(() => getFilmYearOptions(films), [])
  const results = useMemo(() => filterFilms(films, filters), [filters])

  const handleClear = () => setFilters(defaultFilmFilters)

  return (
    <section className="w-full h-auto">
      <div className="w-full max-w-360 h-auto ml-auto mr-auto">

          <div className='flex items-center justify-end mt-15'>
            <div className="flex justify-end gap-3 px-6 py-4">
              <Text className="text-[14px] leading-4" >
                {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
              </Text>
            </div>
          </div>

          <div className="flex mt-10">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              onClear={handleClear}
              yearOptions={yearOptions}
            />
            <div className="flex-1 flex flex-col gap-4 px-6 pb-6">
              {results.map((film) => (
                <div
                  key={film.id}
                  className="flex h-56 overflow-hidden bg-[#e52b22]"
                >
                  <div className="w-[42%]">
                    <img
                      src={film.thumbnail}
                      alt={film.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 justify-between p-8">
                    <div className="flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {film.tags.map((tag, i) => (
                          <Tag href={getFilmTagHref(tag.label)} label={tag.label} key={tag.label + "dhbg" + i} className='bg-rede-bg-600' />
                        ))}

                        <Tag href={`/agency?year=${encodeURIComponent(film.year)}`} label={film.year} className='bg-rede-bg-600' />
                      </div>

                      <h3 className="text-3xl font-semibold text-rede-white">
                        {film.title}
                      </h3>

                      <div className="flex items-center gap-6 mt-3 text-rede-white text-sm">
                        <span>{film.director}</span>
                        <span>{film.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-end">
                      <Button showMainButton={false} iconPosition="right" icon={<ArrowRight width={12} height={12} />} onClick={() => console.log("htddhdt")} />
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

export const FilmsSection: React.FC = () => {
  const searchParams = useSearchParams()
  const tag = searchParams.get('tag') ?? ''
  const country = searchParams.get('country') ?? ''
  const genre = searchParams.get('genre') ?? ''
  const year = searchParams.get('year') ?? ''
  const paramsKey = [tag, country, genre, year].join(':')

  return (
    <FilmsContent
      key={paramsKey}
      initialTag={tag}
      initialCountry={country}
      initialGenre={genre}
      initialYear={year}
    />
  )
}
