// components/ui/Input.tsx
'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

interface InputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  icon?: React.ReactNode
  showButton?: boolean
  className?: string
}

export function Input({
  placeholder = 'Pesquisar...',
  value,
  onChange,
  onSearch,
  icon = <Search size={18} />,
  showButton = true,
  className,
}: InputProps) {
  const [internal, setInternal] = useState('')
  const current = value ?? internal

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInternal(e.target.value)
    onChange?.(e.target.value)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') onSearch?.(current)
  }

  return (
    <div className={cn('flex items-center w-full border border-foreground rounded-full overflow-hidden', className)}>
      <input
        type="text"
        value={current}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 bg-transparent px-6 py-3 text-b1 text-foreground placeholder:text-foreground/50 outline-none"
      />

      {showButton && (
        <button
          onClick={() => onSearch?.(current)}
          className="w-12 h-12 rounded-full border border-foreground flex items-center justify-center shrink-0 mr-1 text-foreground hover:bg-foreground/10 transition-colors"
        >
          {icon}
        </button>
      )}
    </div>
  )
}