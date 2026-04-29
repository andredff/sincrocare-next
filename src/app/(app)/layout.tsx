import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        maxWidth: 430,
        margin: "0 auto",
        background: "#F3F9F7",
        overflow: "hidden",
      }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
        }}
        className="no-scrollbar"
      >
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
