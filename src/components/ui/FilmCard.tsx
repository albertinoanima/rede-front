import Image from 'next/image'
import { Heading } from './heading'
import { Text } from './text'

interface FilmCardProps {
  title: string
  image: string
  year?: string
  category?: string
}

export function FilmCard({
  title,
  image,
  year,
  category,
}: FilmCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-lg">
      <div className="relative aspect-[16/9] w-full">
        {/* <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        /> */}
      </div>

      <div className="space-y-2 p-4">
        <Heading level="h3" as="h3">
          {title}
        </Heading>

        {(year || category) && (
          <Text variant="body2" className="text-muted-foreground">
            {[year, category].filter(Boolean).join(' • ')}
          </Text>
        )}
      </div>
    </div>
  )
}