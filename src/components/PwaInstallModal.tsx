"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Platform = "android" | "ios" | null;

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function PwaInstallModal() {
  const [platform, setPlatform] = useState<Platform>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show if already installed (running in standalone)
    if (window.matchMedia("(display-mode: standalone)").matches) return;
    // Don't show if dismissed before
    if (sessionStorage.getItem("pwa-install-dismissed")) return;

    const isIos =
      /iphone|ipad|ipod/i.test(navigator.userAgent) &&
      !(window.navigator as { standalone?: boolean }).standalone;

    const isAndroid = /android/i.test(navigator.userAgent);

    if (isIos) {
      // iOS doesn't fire beforeinstallprompt — show manual instructions
      const timer = setTimeout(() => {
        setPlatform("ios");
        setVisible(true);
      }, 2500);
      return () => clearTimeout(timer);
    }

    if (isAndroid || (!isIos && !isAndroid)) {
      // Capture the native install prompt (Chrome/Edge/Android)
      const handler = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e as BeforeInstallPromptEvent);
        setPlatform("android");
        setVisible(true);
      };
      window.addEventListener("beforeinstallprompt", handler);
      return () => window.removeEventListener("beforeinstallprompt", handler);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem("pwa-install-dismissed", "1");
    setVisible(false);
  }

  async function install() {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setVisible(false);
    setDeferredPrompt(null);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.35)",
          zIndex: 50,
          animation: "fadeIn 200ms ease",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          bottom: 0, left: 0, right: 0,
          zIndex: 51,
          maxWidth: 430,
          margin: "0 auto",
          background: "white",
          borderRadius: "24px 24px 0 0",
          padding: "28px 24px 40px",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.15)",
          animation: "slideUp 280ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Handle bar */}
        <div style={{
          width: 36, height: 4, borderRadius: 2,
          background: "#ECECEC", margin: "0 auto 24px",
        }} />

        {/* Logo + title */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 16,
            background: "#F9F9F7", border: "1px solid #ECECEC",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <Image src="/logo.png" alt="SincroCare" width={40} height={40} style={{ objectFit: "contain" }} />
          </div>
          <div>
            <p style={{
              margin: 0,
              fontFamily: "'Playfair Display', serif",
              fontSize: 20, fontWeight: 500, color: "#2F2F2F",
            }}>
              SincroCare
            </p>
            <p style={{
              margin: "2px 0 0",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, color: "#6F7A85",
            }}>
              Juntos, a cada passo.
            </p>
          </div>
        </div>

        <p style={{
          margin: "0 0 24px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14.5, color: "#6F7A85", lineHeight: 1.5,
        }}>
          Instale o SincroCare na sua tela inicial para acessar rapidamente e usar offline.
        </p>

        {platform === "android" && (
          <button
            onClick={install}
            style={{
              width: "100%", height: 56,
              background: "#8DA399", borderRadius: 16,
              border: "none", cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16, fontWeight: 500, color: "white",
              boxShadow: "0 6px 24px rgba(141,163,153,0.40)",
              marginBottom: 12,
            }}
          >
            Instalar app
          </button>
        )}

        {platform === "ios" && (
          <div style={{
            background: "#F9F9F7", borderRadius: 16,
            padding: "16px 18px", marginBottom: 16,
            border: "1px solid rgba(236,236,236,0.8)",
          }}>
            <p style={{
              margin: "0 0 14px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, fontWeight: 500, color: "#2F2F2F",
            }}>
              Como instalar no iPhone:
            </p>
            {[
              { step: "1", text: "Toque no botão Compartilhar", icon: IosShareIcon },
              { step: "2", text: 'Role e toque em "Adicionar à Tela de Início"', icon: IosPlusIcon },
              { step: "3", text: 'Toque em "Adicionar" no canto superior', icon: IosCheckIcon },
            ].map(({ step, text, icon: Icon }) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10,
                  background: "#EBF1EE", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon />
                </div>
                <p style={{
                  margin: 0, fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13.5, color: "#2F2F2F",
                }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={dismiss}
          style={{
            width: "100%", height: 48,
            background: "transparent", borderRadius: 14,
            border: "1.5px solid #ECECEC", cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, color: "#6F7A85",
          }}
        >
          Agora não
        </button>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
      `}</style>
    </>
  );
}

function IosShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" stroke="#8DA399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IosPlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="#8DA399" strokeWidth="1.8" />
      <path d="M12 8v8M8 12h8" stroke="#8DA399" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IosCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17l-5-5" stroke="#8DA399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
