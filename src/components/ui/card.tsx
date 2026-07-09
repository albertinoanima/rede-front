// src/components/ui/card.tsx

import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  image?: ReactNode;
  footer?: ReactNode;
  v?: "v1" | "v2" | "v3"| undefined;
};

export default function Card({ image, footer, className, children, v, ...props }: CardProps) {

  const vs = (tempV?: string) => {
    if (tempV === "v1") {
      return "bg-rede-surface";
    }
    else if (tempV === "v2") {
      return "bg-rede-gray";
    }
    else if (tempV === "v3") {
      return "bg-rede-red";
    }

    return "bg-rede-surface"
  }

  return (
    <article className={cn("overflow-hidden bg-rede-surface", className)}{...props}>
      {image && (
        <div className="w-full h-82.5 overflow-hidden">
          {image}
        </div>
      )}

      <div className={`flex flex-col gap-4 p-6 ${vs(v)}`}>
        {children}

        {footer && (
          <div className="flex items-center justify-between gap-3">
            {footer}
          </div>
        )}
      </div>
    </article>
  );
}