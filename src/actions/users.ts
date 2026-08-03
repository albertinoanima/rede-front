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
    user: User;
  };
};

export type DeleteUserResponseType = {
  error?: string;
  message?: string;
};


export const updateLoggedUser = async (
  data: UpdateUserInput
): Promise<UpdateUserResponseType> => {
  try {
    const responseData = await api.patch(
      "/api/v1/users/me",
      data
    );

    if (responseData.data) {
      return {
        data: {
          user: responseData.data.user,
        },
        message:
          responseData.data.message ||
          "Dados atualizados com sucesso.",
      };
    }

    return {
      error: "Erro desconhecido",
      message: "Não foi possível atualizar os dados.",
    };
  } catch (err: any) {
    return {
      error:
        err.response?.data?.error ||
        "Erro desconhecido",
      message:
        err.response?.data?.message ||
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
  } catch (err: any) {
    return {
      error:
        err.response?.data?.error ||
        "Erro desconhecido",
      message:
        err.response?.data?.message ||
        "Não foi possível apagar o usuário.",
    };
  }
};