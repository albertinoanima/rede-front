'use client'

import { customBlur } from '@/app/fonts'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

const legislativeStages = [
  {
    id: 1,
    title: 'Países com lei setorial',
    countries: 'Angola, Moçambique e Cabo Verde',
  },
  {
    id: 2,
    title: 'Países com instituto sem lei moderna',
    countries: 'Guiné-Bissau',
  },
  {
    id: 3,
    title: 'Países sem lei nem instituto',
    countries: 'São Tomé e Príncipe e Timor-Leste',
  },
]

export const LegislativeInternship: React.FC = () => {
  return (
    <section className="h-auto w-full bg-rede-bg">
      <div className="relative mx-auto flex min-h-30 h-auto w-full max-w-360 flex-col gap-14 px-4 py-14 sm:gap-20 sm:py-16 lg:gap-[120px] lg:py-20">
        <div className="flex h-auto w-full flex-col gap-5">
          <Heading
            level="h2"
            className={`${customBlur.className} mb-2 break-words text-center text-[48px] font-medium leading-none text-rede-yellow sm:text-[68px] lg:mb-4 lg:text-[96px] lg:leading-24`}
          >
            Estágio legislativo
          </Heading>

          <Text className="mx-auto max-w-4xl text-center text-base font-semibold leading-6 sm:text-lg sm:leading-7 lg:text-[20px]">
            Existe um trabalho preparatório já realizado: uma análise preliminar
            da legislação do cinema e do audiovisual dos PALOP-TL. Esta base será
            aprofundada, validada e completada.
          </Text>
        </div>

        <div className="flex h-auto w-full flex-col items-stretch justify-center gap-4 sm:items-center lg:flex-row lg:gap-5">
          {legislativeStages.map((stage) => (
            <article
              key={stage.id}
              className="flex min-h-32 w-full items-center gap-5 border border-rede-white px-5 py-6 sm:max-w-92.25 sm:px-6 lg:h-32 lg:w-92.25 lg:py-0"
            >
              <Text
                aria-hidden="true"
                className={`${customBlur.className} shrink-0 text-[48px] leading-14`}
              >
                {stage.id}
              </Text>

              <div className="flex min-w-0 flex-col gap-3 lg:gap-4">
                <Text className="text-lg font-semibold leading-5 sm:text-[20px]">
                  {stage.title}
                </Text>

                <Text className="text-[14px] font-medium leading-5">
                  {stage.countries}
                </Text>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}