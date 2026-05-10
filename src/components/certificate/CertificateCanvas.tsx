import { forwardRef } from "react";
import { Award } from "lucide-react";

interface Props {
  name: string;
  trackTitle: string;
  certificateId: string;
  issuedAt: string;
  score?: number;
}

export const CertificateCanvas = forwardRef<HTMLDivElement, Props>(({ name, trackTitle, certificateId, issuedAt, score }, ref) => {
  const date = new Date(issuedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <div
      ref={ref}
      className="relative mx-auto"
      style={{
        width: 1200,
        height: 850,
        background: "linear-gradient(135deg, #0A0E1A 0%, #1a1f3a 100%)",
        backgroundImage: "linear-gradient(135deg, #0A0E1A 0%, #1a1f3a 100%), linear-gradient(rgba(30,42,69,0.4) 1px,transparent 1px), linear-gradient(90deg,rgba(30,42,69,0.4) 1px,transparent 1px)",
        backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        fontFamily: "'Inter', sans-serif",
        color: "#E2E8F0",
      }}
    >
      {/* Gold border */}
      <div
        className="absolute inset-6"
        style={{
          border: "3px solid #F59E0B",
          boxShadow: "inset 0 0 60px rgba(245,158,11,0.25), 0 0 40px rgba(245,158,11,0.15)",
          borderRadius: 16,
        }}
      />
      <div className="absolute inset-10" style={{ border: "1px solid rgba(245,158,11,0.4)", borderRadius: 12 }} />

      <div className="relative h-full flex flex-col items-center justify-center p-20 text-center">
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-10 w-10" style={{ color: "#F59E0B" }} />
          <span className="text-2xl font-bold tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00D4FF" }}>CODEMASTERY</span>
        </div>

        <div className="w-32 h-px mb-6" style={{ background: "linear-gradient(90deg, transparent, #F59E0B, transparent)" }} />

        <p className="text-sm tracking-[0.4em] uppercase mb-2" style={{ color: "#F59E0B" }}>Certificate of Mastery</p>
        <p className="text-base mb-6" style={{ color: "#94A3B8" }}>This is to certify that</p>

        <h1 className="text-6xl mb-6" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#FFFFFF" }}>{name}</h1>

        <p className="text-base mb-2" style={{ color: "#94A3B8" }}>has successfully completed the</p>
        <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00D4FF" }}>{trackTitle} Mastery Track</h2>
        {score !== undefined && (
          <p className="text-base mb-8" style={{ color: "#E2E8F0" }}>with an average score of <span style={{ color: "#10B981", fontWeight: 700 }}>{score}%</span></p>
        )}

        <div className="w-32 h-px mb-6" style={{ background: "linear-gradient(90deg, transparent, #F59E0B, transparent)" }} />

        <p className="text-sm" style={{ color: "#94A3B8" }}>Issued on {date}</p>

        <div className="absolute bottom-12 right-16 text-right">
          <p className="text-xs font-mono" style={{ color: "#64748B" }}>Certificate ID</p>
          <p className="text-xs font-mono" style={{ color: "#94A3B8" }}>{certificateId}</p>
        </div>
        <div className="absolute bottom-12 left-16 text-left">
          <p className="text-xs font-mono" style={{ color: "#64748B" }}>Verified by</p>
          <p className="text-xs font-mono" style={{ color: "#94A3B8" }}>codemastery.app</p>
        </div>
      </div>
    </div>
  );
});

CertificateCanvas.displayName = "CertificateCanvas";
