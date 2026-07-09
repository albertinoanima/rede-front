"use client"

import { customBlur } from '@/app/fonts';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';

export const Bio: React.FC = () => {
  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-[1920px] min-h-90 h-auto mx-auto flex items-center justify-center">

        <div className="w-full h-auto max-w-360">
          <Heading className={`${customBlur.className} text-[48px] leading-12 mb-6`}>Biografia</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</Text>
        </div>

      </div>
    </section>
  )
}