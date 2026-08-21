'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'
import { Heading } from '../ui/heading'
import { licensingItems } from './data'

export const Licensing: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="w-full bg-rede-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Heading
          level="h2"
          className="mb-8 text-3xl font-bold leading-tight text-rede-white sm:mb-10 sm:text-4xl lg:mb-12 lg:text-5xl"
        >
          Condições de licenciamento
        </Heading>

        <div className="space-y-2">
          {licensingItems.map((item, index) => {
            const isOpen = open === index
            const contentId = `licensing-content-${index}`

            return (
              <div
                key={`${item.title}-${index}`}
                className="border-b border-white/25"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
                >
                  <span className="min-w-0 text-base font-medium leading-6 text-rede-white sm:text-lg">
                    {item.title}
                  </span>

                  <ChevronDown
                    aria-hidden="true"
                    size={18}
                    className={`shrink-0 text-rede-white transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  id={contentId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`max-w-3xl text-sm leading-6 text-rede-white/70 transition-[padding,opacity] duration-300 sm:leading-7 ${
                        isOpen ? 'pb-5 opacity-100 sm:pb-6' : 'pb-0 opacity-0'
                      }`}
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-16">
          <Button
            icon={<ArrowRight width={12} height={12} />}
            iconPosition="left"
          >
            Transferir termos (PDF)
          </Button>
        </div>
      </div>
    </section>
  )
}