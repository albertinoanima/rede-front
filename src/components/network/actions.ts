import { ProfileType } from '../ProfileCard'
import { NetworkFilters, normalizeNetworkValue } from './FilterSidebar'

// Local, static-data implementation of the network search. Keeps the same
// (profiles, filters) -> ProfileType[] shape a real API call would have, so
// swapping this for a fetch to the backend later is a drop-in replacement.
export function filterProfiles(
  profiles: ProfileType[],
  filters: NetworkFilters,
): ProfileType[] {
  const search = filters.search.trim().toLowerCase()

  return profiles.filter((profile) => {
    if (search) {
      const haystack = [profile.title, ...profile.tags]
        .join(' ')
        .toLowerCase()
      if (!haystack.includes(search)) return false
    }

    if (filters.country && profile.country !== filters.country) return false
    if (filters.province && profile.province !== filters.province)
      return false
    if (filters.city && profile.city !== filters.city) return false
    if (filters.type && profile.type !== filters.type) return false
    if (filters.category && profile.category !== filters.category)
      return false
    if (filters.subCategory) {
      const tagMatchesSubCategory = profile.tags.some((tag) => normalizeNetworkValue(tag) === filters.subCategory)
      const profileSubCategories = Array.isArray(profile.subCategory) ? profile.subCategory : [profile.subCategory].filter(Boolean)
      const subCategoryMatches = profileSubCategories.some((subCategory) => subCategory === filters.subCategory)

      if (!subCategoryMatches && !tagMatchesSubCategory) return false
    }

    return true
  })
}
