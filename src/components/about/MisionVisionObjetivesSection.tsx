// components/MissaoVisaoObjetivosSection.tsx

import Image from "next/image";
import { Text } from "../ui/text";

const objetivos = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
];

export function MisionVisionObjetivesSection() {
  return (
    <section className="bg-rede-bg py-16">
      <div className="mx-auto max-w-300 mr-auto ml-auto px-4">

        <div className="flex flex-col gap-10">
          <div className="w-full h-112.5 bg-rede-yellow" >
            <Image src="/assets/about/Objetivos_r.jpg" alt="" width={1000} height={450} className="w-full h-full object-contain" />
          </div>

          <div className="w-full flex gap-4">
            <div className="w-1/2">
              <h2 className="col-span-2 text-2xl font-bold text-rede-white">
                Objetivos
              </h2>
              <div className="text-[14px] leading-relaxed text-rede-white">
                Nesta fase do nosso trabalho, os objetivos principais são: <br />
                <b>Divulgar e promover, regional e internacionalmente</b>, a produção e os profissionais de audiovisual dos PALOP e Timor-Leste, através da (re)ativação do trabalho em rede, contribuindo para a visibilidade de produtos e serviços, e a viabilidade de negócios culturais geridos, em particular, por mulheres.<br /><br />
                <b>Contribuir para a capacitação técnica e artística</b> de jovens e mulheres produtores e realizadores dos PALOP e Timor-Leste, e a promoção internacional dos seus trabalhos, através da escrita, produção e curadoria sobre temáticas transversais como: direitos fundamentais, direitos de autor e questões ambientais.
              </div>
            </div>

            <div className="w-1/2">
              <h2 className="col-span-2 text-2xl font-bold text-rede-white">
                Missão
              </h2>
              <div className="text-[14px] leading-relaxed text-rede-white">
                A REDE de Cinema e Audiovisual PALOP+TL é uma iniciativa de realizadores, produtores e directores de festivais dos Países Africanos de Língua Oficial Portuguesa, com o propósito de contribuir para melhorar o ecossistema do sector audiovisual destes países, através de trabalho em rede.
                <br /><br />
                <ul className="list-none">
                  <li>ANGOLA</li>
                  <li>CABO VERDE</li>
                  <li>GUINÉ-BISSAU</li>
                  <li>MOÇAMBIQUE</li>
                  <li>SÃO TOMÉ E PRÍNCIPE</li>
                  <li>TIMOR-LESTE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}