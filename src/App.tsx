import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
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
import TechnologyDirectory from "./pages/TechnologyDirectory";
import TechnologyPage from "./pages/TechnologyPage";
import TechnologyCompare from "./pages/TechnologyCompare";

// WebDev imports
import WDIndex from "./pages/webdev/Index";
import WDCategoryPage from "./pages/webdev/CategoryPage";
import WDTechDetailPage from "./pages/webdev/TechDetailPage";
import WDComparePage from "./pages/webdev/ComparePage";
import WDRoadmapsPage from "./pages/webdev/RoadmapsPage";
import WDRankingPage from "./pages/webdev/RankingPage";
import WDBookmarksPage from "./pages/webdev/BookmarksPage";
import WDDevToolsPage from "./pages/webdev/DevToolsPage";
import WDProgrammingLanguagesPage from "./pages/webdev/ProgrammingLanguagesPage";
import WDSettingsPage from "./pages/webdev/SettingsPage";
import WDAuthPage from "./pages/webdev/AuthPage";
import WDAdminPage from "./pages/webdev/AdminPage";
import WDNotFound from "./pages/webdev/NotFound";
import { BookmarkProvider } from "@/hooks/webdev/useBookmarks";
import { CompareProvider } from "@/hooks/webdev/useCompare";
import { LanguageProvider } from "@/hooks/webdev/useLanguage";
import { ThemeProvider as WDThemeProvider } from "@/hooks/webdev/useTheme";
import { CompareTray } from "@/components/webdev/CompareTray";
import ScrollToTop from "@/components/webdev/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <I18nProvider>
        <TooltipProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
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
                <Route path="/tech" element={<TechnologyDirectory />} />
                <Route path="/tech/:slug" element={<TechnologyPage />} />
                <Route path="/compare/:slug1/:slug2" element={<TechnologyCompare />} />
                <Route path="/web-dev" element={<WebDevProviders />}>
                  <Route element={<WDContentWrapper />}>
                    <Route index element={<WDIndex />} />
                    <Route path="category/:slug" element={<WDCategoryPage />} />
                    <Route path="tech/:slug" element={<WDTechDetailPage />} />
                    <Route path="compare" element={<WDComparePage />} />
                    <Route path="roadmaps" element={<WDRoadmapsPage />} />
                    <Route path="ranking" element={<WDRankingPage />} />
                    <Route path="bookmarks" element={<WDBookmarksPage />} />
                    <Route path="dev-tools" element={<WDDevToolsPage />} />
                    <Route path="languages" element={<WDProgrammingLanguagesPage />} />
                    <Route path="settings" element={<WDSettingsPage />} />
                    <Route path="admin" element={<WDAdminPage />} />
                    <Route path="auth" element={<WDAuthPage />} />
                    <Route path="*" element={<WDNotFound />} />
                  </Route>
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </I18nProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

function WebDevProviders() {
  return (
    <WDThemeProvider>
      <LanguageProvider>
        <BookmarkProvider>
          <CompareProvider>
            <ScrollToTop />
            <Outlet />
            <CompareTray />
          </CompareProvider>
        </BookmarkProvider>
      </LanguageProvider>
    </WDThemeProvider>
  );
}

function WDContentWrapper() {
  return (
    <div className="px-4 sm:px-8 lg:px-12 py-8 animate-fade-in">
      <div className="max-w-[1400px] mx-auto w-full h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
