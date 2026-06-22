'use client'
import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

const temaOptions = [
  'Direitos humanos',
  'Direitos humanos',
  'Direitos humanos',
  'Direitos humanos',
]

export function FilterSidebar() {
  const [search, setSearch] = useState('')
  const [pais, setPais] = useState('')
  const [selectedTemas, setSelectedTemas] = useState<string[]>([])
  const [genero, setGenero] = useState('')

  function toggleTema(tema: string) {
    setSelectedTemas((prev) =>
      prev.includes(tema) ? prev.filter((t) => t !== tema) : [...prev, tema]
    )
  }

  return (
    <aside className="w-[331px] shrink-0 bg-rede-black p-6 flex flex-col gap-6">
      {/* Search */}
      <div className="flex flex-col gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border border-foreground/30 rounded-full px-4 py-2 text-btn1 text-foreground placeholder:text-foreground/40 outline-none focus:border-foreground transition-colors"
          />
          <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40" />
        </div>
        <div className="flex gap-2">
          <Button variant="primary" size="sm" className="flex-1">Pesquisar</Button>
          <Button variant="secondary" size="sm" className="flex-1">Limpar</Button>
        </div>
      </div>

      {/* País */}
      <div className="flex flex-col gap-2">
        <Text variant="caption" className="text-foreground/60">País</Text>
        <select
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          className="w-full bg-transparent border border-foreground/30 rounded-full px-4 py-2 text-btn1 text-foreground outline-none focus:border-foreground appearance-none"
        >
          <option value="">seleccionar país</option>
          <option value="angola">Angola</option>
          <option value="mozambique">Moçambique</option>
          <option value="cabo-verde">Cabo Verde</option>
          <option value="sao-tome">São Tomé e Príncipe</option>
          <option value="guinea">Guiné-Bissau</option>
          <option value="timor">Timor-Leste</option>
        </select>
      </div>

      {/* Tema */}
      <div className="flex flex-col gap-3">
        <Text variant="caption" className="text-foreground/60">Tema</Text>
        <div className="flex flex-col gap-2">
          {temaOptions.map((tema, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => toggleTema(`${tema}-${i}`)}
                className={`w-[18px] h-[18px] rounded-full border border-foreground flex items-center justify-center shrink-0 transition-colors ${
                  selectedTemas.includes(`${tema}-${i}`) ? 'bg-foreground' : 'bg-transparent'
                }`}
              />
              <Text variant="body2" as="span">{tema}</Text>
            </label>
          ))}
        </div>
      </div>

      {/* Género */}
      <div className="flex flex-col gap-2">
        <Text variant="caption" className="text-foreground/60">Género</Text>
        <select
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          className="w-full bg-transparent border border-foreground/30 rounded-full px-4 py-2 text-btn1 text-foreground outline-none focus:border-foreground appearance-none"
        >
          <option value="">seleccionar género</option>
          <option value="documentary">Documentário</option>
          <option value="fiction">Ficção</option>
          <option value="animation">Animação</option>
          <option value="experimental">Experimental</option>
        </select>
      </div>
    </aside>
  )
}