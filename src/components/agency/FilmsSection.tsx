"use client"

import { FilterSidebar } from '@/components/agency/FilterSidebar'
import { ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'

const films = [
  {
    title: 'Uma História de Angola',
    director: 'Ferdinando Silmingo',
    duration: '28\'32"',
    year: '2025',
    tags: [{ label: 'Angola' }, { label: 'Ficção' }, { label: 'Direitos Humanos' }],
    thumbnail: '/assets/agency/movies/image-1.png',
  },
  {
    title: 'Vozes do Atlântico',
    director: 'Ferdinando Silmingo',
    duration: '32\'15"',
    year: '2025',
    tags: [{ label: 'Moçambique' }, { label: 'Ficção' }, { label: 'Género' }, { label: 'Animação' }],
    thumbnail: '/assets/agency/movies/image-2.png',
  },
  {
    title: 'Ilhas do Atlântico',
    director: 'Ferdinando Silmingo',
    duration: '28\'20"',
    year: '2025',
    tags: [{ label: 'Cabo Verde' }, { label: 'Experimental' }, { label: 'Ambiente' }],
    thumbnail: '/assets/agency/movies/image-3.png',
  },
  {
    title: 'São Tomé: Terra e Mar',
    director: 'Ferdinando Silmingo',
    duration: '28\'20"',
    year: '2025',
    tags: [{ label: 'São Tomé' }, { label: 'Experimental' }, { label: 'Ambiente' }],
    thumbnail: '/assets/agency/movies/image-4.png',
  },
  {
    title: 'Caminhos da Guiné',
    director: 'Ferdinando Silmingo',
    duration: '28\'20"',
    year: '2025',
    tags: [{ label: 'Guiné' }, { label: 'Animação' }, { label: 'Direitos Humanos' }],
    thumbnail: '/assets/agency/movies/image-5.png',
  },
  {
    title: 'Timor: Entre Mundos',
    director: 'Ferdinando Silmingo',
    duration: '28\'20"',
    year: '2025',
    tags: [{ label: 'Angola' }, { label: 'Animação' }, { label: 'Direitos Humanos' }],
    thumbnail: '/assets/agency/movies/image-6.png',
  },
]

export const FilmsSection: React.FC = () => {
  return (
    <section className="w-full h-auto">
      <div className="w-full max-w-360 h-auto ml-auto mr-auto flex">

        <div>
          <FilterSidebar />
        </div>

        {/* Films list */}
        <div className="flex-1 flex flex-col">
          {/* Top bar */}
          <div className="flex justify-end gap-3 px-6 py-4">
            <button className="text-btn2 text-foreground border border-foreground/30 rounded-full px-4 py-1.5 hover:border-foreground transition-colors">
              Ordenar por
            </button>
            <button className="text-btn2 text-foreground border border-foreground/30 rounded-full px-4 py-1.5 hover:border-foreground transition-colors">
              8 resultados
            </button>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4 px-6 pb-6">
            {films.map((film, index) => (
              <div
                key={index}
                className="flex h-56 overflow-hidden bg-[#e52b22]"
              >
                {/* Imagem */}
                <div className="w-[42%]">
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Conteúdo */}
                <div className="flex flex-1 justify-between p-8">
                  <div className="flex flex-col">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {film.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="border border-white rounded-full px-4 py-1 text-xs text-white"
                        >
                          {tag.label}
                        </span>
                      ))}

                      <span className="border border-white rounded-full px-4 py-1 text-xs text-white">
                        {film.year}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className="text-3xl font-semibold text-white">
                      {film.title}
                    </h3>

                    {/* Diretor e duração */}
                    <div className="flex items-center gap-6 mt-3 text-white text-sm">
                      <span>{film.director}</span>
                      <span>{film.duration}</span>
                    </div>
                  </div>

                  {/* Botão */}
                  <div className="flex items-end">
                    <Button className="text-rede-black rounded-full w-10 h-10 p-0">
                      <ChevronRight/>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}