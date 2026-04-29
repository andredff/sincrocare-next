"use client";

import { IconPlus } from "../Icons";

interface Professional {
  name: string;
  role: string;
  status: string;
  initials: string;
  color: string;
  lastContact: string;
}

const professionals: Professional[] = [
  { name: "Dra. Ana Lima", role: "Neurologista Pediátrica", status: "Ativa", initials: "AL", color: "#8DA399", lastContact: "Há 3 dias" },
  { name: "Dr. Marcos Silva", role: "Terapeuta ABA", status: "Ativo", initials: "MS", color: "#4A90D9", lastContact: "Hoje" },
  { name: "Júlia Ferreira", role: "Fonoaudióloga", status: "Ativa", initials: "JF", color: "#6DBFB8", lastContact: "Há 1 semana" },
  { name: "Prof. Carla Dias", role: "Professora AEE", status: "Ativa", initials: "CD", color: "#F4A261", lastContact: "Ontem" },
];

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div style={{
      width: 54, height: 54, borderRadius: "50%",
      background: color, flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 500, fontSize: 18, color: "white",
        letterSpacing: "-0.3px",
      }}>
        {initials}
      </span>
    </div>
  );
}

export function RedeScreen() {
  return (
    <div style={{ padding: "20px 20px 28px", display: "flex", flexDirection: "column", gap: 18 }}>

      <div>
        <h2 style={{
          margin: 0, fontFamily: "'Playfair Display', serif",
          fontWeight: 400, fontSize: 22, color: "#2F2F2F",
        }}>
          Rede de Cuidado
        </h2>
        <p style={{
          margin: "5px 0 0", fontFamily: "'DM Sans', sans-serif",
          fontSize: 13, color: "#6F7A85",
        }}>
          {professionals.length} profissionais conectados
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {professionals.map((pro, i) => (
          <div key={i} className="pressable" style={{
            display: "flex", alignItems: "center", gap: 14,
            padding: "15px 16px", background: "white",
            borderRadius: 18, border: "1px solid rgba(236,236,236,0.8)",
            boxShadow: "0px 2px 12px rgba(0,0,0,0.05)",
          }}>
            <Avatar initials={pro.initials} color={pro.color} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                margin: 0, fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500, fontSize: 14.5, color: "#2F2F2F",
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
              }}>
                {pro.name}
              </p>
              <p style={{
                margin: "3px 0", fontFamily: "'DM Sans', sans-serif",
                fontSize: 12.5, color: "#6F7A85",
              }}>
                {pro.role}
              </p>
              <p style={{
                margin: 0, fontFamily: "'DM Sans', sans-serif",
                fontSize: 11.5, color: "#A8B0B4",
              }}>
                Último contato: {pro.lastContact}
              </p>
            </div>
            <span style={{
              background: "#EBF1EE", color: "#6d8578",
              borderRadius: 999, padding: "4px 12px",
              fontSize: 12, fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif", flexShrink: 0,
            }}>
              {pro.status}
            </span>
          </div>
        ))}
      </div>

      {/* Add button */}
      <button className="pressable" style={{
        width: "100%", height: 56,
        background: "#8DA399", borderRadius: 18,
        border: "none", display: "flex",
        alignItems: "center", justifyContent: "center",
        gap: 8, cursor: "pointer",
        boxShadow: "0 6px 24px rgba(141,163,153,0.35)",
      }}>
        <IconPlus />
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500, fontSize: 15, color: "white",
        }}>
          Adicionar profissional
        </span>
      </button>

    </div>
  );
}
