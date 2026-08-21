import Image from "next/image"
import { Text } from "../../ui/text"
import { Input } from "../../ui/Input"
import { Button } from "../../ui/button"
import { Dispatch, SetStateAction, useState } from "react"
import { User } from "@/types/User"
import { Select } from "@/components/ui/select"
import {
  categoriesList,
  companiesCategoryList,
  festivalsCategoryList,
  institutionsCategoryList,
} from "@/components/network/data"

type ProfileData = User["profileData"];

export type ProfileHeroDraft = {
  name: string;
  profession: string;
  username: string;
};

type EditProfileType = {
  profile?: User;
  profileData: ProfileData;
  isSaving?: boolean;
  setIsEditing?: Dispatch<SetStateAction<boolean>>;
  onSave?: (draft: ProfileHeroDraft) => void | Promise<void>;
}

type NetworkProfileType = "profissionais" | "empresa" | "festival" | "instituicao";

const getProfileType = (profileData: ProfileData): NetworkProfileType => {
  const legacyProfileData = profileData as ProfileData & {
    type?: string;
    profileType?: string;
  };
  const legacyType = legacyProfileData.type ?? legacyProfileData.profileType;

  if (
    legacyType === "profissionais" ||
    legacyType === "empresa" ||
    legacyType === "festival" ||
    legacyType === "instituicao"
  ) {
    return legacyType;
  }

  return profileData.accountType === "company" ? "empresa" : "profissionais";
};

export const EditProfile: React.FC<EditProfileType> = ({ profile, profileData, isSaving = false, setIsEditing, onSave }) => {
  const [draft, setDraft] = useState<ProfileHeroDraft>({
    name: profile?.name ?? "",
    profession: profileData.profession ?? "",
    username: profileData.username ?? "",
  });

  const updateDraft = (key: keyof ProfileHeroDraft, value: string) => {
    setDraft((lastState) => ({ ...lastState, [key]: value }));
  };


  const selectedType = getProfileType(profileData);

  const categoryOptions =
    selectedType === 'profissionais'
      ? categoriesList
      : selectedType === 'empresa'
        ? companiesCategoryList
        : selectedType === 'festival'
          ? festivalsCategoryList
          : selectedType === 'instituicao'
            ? institutionsCategoryList
            : [
              ...categoriesList,
              ...companiesCategoryList,
              ...festivalsCategoryList,
              ...institutionsCategoryList,
            ]

  const selectedProfessionValue =
    categoryOptions.find((option) => option.value === draft.profession || option.label === draft.profession)?.value ?? "";

  const handleProfessionChange = (value: string) => {
    const selectedOption = categoryOptions.find((option) => option.value === value);

    updateDraft("profession", selectedOption?.label ?? value);
  };

  return (
    <div className='w-full max-w-360 flex gap-5'>
      <div className='w-53 h-53'>
        <Image width={212} height={212} src={profileData.imageUrl || profile?.imageUrl || "/assets/profile/profile.png"} alt={profile?.name || 'Perfil'} className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='w-full flex gap-2'>
          <div className='flex flex-col gap-2'>
            <Text className='text-[20px] leading-7 font-medium'>Nome</Text>
            <Input variant={"secondary"} value={draft.name} onChange={(event) => updateDraft("name", event.target.value)} placeholder='Nome' className='bg-transparent' />
          </div>

          <div className='flex flex-col gap-2'>
            <Text className='text-[20px] leading-7 font-medium'>Profissão</Text>

            <Select
              variant="secondary"
              value={selectedProfessionValue}
              placeholder="Selecione a profissão"
              options={categoryOptions}
              triggerClassName="border-[1.3px] border-white px-3 text-rede-white outline-none"
              popoverClassName="rounded-[8px] border-[1.3px] border-white px-3 text-rede-white outline-none mt-[10px]"
              satelliteClassName="border-[1.3px] border-white"
              onChange={handleProfessionChange}
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Text className='text-[20px] leading-7 font-medium'>Nome de utilizador</Text>
          <Input variant={"secondary"} value={draft.username} onChange={(event) => updateDraft("username", event.target.value)} placeholder='nome-de-utilizador' className='bg-transparent' />
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
  )
}

