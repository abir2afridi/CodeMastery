import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { CommandPalette } from "../CommandPalette";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <CommandPalette />
      <main className="relative z-10">
        {children}
      </main>
      <Toaster />
      <Sonner />
    </div>
  );
}
