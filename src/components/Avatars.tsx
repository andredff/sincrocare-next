"use client";

export function AvatarRafaelly({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none">
      <circle cx="19" cy="19" r="19" fill="#E8D5C4" />
      <ellipse cx="19" cy="16" rx="7" ry="7.5" fill="#F5CBA7" />
      <ellipse cx="19" cy="15" rx="7.5" ry="5" fill="#8B6343" />
      <ellipse cx="19" cy="24" rx="9" ry="6" fill="#F5CBA7" />
      <path d="M13 24c0 0 2 3 6 3s6-3 6-3" stroke="#E8B89A" strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="15.5" cy="16.5" r="1.2" fill="#4A3728" />
      <circle cx="22.5" cy="16.5" r="1.2" fill="#4A3728" />
      <path d="M16 20.5c0 0 1.5 1.5 3 1.5s3-1.5 3-1.5" stroke="#C97650" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

export function ChildIllustration() {
  return (
    <svg viewBox="0 0 375 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
      {/* Sky */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#C8E6F5" />
          <stop offset="100%" stopColor="#EBF4FB" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#A8D5A2" />
          <stop offset="100%" stopColor="#8BC98A" />
        </linearGradient>
      </defs>
      <rect width="375" height="220" fill="url(#sky)" />
      {/* Clouds */}
      <ellipse cx="60" cy="40" rx="30" ry="14" fill="white" opacity="0.8" />
      <ellipse cx="80" cy="35" rx="22" ry="12" fill="white" opacity="0.9" />
      <ellipse cx="300" cy="50" rx="35" ry="14" fill="white" opacity="0.7" />
      <ellipse cx="320" cy="44" rx="24" ry="12" fill="white" opacity="0.85" />
      {/* Sun */}
      <circle cx="320" cy="28" r="18" fill="#FFD76B" opacity="0.9" />
      {/* Ground */}
      <rect x="0" y="160" width="375" height="60" fill="url(#ground)" />
      {/* Tree */}
      <rect x="280" y="120" width="10" height="45" fill="#8B6343" rx="2" />
      <ellipse cx="285" cy="110" rx="22" ry="26" fill="#5B8A57" />
      <ellipse cx="285" cy="105" rx="18" ry="20" fill="#6FA86A" />
      {/* Child */}
      <circle cx="155" cy="122" r="16" fill="#F5CBA7" />
      <ellipse cx="155" cy="120" rx="15" ry="10" fill="#5B3B1F" />
      <rect x="140" y="138" width="30" height="28" fill="#FF8FAB" rx="8" />
      <rect x="138" y="155" width="14" height="22" fill="#4A7BDB" rx="4" />
      <rect x="163" y="155" width="14" height="22" fill="#4A7BDB" rx="4" />
      <rect x="136" y="140" width="12" height="20" fill="#F5CBA7" rx="4" />
      <rect x="167" y="140" width="12" height="20" fill="#F5CBA7" rx="4" />
      {/* Flowers */}
      <circle cx="100" cy="162" r="4" fill="#FFD76B" />
      <circle cx="96" cy="158" r="3" fill="#FF8FAB" />
      <circle cx="104" cy="158" r="3" fill="#FF8FAB" />
      <circle cx="100" cy="166" r="3" fill="#FF8FAB" />
      <circle cx="200" cy="164" r="4" fill="#FFD76B" />
      <circle cx="196" cy="160" r="3" fill="#C8A4FF" />
      <circle cx="204" cy="160" r="3" fill="#C8A4FF" />
      <circle cx="200" cy="168" r="3" fill="#C8A4FF" />
    </svg>
  );
}

export function ProfessionalAvatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      style={{
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: 17,
          color: "white",
          letterSpacing: "-0.3px",
        }}
      >
        {initials}
      </span>
    </div>
  );
}
