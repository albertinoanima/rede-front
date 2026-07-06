import { SVGProps } from "react";

interface FaceBookIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
  title?: string;
  onClick?: () => void;
}

export function FacebookIcon({
  size = 64,
  color = "white",
  className,
  title,
  onClick,
  ...props
}: FaceBookIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 6.23077 12"
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

      <path
        d="M6.23077 0.0865385V1.99038H5.09856C4.6851 1.99038 4.40625 2.07692 4.26202 2.25C4.11779 2.42308 4.04567 2.68269 4.04567 3.02885V4.39183H6.15865L5.8774 6.52644H4.04567V12H1.83894V6.52644H0V4.39183H1.83894V2.81971C1.83894 1.92548 2.08894 1.23197 2.58894 0.739183C3.08894 0.246394 3.75481 0 4.58654 0C5.29327 0 5.84135 0.0288462 6.23077 0.0865385Z"
        fill={color}
      />
    </svg>
  );
}