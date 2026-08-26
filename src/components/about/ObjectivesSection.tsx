"use client";

import Image from "next/image";
import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export const ObjectivesSection: React.FC = () => {
  return (
    <section className="h-auto w-full bg-rede-bg">
      <div className="relative mx-auto flex h-auto min-h-30 w-full max-w-6xl flex-col px-4 py-14 sm:px-6 sm:py-16 lg:px-0 lg:pb-20 lg:pt-20">
        <div className="mb-12 h-auto w-full lg:mb-[100px] lg:px-4">
          <Heading
            className={`${customBlur.className} text-[56px] font-medium leading-none text-rede-yellow sm:text-[72px] lg:text-[96px] lg:leading-[96px]`}
          >
            Objetivos
          </Heading>
        </div>

        <div className="h-auto w-full lg:px-4">
          <div className="relative mx-auto aspect-[1156/668] w-full overflow-hidden lg:mt-10 lg:h-[668px] lg:w-[1156px]">
            <Image
              src="/assets/about/map.svg"
              alt="Mapa dos países abrangidos pela REDE"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 1156px"
              className="object-contain lg:object-cover"
            />
          </div>
        </div>

        <div className="mt-14 flex h-auto w-full flex-col gap-8 lg:mt-20 lg:gap-10 lg:px-4">
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
            <div className="w-full lg:w-1/2">
              <Text
                className={`${customBlur.className} text-[34px] font-medium leading-[40px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px]`}
              >
                Divulgar e promover,
                <br className="hidden lg:block" /> regional e
                internacionalmente
              </Text>
            </div>

            <div className="w-full lg:w-1/2">
              <Text className="text-[14px] leading-relaxed font-medium">
                Divulgar e promover, regional e internacionalmente, a produção
                e os profissionais do audiovisual dos PALOP e de Timor-Leste,
                através da reativação do trabalho em rede, contribuindo para a
                visibilidade dos produtos e serviços e para a viabilidade de
                negócios culturais geridos, em particular, por mulheres.
              </Text>
            </div>
          </div>

          <hr className="w-full border-[1.3px] border-rede-white" />

          <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
            <div className="w-full lg:w-1/2">
              <Text
                className={`${customBlur.className} text-[34px] font-medium leading-[40px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px]`}
              >
                Contribuir para a
                <br className="hidden lg:block" /> capacitação técnica
                <br className="hidden lg:block" /> e artística
              </Text>
            </div>

            <div className="w-full lg:w-1/2">
              <Text className="text-[14px] leading-relaxed font-medium">
                Contribuir para a capacitação técnica e artística de jovens,
                mulheres produtoras e realizadoras dos PALOP e de Timor-Leste,
                bem como para a promoção internacional dos seus trabalhos,
                através da escrita, da produção e da curadoria sobre temáticas
                transversais, como os direitos fundamentais, os direitos de
                autor e as questões ambientais.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};