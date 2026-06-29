"use client"

import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

export const AgencyHero: React.FC = () => {
  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-[1920px] h-124.25 mx-auto">

        <img
          src="/assets/agency/hero.png"
          alt="REDE Hero"
          className="w-full h-full object-cover"
        />

        {/* overlay de textos */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4">
          
          <Heading className="text-red-500 blur-[2px] text-[128px] font-medium">
            Agência
          </Heading>

          <Text className="text-white font-semibold max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Participe em workshops, masterclasses e seminários de formação audiovisual.
          </Text>

        </div>

      </div>
    </section>
  )
}