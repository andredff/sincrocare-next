"use client";

import Image from "next/image";
import { IconEdit, IconArrow, IconLock, IconTea, IconSchool, IconAlergy, IconPill, IconChevron, IconCake, IconEditSmall } from "../Icons";

function InfoRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "4px 0" }}>
      <div style={{ flexShrink: 0, opacity: 0.7 }}>{icon}</div>
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 14, color: "#2F2F2F",
      }}>
        {label}
      </span>
    </div>
  );
}

function HealthRow({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="pressable" style={{
      display: "flex", alignItems: "center", gap: 14,
      padding: "13px 16px", background: "white",
      borderRadius: 16, border: "1px solid rgba(236,236,236,0.8)",
      boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: "#F9F9F7", border: "1px solid rgba(236,236,236,0.8)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          margin: 0, fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500, fontSize: 14, color: "#2F2F2F",
        }}>
          {title}
        </p>
        <p style={{
          margin: "2px 0 0", fontFamily: "'DM Sans', sans-serif",
          fontSize: 12.5, color: "#6F7A85",
        }}>
          {subtitle}
        </p>
      </div>
      <IconChevron />
    </div>
  );
}

export function CriancaScreen() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>

      {/* Child photo */}
      <div style={{
        height: 220, position: "relative",
        background: "#E8D5C4", overflow: "hidden",
      }}>
        <Image
          src="/pedro.jpeg"
          alt="Pedro Santos"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          sizes="430px"
          priority
        />
      </div>

      <div style={{ padding: "20px 20px 28px", display: "flex", flexDirection: "column", gap: 20 }}>

        {/* Name + edit */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <h1 style={{
              margin: 0, fontFamily: "'Playfair Display', serif",
              fontWeight: 400, fontSize: 26, color: "#2F2F2F",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              Pedro Santos{" "}
              <button style={{ background: "none", border: "none", padding: 0, cursor: "pointer", lineHeight: 0 }}>
                <IconEdit />
              </button>
            </h1>
          </div>
        </div>

        {/* Info rows */}
        <div style={{
          background: "white", borderRadius: 18,
          padding: "16px 18px", display: "flex", flexDirection: "column", gap: 12,
          border: "1px solid rgba(236,236,236,0.8)",
          boxShadow: "0px 2px 12px rgba(0,0,0,0.05)",
        }}>
          <InfoRow icon={<IconCake />} label="Nascimento: 12/03/2018" />
          <div style={{ height: 1, background: "rgba(236,236,236,0.8)" }} />
          <InfoRow icon={<IconTea />} label="Grau de Suporte TEA: 2 (Moderado)" />
          <div style={{ height: 1, background: "rgba(236,236,236,0.8)" }} />
          <InfoRow icon={<IconSchool />} label="Escola: Escola Caminho do Saber" />
          <div style={{ height: 1, background: "rgba(236,236,236,0.8)" }} />
          <InfoRow icon={<IconLock />} label="Protegido por Criptografia SincroCare" />
        </div>

        {/* CTA Manejo de Crise */}
        <button className="pressable" style={{
          width: "100%", height: 70,
          background: "#8DA399", borderRadius: 18,
          border: "none", display: "flex",
          alignItems: "center", justifyContent: "space-between",
          padding: "0 20px", cursor: "pointer",
          boxShadow: "0 6px 28px rgba(141,163,153,0.40)",
        }}>
          <div style={{ textAlign: "left" }}>
            <p style={{
              margin: 0, color: "rgba(255,255,255,0.75)",
              fontSize: 12, fontFamily: "'DM Sans', sans-serif",
            }}>
              O que fazer agora?
            </p>
            <p style={{
              margin: "3px 0 0", color: "white",
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic", fontSize: 18, fontWeight: 500,
            }}>
              Manejo de Crise de Pedro
            </p>
          </div>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "rgba(255,255,255,0.22)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <IconArrow />
          </div>
        </button>

        {/* Protocolo de Manejo */}
        <div className="pressable" style={{
          background: "#F5EDE6", borderRadius: 18,
          padding: "16px", display: "flex",
          alignItems: "center", gap: 14,
          border: "1px solid rgba(232,213,196,0.5)",
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 14,
            background: "#E8D5C4", display: "flex",
            alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#8B6343" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{
              margin: 0, fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500, fontSize: 14.5, color: "#2F2F2F",
            }}>
              Protocolo de Manejo
            </p>
            <p style={{
              margin: "2px 0 0", fontFamily: "'DM Sans', sans-serif",
              fontSize: 12.5, color: "#6F7A85",
            }}>
              Ajustar o que fazer em crises
            </p>
          </div>
          <button style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
            <IconEditSmall />
          </button>
        </div>

        {/* Saúde Manual */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div>
              <p style={{
                margin: 0, fontFamily: "'Playfair Display', serif",
                fontSize: 18, fontWeight: 400, color: "#2F2F2F",
              }}>
                Saúde Manual
              </p>
              <p style={{
                margin: "2px 0 0", fontFamily: "'DM Sans', sans-serif",
                fontSize: 12.5, color: "#6F7A85",
              }}>
                Medicamentos e alergias
              </p>
            </div>
            <button style={{
              background: "none", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 4,
              fontFamily: "'DM Sans', sans-serif", fontSize: 13,
              color: "#6F7A85",
            }}>
              <IconEditSmall /> Editar
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <HealthRow
              icon={<IconPill color="#8DA399" />}
              title="Sertralina - 20mg às 14:00"
              subtitle="Uso diário"
            />
            <HealthRow
              icon={<IconAlergy />}
              title="Alergia: Amendoim"
              subtitle="Atenção: Reação grave"
            />
          </div>
        </div>

        {/* Guardian Aura hint */}
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "0 4px",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#8DA399" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p style={{
            margin: 0, fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, color: "#6F7A85",
          }}>
            Deseja prever crises sensorial?{" "}
            <span style={{ color: "#8DA399", fontWeight: 500 }}>Descubra o Guardian Aura.</span>
          </p>
        </div>

      </div>
    </div>
  );
}
