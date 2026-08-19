import { NextResponse } from "next/server";

const MAX_IMAGE_SIZE = 8 * 1024 * 1024;

const safeSegment = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const bucket =
    process.env.SUPABASE_STORAGE_BUCKET ??
    process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET;

  if (!supabaseUrl || !serviceRoleKey || !bucket) {
    return NextResponse.json(
      { message: "Configuracao do Supabase Storage incompleta." },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const folder = safeSegment(String(formData.get("folder") ?? "profiles")) || "profiles";

  if (!(file instanceof File)) {
    return NextResponse.json({ message: "Imagem nao enviada." }, { status: 400 });
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ message: "O arquivo deve ser uma imagem." }, { status: 400 });
  }

  if (file.size > MAX_IMAGE_SIZE) {
    return NextResponse.json({ message: "A imagem deve ter no maximo 8MB." }, { status: 400 });
  }

  const extension = safeSegment(file.name.split(".").pop() ?? "jpg") || "jpg";
  const objectPath = `${folder}/${crypto.randomUUID()}.${extension}`;
  const uploadUrl = `${supabaseUrl.replace(/\/$/, "")}/storage/v1/object/${bucket}/${objectPath}`;

  const uploadResponse = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serviceRoleKey}`,
      apikey: serviceRoleKey,
      "Content-Type": file.type,
      "x-upsert": "false",
    },
    body: file,
  });

  if (!uploadResponse.ok) {
    const details = await uploadResponse.text();

    return NextResponse.json(
      { message: "Nao foi possivel enviar a imagem.", details },
      { status: uploadResponse.status }
    );
  }

  const publicUrl = `${supabaseUrl.replace(/\/$/, "")}/storage/v1/object/public/${bucket}/${objectPath}`;

  return NextResponse.json({ url: publicUrl, path: objectPath });
}
