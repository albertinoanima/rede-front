"use client";

import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export const About: React.FC = () => {
  return (
    <section className="h-auto w-full">
      <div className="relative mx-auto flex h-auto min-h-30 w-full max-w-6xl flex-col px-4 pt-14 sm:px-6 sm:pt-16 lg:px-0 lg:pt-20">
        <div className="mb-8 h-auto w-full lg:w-1/2 lg:px-4">
          <Heading
            className={`${customBlur.className} text-[56px] font-medium leading-none text-rede-yellow sm:text-[72px] lg:text-[96px] lg:leading-[96px]`}
          >
            Equipa
          </Heading>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
          <div className="h-auto w-full lg:w-1/2 lg:px-4">
            <Text className="text-[14px] leading-relaxed font-medium">
              A equipa é formada por Diana Manhiça — coordenadora-geral e de
              comunicação — e António Maxlhaieie — assessor de coordenação e
              diretor de produção do FilmLab —, que representam Moçambique
              através da AAMCM — Associação dos Amigos do Museu do Cinema em
              Moçambique. Contam ainda com o apoio de uma gestora de projeto e
              de uma estagiária de mapeamento e administração.
              <br />
              <br />
              Em Cabo Verde, a equipa é formada pelas realizadoras e produtoras
              Samira Vera-Cruz — coordenadora local, coordenadora de formação e
              de parcerias internacionais — e Emília Wojciechowska —
              coordenadora local e de curadoria.
            </Text>
          </div>

          <div className="h-auto w-full lg:w-1/2 lg:px-4">
            <Text className="text-[14px] leading-relaxed font-medium">
              Em São Tomé e Príncipe, a equipa é representada pela realizadora
              e produtora Katya Aragão, diretora do São Tomé FilmLab, na
              qualidade de coordenadora local.
              <br />
              <br />
              Na Guiné-Bissau e em Timor-Leste, a equipa conta com dois pontos
              focais: o ator e realizador Welket Bungué e o músico e produtor
              Kay Seran Limak, respetivamente.
              <br />
              <br />
              Atualmente, a equipa não tem representação em Angola.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};