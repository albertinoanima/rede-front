'use client'

import { customBlur } from '@/app/fonts'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

const legislativeStages = [
  {
    id: 1,
    title: 'Lei setorial em vigor',
    countries: 'Existe uma lei setorial em vigor',
  },
  {
    id: 2,
    title: 'Instituto do setor sem enquadramento legal atualizado',
    countries: 'Existe estrutura institucional, mas o quadro legal não acompanhou.',
  },
  {
    id: 3,
    title: 'Sem lei nem<br/> instituto do setor',
    countries: 'A actividade decorre sem enquadramento próprio.',
  },
]

export const WhereWeAre: React.FC = () => {
  return (
    <section className="h-auto w-full bg-rede-bg">
      <div className="relative mx-auto flex min-h-30 h-auto w-full max-w-360 flex-col gap-14 px-4 py-14 sm:gap-20 sm:py-16 lg:gap-[120px] lg:py-20">
        <div className="flex h-auto w-full flex-col gap-5">
          <Heading
            level="h2"
            className={`${customBlur.className} mb-2 break-words text-center text-[48px] font-medium leading-none text-rede-yellow sm:text-[68px] lg:mb-4 lg:text-[96px] lg:leading-24`}
          >
            Onde estamos
          </Heading>

          <Text className="mx-auto max-w-4xl text-center text-base font-semibold leading-6 sm:text-lg sm:leading-7 lg:text-[20px]">
            Existe uma análise preliminar da legislação de cinema e audiovisual dos países da rede, que identifica três estágios distintos de maturidade regulatória. Essa base está agora a ser aprofundada, validada e completada com os coordenadores nacionais.
          </Text>
        </div>

        <Heading
            level="h2"
            className={`${customBlur.className} text-center shrink-0 text-[38px] font-medium leading-[44px] text-rede-white sm:text-[42px] sm:leading-[50px] lg:text-[48px] lg:leading-[56px] -mb-20`}
          >
            Três estágios identificados
          </Heading>

        <div className="flex h-auto w-full flex-col items-stretch justify-center gap-4 sm:items-center lg:flex-row lg:gap-5">
          {legislativeStages.map((stage) => (
            <article key={stage.id} className="flex min-h-36 w-full items-center gap-5 border border-rede-white px-5 py-6 sm:max-w-92.25 sm:px-6 lg:h-32 lg:w-92.25 lg:py-0">
              <Text aria-hidden="true" className={`${customBlur.className} shrink-0 text-[48px] leading-14`}>
                {stage.id}
              </Text>

              <div className="w-full flex flex-col justify-center items-center gap-3 lg:gap-4">
                <Text className="text-[22px] text-center font-semibold leading-5 sm:text-[20px]" dangerouslySetInnerHTML={{ __html: stage.title }}/>

                <Text className="text-[14px] text-center font-medium leading-5">
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