import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { CuradoriaCard } from '@/components/ui/CuradoriaCard'

const curadorias = Array.from({ length: 6 }, (_, i) => ({
  number: i + 1,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  isCommercial: false,
}))

export function PacotesCurtas() {
  return (
    <section className="w-full bg-[#111111] py-20 px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <Heading level="h2" className="text-rede-red mb-4">
            Pacotes de Curtas
          </Heading>
          <Text variant="body1" className="text-foreground/70 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua, oferecendo pacotes curados de
            curtas-metragens para distribuição e licenciamento.
          </Text>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6">
          {curadorias.map((c) => (
            <CuradoriaCard key={c.number} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}