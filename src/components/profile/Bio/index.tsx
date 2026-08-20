"use client"

import { useState } from 'react';
import { User } from '@/types/User';
import { SectionEditBio } from './SectionEditBio';
import { SectionEditSkills } from './SectionEditSkills';

type ProfileData = User["profileData"];

type BioType = {
  isAuthenticated?: boolean;
  profile?: User;
  profileData: ProfileData;
  isSaving?: boolean;
  onSaveProfileData?: (patch: Partial<ProfileData>) => Promise<boolean>;
}

export const Bio: React.FC<BioType> = ({
  isAuthenticated = false,
  profileData,
  isSaving = false,
  onSaveProfileData,
}) => {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isEditingSkills, setIsEditingSkils] = useState(false);

  const handleSaveBio = async (bio: string) => {
    const saved = await onSaveProfileData?.({ bio });
    if (saved) setIsEditingBio(false);
  };

  const handleSaveSkills = async (skills: string[]) => {
    const saved = await onSaveProfileData?.({ skills });
    if (saved) setIsEditingSkils(false);
  };

  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-[1920px] min-h-90 h-auto mx-auto flex items-center justify-center">
        <div className='w-full max-w-360 h-auto flex gap-6 pt-25 pb-40'>
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
            setIsEditingSkils={setIsEditingSkils}
            profileData={profileData}
            skills={profileData.skills}
            isSaving={isSaving}
            onSaveSkills={handleSaveSkills}
          />
        </div>
      </div>
    </section>
  )
}