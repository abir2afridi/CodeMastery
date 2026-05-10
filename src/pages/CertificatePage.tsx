import { Link, Navigate, useParams } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import { tracks } from "@/lib/curriculum";
import { CertificateCanvas } from "@/components/certificate/CertificateCanvas";
import { Button } from "@/components/ui/button";
import { Download, FileImage, ArrowLeft } from "lucide-react";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CertificatePage = () => {
  const { certId } = useParams<{ certId: string }>();
  const { progress } = useProgress();
  const ref = useRef<HTMLDivElement>(null);

  if (!progress) return <Navigate to="/" replace />;

  // Find which track issued this cert
  const found = Object.entries(progress.tracks).find(([, tp]) => tp.certificateId === certId);
  if (!found || !certId) return (
    <div className="container py-20 text-center">
      <p className="text-muted-foreground mb-4">Certificate not found.</p>
      <Button asChild><Link to="/profile">Back to profile</Link></Button>
    </div>
  );
  const [trackId, tp] = found;
  const track = tracks.find((t) => t.id === trackId)!;

  // average score
  const scores = Object.values(tp.chapters).map((c) => c.quizScore || 0).filter((s) => s > 0);
  const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 100;

  const downloadPNG = async () => {
    if (!ref.current) return;
    const canvas = await html2canvas(ref.current, { scale: 2, backgroundColor: "#0A0E1A" });
    const link = document.createElement("a");
    link.download = `codemastery-${trackId}-${certId}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
  const downloadPDF = async () => {
    if (!ref.current) return;
    const canvas = await html2canvas(ref.current, { scale: 2, backgroundColor: "#0A0E1A" });
    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1200, 850] });
    pdf.addImage(img, "PNG", 0, 0, 1200, 850);
    pdf.save(`codemastery-${trackId}-${certId}.pdf`);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
          <Button asChild variant="ghost" size="sm"><Link to="/profile"><ArrowLeft className="h-4 w-4 mr-1" /> Back to profile</Link></Button>
          <div className="flex gap-2">
            <Button onClick={downloadPNG} variant="outline"><FileImage className="h-4 w-4 mr-1" /> PNG</Button>
            <Button onClick={downloadPDF}><Download className="h-4 w-4 mr-1" /> PDF</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
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
    </div>
  );
};

export default CertificatePage;
