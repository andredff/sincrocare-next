"use client";

import { IconPill, IconDoc, IconStar, IconArrow, IconSpark, IconChevron } from "../Icons";

function Tag({ label, color, bg }: { label: string; color: string; bg: string }) {
  return (
    <span style={{
      background: bg, color,
      borderRadius: 999, padding: "4px 12px",
      fontSize: 12, fontWeight: 500,
      fontFamily: "'DM Sans', sans-serif",
      display: "inline-flex", alignItems: "center", gap: 4,
    }}>
      {label}
    </span>
  );
}

function FeedItem({ icon, title, subtitle, meta }: {
  icon: React.ReactNode; title: string; subtitle: string; meta: string;
}) {
  return (
    <div className="pressable" style={{
      display: "flex", alignItems: "center", gap: 14,
      padding: "14px 16px", background: "white",
      borderRadius: 16, border: "1px solid rgba(236,236,236,0.8)",
      boxShadow: "0px 2px 12px rgba(0,0,0,0.05)",
    }}>
      <div style={{
        width: 42, height: 42, borderRadius: 13,
        background: "#EBF1EE", display: "flex",
        alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          margin: 0, fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500, fontSize: 14, color: "#2F2F2F",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>
          {title}
        </p>
        <p style={{
          margin: "3px 0 0", fontFamily: "'DM Sans', sans-serif",
          fontSize: 12.5, color: "#6F7A85",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>
          {subtitle}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#A8B0B4" }}>
          {meta}
        </span>
        <IconChevron />
      </div>
    </div>
  );
}

export function HomeScreen() {
  return (
    <div style={{ padding: "20px 20px 28px", display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Welcome */}
      <div>
        <p style={{
          margin: 0,
          fontFamily: "'Playfair Display', serif",
          fontSize: 22, fontWeight: 500, color: "#2F2F2F",
          lineHeight: 1.25,
        }}>
          Olá, Rafaelly.
        </p>
        <p style={{
          margin: "5px 0 0",
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic", fontSize: 15, color: "#6F7A85",
          lineHeight: 1.4,
        }}>
          Aqui está o resumo do dia do Pedro.
        </p>
      </div>

      {/* Status tags */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Tag label="✓  Estável" color="#6d8578" bg="#EBF1EE" />
        <Tag label="!  Lembrete pendente" color="#F4A261" bg="#FEF3EB" />
      </div>

      {/* CTA — Manejo de Crise */}
      <button className="pressable" style={{
        width: "100%", height: 76,
        background: "#8DA399", borderRadius: 20,
        border: "none", display: "flex",
        alignItems: "center", justifyContent: "space-between",
        padding: "0 20px", cursor: "pointer",
        boxShadow: "0 6px 28px rgba(141,163,153,0.40)",
      }}>
        <div style={{ textAlign: "left" }}>
          <p style={{
            margin: 0, color: "rgba(255,255,255,0.75)",
            fontSize: 12, fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.3px",
          }}>
            O que fazer agora?
          </p>
          <p style={{
            margin: "3px 0 0", color: "white",
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic", fontSize: 19, fontWeight: 500,
          }}>
            Manejo de Crise de Pedro
          </p>
        </div>
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          background: "rgba(255,255,255,0.22)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <IconArrow />
        </div>
      </button>

      {/* Feed */}
      <div>
        <p style={{
          margin: "0 0 12px",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500, fontSize: 12,
          color: "#A8B0B4", textTransform: "uppercase", letterSpacing: "0.8px",
        }}>
          Hoje
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <FeedItem
            icon={<IconPill />}
            title="Medicação"
            subtitle="Risperidona 0,5mg — 08:00"
            meta="✓"
          />
          <FeedItem
            icon={<IconDoc />}
            title="Relatório escolar"
            subtitle="Recebido às 14h30"
            meta="Novo"
          />
          <FeedItem
            icon={<IconStar />}
            title="Marco atingido"
            subtitle="Comunicação espontânea"
            meta="Ontem"
          />
        </div>
      </div>

      {/* Guardian Aura */}
      <div className="pressable" style={{
        background: "#F5EDE6", borderRadius: 18,
        padding: "15px 16px", display: "flex",
        alignItems: "center", gap: 13,
        border: "1px solid rgba(232,213,196,0.6)",
      }}>
        <div style={{
          width: 38, height: 38, borderRadius: 12,
          background: "#8DA399", display: "flex",
          alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <IconSpark />
        </div>
        <p style={{
          margin: 0, flex: 1,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13.5, color: "#6F7A85",
        }}>
          Deseja prever crises sensorial?{" "}
          <span style={{ color: "#8DA399", fontWeight: 500 }}>
            Descubra o Guardian Aura.
          </span>
        </p>
      </div>

    </div>
  );
}
