import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Button } from './button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-popover hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-border/55 text-main-foreground bg-main/5 hover:bg-secondary/50',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        info: 'bg-info text-info-foreground hover:bg-info/90',
        ghost: 'hover:bg-accent/10 text-accent-foreground ',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        'default': 'h-10 px-4 py-2',
        'sm': 'h-9 rounded-md px-3',
        'lg': 'h-11 rounded-md px-8',
        'lg-icon': 'h-12 w-12 rounded-md',
        'icon': 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
