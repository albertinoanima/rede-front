// components/ui/heading.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const headingVariants = cva('text-foreground', {
  variants: {
    level: {
      h1: 'text-h1',
      h2: 'text-h2',
      h3: 'text-h3',
    },
  },
  defaultVariants: { level: 'h1' },
})

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading({ level = 'h1', as, className, children, ...props }: HeadingProps) {
  const Tag = (as ?? level ?? 'h1') as React.ElementType
  return (
    <Tag className={cn(headingVariants({ level }), className)} {...props}>
      {children}
    </Tag>
  )
}