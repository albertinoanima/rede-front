'use client'

import { customBlur } from '@/app/fonts'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Tag } from '../Tag'

const workAreas = [
  {
    number: 'I',
    category: 'Literatura',
    description:
      'Revisão de literatura académica e técnica sobre tipologias e melhores práticas de Film Commissions;',
  },
  {
    number: 'II',
    category: 'Benchmarks',
    description:
      'Identificação e análise de exemplos internacionais a consultar;',
  },
  {
    number: 'III',
    category: 'Legislação',
    description:
      'Análise técnica da legislação e das políticas públicas de Cultura e Turismo nos PALOP e em Timor-Leste;',
  },
  {
    number: 'IV',
    category: 'Manual',
    description:
      'Produção dos conteúdos de um Manual de Procedimentos de Produção para Moçambique;',
  },
  {
    number: 'V',
    category: 'Estudo de caso',
    description:
      'Elaboração de uma proposta preliminar de Estudo de Caso em Inhambane;',
  },
  {
    number: 'VI',
    category: 'Arquivo',
    description: 'Organização do arquivo da assessoria;',
  },
  {
    number: 'VII',
    category: 'Relatório',
    description:
      'Redação do relatório narrativo e do documento de recomendações.',
  },
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
            O que compreende
            <br />
            o trabalho
          </Heading>

          <Text className="mx-auto max-w-3xl text-center text-base font-semibold leading-6 sm:text-lg sm:leading-7 lg:text-[20px]">
            Sete frentes de trabalho, de I a VII, que sustentam o estudo e o
            documento de recomendações.
          </Text>
        </div>

        <div className="mx-auto grid h-auto w-full max-w-[1147px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:gap-y-6">
          {workAreas.map((area) => (
            <article
              key={area.number}
              className="flex min-h-36 min-w-0 flex-col border border-rede-white sm:min-h-32 lg:h-32"
            >
              <div className="flex min-h-[75px] w-full items-start justify-between gap-3 p-4">
                <Text
                  aria-hidden="true"
                  className={`${customBlur.className} shrink-0 text-[48px] leading-14`}
                >
                  {area.number}
                </Text>

                <Tag label={area.category} className='text-[12px] leading-4 text-center rounded-[8px] px-[18px] py-[6px] bg-black border-none' />
              </div>

              <div className="flex h-auto w-full flex-1 items-start px-[18px] pb-3">
                <Text className="text-[12px] font-medium leading-4">
                  {area.description}
                </Text>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}