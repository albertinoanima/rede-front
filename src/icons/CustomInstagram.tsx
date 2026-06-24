import { SVGProps, useId } from "react";

interface CustomInstagramProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  onClick?: () => void;
}

export function CustomInstagram({
  size = 64,
  color = "white",
  strokeWidth = 1.3, // Este valor agora controla todo o ícone se o pai não passar nada
  className,
  title,
  onClick,
  ...props
}: CustomInstagramProps) {
  const clipId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      aria-label={title ?? "Instagram"}
      role={onClick ? "button" : "img"}
      style={{ cursor: onClick ? "pointer" : "default", ...props.style }}
      {...props}
    >
      {title && <title>{title}</title>}

      {/* Círculo exterior (Comentado para manter apenas o ícone puro se quiseres) */}
      {/* <path
        d="M32 0.650391C49.314 0.650391 63.3504 14.6861 63.3506 32C63.3506 49.3141 49.3141 63.3506 32 63.3506C14.6861 63.3504 0.650391 49.314 0.650391 32C0.650607 14.6862 14.6862 0.650607 32 0.650391Z"
        stroke={color}
        strokeWidth={strokeWidth}
      /> */}

      <g clipPath={`url(#${clipId})`}>
        {/* Câmara + círculo interior - Totalmente dinâmico agora */}
        <path
          d="M35.6659 28.3361H35.6725M28.6655 25.3359H35.3325C37.1736 25.3359 38.666 26.8284 38.666 28.6694V35.3364C38.666 37.1775 37.1736 38.6699 35.3325 38.6699H28.6655C26.8245 38.6699 25.332 37.1775 25.332 35.3364V28.6694C25.332 26.8284 26.8245 25.3359 28.6655 25.3359ZM34.6658 31.583C34.7481 32.1378 34.6533 32.7045 34.395 33.2024C34.1366 33.7003 33.7278 34.104 33.2268 34.3562C32.7258 34.6084 32.158 34.6962 31.6042 34.6071C31.0504 34.5179 30.5388 34.2565 30.1421 33.8598C29.7455 33.4632 29.484 32.9516 29.3949 32.3978C29.3058 31.844 29.3936 31.2762 29.6458 30.7752C29.898 30.2741 30.3017 29.8654 30.7996 29.607C31.2975 29.3487 31.8642 29.2539 32.419 29.3362C32.985 29.4201 33.509 29.6838 33.9136 30.0884C34.3181 30.493 34.5819 31.017 34.6658 31.583Z"
          stroke={color}
          strokeWidth={strokeWidth} // Corrigido: Agora obedece à prop passada pelo pai
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <clipPath id={clipId}>
          <rect width="16.0008" height="16.0008" fill="white" transform="translate(24 24)" />
        </clipPath>
      </defs>
    </svg>
  );
}