# CODEMASTERY — BASH TRACK ADDITION
# Add Bash as a 31st track to the existing CodeMastery platform
# Shell Scripting · CLI Automation · Text Processing · System Administration

================================================================================
OVERVIEW
================================================================================

Extend the existing CodeMastery platform by adding a COMPLETE Bash learning track.

IMPORTANT:
This track must teach:
- Shell fundamentals and navigation
- Script writing and automation
- Text processing with grep, sed, awk
- System administration
- Process management
- DevOps workflows

This track must take students from:
- Absolute beginner
→ Shell user
→ Script writer
→ System automation engineer

================================================================================
TRACK METADATA
================================================================================

Create:
/lib/curriculum/bash-curriculum.ts

Add "bash" to Track type union.

Track metadata:
- id: "bash"
- title: "Bash"
- tagline: "Master the shell — automate everything"
- icon: "TerminalSquare"
- color: "#4EAA25"
- totalChapters: 60
- estimatedHours: 90

================================================================================
BASH COMPILER / RUNTIME SYSTEM
================================================================================

Implement:
- Browser-based Bash execution simulation
- Terminal output panel
- Syntax highlighting for shell scripts
- Command reference panel

Features:
- Run Bash scripts in simulated environment
- View command output
- Reset to default template
- Quick reference with common patterns

================================================================================
BASH CURRICULUM — 60 CHAPTERS
================================================================================

=== PART 1: BASH FOUNDATIONS (Chapters 1–10) ===
- What Is Bash and Why Learn It?
- Navigating the Filesystem
- Working with Files and Directories
- Viewing and Editing Files
- Permissions and Ownership
- Pipes and Redirection
- Environment Variables
- Process Management
- Command History and Shortcuts
- Finding Files and Content

=== PART 2: INTERMEDIATE BASH (Chapters 11–22) ===
- Introduction to Shell Scripting
- Variables in Scripts
- Positional Parameters and Input
- Conditional Statements
- Looping in Bash
- Functions in Bash
- Arrays in Bash
- String Manipulation
- Arithmetic and Calculations
- Error Handling and Debugging
- Regular Expressions with grep
- sed — Stream Editor

=== PART 3: TEXT PROCESSING & DATA (Chapters 23–34) ===
- awk — Text Processing Powerhouse
- Advanced awk
- cut, paste, and join
- sort and uniq
- diff and patch
- File Archiving and Compression
- File Monitoring and Watching
- Date, Time, and Timers
- Network Commands
- Text Editors in Terminal
- Job Scheduling with cron
- Shell Aliases and Functions

=== PART 4: SYSTEM ADMINISTRATION (Chapters 35–46) ===
- User and Group Management
- Disk and Filesystem Management
- Package Management
- System Logs and Journalctl
- Process Prioritization and Limits
- SSH and Remote Access
- Firewall and Security
- Systemd and Services
- Environment and Shell Configuration
- Backup Strategies
- Monitoring and Alerting
- Performance Tuning

=== PART 5: ADVANCED BASH (Chapters 47–54) ===
- Advanced Scripting Techniques
- Debugging Complex Scripts
- Bash Security Practices
- POSIX vs Bash Extensions
- Integration with Other Tools
- CI/CD Scripting
- Containerization (Docker)
- Cloud CLI Tools

=== PART 6: PROJECTS (Chapters 55–60) ===
- System Backup Script
- Log Analyzer
- Deployment Automation
- Monitoring Dashboard
- DevOps Toolkit
- Bash Mastery Recap + Certificate Prep

================================================================================
QUALITY REQUIREMENTS
================================================================================

- Real shell commands and scripts
- Production-level automation examples
- Fully working Bash code
- 8+ quizzes per chapter
- 3+ exercises per chapter
- Real-world automation projects
- No placeholder content

================================================================================
IMPLEMENTATION REQUIREMENTS
================================================================================

1. Add Bash track to dashboard
2. Build Bash playground
3. Create bash-curriculum.ts
4. Add Bash certificates
5. Add progress tracking
6. Add terminal simulation
7. Test all code examples fully

================================================================================
FINAL RULE
================================================================================
ALL CONTENT MUST BE REAL.
ALL CODE MUST RUN.
ALL SCRIPTS MUST WORK.
FOLLOW THE SAME DEPTH, STRUCTURE, AND QUALITY AS OTHER CODEMASTERY TRACKS.
