import { NetworkUser } from '@/actions/users'

import { ProfileType } from '../ProfileCard'
import {
  categoryBySubCategory,
  citiesByCountryAndProvince,
  CountryCode,
  provincesByCountry,
} from './data'
import {
  getCountryLabel,
  normalizeCountryValue,
  normalizeLabelKey,
} from './filters'

const fallbackProfileImage = '/assets/profile/profile.png'

// O perfil guarda a localidade e as competencias como labels ("Nampula",
// "Animadorxs"). Aqui passam pelo mesmo normalizador que gera os values das
// listas de filtros, para que os dois lados comparem exactamente a mesma coisa.
const toValues = (labels: (string | undefined)[]): string[] =>
  Array.from(
    new Set(
      labels
        .filter((label): label is string => Boolean(label))
        .map(normalizeLabelKey)
        .filter(Boolean),
    ),
  )

// O perfil so guarda pais e localidade; a provincia e deduzida da localidade.
const findProvinceByCity = (country: string, city: string): string => {
  if (!country || !city) return ''

  const provinces = citiesByCountryAndProvince[country as CountryCode] ?? {}

  const match = Object.entries(provinces).find(([, cities]) =>
    cities.some(
      (item) => item.value === city || normalizeLabelKey(item.label) === city,
    ),
  )

  if (match) return match[0]

  // Ha localidades que dao nome a propria provincia ("Maputo") e por isso nao
  // aparecem na lista de distritos dessa provincia.
  const province = (provincesByCountry[country as CountryCode] ?? []).find(
    (item) => item.value === city || normalizeLabelKey(item.label) === city,
  )

  return province?.value ?? ''
}

// Equivalencia definida pelo cliente para a pesquisa: a Categoria e o que o
// perfil guarda em coreSkills (as competencias principais) e a Sub-categoria
// e o que guarda em skills (a lista completa). Os dois campos sao preenchidos
// a partir da mesma lista de categorias do tipo de conta.
const buildSubCategories = (user: NetworkUser): string[] =>
  toValues(user.profileData?.skills ?? [])

// Quem declara uma sub-categoria pertence tambem a categoria dela. Sem isto,
// filtrar por sub-categoria (que preenche a categoria a que pertence) nunca
// encontrava o perfil, a nao ser que essa categoria fosse mesmo uma das
// competencias principais.
const buildCategories = (
  user: NetworkUser,
  subCategories: string[],
): string[] => {
  const coreSkills = toValues(user.profileData?.coreSkills ?? [])

  const impliedBySubCategories = subCategories
    .map((subCategory) => categoryBySubCategory[subCategory])
    .filter(Boolean)

  return Array.from(new Set([...coreSkills, ...impliedBySubCategories]))
}

// Tudo o que o perfil declara sobre o que faz. E contra isto que a pesquisa
// livre compara, para alem do que se ve no cartao.
const buildTerms = (
  user: NetworkUser,
  categories: string[],
  subCategories: string[],
): string[] => {
  const profileData = user.profileData

  return toValues([
    ...categories,
    ...subCategories,
    ...(profileData?.services ?? []),
    profileData?.otherService,
    profileData?.profession,
  ])
}

const buildTags = (user: NetworkUser): string[] => {
  const profileData = user.profileData

  const tags = [
    // O pais e guardado sem acentos ("Mocambique"); getCountryLabel devolve a
    // forma correcta para mostrar ("Moçambique"), tal como no perfil.
    getCountryLabel(profileData?.country),
    profileData?.city,
    ...(profileData?.services ?? []),
    ...(profileData?.coreSkills ?? []),
  ].filter((tag): tag is string => Boolean(tag))

  return Array.from(new Set(tags))
}

const getProfileTitle = (user: NetworkUser): string => {
  const profileData = user.profileData

  return (
    profileData?.commercialName ||
    profileData?.artisticName ||
    user.name ||
    profileData?.username ||
    'Perfil'
  )
}

export const toProfileCardData = (
  user: NetworkUser,
  index: number,
): ProfileType => {
  const profileData = user.profileData
  const country = normalizeCountryValue(profileData?.country)
  const city = normalizeLabelKey(profileData?.city ?? '')

  // A API so tem contas individuais e de empresa. Festival e instituicao
  // existem na taxonomia dos filtros mas ainda nao como tipo de conta.
  const type = profileData?.accountType === 'company' ? 'empresa' : 'profissionais'

  const subCategories = buildSubCategories(user)
  const categories = buildCategories(user, subCategories)

  return {
    id: user.id ?? user._id ?? user.email ?? `user-${index}`,
    title: getProfileTitle(user),
    tags: buildTags(user),
    bio: profileData?.bio,
    cover: profileData?.imageUrl || user.imageUrl || fallbackProfileImage,
    country,
    province: findProvinceByCity(country, city),
    city,
    type,
    categories,
    subCategories,
    terms: buildTerms(user, categories, subCategories),
    username: profileData?.username,
  }
}
