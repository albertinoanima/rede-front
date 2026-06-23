import { Heading } from './heading'
import { Text } from './text'

interface CuradoriaCardProps {
  number: number
  title: string
  description: string
}

export function CuradoriaCard({
  number,
  title,
  description,
}: CuradoriaCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
        {number}
      </div>

      <Heading level="h3" as="h3" className="mb-2">
        {title}
      </Heading>

      <Text variant="body2" className="text-muted-foreground">
        {description}
      </Text>
    </div>
  )
}