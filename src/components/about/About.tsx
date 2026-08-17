"use client"

import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';

export const About: React.FC = () => {
  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-6xl min-h-30 h-auto mx-auto pt-20 flex">

        <div className="w-1/2 h-auto px-4">
          <Heading level={"h2"} className="text-2xl font-bold text-rede-white mb-4">Equipa</Heading>
          <Text className="text-[14px] font-medium leading-5">
            A equipa é formada Diana Manhiça - Coordenadora-Geral e de Comunicação -, e António Maxlhaieie - Assessor de Coordenação e Director de Produção do FilmLab, que representam Moçambique, por parte da AAMCM – Associação dos Amigos do Museu do Cinema em Moçambique, onde contam ainda com o apoio de uma Gestora de Projeto e uma Estagiária de Mapeamento e Administração.<br /><br />

            Em Cabo Verde, a equipa é formada pelas realizadoras e produtoras Samira Vera-Cruz – Coordenadora Local, Coordenadora de Formação e de Parcerias Internacionais -, e Emília Wojciechowska – Coordenadora Local e de Curadoria.<br /><br />
          </Text>
        </div>

        <div className="w-1/2 h-auto px-4">
          <Heading level={"h2"} className="text-2xl font-bold text-rede-white mb-12"></Heading>
          <Text className="text-[14px] font-medium leading-5">
            Em São Tomé e Príncipe, a equipa é representada pela realizadora e produtora Katya Aragão, diretora do São Tomé FilmLab, como Coordenadora Local.<br /><br />

            Na Guiné-Bissau e em Timor-Leste, a equipa tem pontos focais, o actor e realizador Welket Bungué e o músico e produtor Kay Seran Limak, respetivamente.
            Atualmente, a equipa não tem representação em Angola.<br /><br />
          </Text>
        </div>

      </div>
    </section>
  )
}