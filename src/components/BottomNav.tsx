"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome, IconChild, IconRoutine, IconNetwork, IconMore } from "./Icons";

const tabs = [
  { href: "/", label: "Início", Icon: IconHome },
  { href: "/rotina", label: "Rotina", Icon: IconRoutine },
  { href: "/crianca", label: "Criança", Icon: IconChild },
  { href: "/rede", label: "Rede", Icon: IconNetwork },
  { href: "/mais", label: "Mais", Icon: IconMore },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        background: "white",
        borderTop: "1px solid rgba(236,236,236,0.8)",
        display: "flex",
        alignItems: "stretch",
        height: 72,
        flexShrink: 0,
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      {tabs.map(({ href, label, Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              textDecoration: "none",
              position: "relative",
              paddingTop: 4,
            }}
          >
            {/* Active indicator bar at top */}
            {active && (
              <div style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 24,
                height: 2.5,
                borderRadius: 2,
                background: "#8DA399",
              }} />
            )}
            <Icon active={active} />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10.5,
                fontWeight: active ? 500 : 400,
                color: active ? "#8DA399" : "#A8B0B4",
                letterSpacing: "0.1px",
              }}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
