'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Text } from '@/components/ui/text'
import { cn } from '@/lib/utils'

interface AccordionItem {
  label: string
  content?: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col divide-y divide-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <Text variant="body1" as="span" className="text-foreground">
              {item.label}
            </Text>
            <ChevronDown
              size={20}
              className={cn(
                'text-foreground/60 transition-transform duration-200 shrink-0',
                open === i && 'rotate-180'
              )}
            />
          </button>
          {open === i && item.content && (
            <div className="pb-5">
              <Text variant="body2" className="text-foreground/70">
                {item.content}
              </Text>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}