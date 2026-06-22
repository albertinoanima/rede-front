import { FilmCard } from '@/components/ui/FilmCard'
import { FilterSidebar } from '@/components/ui/FilterSidebar'

const films = [
  {
    title: 'Uma História de Angola',
    director: 'Ferdinando Silmingo',
    duration: '28\'32"',
    year: '2025',
    tags: [{ label: 'Angola' }, { label: 'Ficção' }, { label: 'Direitos Humanos' }],
    thumbnail: '/images/films/angola.jpg',
  },
  {
    title: 'Vozes do Atlântico',
    director: 'Ferdinando Silmingo',
    duration: '32\'15"',
    year: '2025',
    tags: [{ label: 'Moçambique' }, { label: 'Ficção' }, { label: 'Género' }, { label: 'Animação' }],
    thumbnail: '/images/films/atlantico.jpg',
  },
  {
    title: 'Ilhas do Atlântico',
    director: 'Ferdinando Silmingo',
    duration: '28\'20"',
    year: '2025',
    tags: [{ label: 'Cabo Verde' }, { label: 'Experimental' }, { label: 'Ambiente' }],
    thumbnail: '/images/films/ilhas.jpg',
  },
  {
    title: 'São Tomé: Terra e Mar',
    director: 'Ferdinando Silmingo',
    duration: '28\'20"',
    year: '2025',
    tags: [{ label: 'São Tomé' }, { label: 'Experimental' }, { label: 'Ambiente' }],
    thumbnail: '/images/films/saotome.jpg',
  },
  {
    title: 'Caminhos da Guiné',
    director: 'Ferdinando Silmingo',
    duration: '28\'20"',
    year: '2025',
    tags: [{ label: 'Guiné' }, { label: 'Animação' }, { label: 'Direitos Humanos' }],
    thumbnail: '/images/films/guine.jpg',
  },
  {
    title: 'Timor: Entre Mundos',
    director: 'Ferdinando Silmingo',
    duration: '28\'20"',
    year: '2025',
    tags: [{ label: 'Angola' }, { label: 'Animação' }, { label: 'Direitos Humanos' }],
    thumbnail: '/images/films/timor.jpg',
  },
]

export function FilmsSection() {
  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto flex">
        {/* Sidebar */}
        <FilterSidebar />

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
          <div className="flex flex-col">
            {films.map((film) => (
              <FilmCard key={film.title} {...film} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}