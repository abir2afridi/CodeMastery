# CODEMASTERY — GIT TRACK ADDITION

# Add Git as a 24th track to the existing CodeMastery platform

# 55+ chapters · Beginner to Advanced · Real Git workflows · GitHub integration · Interactive terminal simulator

## OVERVIEW

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a complete Git learning track. Follow ALL existing design patterns, curriculum structures, component conventions, quiz systems, progress systems, exercise systems, certificates, achievements, and compiler/sandbox standards already established for all previous tracks.

This track must take a complete beginner from "never used version control before" to advanced professional Git workflows used in real software engineering teams.

IMPORTANT:

* This is NOT just Git commands.
* Teach real-world workflows.
* Teach collaboration.
* Teach GitHub.
* Teach debugging merge conflicts.
* Teach CI/CD integration.
* Teach Git internals.
* Teach enterprise workflows.

The learning experience must feel like a premium interactive Git academy.

---

# GIT SANDBOX / TERMINAL SIMULATOR

Implement a full browser-based Git sandbox environment.

## COMPONENT

Create:
/components/compiler/GitTerminalSimulator.tsx

Features:

* Interactive terminal-style UI
* Fake filesystem visualization
* Repository graph visualization
* Branch graph visualizer
* Commit history timeline
* Drag-and-drop merge visualizer
* Real-time command execution simulation
* Command history navigation
* Auto-complete suggestions
* Keyboard shortcuts
* Split view:

  * Terminal
  * File tree
  * Commit graph
  * Git status panel

## COMMAND SUPPORT

Support simulation for:

* git init
* git clone
* git add
* git commit
* git push
* git pull
* git fetch
* git merge
* git rebase
* git checkout
* git switch
* git branch
* git stash
* git reset
* git revert
* git tag
* git remote
* git log
* git diff
* git cherry-pick
* git bisect
* git reflog
* git blame
* git config
* git restore
* git clean
* git rm
* git mv
* git worktree
* git submodule

## VISUALIZATION REQUIREMENTS

1. Branch graph animation
2. Merge conflict visualizer
3. Commit DAG visualization
4. Rebase replay animation
5. Detached HEAD visualization
6. Stash stack visualizer
7. Working tree vs staging area comparison
8. Remote repository simulation
9. Pull request simulation
10. GitHub workflow simulator

## TECHNICAL REQUIREMENTS

* Use Zustand or Redux for Git state management
* Persist simulated repo state in IndexedDB/localStorage
* Animate graph transitions with Framer Motion
* Use Monaco editor or CodeMirror for editable files
* Simulate realistic Git outputs
* Include intentional error states
* Add hint system for beginners
* Support reset sandbox button
* Include step-by-step guided mode

---

# CURRICULUM DATA STRUCTURE

Create:
/lib/curriculum/git-curriculum.ts

Update:
/lib/curriculum/types.ts

Add track metadata:

* id: "git"
* title: "Git"
* tagline: "Master version control and professional collaboration"
* icon: "🌿"
* color: "#F05032"
* totalChapters: 55
* estimatedHours: 80

---

# FULL CURRICULUM — 55 CHAPTERS

=== PART 1: VERSION CONTROL FOUNDATIONS (Chapters 1–8) ===

Chapter 1: What Is Version Control and Why Git Exists?
Chapter 2: Installing Git and First Setup
Chapter 3: Git Architecture — Working Tree, Staging, Repository
Chapter 4: Creating Your First Repository
Chapter 5: Tracking Files with git add
Chapter 6: Commits — Snapshots Explained
Chapter 7: Understanding HEAD
Chapter 8: Git Status, Diff, and Log

Each chapter MUST contain:

* 400+ words per section
* Real-world analogies
* Visual explanations
* Step-by-step terminal walkthroughs
* Common mistakes section
* Professional workflow examples
* 8+ quiz questions with detailed explanations
* 3+ practice exercises
* Interactive sandbox challenges

---

=== PART 2: BRANCHING AND MERGING (Chapters 9–18) ===

Chapter 9: Branches — Parallel Universes for Code
Chapter 10: Creating and Switching Branches
Chapter 11: Merging Branches
Chapter 12: Fast-Forward vs Three-Way Merge
Chapter 13: Merge Conflicts — Detection and Resolution
Chapter 14: Rebasing — Clean History Workflows
Chapter 15: Cherry-Picking Commits
Chapter 16: Detached HEAD State
Chapter 17: Git Tags and Releases
Chapter 18: Git Reflog and Recovery

Include:

* Branch graph animations
* Conflict resolution simulator
* Rebase visualization
* Interactive merge editor
* Recovery scenarios

---

=== PART 3: REMOTE REPOSITORIES AND GITHUB (Chapters 19–30) ===

Chapter 19: What Is GitHub?
Chapter 20: Connecting Local Repo to GitHub
Chapter 21: git push and git pull Deep Dive
Chapter 22: git fetch vs pull
Chapter 23: Pull Requests Explained
Chapter 24: Forking and Open Source Contribution
Chapter 25: GitHub Issues and Project Boards
Chapter 26: Branch Protection Rules
Chapter 27: GitHub Actions Basics
Chapter 28: Semantic Versioning
Chapter 29: GitHub Releases
Chapter 30: Open Source Collaboration Workflow

Must include:

* GitHub UI integration
* PR review simulator
* Collaboration exercises
* Fake team workflow environment
* CI/CD workflow examples

---

=== PART 4: ADVANCED GIT (Chapters 31–42) ===

Chapter 31: Git Internals — Objects and SHA Hashes
Chapter 32: Blobs, Trees, and Commits
Chapter 33: Git Packfiles
Chapter 34: Interactive Rebase
Chapter 35: Squashing and Fixup Commits
Chapter 36: Git Hooks
Chapter 37: Git Bisect for Bug Hunting
Chapter 38: Submodules
Chapter 39: Worktrees
Chapter 40: Monorepo Strategies
Chapter 41: Large File Storage (Git LFS)
Chapter 42: Git Performance Optimization

Include:

* Internal object visualization
* SHA hash explorer
* Commit graph debugger
* Bug hunting simulations

---

=== PART 5: PROFESSIONAL WORKFLOWS (Chapters 43–50) ===

Chapter 43: Git Flow Workflow
Chapter 44: GitHub Flow Workflow
Chapter 45: Trunk-Based Development
Chapter 46: Release Branch Strategy
Chapter 47: Hotfix Workflow
Chapter 48: Code Review Best Practices
Chapter 49: Team Collaboration at Scale
Chapter 50: Enterprise Git Strategies

Teach:

* Real industry workflows
* Team scaling strategies
* Large company workflows
* Deployment pipelines
* Release management

---

=== PART 6: PROJECTS AND CHALLENGES (Chapters 51–55) ===

Chapter 51: Project — Build an Open Source Workflow
Chapter 52: Project — Team Collaboration Simulation
Chapter 53: Project — CI/CD GitHub Pipeline
Chapter 54: Git Disaster Recovery Challenges
Chapter 55: Git Mastery Recap + Certificate Prep

---

# GIT-SPECIFIC FEATURES

## INTERACTIVE CHALLENGES

1. Fix broken repository
2. Recover deleted commits
3. Resolve complex merge conflicts
4. Rewrite commit history safely
5. Collaborate with simulated teammates
6. Rebase without breaking history
7. Build release workflow
8. Debug production issue using git bisect

## VISUAL LEARNING TOOLS

* Commit tree explorer
* Staging area visualizer
* Working tree animation
* Remote sync animation
* Merge conflict highlighter
* Interactive timeline playback
* Commit ancestry explorer

## GAMIFICATION

* Git streaks
* Contribution graph achievements
* Merge master badges
* Conflict resolver achievements
* Open source contributor badges

---

# QUALITY REQUIREMENTS

* ZERO placeholder content
* All commands must behave realistically
* All Git outputs must mimic real Git CLI
* Every workflow tested
* All graphs animated
* Every chapter fully written
* Every quiz has detailed explanations
* Every challenge must be solvable in-browser
* Mobile responsive terminal layout
* Keyboard accessibility support
* Dark mode support

---

# IMPLEMENTATION REQUIREMENTS

1. Add Git track to dashboard
2. Add Git certificate system
3. Add Git achievements
4. Add Git sandbox routes:

   * /compiler/git
   * /sandbox/git
5. Add Git profile progress tracking
6. Add Git-specific streak metrics
7. Add GitHub-inspired UI theme sections
8. Add downloadable cheat sheets
9. Add searchable Git command reference
10. Add advanced Git glossary

