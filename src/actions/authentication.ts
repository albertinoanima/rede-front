'use server'

import { AxiosError } from 'axios'
import { api, apiRoutes } from '@/lib/api'
import { Profile } from '@/types/Profile'
import { AccountType, User } from '@/types/User'


export const signupv2 = async (user: User) => {
  try {
    const responseData = await api.post<User>("/api/v1/auth/signup", user);
    console.log(responseData);

  } catch (err: any) {
    console.log(err);
  }
}


// export interface AuthenticatedUser extends Omit<User, 'createdAt' | 'updatedAt'> {
//   createdAt: string
//   updatedAt: string
//   profile?: Profile
// }

// export interface AuthResult {
//   ok: boolean
//   user?: AuthenticatedUser
//   message?: string
// }

// export interface SignupPayload {
//   name: string
//   email: string
//   password?: string
//   accountType: AccountType
//   profile: Profile
//   googleProfile?: {
//     name: string
//     email: string
//     image?: string
//   }
// }

// export interface LoginPayload {
//   email: string
//   password?: string
// }

// export interface GoogleAuthPayload {
//   name: string
//   email: string
//   image?: string
//   accountType?: AccountType
//   profile?: Profile
// }

// interface ApiAuthResponse {
//   user?: AuthenticatedUser
//   data?: {
//     user?: AuthenticatedUser
//   }
//   message?: string
// }

// const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email)

// const authRequest = async <Payload>(
//   url: string,
//   payload: Payload
// ): Promise<AuthResult> => {
//   try {
//     const { data } = await api.post<ApiAuthResponse>(url, payload)
//     const user = data.user ?? data.data?.user

//     return {
//       ok: true,
//       user,
//       message: data.message ?? 'Operacao realizada com sucesso.',
//     }
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       const responseData = error.response?.data as { message?: string; error?: string } | undefined

//       return {
//         ok: false,
//         message:
//           responseData?.message ??
//           responseData?.error ??
//           'Nao foi possivel comunicar com a API.',
//       }
//     }

//     return {
//       ok: false,
//       message: 'Erro inesperado ao comunicar com a API.',
//     }
//   }
// }

// export async function signup(payload: SignupPayload): Promise<AuthResult> {
//   if (!payload.name.trim() || !isValidEmail(payload.email)) {
//     return { ok: false, message: 'Preencha nome e email validos.' }
//   }

//   return authRequest(apiRoutes.signup, payload)
// }

// export async function login(payload: LoginPayload): Promise<AuthResult> {
//   if (!isValidEmail(payload.email)) {
//     return { ok: false, message: 'Informe um email valido.' }
//   }

//   return authRequest(apiRoutes.login, payload)
// }

// export async function signupWithGoogle(payload: GoogleAuthPayload): Promise<AuthResult> {
//   if (!payload.name.trim() || !isValidEmail(payload.email)) {
//     return { ok: false, message: 'Nao foi possivel validar a conta Google.' }
//   }

//   return authRequest(apiRoutes.signupWithGoogle, payload)
// }

// export async function loginWithGoogle(payload: GoogleAuthPayload): Promise<AuthResult> {
//   if (!payload.name.trim() || !isValidEmail(payload.email)) {
//     return { ok: false, message: 'Nao foi possivel validar a conta Google.' }
//   }

//   return authRequest(apiRoutes.loginWithGoogle, payload)
// }
