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
    const responseData = await api.get<UsersApiResponse | NetworkUser[]>(
      "/api/v1/users"
    );

    return {
      data: {
        users: normalizeUsersResponse(responseData.data),
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
        "N\u00e3o foi poss\u00edvel carregar os usu\u00e1rios.",
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
        "N\u00e3o foi poss\u00edvel atualizar os dados.",
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
        "Usu\u00e1rio apagado com sucesso.",
    };
  } catch (err: unknown) {
    const apiError = getApiError(err);

    return {
      error:
        apiError.response?.data?.error ||
        "Erro desconhecido",
      message:
        apiError.response?.data?.message ||
        "N\u00e3o foi poss\u00edvel apagar o usu\u00e1rio.",
    };
  }
};
