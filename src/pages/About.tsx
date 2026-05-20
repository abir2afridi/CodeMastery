import { Link } from "react-router-dom";
import { 
  BookOpen, Code2, Trophy, Award, Zap, Users, 
  Globe, Shield, Layers, Terminal, Brain, GitBranch,
  ArrowRight, CheckCircle, Star, Target, Rocket,
  Heart, MessageSquare, ChevronDown, Github
} from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/hooks/useI18n";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  { icon: BookOpen, value: "50+", label: "Learning Tracks", labelBn: "লার্নিং ট্র্যাক" },
  { icon: Code2, value: "1000+", label: "Lessons", labelBn: "পাঠ" },
  { icon: Trophy, value: "500+", label: "Practice Challenges", labelBn: "প্র্যাকটিস চ্যালেঞ্জ" },
  { icon: Award, value: "200+", label: "Quizzes", labelBn: "কুইজ" },
  { icon: Terminal, value: "10+", label: "Languages in Compiler", labelBn: "কম্পাইলারে ভাষা" },
  { icon: Globe, value: "2", label: "Languages (EN/BN)", labelBn: "ভাষা (এন/বিএন)" },
];

const features = [
  {
    icon: BookOpen,
    title: "Structured Learning Paths",
    titleBn: "সুসংগঠিত লার্নিং পাথ",
    description: "Master programming from absolute beginner to expert with 50+ curated tracks covering HTML, CSS, JavaScript, Python, TypeScript, C, C++, Java, and dozens more technologies. Each track is carefully organized into progressive chapters.",
    descriptionBn: "একদম শুরু থেকে এক্সপার্ট পর্যন্ত প্রোগ্রামিং শিখুন ৫০+ কিউরেটেড ট্র্যাকে। প্রতিটি ট্র্যাক ধাপে ধাপে সাজানো।",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
  },
  {
    icon: Terminal,
    title: "Built-in Code Compiler",
    titleBn: "বিল্ট-ইন কোড কম্পাইলার",
    description: "Write, run, and test your code directly in the browser. No setup required. Supports JavaScript, Python, C, C++, Java, PHP, SQL, HTML/CSS, and more — all with syntax highlighting and real-time output.",
    descriptionBn: "ব্রাউজারেই কোড লিখুন, রান করুন, টেস্ট করুন। কোনো সেটআপ লাগবে না।",
    color: "text-terminal-green",
    bg: "bg-terminal-green/10",
  },
  {
    icon: Trophy,
    title: "Interactive Quizzes & Practice",
    titleBn: "ইন্টারেক্টিভ কুইজ ও প্র্যাকটিস",
    description: "Test your knowledge with MCQs, true/false, fill-in-the-blank, code-output, and spot-the-bug questions. Each chapter includes hands-on coding challenges with hints and solutions.",
    descriptionBn: "MCQ, সত্য/মিথ্যা, শূন্যস্থান পূরণ, কোড-আউটপুট এবং বাগ-খুঁজুন প্রশ্ন দিয়ে জ্ঞান পরীক্ষা করুন।",
    color: "text-warning-amber",
    bg: "bg-warning-amber/10",
  },
  {
    icon: Zap,
    title: "Gamified Progress System",
    titleBn: "গেমিফাইড প্রগ্রেস সিস্টেম",
    description: "Earn XP for completing lessons, quizzes, and challenges. Track your daily streak, monitor progress across all tracks, and unlock certificates as you advance through your learning journey.",
    descriptionBn: "পাঠ, কুইজ এবং চ্যালেঞ্জ সম্পন্ন করে XP অর্জন করুন। দৈনিক স্ট্র্যাক ট্র্যাক করুন।",
    color: "text-neon-blue",
    bg: "bg-neon-blue/10",
  },
  {
    icon: Globe,
    title: "Bilingual Support (English & বাংলা)",
    titleBn: "দ্বিভাষিক সমর্থন (ইংরেজি ও বাংলা)",
    description: "Learn in your preferred language. The entire platform interface, navigation, and lesson content are available in both English and Bengali, making programming accessible to Bengali-speaking learners worldwide.",
    descriptionBn: "আপনার পছন্দের ভাষায় শিখুন। পুরো প্ল্যাটফর্ম ইংরেজি এবং বাংলায় উপলব্ধ।",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Award,
    title: "Certification System",
    titleBn: "সার্টিফিকেশন সিস্টেম",
    description: "Earn verifiable certificates upon completing each learning track. Certificates include your progress details, completion date, and can be shared on your profile or downloaded as PDF.",
    descriptionBn: "প্রতিটি লার্নিং ট্র্যাক সম্পন্ন করলে ভেরিফায়েবল সার্টিফিকেট পান।",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Layers,
    title: "Technology Directory",
    titleBn: "টেকনোলজি ডিরেক্টরি",
    description: "Explore 100+ technologies with detailed information, comparisons, and learning paths. Compare technologies side-by-side to understand their differences, use cases, and ecosystem.",
    descriptionBn: "১০০+ টেকনোলজি বিস্তারিত তথ্য, তুলনা এবং লার্নিং পাথ সহ অন্বেষণ করুন।",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Brain,
    title: "Web Dev Hub",
    titleBn: "ওয়েব ডেভ হাব",
    description: "A comprehensive resource hub for web developers featuring technology rankings, curated roadmaps, bookmarking system, dev tools directory, and programming language comparisons — all in one place.",
    descriptionBn: "ওয়েব ডেভেলপারদের জন্য একটি সম্পূর্ণ রিসোর্স হাব।",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
];

const techStack = [
  { category: "Frontend", items: ["React 18", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"] },
  { category: "State & Data", items: ["React Query", "React Router", "React Hook Form", "Zod Validation"] },
  { category: "Code Editor", items: ["CodeMirror 6", "SQL.js", "Syntax Highlighting"] },
  { category: "Charts & PDF", items: ["Recharts", "jsPDF", "html2canvas", "canvas-confetti"] },
  { category: "Backend Ready", items: ["Supabase", "REST APIs", "Query Caching"] },
  { category: "Build & Test", items: ["Vite 5", "Vitest", "ESLint", "PostCSS"] },
];

const faqs = [
  {
    question: "Is CodeMastery free to use?",
    questionBn: "CodeMastery কি বিনামূল্যে ব্যবহার করা যায়?",
    answer: "Yes! CodeMastery is completely free and open-source. All learning tracks, lessons, quizzes, practice challenges, and the built-in compiler are available at no cost. We believe quality programming education should be accessible to everyone.",
    answerBn: "হ্যাঁ! CodeMastery সম্পূর্ণ বিনামূল্যে এবং ওপেন-সোর্স।",
  },
  {
    question: "Do I need to install anything to start learning?",
    questionBn: "শেখা শুরু করতে কি আমাকে কিছু ইনস্টল করতে হবে?",
    answer: "No installation required. CodeMastery runs entirely in your browser with a built-in code compiler. Just open the website, pick a track, and start coding immediately. Everything you need is right here.",
    answerBn: "কোনো ইনস্টলেশন লাগবে না। CodeMastery সম্পূর্ণভাবে আপনার ব্রাউজারে চলে।",
  },
  {
    question: "What programming languages are supported?",
    questionBn: "কোন প্রোগ্রামিং ভাষা সমর্থিত?",
    answer: "We support 50+ technologies including HTML, CSS, JavaScript, Python, TypeScript, C, C++, Java, C#, PHP, SQL, MySQL, PostgreSQL, MongoDB, React, Vue, Angular, Django, Node.js, Go, Rust, Swift, Kotlin, Bash, R, and many more.",
    answerBn: "আমরা ৫০+ টেকনোলজি সমর্থন করি।",
  },
  {
    question: "Can I learn in Bengali?",
    questionBn: "আমি কি বাংলায় শিখতে পারি?",
    answer: "Absolutely! CodeMastery offers full Bengali (বাংলা) support. Switch languages using the language selector in the sidebar. The entire interface, navigation, and lesson content adapts to your preferred language instantly.",
    answerBn: "অবশ্যই! CodeMastery সম্পূর্ণ বাংলা সমর্থন অফার করে।",
  },
  {
    question: "How does the progress tracking work?",
    questionBn: "প্রগ্রেস ট্র্যাকিং কিভাবে কাজ করে?",
    answer: "Your progress is automatically tracked as you complete lessons, quizzes, and challenges. You earn XP points, maintain daily streaks, and unlock certificates. All progress is saved locally and synced across sessions.",
    answerBn: "আপনি পাঠ, কুইজ এবং চ্যালেঞ্জ সম্পন্ন করার সাথে সাথে আপনার প্রগ্রেস স্বয়ংক্রিয়ভাবে ট্র্যাক হয়।",
  },
  {
    question: "Can I use CodeMastery on mobile?",
    questionBn: "আমি কি মোবাইলে CodeMastery ব্যবহার করতে পারি?",
    answer: "Yes! CodeMastery is fully responsive and works on desktop, tablet, and mobile devices. The sidebar collapses on smaller screens, and the compiler, quizzes, and lessons are all optimized for touch interaction.",
    answerBn: "হ্যাঁ! CodeMastery সম্পূর্ণ রেসপন্সিভ এবং ডেস্কটপ, ট্যাবলেট এবং মোবাইল ডিভাইসে কাজ করে।",
  },
];

const roadmapItems = [
  { status: "done", title: "50+ Learning Tracks", titleBn: "৫০+ লার্নিং ট্র্যাক" },
  { status: "done", title: "Built-in Code Compiler", titleBn: "বিল্ট-ইন কোড কম্পাইলার" },
  { status: "done", title: "Bilingual Support (EN/BN)", titleBn: "দ্বিভাষিক সমর্থন" },
  { status: "done", title: "Progress Tracking & XP", titleBn: "প্রগ্রেস ট্র্যাকিং ও XP" },
  { status: "done", title: "Certificate System", titleBn: "সার্টিফিকেট সিস্টেম" },
  { status: "done", title: "Technology Directory", titleBn: "টেকনোলজি ডিরেক্টরি" },
  { status: "done", title: "Web Dev Hub", titleBn: "ওয়েব ডেভ হাব" },
  { status: "active", title: "AI-Powered Learning Assistant", titleBn: "AI-চালিত লার্নিং অ্যাসিস্ট্যান্ট" },
  { status: "active", title: "Collaborative Coding Rooms", titleBn: "কলাবোরেটিভ কোডিং রুম" },
  { status: "planned", title: "Mobile App (React Native)", titleBn: "মোবাইল অ্যাপ" },
  { status: "planned", title: "Community Forums", titleBn: "কমিউনিটি ফোরাম" },
  { status: "planned", title: "Advanced Analytics Dashboard", titleBn: "অ্যাডভান্সড অ্যানালিটিক্স ড্যাশবোর্ড" },
];

function About() {
  const { t, lang } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="px-6 md:px-8 lg:px-10 py-6 md:py-8 space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-electric-blue/5" />
        <div className="relative space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3 h-3" />
              {lang === "bn" ? "আমাদের সম্পর্কে" : "About Us"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              {lang === "bn" ? (
                <>
                  প্রোগ্রামিং শেখার<br />
                  <span className="text-primary">সবচেয়ে সহজ উপায়</span>
                </>
              ) : (
                <>
                  The Easiest Way to<br />
                  <span className="text-primary">Learn Programming</span>
                </>
              )}
            </h1>
            <p className="mt-4 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              {lang === "bn" 
                ? "CodeMastery হলো একটি সম্পূর্ণ বিনামূল্যের ইন্টারেক্টিভ লার্নিং প্ল্যাটফর্ম যেখানে আপনি ৫০+ প্রোগ্রামিং ভাষা ও টেকনোলজি শিখতে পারবেন — ব্রাউজারেই কোড লিখে, কুইজ দিয়ে, এবং প্র্যাকটিস চ্যালেঞ্জ সম্পন্ন করে।"
                : "CodeMastery is a completely free, interactive learning platform where you can master 50+ programming languages and technologies — by writing code in your browser, taking quizzes, and completing practice challenges."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border p-4 text-center"
              style={{ borderRadius: 0 }}
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary/60" />
              <p className="text-2xl font-black text-primary">{stat.value}</p>
              <p className="text-[10px] font-mono text-foreground/50 uppercase tracking-wider mt-1">
                {lang === "bn" ? stat.labelBn : stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card border border-border p-8"
          style={{ borderRadius: 0 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-black uppercase tracking-tight">
              {lang === "bn" ? "আমাদের লক্ষ্য" : "Our Mission"}
            </h2>
          </div>
          <p className="text-foreground/60 leading-relaxed">
            {lang === "bn"
              ? "প্রোগ্রামিং শিক্ষাকে সবার জন্য সহজলভ্য, ইন্টারেক্টিভ এবং আনন্দদায়ক করা। আমরা বিশ্বাস করি যে প্রতিটি মানুষের কোডিং শেখার অধিকার আছে — কোনো টাকা ছাড়া, কোনো জটিল সেটআপ ছাড়া, শুধু একটি ব্রাউজার দিয়ে।"
              : "To make programming education accessible, interactive, and enjoyable for everyone. We believe every person deserves the right to learn coding — without cost, without complex setup, with just a browser."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card border border-border p-8"
          style={{ borderRadius: 0 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-electric-blue/10">
              <Rocket className="w-5 h-5 text-electric-blue" />
            </div>
            <h2 className="text-xl font-black uppercase tracking-tight">
              {lang === "bn" ? "আমাদের ভিশন" : "Our Vision"}
            </h2>
          </div>
          <p className="text-foreground/60 leading-relaxed">
            {lang === "bn"
              ? "বিশ্বের বৃহত্তম ও সবচেয়ে কার্যকর ফ্রি প্রোগ্রামিং লার্নিং প্ল্যাটফর্ম হয়ে ওঠা — যেখানে যেকোনো বয়সের, যেকোনো ভাষার শিক্ষার্থীরা প্রোগ্রামিং শিখে তাদের ক্যারিয়ার গড়তে পারে।"
              : "To become the world's largest and most effective free programming learning platform — where learners of any age and language can build their careers through coding education."}
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            {lang === "bn" ? "কী কী আছে এখানে" : "What Makes CodeMastery Different"}
          </h2>
          <p className="mt-2 text-foreground/50">
            {lang === "bn"
              ? "একটি প্ল্যাটফর্ম, সব প্রোগ্রামিং শিক্ষা"
              : "One platform, all the programming education you need"}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border p-6 hover:border-primary/30 transition-colors group"
              style={{ borderRadius: 0 }}
            >
              <div className={`inline-flex p-2.5 ${feature.bg} mb-4`}>
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
              </div>
              <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">
                {lang === "bn" ? feature.titleBn : feature.title}
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                {lang === "bn" ? feature.descriptionBn : feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Developer Features */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            {lang === "bn" ? "ডেভেলপার ফিচারস" : "Developer Features"}
          </h2>
          <p className="mt-2 text-foreground/50">
            {lang === "bn"
              ? "ডেভেলপারদের জন্য বিশেষ টুলস"
              : "Special tools built for developers"}
          </p>
        </div>
        <Link
          to="/dev-profile"
          className="group block bg-card border border-border p-8 hover:border-electric-blue/50 transition-all duration-300"
          style={{ borderRadius: 0 }}
        >
          <div className="flex items-start gap-6 flex-col md:flex-row">
            <div className="p-3 bg-electric-blue/10 shrink-0">
              <Github className="w-8 h-8 text-electric-blue" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-electric-blue transition-colors mb-2">
                {lang === "bn" ? "ডেভেলপার প্রোফাইল" : "Developer Profile"}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {lang === "bn"
                  ? "আপনার GitHub প্রোফাইলকে একটি সাইবার-ব্রুটালিস্ট ড্যাশবোর্ডে রূপান্তর করুন। রিয়েল-টাইম স্ট্যাটস, কন্ট্রিবিউশন হিটম্যাপ, রিপোজিটরি গ্রিড, এবং লাইভ সিগন্যাল ফিড — সবকিছু একটি আধুনিক, আকর্ষণীয় ডিজাইনে। আপনার ইউজারনেম দিন এবং সাথে সাথে দেখুন।"
                  : "Transform your GitHub profile into a cyber-brutalist dashboard. Real-time stats, contribution heatmap, repository grid, and live signal feed — all in a modern, stunning design. Just enter your username and watch it come to life."}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 font-mono text-sm font-bold text-electric-blue group-hover:gap-3 transition-all">
                {lang === "bn" ? "এখনই দেখুন" : "View Your Profile"}
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-8">
          {lang === "bn" ? "কিভাবে কাজ করে" : "How It Works"}
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", icon: BookOpen, title: "Choose a Track", titleBn: "একটি ট্র্যাক বেছে নিন", desc: "Pick from 50+ learning tracks based on your goals and experience level.", descBn: "আপনার লক্ষ্য ও অভিজ্ঞতা অনুযায়ী ৫০+ ট্র্যাক থেকে বেছে নিন।" },
            { step: "02", icon: Code2, title: "Learn by Doing", titleBn: "করে শিখুন", desc: "Read lessons, study code examples, and write code in the built-in compiler.", descBn: "পাঠ পড়ুন, কোড উদাহরণ দেখুন, এবং বিল্ট-ইন কম্পাইলারে কোড লিখুন।" },
            { step: "03", icon: Trophy, title: "Test & Practice", titleBn: "টেস্ট ও প্র্যাকটিস", desc: "Take quizzes and complete coding challenges to reinforce your knowledge.", descBn: "কুইজ দিন এবং কোডিং চ্যালেঞ্জ সম্পন্ন করে জ্ঞান মজবুত করুন।" },
            { step: "04", icon: Award, title: "Get Certified", titleBn: "সার্টিফিকেট পান", desc: "Earn certificates and track your progress as you advance through tracks.", descBn: "সার্টিফিকেট অর্জন করুন এবং প্রগ্রেস ট্র্যাক করুন।" },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="bg-card border border-border p-6" style={{ borderRadius: 0 }}>
                <span className="text-4xl font-black text-primary/10">{item.step}</span>
                <div className="flex items-center gap-2 mt-2 mb-3">
                  <item.icon className="w-4 h-4 text-primary" />
                  <h3 className="font-bold">{lang === "bn" ? item.titleBn : item.title}</h3>
                </div>
                <p className="text-sm text-foreground/50">
                  {lang === "bn" ? item.descBn : item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section>
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
          {lang === "bn" ? "টেকনোলজি স্ট্যাক" : "Built With"}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((group) => (
            <div key={group.category} className="bg-card border border-border p-5" style={{ borderRadius: 0 }}>
              <h3 className="font-mono text-xs text-primary uppercase tracking-wider mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-foreground/[0.05] border border-border text-xs font-mono">
                    <CheckCircle className="w-3 h-3 text-terminal-green" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section>
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
          {lang === "bn" ? "ভবিষ্যৎ পরিকল্পনা" : "Roadmap"}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {roadmapItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-card border border-border p-4" style={{ borderRadius: 0 }}>
              <div className={`w-2.5 h-2.5 shrink-0 ${
                item.status === "done" ? "bg-terminal-green" :
                item.status === "active" ? "bg-electric-blue animate-pulse" :
                "bg-foreground/20"
              }`} />
              <span className="text-sm font-medium">
                {lang === "bn" ? item.titleBn : item.title}
              </span>
              <span className={`ml-auto text-[10px] font-mono uppercase ${
                item.status === "done" ? "text-terminal-green" :
                item.status === "active" ? "text-electric-blue" :
                "text-foreground/30"
              }`}>
                {item.status === "done" ? (lang === "bn" ? "সম্পন্ন" : "Done") :
                 item.status === "active" ? (lang === "bn" ? "চলমান" : "Active") :
                 (lang === "bn" ? "পরিকল্পনা" : "Planned")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
          {lang === "bn" ? "সচরাচর জিজ্ঞাসা" : "Frequently Asked Questions"}
        </h2>
        <div className="space-y-2 max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border" style={{ borderRadius: 0 }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-foreground/[0.02] transition-colors"
              >
                <span className="font-medium pr-4">
                  {lang === "bn" ? faq.questionBn : faq.question}
                </span>
                <ChevronDown className={`w-4 h-4 text-foreground/40 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-foreground/50 leading-relaxed">
                      {lang === "bn" ? faq.answerBn : faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary/10 via-electric-blue/5 to-primary/10 border border-primary/20 p-8 md:p-12 text-center" style={{ borderRadius: 0 }}>
        <Heart className="w-10 h-10 mx-auto mb-4 text-primary" />
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">
          {lang === "bn" ? "আজই শুরু করুন" : "Start Learning Today"}
        </h2>
        <p className="text-foreground/60 mb-6 max-w-xl mx-auto">
          {lang === "bn"
            ? "হাজার হাজার শিক্ষার্থী ইতিমধ্যে CodeMastery দিয়ে প্রোগ্রামিং শিখছে। আপনিও শুরু করুন — সম্পূর্ণ বিনামূল্যে।"
            : "Thousands of learners are already mastering programming with CodeMastery. Start your journey today — completely free."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            style={{ borderRadius: 0 }}
          >
            {lang === "bn" ? "ট্র্যাক দেখুন" : "Browse Tracks"}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/compiler"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground/[0.05] border border-border font-mono font-bold text-sm hover:bg-foreground/[0.1] transition-colors"
            style={{ borderRadius: 0 }}
          >
            <Terminal className="w-4 h-4" />
            {lang === "bn" ? "কম্পাইলার খুলুন" : "Open Compiler"}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
