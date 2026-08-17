import { SVGProps, useId } from "react";

interface CustomYouTubeProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
  title?: string;
  onClick?: () => void;
}

export function CustomYouTube({
  size = 64,
  strokeWidth = 1.3,
  className,
  title,
  onClick,
  ...props
}: CustomYouTubeProps) {
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
      aria-label={title ?? "YouTube"}
      role={onClick ? "button" : "img"}
      style={{
        cursor: onClick ? "pointer" : "default",
        ...props.style,
      }}
      {...props}
    >
      {title && <title>{title}</title>}

      <g clipPath={`url(#${clipId})`}>
        <path
          d="M25.6657 35.3337C25.2 33.1358 25.2 30.8647 25.6657 28.6667C25.7269 28.4435 25.8451 28.2401 26.0088 28.0764C26.1725 27.9128 26.3759 27.7946 26.5991 27.7334C30.1749 27.141 33.8238 27.141 37.3996 27.7334C37.6228 27.7946 37.8263 27.9128 37.9899 28.0764C38.1536 28.2401 38.2718 28.4435 38.333 28.6667C38.7988 30.8647 38.7988 33.1358 38.333 35.3337C38.2718 35.5569 38.1536 35.7604 37.9899 35.924C37.8263 36.0877 37.6228 36.2059 37.3996 36.2671C33.8238 36.8596 30.1749 36.8596 26.5991 36.2671C26.3759 36.2059 26.1725 36.0877 26.0088 35.924C25.8451 35.7604 25.7269 35.5569 25.6657 35.3337Z"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M30.666 34.0003L33.9995 32.0002L30.666 30.0001V34.0003Z"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <clipPath id={clipId}>
          <rect
            width="16.0008"
            height="16.0008"
            fill="white"
            transform="translate(24 24)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}