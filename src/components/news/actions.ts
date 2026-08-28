import { SelectItemType } from '../network/filters'
import { NewsType } from './data'

export type NewsFilters = {
  search: string
  country: string
  category: string
  subCategory: string
  year: string
}

export const defaultNewsFilters: NewsFilters = {
  search: '',
  country: '',
  category: '',
  subCategory: '',
  year: '',
}

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ')

const extractYear = (date: string) => date.match(/\d{4}/)?.[0] ?? ''

export const normalizeNewsValue = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

// Local, static-data implementation of the news search. Keeps the same
// (news, filters) -> NewsType[] shape a real API call would have, so
// swapping this for a fetch to the backend later is a drop-in replacement.
export function filterNews(news: NewsType[], filters: NewsFilters): NewsType[] {
  const search = filters.search.trim().toLowerCase()

  return news.filter((item) => {
    if (search) {
      const haystack = [item.title, stripHtml(item.description), item.location]
        .join(' ')
        .toLowerCase()
      if (!haystack.includes(search)) return false
    }

    if (filters.country && !item.countries.includes(filters.country)) return false
    if (filters.category && item.category !== filters.category) return false
    if (
      filters.subCategory &&
      !item.themes?.some(
        (theme) =>
          normalizeNewsValue(theme) === normalizeNewsValue(filters.subCategory),
      )
    ) {
      return false
    }
    if (filters.year && extractYear(item.date) !== filters.year) return false

    return true
  })
}

export function getNewsYearOptions(news: NewsType[]): SelectItemType[] {
  const years = Array.from(new Set(news.map((item) => extractYear(item.date)).filter(Boolean)))
    .sort((a, b) => Number(b) - Number(a))

  return years.map((year) => ({ label: year, value: year }))
}




// O location chega em tr\u00eas formatos: um s\u00edtio s\u00f3 ("Cabo Verde"), uma lista
// (["Mo\u00e7ambique", "Angola"]) ou v\u00e1rios s\u00edtios num texto separados por v\u00edrgulas.
// Reduzir sempre a um array evita tratar cada caso pelo caminho \u2014 e \u00e9 o que
// faltava, porque um array n\u00e3o tem .normalize().
export const toLocationLabels = (location?: NewsType['location']): string[] =>
  (Array.isArray(location) ? location : String(location ?? '').split(','))
    .map((place) => place.trim())
    .filter(Boolean)

const toLocationValues = (location: NewsType['location']): string[] =>
  toLocationLabels(location).map(normalizeNewsValue).filter(Boolean)

// Duas not\u00edcias s\u00e3o semelhantes quando partilham pelo menos um s\u00edtio: exigir a
// lista inteira igual deixaria sem sugest\u00f5es as not\u00edcias de v\u00e1rios pa\u00edses.
export function getSimilarNews(
  currentNews: NewsType,
  news: NewsType[],
  limit = 3,
): NewsType[] {
  const currentLocations = new Set(toLocationValues(currentNews.location))

  return news
    .filter(
      (item) =>
        item.id !== currentNews.id &&
        toLocationValues(item.location).some((location) =>
          currentLocations.has(location),
        ),
    )
    .slice(0, limit)
}
