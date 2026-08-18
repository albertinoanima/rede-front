"use client";

import { useMemo, useState } from "react";
import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";
import { Button } from "../ui/button";
import { FilmCard, FilmCardType } from "../FilmCard";
import { User } from "@/types/User";
import { Edit2, Plus, Trash2 } from "lucide-react";
import { AddFilmModal, FilmFormData } from "../AddFilmModal";

const INITIAL_FILMS: FilmCardType[] = [
  {
    id: "film-1",
    title: "Lorem ipsum dolor sit amet consectetur",
    director: "Ferdinando Simango",
    type: ["Animacao", "Direitos humanos"],
    year: 2025,
    countries: ["Guine-Bissau"],
    cover: "/assets/profile/films/film-1.png",
  },
  {
    id: "film-2",
    title: "Lorem ipsum dolor sit amet consectetur",
    director: "Ferdinando Simango",
    type: ["Animacao", "Direitos humanos"],
    year: 2025,
    countries: ["Guine-Bissau"],
    cover: "/assets/profile/films/film-2.png",
  },
];

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
        <button
          type="button"
          onClick={() => onEdit(film.id)}
          className="w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-rede-white hover:bg-black/70 transition-colors"
        >
          <Edit2 width={12} height={12} />
        </button>
        <button
          type="button"
          onClick={() => onRemove(film.id)}
          className="w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-rede-white hover:bg-black/70 transition-colors"
        >
          <Trash2 width={12} height={12} />
        </button>
      </div>
    )}
  </div>
);

const AddFilmTile = ({ onAdd }: { onAdd: () => void }) => (
  <div className="w-full min-h-[380px] border border-dashed border-rede-white/30 rounded-lg flex items-center justify-center">
    <Button
      variant="secondary"
      className="border border-dashed"
      iconPosition="left"
      icon={<Plus width={12} height={12} />}
      onClick={onAdd}
      iconButtonClassName="border border-dashed"
    >
      Adicionar filme
    </Button>
  </div>
);

export const Filmography: React.FC<{ isAuthenticated?: boolean; profile?: User }> = ({
  isAuthenticated = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [films, setFilms] = useState<FilmCardType[]>(INITIAL_FILMS);
  const [draft, setDraft] = useState<FilmCardType[]>(INITIAL_FILMS);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingFilmId, setEditingFilmId] = useState<string | null>(null);
  const [formSession, setFormSession] = useState(0);

  const visibleFilms = isEditing ? draft : films;
  const editingFilm = editingFilmId ? draft.find((film) => film.id === editingFilmId) : undefined;
  const initialFormData = useMemo<Partial<FilmFormData> | undefined>(() => {
    if (!editingFilm) return undefined;

    return {
      id: editingFilm.id,
      title: editingFilm.title,
      year: String(editingFilm.year),
      duration: "",
      country: editingFilm.countries[0] ?? "",
      theme: editingFilm.type[1] ?? "",
      genre: editingFilm.type[0] ?? "",
      link: "",
      cover: editingFilm.cover,
      coverZoom: 1,
      coverPosition: { x: 50, y: 50 },
    };
  }, [editingFilm]);

  const handleFormSubmit = (data: FilmFormData) => {
    const currentFilm = data.id ? draft.find((film) => film.id === data.id) : undefined;
    const submittedFilm: FilmCardType = {
      id: data.id ?? crypto.randomUUID(),
      title: data.title.trim(),
      director: currentFilm?.director ?? "",
      type: [data.genre, data.theme].filter(Boolean),
      year: Number(data.year) || new Date().getFullYear(),
      countries: [data.country].filter(Boolean),
      cover: data.cover,
    };

    setDraft((prev) =>
      data.id
        ? prev.map((film) => (film.id === data.id ? submittedFilm : film))
        : [...prev, submittedFilm]
    );
    setEditingFilmId(null);
    setIsFormOpen(false);
  };

  const startEditing = () => {
    setDraft(films);
    setIsEditing(true);
  };

  const handleSave = () => {
    setFilms(draft);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(films);
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
              <Heading className={`${customBlur.className} text-[32px] leading-9`}>
                Filmografia
              </Heading>

              {isAuthenticated && !isEditing && (
                <Button
                  variant="secondary"
                  className="rounded-full p-0 shrink-0 aspect-square w-10 h-10 flex items-center justify-center"
                  onClick={startEditing}
                >
                  <Edit2 width={12} height={12} />
                </Button>
              )}
            </div>

            {isAuthenticated && isEditing && (
              <div className="flex gap-1">
                <Button onClick={handleSave}>Guardar</Button>
                <Button variant="secondary" onClick={handleCancel}>
                  Cancelar
                </Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleFilms.map((film) => (
              <FilmCardLocal
                key={film.id}
                film={film}
                isEditing={isEditing}
                onEdit={handleEditFilm}
                onRemove={removeFilm}
              />
            ))}

            {isEditing && <AddFilmTile onAdd={addFilm} />}
          </div>
        </div>
      </div>

      <AddFilmModal
        key={formSession}
        open={isFormOpen}
        onClose={handleCloseForm}
        onSubmit={handleFormSubmit}
        initialData={initialFormData}
      />
    </section>
  );
};