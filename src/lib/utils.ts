// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { cloneElement, isValidElement, ReactElement, ReactNode } from 'react'
import { extendTailwindMerge } from 'tailwind-merge'

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        { text: ['h1', 'h2', 'h3', 'c1', 'b1', 'b2', 'btn1', 'btn2'] }
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}


export function withCurrentColor(icon: ReactNode) {
  if (!isValidElement<{ className?: string }>(icon)) return icon
  return cloneElement(icon, {
    className: cn('[&>*]:fill-current', icon.props.className),
  })
}