import { OpportunityType } from '../OpportunityCard'

export type OpportunityFilters = {
  search: string
  country: string
  category: string
}

export const defaultOpportunityFilters: OpportunityFilters = {
  search: '',
  country: '',
  category: '',
}

// Local, static-data implementation of the opportunities search. Keeps the
// same (opportunities, filters) -> OpportunityType[] shape a real API call
// would have, so swapping this for a fetch to the backend later is a
// drop-in replacement.
export function filterOpportunities(
  opportunities: OpportunityType[],
  filters: OpportunityFilters,
): OpportunityType[] {
  const search = filters.search.trim().toLowerCase()

  return opportunities.filter((opportunity) => {
    if (search) {
      const haystack = [opportunity.title, opportunity.description, opportunity.type, ...opportunity.eligibility]
        .join(' ')
        .toLowerCase()
      if (!haystack.includes(search)) return false
    }

    if (filters.country && opportunity.country !== filters.country) return false

    if (filters.category && opportunity.type.toLowerCase() !== filters.category.toLowerCase())
      return false

    return true
  })
}
