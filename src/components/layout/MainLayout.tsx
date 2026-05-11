import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CommandPalette } from "../CommandPalette";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background text-foreground transition-colors duration-300">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Navbar />
          <CommandPalette />
          <main className="relative z-10 flex-1">
            {children}
          </main>
          <Toaster />
          <Sonner />
        </div>
      </div>
    </SidebarProvider>
  );
}
