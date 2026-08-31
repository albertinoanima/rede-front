import Link from "next/link"
import { ReactNode } from "react"


export const Tag: React.FC<{ href?: string, children: ReactNode }> = ({ href, children }) => {

  if (href) return (
    <a className="text-[12px] leading-4 font-medium border-[1.3px] border-rede-bg-300 rounded-md pt-[6px] pb-[6px] pr-[12px] pl-[12px] flex gap-2.5 items-center
    hover:border-rede-bg-300 hover:bg-rede-bg-300
    active: shadow-[0_0_0_0.3px_var(--rede-red-300),0_0_0_1px_var(--rede-red-300)_inset,0_0_0_4px_var(--rede-bg-900)_inset]
    ">

      {children}
    </a>
  )


  return (
    <span>

    </span>
  )
}