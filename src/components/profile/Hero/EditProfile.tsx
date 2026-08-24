"use client"

import Image from "next/image"
import { Text } from "../../ui/text"
import { Input } from "../../ui/Input"
import { Button } from "../../ui/button"
import { Dispatch, SetStateAction, useState } from "react"
import { User } from "@/types/User"
import { Select } from "@/components/ui/select"
import { Tag } from "@/components/Tag"
import { getSkillOptions } from "../Bio/SectionEditSkills"
import { X } from "lucide-react"

type ProfileData = User["profileData"];

export type ProfileHeroDraft = {
  name: string;
  username: string;
  coreSkills: string[];
  skills: string[];
};

type EditProfileType = {
  profile?: User;
  profileData: ProfileData;
  isSaving?: boolean;
  setIsEditing?: Dispatch<SetStateAction<boolean>>;
  onSave?: (draft: ProfileHeroDraft) => void | Promise<void>;
}

const uniqueSkills = (skills: string[]): string[] => {
  const seen = new Set<string>();

  return skills.filter((skill) => {
    const normalizedSkill = skill.trim();
    const normalizedKey = normalizedSkill.toLowerCase();

    if (!normalizedSkill || seen.has(normalizedKey)) return false;

    seen.add(normalizedKey);
    return true;
  });
};

export const EditProfile: React.FC<EditProfileType> = ({
  profile,
  profileData,
  isSaving = false,
  setIsEditing,
  onSave
}) => {
  const initialCoreSkills = uniqueSkills(profileData.coreSkills ?? []).slice(0, 3);

  const [draft, setDraft] = useState<ProfileHeroDraft>({
    name: profile?.name ?? "",
    username: profileData.username ?? "",
    coreSkills: initialCoreSkills,
    skills: uniqueSkills([...(profileData.skills ?? []), ...initialCoreSkills]),
  });

  const updateDraft = (key: "name" | "username", value: string) => {
    setDraft((lastState) => ({ ...lastState, [key]: value }));
  };

  const skillOptions = getSkillOptions(profileData).filter((option) => {
    const normalizedCoreSkills = draft.coreSkills.map((skill) => skill.toLowerCase());

    return (
      !normalizedCoreSkills.includes(option.label.toLowerCase()) &&
      !normalizedCoreSkills.includes(option.value.toLowerCase())
    );
  });

  const handleCoreSkillAdd = (value: string) => {
    if (draft.coreSkills.length >= 3) return;

    const selectedOption = skillOptions.find((option) => option.value === value);
    const coreSkill = selectedOption?.label ?? value;
    const normalizedCoreSkill = coreSkill.trim();

    if (!normalizedCoreSkill) return;

    setDraft((lastState) => ({
      ...lastState,
      coreSkills: uniqueSkills([...lastState.coreSkills, normalizedCoreSkill]).slice(0, 3),
      skills: uniqueSkills([...lastState.skills, normalizedCoreSkill]),
    }));
  };

  const removeCoreSkill = (coreSkill: string) => {
    setDraft((lastState) => ({
      ...lastState,
      coreSkills: lastState.coreSkills.filter((skill) => skill !== coreSkill),
      skills: lastState.skills.filter((skill) => skill !== coreSkill),
    }));
  };

  return (
    <div className='w-full max-w-360 flex gap-5'>
      <div className='w-53 h-53'>
        <Image
          width={212}
          height={212}
          src={profileData.imageUrl || profile?.imageUrl || "/assets/profile/profile.png"}
          alt={profile?.name || 'Perfil'}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='w-full flex flex-col gap-2'>

          <div className="w-full flex gap-4">
            <div className='flex flex-col gap-2'>
              <Text className='text-[20px] leading-7 font-medium'>Nome</Text>
              <Input
                variant={"secondary"}
                value={draft.name}
                onChange={(event) => updateDraft("name", event.target.value)}
                placeholder='Nome'
                className='bg-transparent'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <Text className='text-[20px] leading-7 font-medium'>Competências principais</Text>

              <div className="flex flex-col gap-2">
                <div className="flex min-h-11 w-[450px] flex-wrap items-center gap-2 border-[1.3px] border-white px-3 py-2 rounded-[8px]">
                  {draft.coreSkills.length > 0 ? draft.coreSkills.map((coreSkill) => (
                    <Tag key={coreSkill} className="flex items-center gap-1 bg-rede-surface">
                      {coreSkill}
                      <X
                        width={12}
                        height={12}
                        color="#ffffff"
                        className="cursor-pointer"
                        onClick={() => removeCoreSkill(coreSkill)}
                      />
                    </Tag>
                  )) : (
                    <Text className="text-[14px] leading-[20px] text-rede-white/70">Selecione até 3 competências</Text>
                  )}
                </div>

                <Select
                  variant="secondary"
                  value=""
                  placeholder="Adicionar competência"
                  options={skillOptions}
                  disabled={draft.coreSkills.length >= 3}
                  triggerClassName="border-[1.3px] border-white px-3 text-rede-white outline-none"
                  popoverClassName="rounded-[8px] border-[1.3px] border-white px-3 text-rede-white outline-none mt-[10px]"
                  satelliteClassName="border-[1.3px] border-white"
                  onChange={handleCoreSkillAdd}
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <Text className='text-[20px] leading-7 font-medium'>Nome de utilizador</Text>
            <Input
              variant={"secondary"}
              value={draft.username}
              onChange={(event) => updateDraft("username", event.target.value)}
              placeholder='nome-de-utilizador'
              className='max-w-[350px] bg-transparent'
            />
          </div>

          <div className='w-full flex gap-1'>
            <Button disabled={isSaving} onClick={() => onSave?.(draft)}>
              {isSaving ? "A guardar..." : "Guardar"}
            </Button>

            <Button variant={"secondary"} disabled={isSaving} onClick={() => setIsEditing?.((lastState) => !lastState)}>
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};