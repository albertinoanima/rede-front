import { ProfileType } from '../ProfileCard'
import { NetworkFilters, normalizeNetworkValue } from './FilterSidebar'

// Filtragem local sobre os perfis ja normalizados (ver profiles.ts). Mantem a
// forma (profiles, filters) -> ProfileType[] que uma chamada a API teria, para
// que trocar isto por um pedido ao backend seja uma substituicao directa.
export function filterProfiles(
  profiles: ProfileType[],
  filters: NetworkFilters,
): ProfileType[] {
  const search = normalizeNetworkValue(filters.search)

  return profiles.filter((profile) => {
    if (search) {
      // A pesquisa livre passa por tudo o que se ve no cartao mais os termos
      // declarados, normalizado dos dois lados para ignorar acentos.
      const haystack = normalizeNetworkValue(
        [profile.title, profile.bio, ...profile.tags].join(' '),
      )

      const matchesTerms = (profile.terms ?? []).some((term) =>
        term.includes(search),
      )

      if (!haystack.includes(search) && !matchesTerms) return false
    }

    if (filters.country && profile.country !== filters.country) return false
    if (filters.province && profile.province !== filters.province) return false
    if (filters.city && profile.city !== filters.city) return false
    if (filters.type && profile.type !== filters.type) return false

    // A categoria compara com coreSkills; basta uma corresponder.
    if (
      filters.category &&
      !(profile.categories ?? []).includes(filters.category)
    ) {
      return false
    }

    // A sub-categoria compara com skills, a lista completa de competencias.
    if (
      filters.subCategory &&
      !(profile.subCategories ?? []).includes(filters.subCategory)
    ) {
      return false
    }

    return true
  })
}
