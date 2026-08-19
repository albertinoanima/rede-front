"use client";

import { useRef, useState } from "react";
import { Move, ZoomIn, ZoomOut } from "lucide-react";
import { Modal } from "./ui/modal";
import { Input } from "./ui/Input";
import { Button } from "./ui/button";
import { Text } from "./ui/text";
import { Select } from "./ui/select";
import { uploadImage } from "@/lib/uploadImage";

export type FilmFormData = {
  id?: string;
  title: string;
  year: string;
  duration: string;
  country: string;
  theme: string;
  genre: string;
  link: string;
  cover: string;
  coverFile?: File;
  coverZoom: number;
  coverPosition: { x: number; y: number };
};

const EMPTY_FORM: FilmFormData = {
  title: "",
  year: "",
  duration: "",
  country: "",
  theme: "",
  genre: "",
  link: "",
  cover: "",
  coverZoom: 1,
  coverPosition: { x: 50, y: 50 },
};

type FilmFormModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: FilmFormData) => void | Promise<void>;
  initialData?: Partial<FilmFormData>;
};

export const AddFilmModal: React.FC<FilmFormModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [form, setForm] = useState<FilmFormData>({ ...EMPTY_FORM, ...initialData });
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const dragRef = useRef<{ startX: number; startY: number; origin: { x: number; y: number } } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const update = <K extends keyof FilmFormData>(key: K, value: FilmFormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    const url = URL.createObjectURL(file);
    setForm((prev) => ({ ...prev, cover: url, coverFile: file }));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!form.cover) return;
    dragRef.current = { startX: e.clientX, startY: e.clientY, origin: form.coverPosition };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    const { startX, startY, origin } = dragRef.current;
    const deltaX = ((e.clientX - startX) / 300) * 100;
    const deltaY = ((e.clientY - startY) / 220) * 100;
    update("coverPosition", {
      x: Math.min(100, Math.max(0, origin.x + deltaX)),
      y: Math.min(100, Math.max(0, origin.y + deltaY)),
    });
  };

  const handlePointerUp = () => {
    dragRef.current = null;
  };

  const handleSubmit = async () => {
    setError("");
    setIsUploading(true);

    try {
      const cover = form.coverFile ? (await uploadImage(form.coverFile, "films")).url : form.cover;
      await onSubmit({ ...form, cover, coverFile: undefined });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Nao foi possivel enviar a imagem.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} panelClassName="w-full max-w-[680px] rounded-none border-[1.3px] boder-white/900">
      <div className="flex flex-col gap-6">
        <div
          className="relative w-full h-63 overflow-hidden border-[1.3px] border-dashed border-rede-white/900 bg-rede-surface-800 cursor-move select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {form.cover ? (
            <img
              src={form.cover}
              alt="Capa do filme"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{
                transform: `scale(${form.coverZoom})`,
                objectPosition: `${form.coverPosition.x}% ${form.coverPosition.y}%`,
              }}
              draggable={false}
            />
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-0 flex items-center justify-center text-rede-white/50 text-btn2"
            >
              Clica para escolher uma imagem
            </button>
          )}

          <div className="absolute inset-y-0 left-0 w-1/4 bg-black/40 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-black/40 pointer-events-none" />

          {form.cover && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
              <span className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-rede-white">
                <Move width={14} height={14} />
              </span>
              <span className="px-4 py-2 rounded-full bg-black/60 text-rede-white text-xs whitespace-nowrap">
                Arraste para reposicionar a imagem
              </span>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="w-1/2 flex gap-1 items-center">
            <ZoomOut width={16} height={16} className="text-rede-white/60 shrink-0" />
            <input
              type="range"
              min={1}
              max={2.5}
              step={0.01}
              value={form.coverZoom}
              onChange={(e) => update("coverZoom", Number(e.target.value))}
              className="flex-1 accent-rede-yellow-500"
            />
            <ZoomIn width={16} height={16} className="text-rede-white/60 shrink-0" />
          </div>
          <div className="w-1/2">
            <Text className="text-[12px] leading-4 text-rede-white/30">
              Mantem o conteudo principal dentro da area vazia. As faixas laterais podem ser cortadas consoante o formato do cartao.
            </Text>
          </div>
        </div>

        <div className="w-full flex gap-3">
          <div className="w-1/2 flex flex-col gap-2">
            <Text className="text-[16px] font-medium">Titulo</Text>
            <Input
              variant="secondary"
              placeholder="Ex: Terra Vermelha"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
            />
          </div>

          <div className="w-1/2 flex gap-2">
            <div className="flex flex-col gap-2">
              <Text className="text-[16px] font-medium">Ano</Text>
              <Input
                variant="secondary"
                placeholder="2026"
                value={form.year}
                onChange={(e) => update("year", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Text className="text-[16px] font-medium">Duracao</Text>
              <Input
                variant="secondary"
                placeholder="14 min"
                value={form.duration}
                onChange={(e) => update("duration", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-2" >
          <div className="w-full flex flex-col gap-2">
            <Text className="text-[16px] font-medium">Pais</Text>
            <Select placeholder="Selecionar pais" variant="secondary" options={[]} />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Text className="text-[16px] font-medium">Tema</Text>
            <Select placeholder="Selecionar tema" variant="secondary" options={[]} />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Text className="text-[16px] font-medium">Genero</Text>
            <Select placeholder="Selecionar genero" variant="secondary" options={[]} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-1.5">
            <Text className="text-[16px] font-medium">Link do filme</Text>
            <span className="text-xs text-rede-white/40">(opcional)</span>
          </div>
          <Input
            variant="secondary"
            placeholder="Link..."
            value={form.link}
            onChange={(e) => update("link", e.target.value)}
            icon={<span className="text-sm">https://</span>}
            iconContainerClassName="w-18 rounded-[8px]"
            iconPosition="left"
          />
        </div>

        {error && <Text className="text-[14px] leading-5 text-rede-red">{error}</Text>}

        <div className="flex justify-end gap-2 mt-2">
          <Button variant="secondary" disabled={isUploading} onClick={onClose}>
            Cancelar
          </Button>
          <Button disabled={isUploading} onClick={handleSubmit}>{isUploading ? "A enviar..." : "Guardar filme"}</Button>
        </div>
      </div>
    </Modal>
  );
};