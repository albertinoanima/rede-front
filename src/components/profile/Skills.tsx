"use client"

import { customBlur } from '@/app/fonts';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';

export const Skills: React.FC = () => {
  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-[1920px] min-h-90 h-auto mx-auto flex items-center justify-center">

        <div className="w-full h-auto max-w-360">
          <Heading className={`${customBlur.className} text-[48px] leading-12 mb-6`}>Competências</Heading>
          <div className='flex gap-5'>
              <span className='w-auto h-10 border-2 border-rede-white rounded-4xl flex items-center justify-center px-4.5'>Cinematografia</span>
              <span className='w-auto h-10 border-2 border-rede-white rounded-4xl flex items-center justify-center px-4.5'>Câmera</span>
              <span className='w-auto h-10 border-2 border-rede-white rounded-4xl flex items-center justify-center px-4.5'>Iluminação</span>
              <span className='w-auto h-10 border-2 border-rede-white rounded-4xl flex items-center justify-center px-4.5'>Direção de Fotografia</span>
              <span className='w-auto h-10 border-2 border-rede-white rounded-4xl flex items-center justify-center px-4.5'>Edição</span>
              <span className='w-auto h-10 border-2 border-rede-white rounded-4xl flex items-center justify-center px-4.5'>Color Grading</span>
          </div>
        </div>

      </div>
    </section>
  )
}