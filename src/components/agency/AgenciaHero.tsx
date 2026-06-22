import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

export function AgenciaHero() {
  return (
    <section className="relative w-full h-[497px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/agencia-hero.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <Heading level="h1" className="text-rede-red mb-4">
          Agência
        </Heading>
        <Text variant="body1" className="text-rede-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Participe
          em workshops, masterclasses e seminários de formação audiovisual.
        </Text>
      </div>
    </section>
  )
}