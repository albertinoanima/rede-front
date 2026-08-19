"use client";

import { api } from "@/lib/api";
import { User } from "@/types/User";


export type UpdateUserInput = {
  name?: string;
  email?: string;
  imageUrl?: string | null;
  password?: string;
  profileData?: User["profileData"] | null;
};

export type UpdateUserResponseType = {
  error?: string;
  message?: string;
  data?: {
    user?: User;
  };
};

export type DeleteUserResponseType = {
  error?: string;
  message?: string;
};

type ApiError = {
  response?: {
    data?: {
      error?: string;
      message?: string;
    };
  };
};

const getApiError = (err: unknown): ApiError => {
  return typeof err === "object" && err !== null ? err as ApiError : {};
};

export const updateLoggedUser = async (
  data: UpdateUserInput
): Promise<UpdateUserResponseType> => {
  try {
    const responseData = await api.patch(
      "/api/v1/users/me",
      data
    );

    return {
      data: responseData.data?.user
        ? {
          user: responseData.data.user,
        }
        : undefined,
      message:
        responseData.data?.message ||
        "Dados atualizados com sucesso.",
    };
  } catch (err: unknown) {
    const apiError = getApiError(err);

    return {
      error:
        apiError.response?.data?.error ||
        "Erro desconhecido",
      message:
        apiError.response?.data?.message ||
        "Não foi possível atualizar os dados.",
    };
  }
};

export const deleteLoggedUser = async (): Promise<DeleteUserResponseType> => {
  try {
    const responseData = await api.delete(
      "/api/v1/users/me"
    );

    return {
      message:
        responseData.data?.message ||
        "Usuário apagado com sucesso.",
    };
  } catch (err: unknown) {
    const apiError = getApiError(err);

    return {
      error:
        apiError.response?.data?.error ||
        "Erro desconhecido",
      message:
        apiError.response?.data?.message ||
        "Não foi possível apagar o usuário.",
    };
  }
};