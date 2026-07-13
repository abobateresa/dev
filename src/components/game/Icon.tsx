"use client";

export type IconName =
  | "sword"
  | "dagger"
  | "fireball"
  | "heal"
  | "bow"
  | "axe"
  | "coin"
  | "totem"
  | "leaf"
  | "shield"
  | "star"
  | "skull"
  | "lightning"
  | "backpack"
  | "gear"
  | "book"
  | "map"
  | "lock"
  | "chat"
  | "anvil"
  | "question"
  | "potionHp"
  | "potionMp"
  | "portal"
  | "expand"
  | "user"
  | "close"
  | "arrowRight";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = { className, fill: "none", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
  switch (name) {
    case "sword":
      return (
        <svg {...common}>
          <path d="M14.5 2.5 21.5 9.5 12 19 5 22 2 19 9 12 14.5 2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M9 12 5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M13 3.6 20.4 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "dagger":
      return (
        <svg {...common}>
          <path d="M12 2 15 6 12 15 9 6 12 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M8 13h8l-1.5 3h-5L8 13Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M12 16v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "fireball":
      return (
        <svg {...common}>
          <path
            d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1.5-.8-2.2-1.2-3 .9.6 3.2 2.6 3.2 6a6 6 0 1 1-12 0c0-4 2.6-6.4 4-10Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "heal":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "bow":
      return (
        <svg {...common}>
          <path d="M6 3c-2 4-2 14 0 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M6 3 20 12 6 21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12h13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "axe":
      return (
        <svg {...common}>
          <path d="M5 3 3 5l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M9 9 19 3c1.5 3 1.5 6-1 8l-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M11 11 4 19l1 1 8-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "coin":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
            G
          </text>
        </svg>
      );
    case "totem":
      return (
        <svg {...common}>
          <path d="M12 2v20M8 6h8M7 12h10M6 18h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M6 18 18 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 2 20 5v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M12 2 14.5 9 22 9.5 16 14 18 21.5 12 17.3 6 21.5 8 14 2 9.5 9.5 9 12 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      );
    case "skull":
      return (
        <svg {...common}>
          <path d="M12 2a8 8 0 0 0-8 8c0 3 1.5 4.8 3 6v3h3v-2h4v2h3v-3c1.5-1.2 3-3 3-6a8 8 0 0 0-8-8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <circle cx="9.5" cy="10.5" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="14.5" cy="10.5" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      );
    case "lightning":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h6l-1 8 10-13h-6l0-7Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
    case "backpack":
      return (
        <svg {...common}>
          <path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="5" y="8" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 3v2.3M12 18.7V21M21 12h-2.3M5.3 12H3M18 6l-1.6 1.6M7.6 16.4 6 18M18 18l-1.6-1.6M7.6 7.6 6 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5c3-1.3 6-1.3 8 0 2-1.3 5-1.3 8 0v14c-3-1.3-6-1.3-8 0-2-1.3-5-1.3-8 0V5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M12 5v14" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M9 4v14M15 6v14" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M4 5h16v10H9l-4 4V15H4V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "anvil":
      return (
        <svg {...common}>
          <path d="M4 14h6l2-2h6l2 2v2H4v-2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M10 16v4h4v-4" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 4h4v4H8z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "question":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9.5 9.5c0-1.5 1.2-2.5 2.6-2.5s2.4 1 2.4 2.2c0 1.6-2.4 1.8-2.4 3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "potionHp":
      return (
        <svg {...common}>
          <path d="M9 3h6v3l2 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-3V3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M12 12v6M9 15h6" stroke="#ff5b5b" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "potionMp":
      return (
        <svg {...common}>
          <path d="M9 3h6v3l2 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-3V3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M12 11v7" stroke="#4b9bff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "portal":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="12" rx="7" ry="9" stroke="currentColor" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="3.2" ry="5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case "expand":
      return (
        <svg {...common}>
          <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 20c1.5-4 4-5.5 7-5.5S18.5 16 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M5 5 19 19M19 5 5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "arrowRight":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}
