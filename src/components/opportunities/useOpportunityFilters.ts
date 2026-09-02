'use client'

import { useCallback, useMemo } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import { countriesList, normalizeLabelKey } from '../network/filters'
import { newsSubCategories } from '../news/data'
import { normalizeNewsValue } from '../news/actions'
import {
  defaultOpportunityFilters,
  OpportunityFilters,
} from './actions'
import { opportunityCategories } from './data'

type OpportunityFilterKey = keyof OpportunityFilters

const urlFilterKeys = [
  'search',
  'country',
  'category',
  'subCategory',
] as const

const optionMatches = (
  option: { label: string; value: string },
  value: string,
) => {
  const normalizedValue = normalizeLabelKey(value)

  return (
    normalizeLabelKey(option.value) === normalizedValue ||
    normalizeLabelKey(option.label) === normalizedValue
  )
}

const countryAliases: Record<string, string> = {
  angola: 'angola',
  'cabo-verde': 'cabo-verde',
  'guine-bissau': 'guine-bissau',
  'guinea-bissau': 'guine-bissau',
  mocambique: 'mocambique',
  mozambique: 'mocambique',
  'sao-tome': 'sao-tome-e-principe',
  'sao-tome-e-principe': 'sao-tome-e-principe',
  'sao-tome-principe': 'sao-tome-e-principe',
  'timor-leste': 'timor-leste',
}

const findCountryByValue = (value: string) => {
  const normalizedValue = normalizeLabelKey(value)
  const alias = countryAliases[normalizedValue]

  if (alias) return countriesList.find((country) => country.value === alias)

  return countriesList.find((country) => optionMatches(country, value))
}

const findCategoryByValue = (value: string) =>
  opportunityCategories.find((category) => optionMatches(category, value))

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

export const getOpportunityFiltersFromTag = (
  tag: string,
): Partial<OpportunityFilters> => {
  const country = findCountryByValue(tag)

  if (country) return { country: country.value }

  const category = findCategoryByValue(tag)

  if (category) return { category: category.value }

  const subCategoryParent = findSubCategoryParent(tag)

  if (subCategoryParent) return subCategoryParent

  return { search: tag }
}

export const getOpportunityFiltersFromParams = (
  params: Partial<Record<OpportunityFilterKey | 'tag', string>>,
): OpportunityFilters => {
  const filters: OpportunityFilters = { ...defaultOpportunityFilters }

  const country = params.country ? findCountryByValue(params.country) : null

  if (country) filters.country = country.value

  const category = params.category
    ? findCategoryByValue(params.category)
    : null

  if (category) filters.category = category.value

  if (params.subCategory) {
    const subCategoryParent = findSubCategoryParent(params.subCategory)

    if (subCategoryParent) {
      filters.category = subCategoryParent.category
      filters.subCategory = subCategoryParent.subCategory
    }
  }

  if (params.search) filters.search = params.search.trim()

  if (params.tag) {
    Object.assign(filters, getOpportunityFiltersFromTag(params.tag))
  }

  return filters
}

const buildQueryString = (filters: OpportunityFilters): string => {
  const params = new URLSearchParams()

  for (const key of urlFilterKeys) {
    const value = filters[key].trim()

    if (value) params.set(key, value)
  }

  return params.toString()
}

export const getOpportunityTagHref = (tag: string) => {
  const filters = getOpportunityFiltersFromTag(tag)
  const entry = urlFilterKeys.find((key) => filters[key])

  if (entry) {
    return `/opportunities?${entry}=${encodeURIComponent(filters[entry] ?? '')}`
  }

  return `/opportunities?tag=${encodeURIComponent(tag)}`
}

export const useOpportunityFilters = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const filters = useMemo(
    () =>
      getOpportunityFiltersFromParams({
        tag: searchParams.get('tag') ?? '',
        search: searchParams.get('search') ?? '',
        country: searchParams.get('country') ?? '',
        category: searchParams.get('category') ?? '',
        subCategory:
          searchParams.get('subCategory') ??
          searchParams.get('subcategory') ??
          '',
      }),
    [searchParams],
  )

  const applyFilters = useCallback(
    (next: OpportunityFilters) => {
      const query = buildQueryString(next)

      window.history.replaceState(
        null,
        '',
        query ? `${pathname}?${query}` : pathname,
      )
    },
    [pathname],
  )

  const clearFilters = useCallback(() => {
    applyFilters(defaultOpportunityFilters)
  }, [applyFilters])

  return { filters, setFilters: applyFilters, clearFilters }
}
