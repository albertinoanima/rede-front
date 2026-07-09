"use client"

import { cva, type VariantProps } from 'class-variance-authority'
import { cn, withCurrentColor } from '@/lib/utils'
import { forwardRef, ReactNode, useState } from 'react'


const interactionVariants = {
  primary: {
    hover: 'bg-rede-yellow-200 text-rede-surface',
    active:
      'text-rede-surface shadow-[0_0_0_0.3px_var(--rede-yellow-200),0_0_0_1px_var(--rede-yellow-200)_inset,0_0_0_4px_var(--rede-bg-900)_inset]'
  },
  secondary: {
    hover: 'bg-rede-white border-none text-rede-surface',
    active:
      'text-rede-surface shadow-[0_0_0_0.3px_var(--rede-white),0_0_0_1px_var(--rede-white)_inset,0_0_0_4px_var(--rede-bg-900)_inset]'
  },
  danger: {
    hover: 'bg-rede-red-300 text-rede-white',
    active:
      'text-rede-white shadow-[0_0_0_0.3px_var(--rede-red-300),0_0_0_1px_var(--rede-red-300)_inset,0_0_0_4px_var(--rede-bg-900)_inset]'
  }
} as const


const mainButtonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all rounded-full disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'text-rede-surface bg-rede-yellow-500 hover:bg-rede-yellow-200 active:bg-rede-yellow-200 active:shadow-[0_0_0_0.3px_var(--rede-yellow-200),0_0_0_1px_var(--rede-yellow-200)_inset,0_0_0_4px_var(--rede-bg-900)_inset] disabled:bg-rede-yellow-500/60',
        secondary: 'text-foreground bg-transparent border-[1.3px] border-rede-white hover:bg-rede-white hover:border-none hover:text-rede-surface active:bg-rede-white active:border-none active:text-rede-surface active:shadow-[0_0_0_0.3px_var(--rede-white),0_0_0_1px_var(--rede-white)_inset,0_0_0_4px_var(--rede-bg-900)_inset] disabled:text-foreground/40 disabled:bg-transparent disabled:border-[1.3px] disabled:border-rede-white/40',
        danger: 'bg-rede-red-500 text-rede-white hover:bg-rede-red-300 active:bg-rede-red-300 active:shadow-[0_0_0_0.3px_var(--rede-red-300),0_0_0_1px_var(--rede-red-300)_inset,0_0_0_4px_var(--rede-bg-900)_inset] disabled:bg-rede-red-500/60 disabled:text-rede-white/60'
      },
      size: {
        sm: 'py-1.5 px-[18px] rounded-[32px] text-btn2',
        md: 'py-3 px-6 rounded-[40px] text-btn2',
        lg: 'py-6 px-12 rounded-[32px] text-btn1',
        xl: 'py-8 px-[84px] rounded-[84px] text-btn1'
      }
    },
    defaultVariants: { variant: 'primary', size: 'md' }
  }
)

const iconVariants = cva(
  'inline-flex items-center justify-center rounded-full transition-all shrink-0 disabled:cursor-not-allowed aspect-square',
  {
    variants: {
      variant: {
        primary: 'text-rede-surface bg-rede-yellow-500 hover:bg-rede-yellow-200 active:bg-rede-yellow-200 active:shadow-[0_0_0_0.3px_var(--rede-yellow-200),0_0_0_1px_var(--rede-yellow-200)_inset,0_0_0_4px_var(--rede-bg-900)_inset] disabled:bg-rede-yellow-500/60',
        secondary: 'text-foreground bg-transparent border-[1.3px] border-rede-white hover:bg-rede-white hover:border-none hover:text-rede-surface active:bg-rede-white active:border-none active:text-rede-surface active:shadow-[0_0_0_0.3px_var(--rede-white),0_0_0_1px_var(--rede-white)_inset,0_0_0_4px_var(--rede-bg-900)_inset] disabled:text-foreground/40 disabled:bg-transparent disabled:border-[1.3px] disabled:border-rede-white/40',
        danger: 'bg-rede-red-500 text-rede-white hover:bg-rede-red-300 active:bg-rede-red-300 active:shadow-[0_0_0_0.3px_var(--rede-red-300),0_0_0_1px_var(--rede-red-300)_inset,0_0_0_4px_var(--rede-bg-900)_inset] disabled:bg-rede-red-500/60 disabled:text-rede-white/60'
      },
      size: {
        sm: 'p-2 rounded-[28px]',
        md: 'p-[14px] rounded-[40px]',
        lg: 'p-[26px] rounded-[64px]',
        xl: 'p-9 rounded-[84px]'
      }
    },
    defaultVariants: { variant: 'primary', size: 'md' }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof mainButtonVariants> {
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  showMainButton?: boolean
  containerClassName?: string
  iconButtonClassName?: string
  isActive?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant,
  size,
  icon,
  iconPosition = 'left',
  showMainButton = true,
  containerClassName,
  iconButtonClassName,
  className,
  children,
  onClick,
  disabled,
  isActive = false,
  ...props
}, ref) => {

  const [isInteractionActive, setIsInteractionActive] = useState(isActive)
  const [isHovered, setIsHovered] = useState(false)

  const handleIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    if (onClick) onClick(e as unknown as React.MouseEvent<HTMLButtonElement>)
  }

  const renderIconButton = icon ? (
    <button
      type="button"
      disabled={disabled}
      onClick={handleIconClick}
      className={cn(iconVariants({ variant, size }),
        {
          [interactionVariants[variant ?? 'primary'].hover]: isActive || isHovered,
          [interactionVariants[variant ?? 'primary'].active]: isInteractionActive
        },
        iconButtonClassName)}
      tabIndex={-1}
    >
      {withCurrentColor(icon)}
    </button>
  ) : null

  return (
    <div
      className={cn('inline-flex items-center', containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsInteractionActive(false);
      }}
      onMouseDown={() => setIsInteractionActive(true)}
      onMouseUp={() => setIsInteractionActive(false)}
    >
      {iconPosition === 'left' && renderIconButton}

      {showMainButton && (
        <button
          ref={ref}
          disabled={disabled}
          onClick={onClick}
          className={cn(
            mainButtonVariants({ variant, size }),
            {
              [interactionVariants[variant ?? 'primary'].hover]: isActive || isHovered,
              [interactionVariants[variant ?? 'primary'].active]: isInteractionActive
            },
            'flex-1',
            className
          )}
          {...props}
        >
          {children}
        </button>
      )}

      {iconPosition === 'right' && renderIconButton}
    </div>
  )
}
)

Button.displayName = 'Button'