'use server'

import { api } from '@/lib/api'
import { LoggedUser, User } from '@/types/User'


export type SignupResponseType = {
  error?: string;
  message?: string;
  data?: {
    user: User;
    requiresEmailConfirmation: boolean;
    emailConfirmationToken?: string
  };
}

export const signup = async (user: User): Promise<SignupResponseType> => {
  try {
    const responseData = await api.post("/api/v1/auth/signup", user);
    if (responseData.data) {
      const { user, requiresEmailConfirmation, emailConfirmationToken } = responseData.data;
      return {
        data: { user, requiresEmailConfirmation, emailConfirmationToken}
      }
    }

    return {
      message: "Erro desconhecido",
      error: "",
      data: undefined
    };
  } catch (err: any) {
    return {
      error: err.response?.data?.error || "Erro desconhecido",
      message: err.response?.data?.message || "Não foi possível realizar o cadastro"
    }
  }
}


type ConfirmResponseType = {
  user?: LoggedUser;
  token?: string;
  message?: string;
  error?: string;
}

export const confirmAccountAndChangePassword = async (token: string, password: string): Promise<ConfirmResponseType> => {
  try {
    const responseData = await api.post<ConfirmResponseType>("/api/v1/auth/confirm-email-setpassword", { token, password });
    if (responseData.data) {
      const { user, token } = responseData.data;
      return { user, token }
    }

    return {
      message: "Erro desconhecido",
      error: "",
      user: undefined
    };
  } catch (err: any) {
    return {
      error: err.response?.data?.error || "Erro desconhecido",
      message: err.response?.data?.message || "Não foi possível realizar a operação"
    }
  }
}


export type LoginUsingEmailAndPassResponseType = {
  user?: LoggedUser;
  token?: string;
  message?: string;
  error?: string;
}

export const loginUsingEmailAndPassword = async (email: string, password: string): Promise<LoginUsingEmailAndPassResponseType> => {
  return {}
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
