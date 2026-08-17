"use client"

import { customBlur } from '@/app/fonts';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export const Hero: React.FC<{ title?: string, description?: string }> = ({ title, description }) => {
  return (
    <section className="w-full h-auto pt-17">
      <div className="relative w-full max-w-[1920px] h-124.25 mx-auto">

        <img
          src="/assets/news/hero.jpg"
          alt="REDE Hero"
          className="w-full h-full object-cover"
        />

        {/* overlay de textos */}
        {
          (title || description) &&
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4">
            {
              title &&
              <Heading className={`${customBlur.className} text-rede-yellow text-[128px] font-medium`}>
                {title}
              </Heading>
            }

            {
              description &&
              <Text className="text-rede-white font-semibold max-w-2xl">
                {description}
              </Text>
            }
          </div>
        }
      </div>
    </section>
  )
}