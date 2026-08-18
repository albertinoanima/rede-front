"use client"

import { User } from '@/types/User';
import { EditProfile } from './EditProfile';
import { ShowProfile } from './ShowProfile';
import { useState } from 'react';


type HeroProps = {
  profile?: User;
  isAuthenticated?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isAuthenticated = false, profile }) => {
  const [editting, setIsEditing] = useState(false);

  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-480 h-124.25 mx-auto">

        <img
          src="/assets/profile/hero.png"
          alt="REDE Hero"
          className="w-full h-full object-cover"
        />

        {/* overlay de textos */}
        <div className="absolute inset-0 flex justify-center items-center">
          {
            editting && 
            <EditProfile setIsEditing={setIsEditing} />
          }

          {
            !editting && 
            <ShowProfile isAuthenticated={isAuthenticated} profile={profile} editting={editting} setIsEditing={setIsEditing} />
          }
        </div>

      </div>
    </section>
  )
}


