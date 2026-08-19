"use client"

import Image from "next/image";
import { Camera } from "lucide-react";
import { User } from '@/types/User';
import { EditProfile, ProfileHeroDraft } from './EditProfile';
import { ShowProfile } from './ShowProfile';
import { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { uploadImage } from "@/lib/uploadImage";

type ProfileData = User["profileData"];

type HeroProps = {
  profile?: User;
  profileData: ProfileData;
  isAuthenticated?: boolean;
  isSaving?: boolean;
  onSaveProfileData?: (patch: Partial<ProfileData>) => Promise<boolean>;
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
  const [isCoverUploading, setIsCoverUploading] = useState(false);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const handleSave = async (draft: ProfileHeroDraft) => {
    const saved = await onSaveProfileData?.({
      profession: draft.profession,
      username: draft.username,
    });

    if (saved) {
      setIsEditing(false);
    }
  };

  const handleCoverSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsCoverUploading(true);
    onImageUploadError?.("");

    try {
      const { url } = await uploadImage(file, "profile-covers");
      const saved = await onSaveProfileData?.({ coverImageUrl: url });

      if (!saved) {
        onImageUploadError?.("Nao foi possivel guardar a capa no perfil.");
      }
    } catch (err) {
      onImageUploadError?.(err instanceof Error ? err.message : "Nao foi possivel enviar a capa.");
    } finally {
      setIsCoverUploading(false);
      event.target.value = "";
    }
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
            <input
              ref={coverInputRef}
              type="file"
              accept="image/*"
              onChange={handleCoverSelect}
              className="hidden"
            />
            <Button
              variant="secondary"
              disabled={isSaving || isCoverUploading}
              icon={<Camera width={12} height={12} />}
              iconPosition="left"
              onClick={() => coverInputRef.current?.click()}
            >
              {isCoverUploading ? "A enviar..." : "Alterar capa"}
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
    </section>
  )
}