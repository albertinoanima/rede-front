// components/ui/textarea.tsx
'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const interactionVariants = {
  primary: {
    hover: 'border-rede-yellow',
    active:
      'border-rede-yellow shadow-[0_0_0_0.3px_var(--rede-yellow-200),0_0_0_1px_var(--rede-yellow-200)_inset,0_0_0_4px_var(--rede-bg-900)_inset]',
  },
  secondary: {
    hover: 'border-foreground',
    active:
      'border-foreground shadow-[0_0_0_0.3px_var(--rede-white),0_0_0_1px_var(--rede-white)_inset,0_0_0_4px_var(--rede-bg-900)_inset]',
  },
  danger: {
    hover: 'border-rede-red',
    active:
      'border-rede-red shadow-[0_0_0_0.3px_var(--rede-red-300),0_0_0_1px_var(--rede-red-300)_inset,0_0_0_4px_var(--rede-bg-900)_inset]',
  },
} as const

const scrollbarColorMap = {
  primary: 'var(--rede-yellow-500)',
  secondary: 'var(--rede-white)',
  danger: 'var(--rede-red-500)',
} as const

const textareaVariants = cva(
  'w-full font-medium transition-all rounded-[8px] bg-rede-surface text-rede-white border outline-none disabled:cursor-not-allowed disabled:opacity-40 px-6 py-3 text-btn1 resize-none max-h-[300px] overflow-y-auto',
  {
    variants: {
      variant: {
        primary: 'border-foreground/20',
        secondary: 'border-foreground',
        danger: 'border-rede-red/40',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  containerClassName?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant,
      containerClassName,
      className,
      disabled,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [isInteractionActive, setIsInteractionActive] = React.useState(false)
    const [isFocused, setIsFocused] = React.useState(false)

    const isHighlighted = isHovered || isFocused
    const resolvedVariant = variant ?? 'primary'
    const scrollbarColor = scrollbarColorMap[resolvedVariant]

    return (
      <div
        className={cn('inline-flex w-full', containerClassName)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setIsInteractionActive(false)
        }}
        onMouseDown={() => setIsInteractionActive(true)}
        onMouseUp={() => setIsInteractionActive(false)}
      >
        <textarea
          ref={ref}
          disabled={disabled}
          onFocus={(e) => {
            setIsFocused(true)
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            setIsInteractionActive(false)
            onBlur?.(e)
          }}
          className={cn(
            `rede-select-scroll-${resolvedVariant}`,
            textareaVariants({ variant }),
            {
              [interactionVariants[resolvedVariant].hover]: isHighlighted,
              [interactionVariants[resolvedVariant].active]: isInteractionActive,
            },
            className
          )}
          {...props}
        />

        <style>{`
          .rede-select-scroll-${resolvedVariant}::-webkit-scrollbar {
            width: 2px;
          }
          .rede-select-scroll-${resolvedVariant}::-webkit-scrollbar-track {
            background: transparent;
          }
          .rede-select-scroll-${resolvedVariant}::-webkit-scrollbar-thumb {
            background-color: ${scrollbarColor};
            border-radius: 999px;
          }
        `}</style>
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'