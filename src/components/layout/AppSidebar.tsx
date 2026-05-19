import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Terminal,
  User,
  ChevronRight,
  Zap,
  Shield,
  Activity,
  Cpu,
  Code2,
  Palette,
  FileCode2,
  Library,
  Globe,
  ChevronDown,
  LucideIcon,
  BookOpen,
  Server,
  Database,
  Brain,
  Cloud,
  CircuitBoard,
  BarChart3,
} from "lucide-react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar
} from "@/components/ui/sidebar";
import { useI18n } from "@/hooks/useI18n";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  {
    title: "nav.dashboard",
    icon: LayoutDashboard,
    url: "/learn",
    color: "text-primary"
  },
  {
    title: "nav.languages",
    icon: Library,
    url: "/courses",
    color: "text-indigo-500"
  },
  {
    title: "Web Dev Hub",
    icon: Globe,
    url: "/web-dev",
    color: "text-cyan-500"
  },
  {
    title: "nav.compiler",
    icon: Terminal,
    url: "/compiler",
    color: "text-amber-500"
  },
  {
    title: "nav.profile",
    icon: User,
    url: "/profile",
    color: "text-emerald-500"
  }
];

const webDevHubLinks: { title: string; icon: LucideIcon; url: string; color: string }[] = [
  { title: "Browse All", icon: Globe, url: "/web-dev", color: "#00D4FF" },
  { title: "Frontend", icon: Palette, url: "/web-dev/category/frontend", color: "#00D4FF" },
  { title: "Backend", icon: Server, url: "/web-dev/category/backend", color: "#00FF41" },
  { title: "Databases", icon: Database, url: "/web-dev/category/databases", color: "#FFB700" },
  { title: "AI & ML", icon: Brain, url: "/web-dev/category/ai-tools", color: "#B026FF" },
  { title: "DevOps", icon: Cloud, url: "/web-dev/category/devops", color: "#FF3B30" },
  { title: "Languages", icon: BarChart3, url: "/web-dev/languages", color: "#FF6B35" },
  { title: "Roadmaps", icon: BookOpen, url: "/web-dev/roadmaps", color: "#00FF41" },
  { title: "Rankings", icon: Activity, url: "/web-dev/ranking", color: "#FFB700" },
  { title: "Dev Tools", icon: Terminal, url: "/web-dev/dev-tools", color: "#B026FF" },
];

export function AppSidebar() {
  const { t } = useI18n();
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      <SidebarHeader className="p-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0 relative overflow-hidden">
            <span className="text-black font-black text-xl z-10">CM</span>
            <motion.div 
              animate={{ 
                left: ["-100%", "200%"],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-4 bg-white/30 skew-x-[30deg]"
            />
          </div>
          {!isCollapsed && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <span className="text-lg font-black tracking-tighter leading-none uppercase">CodeMastery</span>
              <span className="text-[8px] font-black tracking-[0.4em] text-primary uppercase">Core_System.v4</span>
            </motion.div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4 space-y-6">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[10px] font-black tracking-[0.3em] text-sidebar-foreground/30 uppercase mb-4">
            {t("system.segmentIndex")}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.url || (item.url === "/learn" && location.pathname.startsWith("/learn") && !location.pathname.startsWith("/learn/"));
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={isActive}
                      className={cn(
                        "h-12 px-4 transition-all duration-300 rounded-none border-l-2",
                        isActive
                          ? "bg-primary/10 border-primary text-sidebar-foreground"
                          : "bg-transparent border-transparent text-sidebar-foreground/40 hover:bg-sidebar-accent hover:text-sidebar-foreground/70"
                      )}
                    >
                      <Link to={item.url} className="flex items-center gap-4">
                        <item.icon className={cn("h-5 w-5", isActive ? item.color : "opacity-40")} />
                        {!isCollapsed && (
                          <span className="text-sm font-black uppercase tracking-widest truncate">
                            {t(item.title)}
                          </span>
                        )}
                        {isActive && !isCollapsed && (
                          <ChevronRight className="ml-auto h-4 w-4 text-primary animate-pulse" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Web Dev Hub Categories */}
        {!isCollapsed && (
          <SidebarGroup>
            <div className="px-4 py-2 text-[10px] font-black tracking-[0.3em] text-sidebar-foreground/30 uppercase">
              <Globe className="w-3 h-3 inline mr-2" />
              Web Dev Hub
            </div>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {webDevHubLinks.map((item) => {
                  const fullUrl = location.pathname + location.search;
                  const isActive = fullUrl === item.url;
                  return (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton 
                        asChild 
                        isActive={isActive}
                        className={cn(
                          "h-8 px-4 transition-all duration-300 rounded-none border-l-2 text-[11px]",
                          isActive
                            ? "bg-primary/10 border-primary text-sidebar-foreground"
                            : "bg-transparent border-transparent text-sidebar-foreground/40 hover:bg-sidebar-accent hover:text-sidebar-foreground/70"
                        )}
                      >
                        <Link to={item.url} className="flex items-center gap-3 w-full">
                          <item.icon className="h-3.5 w-3.5" style={{ color: item.color }} />
                          <span className="font-bold uppercase tracking-widest truncate">{item.title}</span>
                          {isActive && (
                            <ChevronRight className="ml-auto h-3 w-3 text-primary animate-pulse" />
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* System Status */}
        {!isCollapsed && (
          <SidebarGroup className="mt-auto pt-4">
            <div className="px-6 py-4 bg-foreground/[0.02] border border-border/10 space-y-4">
              <div className="flex items-center gap-2 text-primary/40">
                <Shield className="h-3 w-3" />
                <span className="text-[8px] font-black tracking-[0.2em] uppercase">{t("system.securityProtocol")}</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "SYNC", icon: Activity, status: "NOMINAL" },
                  { label: "CORE", icon: Cpu, status: "STABLE" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center text-[8px] font-mono">
                    <div className="flex items-center gap-2 text-foreground/20">
                      <stat.icon className="h-2 w-2" />
                      <span>{stat.label}</span>
                    </div>
                    <span className="text-primary/60">{t(`system.${stat.status.toLowerCase()}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className={cn(
        "p-6 border-t border-foreground/5",
        isCollapsed ? "items-center" : "items-stretch"
      )}>
        <div className={cn(
          "flex gap-4",
          isCollapsed ? "flex-col" : "flex-row justify-between items-center"
        )}>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
