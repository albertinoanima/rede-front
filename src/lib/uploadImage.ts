"use client";

export type UploadImageResult = {
  url: string;
  path: string;
};

export const uploadImage = async (file: File, folder = "profiles"): Promise<UploadImageResult> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);

  const response = await fetch("/api/uploads", {
    method: "POST",
    body: formData,
  });

  const data = await response.json().catch(() => null) as Partial<UploadImageResult> & { message?: string } | null;

  if (!response.ok || !data?.url || !data.path) {
    throw new Error(data?.message ?? "Nao foi possivel enviar a imagem.");
  }

  return {
    url: data.url,
    path: data.path,
  };
};
