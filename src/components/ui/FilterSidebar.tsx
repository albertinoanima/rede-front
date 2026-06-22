'use client'

import { useState } from 'react'
import { Heading } from './heading'
import { Text } from './text'

interface FilterSidebarProps {
  onFilterChange?: (filters: {
    search: string
    category: string
  }) => void
}

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const handleChange = (newSearch: string, newCategory: string) => {
    setSearch(newSearch)
    setCategory(newCategory)

    onFilterChange?.({
      search: newSearch,
      category: newCategory,
    })
  }

  return (
    <aside className="w-full rounded-2xl border border-border bg-card p-4">
      <Heading level="h3" as="h3" className="mb-4">
        Filtros
      </Heading>

      {/* Search */}
      <div className="mb-4">
        <Text variant="body2" className="mb-2 block">
          Pesquisa
        </Text>

        <input
          type="text"
          value={search}
          onChange={(e) => handleChange(e.target.value, category)}
          placeholder="Pesquisar filmes..."
          className="w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* Categories */}
      <div>
        <Text variant="body2" className="mb-2 block">
          Categoria
        </Text>

        <select
          value={category}
          onChange={(e) => handleChange(search, e.target.value)}
          className="w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm outline-none"
        >
          <option value="all">Todos</option>
          <option value="drama">Drama</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="documentary">Documentário</option>
        </select>
      </div>
    </aside>
  )
}