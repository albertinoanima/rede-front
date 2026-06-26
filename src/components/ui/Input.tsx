// components/ui/input.tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const inputVariants = cva(
  'w-full font-medium transition-all rounded-full bg-rede-black text-white border border-foreground/20 focus:border-rede-yellow focus:outline-none disabled:cursor-not-allowed disabled:opacity-40 px-6 h-11 text-btn1',
  {
    variants: {
      variant: {
        primary: 'bg-transparent text-white border border-foreground/20 focus:border-rede-yellow',
        solid: 'bg-rede-black text-white border-transparent focus:border-rede-yellow',
      }
    },
    defaultVariants: { variant: 'primary' }
  }
)

const iconSateliiteVariants = cva(
  'inline-flex items-center justify-center rounded-full transition-all shrink-0 aspect-square h-11 w-11 border',
  {
    variants: {
      variant: {
        primary: 'bg-transparent text-foreground border-foreground/20',
        solid: 'bg-rede-black text-white border-transparent',
      }
    },
    defaultVariants: { variant: 'primary' }
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  containerClassName?: string
  iconContainerClassName?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, icon, iconPosition = 'left', containerClassName, iconContainerClassName, className, disabled, ...props }, ref) => {
    
    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current!);

    // Focar o input real se o utilizador clicar no ícone satélite
    const handleIconClick = () => {
      if (!disabled && inputRef.current) {
        inputRef.current.focus()
      }
    }

    const renderIconSatelliet = icon ? (
      <div
        onClick={handleIconClick}
        className={cn(
          iconSateliiteVariants({ variant }), 
          !disabled && 'cursor-text [div:focus-within>&]:border-rede-yellow', // Sincroniza o hover/focus visual se quiseres customizar
          iconContainerClassName
        )}
      >
        {icon}
      </div>
    ) : null

    return (
      <div className={cn('inline-flex items-center w-full', containerClassName)}>
        {iconPosition === 'left' && renderIconSatelliet}

        <input
          ref={inputRef}
          disabled={disabled}
          className={cn(inputVariants({ variant }), className)}
          {...props}
        />

        {iconPosition === 'right' && renderIconSatelliet}
      </div>
    )
  }
)

Input.displayName = 'Input'