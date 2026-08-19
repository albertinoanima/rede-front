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
  try {
    const responseData = await api.post<LoginUsingEmailAndPassResponseType>("/api/v1/auth/login-using-email-and-password", { email, password });
    const { user, token } = responseData.data;

    return { user, token }
  } catch (err: any) {
    return {
      error: err.response?.data?.error || "Erro desconhecido",
      message: err.response?.data?.message || "Não foi possível iniciar sessão"
    }
  }
}


export type GoogleLoginPayload = {
  idToken: string;
}

export const loginUsingGoogle = async ({ idToken }: GoogleLoginPayload): Promise<LoginUsingEmailAndPassResponseType> => {
  try {
    const responseData = await api.post<LoginUsingEmailAndPassResponseType>("/api/v1/auth/login-with-google", { idToken });
    const { user, token } = responseData.data;

    return { user, token }
  } catch (err: any) {
    return {
      error: err.response?.data?.error || "Erro desconhecido",
      message: err.response?.data?.message || "Não foi possível iniciar sessão com o Google"
    }
  }
}