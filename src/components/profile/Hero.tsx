"use client"

import Image from 'next/image';
import { User } from '@/types/User';
import { Button } from '../ui/button';
import { customBlur } from '@/app/fonts';
import { Text } from '@/components/ui/text';
import { Camera, Edit2, GlobeIcon, Mail, MapPin, PhoneIcon, Plus } from 'lucide-react';
import { Input } from '../ui/Input';
import { Dispatch, SetStateAction, useState } from 'react';

export const Hero: React.FC<{ isAuthenticated?: boolean, profile?: User }> = ({ isAuthenticated = false, profile }) => {
  const [editting, setIsEditing] = useState(false);

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
          {
            editting && <EditProfile setIsEditing={setIsEditing} />
          }

          {
            !editting &&
            <div className='w-full max-w-360 flex gap-5'>
              <div className={`w-53 h-53 relative ${isAuthenticated ? "border-[1.3] border-white" : ""}`}>
                <div className='absolute inset-1 flex items-center justify-center'>
                  <Button variant={"secondary"} className='rounded-full p-9 shrink-0 aspect-square flex items-center justify-center'>
                    <Camera width={12} height={12} />
                  </Button>
                </div>
                <Image width={212} height={212} src="/assets/profile/profile.png" alt='Name' className='w-full h-full object-cover' />
              </div>
              <div className='flex flex-col'>
                <div className='flex gap-4'>
                  <Text className={`${customBlur.className} text-[48px] leading-12 font-medium`}>João Xibata</Text>
                  {
                    isAuthenticated &&
                    <Button variant="secondary" className="rounded-full p-0 shrink-0 aspect-square w-10 h-10 flex items-center justify-center" onClick={() => setIsEditing(!editting)}>
                      <Edit2 width={12} height={12} />
                    </Button>
                  }
                </div>

                <Text className='text-[20px] leading-5 font-medium mt-2.5'>Diretor de Fotografia</Text>

                <div className='w-full flex flex-wrap gap-5 mt-5'>
                  <Button variant={"secondary"} icon={<MapPin width={12} height={12} />} iconPosition='left'>
                    Maputo, Moçambique
                  </Button>
                  <Button variant={"secondary"} icon={<Mail width={12} height={12} />} iconPosition='left'>
                    joão@email.com
                  </Button>
                  <Button variant={"secondary"} icon={<GlobeIcon width={12} height={12} />} iconPosition='left'>
                    www.joaosilva.com
                  </Button>

                  {
                    isAuthenticated &&
                    <Button variant={"secondary"} icon={<Plus width={12} height={12} />} iconPosition='left' className='border-rede-gray border-dashed' iconButtonClassName='border-rede-gray border-dashed'>
                      Adicionar contacto
                    </Button>
                  }
                </div>

                <div className='w-full flex flex-wrap gap-5 mt-5'>
                  <Button icon={<PhoneIcon width={12} height={12} color='black' />} iconPosition='left' className='bg-rede-yellow border-none text-rede-surface' iconButtonClassName="border-none">
                    Contactar
                  </Button>

                  {
                    isAuthenticated &&
                    <Button variant={"secondary"} icon={<Plus width={12} height={12} />} iconPosition='left' className='border-rede-gray border-dashed' iconButtonClassName='border-rede-gray border-dashed'>
                      Adicionar contacto
                    </Button>
                  }
                </div>

              </div>
            </div>
          }
        </div>

      </div>
    </section>
  )
}

const EditProfile: React.FC<{ setIsEditing?: Dispatch<SetStateAction<boolean>> }> = ({ setIsEditing }) => {
  return (
    <div className='w-full max-w-360 flex gap-5'>
      <div className='w-53 h-53'>
        <Image width={212} height={212} src="/assets/profile/profile.png" alt='Name' className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col gap-4'>

        <div className='w-full flex gap-2'>
          <div className='flex flex-col gap-2'>
            <Text className='text-[20px] leading-7 font-medium'>Nome</Text>
            <Input variant={"secondary"} placeholder='Nome' className='bg-transparent' />
          </div>

          <div className='flex flex-col gap-2'>
            <Text className='text-[20px] leading-7 font-medium'>Profissão</Text>
            <Input variant={"secondary"} placeholder='Profissão' className='bg-transparent' />
          </div>
        </div>

        <div className='w-full flex gap-1'>
          <Button>
            Guardar
          </Button>

          <Button variant={"secondary"} onClick={() => setIsEditing?.((lastState) => !lastState)}>
            Cancelar
          </Button>
        </div>

        {/* 
              <div className='flex gap-4'>
                <Text className={`${customBlur.className} text-[48px] leading-12 font-medium`}>João Xibata</Text>
                {
                  isAuthenticated &&
                  <Button variant="secondary" className="rounded-full p-0 shrink-0 aspect-square w-10 h-10 flex items-center justify-center">
                    <Edit2 width={12} height={12} />
                  </Button>
                }
              </div>

              <Text className='text-[20px] leading-5 font-medium mt-2.5'>Diretor de Fotografia</Text>

              <div className='w-full flex flex-wrap gap-5 mt-5'>
                <Button variant={"secondary"} icon={<MapPin width={12} height={12} />} iconPosition='left'>
                  Maputo, Moçambique
                </Button>
                <Button variant={"secondary"} icon={<Mail width={12} height={12} />} iconPosition='left'>
                  joão@email.com
                </Button>
                <Button variant={"secondary"} icon={<GlobeIcon width={12} height={12} />} iconPosition='left'>
                  www.joaosilva.com
                </Button>

                {
                  isAuthenticated &&
                  <Button variant={"secondary"} icon={<Plus width={12} height={12} />} iconPosition='left' className='border-rede-gray border-dashed' iconButtonClassName='border-rede-gray border-dashed'>
                  Adicionar contacto
                </Button>
                }
              </div>

              <div className='w-full flex flex-wrap gap-5 mt-5'>
                <Button icon={<PhoneIcon width={12} height={12} color='black' />} iconPosition='left' className='bg-rede-yellow border-none text-rede-surface' iconButtonClassName="border-none">
                  Contactar
                </Button>

                {
                  isAuthenticated &&
                  <Button variant={"secondary"} icon={<Plus width={12} height={12} />} iconPosition='left' className='border-rede-gray border-dashed' iconButtonClassName='border-rede-gray border-dashed'>
                  Adicionar contacto
                </Button>
                }
              </div> 
              */}

      </div>
    </div>
  )
}