// components/MissaoVisaoObjetivosSection.tsx

import Image from "next/image";
import { Text } from "../ui/text";
import Link from "next/link";

const objetivos = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
];

export function GovementAndStrategy() {
  return (
    <section className="bg-rede-bg py-16">
      <div className="mx-auto max-w-300 mr-auto ml-auto px-4">
        <div className="flex flex-col gap-10">
          <div className="w-full flex gap-4">
            <div className="w-1/2 flex flex-col gap-4">
              <Link href="/assets/governa%C3%A7%C3%A3o_digital_V0_19-07-26_terms.pdf" target="_blank">
                <div className="w-full h-112.5 bg-rede-yellow" >
                  <Image src="/assets/about/Gov_Digital_Y.jpg" alt="" width={1000} height={450} className="w-full h-full object-contain" />
                </div>
              </Link>
              <h2 className="col-span-2 text-2xl font-bold text-rede-white">
                GOVERNAÇÃO DIGITAL
              </h2>
              <div className="text-[14px] leading-relaxed text-rede-white">
                A Rede de Cinema e Audiovisual PALOP+TL constitui uma plataforma regional dedicada ao fortalecimento, valorização e promoção dos ecossistemas cinematográficos e audiovisuais dos países participantes. Num contexto marcado pela diversidade cultural, linguística, histórica e tecnológica, a Rede assume a missão de aproximar profissionais, organizações, instituições culturais e parceiros, promovendo:
                <br />

                <ul className="list-none">
                  <li>- circulação de conhecimento</li>
                  <li>- criação de oportunidades</li>
                  <li>- cooperação profissional</li>
                  <li>- valorização da produção audiovisual</li>
                </ul><br/>

                A dimensão digital da Rede não é entendida apenas como uma ferramenta tecnológica, mas como uma infraestrutura de colaboração, documentação e construção de conhecimento coletivo. Por essa razão, a Rede estabelece o presente Quadro de Governação Digital, definindo os princípios, regras e compromissos que orientam a sua presença digital.
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-4">
              <Link href="/assets/governa%C3%A7%C3%A3o-digital_V0_SHORT_VERSION_politicas.pdf" target="_blank">
                <div className="w-full h-112.5 bg-rede-yellow">
                  <Image src="/assets/about/Com_r.jpg" alt="" width={1000} height={450} className="w-full h-full object-contain" />
                </div>
              </Link>

              <h2 className="col-span-2 text-2xl font-bold text-rede-white">
                ESTRATEGIA DE COMUNICAÇÃO E VISIBILIDADE
              </h2>
              <div className="text-[14px] leading-relaxed text-rede-white">
                A Rede de Cinema e Audiovisual dos PALOP+TL surge como uma plataforma estratégica de cooperação cultural e profissional, dedicada à valorização, circulação e internacionalização do cinema e do audiovisual produzido nos países de língua portuguesa de África e em Timor-Leste.
                Num contexto global em que as cinematografias africanas e do Sul Global ganham crescente relevância, a Rede posiciona-se, também, como uma plataforma de visibilidade internacional.<br/><br/>

                Nesse sentido, a nossa Estratégia de Comunicação traça o caminho para os objectivos de fortalecer a identidade, a visibilidade e a capacidade do cinema PALOP+TL, posicionando a Rede como a plataforma unificadora e representativa do cinema dos países de língua oficial portuguesa.
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}