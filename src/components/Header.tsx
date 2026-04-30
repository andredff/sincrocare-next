"use client";

import Image from "next/image";
import { IconBell } from "./Icons";

export function Header() {
  return (
    <header
      style={{
        background: "white",
        borderBottom: "1px solid rgba(236,236,236,0.7)",
        padding: "0 20px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
      }}
    >
      {/* Avatar responsável */}
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          flexShrink: 0,
          position: "relative",
        }}
      >
        <Image
          src="/foto-perfil-mae.png"
          alt="Responsável"
          fill
          style={{ objectFit: "cover" }}
          sizes="40px"
          priority
        />
      </div>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Image
          src="/logo.png"
          alt="SincroCare"
          width={36}
          height={36}
          style={{ objectFit: "contain" }}
          priority
        />
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: 22,
            color: "#2F2F2F",
            letterSpacing: "-0.5px",
            userSelect: "none",
          }}
        >
          SincroCare
        </span>
      </div>

      {/* Bell */}
      <button
        style={{
          background: "none",
          border: "none",
          padding: 4,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Notificações"
      >
        <IconBell dot />
      </button>
    </header>
  );
}
