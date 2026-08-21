'use client'

import { customBlur } from '@/app/fonts'
import { Text } from '../ui/text'
import { Button } from '../ui/button'
import { Heading } from '../ui/heading'
import { packages } from './data'

const packageFeatures = [
  'Ideal para festivais',
  'Direitos de distribuição',
  'Exibição paga',
  'Licença temporária',
]

export const Packages: React.FC = () => {
  return (
    <section className="w-full bg-rede-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Heading
            level="h2"
            className={`${customBlur.className} text-4xl font-bold leading-tight text-[#FF4338] sm:text-5xl lg:text-6xl`}
          >
            Pacotes de curtas-metragens
          </Heading>

          <Text className="mt-5 text-sm leading-6 text-rede-white/80 sm:mt-6 sm:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua,
            oferecendo pacotes selecionados de curtas-metragens para
            distribuição e licenciamento.
          </Text>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:mt-20">
          {packages.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="flex min-w-0 flex-col border border-white/40 p-5 sm:p-6 lg:p-7"
            >
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                <h3 className="break-words text-3xl font-bold leading-tight text-rede-white lg:text-4xl">
                  {item.title}
                </h3>

                <span className="shrink-0 rounded-full bg-white px-4 py-1 text-xs text-black">
                  {item.type}
                </span>
              </div>

              <Text className="mt-3 max-w-xs text-xs leading-5 text-rede-white/60">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>

              <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:mt-8">
                {packageFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-rede-white"
                  >
                    <span aria-hidden="true" className="shrink-0">
                      ◉
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-7 sm:mt-8">
                Solicitar proposta
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}