'use client'

import { customBlur } from '@/app/fonts'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

const ITEMS = [
  {
    number: '01',
    title: ['Comissão', 'nacional'],
    description:
      'Uma das três tipologias identificadas nas notas de trabalho da equipa sobre Film Commissions.',
  },
  {
    number: '02',
    title: ['Rede regional', 'PALOP+TL'],
    description:
      'Estrutura supranacional de cooperação, “seis países, uma região de produção”, assente em pontos focais e film desks nacionais, apoiados por um secretariado regional.',
  },
  {
    number: '03',
    title: ['Comissão', 'regional interna'],
    description:
      'Comissão regional interna, de âmbito subnacional, nas seguintes variantes:',
    tags: ['Pública', 'Privada', 'Mista'],
  },
] as const

export const RecommendationTypologies: React.FC = () => {
  return (
    <section className="h-auto w-full bg-rede-bg">
      <div className="relative mx-auto flex min-h-30 h-auto w-full max-w-360 flex-col gap-14 px-4 py-14 sm:gap-20 sm:py-16 lg:gap-[120px] lg:py-20">
        <div className="flex h-auto w-full flex-col gap-5">
          <Heading
            level="h2"
            className={`${customBlur.className} mb-2 text-center text-[48px] font-medium leading-none text-rede-yellow sm:text-[68px] lg:mb-4 lg:text-[96px] lg:leading-24`}
          >
            Tipologias de
            <br />
            recomendação
          </Heading>

          <Text className="mx-auto max-w-3xl text-center text-base font-semibold leading-6 sm:text-lg sm:leading-7 lg:text-[20px]">
            Notas de trabalho da equipa sobre Film Commissions, que definem as
            três tipologias a desenvolver, aprofundar, validar e completar.
          </Text>
        </div>

        <div className="mx-auto flex h-auto w-full max-w-[920px] flex-col justify-between lg:min-h-[640px]">
          {ITEMS.map((item) => (
            <article
              key={item.number}
              className="flex w-full flex-col py-6 sm:flex-row sm:gap-6 lg:gap-0 lg:py-5"
            >
              <div className="h-auto w-full shrink-0 sm:w-[150px] lg:w-[212px]">
                <Heading
                  className={`${customBlur.className} shrink-0 text-[72px] font-medium leading-none text-rede-yellow sm:text-[96px] lg:text-[128px] lg:leading-[128px]`}
                >
                  {item.number}
                </Heading>
              </div>

              <div className="flex h-auto w-full flex-col gap-5 border-b border-rede-white pb-8 sm:flex-row sm:gap-6 lg:gap-0 lg:pb-10">
                <div className="h-auto w-full sm:w-1/2">
                  <Heading
                    className={`${customBlur.className} shrink-0 text-[38px] font-medium leading-[44px] text-rede-white sm:text-[42px] sm:leading-[50px] lg:text-[48px] lg:leading-[56px]`}
                  >
                    {item.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </Heading>
                </div>

                <div className="flex h-auto w-full flex-col justify-between gap-5 sm:w-1/2">
                  <Text
                    className={`${customBlur.className} text-[12px] font-medium leading-[16px] text-rede-white`}
                  >
                    {item.description}
                  </Text>

                  {'tags' in item && (
                    <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-2">
                      {item.tags.map((tag) => (
                        <Text
                          key={tag}
                          className="text-base font-semibold leading-6 text-rede-white sm:text-[20px] sm:leading-[28px]"
                        >
                          {tag}
                        </Text>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}