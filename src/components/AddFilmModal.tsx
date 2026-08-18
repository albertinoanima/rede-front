"use client";

import { useRef, useState } from "react";
import { ChevronDown, Move, ZoomIn, ZoomOut } from "lucide-react";
import { Modal } from "./ui/modal";
import { Input } from "./ui/Input";
import { Button } from "./ui/button";
import { Text } from "./ui/text";

const COUNTRY_OPTIONS = ["Angola", "Cabo Verde", "Guiné-Bissau", "Moçambique", "São Tomé e Príncipe", "Timor-Leste"];
const THEME_OPTIONS = ["Direitos humanos", "Ambiente", "Identidade", "Migração", "Memória"];
const GENRE_OPTIONS = ["Ficção", "Documentário", "Animação", "Experimental"];

type SelectPillProps = {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const SelectPill: React.FC<SelectPillProps> = ({ label, placeholder, options, value, onChange }) => (
  <div className="flex flex-col gap-2 flex-1">
    <Text className="text-[16px] font-medium">{label}</Text>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-transparent border border-rede-white/40 rounded-full pl-4 pr-9 h-11 text-btn2 text-rede-white outline-none cursor-pointer"
      >
        <option value="" disabled className="bg-rede-surface text-rede-white/40">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-rede-surface text-rede-white">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        width={14}
        height={14}
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-rede-white/70"
      />
    </div>
  </div>
);

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
  onSubmit: (data: FilmFormData) => void;
  initialData?: Partial<FilmFormData>;
};

export const AddFilmModal: React.FC<FilmFormModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [form, setForm] = useState<FilmFormData>({ ...EMPTY_FORM, ...initialData });
  const dragRef = useRef<{ startX: number; startY: number; origin: { x: number; y: number } } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);


  const update = <K extends keyof FilmFormData>(key: K, value: FilmFormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    update("cover", url);
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

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col gap-6">
        <div
          className="relative w-full h-63 rounded-2xl overflow-hidden border border-dashed border-rede-white/30 bg-rede-surface-800 cursor-move select-none"
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

          {/* faixas laterais indicando área de corte */}
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
          <Text className="text-xs text-rede-white/50 max-w-45 shrink-0">
            Mantém o conteúdo principal dentro da área vazia. As faixas laterais podem ser cortadas consoante o formato do cartão.
          </Text>
        </div>

        <div className="flex flex-col gap-2">
          <Text className="text-[16px] font-medium">Título</Text>
          <Input
            variant="secondary"
            placeholder="Ex: Terra Vermelha"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <Text className="text-[16px] font-medium">Ano</Text>
            <Input
              variant="secondary"
              placeholder="2026"
              value={form.year}
              onChange={(e) => update("year", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <Text className="text-[16px] font-medium">Duração</Text>
            <Input
              variant="secondary"
              placeholder="14 min"
              value={form.duration}
              onChange={(e) => update("duration", e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <SelectPill
            label="País"
            placeholder="Selecionar país"
            options={COUNTRY_OPTIONS}
            value={form.country}
            onChange={(v) => update("country", v)}
          />
          <SelectPill
            label="Tema"
            placeholder="Selecionar tema"
            options={THEME_OPTIONS}
            value={form.theme}
            onChange={(v) => update("theme", v)}
          />
          <SelectPill
            label="Género"
            placeholder="Selecionar género"
            options={GENRE_OPTIONS}
            value={form.genre}
            onChange={(v) => update("genre", v)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-1.5">
            <Text className="text-[16px] font-medium">Link do filme</Text>
            <span className="text-xs text-rede-white/40">(opcional)</span>
          </div>
          <div className="flex items-center border border-rede-white/40 rounded-lg h-11 overflow-hidden">
            <span className="px-4 text-btn2 text-rede-white/60 border-r border-rede-white/40 shrink-0">
              https://
            </span>
            <input
              value={form.link}
              onChange={(e) => update("link", e.target.value)}
              placeholder="vimeo.com..."
              className="flex-1 h-full bg-transparent px-4 text-btn2 text-rede-white outline-none placeholder:text-rede-white/40"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-2">
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit}>Guardar filme</Button>
        </div>
      </div>
    </Modal>
  );
};