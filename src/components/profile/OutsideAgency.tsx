"use client";

import { useMemo, useState } from "react";
import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "../ui/button";
import { FilmCard, FilmCardType } from "../FilmCard";
import { Edit2, Plus, Trash2 } from "lucide-react";
import { AddFilmModal, FilmFormData } from "../AddFilmModal";
import { ProfileFilm } from "@/types/User";

type FilmCardProps = {
  film: FilmCardType;
  isEditing: boolean;
  onEdit: (id: string) => void;
  onRemove: (id: string) => void;
};

const FilmCardLocal: React.FC<FilmCardProps> = ({ film, isEditing, onEdit, onRemove }) => (
  <div className="relative">
    <FilmCard filmData={film} v="v2" />

    {isEditing && (
      <div className="absolute top-3 right-3 flex gap-2 z-10">
        <button type="button" onClick={() => onEdit(film.id)} className="w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-rede-white hover:bg-black/70 transition-colors">
          <Edit2 width={12} height={12} />
        </button>
        <button type="button" onClick={() => onRemove(film.id)} className="w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-rede-white hover:bg-black/70 transition-colors">
          <Trash2 width={12} height={12} />
        </button>
      </div>
    )}
  </div>
);

const AddFilmTile = ({ onAdd }: { onAdd: () => void }) => (
  <div className="w-full min-h-[380px] border border-dashed border-rede-white/30 rounded-lg flex items-center justify-center">
    <Button variant="secondary" className="border border-dashed" iconPosition="left" icon={<Plus width={12} height={12} />} onClick={onAdd} iconButtonClassName="border border-dashed">
      Adicionar filme externo
    </Button>
  </div>
);

type FilmographyProps = {
  isAuthenticated?: boolean;
  films?: ProfileFilm[];
  isSaving?: boolean;
  onSaveFilms?: (films: ProfileFilm[]) => Promise<boolean> | boolean;
};

export const OutsideAgency: React.FC<FilmographyProps> = ({
  isAuthenticated = false,
  films,
  isSaving = false,
  onSaveFilms,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<ProfileFilm[]>(films ?? []);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingFilmId, setEditingFilmId] = useState<string | null>(null);
  const [formSession, setFormSession] = useState(0);

  const data = films ?? [];
  const visibleFilms = isEditing ? draft : data;
  const editingFilm = editingFilmId ? draft.find((film) => film.id === editingFilmId) : undefined;
  const initialFormData = useMemo<Partial<FilmFormData> | undefined>(() => {
    if (!editingFilm) return undefined;

    return {
      id: editingFilm.id,
      title: editingFilm.title,
      year: String(editingFilm.year),
      duration: editingFilm.duration ?? "",
      country: editingFilm.countries[0] ?? "",
      theme: editingFilm.type[1] ?? "",
      genre: editingFilm.type[0] ?? "",
      link: editingFilm.link ?? "",
      cover: editingFilm.cover,
    };
  }, [editingFilm]);

  const handleFormSubmit = (formData: FilmFormData) => {
    const currentFilm = formData.id ? draft.find((film) => film.id === formData.id) : undefined;
    const submittedFilm: ProfileFilm = {
      id: formData.id ?? crypto.randomUUID(),
      title: formData.title.trim(),
      director: currentFilm?.director ?? "",
      type: [formData.genre, formData.theme].filter(Boolean),
      year: Number(formData.year) || new Date().getFullYear(),
      countries: [formData.country].filter(Boolean),
      cover: formData.cover,
      duration: formData.duration,
      link: formData.link,
    };

    setDraft((prev) =>
      formData.id
        ? prev.map((film) => (film.id === formData.id ? submittedFilm : film))
        : [...prev, submittedFilm]
    );
    setEditingFilmId(null);
    setIsFormOpen(false);
  };

  const startEditing = () => {
    setDraft(data);
    setIsEditing(true);
  };

  const handleSave = async () => {
    const saved = await onSaveFilms?.(draft);
    if (saved) setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(data);
    setEditingFilmId(null);
    setIsFormOpen(false);
    setIsEditing(false);
  };

  const removeFilm = (id: string) => {
    setDraft((prev) => prev.filter((film) => film.id !== id));
  };

  const addFilm = () => {
    setEditingFilmId(null);
    setFormSession((session) => session + 1);
    setIsFormOpen(true);
  };

  const handleEditFilm = (id: string) => {
    setEditingFilmId(id);
    setFormSession((session) => session + 1);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setEditingFilmId(null);
    setIsFormOpen(false);
  };

  return (
    <section className="w-full h-auto bg-rede-bg">
      <div className="relative w-full max-w-[1920px] min-h-90 h-auto mx-auto flex items-center justify-center">
        <div className="w-full max-w-360 h-auto pt-20 pb-20">
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-rede-white/20">
            <div className="flex items-center gap-4">
              <Heading className={`${customBlur.className} text-[32px] leading-9`}>Fora da agencia</Heading>

              {isAuthenticated && !isEditing && (
                <Button variant="secondary" className="rounded-full p-0 shrink-0 aspect-square w-10 h-10 flex items-center justify-center" onClick={startEditing}>
                  <Edit2 width={12} height={12} />
                </Button>
              )}
            </div>

            {isAuthenticated && isEditing && (
              <div className="flex gap-1">
                <Button disabled={isSaving} onClick={handleSave}>{isSaving ? "A guardar..." : "Guardar"}</Button>
                <Button variant="secondary" disabled={isSaving} onClick={handleCancel}>Cancelar</Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleFilms.length > 0 ? visibleFilms.map((film) => (
              <FilmCardLocal key={film.id} film={film} isEditing={isEditing} onEdit={handleEditFilm} onRemove={removeFilm} />
            )) : !isEditing && (
              <Text>Ainda nao existem filmes fora da agencia.</Text>
            )}

            {isEditing && <AddFilmTile onAdd={addFilm} />}
          </div>
        </div>
      </div>

      <AddFilmModal key={formSession} open={isFormOpen} onClose={handleCloseForm} onSubmit={handleFormSubmit} initialData={initialFormData} />
    </section>
  );
};