'use client'

import { customBlur } from '@/app/fonts'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Tag } from '../ui/tag'

const workAreas = [
  {
    number: '',
    category: 'Literatura',
    description:
      'Revisão de literatura académica e técnica sobre tipologias e boas práticas de Film Commissions.',
  },
  {
    number: '',
    category: 'Casos internacionais',
    description:
      'Identificação e análise de exemplos<br/> internacionais a consultar.',
  },
  {
    number: ' ',
    category: 'Legislação',
    description:
      'Análise técnica da legislação e das políticas públicas de Cultura e Turismo nos países da rede.',
  },
  {
    number: ' ',
    category: 'Manual de Procedimentos',
    description:
      'Produção dos conteúdos de um Manual de Procedimentos de Produção para Moçambique.',
  },
  {
    number: ' ',
    category: 'Estudo de caso',
    description:
      'Elaboração de uma proposta preliminar <br/>de estudo de caso em Inhambane.',
  }
]

export const WhatItComprises: React.FC = () => {
  return (
    <section className="h-auto w-full bg-rede-surface">
      <div className="relative mx-auto flex min-h-30 h-auto w-full max-w-360 flex-col gap-14 px-4 py-14 sm:gap-20 sm:py-16 lg:gap-[120px] lg:py-20">
        <div className="flex h-auto w-full flex-col gap-5">
          <Heading
            level="h2"
            className={`${customBlur.className} mb-2 text-center text-[48px] font-medium leading-none text-rede-yellow sm:text-[68px] lg:mb-4 lg:text-[96px] lg:leading-24`}
          >
            As frentes<br/>  de trabalho
          </Heading>

          <Text className="mx-auto max-w-3xl text-center text-base font-semibold leading-6 sm:text-lg sm:leading-7 lg:text-[20px]">
            Cinco frentes que sustentam o estudo e o documento de recomendações.
          </Text>
        </div>
        

        <div className="mx-auto grid h-auto w-full max-w-[1147px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5 lg:gap-y-6 -mt-[80px]">
          {workAreas.map((area, index) => (
            <article
              key={area.number + "x" + index}
              className={`flex min-h-36 min-w-0 flex-col border border-rede-white sm:min-h-32 lg:col-span-2 lg:h-32 ${index === 3 ? 'lg:col-start-2' : ''}` }
            >
              <div className="flex min-h-[75px] w-full items-start justify-center gap-3 p-4">
                <Text
                  aria-hidden="true"
                  className={`${customBlur.className} shrink-0 text-[48px] leading-14`}
                >
                  {area.number}
                </Text>

                <Tag label={area.category} variant="muted" size="lg" className="border-none bg-black text-center" />
              </div>

              <div className="flex h-auto w-full flex-1 items-start justify-center px-[6px] pb-3">
                <Text className="text-[14px] font-medium leading-5 text-center" dangerouslySetInnerHTML={{ __html: area.description}}/>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

