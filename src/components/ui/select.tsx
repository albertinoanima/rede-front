// components/ui/select.tsx
import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const selectTriggerVariants = cva(
  'w-full inline-flex items-center justify-between font-medium transition-all rounded-full bg-transparent text-white border border-white/20 focus:outline-none focus:border-rede-yellow disabled:cursor-not-allowed disabled:opacity-40 text-left',
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
  className?: string          // Controla o container geral (ex: largura)
  triggerClassName?: string    // Controla a cor/borda do botão principal
  satelliteClassName?: string  // Controla a cor/borda do botão do ícone
  popoverClassName?: string    // Controla o fundo/borda do menu suspenso
}

export const Select = ({
  options,
  value,
  onChange,
  placeholder = 'Selecione uma opção...',
  disabled,
  size = 'lg',
  className,
  triggerClassName,
  satelliteClassName,
  popoverClassName,
}: SelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const selectedOption = options.find((opt) => opt.value === value)

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
            isOpen && 'border-rede-yellow text-rede-yellow',
            triggerClassName
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
            isOpen && 'border-rede-yellow text-rede-yellow',
            satelliteClassName
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn('transition-transform duration-200', isOpen && 'rotate-180')}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* MENU DROPDOWN (VIBE OPTION REAL) */}
      {isOpen && (
        <div
          className={cn(
            'absolute top-[105%] left-0 w-full z-50 overflow-hidden rounded-2xl border border-white/10 bg-rede-black p-1.5 shadow-xl',
            popoverClassName
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
                      'text-white/70 hover:bg-white/5 hover:text-white', // Feedback sutil de hover nas opções
                      isSelected && 'bg-rede-yellow text-rede-black hover:bg-rede-yellow/90 hover:text-rede-black' // Elemento selecionado com a tua cor dominante
                    )}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{option.label}</span>
                      {isSelected && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
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