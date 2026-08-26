"use client";

import Image from "next/image";
import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export const ProjectSection: React.FC = () => {
  return (
    <section className="h-auto w-full bg-rede-surface">
      <div className="relative mx-auto flex h-auto min-h-30 w-full max-w-6xl flex-col px-4 py-14 sm:px-6 sm:py-16 lg:px-0 lg:pb-20 lg:pt-20">
        <div className="mb-8 h-auto w-full lg:w-1/2 lg:px-4">
          <Heading
            className={`${customBlur.className} text-[56px] font-medium leading-none text-rede-yellow sm:text-[72px] lg:text-[96px] lg:leading-[96px]`}
          >
            Projeto
          </Heading>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-0">
          <div className="h-auto w-full lg:w-1/2 lg:px-4">
            <Text className="text-[14px] leading-relaxed font-medium">
              Inicialmente constituída por profissionais de Angola, Cabo Verde,
              Moçambique e São Tomé e Príncipe, e contando atualmente com pontos
              focais na Guiné-Bissau e em Timor-Leste, a REDE desenvolve
              atividades com foco nas seguintes áreas:
            </Text>

            <ul className="ml-5 mt-3 list-disc space-y-1 text-[14px] leading-relaxed font-medium">
              <li className="pl-1 lg:indent-2.5">
                Atualização e comunicação de dados sobre o setor;
              </li>
              <li className="pl-1 lg:indent-2.5">
                Promoção do networking entre profissionais;
              </li>
              <li className="pl-1 lg:indent-2.5">
                Reforço da exibição e da distribuição regional e internacional
                de obras;
              </li>
              <li className="pl-1 lg:indent-2.5">
                Desenvolvimento de propostas para reforçar a coprodução
                regional e internacional;
              </li>
              <li className="pl-1 lg:indent-2.5">
                Implementação de atividades de reforço das competências
                técnicas e artísticas;
              </li>
              <li className="pl-1 lg:indent-2.5">
                Promoção da igualdade de género e das temáticas ambientais
                através de ações afirmativas;
              </li>
              <li className="pl-1 lg:indent-2.5">
                Advocacia junto das entidades públicas e dos parceiros de
                cooperação.
              </li>
            </ul>
          </div>

          <div className="h-auto w-full lg:w-1/2 lg:px-4">
            <Text className="text-[14px] leading-relaxed font-medium">
              Esta plataforma faz parte da nossa estratégia para promover a
              colaboração e a divulgação de profissionais e empresas, bem como
              dos produtos e serviços que disponibilizam e desenvolvem.
            </Text>

            <div className="relative mt-8 h-[220px] w-full overflow-hidden sm:h-[250px] lg:mt-10">
              <Image
                src="/assets/about/paths.svg"
                alt="Percursos e ligações promovidos pela REDE"
                fill
                sizes="(max-width: 1023px) 100vw, 576px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};