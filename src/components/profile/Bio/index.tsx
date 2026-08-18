"use client"

import { customBlur } from '@/app/fonts';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';

import { Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tag } from '@/components/Tag';
import { useState } from 'react';
import { User } from '@/types/User';
import { SectionEditBio } from './SectionEditBio';
import { SectionEditSkills } from './SectionEditSkills';

type BioType = {
  isAuthenticated?: boolean;
  profile?: User;
}

export const Bio: React.FC<BioType> = ({ isAuthenticated = false, profile }) => {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isEditingSkills, setIsEditingSkils] = useState(false);

  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-[1920px] min-h-90 h-auto mx-auto flex items-center justify-center">

        <div className='w-full max-w-360 h-auto flex gap-6 pt-25 pb-40'>

          <SectionEditBio isAuthenticated={isAuthenticated} isEditingBio={isEditingBio} setIsEditingBio={setIsEditingBio} />
          <SectionEditSkills isAuthenticated={isAuthenticated} isEditingSkils={isEditingSkills} setIsEditingSkils={setIsEditingSkils} />

        </div>
      </div>
    </section>
  )
}