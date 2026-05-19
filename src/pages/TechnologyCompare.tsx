import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, X, ChevronRight, Star, Users, Calendar, Zap, Award, Shield, BarChart3 } from "lucide-react";
import { CyberpunkCard, CyberpunkBadge } from "@/components/ui/cyberpunk";
import { getTechnology, technologies } from "@/lib/technology-encyclopedia";

const categoryColors: Record<string, string> = {
  "Frontend": "#00D4FF",
  "Backend": "#00FF41",
  "Databases": "#FFB700",
  "Data Science": "#FF6B35",
  "AI & ML": "#B026FF",
  "DevOps": "#FF3B30",
  "Security": "#FF2D55",
  "Computer Science": "#5E5CE6",
  "Hardware & IoT": "#00C7BE",
  "Productivity": "#FF9500",
};

function ComparisonRow({ label, left, right, color }: { label: string; left: React.ReactNode; right: React.ReactNode; color?: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-foreground/5">
      <div className="text-[9px] font-black tracking-widest text-foreground/30 uppercase self-center">{label}</div>
      <div className="text-sm text-foreground/80 self-center">{left}</div>
      <div className="text-sm text-foreground/80 self-center">{right}</div>
    </div>
  );
}

function BoolIcon({ val }: { val: boolean }) {
  return val ? <Check className="w-4 h-4 text-primary" /> : <X className="w-4 h-4 text-red-500" />;
}

const TechnologyCompare = () => {
  const { slug1, slug2 } = useParams<{ slug1: string; slug2: string }>();
  const tech1 = slug1 ? getTechnology(slug1) : undefined;
  const tech2 = slug2 ? getTechnology(slug2) : undefined;

  if (!tech1 || !tech2) return <Navigate to="/tech" replace />;
  const color1 = categoryColors[tech1.category] ?? "#00D4FF";
  const color2 = categoryColors[tech2.category] ?? "#00D4FF";
  const shareCategory = tech1.category === tech2.category;

  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-12 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
      />
      <div className="max-w-5xl mx-auto relative z-10 space-y-10">
        <Link to={`/tech/${tech1.slug}`} className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-foreground/40 hover:text-foreground transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>

        <header className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-[11px] font-black tracking-[0.4em] text-primary uppercase">TECHNOLOGY COMPARISON</span>
          </div>
          <div className="grid grid-cols-3 gap-6 items-center">
            <Link to={`/tech/${tech1.slug}`} className="group text-center">
              <div className="w-20 h-20 mx-auto border-4 flex items-center justify-center transition-transform group-hover:scale-105 mb-3" style={{ borderColor: `${color1}33`, backgroundColor: `${color1}11` }}>
                <img src={tech1.logo} alt="" className="w-12 h-12" />
              </div>
              <h1 className="text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">{tech1.name}</h1>
              <p className="text-[8px] font-black tracking-widest text-foreground/40 uppercase">{tech1.type}</p>
            </Link>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto border-2 border-primary/30 rounded-full flex items-center justify-center bg-primary/10">
                <span className="font-black text-primary">VS</span>
              </div>
            </div>
            <Link to={`/tech/${tech2.slug}`} className="group text-center">
              <div className="w-20 h-20 mx-auto border-4 flex items-center justify-center transition-transform group-hover:scale-105 mb-3" style={{ borderColor: `${color2}33`, backgroundColor: `${color2}11` }}>
                <img src={tech2.logo} alt="" className="w-12 h-12" />
              </div>
              <h1 className="text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">{tech2.name}</h1>
              <p className="text-[8px] font-black tracking-widest text-foreground/40 uppercase">{tech2.type}</p>
            </Link>
          </div>
        </header>

        <CyberpunkCard className="p-6 border-2 border-foreground/10">
          {/* Basic Info */}
          <ComparisonRow label="Category" left={tech1.category} right={tech2.category} />
          <ComparisonRow label="Subcategory" left={tech1.subcategory} right={tech2.subcategory} />
          <ComparisonRow label="Type" left={tech1.type} right={tech2.type} />
          <ComparisonRow label="Difficulty" left={<span className="capitalize">{tech1.difficulty}</span>} right={<span className="capitalize">{tech2.difficulty}</span>} />
          <ComparisonRow label="Organization" left={tech1.organization ?? "—"} right={tech2.organization ?? "—"} />
          <ComparisonRow label="Release" left={tech1.releaseDate ?? "—"} right={tech2.releaseDate ?? "—"} />
          <ComparisonRow label="Version" left={tech1.currentVersion ?? "—"} right={tech2.currentVersion ?? "—"} />
          <ComparisonRow label="License" left={tech1.license ?? "—"} right={tech2.license ?? "—"} />
          {tech1.programmingLanguage && tech2.programmingLanguage && (
            <ComparisonRow label="Language" left={tech1.programmingLanguage} right={tech2.programmingLanguage} />
          )}

          {/* Features */}
          <div className="py-3 border-b border-foreground/5">
            <span className="text-[9px] font-black tracking-widest text-foreground/30 uppercase">Description</span>
          </div>
          <ComparisonRow label="Overview" left={<span className="text-[11px] leading-relaxed">{tech1.description}</span>} right={<span className="text-[11px] leading-relaxed">{tech2.description}</span>} />
          <ComparisonRow label="Has Learning Track" left={<BoolIcon val={!!tech1.relatedTrackId} />} right={<BoolIcon val={!!tech2.relatedTrackId} />} />

          {/* Advantages */}
          <div className="py-3 border-b border-foreground/5">
            <span className="text-[9px] font-black tracking-widest text-foreground/30 uppercase">Advantages</span>
          </div>
          <ComparisonRow label="Count" left={`${tech1.advantages.length}`} right={`${tech2.advantages.length}`} />
          <ComparisonRow label="Top Advantage" left={tech1.advantages[0] ?? "—"} right={tech2.advantages[0] ?? "—"} />

          {/* Disadvantages */}
          <div className="py-3 border-b border-foreground/5">
            <span className="text-[9px] font-black tracking-widest text-foreground/30 uppercase">Disadvantages</span>
          </div>
          <ComparisonRow label="Count" left={`${tech1.disadvantages.length}`} right={`${tech2.disadvantages.length}`} />
          <ComparisonRow label="Top Disadvantage" left={tech1.disadvantages[0] ?? "—"} right={tech2.disadvantages[0] ?? "—"} />

          {/* Tags */}
          <div className="py-3 border-b border-foreground/5">
            <span className="text-[9px] font-black tracking-widest text-foreground/30 uppercase">Community & Ecosystem</span>
          </div>
          <ComparisonRow label="Total Tags" left={`${tech1.tags.length}`} right={`${tech2.tags.length}`} />
          <ComparisonRow label="Related Techs" left={`${tech1.relatedTechnologies.length}`} right={`${tech2.relatedTechnologies.length}`} />
          <ComparisonRow label="Alternatives" left={`${tech1.alternatives.length}`} right={`${tech2.alternatives.length}`} />

          {/* Companies */}
          {tech1.companiesUsing && tech2.companiesUsing && (
            <ComparisonRow label="Companies" left={tech1.companiesUsing.slice(0, 3).join(", ")} right={tech2.companiesUsing.slice(0, 3).join(", ")} />
          )}
        </CyberpunkCard>

        {/* More comparisons */}
        <div className="flex gap-4 justify-center">
          {[technologies].flatMap(Object.values).filter(t =>
            t.id !== tech1.id && t.id !== tech2.id && shareCategory ? t.category === tech1.category : true
          ).slice(0, 4).map(t => (
            <Link key={t.id} to={`/compare/${tech1.slug}/${t.slug}`} className="text-[9px] font-black tracking-widest uppercase text-foreground/40 hover:text-primary transition-colors px-3 py-1.5 border border-foreground/10 rounded">
              vs {t.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyCompare;
