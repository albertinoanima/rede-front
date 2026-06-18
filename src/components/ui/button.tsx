import { cva } from "class-variance-authority";

// components/ui/button.tsx
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-rede-black hover:opacity-90',
        secondary: 'bg-muted text-foreground hover:bg-muted/80',
        ghost: 'bg-transparent hover:bg-muted',
      },
      size: {
        lg: 'h-12 px-6 text-btn1',
        sm: 'h-9 px-4 text-btn2',
      },
    },
    defaultVariants: { variant: 'primary', size: 'lg' },
  }
)