"use client";

import { useState } from "react";
import { User } from "@/types/User";
import { SectionEditBio } from "./SectionEditBio";
import { SectionEditSkills } from "./SectionEditSkills";

type ProfileData = User["profileData"];

type BioProps = {
  isAuthenticated?: boolean;
  profile?: User;
  profileData: ProfileData;
  isSaving?: boolean;
  onSaveProfileData?: (patch: Partial<ProfileData>) => Promise<boolean>;
};

export const Bio: React.FC<BioProps> = ({
  isAuthenticated = false,
  profileData,
  isSaving = false,
  onSaveProfileData,
}) => {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isEditingSkills, setIsEditingSkills] = useState(false);

  const handleSaveBio = async (bio: string) => {
    const saved = await onSaveProfileData?.({ bio });

    if (saved) {
      setIsEditingBio(false);
    }
  };

  const handleSaveSkills = async (skills: string[]) => {
    const saved = await onSaveProfileData?.({ skills });

    if (saved) {
      setIsEditingSkills(false);
    }
  };

  return (
    <section className="h-auto w-full">
      <div className="relative mx-auto flex min-h-90 w-full max-w-[1920px] items-center justify-center">
        <div className="flex h-auto w-full max-w-360 flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:gap-6 lg:px-0 lg:pb-40 lg:pt-25">
          <SectionEditBio
            isAuthenticated={isAuthenticated}
            isEditingBio={isEditingBio}
            setIsEditingBio={setIsEditingBio}
            bio={profileData.bio}
            isSaving={isSaving}
            onSaveBio={handleSaveBio}
          />

          <SectionEditSkills
            isAuthenticated={isAuthenticated}
            isEditingSkils={isEditingSkills}
            setIsEditingSkils={setIsEditingSkills}
            profileData={profileData}
            skills={profileData.skills}
            isSaving={isSaving}
            onSaveSkills={handleSaveSkills}
          />
        </div>
      </div>
    </section>
  );
};