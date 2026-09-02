'use client'

import { useCallback, useMemo } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import {
  defaultNetworkFilters,
  getNetworkFiltersFromParams,
  NetworkFilters,
} from './FilterSidebar'

// A ordem e a que aparece no URL.
const urlFilterKeys = [
  'search',
  'country',
  'province',
  'city',
  'type',
  'category',
  'subCategory',
] as const

const buildQueryString = (filters: NetworkFilters): string => {
  const params = new URLSearchParams()

  for (const key of urlFilterKeys) {
    const value = filters[key].trim()

    if (value) params.set(key, value)
  }

  return params.toString()
}

/**
 * Os filtros da /network vivem no URL.
 *
 * E o que permite partilhar ou recarregar uma pesquisa, e e tambem o que
 * mantem o mapa e a lista a olhar para o mesmo estado sem um contexto pelo
 * meio: os dois leem daqui e os dois escrevem aqui.
 */
export const useNetworkFilters = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const filters = useMemo(
    () =>
      getNetworkFiltersFromParams({
        // 'tag' e a entrada livre (vem dos cartoes de perfil): e resolvida para
        // a chave concreta a que pertence e nunca volta a ser escrita no URL.
        tag: searchParams.get('tag') ?? '',
        search: searchParams.get('search') ?? '',
        country: searchParams.get('country') ?? '',
        province: searchParams.get('province') ?? '',
        city: searchParams.get('city') ?? '',
        type: searchParams.get('type') ?? '',
        category: searchParams.get('category') ?? '',
        subCategory:
          searchParams.get('subCategory') ??
          // Um URL escrito a mao raramente respeita o camelCase.
          searchParams.get('subcategory') ??
          '',
      }),
    [searchParams],
  )

  // replaceState em vez do router: a pagina nao precisa de ser re-pedida ao
  // servidor so porque um select mudou, e o useSearchParams reage na mesma.
  const applyFilters = useCallback(
    (next: NetworkFilters) => {
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
    applyFilters(defaultNetworkFilters)
  }, [applyFilters])

  return { filters, setFilters: applyFilters, clearFilters }
}
