import { Check } from 'lucide-react'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'

interface CuradoriaCardProps {
  number: number
  description: string
  isCommercial?: boolean
  features?: string[]
}

export function CuradoriaCard({
  number,
  description,
  isCommercial = false,
  features = [
    'Ideal para festivais',
    'Direitos de distribuição',
    'Exibição paga',
    'Licença temporária',
  ],
}: CuradoriaCardProps) {
  return (
    <div className="border border-foreground/30 rounded-xl p-6 flex flex-col gap-4 hover:border-foreground transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <Heading level="h3" className="text-foreground">
          Curadoria {number}
        </Heading>
        <span className="text-btn2 text-foreground/60 border border-foreground/20 rounded-full px-3 py-1 shrink-0">
          {isCommercial ? 'Comercial' : 'Não comercial'}
        </span>
      </div>

      {/* Description */}
      <Text variant="body2" className="text-foreground/70">
        {description}
      </Text>

      {/* Features grid */}
      <div className="grid grid-cols-2 gap-2">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <Check size={14} className="text-foreground shrink-0" />
            <Text variant="body2" as="span" className="text-foreground truncate">
              {feature}
            </Text>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button variant="primary" size="sm" className="self-start mt-auto">
        Solicitar Proposta
      </Button>
    </div>
  )
}