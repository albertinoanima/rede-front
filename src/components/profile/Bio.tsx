"use client"

import { customBlur } from '@/app/fonts';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Tag } from '../Tag';
import { User } from '@/types/User';
import { Button } from '../ui/button';
import { Edit2 } from 'lucide-react';


export const Bio: React.FC<{ isAuthenticated?: boolean, profile?: User }> = ({ isAuthenticated = false, profile }) => {
  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-[1920px] min-h-90 h-auto mx-auto flex items-center justify-center">

        <div className='max-w-360 flex gap-6'>
          <div className="w-full h-auto">

            <div className='flex items-center gap-4'>
              <Heading className={`${customBlur.className} text-[48px] leading-12 mb-6`}>Biografia</Heading>
              {
                isAuthenticated &&
                <Button variant="secondary" className="rounded-full p-0 shrink-0 aspect-square w-10 h-10 flex items-center justify-center -mt-5">
                  <Edit2 width={12} height={12} />
                </Button>
              }
            </div>

            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</Text>
          </div>

          <div className="w-full h-auto">
            
            <div className='flex items-center gap-4'>
              <Heading className={`${customBlur.className} text-[48px] leading-12 mb-6`}>Competências</Heading>
              {
                isAuthenticated &&
                <Button variant="secondary" className="rounded-full p-0 shrink-0 aspect-square w-10 h-10 flex items-center justify-center -mt-5">
                  <Edit2 width={12} height={12} />
                </Button>
              }
            </div>

            <div className='flex flex-wrap gap-5'>
              <Tag label={"Cinematografia"} />
              <Tag label={"Câmera"} />
              <Tag label={"Iluminação"} />
              <Tag label={"Direção de Fotografia"} />
              <Tag label={"Edição"} />
              <Tag label={"Color Grading"} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}