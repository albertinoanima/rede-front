'use client'

import { customBlur } from '@/app/fonts'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

type HeroProps = {
  title?: string
  description?: string
}

export const Hero: React.FC<HeroProps> = ({ title, description }) => {
  const hasContent = Boolean(title || description)

  return (
    <section className="h-auto w-full pt-17">
      <div className="relative mx-auto h-[420px] w-full max-w-[1920px] overflow-hidden sm:h-[450px] lg:h-124.25">
        <img
          src="/assets/news/hero.jpg"
          alt="Imagem de destaque das notícias"
          className="h-full w-full object-cover"
        />

        {hasContent && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/20 px-4 text-center sm:gap-4 sm:px-6 lg:bg-transparent">
            {title && (
              <Heading
                className={`${customBlur.className} max-w-full break-words text-[56px] font-medium leading-none text-rede-yellow sm:text-[84px] lg:text-[128px]`}
              >
                {title}
              </Heading>
            )}

            {description && (
              <Text className="max-w-[560px] text-sm font-semibold leading-relaxed text-rede-white sm:text-base lg:max-w-2xl">
                {description}
              </Text>
            )}
          </div>
        )}
      </div>
    </section>
  )
}