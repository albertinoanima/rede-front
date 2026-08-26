import { SelectItemType } from '../network/filters'
import { normalizeNewsValue } from './actions'
import { newsSubCategories } from './data'

// Taxonomia partilhada por /news e /oportunidades: as duas páginas usam a
// mesma lista de categorias (`opportunityCategories = newsCategories`), por
// isso a resolução sub-categoria -> categoria vive num sítio só.

type NewsSubCategoryKey = keyof typeof newsSubCategories

const sortByLabel = (a: SelectItemType, b: SelectItemType) =>
  a.label.localeCompare(b.label, 'pt')

const toOption = (label: string): SelectItemType => ({
  label,
  value: normalizeNewsValue(label),
})

// Uma sub-categoria pode aparecer em mais do que uma categoria (por exemplo
// "Mapeamento", que é de Investigação e de Projetos da REDE), daí guardarmos a
// lista de donos em vez de um só.
const ownersBySubCategory = new Map<string, string[]>()

for (const [category, labels] of Object.entries(newsSubCategories)) {
  for (const label of labels) {
    const value = normalizeNewsValue(label)

    ownersBySubCategory.set(value, [
      ...(ownersBySubCategory.get(value) ?? []),
      category,
    ])
  }
}

const allSubCategoryOptions: SelectItemType[] = Array.from(
  ownersBySubCategory.keys(),
)
  .map((value) => {
    const label = Object.values(newsSubCategories)
      .flat()
      .find((item) => normalizeNewsValue(item) === value)

    return { label: label ?? value, value }
  })
  .sort(sortByLabel)

// Sem categoria escolhida a lista mostra tudo, para que a sub-categoria possa
// ser o ponto de partida da pesquisa em vez de depender da categoria.
export const getNewsSubCategoryOptions = (
  selectedCategory: string,
): SelectItemType[] => {
  const labels = newsSubCategories[selectedCategory as NewsSubCategoryKey]

  return labels ? labels.map(toOption).sort(sortByLabel) : allSubCategoryOptions
}

// Devolve a categoria a aplicar quando se escolhe uma sub-categoria. Mantém a
// categoria já escolhida se a sub-categoria lhe pertencer; se a sub-categoria
// pertencer a mais do que uma categoria, devolve vazio de propósito — fechar
// na categoria errada esconderia resultados que a sub-categoria devolve.
export const getNewsCategoryForSubCategory = (
  subCategoryValue: string,
  preferredCategory = '',
): string => {
  if (!subCategoryValue) return preferredCategory

  const owners =
    ownersBySubCategory.get(normalizeNewsValue(subCategoryValue)) ?? []

  if (preferredCategory && owners.includes(preferredCategory)) {
    return preferredCategory
  }

  return owners.length === 1 ? owners[0] : ''
}
