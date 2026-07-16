"use client"

import { customBlur } from '@/app/fonts';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export const Hero: React.FC = () => {
  return (
    <section className="w-full h-auto pt-17">
      <div className="relative w-full max-w-[1920px] h-124.25 mx-auto">

        <img
          src="/assets/agency/hero.png"
          alt="REDE Hero"
          className="w-full h-full object-cover"
        />

        {/* overlay de textos */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4">
          <Heading className={`${customBlur.className} text-rede-yellow text-[128px] font-medium`}>
            Oportunidades
          </Heading>

          <Text className="text-rede-white font-semibold max-w-2xl">
            Oportunidades que transformam ideias em projetos sustentáveis.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </div>

      </div>
    </section>
  )
}