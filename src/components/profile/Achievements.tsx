"use client";

import { useState } from "react";
import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";
import { Text } from "../ui/text";
import { Button } from "../ui/button";
import { Input } from "../ui/Input";
import { Edit2, Plus, Trash } from "lucide-react";
import { Select } from "../ui/select";
import { ProfileAchievement } from "@/types/User";

type EntryType = "Festival" | "Categoria" | "Premio" | "Exibicao";

export type AchievementEntry = ProfileAchievement & {
  type: EntryType | string;
};

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

const entryTypeOptions = [
  { label: "Festivais", value: "Festival" },
  { label: "Premios", value: "Premio" },
  { label: "Exibicoes", value: "Exibicao" },
  { label: "Categorias", value: "Categoria" },
];

const EntryTypePill = ({ entry, onChange }: Pick<EntryFieldProps, "entry" | "onChange">) => (
  <div className="relative shrink-0">
    <Select
      variant="secondary"
      options={entryTypeOptions}
      value={entry.type}
      onChange={(value) => onChange(entry.id, { type: value })}
    />
  </div>
);

const EntryField: React.FC<EntryFieldProps> = ({ entry, onChange, onRemove }) => (
  <div className="flex flex-col gap-2.5 pb-4 border-b border-rede-white/20">
    <div className="flex gap-2">
      <div className="min-w-[260px] max-w-1/2 w-auto h-auto">
        <EntryTypePill entry={entry} onChange={onChange} />
      </div>

      <div className="w-full h-auto flex flex-col gap-4">
        <Input
          variant="secondary"
          placeholder="Titulo..."
          value={entry.title}
          onChange={(e) => onChange(entry.id, { title: e.target.value })}
          icon={<Trash width={12} height={12} />}
          iconPosition="right"
          onIconClick={() => onRemove(entry.id)}
        />

        <Input
          variant="secondary"
          placeholder="Link..."
          value={entry.link ?? ""}
          onChange={(e) => onChange(entry.id, { link: e.target.value })}
          icon={<span className="text-sm">https://</span>}
          iconContainerClassName="w-18 rounded-[8px]"
          iconPosition="left"
        />
      </div>
    </div>
  </div>
);

const AddEntryTile = ({ onAdd }: { onAdd: () => void }) => (
  <div className="w-full h-36 roundedlg border border-dashed border-white/300 rounded-lg flex items-center justify-center">
    <Button variant={"secondary"} className="border border-dashed" iconPosition="left" icon={<Plus width={12} height={12} />} onClick={onAdd} iconButtonClassName="border border-dashed">
      Adicionar entrada
    </Button>
  </div>
);

type AchievementsProps = {
  isAuthenticated?: boolean;
  achievements?: AchievementEntry[];
  isSaving?: boolean;
  onSaveAchievements?: (achievements: AchievementEntry[]) => boolean | Promise<boolean>;
};

export const Achievements: React.FC<AchievementsProps> = ({
  isAuthenticated = false,
  achievements,
  isSaving = false,
  onSaveAchievements,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<AchievementEntry[]>(achievements ?? []);
  const data = achievements ?? [];

  const startEditing = () => {
    setDraft(data);
    setIsEditing(true);
  };

  const handleSave = async () => {
    const saved = await onSaveAchievements?.(draft);
    if (saved) setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(data);
    setIsEditing(false);
  };

  const updateEntry = (id: string, patch: Partial<AchievementEntry>) => {
    setDraft((prev) => prev.map((entry) => (entry.id === id ? { ...entry, ...patch } : entry)));
  };

  const removeEntry = (id: string) => {
    setDraft((prev) => prev.filter((entry) => entry.id !== id));
  };

  const addEntry = () => {
    setDraft((prev) => [...prev, createEmptyEntry()]);
  };

  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-[1920px] min-h-90 h-auto mx-auto flex items-center justify-center">
        <div className="w-full max-w-360 h-auto mb-40">
          <div className="flex items-center gap-4 mb-6">
            <Heading className={`${customBlur.className} text-[48px] leading-12`}>
              Festivais, Premios e Exibicoes
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

            {isAuthenticated && isEditing && (
              <div className="flex gap-1">
                <Button disabled={isSaving} onClick={handleSave}>{isSaving ? "A guardar..." : "Guardar"}</Button>
                <Button variant="secondary" disabled={isSaving} onClick={handleCancel}>
                  Cancelar
                </Button>
              </div>
            )}
          </div>

          {!isEditing ? (
            <div className="flex gap-5">
              <div className="w-full bg-transparent text-rede-white">
                {data.length > 0 ? (
                  <div className="grid grid-cols-2 gap-x-8">
                    {data.map((item) => (
                      <div key={item.id} className="contents">
                        <div className="border-b border-rede-white pb-4">
                          <span className="text-xs leading-4 text-rede-white">{item.type}</span>
                          <Text className="mt-1 text-[20px] leading-7 font-semibold">
                            {item.title}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Text>Ainda nao existem festivais, premios ou exibicoes.</Text>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {draft.map((entry) => (
                <EntryField key={entry.id} entry={entry} onChange={updateEntry} onRemove={removeEntry} />
              ))}
              <AddEntryTile onAdd={addEntry} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};