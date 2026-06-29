"use client"

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

// 1. Variantes para o botão de Texto (Corpo Principal)
const mainButtonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all rounded-full disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-rede-yellow text-rede-black hover:bg-rede-yellow/80 active:bg-rede-yellow/60 disabled:bg-rede-yellow/40 disabled:text-rede-black/40',
        secondary: 'bg-transparent text-foreground border border-foreground hover:bg-foreground/10 active:bg-foreground/20 disabled:opacity-30',
        danger: 'bg-rede-red text-white hover:bg-rede-red/80 active:bg-rede-red/60 disabled:bg-rede-red/40',
      },
      size: {
        sm: 'h-8 px-4 text-btn2',
        md: 'h-9 px-6 text-btn2',
        lg: 'h-11 px-8 text-btn1',
        xl: 'h-13 px-10 text-btn1',
      },
    },
    defaultVariants: { variant: 'primary', size: 'lg' },
  }
)

// 2. Variantes para o botão do Ícone (Círculo Satélite)
const iconVariants = cva(
  'inline-flex items-center justify-center rounded-full transition-all shrink-0 disabled:cursor-not-allowed aspect-square',
  {
    variants: {
      variant: {
        primary: 'bg-rede-yellow text-rede-black hover:bg-rede-yellow/80 active:bg-rede-yellow/60 disabled:bg-rede-yellow/40',
        secondary: 'bg-transparent text-foreground border border-foreground hover:bg-foreground/10 active:bg-foreground/20 disabled:opacity-30',
        danger: 'bg-rede-red text-white hover:bg-rede-red/80 active:bg-rede-red/60 disabled:bg-rede-red/40',
      },
      size: {
        sm: 'h-8 w-8 text-btn2',
        md: 'h-9 w-9 text-btn2',
        lg: 'h-11 w-11 text-btn1',
        xl: 'h-13 w-13 text-btn1',
      },
    },
    defaultVariants: { variant: 'primary', size: 'lg' },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof mainButtonVariants> {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  containerClassName?: string  // Para customizar o alinhamento ou gap do bloco todo
  iconButtonClassName?: string // Para customizar o botão circular de forma independente
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant,
    size,
    icon,
    iconPosition = 'left',
    containerClassName,
    iconButtonClassName,
    className,
    children,
    onClick,
    disabled,
    ...props
  }, ref) => {

    // Função para fazer o clique no ícone ativar a mesma ação do botão principal
    const handleIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return
      if (onClick) onClick(e as unknown as React.MouseEvent<HTMLButtonElement>)
    }

    const renderIconButton = icon ? (
      <button
        type="button"
        disabled={disabled}
        onClick={handleIconClick}
        className={cn(iconVariants({ variant, size }), iconButtonClassName)}
        tabIndex={-1} // Evita que o utilizador precise de dar dois "Tabs" no teclado para passar o mesmo botão
      >
        {icon}
      </button>
    ) : null

    return (
      <div className={cn('inline-flex items-center', containerClassName)}>
        {/* Ícone ao lado esquerdo (FORA do botão principal) */}
        {iconPosition === 'left' && renderIconButton}

        {/* Botão de Texto Real */}
        <button
          ref={ref}
          disabled={disabled}
          onClick={onClick}
          className={cn(mainButtonVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </button>

        {/* Ícone ao lado direito (FORA do botão principal) */}
        {iconPosition === 'right' && renderIconButton}
      </div>
    )
  }
)

Button.displayName = 'Button'