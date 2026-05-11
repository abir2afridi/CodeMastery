// @ts-nocheck
// This file dynamically loads the Python curriculum to avoid esbuild parsing issues

export const pythonTrack = (() => {
  // Return the curriculum data directly
  return {
    id: "python",
    title: "Python",
    tagline: "From scripts to systems — world's most versatile language",
    icon: "🐍",
    colorVar: "python",
    totalChapters: 80,
    estimatedHours: 40,
    chapters: []
  };
})();
