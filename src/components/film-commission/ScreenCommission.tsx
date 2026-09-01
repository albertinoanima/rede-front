'use client'

import { customBlur } from '@/app/fonts'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Tag } from '../ui/tag'

const strategicEcosystems = [
  {
    name: 'França · CNC · AFD · OIF',
    ecosystem: 'ecossistema francófono',
  },
  {
    name: 'África do Sul',
    ecosystem: 'ecossistema anglófono',
  },
  {
    name: 'Austrália',
    ecosystem: 'via Timor-Leste',
  },
]

export const ScreenCommission: React.FC = () => {
  return (
    <section className="h-auto w-full bg-rede-surface">
      <div className="relative mx-auto flex min-h-30 h-auto w-full max-w-360 flex-col gap-14 px-4 py-14 sm:gap-20 sm:py-16 lg:gap-[120px] lg:py-20">
        <div className="flex h-auto w-full flex-col gap-5">
          <Heading
            level="h2"
            className={`${customBlur.className} mb-2 break-words text-center text-[44px] font-medium leading-none text-rede-yellow sm:text-[66px] lg:mb-4 lg:text-[96px] lg:leading-24`}
          >
            PALOP–Timor-Leste
            <br />
            Screen Commission
            <br />
            Network
          </Heading>

          <Text className="mx-auto max-w-4xl text-center text-base font-semibold leading-6 sm:text-lg sm:leading-7 lg:text-[20px]">
            O estudo adoptará como hipótese de trabalho o conceito alargado de
            uma{' '}
            <span className="text-rede-yellow">
              PALOP–Timor-Leste Screen Commission Network:
            </span>{' '}
            um âmbito que abrange cinema, televisão, publicidade, documentário e
            conteúdos digitais, integrando a promoção do investimento, o
            turismo, a diplomacia cultural e o desenvolvimento de competências.
          </Text>
        </div>

        <div className="flex h-auto w-full flex-col gap-1">
          <Text className="text-lg font-semibold leading-7 sm:text-[20px] sm:leading-[28px]">
            Posicionamento
          </Text>

          <Text
            className={`${customBlur.className} text-[40px] font-medium leading-[46px] sm:text-[48px] sm:leading-[56px]`}
          >
            Rede lusófona,
            <br />
            pontes estratégicas
          </Text>

          <div className="mt-6 flex w-full flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
            <div className="h-auto w-full lg:w-1/2 lg:pr-8">
              <Text className="max-w-xl leading-relaxed">
                O posicionamento proposto é o de uma{' '}
                <span className="text-rede-yellow">
                  rede lusófona com pontes estratégicas para os ecossistemas
                  francófono e anglófono
                </span>
                , refletindo as esferas reais de influência cultural e económica
                dos sete países e reforçando a atratividade da proposta junto de
                parceiros internacionais de cooperação.
              </Text>
            </div>

            <div className="flex h-auto w-full flex-col lg:w-1/2">
              {strategicEcosystems.map((item) => (
                <div
                  key={item.name}
                  className="flex min-h-[76px] w-full flex-col items-start justify-between gap-3 border-b border-rede-white py-4 sm:flex-row sm:items-center"
                >
                  <Text className="text-lg font-semibold leading-7 sm:text-[20px]">
                    {item.name}
                  </Text>

                  <Tag label={item.ecosystem} variant="muted" size="lg" className="border-none bg-black text-center" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

