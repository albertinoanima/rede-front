
// components/ui/button.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-all rounded-full disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-rede-yellow  text-rede-black  hover:bg-rede-yellow/80   active:bg-rede-yellow/60   disabled:bg-rede-yellow/40  disabled:text-rede-black/40',
        secondary: 'bg-transparent  text-foreground  border border-foreground   hover:bg-foreground/10     active:bg-foreground/20     disabled:opacity-30',
        danger: 'bg-rede-red     text-white        hover:bg-rede-red/80      active:bg-rede-red/60      disabled:bg-rede-red/40',
      },
      size: {
        sm: 'h-8  px-3 text-btn2',
        md: 'h-9  px-4 text-btn2',
        lg: 'h-11 px-5 text-btn1',
        xl: 'h-13 px-6 text-btn1',
      },
    },
    defaultVariants: { variant: 'primary', size: 'lg' },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export function Button({
  variant,
  size,
  icon,
  iconPosition = 'left',
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex items-center">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex items-center">{icon}</span>}
    </button>
  )
}