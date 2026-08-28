"use client";

import { useMemo, useState } from "react";
import { Edit2, Plus, Trash2 } from "lucide-react";
import { customBlur } from "@/app/fonts";
import { AccountType, ProfileFilm } from "@/types/User";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "../ui/button";
import { FilmCard, FilmCardType } from "../FilmCard";
import { AddFilmModal, FilmFormData } from "../AddFilmModal";

const FILM_PLACEHOLDER_COVER = "/assets/placeholder-img.jpg";

type LocalFilmCardProps = {
  film: FilmCardType;
  isEditing: boolean;
  onEdit: (id: string) => void;
  onRemove: (id: string) => void;
};

const FilmCardLocal: React.FC<LocalFilmCardProps> = ({
  film,
  isEditing,
  onEdit,
  onRemove,
}) => (
  <div className="relative w-full">
    <FilmCard filmData={film} v="v2" />

    {isEditing && (
      <div className="absolute right-3 top-3 z-10 flex gap-2">
        <button
          type="button"
          aria-label={`Editar o filme ${film.title}`}
          onClick={() => onEdit(film.id)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-rede-white backdrop-blur transition-colors hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rede-white sm:h-8 sm:w-8"
        >
          <Edit2 width={12} height={12} aria-hidden="true" />
        </button>

        <button
          type="button"
          aria-label={`Remover o filme ${film.title}`}
          onClick={() => onRemove(film.id)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-rede-white backdrop-blur transition-colors hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rede-white sm:h-8 sm:w-8"
        >
          <Trash2 width={12} height={12} aria-hidden="true" />
        </button>
      </div>
    )}
  </div>
);

type AddFilmTileProps = {
  onAdd: () => void;
};

const AddFilmTile: React.FC<AddFilmTileProps> = ({ onAdd }) => (
  <div className="flex min-h-[280px] w-full items-center justify-center rounded-lg border border-dashed border-rede-white/30 px-4 sm:min-h-[380px]">
    <Button
      variant="secondary"
      className="border border-dashed"
      iconPosition="left"
      icon={<Plus width={12} height={12} aria-hidden="true" />}
      iconButtonClassName="border border-dashed"
      onClick={onAdd}
    >
      Adicionar filme externo
    </Button>
  </div>
);

type OutsideAgencyProps = {
  isAuthenticated?: boolean;
  films?: ProfileFilm[];
  accountType?: AccountType;
  isSaving?: boolean;
  onSaveFilms?: (
    films: ProfileFilm[],
  ) => Promise<boolean> | boolean;
};

export const OutsideAgency: React.FC<OutsideAgencyProps> = ({
  isAuthenticated = false,
  films,
  accountType,
  isSaving = false,
  onSaveFilms,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<ProfileFilm[]>(films ?? []);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingFilmId, setEditingFilmId] = useState<string | null>(
    null,
  );
  const [formSession, setFormSession] = useState(0);

  const data = films ?? [];
  const visibleFilms = isEditing ? draft : data;

  const editingFilm = editingFilmId
    ? draft.find((film) => film.id === editingFilmId)
    : undefined;

  const initialFormData = useMemo<
    Partial<FilmFormData> | undefined
  >(() => {
    if (!editingFilm) {
      return undefined;
    }

    return {
      id: editingFilm.id,
      title: editingFilm.title,
      year: String(editingFilm.year),
      duration: editingFilm.duration ?? "",
      country: editingFilm.countries[0] ?? "",
      theme: editingFilm.type[1] ?? "",
      genre: editingFilm.type[0] ?? "",
      link: editingFilm.link ?? "",
      roles: editingFilm.roles ?? [],
      cover: editingFilm.cover,
    };
  }, [editingFilm]);

  const handleFormSubmit = (formData: FilmFormData) => {
    const currentFilm = formData.id
      ? draft.find((film) => film.id === formData.id)
      : undefined;

    const submittedFilm: ProfileFilm = {
      id: formData.id ?? crypto.randomUUID(),
      title: formData.title.trim(),
      director: currentFilm?.director ?? "",
      type: [formData.genre, formData.theme].filter(Boolean),
      year: Number(formData.year) || new Date().getFullYear(),
      countries: [formData.country].filter(Boolean),
      cover: formData.cover || FILM_PLACEHOLDER_COVER,
      duration: formData.duration,
      link: formData.link,
      roles: formData.roles.length ? formData.roles : undefined,
    };

    setDraft((currentDraft) =>
      formData.id
        ? currentDraft.map((film) =>
            film.id === formData.id ? submittedFilm : film,
          )
        : [...currentDraft, submittedFilm],
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

    if (saved) {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setDraft(data);
    setEditingFilmId(null);
    setIsFormOpen(false);
    setIsEditing(false);
  };

  const removeFilm = (id: string) => {
    setDraft((currentDraft) =>
      currentDraft.filter((film) => film.id !== id),
    );
  };

  const addFilm = () => {
    setEditingFilmId(null);
    setFormSession((currentSession) => currentSession + 1);
    setIsFormOpen(true);
  };

  const handleEditFilm = (id: string) => {
    setEditingFilmId(id);
    setFormSession((currentSession) => currentSession + 1);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setEditingFilmId(null);
    setIsFormOpen(false);
  };

  return (
    <section className="h-auto w-full bg-rede-bg">
      <div className="relative mx-auto flex h-auto min-h-90 w-full max-w-[1920px] items-center justify-center">
        <div className="h-auto w-full max-w-360 px-4 py-14 sm:px-6 sm:py-16 lg:px-0 lg:pb-20 lg:pt-20">
          <div className="mb-6 flex flex-col gap-4 border-b border-rede-white/20 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-4">
              <Heading className={`${customBlur.className} text-[48px] leading-12`}>
                Fora da agência
              </Heading>

              {isAuthenticated && !isEditing && (
                <Button
                  variant="secondary"
                  aria-label="Editar filmes fora da agência"
                  className="flex aspect-square h-10 w-10 shrink-0 items-center justify-center rounded-full p-0"
                  onClick={startEditing}
                >
                  <Edit2 width={12} height={12} aria-hidden="true" />
                </Button>
              )}
            </div>

            {isAuthenticated && isEditing && (
              <div className="flex w-full gap-2 sm:w-auto sm:gap-1">
                <Button
                  disabled={isSaving}
                  className="flex-1 sm:flex-none"
                  onClick={handleSave}
                >
                  {isSaving ? "A guardar..." : "Guardar"}
                </Button>

                <Button
                  variant="secondary"
                  disabled={isSaving}
                  className="flex-1 sm:flex-none"
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleFilms.length > 0
              ? visibleFilms.map((film) => (
                  <FilmCardLocal
                    key={film.id}
                    film={film}
                    isEditing={isEditing}
                    onEdit={handleEditFilm}
                    onRemove={removeFilm}
                  />
                ))
              : !isEditing && (
                  <Text className="text-[14px] leading-relaxed font-medium">
                    Ainda não existem filmes fora da agência.
                  </Text>
                )}

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
        defaultCover={FILM_PLACEHOLDER_COVER}
        accountType={accountType}
      />
    </section>
  );
};