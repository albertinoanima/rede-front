import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

const tagVariants = cva(
  "inline-flex w-fit shrink-0 items-center gap-2.5 rounded-lg border-[1.3px] px-3 py-1.5 text-[12px] font-medium leading-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rede-yellow",
  {
    variants: {
      variant: {
        agencyInternal: "border-rede-red-300 bg-rede-red-600 text-rede-white hover:border-rede-red-300 hover:bg-rede-red-300 active:shadow-[0_0_0_0.2px_var(--rede-red-600),0_0_0_1px_var(--rede-red-600)_inset,0_0_0_2px_var(--rede-red-600)_inset]",
        agencyExternal: "border-[#818284] bg-[#3B3B3B] text-rede-white hover:border-[#818284] hover:bg-[#818284] active:shadow-[0_0_0_0.2px_#3B3B3B,0_0_0_1px_#3B3B3B_inset,0_0_0_2px_#3B3B3B_inset]",
        card: "border-[#454545] bg-[#212121] text-rede-white hover:border-[#454545] hover:bg-[#454545] active:shadow-[0_0_0_0.2px_#212121,0_0_0_1px_#212121_inset,0_0_0_2px_#212121_inset]",
        workshopRecorded: "border-[#454545] bg-[#212121] text-[#E85051] hover:border-[#454545] hover:bg-[#454545] active:shadow-[0_0_0_0.2px_#1D1D1B,0_0_0_1px_#1D1D1B_inset,0_0_0_2px_#1D1D1B_inset]",
        status: "border-[#E6332A] bg-[#E6332A] text-rede-white hover:border-[#EE7B7D] hover:bg-[#EE7B7D] active:border-[#EE7B7D] active:shadow-[0_0_0_0.2px_#1D1D1B,0_0_0_1px_#1D1D1B_inset,0_0_0_2px_#1D1D1B_inset]",
        light: "border-rede-white bg-rede-white text-rede-surface hover:border-[#999999] hover:bg-[#999999] active:border-rede-white active:shadow-[0_0_0_0.2px_#1D1D1B,0_0_0_1px_#1D1D1B_inset,0_0_0_2px_#1D1D1B_inset]",
        muted: "border-[#454545] bg-[#454545] text-rede-white hover:border-[#787878] hover:bg-[#787878] active:border-[#787878] active:shadow-[0_0_0_0.2px_#1D1D1B,0_0_0_1px_#1D1D1B_inset,0_0_0_2px_#1D1D1B_inset]",
        outline: "border-rede-red-300 bg-transparent text-rede-white hover:bg-rede-red-600",
        statusOpen: "border-transparent bg-rede-white text-rede-surface hover:bg-rede-white/85",
        statusStarting: "border-transparent bg-rede-gray text-rede-surface hover:bg-rede-gray/85",
        statusExpired: "border-transparent bg-rede-red text-rede-surface hover:bg-rede-red/85",
      },
      size: {
        sm: "px-3 py-1",
        md: "px-3 py-1.5",
        lg: "px-[18px] py-1.5",
      },
    },
    defaultVariants: { variant: "card", size: "md" },
  },
)

const legacyVariantMap = {
  v1: "agencyInternal",
  v2: "agencyExternal",
  v3: "card",
  v4: "workshopRecorded",
  v5: "status",
  v6: "light",
  v7: "muted",
} as const

type LegacyTagVariant = keyof typeof legacyVariantMap

// Remove as classes de estado (hover/active/focus) para as tags meramente informativas.
const stripStateClasses = (classes: string) =>
  classes
    .split(" ")
    .filter((token) => !/^(hover|active|focus|focus-visible|group-hover|group-focus):/.test(token))
    .join(" ")

export interface TagProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children">,
    VariantProps<typeof tagVariants> {
  href?: string
  label?: string
  children?: ReactNode
  v?: LegacyTagVariant
  /** `false` deixa a tag apenas informativa: sem hover, sem link e com o cursor padrão. */
  interactive?: boolean
}

const getTagHref = (href?: string) => {
  if (href == null || href === "") return ""
  if (href.startsWith("/") || href.startsWith("?") || href.startsWith("#")) return href

  return `?tag=${encodeURIComponent(href)}`
}

export const Tag: React.FC<TagProps> = ({
  href,
  label,
  children,
  className,
  variant,
  size,
  v,
  interactive = true,
  ...props
}) => {
  const content = label && label.length > 0 ? label : children
  const resolvedHref = getTagHref(href)
  const resolvedVariant = variant ?? (v ? legacyVariantMap[v] : undefined)
  const baseClasses = cn(tagVariants({ variant: resolvedVariant, size }), className)
  const classes = interactive
    ? baseClasses
    : cn(stripStateClasses(baseClasses), "cursor-default")

  if (interactive && resolvedHref) {
    return (
      <Link href={resolvedHref} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <span className={classes} {...props}>
      {content}
    </span>
  )
}
