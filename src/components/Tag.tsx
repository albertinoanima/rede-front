import Link from "next/link";
import { ReactNode } from "react";

export const Tag: React.FC<{ label?: string, href?: string, className?: string, children?: ReactNode }> = ({
    label,
    href,
    className = "transparent",
    children
}) => {
    const content = (label && label.length > 0) ? label : (children ? children : "");
    const targetHref = href?.startsWith("/") || href?.startsWith("?") ? href : href ? `?tag=${encodeURIComponent(href)}` : "";

    if (targetHref.length > 0) {
        return (
            <Link href={targetHref} className={`border-[1.3px] border-rede-red-300 px-4.5 py-1.5 rounded-lg text-[12px] leading-4 font-medium ${className}`}>
                {content}
            </Link>
        )
    }

    return (
        <span className={`border-[1.3px] border-rede-red-300 px-4.5 py-1.5 rounded-lg text-[12px] leading-4 font-medium ${className}`}>
            {content}
        </span>
    )
}
