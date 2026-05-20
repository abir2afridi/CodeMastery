import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { 
  Star, GitFork, Users, Code, ExternalLink, 
  Calendar, Activity, Zap, Layers, Cpu, Radio,
  Github, Terminal, Boxes, Binary
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const GITHUB_API = "https://api.github.com";

interface UserData {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  company: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

interface Event {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: any;
}

interface LanguageData {
  name: string;
  value: number;
  color: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#3776AB",
  Java: "#ED8B00",
  "C++": "#00599C",
  C: "#A8B9CC",
  "C#": "#239120",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Ruby: "#CC342D",
  PHP: "#777BB4",
  Swift: "#FA7343",
  Kotlin: "#7F52FF",
  HTML: "#E34F26",
  CSS: "#1572B6",
  SCSS: "#CF649A",
  Shell: "#89E051",
  Vue: "#4FC08D",
  React: "#61DAFB",
};

const SIMULATED_USER: UserData = {
  login: "abir2afridi",
  avatar_url: "https://avatars.githubusercontent.com/u/124343812?v=4",
  name: "Abir Hasan Siam",
  bio: "Full Stack Developer | Open Source Enthusiast | Building tools that matter",
  location: "Bangladesh",
  company: "@code-mastery",
  twitter_username: "abir2afridi",
  public_repos: 45,
  followers: 128,
  following: 89,
  created_at: "2022-05-15T10:30:00Z"
};

const SIMULATED_REPOS: Repo[] = [
  { id: 1, name: "code-mastery", description: "Interactive programming learning platform with gamified curriculum", html_url: "https://github.com/abir2afridi/code-mastery", stargazers_count: 234, forks_count: 45, language: "TypeScript", updated_at: "2024-01-20T10:30:00Z", topics: ["react", "typescript", "education"] },
  { id: 2, name: "neural-net-visualizer", description: "Real-time neural network visualization tool with interactive animations", html_url: "https://github.com/abir2afridi/neural-net-visualizer", stargazers_count: 189, forks_count: 32, language: "Python", updated_at: "2024-01-19T15:45:00Z", topics: ["machine-learning", "visualization"] },
  { id: 3, name: "dev-tools-cli", description: "A collection of essential developer productivity CLI tools", html_url: "https://github.com/abir2afridi/dev-tools-cli", stargazers_count: 156, forks_count: 28, language: "Go", updated_at: "2024-01-18T09:20:00Z", topics: ["cli", "golang"] },
  { id: 4, name: "cyber-ui", description: "Cyber-brutalist UI component library for modern web applications", html_url: "https://github.com/abir2afridi/cyber-ui", stargazers_count: 312, forks_count: 67, language: "JavaScript", updated_at: "2024-01-17T14:00:00Z", topics: ["ui", "components"] },
  { id: 5, name: "api-gateway", description: "High-performance API gateway with rate limiting and caching", html_url: "https://github.com/abir2afridi/api-gateway", stargazers_count: 98, forks_count: 15, language: "Rust", updated_at: "2024-01-16T11:30:00Z", topics: ["backend", "api"] },
  { id: 6, name: "data-structures-algo", description: "Comprehensive collection of data structures and algorithm implementations", html_url: "https://github.com/abir2afridi/data-structures-algo", stargazers_count: 445, forks_count: 89, language: "C++", updated_at: "2024-01-15T08:00:00Z", topics: ["algorithms", "education"] },
];

const SIMULATED_EVENTS: Event[] = [
  { id: "1", type: "PushEvent", repo: { name: "abir2afridi/code-mastery" }, created_at: "2024-01-20T10:30:00Z", payload: { commits: [{ message: "feat: add dark mode support" }] } },
  { id: "2", type: "PullRequestEvent", repo: { name: "abir2afridi/cyber-ui" }, created_at: "2024-01-20T09:15:00Z", payload: { action: "opened", pull_request: { title: "feat: add new button variants" } } },
  { id: "3", type: "IssuesEvent", repo: { name: "abir2afridi/neural-net-visualizer" }, created_at: "2024-01-20T08:00:00Z", payload: { action: "opened", issue: { title: "Bug: memory leak in animation" } } },
  { id: "4", type: "CreateEvent", repo: { name: "abir2afridi/api-gateway" }, created_at: "2024-01-19T22:30:00Z", payload: { ref: "main", ref_type: "branch" } },
  { id: "5", type: "WatchEvent", repo: { name: "abir2afridi/dev-tools-cli" }, created_at: "2024-01-19T18:45:00Z", payload: {} },
  { id: "6", type: "ForkEvent", repo: { name: "abir2afridi/data-structures-algo" }, created_at: "2024-01-19T14:20:00Z", payload: {} },
  { id: "7", type: "PushEvent", repo: { name: "abir2afridi/cyber-ui" }, created_at: "2024-01-19T12:00:00Z", payload: { commits: [{ message: "fix: resolve border radius issue" }] } },
  { id: "8", type: "IssueCommentEvent", repo: { name: "abir2afridi/code-mastery" }, created_at: "2024-01-19T10:30:00Z", payload: { comment: { body: "Great work! 👍" } } },
];

function DeveloperProfile() {
  const { username } = useParams<{ username: string }>();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [reposData, setReposData] = useState<Repo[]>([]);
  const [eventsData, setEventsData] = useState<Event[]>([]);
  const [allRepos, setAllRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const targetUsername = username || "abir2afridi";

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true);
        
        // Fetch user data
        const userRes = await fetch(`${GITHUB_API}/users/${targetUsername}`);
        if (!userRes.ok) throw new Error("Rate limited");
        const user = await userRes.json();
        
        // Fetch repos (latest 6)
        const reposRes = await fetch(`${GITHUB_API}/users/${targetUsername}/repos?sort=updated&per_page=6`);
        if (!reposRes.ok) throw new Error("Rate limited");
        const repos = await reposRes.json();
        
        // Fetch all repos for language stats (100 repos)
        const allReposRes = await fetch(`${GITHUB_API}/users/${targetUsername}/repos?per_page=100`);
        const allRepos = allReposRes.ok ? await allReposRes.json() : [];
        
        // Fetch events
        const eventsRes = await fetch(`${GITHUB_API}/users/${targetUsername}/events?per_page=12`);
        if (!eventsRes.ok) throw new Error("Rate limited");
        const events = await eventsRes.json();
        
        setUserData(user);
        setReposData(repos.slice(0, 6));
        setAllRepos(allRepos);
        setEventsData(events.slice(0, 12));
        setError(false);
      } catch (err) {
        console.error("GitHub API error, using fallback:", err);
        setUserData(SIMULATED_USER);
        setReposData(SIMULATED_REPOS);
        setAllRepos(SIMULATED_REPOS);
        setEventsData(SIMULATED_EVENTS);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    
    fetchGitHubData();
  }, [targetUsername]);

  // Calculate language distribution
  const languageData: LanguageData[] = allRepos.reduce((acc: LanguageData[], repo) => {
    if (repo.language) {
      const existing = acc.find(l => l.name === repo.language);
      if (existing) {
        existing.value += 1;
      } else {
        acc.push({
          name: repo.language,
          value: 1,
          color: LANGUAGE_COLORS[repo.language] || "#888888"
        });
      }
    }
    return acc;
  }, []).sort((a, b) => b.value - a.value).slice(0, 6);

  // Calculate stats
  const totalStars = allRepos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  const totalForks = allRepos.reduce((sum, r) => sum + (r.forks_count || 0), 0);

  // Generate contribution heatmap data
  const heatmapData = Array.from({ length: 49 }, (_, i) => ({
    day: i,
    intensity: Math.random() > 0.3 ? Math.floor(Math.random() * 4) + 1 : 0
  }));

  const formatEventType = (type: string) => {
    const types: Record<string, string> = {
      PushEvent: "COMMIT",
      PullRequestEvent: "PR",
      IssuesEvent: "ISSUE",
      CreateEvent: "CREATE",
      WatchEvent: "STAR",
      ForkEvent: "FORK",
      IssueCommentEvent: "COMMENT"
    };
    return types[type] || type;
  };

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000 / 60);
    if (diff < 60) return `${diff}m ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
    return `${Math.floor(diff / 1440)}d ago`;
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-electric-blue border-t-transparent animate-spin" />
          <p className="font-mono text-electric-blue">INITIALIZING_NEURAL_LINK...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-foreground relative min-h-full">
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/5 to-transparent animate-scanline" />
      </div>

      <div className="relative z-10 px-6 md:px-8 lg:px-10 py-6 md:py-8 space-y-6">
        {/* Hero Section */}
        <section>
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="lg:w-64 shrink-0">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-electric-blue/20 animate-pulse-fast" />
                <img 
                  src={userData?.avatar_url || "https://avatars.githubusercontent.com/u/124343812?v=4"} 
                  alt={userData?.name}
                  className="w-36 h-36 md:w-48 md:h-48 object-cover border-4 border-electric-blue relative z-10"
                  style={{ borderRadius: 0 }}
                />
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute left-0 right-0 h-[2px] bg-electric-blue/50 animate-scanline shadow-[0_0_10px_#0066FF]" />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2 font-mono text-xs">
                <Radio className="w-3 h-3 text-terminal-green animate-pulse" />
                <span className="text-terminal-green">LIVE_SIGNAL</span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="font-syne font-black uppercase tracking-tight leading-none">
                <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-neon-blue to-electric-blue">
                  {userData?.name?.split(" ")[0] || "ABIR"}
                </span>
                <span className="block text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground/20">
                  {userData?.name?.split(" ").slice(1).join(" ") || "HASAN"}
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <a 
                  href={`https://github.com/${targetUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue text-black font-mono font-bold text-sm hover:bg-white transition-all duration-300"
                  style={{ borderRadius: 0 }}
                >
                  <Github className="w-4 h-4" />
                  @{targetUsername}
                </a>
                <div className="flex items-center gap-2 px-3 py-2 bg-foreground/[0.05] border border-border font-mono text-xs">
                  <Code className="w-3 h-3 text-electric-blue" />
                  <span>{languageData[0]?.name || "TypeScript"}</span>
                </div>
              </div>
              <p className="mt-3 text-sm font-mono text-foreground/60">
                {userData?.bio || "Full Stack Developer | Open Source Enthusiast"}
              </p>
            </div>
          </div>
        </section>

        {/* Performance Hub */}
        <section>
          <h2 className="font-syne font-black uppercase text-lg md:text-xl mb-3 tracking-tight text-electric-blue">
            PERFORMANCE_HUB
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <StatCard 
              icon={<Star className="w-5 h-5" />}
              label="STAR_IMPACT"
              value={totalStars.toLocaleString()}
              accent="text-warning-amber"
              bg="bg-warning-amber/10"
              border="border-warning-amber/30"
            />
            <StatCard 
              icon={<GitFork className="w-5 h-5" />}
              label="FORK_DENSITY"
              value={totalForks.toLocaleString()}
              accent="text-electric-blue"
              bg="bg-electric-blue/10"
              border="border-electric-blue/30"
            />
            <StatCard 
              icon={<Boxes className="w-5 h-5" />}
              label="REPOS_NODE"
              value={userData?.public_repos || 0}
              accent="text-neon-blue"
              bg="bg-neon-blue/10"
              border="border-neon-blue/30"
            />
            <StatCard 
              icon={<Users className="w-5 h-5" />}
              label="FOLLOWERS"
              value={userData?.followers || 0}
              accent="text-terminal-green"
              bg="bg-terminal-green/10"
              border="border-terminal-green/30"
            />
          </div>
        </section>

        {/* Main Grid */}
        <section>
          <div className="grid xl:grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="xl:col-span-3 space-y-6">
              <div className="bg-foreground/[0.03] border border-border p-5" style={{ borderRadius: 0 }}>
                <h3 className="font-mono font-bold text-sm mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-electric-blue" />
                  VISUAL_INTELLIGENCE
                </h3>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={languageData}
                        cx="50%"
                        cy="50%"
                        innerRadius={35}
                        outerRadius={65}
                        dataKey="value"
                        stroke="none"
                      >
                        {languageData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          background: 'hsl(var(--background))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: 0,
                          fontFamily: 'JetBrains Mono',
                          fontSize: '12px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {languageData.slice(0, 4).map((lang) => (
                    <div key={lang.name} className="flex items-center gap-2 font-mono text-[10px]">
                      <div className="w-2.5 h-2.5" style={{ backgroundColor: lang.color }} />
                      <span className="text-foreground/70">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-foreground/[0.03] border border-border p-5" style={{ borderRadius: 0 }}>
                <h3 className="font-mono font-bold text-sm mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-terminal-green" />
                  CONTRIBUTION_PULSE
                </h3>
                <div className="grid grid-cols-7 gap-1">
                  {heatmapData.map((day, i) => (
                    <div 
                      key={i}
                      className={`h-5 ${day.intensity === 0 ? 'bg-foreground/[0.05]' : 
                        day.intensity === 1 ? 'bg-electric-blue/20' :
                        day.intensity === 2 ? 'bg-electric-blue/40' :
                        day.intensity === 3 ? 'bg-electric-blue/60' :
                        'bg-electric-blue'}`}
                      style={{ borderRadius: 0 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="xl:col-span-9 space-y-6">
              <div className="bg-foreground/[0.02] border border-border p-5" style={{ borderRadius: 0 }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-mono font-bold text-sm flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-neon-blue" />
                    LIVE_SIGNAL_FEED
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-terminal-green animate-pulse" />
                    <span className="font-mono text-[10px] text-terminal-green">REALTIME</span>
                  </div>
                </div>
                <div className="space-y-1 max-h-44 overflow-y-auto font-mono text-xs">
                  {eventsData.map((event) => (
                    <div key={event.id} className="flex items-start gap-3 p-1.5 hover:bg-foreground/[0.05] transition-colors">
                      <span className="text-electric-blue shrink-0">[{formatEventType(event.type)}]</span>
                      <span className="text-foreground/60 truncate flex-1">{event.repo.name}</span>
                      <span className="text-foreground/30 shrink-0">{formatTime(event.created_at)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-syne font-black uppercase text-base mb-3 tracking-tight text-electric-blue">
                  MODULE_MATRIX
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {reposData.map((repo, index) => (
                    <a 
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-foreground/[0.03] border border-border p-4 hover:border-electric-blue hover:bg-foreground/[0.06] transition-all duration-300"
                      style={{ borderRadius: 0 }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-mono text-[10px] text-electric-blue">
                          MODULE_{String(index + 1).padStart(2, '0')}
                        </span>
                        <ExternalLink className="w-3 h-3 text-foreground/30 group-hover:text-electric-blue transition-colors" />
                      </div>
                      <h4 className="font-syne font-bold text-base mb-1.5 group-hover:text-electric-blue transition-colors">
                        {repo.name}
                      </h4>
                      <p className="font-mono text-xs text-foreground/50 line-clamp-2 mb-3">
                        {repo.description || "No description available"}
                      </p>
                      <div className="flex items-center gap-3 font-mono text-[10px] text-foreground/40">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3" />
                          {repo.forks_count}
                        </span>
                        {repo.language && (
                          <span className="text-electric-blue">{repo.language}</span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Network Sync CTA */}
              <div className="bg-foreground/[0.03] border border-border p-5 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderRadius: 0 }}>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-electric-blue/20">
                    <Zap className="w-7 h-7 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-syne font-black uppercase text-sm">NETWORK_SYNC_READY</h3>
                    <p className="font-mono text-xs text-foreground/50">Let's build something amazing.</p>
                  </div>
                </div>
                <button 
                  className="px-5 py-2.5 bg-electric-blue text-black font-mono font-bold text-sm hover:bg-white transition-all duration-300"
                  style={{ borderRadius: 0 }}
                  onClick={() => window.open(`https://github.com/${targetUsername}`, '_blank')}
                >
                  TRANSMIT
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, accent, bg, border }: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  accent: string;
  bg: string;
  border: string;
}) {
  return (
    <div className={`${bg} border ${border} p-4 hover:scale-105 transition-transform duration-300`} style={{ borderRadius: 0 }}>
      <div className="flex items-center gap-3 mb-2">
        <div className={accent}>{icon}</div>
        <span className="font-mono text-xs text-foreground/50">{label}</span>
      </div>
      <p className={`font-syne font-black text-3xl ${accent}`}>{value}</p>
    </div>
  );
}

export default DeveloperProfile;