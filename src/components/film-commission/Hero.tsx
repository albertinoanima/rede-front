'use client'

import { customBlur } from '@/app/fonts'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

export const Hero: React.FC = () => {
  return (
    <section className="h-auto w-full pt-17">
      <div className="relative mx-auto h-[440px] w-full max-w-[1920px] overflow-hidden sm:h-[470px] lg:h-124.25">
        <img
          src="/assets/agency/hero.png"
          alt="Imagem de destaque da Film Commission"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/20 px-4 text-center sm:px-6 lg:bg-transparent">
          <Heading
            className={`${customBlur.className} text-[58px] font-medium leading-[0.9] text-rede-yellow sm:text-[84px] lg:text-[128px] lg:leading-32`}
          >
            Film
            <br />
            Commission
          </Heading>

          <Text className="max-w-[600px] text-sm font-semibold leading-relaxed text-rede-white sm:text-base lg:max-w-2xl">
            A Rede está a desenvolver um trabalho de elaboração de recomendações
            para a implementação do modelo de Film Commissions nos PALOP e em
            Timor-Leste.
          </Text>
        </div>
      </div>
    </section>
  )
}