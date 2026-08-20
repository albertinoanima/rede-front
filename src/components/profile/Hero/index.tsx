"use client"

import Image from "next/image";
import { Camera } from "lucide-react";
import { User } from '@/types/User';
import { EditProfile, ProfileHeroDraft } from './EditProfile';
import { ShowProfile } from './ShowProfile';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { ImageCropUploader } from "@/components/ImageCropUploader";

type ProfileData = User["profileData"];

type HeroProps = {
  profile?: User;
  profileData: ProfileData;
  isAuthenticated?: boolean;
  isSaving?: boolean;
  onSaveProfileData?: (patch: Partial<ProfileData>, userPatch?: Partial<Pick<User, "name">>) => Promise<boolean>;
  onImageUploadError?: (message: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  isAuthenticated = false,
  profile,
  profileData,
  isSaving = false,
  onSaveProfileData,
  onImageUploadError,
}) => {
  const [editting, setIsEditing] = useState(false);
  const [isCoverCropOpen, setIsCoverCropOpen] = useState(false);

  const handleSave = async (draft: ProfileHeroDraft) => {
    const saved = await onSaveProfileData?.({
      profession: draft.profession,
      username: draft.username,
    }, {
      name: draft.name,
    });

    if (saved) {
      setIsEditing(false);
    }
  };

  const handleCoverUploaded = async (url: string) => {
    const saved = await onSaveProfileData?.({ coverImageUrl: url });

    if (saved) {
      setIsCoverCropOpen(false);
      return;
    }

    onImageUploadError?.("N\u00e3o foi poss\u00edvel guardar a capa no perfil.");
  };

  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-480 h-124.25 mx-auto">
        <Image
          src={profileData.coverImageUrl || "/assets/profile/hero.png"}
          alt="REDE Hero"
          fill
          priority
          className="object-cover"
        />

        {isAuthenticated && (
          <div className="absolute right-6 top-6 z-10">
            <Button
              variant="secondary"
              disabled={isSaving}
              icon={<Camera width={12} height={12} />}
              iconPosition="left"
              onClick={() => setIsCoverCropOpen(true)}
            >
              Alterar capa
            </Button>
          </div>
        )}

        <div className="absolute inset-0 flex justify-center items-center">
          {editting && (
            <EditProfile
              profile={profile}
              profileData={profileData}
              isSaving={isSaving}
              setIsEditing={setIsEditing}
              onSave={handleSave}
            />
          )}

          {!editting && (
            <ShowProfile
              isAuthenticated={isAuthenticated}
              profile={profile}
              profileData={profileData}
              isSaving={isSaving}
              editting={editting}
              setIsEditing={setIsEditing}
              onSaveProfileData={onSaveProfileData}
              onImageUploadError={onImageUploadError}
            />
          )}
        </div>
      </div>

      <Modal open={isCoverCropOpen} onClose={() => setIsCoverCropOpen(false)} panelClassName="rounded-none border-[1.3px] border-rede-white/20">
        <ImageCropUploader
          value={profileData.coverImageUrl}
          folder="profile-covers"
          aspectRatio={16 / 9}
          minHeight={320}
          uploadLabel="Guardar capa"
          helperText="Arraste e ajuste o zoom para enquadrar a capa do perfil."
          disabled={isSaving}
          onUploaded={handleCoverUploaded}
          onError={onImageUploadError}
        />
      </Modal>
    </section>
  )
}