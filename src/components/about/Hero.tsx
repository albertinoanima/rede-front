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
            Sobre nós
          </Heading>

          <Text className="text-rede-white font-semibold max-w-2xl">
            A REDE de Cinema e Audiovisual PALOP+TL é uma iniciativa criada em 2018, por jovens realizadores, produtores e diretores de festivais dos Países Africanos de Língua Oficial Portuguesa. Procuramos formas de contribuir para a melhoria do ecossistema do sector audiovisual destes países, através de ações complementares, com vários focos de atuação.
          </Text>

        </div>

      </div>
    </section>
  )
}