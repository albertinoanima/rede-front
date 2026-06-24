import { SVGProps } from "react";

interface CustomFacebookProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  onClick?: () => void;
}

export function CustomFacebook({
  size = 64,
  color = "white",
  strokeWidth = 1.3, // Este valor agora é o padrão se o pai não passar nada
  className,
  title,
  onClick,
  ...props
}: CustomFacebookProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      aria-label={title ?? "Facebook"}
      role={onClick ? "button" : "img"}
      style={{ cursor: onClick ? "pointer" : "default", ...props.style }}
      {...props}
    >
      {title && <title>{title}</title>}

      {/* Ícone f - Totalmente controlado pelas props */}
      <path
        d="M36.0017 25.3359H34.0016C33.1175 25.3359 32.2696 25.6871 31.6444 26.3123C31.0193 26.9374 30.6681 27.7853 30.6681 28.6694V30.6695H28.668V33.3363H30.6681V38.6699H33.3349V33.3363H35.335L36.0017 30.6695H33.3349V28.6694C33.3349 28.4926 33.4051 28.323 33.5301 28.198C33.6552 28.073 33.8247 28.0027 34.0016 28.0027H36.0017V25.3359Z"
        stroke={color}
        strokeWidth={strokeWidth} // Corrigido: Agora usa a prop dinâmica do componente
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}