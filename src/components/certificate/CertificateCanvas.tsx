import { forwardRef } from "react";
import { Shield, Zap, Activity, Cpu, Globe, Lock } from "lucide-react";

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
      className="relative mx-auto overflow-hidden bg-[#0A0A0A]"
      style={{
        width: 1200,
        height: 850,
        fontFamily: "'Outfit', sans-serif",
        color: "#FFFFFF",
      }}
    >
      {/* BACKGROUND TEXTURE & SCANLINES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_76%,transparent_77%)] bg-[size:100%_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.05),transparent_70%)]" />
      </div>

      {/* INDUSTRIAL BORDER SYSTEM */}
      <div className="absolute inset-8 border-4 border-white/10 z-10" />
      <div className="absolute inset-12 border border-white/5 z-10" />
      
      {/* CORNER ACCENTS */}
      <div className="absolute top-8 left-8 w-32 h-32 border-t-8 border-l-8 border-neon-blue z-20" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-b-8 border-r-8 border-neon-blue z-20" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t-8 border-r-8 border-crimson z-20" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-8 border-l-8 border-crimson z-20" />

      {/* TOP HEADER BAR */}
      <div className="absolute top-8 left-0 right-0 h-16 border-b-2 border-white/10 flex items-center justify-between px-20 z-20">
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-white flex items-center justify-center">
            <Cpu className="h-6 w-6 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black tracking-[0.4em] opacity-40">PROTOCOL_V4.2</span>
            <span className="text-sm font-black tracking-[0.2em] text-neon-blue">CODEMASTERY_TERMINAL</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-black tracking-[0.3em] opacity-30">SECURITY_CLEARANCE</span>
            <span className="text-[11px] font-black tracking-[0.1em] text-crimson">LEVEL_MAXIMUM_ACCESS</span>
          </div>
          <div className="w-12 h-12 border-2 border-white/10 flex items-center justify-center">
             <Shield className="h-5 w-5 text-white/40" />
          </div>
        </div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center p-32 text-center z-10">
        {/* STATUS BADGE */}
        <div className="mb-12 flex items-center gap-4 px-6 py-2 border-2 border-neon-blue bg-neon-blue/10">
          <Zap className="h-5 w-5 text-neon-blue animate-pulse" />
          <span className="text-[12px] font-black tracking-[0.5em] text-neon-blue uppercase">VERIFIED_COMPLETION_SIGNAL</span>
        </div>

        <div className="space-y-4 mb-16">
          <p className="text-[14px] font-black tracking-[0.4em] text-white/20 uppercase">SUBJECT_IDENTIFICATION</p>
          <h1 className="text-[9rem] font-black uppercase tracking-tighter leading-none text-white mix-blend-difference drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            {name}
          </h1>
        </div>

        <div className="max-w-3xl space-y-8">
          <div className="flex items-center gap-8">
            <div className="h-[2px] flex-1 bg-white/10" />
            <p className="text-xl font-black tracking-[0.2em] text-white/60 uppercase">HAS SUCCESSFULLY ACQUIRED THE</p>
            <div className="h-[2px] flex-1 bg-white/10" />
          </div>

          <div className="space-y-2">
             <h2 className="text-6xl font-black tracking-tighter uppercase text-neon-blue">
               {trackTitle} <span className="text-white">MASTERY</span>
             </h2>
             <p className="text-[12px] font-black tracking-[0.6em] text-white/20 uppercase">NODE_GROUP: {trackTitle.toUpperCase()}_INFRASTRUCTURE</p>
          </div>

          {score !== undefined && (
            <div className="inline-flex items-center gap-12 px-12 py-6 border-2 border-white/5 bg-white/[0.02]">
              <div className="text-left">
                <p className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase mb-1">AVERAGE_SCORE</p>
                <p className="text-4xl font-black text-neon-blue">{score}%</p>
              </div>
              <div className="h-12 w-[1px] bg-white/10" />
              <div className="text-left">
                <p className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase mb-1">PARITY_STATUS</p>
                <p className="text-4xl font-black text-white">NOMINAL</p>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER METADATA */}
        <div className="absolute bottom-20 left-20 right-20 flex justify-between items-end border-t-2 border-white/10 pt-12">
          <div className="flex gap-16">
            <div className="space-y-2">
              <p className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase">ISSUANCE_DATE</p>
              <p className="text-[13px] font-black tracking-[0.1em] uppercase">{date}</p>
            </div>
            <div className="space-y-2">
              <p className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase">NETWORK_ID</p>
              <p className="text-[13px] font-black tracking-[0.1em] uppercase font-mono">{certificateId}</p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
             <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-white/20" />
                <span className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase">WWW.CODEMASTERY.TERMINAL</span>
             </div>
             <div className="flex -space-x-1">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 border border-white/10 flex items-center justify-center bg-[#0A0A0A]">
                    <Activity className="h-3 w-3 text-white/20" />
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* SECURE STAMP */}
        <div className="absolute bottom-40 right-40 rotate-12 opacity-20 pointer-events-none">
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Hexagonal/Octagonal Border using clip-path or absolute borders */}
            <div className="absolute inset-0 border-8 border-crimson" style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }} />
            <div className="absolute inset-4 border-2 border-crimson/30" style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }} />
            
            <div className="flex flex-col items-center justify-center text-crimson font-black text-center">
              <span className="text-[8px] tracking-[0.4em] mb-2 uppercase">ENCRYPTED</span>
              <Lock className="h-12 w-12 mb-2" />
              <span className="text-[14px] tracking-[0.2em] leading-none uppercase">AUTHENTIC<br/>SECURE</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* BOTTOM DECORATIVE STRIP */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-neon-blue via-crimson to-neon-blue opacity-50" />
    </div>
  );
});

CertificateCanvas.displayName = "CertificateCanvas";

