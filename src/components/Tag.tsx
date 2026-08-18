import Link from "next/link";
import { ReactNode } from "react";


export const Tag: React.FC<{ label?: string, href?: string, className?: string, children?: ReactNode }> = ({
    label,
    href,
    className = "transparent",
    children
}) => {

    if (href && href.length > 0) {
        return (
            <Link href={`/news?tag=${href}`} className={`border-[1.3px] border-rede-red-300 px-4.5 py-1.5 rounded-lg text-[12px] leading-4 font-medium ${className}`}>
                {(label && label.length > 0) ? label : (children ? children : "") }
            </Link>
        )
    }

    return (
        <span className={`border-[1.3px] border-rede-red-300 px-4.5 py-1.5 rounded-lg text-[12px] leading-4 font-medium ${className}`}>
            {(label && label.length > 0) ? label : (children ? children : "") }
        </span>
    )
}