import { NextResponse } from "next/server";
import { getServerApiBaseUrl } from "@/lib/serverApi";

type UsersApiResponse = unknown;

export async function GET() {
  try {
    const response = await fetch(`${getServerApiBaseUrl()}/api/v1/users`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    const contentType = response.headers.get("content-type") ?? "";
    const data: UsersApiResponse = contentType.includes("application/json")
      ? await response.json()
      : { message: await response.text() };

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Erro desconhecido",
        message: "Nao foi possivel carregar os usuarios.",
      },
      { status: 502 },
    );
  }
}
