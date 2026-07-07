// components/ui/select.tsx
import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Check, ChevronDown } from 'lucide-react'

const selectTriggerVariants = cva(
  'w-full inline-flex items-center justify-between font-medium transition-all rounded-full bg-transparent text-white border border-white/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40 text-left',
  {
    variants: {
      size: {
        sm: 'h-8 px-4 text-[12px]',
        md: 'h-9 px-5 text-[13px]',
        lg: 'h-11 px-6 text-[14px]',
        xl: 'h-13 px-8 text-[15px]',
      },
    },
    defaultVariants: { size: 'lg' },
  }
)

const satelliteVariants = cva(
  'inline-flex items-center justify-center rounded-full transition-all shrink-0 aspect-square bg-transparent text-white border border-white/20 disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        sm: 'h-8 w-8',
        md: 'h-9 w-9',
        lg: 'h-11 w-11',
        xl: 'h-13 w-13',
      },
    },
    defaultVariants: { size: 'lg' },
  }
)

const variantStyles = {
  primary: {
    open: 'border-rede-yellow text-rede-yellow',
    popover: 'border-rede-yellow',
    checkFill: 'border-rede-yellow bg-rede-yellow text-rede-black',
    checkEmpty: 'border-rede-yellow/40',
    selected: 'bg-rede-yellow text-rede-black hover:bg-rede-yellow/90 hover:text-rede-black',
  },
  secondary: {
    open: 'border-white text-white',
    popover: 'border-white',
    checkFill: 'border-white bg-white text-rede-black',
    checkEmpty: 'border-white/40',
    selected: 'bg-white text-rede-black hover:bg-white/90 hover:text-rede-black',
  },
  danger: {
    open: 'border-rede-red text-rede-red',
    popover: 'border-rede-red',
    checkFill: 'border-rede-red bg-rede-red text-white',
    checkEmpty: 'border-rede-red/40',
    selected: 'bg-rede-red text-white hover:bg-rede-red/90 hover:text-white',
  },
}

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'secondary' | 'danger'
  className?: string
  triggerClassName?: string
  satelliteClassName?: string
  popoverClassName?: string
}

export const Select = ({
  options,
  value,
  onChange,
  placeholder = 'Selecione uma opção...',
  disabled,
  size = 'lg',
  variant = 'primary',
  className,
  triggerClassName,
  satelliteClassName,
  popoverClassName,
}: SelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const selectedOption = options.find((opt) => opt.value === value)
  const v = variantStyles[variant]

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className={cn('relative inline-flex flex-col w-full gap-2', className)}>
      <div className="inline-flex items-center w-full">

        {/* CORPO DO SELECT */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            selectTriggerVariants({ size }),
            triggerClassName,
            isOpen && v.open,
          )}
        >
          <span className={cn(!selectedOption && 'opacity-40')}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </button>

        {/* SATÉLITE (CHEVRON) */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            satelliteVariants({ size }),
            satelliteClassName,
            isOpen && v.open,
          )}
        >
          <ChevronDown
            className={cn('transition-transform duration-200', isOpen && 'rotate-180')}
          />
        </button>
      </div>

      {/* MENU DROPDOWN */}
      {isOpen && (
        <div
          className={cn(
            'absolute top-[105%] left-0 w-full z-50 overflow-hidden rounded-2xl border bg-rede-black p-1.5 shadow-xl',
            popoverClassName,
            v.popover,
          )}
        >
          <ul className="max-h-60 overflow-y-auto space-y-1">
            {options.map((option) => {
              const isSelected = option.value === value
              return (
                <li key={option.value}>
                  <button
                    type="button"
                    onClick={() => {
                      if (onChange) onChange(option.value)
                      setIsOpen(false)
                    }}
                    className={cn(
                      'w-full text-left px-4 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-150',
                      'text-white/70 hover:bg-white/5 hover:text-white',
                      isSelected && v.selected,
                    )}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{option.label}</span>
                      {isSelected && <Check width={16} height={16} />}
                    </div>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

Select.displayName = 'Select'