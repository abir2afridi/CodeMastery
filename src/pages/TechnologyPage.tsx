import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Star, Code2, GitBranch, Globe, Users, Calendar, Award, Shield, Zap, AlertTriangle, ThumbsUp, ThumbsDown, ExternalLink, Github, Layers, Cpu, Server, Database, BarChart3, Brain, Cloud, Layout, Terminal, BookMarked, ChevronRight, Bookmark } from "lucide-react";
import { CyberpunkCard, CyberpunkBadge, CyberpunkButton } from "@/components/ui/cyberpunk";
import { cn } from "@/lib/utils";
import { getTechnology, technologies, getTechnologiesByCategory } from "@/lib/technology-encyclopedia";
import { enrichedTracks } from "@/lib/curriculum";
import type { TechnologyEntry } from "@/lib/technology-encyclopedia";
import { isBookmarked, toggleBookmark } from "@/lib/bookmarks";

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

const categoryIcons: Record<string, typeof Code2> = {
  "Frontend": Layout,
  "Backend": Server,
  "Databases": Database,
  "Data Science": BarChart3,
  "AI & ML": Brain,
  "DevOps": Cloud,
  "Security": Shield,
  "Computer Science": Cpu,
  "Hardware & IoT": Terminal,
  "Productivity": BookOpen,
};

const categoryLabels: Record<string, string> = {
  "Frontend": "Frontend Development",
  "Backend": "Backend Development",
  "Databases": "Databases & Data Storage",
  "Data Science": "Data Science & Analytics",
  "AI & ML": "AI & Machine Learning",
  "DevOps": "DevOps & Cloud",
  "Security": "Cybersecurity",
  "Computer Science": "Computer Science & DSA",
  "Hardware & IoT": "Hardware & IoT",
  "Productivity": "Productivity Tools",
};

function Section({ title, icon: Icon, children, color }: { title: string; icon?: typeof Code2; children: React.ReactNode; color?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3 pb-2 border-b border-foreground/10">
        {Icon && <Icon className="w-4 h-4" style={{ color }} />}
        <h2 className="text-lg font-black uppercase tracking-tight">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

function Badge({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="inline-flex items-center text-[9px] font-black tracking-wider uppercase px-2 py-1 rounded border" style={{ borderColor: `${color ?? "#888"}33`, backgroundColor: `${color ?? "#888"}11`, color: color ?? "#888" }}>
      {children}
    </span>
  );
}

const TechnologyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tech = slug ? getTechnology(slug) : undefined;

  if (!tech) return <Navigate to="/tech" replace />;

  const [bookmarked, setBookmarked] = useState(false);
  useEffect(() => { setBookmarked(isBookmarked(tech.id)); }, [tech.id]);
  const handleBookmark = () => { setBookmarked(toggleBookmark(tech.id)); };

  const color = categoryColors[tech.category] ?? "#00D4FF";
  const CatIcon = categoryIcons[tech.category] ?? Code2;
  const relatedTechs = tech.relatedTechnologies.map(id => technologies[id]).filter(Boolean);
  const sameCategory = getTechnologiesByCategory(tech.category).filter(t => t.id !== tech.id).slice(0, 8);
  const track = tech.relatedTrackId ? enrichedTracks.find(t => t.id === tech.relatedTrackId) : null;

  return (
    <div className="min-h-screen bg-background text-foreground relative font-inter">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 right-0 w-[40%] h-[40%] blur-[120px] rounded-full opacity-5" style={{ backgroundColor: color }} />
      </div>

      <div className="relative z-10">
        {/* Top nav */}
        <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/5">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <Link to="/tech" className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-foreground/40 hover:text-foreground transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Hub
            </Link>
            <div className="flex items-center gap-3 text-[8px] font-black tracking-widest text-foreground/20 uppercase font-mono">
              <span>{tech.category}</span>
              <span className="w-px h-3 bg-foreground/10" />
              <span>{tech.subcategory}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8 space-y-16">
          {/* HERO SECTION */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 lg:w-32 lg:h-32 border-4 flex items-center justify-center shrink-0" style={{ borderColor: `${color}33`, backgroundColor: `${color}11` }}>
                  <img src={tech.logo} alt={tech.name} className="w-16 h-16 lg:w-20 lg:h-20" />
                </div>
                <div className="space-y-3">
                  <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none">{tech.name}</h1>
                  <p className="text-sm font-black uppercase tracking-widest text-foreground/50 max-w-lg leading-relaxed">{tech.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 lg:ml-auto">
                <button onClick={handleBookmark} className="flex items-center gap-2 px-4 py-2 text-[10px] font-black tracking-widest uppercase rounded border-2 transition-colors" style={{ borderColor: bookmarked ? "#FFB700" : "var(--border)", color: bookmarked ? "#FFB700" : "var(--foreground)" }}>
                  <Bookmark className={cn("w-3 h-3", bookmarked && "fill-current")} />
                  {bookmarked ? "Saved" : "Bookmark"}
                </button>
                {tech.officialWebsite && (
                  <a href={tech.officialWebsite} target="_blank" className="flex items-center gap-2 px-4 py-2 text-[10px] font-black tracking-widest uppercase rounded border-2 border-foreground/20 hover:border-primary/50 transition-colors" style={{ color }}>
                    <Globe className="w-3 h-3" /> Website
                  </a>
                )}
                {tech.documentationUrl && (
                  <a href={tech.documentationUrl} target="_blank" className="flex items-center gap-2 px-4 py-2 text-[10px] font-black tracking-widest uppercase rounded border-2 border-foreground/20 hover:border-primary/50 transition-colors" style={{ color }}>
                    <BookOpen className="w-3 h-3" /> Docs
                  </a>
                )}
                {tech.githubRepo && (
                  <a href={tech.githubRepo} target="_blank" className="flex items-center gap-2 px-4 py-2 text-[10px] font-black tracking-widest uppercase rounded border-2 border-foreground/20 hover:border-primary/50 transition-colors" style={{ color }}>
                    <Github className="w-3 h-3" /> GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Meta tags */}
            <div className="flex flex-wrap gap-2">
              <Badge color={color}><CatIcon className="w-2.5 h-2.5 mr-1" />{tech.category}</Badge>
              <Badge>{tech.subcategory}</Badge>
              <Badge>{tech.difficulty}</Badge>
              <Badge>{tech.type}</Badge>
              {tech.organization && <Badge><Users className="w-2.5 h-2.5 mr-1" />{tech.organization}</Badge>}
              {tech.releaseDate && <Badge><Calendar className="w-2.5 h-2.5 mr-1" />Since {tech.releaseDate}</Badge>}
              {tech.currentVersion && <Badge><Award className="w-2.5 h-2.5 mr-1" />v{tech.currentVersion}</Badge>}
              {tech.license && <Badge>{tech.license}</Badge>}
            </div>

            {/* Related track CTA */}
            {track && (
              <Link to={`/learn/${track.id}`} className="block">
                <CyberpunkCard className="p-4 border-2 hover:border-primary/30 transition-all" style={{ borderColor: `${color}44`, backgroundColor: `${color}08` }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border flex items-center justify-center" style={{ borderColor: `${color}33` }}>
                        <img src={track.icon} alt="" className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Learning Track Available</p>
                        <p className="text-sm font-black uppercase tracking-tight" style={{ color }}>{track.title} — {track.chapters.length} chapters • {track.estimatedHours}h</p>
                      </div>
                    </div>
                    <CyberpunkButton variant="outline" className="border-2 shrink-0" style={{ borderColor: color, color }}>
                      <span className="text-[10px] font-black tracking-widest uppercase">Start Learning</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </CyberpunkButton>
                  </div>
                </CyberpunkCard>
              </Link>
            )}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">

              {/* Overview */}
              <Section title="Overview" icon={BookOpen} color={color}>
                <p className="text-sm text-foreground/70 leading-relaxed">{tech.description}</p>
              </Section>

              {/* History */}
              {tech.history && (
                <Section title="History" icon={Calendar} color={color}>
                  <p className="text-sm text-foreground/70 leading-relaxed">{tech.history}</p>
                  <div className="flex flex-wrap gap-4 mt-3 pt-3 border-t border-foreground/5">
                    {tech.creator && <div><span className="text-[8px] font-black tracking-widest text-foreground/30 uppercase block">Creator</span><span className="text-xs font-black">{tech.creator}</span></div>}
                    {tech.organization && <div><span className="text-[8px] font-black tracking-widest text-foreground/30 uppercase block">Organization</span><span className="text-xs font-black">{tech.organization}</span></div>}
                    {tech.releaseDate && <div><span className="text-[8px] font-black tracking-widest text-foreground/30 uppercase block">Release</span><span className="text-xs font-black">{tech.releaseDate}</span></div>}
                    {tech.currentVersion && <div><span className="text-[8px] font-black tracking-widest text-foreground/30 uppercase block">Current Version</span><span className="text-xs font-black">{tech.currentVersion}</span></div>}
                    {tech.license && <div><span className="text-[8px] font-black tracking-widest text-foreground/30 uppercase block">License</span><span className="text-xs font-black">{tech.license}</span></div>}
                  </div>
                </Section>
              )}

              {/* Ecosystem Position */}
              <Section title="Ecosystem Position" icon={Layers} color={color}>
                <div className="p-4 border-2 border-foreground/10 bg-foreground/[0.02] flex flex-wrap items-center gap-2 text-xs font-mono">
                  <Badge color={color}>{tech.category}</Badge>
                  <ChevronRight className="w-3 h-3 text-foreground/20" />
                  <Badge>{tech.subcategory}</Badge>
                  <ChevronRight className="w-3 h-3 text-foreground/20" />
                  <Badge>{tech.name}</Badge>
                  <span className="text-[9px] text-foreground/30 ml-2">— {tech.type}</span>
                </div>
              </Section>

              {/* Advantages */}
              {tech.advantages.length > 0 && (
                <Section title="Advantages" icon={ThumbsUp} color={color}>
                  <ul className="space-y-2">
                    {tech.advantages.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-primary mt-1 shrink-0" style={{ color }}>✦</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Disadvantages */}
              {tech.disadvantages.length > 0 && (
                <Section title="Disadvantages" icon={ThumbsDown} color={color}>
                  <ul className="space-y-2">
                    {tech.disadvantages.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-red-500 mt-1 shrink-0">✦</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Practical */}
              {tech.basicExample && (
                <Section title="Beginner Example" icon={Code2} color={color}>
                  <pre className="p-4 bg-foreground/[0.02] border border-foreground/10 text-xs font-mono text-foreground/70 overflow-x-auto">{tech.basicExample}</pre>
                </Section>
              )}

              {tech.advancedExample && (
                <Section title="Advanced Example" icon={Code2} color={color}>
                  <pre className="p-4 bg-foreground/[0.02] border border-foreground/10 text-xs font-mono text-foreground/70 overflow-x-auto">{tech.advancedExample}</pre>
                </Section>
              )}

              {tech.installationGuide && (
                <Section title="Installation" icon={Terminal} color={color}>
                  <pre className="p-4 bg-foreground/[0.02] border border-foreground/10 text-xs font-mono text-foreground/70 overflow-x-auto">{tech.installationGuide}</pre>
                </Section>
              )}

              {/* Best Practices */}
              {tech.bestPractices && tech.bestPractices.length > 0 && (
                <Section title="Best Practices" icon={Award} color={color}>
                  <ul className="space-y-2">
                    {tech.bestPractices.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-primary mt-1 shrink-0" style={{ color }}>✦</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Security */}
              {tech.securityConsiderations && tech.securityConsiderations.length > 0 && (
                <Section title="Security Considerations" icon={Shield} color={color}>
                  <ul className="space-y-2">
                    {tech.securityConsiderations.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-red-500 mt-1 shrink-0">✦</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Performance */}
              {tech.performanceConsiderations && tech.performanceConsiderations.length > 0 && (
                <Section title="Performance Considerations" icon={Zap} color={color}>
                  <ul className="space-y-2">
                    {tech.performanceConsiderations.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-primary mt-1 shrink-0" style={{ color }}>✦</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Companies Using */}
              {tech.companiesUsing && tech.companiesUsing.length > 0 && (
                <Section title="Companies Using This" icon={Users} color={color}>
                  <div className="flex flex-wrap gap-2">
                    {tech.companiesUsing.map((c, i) => (
                      <Badge key={i} color={color}>{c}</Badge>
                    ))}
                  </div>
                </Section>
              )}

              {/* Alternatives */}
              {tech.alternatives.length > 0 && (
                <Section title="Alternatives" icon={GitBranch} color={color}>
                  <div className="flex flex-wrap gap-2">
                    {tech.alternatives.map((alt, i) => {
                      const altTech = technologies[alt];
                      return altTech ? (
                        <Link key={alt} to={`/tech/${altTech.slug}`}>
                          <Badge color={color}>{altTech.name}</Badge>
                        </Link>
                      ) : (
                        <Badge key={alt}>{alt}</Badge>
                      );
                    })}
                  </div>
                </Section>
              )}

              {/* Career */}
              {tech.careerPaths && tech.careerPaths.length > 0 && (
                <Section title="Career Paths" icon={Award} color={color}>
                  <div className="flex flex-wrap gap-2">
                    {tech.careerPaths.map((c, i) => <Badge key={i}>{c}</Badge>)}
                  </div>
                </Section>
              )}

              {/* Tags */}
              <Section title="Tags" icon={BookMarked} color={color}>
                <div className="flex flex-wrap gap-1.5">
                  {tech.tags.map((tag, i) => (
                    <span key={i} className="text-[8px] font-mono text-foreground/40 px-1.5 py-0.5 bg-foreground/[0.03] rounded">#{tag}</span>
                  ))}
                </div>
              </Section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              {/* Info Card */}
              <CyberpunkCard className="p-4 border-2 border-foreground/10 bg-foreground/[0.02] space-y-3">
                <h3 className="text-[10px] font-black tracking-[0.3em] text-foreground/40 uppercase">Info</h3>
                <div className="space-y-2 text-[10px]">
                  {tech.organization && <div className="flex justify-between"><span className="text-foreground/40">Organization</span><span className="font-black">{tech.organization}</span></div>}
                  {tech.releaseDate && <div className="flex justify-between"><span className="text-foreground/40">Released</span><span className="font-black">{tech.releaseDate}</span></div>}
                  {tech.currentVersion && <div className="flex justify-between"><span className="text-foreground/40">Version</span><span className="font-black">{tech.currentVersion}</span></div>}
                  {tech.license && <div className="flex justify-between"><span className="text-foreground/40">License</span><span className="font-black">{tech.license}</span></div>}
                  {tech.programmingLanguage && <div className="flex justify-between"><span className="text-foreground/40">Language</span><span className="font-black">{tech.programmingLanguage}</span></div>}
                  <div className="flex justify-between"><span className="text-foreground/40">Difficulty</span><span className="font-black capitalize">{tech.difficulty}</span></div>
                </div>
              </CyberpunkCard>

              {/* Related Technologies */}
              {relatedTechs.length > 0 && (
                <CyberpunkCard className="p-4 border-2 border-foreground/10 bg-foreground/[0.02] space-y-3">
                  <h3 className="text-[10px] font-black tracking-[0.3em] text-foreground/40 uppercase">Related Technologies</h3>
                  <div className="space-y-2">
                    {relatedTechs.slice(0, 10).map(rt => (
                      <Link key={rt.id} to={`/tech/${rt.slug}`} className="flex items-center gap-2 group">
                        <img src={rt.logo} alt="" className="w-5 h-5" />
                        <span className="text-xs font-black uppercase tracking-tight text-foreground/60 group-hover:text-primary transition-colors">{rt.name}</span>
                        <ChevronRight className="w-3 h-3 ml-auto text-foreground/20 group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </CyberpunkCard>
              )}

              {/* Same Category */}
              {sameCategory.length > 0 && (
                <CyberpunkCard className="p-4 border-2 border-foreground/10 bg-foreground/[0.02] space-y-3">
                  <h3 className="text-[10px] font-black tracking-[0.3em] text-foreground/40 uppercase">More in {tech.category}</h3>
                  <div className="space-y-2">
                    {sameCategory.slice(0, 8).map(st => (
                      <Link key={st.id} to={`/tech/${st.slug}`} className="flex items-center gap-2 group">
                        <img src={st.logo} alt="" className="w-5 h-5" />
                        <span className="text-xs font-black uppercase tracking-tight text-foreground/60 group-hover:text-primary transition-colors">{st.name}</span>
                        <ChevronRight className="w-3 h-3 ml-auto text-foreground/20 group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </CyberpunkCard>
              )}

              {/* Compare */}
              {relatedTechs.length > 0 && (
                <Link to={`/compare/${tech.slug}/${relatedTechs[0].slug}`}>
                  <CyberpunkButton variant="outline" className="w-full border-2" style={{ borderColor: color, color }}>
                    <GitBranch className="w-3.5 h-3.5 mr-2" />
                    <span className="font-black tracking-widest uppercase text-[10px]">Compare {tech.name}</span>
                  </CyberpunkButton>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
