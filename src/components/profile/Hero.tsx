"use client"

import { customBlur } from '@/app/fonts';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import Image from 'next/image';
import { Button } from '../ui/button';
import { GlobeIcon, Mail, MapPin, PhoneIcon } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-[1920px] h-124.25 mx-auto">

        <img
          src="/assets/profile/hero.png"
          alt="REDE Hero"
          className="w-full h-full object-cover"
        />

        {/* overlay de textos */}
        <div className="absolute inset-0 flex justify-center items-center">
          
          <div className='w-full max-w-289 flex gap-5'>
              <div className='w-53 h-53'>
                  <Image width={212} height={212} src="/assets/profile/profile.png" alt='Name' className='w-full h-full object-cover'/>
              </div>
              <div className='flex flex-col'>
                <Text className={`${customBlur.className} text-[48px] leading-12 font-medium`}>João Xibata</Text>
                <Text className='text-[20px] leading-5 font-medium mt-2.5'>Diretor de Fotografia</Text>

                <div className='w-full flex gap-5 mt-5'>
                  <Button variant={"secondary"} icon={<MapPin width={20} height={20}/>} iconPosition='left'>
                    Maputo, Moçambique
                  </Button>
                  <Button variant={"secondary"} icon={<Mail width={20} height={20}/>} iconPosition='left'>
                    joão@email.com
                  </Button>
                  <Button variant={"secondary"} icon={<GlobeIcon width={20} height={20}/>} iconPosition='left'>
                    www.joaosilva.com
                  </Button>
                </div>

                <div className='mt-5'>
                  <Button icon={<PhoneIcon width={20} height={20} color='black'/>} iconPosition='left' className='bg-rede-yellow border-none text-rede-black' iconButtonClassName="border-none">
                    Contactar
                  </Button>
                </div>

              </div>
          </div>

        </div>

      </div>
    </section>
  )
}