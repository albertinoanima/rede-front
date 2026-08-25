"use client";

import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export const Hero: React.FC = () => {
  return (
    <section className="h-auto w-full pt-17">
      <div className="relative mx-auto h-[580px] w-full max-w-[1920px] overflow-hidden sm:h-[540px] lg:h-124.25">
        <img
          src="/assets/agency/hero.png"
          alt="Equipa da REDE de Cinema e Audiovisual PALOP+TL"
          className="h-full w-full object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/40 lg:bg-black/20"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-5 text-center sm:px-8 lg:px-0">
          <Heading
            className={`${customBlur.className} text-[56px] font-medium leading-none text-rede-yellow sm:text-[80px] lg:text-[128px]`}
          >
            Sobre nós
          </Heading>

          <Text className="max-w-2xl text-sm font-semibold leading-6 text-rede-white sm:text-base sm:leading-7 lg:leading-normal">
            A REDE de Cinema e Audiovisual PALOP+TL é uma iniciativa criada em
            2018 por jovens realizadores, produtores e diretores de festivais
            dos Países Africanos de Língua Oficial Portuguesa. Procuramos
            formas de contribuir para a melhoria do ecossistema do sector
            audiovisual destes países, através de ações complementares, com
            vários focos de atuação.
          </Text>
        </div>
      </div>
    </section>
  );
};