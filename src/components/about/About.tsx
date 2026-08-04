"use client"

import { customBlur } from '@/app/fonts';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';

export const About: React.FC = () => {
  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-360 min-h-90 h-auto mx-auto flex items-center justify-center pt-20">

        <div className="w-full h-auto max-w-360">
          <Heading className={`${customBlur.className} text-[48px] leading-12 mb-6`}>Equipa</Heading>
          <Text className="text-[12px] font-medium leading-4 line-clamp-2">
            A equipa é formada Diana Manhiça - Coordenadora-Geral e de Comunicação -, e António Maxlhaieie - Assessor de Coordenação e Director de Produção do FilmLab, que representam Moçambique, por parte da AAMCM – Associação dos Amigos do Museu do Cinema em Moçambique, onde contam ainda com o apoio de uma Gestora de Projeto e uma Estagiária de Mapeamento e Administração.<br /><br />

            Em Cabo Verde, a equipa é formada pelas realizadoras e produtoras Samira Vera-Cruz – Coordenadora Local, Coordenadora de Formação e de Parcerias Internacionais -, e Emília Wojciechowska – Coordenadora Local e de Curadoria.<br /><br />

            Em São Tomé e Príncipe, a equipa é representada pela realizadora e produtora Katya Aragão, diretora do São Tomé FilmLab, como Coordenadora Local.<br /><br />

            Na Guiné-Bissau e em Timor-Leste, a equipa tem pontos focais, o actor e realizador Welket Bungué e o músico e produtor Kay Seran Limak, respetivamente.
            Atualmente, a equipa não tem representação em Angola.<br /><br />
          </Text>
        </div>

      </div>
    </section>
  )
}