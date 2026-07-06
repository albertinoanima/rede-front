// components/ui/input.tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const inputVariants = cva(
  'w-full font-medium transition-all rounded-full bg-rede-black text-white border focus:outline-none disabled:cursor-not-allowed disabled:opacity-40 px-6 h-11 text-btn1',
  {
    variants: {
      variant: {
        primary: 'border-foreground/20 focus:border-rede-yellow',
        secondary: 'border-foreground focus:border-foreground',
        danger: 'border-rede-red/40 focus:border-rede-red',
      }
    },
    defaultVariants: { variant: 'primary' }
  }
)

const iconSateliiteVariants = cva(
  'inline-flex items-center justify-center rounded-full transition-all shrink-0 aspect-square h-11 w-11 border bg-transparent',
  {
    variants: {
      variant: {
        primary:
          'text-foreground border-foreground/20 [div:focus-within>&]:border-rede-yellow [div:focus-within>&]:text-rede-yellow',
        secondary:
          'text-foreground border-foreground [div:focus-within>&]:border-foreground [div:focus-within>&]:text-foreground',
        danger:
          'text-rede-red border-rede-red/40 [div:focus-within>&]:border-rede-red [div:focus-within>&]:text-rede-red',
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
  onIconClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

/**
 * Injeta `color="currentColor"` no ícone se ele não tiver uma cor explícita,
 * garantindo que o SVG acompanhe o `text-*` do container (que muda por variant).
 * Se o consumidor já passou `color`, respeitamos a escolha dele.
 */
function withCurrentColor(icon: React.ReactNode): React.ReactNode {
  if (!React.isValidElement<{ color?: string }>(icon)) return icon
  if (icon.props.color !== undefined) return icon
  return React.cloneElement(icon, { color: 'currentColor' })
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      icon,
      iconPosition = 'left',
      containerClassName,
      iconContainerClassName,
      className,
      disabled,
      onIconClick,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    React.useImperativeHandle(ref, () => inputRef.current!)

    const handleIconClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return

      if (onIconClick) {
        onIconClick(event)
        return
      }

      inputRef.current?.focus()
    }

    const renderIconSatelliet = icon ? (
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={handleIconClick}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault()
            handleIconClick(e as unknown as React.MouseEvent<HTMLDivElement>)
          }
        }}
        aria-disabled={disabled}
        className={cn(
          iconSateliiteVariants({ variant }),
          disabled && 'cursor-not-allowed opacity-40 pointer-events-none',
          !disabled && 'cursor-pointer',
          iconContainerClassName
        )}
      >
        {withCurrentColor(icon)}
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