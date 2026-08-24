// components/ui/input-select.tsx
import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Check, ChevronDown } from 'lucide-react'

import { createPortal } from 'react-dom'

const selectTriggerVariants = cva(
  'w-full inline-flex items-center justify-between font-medium transition-all rounded-lg bg-transparent text-rede-white border border-white/90 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40 text-left placeholder:text-rede-white/40 placeholder:text-[12px] placeholder:leading-4',
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
  'inline-flex items-center justify-center rounded-full transition-all shrink-0 aspect-square bg-transparent text-rede-white border border-white/90 disabled:cursor-not-allowed',
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
    checkFill: 'border-rede-yellow bg-rede-yellow text-rede-surface',
    checkEmpty: 'border-rede-yellow/40',
    selected: 'bg-rede-yellow text-rede-surface hover:bg-rede-yellow/90 hover:text-rede-surface',
    highlighted: 'bg-rede-yellow/10',
  },
  secondary: {
    open: 'border-white text-rede-white',
    popover: 'border-white',
    checkFill: 'border-white bg-white text-rede-surface',
    checkEmpty: 'border-white/40',
    selected: 'bg-white text-rede-surface hover:bg-white/90 hover:text-rede-surface',
    highlighted: 'bg-white/10',
  },
  danger: {
    open: 'border-rede-red text-rede-red',
    popover: 'border-rede-red',
    checkFill: 'border-rede-red bg-rede-red text-rede-white',
    checkEmpty: 'border-rede-red/40',
    selected: 'bg-rede-red text-rede-white hover:bg-rede-red/90 hover:text-rede-white',
    highlighted: 'bg-rede-red/10',
  },
}

export interface InputSelectOption {
  value: string
  label: string
}

export interface InputSelectProps {
  options: InputSelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'secondary' | 'danger'
  allowFreeText?: boolean
  emptyMessage?: string
  className?: string
  triggerClassName?: string
  satelliteClassName?: string
  popoverClassName?: string
}

export const InputSelect = ({
  options,
  value,
  onChange,
  placeholder = 'Digite ou selecione...',
  disabled,
  size = 'lg',
  variant = 'primary',
  allowFreeText = true,
  emptyMessage = 'Nenhuma opção encontrada',
  className,
  triggerClassName,
  satelliteClassName,
  popoverClassName,
}: InputSelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const [highlightedIndex, setHighlightedIndex] = React.useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const listRef = React.useRef<HTMLUListElement>(null)

  const [mounted, setMounted] = React.useState(false)
  const [coords, setCoords] = React.useState({ top: 0, left: 0, width: 0 })
  const wrapperRef = React.useRef<HTMLDivElement>(null) // engloba input + chevron

  React.useEffect(() => setMounted(true), [])

  const v = variantStyles[variant]

  // sincroniza query com o value controlado (label correspondente)
  React.useEffect(() => {
    const selected = options.find((opt) => opt.value === value)
    setQuery(selected ? selected.label : value ?? '')
  }, [value, options])

  const filteredOptions = React.useMemo(() => {
    if (!query) return options
    const q = query.toLowerCase()
    return options.filter((opt) => opt.label.toLowerCase().includes(q))
  }, [options, query])

  React.useEffect(() => {
    setHighlightedIndex(0)
  }, [query, isOpen])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        // se não for free text, reverte pro último valor válido ao perder foco
        if (!allowFreeText) {
          const selected = options.find((opt) => opt.value === value)
          setQuery(selected ? selected.label : '')
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [allowFreeText, options, value])


  const selectOption = (option: InputSelectOption) => {
    setQuery(option.label)
    onChange?.(option.value)
    setIsOpen(false)
    inputRef.current?.blur()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value
    setQuery(next)
    setIsOpen(true)
    if (allowFreeText) onChange?.(next)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setIsOpen(true)
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightedIndex((i) => Math.min(i + 1, filteredOptions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightedIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const opt = filteredOptions[highlightedIndex]
      if (opt) selectOption(opt)
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      inputRef.current?.blur()
    }
  }


  // calcula posição do trigger sempre que abrir, ou em scroll/resize
  const updateCoords = React.useCallback(() => {
    if (!wrapperRef.current) return
    const rect = wrapperRef.current.getBoundingClientRect()
    setCoords({
      top: rect.bottom + 8, // 8px de gap, equivalente ao top-[105%] antigo
      left: rect.left,
      width: rect.width,
    })
  }, [])

  React.useEffect(() => {
    if (!isOpen) return
    updateCoords()
    window.addEventListener('scroll', updateCoords, true)
    window.addEventListener('resize', updateCoords)
    return () => {
      window.removeEventListener('scroll', updateCoords, true)
      window.removeEventListener('resize', updateCoords)
    }
  }, [isOpen, updateCoords])


  // clique fora agora precisa considerar o portal também
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const clickedInsideTrigger = containerRef.current?.contains(target)
      const clickedInsidePopover = popoverRef.current?.contains(target)
      if (!clickedInsideTrigger && !clickedInsidePopover) {
        setIsOpen(false)
        if (!allowFreeText) {
          const selected = options.find((opt) => opt.value === value)
          setQuery(selected ? selected.label : '')
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [allowFreeText, options, value])

  const popoverRef = React.useRef<HTMLDivElement>(null)


  return (
    <div ref={containerRef} className={cn('relative inline-flex flex-col w-full gap-2', className)}>
      <div ref={wrapperRef} className="inline-flex items-center w-full">
        <input
          ref={inputRef}
          type="text"
          disabled={disabled}
          value={query}
          placeholder={placeholder}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className={cn(selectTriggerVariants({ size }), triggerClassName, isOpen && v.open)}
        />
        <button
          type="button"
          disabled={disabled}
          onClick={() => {
            setIsOpen((prev) => !prev)
            inputRef.current?.focus()
          }}
          className={cn(satelliteVariants({ size }), satelliteClassName, isOpen && v.open)}
        >
          <ChevronDown className={cn('transition-transform duration-200', isOpen && 'rotate-180')} />
        </button>
      </div>

      {/* MENU DROPDOWN — agora via portal, position fixed */}
      {mounted && isOpen && createPortal(
        <div
          ref={popoverRef}
          style={{ position: 'fixed', top: coords.top, left: coords.left, width: coords.width }}
          className={cn(
            'z-[9999] overflow-hidden rounded-2xl border bg-rede-surface p-1.5 shadow-xl',
            popoverClassName,
            v.popover,
          )}
        >
          <ul className="max-h-80 overflow-y-auto space-y-1
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar]:h-3
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-rede-yellow
            [&::-webkit-scrollbar-thumb]:rounded-full
          ">
            {filteredOptions.length === 0 && (
              <li className="px-4 py-2.5 text-[13px] text-rede-white/40">{emptyMessage}</li>
            )}
            {filteredOptions.map((option, index) => {
              const isSelected = option.value === value
              const isHighlighted = index === highlightedIndex
              return (
                <li key={option.value}>
                  <button
                    type="button"
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => selectOption(option)}
                    className={cn(
                      'w-full text-left px-4 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-150',
                      'text-rede-white/70 hover:bg-white/5 hover:text-rede-white',
                      isHighlighted && !isSelected && v.highlighted,
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
        </div>,
        document.body
      )}
    </div>
  )
}
InputSelect.displayName = 'InputSelect'