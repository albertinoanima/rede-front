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
            Cinco fases parcialmente
            <br />
            sobrepostas
          </Heading>

          <Text className="mx-auto max-w-3xl text-center text-base font-semibold leading-6 sm:text-lg sm:leading-7 lg:text-[20px]">
            A metodologia é qualitativa, comparativa e orientada para a decisão,
            estando organizada em cinco fases parcialmente sobrepostas.
          </Text>
        </div>

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
        </div>
      </div>
    </section>
  )
}