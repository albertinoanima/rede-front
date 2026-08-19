'use client'

const GOOGLE_SCRIPT_SRC = 'https://accounts.google.com/gsi/client'

export type GoogleProfile = {
  name: string
  email: string
  image: string
}

export type GoogleSignInResult = {
  idToken: string
  profile: GoogleProfile
}

type GoogleCredentialResponse = {
  credential: string
}

type GooglePromptMomentNotification = {
  isNotDisplayed: () => boolean
  isSkippedMoment: () => boolean
  isDismissedMoment: () => boolean
}

type GoogleIdConfig = {
  client_id: string
  callback: (response: GoogleCredentialResponse) => void
  auto_select?: boolean
  cancel_on_tap_outside?: boolean
}

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: GoogleIdConfig) => void
          prompt: (momentListener?: (notification: GooglePromptMomentNotification) => void) => void
        }
      }
    }
  }
}

let scriptPromise: Promise<void> | null = null

function getCurrentOrigin(): string {
  if (typeof window === 'undefined') return ''
  return window.location.origin
}

function getGoogleOriginError(): Error {
  const origin = getCurrentOrigin()
  const suffix = origin ? ` Origem atual: ${origin}` : ''

  return new Error(`Esta origem nao esta autorizada para o Google Sign-In.${suffix}`)
}

function maskClientId(clientId: string): string {
  if (clientId.length <= 18) return clientId
  return `${clientId.slice(0, 10)}...${clientId.slice(-8)}`
}

function logGoogleConfig(clientId: string): void {
  if (process.env.NODE_ENV !== 'development') return

  console.info('[Google Sign-In]', {
    origin: getCurrentOrigin(),
    clientId: maskClientId(clientId),
  })
}

function loadGoogleScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('O Google Sign-In só está disponível no browser.'))
  }

  if (window.google?.accounts?.id) return Promise.resolve()

  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${GOOGLE_SCRIPT_SRC}"]`)

      if (existing) {
        existing.addEventListener('load', () => resolve())
        existing.addEventListener('error', () => reject(new Error('Não foi possível carregar o Google Sign-In.')))
        return
      }

      const script = document.createElement('script')
      script.src = GOOGLE_SCRIPT_SRC
      script.async = true
      script.defer = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Não foi possível carregar o Google Sign-In.'))
      document.head.appendChild(script)
    })
  }

  return scriptPromise
}

// Decodes the (already Google-signed) JWT payload just to preview the
// profile in the UI. This is NOT verification — the backend must verify
// the token's signature before trusting any of its claims.
function decodeIdTokenPayload(idToken: string): GoogleProfile {
  const payload = idToken.split('.')[1]
  const json = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')))

  return {
    name: json.name ?? '',
    email: json.email ?? '',
    image: json.picture ?? '',
  }
}

let pendingCredential: {
  resolve: (idToken: string) => void
  reject: (error: Error) => void
} | null = null

let initialized = false

async function ensureGoogleInitialized(): Promise<void> {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

  if (!clientId) {
    throw new Error('Login com Google não está configurado.')
  }

  await loadGoogleScript()

  logGoogleConfig(clientId)

  if (initialized) return

  const google = window.google
  if (!google) {
    throw new Error('Não foi possível carregar o Google Sign-In.')
  }

  google.accounts.id.initialize({
    client_id: clientId,
    auto_select: false,
    cancel_on_tap_outside: true,
    callback: (response) => {
      pendingCredential?.resolve(response.credential)
      pendingCredential = null
    },
  })

  initialized = true
}

// Triggers Google's One Tap / Sign in with Google prompt and resolves with
// the signed ID token (to be verified server-side) plus a client-side
// preview of the profile it carries.
export async function signInWithGoogle(): Promise<GoogleSignInResult> {
  await ensureGoogleInitialized()

  const idToken = await new Promise<string>((resolve, reject) => {
    pendingCredential = { resolve, reject }

    window.google!.accounts.id.prompt((notification) => {
      if (!pendingCredential) return

      if (
        notification.isNotDisplayed() ||
        notification.isSkippedMoment() ||
        notification.isDismissedMoment()
      ) {
        pendingCredential = null
        reject(getGoogleOriginError())
      }
    })
  })

  return { idToken, profile: decodeIdTokenPayload(idToken) }
}
