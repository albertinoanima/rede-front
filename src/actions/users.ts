"use client";

import { api } from "@/lib/api";
import { User } from "@/types/User";

export type NetworkUser = Omit<User, "profileData"> & {
  id?: string;
  _id?: string;
  profileData?: User["profileData"] | null;
};

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

export type GetUsersResponseType = {
  error?: string;
  message?: string;
  data?: {
    users: NetworkUser[];
  };
};

type UsersApiResponse = {
  error?: string;
  message?: string;
  users?: NetworkUser[];
  data?: {
    users?: NetworkUser[];
  };
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

const normalizeUsersResponse = (data: UsersApiResponse | NetworkUser[]): NetworkUser[] => {
  if (Array.isArray(data)) return data;

  return data.users ?? data.data?.users ?? [];
};

export const getUsers = async (): Promise<GetUsersResponseType> => {
  try {
    const responseData = await fetch("/api/users", {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    const data = await responseData.json() as UsersApiResponse | NetworkUser[];

    if (!responseData.ok) {
      return {
        error:
          Array.isArray(data)
            ? "Erro desconhecido"
            : data.error || "Erro desconhecido",
        message:
          Array.isArray(data)
            ? "Não foi possível carregar os Usuários."
            : data.message || "Não foi possível carregar os Usuários.",
      };
    }

    return {
      data: {
        users: normalizeUsersResponse(data),
      },
    };
  } catch (err: unknown) {
    const apiError = getApiError(err);

    return {
      error:
        apiError.response?.data?.error ||
        "Erro desconhecido",
      message:
        apiError.response?.data?.message ||
        "Não foi possível carregar os Usuários.",
    };
  }
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
        "Não foi possível apagar o Usuário.",
    };
  }
};
