"use client";

const accent = "#8DA399";
const muted = "#A8B0B4";
const gray = "#6F7A85";

function Icon({ active, children, size = 24 }: { active?: boolean; children: (c: string) => React.ReactNode; size?: number }) {
  const c = active ? accent : muted;
  return (
    <svg width={size} height={size} viewBox={`0 0 24 24`} fill="none">
      {children(c)}
    </svg>
  );
}

export function IconHome({ active }: { active?: boolean }) {
  return (
    <Icon active={active}>
      {(c) => (
        <>
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9 21V12h6v9" stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
        </>
      )}
    </Icon>
  );
}

export function IconChild({ active }: { active?: boolean }) {
  return (
    <Icon active={active}>
      {(c) => (
        <>
          <circle cx="12" cy="7" r="4" stroke={c} strokeWidth="1.5" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </Icon>
  );
}

export function IconRoutine({ active }: { active?: boolean }) {
  return (
    <Icon active={active}>
      {(c) => (
        <>
          <rect x="3" y="4" width="18" height="17" rx="2" stroke={c} strokeWidth="1.5" />
          <path d="M8 2v4M16 2v4M3 9h18" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 13h2M11 13h2M15 13h2M7 17h2M11 17h2" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </Icon>
  );
}

export function IconNetwork({ active }: { active?: boolean }) {
  return (
    <Icon active={active}>
      {(c) => (
        <>
          <circle cx="8" cy="8" r="3" stroke={c} strokeWidth="1.5" />
          <circle cx="16" cy="8" r="3" stroke={c} strokeWidth="1.5" />
          <path d="M2 19c0-3 2.7-5 6-5s6 2 6 5" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 14c2.7 0 5 2 5 5" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </Icon>
  );
}

export function IconMore({ active }: { active?: boolean }) {
  return (
    <Icon active={active}>
      {(c) => (
        <>
          <circle cx="5" cy="12" r="1.5" fill={c} />
          <circle cx="12" cy="12" r="1.5" fill={c} />
          <circle cx="19" cy="12" r="1.5" fill={c} />
        </>
      )}
    </Icon>
  );
}

export function IconBell({ dot }: { dot?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2z" fill={gray} />
      <path d="M18 11A6 6 0 006 11c0 3.5-1.5 5-2 6h16c-.5-1-2-2.5-2-6z" stroke={gray} strokeWidth="1.5" strokeLinejoin="round" />
      {dot && <circle cx="18.5" cy="5.5" r="3" fill="#4A90D9" />}
    </svg>
  );
}

export function IconPill({ color = "#8DA399" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M10.5 3.5L3.5 10.5a4.95 4.95 0 000 7l3 3a4.95 4.95 0 007 0l7-7a4.95 4.95 0 000-7l-3-3a4.95 4.95 0 00-7 0z" stroke={color} strokeWidth="1.5" />
      <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconDoc({ color = "#8DA399" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8L14 2z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 2v6h6M8 13h8M8 17h5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconStar({ color = "#8DA399" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconAlergy() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#F4A261" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="12" y1="9" x2="12" y2="13" stroke="#F4A261" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1" fill="#F4A261" />
    </svg>
  );
}

export function IconEdit() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke={gray} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke={gray} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconEditSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke={gray} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevron() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke={muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPlus({ color = "white" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconLock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="11" width="18" height="11" rx="2" stroke={accent} strokeWidth="1.5" />
      <path d="M7 11V7a5 5 0 0110 0v4" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCake() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M20 21v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8" stroke={gray} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 13H2M22 13h-2M4 21H2M22 21h-2M12 11V2M8 7c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke={gray} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconTea() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M17 8h1a4 4 0 010 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" stroke={gray} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSchool() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 21h18M3 7v14M21 7v14M6 21V11M18 21V11M12 3l9 4-9 4-9-4 9-4z" stroke={gray} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSpark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconProtocol() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke={gray} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke={gray} strokeWidth="1.5" />
      <path d="M8 2v4M16 2v4M3 9h18" stroke={gray} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
