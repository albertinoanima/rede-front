import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Heading } from '../ui/heading'
import { Text } from '../ui/text'
import { Tag } from '../ui/tag'
import { Button } from '../ui/button'

interface Tag {
  label: string
}

interface FilmCardProps {
  title: string
  director: string
  duration: string
  year: string
  tags: Tag[]
  thumbnail: string
  href?: string
}

export const FilmCard = ({
  title,
  director,
  duration,
  year,
  tags,
  thumbnail,
  href = '#',
}: FilmCardProps) => {
  return (
    <div className="flex w-full h-53 overflow-hidden">
      {/* Thumbnail */}
      <div className="relative w-111.5 shrink-0">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content — red background */}
      <div className="flex-1 bg-rede-red flex flex-col justify-between p-5 relative">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {
            tags.map((tag, index) => (
              <Tag label={tag.label} key={tag.label + "dhbg" + index} />
            ))
          }

          <Tag label={year} />
        </div>

        {/* Title */}
        <Heading level="h3" className="text-rede-white">
          {title}
        </Heading>

        {/* Footer row */}
        <div className="flex items-center justify-between">
          <div>
            <Text variant="body2" className="text-rede-white">
              {director}
            </Text>
            <Text variant="body2" className="text-rede-white/70">
              {duration}
            </Text>
          </div>

          {/* Arrow button */}
          <a
            href={href}
            className="w-10 h-10 rounded-full bg-rede-yellow flex items-center justify-center hover:bg-rede-yellow/80 transition-colors shrink-0"
          >
            <Button showMainButton={false} iconPosition="right" icon={<ArrowRight width={12} height={12} />} />
          </a>
        </div>
      </div>
    </div>
  )
}
