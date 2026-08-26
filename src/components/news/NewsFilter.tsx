'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { customBlur } from '@/app/fonts'
import { FilterSidebar } from './FilterSidebar'
import { Heading } from '../ui/heading'
import { ArticleCard } from '../ArticleCard'
import { NEWS, newsCategories, newsSubCategories } from './data'
import {
  defaultNewsFilters,
  filterNews,
  getNewsYearOptions,
  NewsFilters,
  normalizeNewsValue,
} from './actions'
import { Text } from '../ui/text'
import { countriesList } from '../network/filters'

type NewsFilterContentProps = {
  initialTag: string
}

const normalizeTag = normalizeNewsValue

const findSubCategoryParent = (value: string) => {
  const normalizedValue = normalizeNewsValue(value)

  for (const [category, subCategories] of Object.entries(newsSubCategories)) {
    const subCategory = subCategories.find(
      (item) => normalizeNewsValue(item) === normalizedValue,
    )

    if (subCategory) {
      return {
        category,
        subCategory: normalizeNewsValue(subCategory),
      }
    }
  }

  return null
}

const getInitialFilters = (tag: string): NewsFilters => {
  const normalizedTag = normalizeTag(tag)

  if (!normalizedTag) {
    return defaultNewsFilters
  }

  const country = countriesList.find(
    (option) =>
      normalizeTag(option.value) === normalizedTag ||
      normalizeTag(option.label) === normalizedTag,
  )

  if (country) {
    return {
      ...defaultNewsFilters,
      country: country.value,
    }
  }

  const category = newsCategories.find(
    (option) =>
      normalizeTag(option.value) === normalizedTag ||
      normalizeTag(option.label) === normalizedTag,
  )

  if (category) {
    return {
      ...defaultNewsFilters,
      category: category.value,
    }
  }

  const subCategoryParent = findSubCategoryParent(tag)

  if (subCategoryParent) {
    return {
      ...defaultNewsFilters,
      category: subCategoryParent.category,
      subCategory: subCategoryParent.subCategory,
    }
  }

  return {
    ...defaultNewsFilters,
    search: tag,
  }
}

const NewsFilterContent: React.FC<NewsFilterContentProps> = ({ initialTag }) => {
  const [filters, setFilters] = useState<NewsFilters>(() =>
    getInitialFilters(initialTag),
  )

  const yearOptions = useMemo(() => getNewsYearOptions(NEWS), [])
  const results = useMemo(() => filterNews(NEWS, filters), [filters])

  const handleClear = () => {
    setFilters(defaultNewsFilters)
  }

  return (
    <section className="mt-12 h-auto w-full sm:mt-16 lg:mt-20">
      <div className="mx-auto h-auto w-full max-w-360">
        <div className="flex items-end justify-between gap-4 px-4 sm:items-center sm:px-6 lg:px-0">
          <Heading
            level="h2"
            className={`${customBlur.className} mb-3 text-[38px] font-medium leading-[0.95] text-rede-yellow sm:mb-5 sm:text-[44px] lg:ml-3 lg:text-[48px] lg:leading-11.5`}
          >
            Todas as
            <br />
            notícias
          </Heading>

          <div className="flex shrink-0 justify-end py-4 sm:px-6">
            <Text className="text-[14px] leading-4">
              {results.length}{' '}
              {results.length === 1 ? 'resultado' : 'resultados'}
            </Text>
          </div>
        </div>

        <div className="mt-6 flex w-full min-w-0 flex-col lg:mt-10 lg:flex-row">
          <div className="w-full shrink-0 lg:w-82.75">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              onClear={handleClear}
              yearOptions={yearOptions}
            />
          </div>

          {results.length > 0 ? (
            <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 px-4 pb-6 sm:grid-cols-2 sm:px-6 xl:grid-cols-3">
              {results.map((news) => (
                <ArticleCard key={news.id} newsData={news} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-56 min-w-0 flex-1 items-center justify-center px-4 pb-6 text-center text-rede-white sm:px-6">
              Nenhuma notícia encontrada para os filtros selecionados.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export const NewsFilter: React.FC = () => {
  const searchParams = useSearchParams()
  const tag =
    searchParams.get('subcategory') ??
    searchParams.get('subCategory') ??
    searchParams.get('tag') ??
    ''

  return <NewsFilterContent key={tag} initialTag={tag} />
}
