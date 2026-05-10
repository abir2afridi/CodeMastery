import { Link, Navigate, useParams } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import { tracks } from "@/lib/curriculum";
import { CertificateCanvas } from "@/components/certificate/CertificateCanvas";
import { CyberpunkButton } from "@/components/ui/cyberpunk";
import { Download, FileImage, ArrowLeft, ShieldCheck, Share2 } from "lucide-react";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { motion } from "framer-motion";

const CertificatePage = () => {
  const { certId } = useParams<{ certId: string }>();
  const { progress } = useProgress();
  const ref = useRef<HTMLDivElement>(null);

  if (!progress) return <Navigate to="/" replace />;

  // Find which track issued this cert
  const found = Object.entries(progress.tracks).find(([, tp]) => tp.certificateId === certId);
  if (!found || !certId) return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center space-y-6">
        <p className="text-foreground/40 font-black tracking-widest uppercase">CERTIFICATE_NOT_FOUND</p>
        <CyberpunkButton asChild variant="outline">
          <Link to="/profile"><ArrowLeft className="h-4 w-4 mr-2" /> BACK_TO_PROFILE</Link>
        </CyberpunkButton>
      </div>
    </div>
  );
  const [trackId, tp] = found;
  const track = tracks.find((t) => t.id === trackId)!;

  // average score
  const scores = Object.values(tp.chapters).map((c) => c.quizScore || 0).filter((s) => s > 0);
  const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 100;

  const downloadPNG = async () => {
    if (!ref.current) return;
    const canvas = await html2canvas(ref.current, { scale: 2, backgroundColor: "#0A0A0A" });
    const link = document.createElement("a");
    link.download = `codemastery-${trackId}-${certId}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
  const downloadPDF = async () => {
    if (!ref.current) return;
    const canvas = await html2canvas(ref.current, { scale: 2, backgroundColor: "#0A0A0A" });
    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1200, 850] });
    pdf.addImage(img, "PNG", 0, 0, 1200, 850);
    pdf.save(`codemastery-${trackId}-${certId}.pdf`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.05),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto p-6 md:p-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-primary" />
              <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">VERIFICATION_STATION</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              CREDENTIAL <span className="text-primary">VAULT</span>
            </h1>
            <p className="text-[11px] font-black tracking-[0.2em] text-foreground/40 uppercase">
              CERTIFICATE_ID: {certId} // ISSUED_TO: {progress.name.toUpperCase()}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
             <CyberpunkButton asChild variant="outline" className="h-12">
               <Link to="/profile"><ArrowLeft className="h-4 w-4 mr-2" /> EXIT_TO_PROFILE</Link>
             </CyberpunkButton>
             <div className="h-12 w-[1px] bg-foreground/10 hidden md:block" />
             <CyberpunkButton onClick={downloadPNG} variant="outline" className="h-12">
               <FileImage className="h-4 w-4 mr-2" /> EXPORT_PNG
             </CyberpunkButton>
             <CyberpunkButton onClick={downloadPDF} className="h-12">
               <Download className="h-4 w-4 mr-2" /> GENERATE_PDF
             </CyberpunkButton>
          </div>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          {/* DECORATIVE CORNERS FOR THE VIEWPORT */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary opacity-50" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary opacity-50" />
          
          <div className="overflow-x-auto bg-black/40 border border-foreground/10 p-4 backdrop-blur-sm shadow-2xl">
            <div className="min-w-[1200px]">
              <CertificateCanvas
                ref={ref}
                name={progress.name}
                trackTitle={track.title}
                certificateId={certId}
                issuedAt={tp.certificateIssuedAt || new Date().toISOString()}
                score={avg}
              />
            </div>
          </div>
          
          {/* STATUS OVERLAY */}
          <div className="mt-8 flex flex-wrap gap-8 items-center justify-between opacity-40">
             <div className="flex items-center gap-4">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-foreground">AUTHENTICITY_VERIFIED_BY_CODEMASTERY_CORE</span>
             </div>
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-primary animate-pulse" />
                   <span className="text-[9px] font-black tracking-[0.2em] uppercase">SYSTEM_LINK: ACTIVE</span>
                </div>
                <div className="flex items-center gap-2">
                   <Share2 className="h-3 w-3" />
                   <span className="text-[9px] font-black tracking-[0.2em] uppercase cursor-pointer hover:text-primary transition-colors">SHARE_CREDENTIAL</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatePage;
