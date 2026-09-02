'use client'

import { customBlur } from '@/app/fonts'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'


export const GoForWork: React.FC = () => {
  return (
    <section className="h-auto w-full bg-rede-surface">
      <div className="relative mx-auto flex min-h-30 h-auto w-full max-w-360 flex-col gap-14 px-4 py-14 sm:gap-20 sm:py-16 lg:gap-[120px] lg:py-20">
        <div className="flex h-auto w-full flex-col gap-5">
          <Heading
            level="h2"
            className={`${customBlur.className} mb-2 text-center text-[48px] font-medium leading-none text-rede-yellow sm:text-[68px] lg:mb-4 lg:text-[96px] lg:leading-24`}
          >
            Acompanhar o <br/> Trabalho
          </Heading>

          <Text className="mx-auto max-w-3xl text-center text-base font-semibold leading-6 sm:text-lg sm:leading-7 lg:text-[20px]">
            Estamos a ouvir profissionais do setor em todos os países da rede. Se produz, presta serviços de produção ou trabalha com equipas internacionais, o seu contributo é útil. <br/><br/>



            Escreva-nos: <a href='mailto:info@redepaloptl.org' className='text-rede-yellow underline'>info@redepaloptl.org</a>
          </Text>
        </div>
      </div>
    </section>
  )
}