
'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  className?: string
}

export function SearchInput({
  placeholder = 'Pesquisar...',
  value,
  onChange,
  onSearch,
  className,
}: SearchInputProps) {
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
      {/* Input */}
      <input
        type="text"
        value={current}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 bg-transparent px-6 py-3 text-b1 text-foreground placeholder:text-foreground/50 outline-none"
      />

      {/* Search button */}
      <button
        onClick={() => onSearch?.(current)}
        className="w-12 h-12 rounded-full border border-foreground flex items-center justify-center shrink-0 mr-1 hover:bg-foreground/10 transition-colors"
      >
        <Search size={18} className="text-foreground" />
      </button>
    </div>
  )
}