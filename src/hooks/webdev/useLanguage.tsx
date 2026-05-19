import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "bn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.overview": "Overview",
    "nav.ranking": "Rankings",
    "nav.roadmaps": "Roadmaps",
    "nav.bookmarks": "Bookmarks",
    "nav.compare": "Comparison",
    "nav.devTools": "Tools",
    "nav.settings": "Settings",
    "nav.languages": "Programming Languages",
    "nav.back": "Back",
    "header.sectorArchitecture": "Sector Architecture",
    "header.systemTime": "System Time",
    "header.admin": "Admin",
    "header.securityNode": "Security Node",
    "header.searchPlaceholder": "Query any technology...",
    "index.coreDomains": "Core Domains",
    "index.techSectors": "Technological Sectors",
    "index.globalRegistry": "Global Registry",
    "index.verifiedAssets": "Verified Engineering Assets",
    "index.indexEntries": "Index Entries",
    "index.dataIntegrity": "Data Integrity",
    "index.integrityDesc": "All entries are cross-verified with official documentation for maximal reliability.",
    "index.coreProcessing": "Core Processing",
    "index.processingDesc": "Our categorization algorithm uses industry-standard taxonomy for accurate indexing.",
    "index.activeMonitoring": "Active Monitoring",
    "index.monitoringDesc": "Daily synchronized updates ensure the registry reflects current market trends.",
    "index.accessRankings": "Access Rankings",
    "index.strategyView": "Strategy View",
    "settings.title": "Registry Settings",
    "settings.language": "Language Configuration",
    "settings.languageDescription": "Select the primary interface language for the technical registry.",
    "settings.appearance": "Appearance Profile",
    "settings.appearanceDescription": "Configure the visual protocol for the system display.",
    "settings.status": "System Status: Online",
    "settings.toggleMode": "Toggle Interface Mode",
    "settings.lightPulse": "Light Pulse",
    "settings.darkVoid": "Dark Void",
    "settings.latency": "Latency",
    "settings.node": "Node",
    "settings.refreshAssets": "Refresh Assets",
    "sidebar.directory": "Directory",
    "sidebar.units": "Units",
    "sidebar.admin": "Administrator",
    "tech.registry": "Registry",
    "tech.errorTitle": "Status 404: Asset Missing",
    "tech.returnHome": "Return to Registry Index",
    "tech.analysisActive": "Analysis Active",
    "tech.addToAnalysis": "Add to Analysis",
    "tech.sourcePlatform": "Source Platform",
    "tech.technicalAsset": "Technical Index Asset",
    "tech.capabilities": "Core Capabilities Matrix",
    "tech.operationalModule": "Operational Module",
    "tech.strategicVectors": "Strategic Vectors",
    "tech.globalAdopters": "Global Adopters",
    "tech.techSignature": "Technical Signature",
    "tech.syncClipboard": "Sync to Clipboard",
    "tech.specs": "Registry Specs",
    "tech.creator": "Architect / Core",
    "tech.releaseYear": "Release Year",
    "tech.languageBase": "Language Base",
    "tech.latestVersion": "Latest Version",
    "tech.momentum": "Strategic Momentum",
    "tech.advantages": "Key Advantages",
    "tech.constraints": "Operational Constraints",
    "tech.learningVectors": "Learning Vectors",
    "tech.officialBadge": "Official Registry Entry",
    "tech.verifiedIntegrity": "Verified for Integrity",
    "tech.sync": "Synchronized",
    "tech.deploymentSequence": "Deployment Sequence",
    "tech.communityDepth": "Community Depth",
    "ranking.heroBadge": "Architectural Rankings",
    "ranking.heroDesc": "Market dominance evaluation based on adoption velocity and architectural integrity.",
    "ranking.velocity": "Velocity",
    "ranking.velocityDesc": "Top momentum assets",
    "ranking.presence": "Presence",
    "ranking.presenceDesc": "Global ecosystem depth",
    "ranking.units": "Units",
    "ranking.masterRank": "Master Ranking",
    "ranking.masterRankDesc": "The official registry of performance",
    "ranking.unitsIndexed": "Units Indexed",
    "ranking.rank": "Rank",
    "ranking.assetName": "Asset Name",
    "ranking.classification": "Classification",
    "ranking.inception": "Inception",
    "roadmaps.heroBadge": "Architectural Roadmaps",
    "roadmaps.heroDesc": "Strategic technical trajectories for modern engineering mastery.",
    "roadmaps.phase": "Phase",
    "header.indexNode": "Index Node",
    "header.category": "Category",
    "header.intel": "Intel",
    "header.noMatches": "No matches",
    "ticker.liveIntel": "Live Intel",
    "ticker.systemRunning": "System Running",
  },
  bn: {
    "nav.overview": "ওভারভিউ",
    "nav.ranking": "র‍্যাংকিং",
    "nav.roadmaps": "রোডম্যাপ",
    "nav.bookmarks": "বুকমার্ক",
    "nav.compare": "তুলনা",
    "nav.devTools": "টুলস",
    "nav.settings": "সেটিংস",
    "nav.languages": "প্রোগ্রামিং ল্যাঙ্গুয়েজ",
    "nav.back": "পিছনে",
    "header.sectorArchitecture": "সেক্টর আর্কিটেকচার",
    "header.systemTime": "সিস্টেম টাইম",
    "header.admin": "অ্যাডমিন",
    "header.securityNode": "সিকিউরিটি নোড",
    "header.searchPlaceholder": "যেকোনো প্রযুক্তি খুঁজুন...",
    "index.coreDomains": "কোর ডোমেন",
    "index.techSectors": "প্রযুক্তিগত সেক্টর",
    "index.globalRegistry": "গ্লোবাল রেজিস্ট্রি",
    "index.verifiedAssets": "যাচাইকৃত ইঞ্জিনিয়ারিং অ্যাসেট",
    "index.indexEntries": "ইনডেক্স এন্ট্রি",
    "index.dataIntegrity": "ডেটা ইন্টিগ্রিটি",
    "index.integrityDesc": "সর্বাধিক নির্ভরযোগ্যতার জন্য সমস্ত এন্ট্রি অফিসিয়াল নথিপত্রের সাথে ক্রস-ভেরিফাই করা হয়েছে।",
    "index.coreProcessing": "কোর প্রসেসিং",
    "index.processingDesc": "আমাদের ক্যাটাগরিাইজেশন অ্যালগরিদম সঠিক ইনডেক্সিংয়ের জন্য ইন্ডাস্ট্রি-স্ট্যান্ডার্ড ট্যাক্সোনমি ব্যবহার করে।",
    "index.activeMonitoring": "অ্যাক্টিভ মনিটরিং",
    "index.monitoringDesc": "প্রতিদিনের সিঙ্ক্রোনাইজড আপডেট নিশ্চিত করে যে রেজিস্ট্রি বর্তমান বাজারের ট্রেন্ড প্রতিফলিত করে।",
    "index.accessRankings": "র‍্যাংকিং দেখুন",
    "index.strategyView": "কৌশলগত দৃশ্য",
    "tech.officialBadge": "অফিসিয়াল রেজিস্ট্রি এন্ট্রি",
    "tech.verifiedIntegrity": "অখণ্ডতা যাচাইকৃত",
    "tech.registry": "রেজিস্ট্রি",
    "tech.errorTitle": "স্ট্যাটাস ৪০৪: অ্যাসেট নিখোঁজ",
    "tech.returnHome": "রেজিস্ট্রি ইনডেক্সে ফিরে যান",
    "tech.analysisActive": "বিশ্লেষণ সক্রিয়",
    "tech.addToAnalysis": "বিশ্লেষণে যোগ করুন",
    "tech.sourcePlatform": "সোর্স প্ল্যাটফর্ম",
    "tech.technicalAsset": "প্রযুক্তিগত ইনডেক্স অ্যাসেট",
    "tech.capabilities": "কোর ক্যাপাবিলিটি ম্যাট্রিক্স",
    "tech.operationalModule": "অপারেশনাল মডিউল",
    "tech.strategicVectors": "কৌশলগত ভেক্টর",
    "tech.globalAdopters": "গ্লোবাল অ্যাডপ্টার",
    "tech.techSignature": "প্রযুক্তিগত স্বাক্ষর",
    "tech.syncClipboard": "ক্লিপবোর্ডে সিঙ্ক করুন",
    "tech.specs": "রেজিস্ট্রি স্পেসিকিফিকেশন",
    "tech.creator": "স্থপতি / কোর",
    "tech.releaseYear": "মুক্তির বছর",
    "tech.languageBase": "ভাষা ভিত্তি",
    "tech.latestVersion": "সর্বশেষ সংস্করণ",
    "tech.momentum": "কৌশলগত মোমেন্টাম",
    "tech.advantages": "প্রধান সুবিধা",
    "tech.constraints": "অপারেশনাল সীমাবদ্ধতা",
    "tech.learningVectors": "লার্নিং ভেক্টর",
    "tech.sync": "সিঙ্ক্রোনাইজ করা হয়েছে",
    "tech.deploymentSequence": "ডেপ্লয়মেন্ট সিকোয়েন্স",
    "tech.communityDepth": "কমিউনিটি ডেপথ",
    "ranking.heroBadge": "আর্কিটেকচারাল র‍্যাংকিং",
    "ranking.heroDesc": "অ্যাডপশন ভেলোসিটি এবং আর্কিটেকচারাল ইন্টিগ্রিটির উপর ভিত্তি করে মার্কেট ডমিন্যান্স মূল্যায়ন।",
    "ranking.velocity": "ভেলোসিটি",
    "ranking.velocityDesc": "শীর্ষ মোমেন্টাম অ্যাসেট",
    "ranking.presence": "উপস্থিতি",
    "ranking.presenceDesc": "গ্লোবাল ইকোসিস্টেম ডেপথ",
    "ranking.units": "ইউনিট",
    "ranking.masterRank": "মাস্টার র‍্যাংকিং",
    "ranking.masterRankDesc": "পারফরম্যান্সের অফিসিয়াল রেজিস্ট্রি",
    "ranking.unitsIndexed": "ইউনিট ইনডেক্স করা হয়েছে",
    "ranking.rank": "র‍্যাঙ্ক",
    "ranking.assetName": "অ্যাসেট নাম",
    "ranking.classification": "ক্লাসিফিকেশন",
    "ranking.inception": "ইনসেপশন",
    "roadmaps.heroBadge": "আর্কিটেকচারাল রোডম্যাপ",
    "roadmaps.heroDesc": "আধুনিক ইঞ্জিনিয়ারিং মাস্টারি জন্য কৌশলগত প্রযুক্তিগত গতিপথ।",
    "roadmaps.phase": "ফেজ",
    "settings.toggleMode": "ইন্টারফেস মোড পরিবর্তন করুন",
    "settings.lightPulse": "লাইট পালস",
    "settings.darkVoid": "ডার্ক ভয়েড",
    "settings.latency": "লেটেন্সি",
    "settings.node": "নোড",
    "settings.refreshAssets": "অ্যাসেট রিফ্রেশ করুন",
    "header.indexNode": "ইনডেক্স নোড",
    "header.category": "ক্যাটাগরি",
    "header.intel": "ইন্টেল",
    "header.noMatches": "কোনো মিল পাওয়া যায়নি",
    "sidebar.admin": "অ্যাডমিনিস্ট্রেটর",
    "ticker.liveIntel": "লাইভ ইন্টেল",
    "ticker.systemRunning": "সিস্টেম চলছে",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("app-language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("app-language", language);
  }, [language]);

  const t = (key: string) => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
