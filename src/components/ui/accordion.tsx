'use client'

import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import { useState, ReactNode } from 'react';


interface AccordionItem {
  id: string
  title: ReactNode
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  defaultOpen?: string
  allowMultiple?: boolean
  className?: string
}

export default function Accordion({
  items,
  defaultOpen,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(
    defaultOpen ? [defaultOpen] : []
  )

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const isOpen = prev.includes(id)

      if (allowMultiple) {
        return isOpen
          ? prev.filter((item) => item !== id)
          : [...prev, id]
      }

      return isOpen ? [] : [id]
    })
  }

  return (
    <div className={clsx('w-full divide-y divide-border', className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id)

        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span>{item.title}</span>

              <ChevronDown
                className={clsx(
                  'h-5 w-5 transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
              />
            </button>

            <div
              className={clsx(
                'grid transition-all duration-300',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-4">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}