import Image from "next/image"
import { Text } from "../../ui/text"
import { Button } from "../../ui/button"
import { Dispatch, SetStateAction, useState } from "react"
import { User } from "@/types/User"
import { Camera, Edit2, GlobeIcon, Mail, MapPin, PhoneIcon, Plus } from "lucide-react"
import { customBlur } from "@/app/fonts"
import { Modal } from "@/components/ui/modal"
import { ImageCropUploader } from "@/components/ImageCropUploader"

type ProfileData = User["profileData"];

type ShowProfileType = {
    profile?: User;
    profileData: ProfileData;
    isAuthenticated?: boolean;
    isSaving?: boolean;
    editting?: boolean;
    setIsEditing?: Dispatch<SetStateAction<boolean>>;
    onSaveProfileData?: (patch: Partial<ProfileData>, userPatch?: Partial<Pick<User, "name">>) => Promise<boolean>;
    onImageUploadError?: (message: string) => void;
}

export const ShowProfile: React.FC<ShowProfileType> = ({
  profile,
  profileData,
  isAuthenticated = false,
  isSaving = false,
  setIsEditing,
  editting,
  onSaveProfileData,
  onImageUploadError,
}) => {
  const [isAvatarCropOpen, setIsAvatarCropOpen] = useState(false);
  const displayName = profile?.name || profileData.artisticName || profileData.commercialName || "Perfil";
  const location = [profileData.city, profileData.country].filter(Boolean).join(", ");
  const website = profileData.socialLinks?.website;

  const handleAvatarUploaded = async (url: string) => {
    const saved = await onSaveProfileData?.({ imageUrl: url });

    if (saved) {
      setIsAvatarCropOpen(false);
      return;
    }

    onImageUploadError?.("N\u00e3o foi poss\u00edvel guardar a foto no perfil.");
  };

  return (
    <div className='w-full max-w-360 flex gap-5'>
      <div className={`w-53 h-53 relative ${isAuthenticated ? "border-[1.3] border-white" : ""}`}>
        {isAuthenticated && (
          <div className='absolute inset-1 z-10 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100 focus-within:opacity-100'>
            <Button
              variant={"secondary"}
              disabled={isSaving}
              onClick={() => setIsAvatarCropOpen(true)}
              className='rounded-full p-9 shrink-0 aspect-square flex items-center justify-center'
            >
              <Camera width={12} height={12} />
              <span className="sr-only">Alterar foto</span>
            </Button>
          </div>
        )}
        <Image width={212} height={212} src={profileData.imageUrl || profile?.imageUrl || "/assets/profile/profile.png"} alt={displayName} className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col'>
        <div className='flex gap-4'>
          <Text className={`${customBlur.className} text-[48px] leading-12 font-medium`}>{displayName}</Text>
          {isAuthenticated && (
            <Button variant="secondary" className="rounded-full p-0 shrink-0 aspect-square w-10 h-10 flex items-center justify-center" onClick={() => setIsEditing?.(!editting)}>
              <Edit2 width={12} height={12} />
            </Button>
          )}
        </div>

        <Text className='text-[20px] leading-5 font-medium mt-2.5'>{profileData.profession || "Adicionar profissao"}</Text>
        {profileData.username && <Text className='text-[14px] leading-5 text-rede-white/70 mt-1'>@{profileData.username}</Text>}

        <div className='w-full flex flex-wrap gap-5 mt-5'>
          {location && (
            <Button variant={"secondary"} icon={<MapPin width={12} height={12} />} iconPosition='left'>
              {location}
            </Button>
          )}
          {profileData.professionalEmail && (
            <Button variant={"secondary"} icon={<Mail width={12} height={12} />} iconPosition='left'>
              {profileData.professionalEmail}
            </Button>
          )}
          {website && (
            <Button variant={"secondary"} icon={<GlobeIcon width={12} height={12} />} iconPosition='left'>
              {website.replace(/^https?:\/\//, "")}
            </Button>
          )}

          {isAuthenticated && (
            <Button variant={"secondary"} icon={<Plus width={12} height={12} />} iconPosition='left' className='border-rede-gray border-dashed' iconButtonClassName='border-rede-gray border-dashed'>
              Adicionar contacto
            </Button>
          )}
        </div>

        <div className='w-full flex flex-wrap gap-5 mt-5'>
          {profileData.professionalPhone && (
            <Button icon={<PhoneIcon width={12} height={12} color='black' />} iconPosition='left' className='bg-rede-yellow border-none text-rede-surface' iconButtonClassName="border-none">
              Contactar
            </Button>
          )}

          {isAuthenticated && (
            <Button variant={"secondary"} icon={<Plus width={12} height={12} />} iconPosition='left' className='border-rede-gray border-dashed' iconButtonClassName='border-rede-gray border-dashed'>
              Adicionar contacto
            </Button>
          )}
        </div>
      </div>

      <Modal open={isAvatarCropOpen} onClose={() => setIsAvatarCropOpen(false)} panelClassName="rounded-none border-[1.3px] border-rede-white/20">
        <ImageCropUploader
          value={profileData.imageUrl || profile?.imageUrl}
          folder="profile-avatars"
          aspectRatio={1}
          cropShape="circle"
          minHeight={420}
          uploadLabel="Guardar foto"
          helperText="Arraste e ajuste o zoom para enquadrar a foto de perfil."
          disabled={isSaving}
          onUploaded={handleAvatarUploaded}
          onError={onImageUploadError}
        />
      </Modal>
    </div>
  )
}