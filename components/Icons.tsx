import { ReactNode } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" {...base}>
      {children}
    </svg>
  );
}

export const Icons: Record<string, () => ReactNode> = {
  poa: () => (
    <Svg>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4" />
      <path d="M10 12h5M10 16h5" />
    </Svg>
  ),
  realestate: () => (
    <Svg>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </Svg>
  ),
  consent: () => (
    <Svg>
      <path d="M12 3l8 4v5c0 4.5-3 8-8 9-5-1-8-4.5-8-9V7z" />
      <path d="M9 12l2 2 4-4" />
    </Svg>
  ),
  corporate: () => (
    <Svg>
      <path d="M4 21V6l7-3v18" />
      <path d="M11 9h9v12H4" />
      <path d="M14 13h3M14 17h3M7 9v0M7 13v0" />
    </Svg>
  ),
  inheritance: () => (
    <Svg>
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M15 3v3h3" />
      <path d="M12 10v6M9.5 12.5h5" />
    </Svg>
  ),
  child: () => (
    <Svg>
      <circle cx="12" cy="7" r="3" />
      <path d="M5 21c0-4 3-6 7-6s7 2 7 6" />
      <path d="M19 4l2 1-2 1" />
    </Svg>
  ),
  evidence: () => (
    <Svg>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.5-4.5" />
      <path d="M9 11h4M11 9v4" />
    </Svg>
  ),
  translation: () => (
    <Svg>
      <path d="M4 5h7M7.5 5v0M5 5c0 4 2 7 5 8" />
      <path d="M4 13c3 0 5-1 6-3" />
      <path d="M13 21l4-9 4 9M14.5 18h5" />
    </Svg>
  ),
  // trust
  license: () => (
    <Svg>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13l-1 8 4-2 4 2-1-8" />
      <path d="M12 7v4M10 9h4" />
    </Svg>
  ),
  experience: () => (
    <Svg>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </Svg>
  ),
  location: () => (
    <Svg>
      <path d="M12 21c5-5 7-8.5 7-12a7 7 0 10-14 0c0 3.5 2 7 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </Svg>
  ),
  fast: () => (
    <Svg>
      <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
    </Svg>
  ),
};
