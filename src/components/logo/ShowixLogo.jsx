import { Link } from "react-router-dom";

export function ShowixLogo({ size = "medium", showText = true }) {
  const sizes = {
    small: { icon: 36, text: "text-xl", gap: "gap-2" },
    medium: { icon: 48, text: "text-2xl", gap: "gap-3" },
    large: { icon: 64, text: "text-4xl", gap: "gap-4" },
  };

  const current = sizes[size];

  return (
    <Link
      to="/"
      className={`flex items-center ${current.gap} hover:opacity-90 transition`}
    >
      <svg
        width={current.icon}
        height={current.icon}
        viewBox="0 0 100 100"
        fill="none"
      >
        <defs>
          <linearGradient id="showixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5B2EFF" />
            <stop offset="100%" stopColor="#FF3D81" />
          </linearGradient>
        </defs>

        <path d="M18 15 L58 50 L18 85 Z" fill="url(#showixGradient)" />
        <path d="M82 15 L42 50 L82 85 Z" fill="url(#showixGradient)" />
      </svg>

      {showText && (
        <span className={`${current.text} font-bold tracking-wide`}>
          Show<span className="text-pink-500">ix</span>
        </span>
      )}
    </Link>
  );
}
