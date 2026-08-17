// src/components/ui/card.tsx

import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  image?: ReactNode;
  footer?: ReactNode;
  v?: "v1" | "v2" | "v3" | undefined;
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
        <div className="w-full h-75 overflow-hidden">
          {image}
        </div>
      )}

      <div className={`w-full h-80 flex flex-col justify-between gap-4 p-6 ${vs(v)}`}>

        <div className="w-full h-auto flex flex-col gap-4">
          {children}
        </div>

        {footer && (
          <div className={`w-full ${vs(v)}`}>
            {footer}
          </div>
        )}

      </div>

    </article>
  );
}