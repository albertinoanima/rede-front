"use client";

import { useState } from "react";
import { Edit2, Plus, Trash } from "lucide-react";
import { customBlur } from "@/app/fonts";
import { ProfileAchievement } from "@/types/User";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/select";

type EntryType = "Festival" | "Categoria" | "Premio" | "Exibicao";

export type AchievementEntry = ProfileAchievement & {
  type: EntryType | string;
};

const entryTypeOptions = [
  { label: "Categorias", value: "Categoria" },
  { label: "Exibições", value: "Exibicao" },
  { label: "Festivais", value: "Festival" },
  { label: "Prémios", value: "Premio" }
];

const createEmptyEntry = (): AchievementEntry => ({
  id: crypto.randomUUID(),
  type: "Festival",
  title: "",
  link: "",
});

type EntryFieldProps = {
  entry: AchievementEntry;
  onChange: (id: string, patch: Partial<AchievementEntry>) => void;
  onRemove: (id: string) => void;
};

type EntryTypePillProps = Pick<EntryFieldProps, "entry" | "onChange">;

const EntryTypePill: React.FC<EntryTypePillProps> = ({
  entry,
  onChange,
}) => (
  <div className="relative w-full shrink-0">
    <Select
      variant="secondary"
      options={entryTypeOptions}
      value={entry.type}
      onChange={(value) => onChange(entry.id, { type: value })}
    />
  </div>
);

const EntryField: React.FC<EntryFieldProps> = ({
  entry,
  onChange,
  onRemove,
}) => (
  <div className="flex flex-col gap-2.5 border-b border-rede-white/20 pb-4">
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
      <div className="h-auto w-full sm:w-auto sm:min-w-[260px] sm:max-w-1/2">
        <EntryTypePill entry={entry} onChange={onChange} />
      </div>

      <div className="flex h-auto w-full flex-col gap-4">
        <Input
          variant="secondary"
          placeholder="Título..."
          value={entry.title}
          onChange={(event) =>
            onChange(entry.id, { title: event.target.value })
          }
          icon={<Trash width={12} height={12} aria-hidden="true" />}
          iconPosition="right"
          onIconClick={() => onRemove(entry.id)}
        />

        <Input
          variant="secondary"
          type="url"
          inputMode="url"
          placeholder="Link..."
          value={entry.link ?? ""}
          onChange={(event) =>
            onChange(entry.id, { link: event.target.value })
          }
          icon={<span className="text-sm">https://</span>}
          iconContainerClassName="w-18 rounded-[8px]"
          iconPosition="left"
        />
      </div>
    </div>
  </div>
);

type AddEntryTileProps = {
  onAdd: () => void;
};

const AddEntryTile: React.FC<AddEntryTileProps> = ({ onAdd }) => (
  <div className="flex h-32 w-full items-center justify-center rounded-lg border border-dashed border-rede-white/30 px-4 sm:h-36">
    <Button
      variant="secondary"
      className="border border-dashed"
      iconPosition="left"
      icon={<Plus width={12} height={12} aria-hidden="true" />}
      iconButtonClassName="border border-dashed"
      onClick={onAdd}
    >
      Adicionar entrada
    </Button>
  </div>
);

type AchievementsProps = {
  isAuthenticated?: boolean;
  achievements?: AchievementEntry[];
  isSaving?: boolean;
  onSaveAchievements?: (
    achievements: AchievementEntry[],
  ) => boolean | Promise<boolean>;
};

export const Achievements: React.FC<AchievementsProps> = ({
  isAuthenticated = false,
  achievements,
  isSaving = false,
  onSaveAchievements,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<AchievementEntry[]>(
    achievements ?? [],
  );

  const data = achievements ?? [];

  const startEditing = () => {
    setDraft(data);
    setIsEditing(true);
  };

  const handleSave = async () => {
    const saved = await onSaveAchievements?.(draft);

    if (saved) {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setDraft(data);
    setIsEditing(false);
  };

  const updateEntry = (
    id: string,
    patch: Partial<AchievementEntry>,
  ) => {
    setDraft((currentDraft) =>
      currentDraft.map((entry) =>
        entry.id === id ? { ...entry, ...patch } : entry,
      ),
    );
  };

  const removeEntry = (id: string) => {
    setDraft((currentDraft) =>
      currentDraft.filter((entry) => entry.id !== id),
    );
  };

  const addEntry = () => {
    setDraft((currentDraft) => [
      ...currentDraft,
      createEmptyEntry(),
    ]);
  };

  return (
    <section className="h-auto w-full">
      <div className="relative mx-auto flex h-auto min-h-90 w-full max-w-[1920px] items-center justify-center">
        <div className="mb-20 h-auto w-full max-w-360 px-4 sm:px-6 lg:mb-40 lg:px-0">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <Heading
              className={`${customBlur.className} min-w-0 flex-1 text-[34px] leading-[38px] sm:text-[40px] sm:leading-11 lg:flex-none lg:text-[48px] lg:leading-12`}
            >
              Festivais, Prémios e Exibições
            </Heading>

            {isAuthenticated && !isEditing && (
              <Button
                variant="secondary"
                aria-label="Editar festivais, prémios e exibições"
                className="flex aspect-square h-10 w-10 shrink-0 items-center justify-center rounded-full p-0"
                onClick={startEditing}
              >
                <Edit2 width={12} height={12} aria-hidden="true" />
              </Button>
            )}

            {isAuthenticated && isEditing && (
              <div className="flex w-full flex-wrap gap-2 sm:w-auto sm:gap-1">
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

          {!isEditing ? (
            <div className="flex gap-5">
              <div className="w-full bg-transparent text-rede-white">
                {data.length > 0 ? (
                  <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 sm:gap-y-0">
                    {data.map((item) => (
                      <div
                        key={item.id}
                        className="border-b border-rede-white pb-4"
                      >
                        <span className="text-xs leading-4 text-rede-white">
                          {item.type}
                        </span>

                        <Text className="mt-1 break-words text-[18px] font-semibold leading-6 sm:text-[20px] sm:leading-7">
                          {item.title}
                        </Text>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Text className="text-[14px] leading-relaxed font-medium">
                    Ainda não existem festivais, prémios ou exibições.
                  </Text>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2">
              {draft.map((entry) => (
                <EntryField
                  key={entry.id}
                  entry={entry}
                  onChange={updateEntry}
                  onRemove={removeEntry}
                />
              ))}

              <AddEntryTile onAdd={addEntry} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};