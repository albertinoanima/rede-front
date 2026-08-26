'use client'

import { customBlur } from '@/app/fonts'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

export const Hero: React.FC = () => {
  return (
    <section className="h-auto w-full pt-17">
      <div className="relative mx-auto h-[420px] w-full max-w-[1920px] overflow-hidden sm:h-[450px] lg:h-124.25">
        <img
          src="/assets/agency/hero.png"
          alt="Imagem de destaque da Agência"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/20 px-4 text-center sm:gap-4 sm:px-6 lg:bg-transparent">
          <Heading
            className={`${customBlur.className} text-[64px] font-medium leading-none text-rede-red sm:text-[88px] lg:text-[128px]`}
          >
            Agência
          </Heading>

          <Text className="max-w-[560px] text-sm font-semibold leading-relaxed text-rede-white sm:text-base lg:max-w-2xl">
            A Agência de Curta-metragem PALOP + TL apoia a nova geração do audiovisual, promovendo filmes, criadores e oportunidades que reforçam a colaboração, a mobilidade cultural e a presença internacional das nossas cinematografias.
          </Text>
        </div>
      </div>
    </section>
  )
}