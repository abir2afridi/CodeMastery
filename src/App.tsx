import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/components/theme-provider";
import { MainLayout } from "@/components/layout/MainLayout";
import Landing from "./pages/Landing";
import Setup from "./pages/Setup";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import TrackOverview from "./pages/TrackOverview";
import Lesson from "./pages/Lesson";
import QuizPage from "./pages/QuizPage.tsx";
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
          <BrowserRouter>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/setup" element={<Setup />} />
                <Route path="/learn" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/learn/:trackId" element={<TrackOverview />} />
                <Route path="/learn/:trackId/:chapterId" element={<Lesson />} />
                <Route path="/practice/:trackId/:chapterId" element={<PracticePage />} />
                <Route path="/quiz/:trackId/:chapterId" element={<QuizPage />} />
                <Route path="/compiler" element={<CompilerPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/certificate/:certId" element={<CertificatePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
          </BrowserRouter>
        </TooltipProvider>
      </I18nProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
