import Image from "next/image"
import { Text } from "../../ui/text"
import { Input } from "../../ui/Input"
import { Button } from "../../ui/button"
import { Dispatch, SetStateAction, useState } from "react"
import { User } from "@/types/User"

type ProfileData = User["profileData"];

export type ProfileHeroDraft = {
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

export const EditProfile: React.FC<EditProfileType> = ({
  profile,
  profileData,
  isSaving = false,
  setIsEditing,
  onSave,
}) => {
  const [draft, setDraft] = useState<ProfileHeroDraft>({
    profession: profileData.profession ?? "",
    username: profileData.username ?? "",
  });

  const updateDraft = (key: keyof ProfileHeroDraft, value: string) => {
    setDraft((lastState) => ({ ...lastState, [key]: value }));
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
            <Input variant={"secondary"} value={profile?.name ?? ""} disabled placeholder='Nome' className='bg-transparent' />
          </div>

          <div className='flex flex-col gap-2'>
            <Text className='text-[20px] leading-7 font-medium'>Profissao</Text>
            <Input variant={"secondary"} value={draft.profession} onChange={(event) => updateDraft("profession", event.target.value)} placeholder='Profissao' className='bg-transparent' />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Text className='text-[20px] leading-7 font-medium'>Username</Text>
          <Input variant={"secondary"} value={draft.username} onChange={(event) => updateDraft("username", event.target.value)} placeholder='username' className='bg-transparent' />
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