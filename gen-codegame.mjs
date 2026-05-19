import { writeFileSync } from "fs";

const L = (id, title, content) => JSON.stringify({ id, type:"lesson", title, content });
const Q = (id, q, opts, corr, expl) => JSON.stringify({ id, type:"quiz", question:q, options:opts, correct:corr, explanation:expl });
const E = (id, title, desc) => JSON.stringify({ id, type:"exercise", title, description:desc });

function makeQuiz(n) {
  const qs = [];
  for (let i = 1; i <= 8; i++) {
    qs.push(Q(`gq${n}_${i}`,`Question ${i} for CodeGame chapter ${n}?`,["Option A","Option B","Option C","Option D"],0,"Review the chapter material for the correct answer."));
  }
  return qs.join(",");
}

function genSections(n, title) {
  return [
    L(`c${n}s1`,`Introduction to ${title}`,"This section introduces the interactive gaming concepts that make learning to code fun and engaging. CodeGame transforms traditional programming education into an adventure filled with puzzles, challenges, and boss battles. Each gaming mechanic is designed to reinforce coding concepts through hands-on play, making learning feel like an exciting game rather than a textbook lesson."),
    L(`c${n}s2`,`Game Mechanics and Strategy`,"This section explains the game mechanics, scoring systems, and strategies needed to master each challenge. You will learn how to approach coding puzzles, optimize your solutions for speed and accuracy, and develop the skills needed to defeat increasingly difficult levels and boss battles."),
    L(`c${n}s3`,`Practice and Mastery`,"This section provides hands-on practice with interactive coding games that test your skills in real-time. Complete challenges, earn XP, climb the leaderboards, and unlock achievements as you progress from beginner to grandmaster level in the CodeGame arena."),
  ];
}

const diffs = [
  "Absolute Beginner","Absolute Beginner","Absolute Beginner","Absolute Beginner","Absolute Beginner","Absolute Beginner","Absolute Beginner","Absolute Beginner",
  "Beginner","Beginner","Beginner","Beginner","Beginner","Beginner","Beginner","Beginner",
  "Intermediate","Intermediate","Intermediate","Intermediate","Intermediate","Intermediate","Intermediate","Intermediate","Intermediate","Intermediate","Intermediate","Intermediate",
  "Intermediate","Intermediate","Advanced","Advanced","Advanced","Advanced","Advanced","Advanced","Advanced","Advanced",
  "Advanced","Advanced","Advanced","Advanced","Advanced","Advanced","Advanced",
  "Expert","Expert","Expert","Expert","Expert",
];

const parts = [
  {label:"Part 1: Intro to CodeGame", min:35, xp:70},
  {label:"Part 2: HTML/CSS Games", min:40, xp:80},
  {label:"Part 3: JavaScript Games", min:45, xp:90},
  {label:"Part 4: Algorithms and DSA Games", min:50, xp:100},
  {label:"Part 5: Multiplayer + Advanced", min:50, xp:100},
  {label:"Part 6: Final Challenges", min:60, xp:120},
];

const titles = [
  [1,"Welcome to CodeGame","কোডগেমে স্বাগতম"],[2,"Understanding XP and Levels","এক্সপি এবং লেভেল বোঝা"],[3,"First Logic Puzzle","প্রথম লজিক পাজল"],[4,"Keyboard Controls and Challenges","কিবোর্ড কন্ট্রোল ও চ্যালেঞ্জ"],[5,"Interactive Syntax Games","ইন্টারঅ্যাকটিভ সিনট্যাক্স গেম"],[6,"Intro to Coding Battles","কোডিং ব্যাটলের পরিচিতি"],[7,"Timed Challenges","টাইমড চ্যালেঞ্জ"],[8,"Daily Missions System","ডেইলি মিশন সিস্টেম"],
  [9,"HTML Builder Puzzle","এইচটিএমএল বিল্ডার পাজল"],[10,"CSS Styling Challenge","সিএসএস স্টাইলিং চ্যালেঞ্জ"],[11,"Responsive Design Game","রেসপন্সিভ ডিজাইন গেম"],[12,"Flexbox Arena","ফ্লেক্সবক্স এরিনা"],[13,"CSS Grid Puzzle","সিএসএস গ্রিড পাজল"],[14,"Animation Challenge","অ্যানিমেশন চ্যালেঞ্জ"],[15,"Accessibility Puzzle","অ্যাক্সেসিবিলিটি পাজল"],[16,"Frontend Boss Battle","ফ্রন্টএন্ড বস ব্যাটল"],
  [17,"Variables Adventure","ভেরিয়েবল অ্যাডভেঞ্চার"],[18,"Function Maze","ফাংশন মেজ"],[19,"Loop Survival Game","লুপ সারভাইভাল গেম"],[20,"DOM Manipulation Battle","ডিওএম ম্যানিপুলেশন ব্যাটল"],[21,"Event Handling Arena","ইভেন্ট হ্যান্ডলিং এরিনা"],[22,"Async Challenge","অ্যাসিঙ্ক চ্যালেঞ্জ"],[23,"API Fetch Race","এপিআই ফেচ রেস"],[24,"Debugging Simulator","ডিবাগিং সিমুলেটর"],[25,"Memory Management Game","মেমরি ম্যানেজমেন্ট গেম"],[26,"Mini Algorithm Wars","মিনি অ্যালগরিদম ওয়ার্স"],[27,"JavaScript Boss Level","জাভাস্ক্রিপ্ট বস লেভেল"],[28,"AI Opponent Coding Match","এআই প্রতিপক্ষ কোডিং ম্যাচ"],
  [29,"Sorting Race","সর্টিং রেস"],[30,"Binary Search Mission","বাইনারি সার্চ মিশন"],[31,"Linked List Builder","লিংকড লিস্ট বিল্ডার"],[32,"Stack and Queue Puzzle","স্ট্যাক ও কিউ পাজল"],[33,"Tree Traversal Explorer","ট্রি ট্রাভার্সাল এক্সপ্লোরার"],[34,"Graph Pathfinding Game","গ্রাফ পাথফাইন্ডিং গেম"],[35,"Recursion Dungeon","রিকারশন ডাঞ্জন"],[36,"Dynamic Programming Arena","ডায়নামিক প্রোগ্রামিং এরিনা"],[37,"Competitive Coding Battle","প্রতিযোগিতামূলক কোডিং ব্যাটল"],[38,"DSA Boss Battle","ডিএসএ বস ব্যাটল"],
  [39,"Multiplayer Coding Arena","মাল্টিপ্লেয়ার কোডিং এরিনা"],[40,"Team Coding Challenges","টিম কোডিং চ্যালেঞ্জ"],[41,"Live Tournament System","লাইভ টুর্নামেন্ট সিস্টেম"],[42,"Ranking and Elo System","র্যাঙ্কিং ও ইলো সিস্টেম"],[43,"AI Generated Challenges","এআই জেনারেটেড চ্যালেঞ্জ"],[44,"Sandbox Game Creator","স্যান্ডবক্স গেম ক্রিয়েটর"],[45,"Custom User Challenges","কাস্টম ইউজার চ্যালেঞ্জ"],
  [46,"Mega Puzzle Challenge","মেগা পাজল চ্যালেঞ্জ"],[47,"Speedrun Coding Tournament","স্পিডরান কোডিং টুর্নামেন্ট"],[48,"Ultimate Boss Battle","আলটিমেট বস ব্যাটল"],[49,"Grandmaster Challenge","গ্র্যান্ডমাস্টার চ্যালেঞ্জ"],[50,"CodeGame Mastery + Certificate","কোডগেম মাস্টারি + সার্টিফিকেট"],
];

const chapters = [];
titles.forEach(([n, enTitle, bnTitle]) => {
  let partIdx;
  if (n <= 8) partIdx = 0;
  else if (n <= 16) partIdx = 1;
  else if (n <= 28) partIdx = 2;
  else if (n <= 38) partIdx = 3;
  else if (n <= 45) partIdx = 4;
  else partIdx = 5;
  const part = parts[partIdx];
  const diff = diffs[n - 1] || "Intermediate";
  const secs = genSections(n, enTitle);
  const exercises = [
    E(`c${n}e1`,`${enTitle} Practice 1`,`Practice ${enTitle} with this interactive coding game.`),
    E(`c${n}e2`,`${enTitle} Practice 2`,`Apply ${enTitle} strategies in a timed challenge.`),
    E(`c${n}e3`,`${enTitle} Practice 3`,`Master ${enTitle} in a boss battle scenario.`),
  ];
  const allSecs = [...secs, ...exercises];
  const secStr = allSecs.map(s => JSON.stringify(s)).join(",");
  chapters.push(`  { id:"c${n}", number:${n}, title:"${enTitle}", titleBn:"${bnTitle}", subtitle:"${enTitle}", difficulty:"${diff}", estimatedMinutes:${part.min}, xpReward:${part.xp}, prerequisites:[], learningObjectives:["Master ${enTitle}"], sections:[${secStr}], quiz:{questions:[${makeQuiz(n)}],passingScore:70}, cheatSheet:[{label:"Key Concept",value:"${enTitle}"}] }`);
});

const output = `import { Track } from "./types";

export const codegameTrack: Track = {
  id: "codegame",
  title: "CodeGame",
  titleBn: "কোডগেম",
  tagline: "Learn coding through interactive games",
  taglineBn: "ইন্টারঅ্যাকটিভ গেমের মাধ্যমে কোডিং শিখুন",
  icon: "https://img.icons8.com/?size=160&id=111051&format=png",
  colorVar: "codegame",
  brandColor: "#8B5CF6",
  glowColor: "rgba(139,92,246,0.3)",
  totalChapters: 50,
  estimatedHours: 70,
  chapters: [
${chapters.join(",\n")}
  ]
};`;

writeFileSync("src/lib/curriculum/codegame-curriculum.ts", output);
console.log(`Generated codegame-curriculum.ts with ${chapters.length} chapters`);
