'use client'

import { useEffect, useState } from 'react'

import { getUsers } from '@/actions/users'

import { ProfileType } from '../ProfileCard'
import { toProfileCardData } from './profiles'

export type NetworkProfilesStatus = 'loading' | 'ready' | 'error'

// O mapa e a pesquisa avancada mostram a mesma lista de perfis. Sem esta cache
// a pagina pedia /api/users duas vezes e as duas metades podiam ficar a
// mostrar numeros diferentes.
let profilesPromise: Promise<ProfileType[]> | null = null

const loadProfiles = async (): Promise<ProfileType[]> => {
  const response = await getUsers()

  if (response.error) {
    throw new Error(response.message || response.error)
  }

  return (response.data?.users ?? []).map(toProfileCardData)
}

export const useNetworkProfiles = () => {
  const [profiles, setProfiles] = useState<ProfileType[]>([])
  const [status, setStatus] = useState<NetworkProfilesStatus>('loading')

  useEffect(() => {
    let isActive = true

    profilesPromise ??= loadProfiles()

    profilesPromise
      .then((loaded) => {
        if (!isActive) return

        setProfiles(loaded)
        setStatus('ready')
      })
      .catch(() => {
        // Uma falha nao pode ficar em cache: a proxima montagem tem de tentar
        // outra vez em vez de repetir o erro para sempre.
        profilesPromise = null

        if (isActive) setStatus('error')
      })

    return () => {
      isActive = false
    }
  }, [])

  return { profiles, status }
}
