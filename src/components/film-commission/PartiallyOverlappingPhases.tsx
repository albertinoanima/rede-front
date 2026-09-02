'use client'

import { customBlur } from '@/app/fonts'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

const ITEMS = [
  {
    number: '01',
    title: ['Planeamento e instalação'],
  },
  {
    number: '02',
    title: [
      'Revisão de literatura, casos',
      'internacionais e revisão',
      'legislativa',
    ],
  },
  {
    number: '03',
    title: ['Manual de Procedimentos de', 'Produção para Moçambique'],
  },
  {
    number: '04',
    title: ['Proposta de projeto para', 'estudo(s) de caso'],
  },
  {
    number: '05',
    title: ['Recomendações e relatório', 'narrativo'],
  },
] as const

export const PartiallyOverlappingPhases: React.FC = () => {
  return (
    <section className="h-auto w-full bg-rede-bg">
      <div className="relative mx-auto flex min-h-30 h-auto w-full max-w-360 flex-col gap-14 px-4 py-14 sm:gap-20 sm:py-16 lg:gap-[120px] lg:py-20">
        <div className="flex h-auto w-full flex-col gap-5">
          <Heading
            level="h2"
            className={`${customBlur.className} mb-2 text-center text-[48px] font-medium leading-none text-rede-yellow sm:text-[68px] lg:mb-4 lg:text-[96px] lg:leading-24`}
          >
            Manual de <br/> Procedimentos<br/>  de Moçambique
          </Heading>

          <Text className="mx-auto max-w-3xl text-center text-base font-semibold leading-6 sm:text-lg sm:leading-7 lg:text-[20px]">
            A metodologia é qualitativa, comparativa e orientada para a decisão,
            estando organizada em cinco fases parcialmente sobrepostas.

            Em paralelo com o estudo, estamos a preparar um <span className='font-bold text-rede-yellow'>Manual de Procedimentos de Produção Audiovisual para Moçambique</span>: um guia prático sobre como se filma legalmente no país, dirigido a quem produz cá dentro e a quem chega de fora. <br/><br/>
O trabalho assenta em duas fontes. Por um lado, a legislação em vigor — o Decreto n.o 57/2024, que regula a actividade audiovisual e cinematográfica, e o regime dos levantamentos e cinematografia aéreos. Por outro, entrevistas a produtores e fixers com experiência de produção nacional e internacional em Moçambique.<br/><br/>
O Manual está organizado em três camadas: um roadmap com o circuito essencial, fichas de procedimento por matéria, e anexos com tabelas, contactos e modelos.
<span className='font-bold text-rede-yellow'> Os procedimentos descritos estão em processo de validação junto das instituições competentes</span>. O Manual será publicado quando essa validação estiver concluída.
          </Text>
        </div>
{/* 
        <div className="mx-auto flex h-auto w-full max-w-[920px] flex-col gap-2">
          {ITEMS.map((item) => (
            <article
              key={item.number}
              className="flex w-full flex-col py-5 sm:flex-row sm:gap-6 lg:gap-0"
            >
              <div className="h-auto w-full shrink-0 sm:w-[150px] lg:w-[212px]">
                <Heading
                  className={`${customBlur.className} shrink-0 text-[72px] font-medium leading-none text-rede-yellow sm:text-[96px] lg:text-[128px] lg:leading-[128px]`}
                >
                  {item.number}
                </Heading>
              </div>

              <div className="flex h-auto min-w-0 flex-1 justify-start border-b border-rede-white pb-8 lg:pb-10">
                <Heading
                  className={`${customBlur.className} min-w-0 shrink text-[38px] font-medium leading-[44px] text-rede-white sm:text-[42px] sm:leading-[50px] lg:text-[48px] lg:leading-[56px]`}
                >
                  {item.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </Heading>
              </div>
            </article>
          ))}
        </div> */}
      </div>
    </section>
  )
}