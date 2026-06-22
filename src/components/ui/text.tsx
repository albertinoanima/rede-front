// components/ui/text.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const textVariants = cva('text-foreground', {
  variants: {
    variant: {
      body1: 'text-b1',
      body2: 'text-b2',
      caption: 'text-c1',
    },
  },
  defaultVariants: { variant: 'body1' },
})

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div'
}

export function Text({ variant = 'body1', as = 'p', className, children, ...props }: TextProps) {
  const Tag = as as React.ElementType
  return (
    <Tag className={cn(textVariants({ variant }), className)} {...props}>
      {children}
    </Tag>
  )
}