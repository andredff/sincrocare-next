"use client";

import { IconCalendar } from "../Icons";

type EventStatus = "done" | "soon" | "later";

interface RoutineEvent {
  time: string;
  title: string;
  subtitle: string;
  status: EventStatus;
}

const events: RoutineEvent[] = [
  { time: "07:00", title: "Acordar e higiene", subtitle: "Escovação e banho com rotina visual", status: "done" },
  { time: "08:00", title: "Medicação matinal", subtitle: "Risperidona 0,5mg com água", status: "done" },
  { time: "08:30", title: "Café da manhã", subtitle: "Sem glúten — frutas e ovos", status: "done" },
  { time: "09:00", title: "Escola", subtitle: "Escola Caminho do Saber — sala AEE", status: "soon" },
  { time: "12:30", title: "Almoço", subtitle: "Cardápio adaptado — protocolo ativo", status: "later" },
  { time: "14:00", title: "Terapia Fonoaudiologia", subtitle: "Sessão com Ana — 60min", status: "later" },
  { time: "16:30", title: "Aula de Música", subtitle: "Centro Cultural — 45min", status: "later" },
  { time: "20:00", title: "Medicação noturna", subtitle: "Risperidona 0,5mg com jantar", status: "later" },
];

const statusMeta: Record<EventStatus, { label: string; bg: string; color: string }> = {
  done:  { label: "Concluído", bg: "#EBF1EE", color: "#6d8578" },
  soon:  { label: "Em breve",  bg: "#EAF0FB", color: "#4A90D9" },
  later: { label: "Mais tarde", bg: "rgba(236,236,236,0.8)", color: "#A8B0B4" },
};

export function RotinaScreen() {
  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long", day: "numeric", month: "long",
  });

  return (
    <div style={{ padding: "20px 20px 28px" }}>

      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{
          margin: 0,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 400, fontSize: 22, color: "#2F2F2F",
        }}>
          Rotina de hoje
        </h2>
        <p style={{
          margin: "5px 0 0",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13, color: "#6F7A85",
          textTransform: "capitalize",
        }}>
          {today}
        </p>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: 32 }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute", left: 10, top: 16, bottom: 16,
          width: 1.5, background: "rgba(236,236,236,1)", borderRadius: 1,
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {events.map((ev, i) => {
            const isDone = ev.status === "done";
            const meta = statusMeta[ev.status];
            return (
              <div key={i} style={{ display: "flex", gap: 16, paddingBottom: 12, position: "relative" }}>
                {/* Circle */}
                <div style={{
                  position: "absolute", left: -32, top: 16,
                  width: 22, height: 22, borderRadius: "50%",
                  background: isDone ? "#8DA399" : "white",
                  border: `1.5px solid ${isDone ? "#8DA399" : "#ECECEC"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  zIndex: 1, flexShrink: 0,
                }}>
                  {isDone && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5.5l2.5 2L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>

                {/* Card */}
                <div style={{
                  flex: 1, background: "white", borderRadius: 16,
                  padding: "13px 15px",
                  border: "1px solid rgba(236,236,236,0.8)",
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.04)",
                  opacity: isDone ? 0.65 : 1,
                  transition: "opacity 150ms",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12, color: "#A8B0B4",
                    }}>
                      {ev.time}
                    </span>
                    <span style={{
                      background: meta.bg, color: meta.color,
                      borderRadius: 999, padding: "2px 9px",
                      fontSize: 11, fontWeight: 500,
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      {meta.label}
                    </span>
                  </div>
                  <p style={{
                    margin: 0,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500, fontSize: 14.5,
                    color: "#2F2F2F",
                    textDecoration: isDone ? "line-through" : "none",
                  }}>
                    {ev.title}
                  </p>
                  <p style={{
                    margin: "4px 0 0",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12.5, color: "#6F7A85",
                  }}>
                    {ev.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
