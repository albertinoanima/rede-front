'use client'

import { customBlur } from '@/app/fonts'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

export const WhatWeAreDoing: React.FC = () => {
  return (
    <section className="h-auto w-full bg-rede-surface">
      <div className="relative mx-auto flex min-h-30 h-auto w-full max-w-360 flex-col gap-14 px-4 py-14 sm:gap-20 sm:py-16 lg:gap-[120px] lg:py-20">
        <div className="flex h-auto w-full flex-col gap-5">
          <Heading
            level="h2"
            className={`${customBlur.className} mb-2 break-words text-center text-[48px] font-medium leading-none text-rede-yellow sm:text-[68px] lg:mb-4 lg:text-[96px] lg:leading-24`}
          >
            O que estamos a fazer
          </Heading>

          <Text className="mx-auto max-w-4xl text-center text-base font-semibold leading-6 sm:text-lg sm:leading-7 lg:text-[20px]">
            A REDE está a desenvolver um estudo que dará origem a um documento de recomendações sobre a implementação do modelo de Film Commissions nos PALOP e em Timor-Leste. <br/><br/>
O trabalho junta três coisas: analisar a legislação em vigor em cada país, estudar exemplos internacionais que funcionam, e ouvir quem produz — para perceber como as coisas acontecem na prática, e não apenas como estão escritas.<br/><br/>
Não partimos de um modelo pré-definido. As tipologias em estudo estão descritas abaixo e serão avaliadas com base na evidência recolhida.
          </Text>
        </div>
      </div>
    </section>
  )
}