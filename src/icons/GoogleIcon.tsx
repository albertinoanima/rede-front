import { SVGProps } from "react";

interface GoogleIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
  title?: string;
  onClick?: () => void;
}

export function GoogleIcon({
  size = 64,
  color = "white",
  className,
  title,
  onClick,
  ...props
}: GoogleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      aria-label={title ?? "Google"}
      role={onClick ? "button" : "img"}
      style={{ cursor: onClick ? "pointer" : "default", ...props.style }}
      {...props}
    >
      {title && <title>{title}</title>}

      <path
        d="M11.9294 5.17353L11.8676 4.91177H6.17647V7.32059H9.57647C9.22353 8.99706 7.58529 9.87941 6.24706 9.87941C5.27353 9.87941 4.24706 9.47059 3.56765 8.81177C2.87059 8.13529 2.42647 7.13824 2.42647 6.11176C2.42647 5.09706 2.88235 4.08235 3.54706 3.41471C4.20882 2.75 5.21176 2.37353 6.20882 2.37353C7.35 2.37353 8.16765 2.97941 8.47353 3.25588L10.1853 1.55294C9.68235 1.11176 8.30294 0 6.15294 0C4.49412 0 2.90294 0.635294 1.74118 1.79412C0.594118 2.93529 0 4.58529 0 6.11471C0 7.64412 0.561765 9.21471 1.67353 10.3647C2.86176 11.5912 4.54412 12.2324 6.27647 12.2324C7.85294 12.2324 9.34706 11.6147 10.4118 10.4941C11.4588 9.39118 12 7.86471 12 6.26471C12 5.59118 11.9324 5.19118 11.9294 5.17353Z"
        fill={color}
      />
    </svg>
  );
}