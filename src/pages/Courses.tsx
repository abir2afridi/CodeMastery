import { Link } from "react-router-dom";
import { tracks } from "@/lib/curriculum";
import { useI18n } from "@/hooks/useI18n";
import { CyberpunkCard, CyberpunkBadge, CyberpunkButton } from "@/components/ui/cyberpunk";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";

const Courses = () => {
  const { t } = useI18n();
  const { progress } = useProgress();

  console.log('All tracks:', tracks);
  console.log('Track IDs:', tracks.map(t => t.id));

  return (
    <div className="min-h-screen bg-background p-8 md:p-12 lg:p-16 relative overflow-hidden">
      {/* Background Accents */}
      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        <header className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-[11px] font-black tracking-[0.4em] text-primary uppercase">
              {t("system.segmentIndex")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            {t("nav.languages")}
          </h1>
          <p className="text-muted-foreground uppercase text-xs tracking-[0.2em] font-black max-w-xl leading-relaxed">
            Select a neural uplink node to begin data ingestion. Each track is a verified core protocol for modern web architecture.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => {
            const trackProgress = progress?.tracks[track.id];
            const completed = trackProgress 
              ? Object.values(trackProgress.chapters).filter(c => c.status === "completed").length 
              : 0;
            const pct = Math.round((completed / track.chapters.length) * 100);

            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/learn/${track.id}`} className="group block h-full">
                  <CyberpunkCard 
                    className="h-full p-0 border-2 bg-foreground/[0.02] transition-all duration-300 relative overflow-hidden group-hover:bg-foreground/[0.04]"
                    style={{ 
                      borderColor: `${track.brandColor}66`,
                    }}
                    hover={true}
                  >
                    {/* Bold Side Accent */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2"
                      style={{ backgroundColor: track.brandColor }}
                    />

                    <div className="p-8 pl-10 space-y-8 relative z-10">
                      <div className="flex justify-between items-start">
                        <div 
                          className="w-20 h-20 flex items-center justify-center relative border-4 transition-transform duration-500 group-hover:scale-105"
                          style={{ 
                            backgroundColor: 'transparent',
                            borderColor: track.brandColor,
                          }}
                        >
                          <div 
                            className="absolute inset-0 opacity-10"
                            style={{ backgroundColor: track.brandColor }}
                          />
                          <img 
                            src={track.icon} 
                            alt={track.title} 
                            className="w-12 h-12 relative z-10"
                          />
                        </div>
                        <CyberpunkBadge 
                          variant="status"
                          style={{ 
                            backgroundColor: `${track.brandColor}22`,
                            color: track.brandColor,
                            borderColor: `${track.brandColor}44`
                          }}
                        >
                          {pct > 0 ? `${pct}% SYNCED` : "READY"}
                        </CyberpunkBadge>
                      </div>
 
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                           <h2 
                             className="text-4xl font-black uppercase tracking-tighter"
                             style={{ color: track.brandColor }}
                           >
                            {track.title}
                          </h2>
                        </div>
                        <p className="text-xs font-black uppercase tracking-widest text-foreground/40 leading-relaxed">
                          {track.tagline}
                        </p>
                      </div>
 
                      <div className="pt-6 border-t border-foreground/10 grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <span className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.3em]">CH_NODES</span>
                          <p className="text-sm font-mono font-black">{track.chapters.length} UNITS</p>
                        </div>
                        <div className="space-y-1 text-right">
                          <span className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.3em]">EST_SYNC</span>
                          <p className="text-sm font-mono font-black">{track.estimatedHours} HRS</p>
                        </div>
                      </div>
 
                      <CyberpunkButton 
                        variant="outline" 
                        className="w-full mt-4 border-2"
                        style={{ 
                          borderColor: track.brandColor,
                          color: track.brandColor 
                        }}
                      >
                        <span className="font-black tracking-widest uppercase">{t("dashboard.initiateLink")}</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </CyberpunkButton>
                    </div>
 
                    {/* Background ID Tag */}
                    <div className="absolute -bottom-4 -right-4 text-[100px] font-black text-foreground/[0.03] select-none uppercase pointer-events-none">
                      {track.id.substring(0, 2)}
                    </div>
                  </CyberpunkCard>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
