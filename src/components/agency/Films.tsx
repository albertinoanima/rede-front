'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { FilterSidebar } from '@/components/agency/FilterSidebar'
import { Button } from '../ui/button'
import {
  defaultFilmFilters,
  FilmFilters,
  filterFilms,
  getFilmYearOptions,
} from './actions'
import { filmGenres, films } from './data'
import { Tag } from '../ui/tag'
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

type FilmsContentProps = {
  initialTag: string
  initialCountry: string
  initialGenre: string
  initialYear: string
}

const normalizeParam = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()

const palopCountryAliases: Record<string, string> = {
  angola: 'angola',
  'cabo verde': 'cabo-verde',
  'cabo-verde': 'cabo-verde',
  'guine bissau': 'guine-bissau',
  'guine-bissau': 'guine-bissau',
  'guinea bissau': 'guine-bissau',
  'guinea-bissau': 'guine-bissau',
  mocambique: 'mocambique',
  mozambique: 'mocambique',
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
    (country) =>
      normalizeParam(country.value) === normalizedTag ||
      normalizeParam(country.label) === normalizedTag,
  )?.value
}

const getGenreValue = (tag: string) => {
  const normalizedTag = normalizeParam(tag)

  return filmGenres.find(
    (genre) =>
      normalizeParam(genre.value) === normalizedTag ||
      normalizeParam(genre.label) === normalizedTag,
  )?.value
}

const getFilmTagHref = (tag: string) => {
  const country = getCountryValue(tag)

  if (country) {
    return `/agency?country=${encodeURIComponent(country)}`
  }

  const genre = getGenreValue(tag)

  if (genre) {
    return `/agency?genre=${encodeURIComponent(genre)}`
  }

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

const FilmsContent: React.FC<FilmsContentProps> = ({
  initialTag,
  initialCountry,
  initialGenre,
  initialYear,
}) => {
  const [filters, setFilters] = useState<FilmFilters>(() =>
    getInitialFilters({
      tag: initialTag,
      country: initialCountry,
      genre: initialGenre,
      year: initialYear,
    }),
  )

  const yearOptions = useMemo(() => getFilmYearOptions(films), [])
  const results = useMemo(() => filterFilms(films, filters), [filters])

  const handleClear = () => {
    setFilters(defaultFilmFilters)
  }

  return (
    <section className="h-auto w-full">
      <div className="mx-auto h-auto w-full max-w-360">
        <div className="mt-8 flex items-center justify-end px-4 sm:px-6 lg:mt-15 lg:px-0">
          <div className="flex justify-end gap-3 py-4 lg:px-6">
            <Text className="text-[14px] leading-4">
              {results.length}{' '}
              {results.length === 1 ? 'resultado' : 'resultados'}
            </Text>
          </div>
        </div>

        <div className="mt-4 flex w-full min-w-0 flex-col lg:mt-10 lg:flex-row">
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            onClear={handleClear}
            yearOptions={yearOptions}
          />

          <div className="flex min-w-0 flex-1 flex-col gap-4 px-4 pb-6 sm:px-6">
            {results.map((film) => (
              <article
                key={film.id}
                className="flex min-h-[420px] w-full min-w-0 flex-col overflow-hidden bg-[#e52b22] sm:min-h-0 sm:flex-row lg:h-56"
              >
                <div className="h-52 w-full shrink-0 sm:h-auto sm:w-[42%]">
                  <img
                    src={film.thumbnail}
                    alt={`Imagem de capa do filme ${film.title}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 p-5 sm:p-6 lg:flex-row lg:gap-4 lg:p-8">
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="mb-5 flex flex-wrap gap-2 lg:mb-6">
                      {film.tags.map((tag, index) => (
                        <Tag
                          key={`${film.id}-${tag.label}-${index}`}
                          href={getFilmTagHref(tag.label)}
                          label={tag.label}
                          className="bg-rede-bg-600"
                        />
                      ))}

                      <Tag
                        href={`/agency?year=${encodeURIComponent(film.year)}`}
                        label={film.year}
                        className="bg-rede-bg-600"
                      />
                    </div>

                    <h3 className="break-words text-2xl font-semibold leading-tight text-rede-white sm:text-[26px] lg:text-3xl">
                      {film.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-rede-white">
                      <span>{film.director}</span>
                      <span>{film.duration}</span>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-end justify-end">
                    <Button
                      showMainButton={false}
                      iconPosition="right"
                      icon={<ArrowRight width={12} height={12} />}
                      onClick={() => console.log(film.id)}
                    />
                  </div>
                </div>
              </article>
            ))}

            {results.length === 0 && (
              <div className="flex min-h-56 items-center justify-center px-4 text-center text-rede-white">
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
