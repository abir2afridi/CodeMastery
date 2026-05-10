import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { I18nProvider } from "@/lib/i18n";
import { CommandPalette } from "@/components/CommandPalette";
import { ThemeProvider } from "@/components/theme-provider";
import Landing from "./pages/Landing";
import Setup from "./pages/Setup";
import Dashboard from "./pages/Dashboard";
import TrackOverview from "./pages/TrackOverview";
import Lesson from "./pages/Lesson";
import QuizPage from "./pages/QuizPage";
import CompilerPage from "./pages/CompilerPage";
import Profile from "./pages/Profile";
import CertificatePage from "./pages/CertificatePage";
import PracticePage from "./pages/PracticePage";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <I18nProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <CommandPalette />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/setup" element={<Setup />} />
              <Route path="/learn" element={<Dashboard />} />
              <Route path="/learn/:trackId" element={<TrackOverview />} />
              <Route path="/learn/:trackId/:chapterId" element={<Lesson />} />
              <Route path="/practice/:trackId/:chapterId" element={<PracticePage />} />
              <Route path="/quiz/:trackId/:chapterId" element={<QuizPage />} />
              <Route path="/compiler" element={<CompilerPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/certificate/:certId" element={<CertificatePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </I18nProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
