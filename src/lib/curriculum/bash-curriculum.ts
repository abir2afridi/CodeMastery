import { Track } from "./types";

export const bashTrack: Track = {
  id: "bash",
  title: "Bash",
  tagline: "Master the shell \u2014 automate everything",
  icon: "\u2328",
  colorVar: "bash",
  brandColor: "#4EAA25",
  glowColor: "rgba(78, 170, 37, 0.3)",
  totalChapters: 60,
  estimatedHours: 90,
  chapters: [
{
      id: "bash-1", number: 1, title: "What Is Bash and Why Learn It?", subtitle: "Understanding the shell and its power", difficulty: "Absolute Beginner", estimatedMinutes: 40, xpReward: 50, prerequisites: [], learningObjectives: ["Understand what Bash is", "Identify the shell's role", "Know why automation matters"], partLabel: "Part 1: Bash Foundations",
      sections: [{ id: "bash-1-1", title: "The Shell and Terminal", whyItMatters: "The shell is your command center.", content: `Bash (Bourne Again SHell) is the most widely used Unix shell.\n\n**Why Bash Matters:**\n- Automate repetitive tasks\n- Manage files and processes\n- Chain commands with pipes\n- Write system administration scripts\n- Essential for DevOps and cloud computing\n\n**Shell vs Terminal:**\n- Terminal: The application window\n- Shell: The program inside (Bash, Zsh)\n- Bash reads commands and tells the OS what to do`, codeExamples: [{ id: "bash-1-ex1", title: "First Command", description: "Basic shell commands", code: { bash: 'echo "Hello, Bash!"\nwhoami\ndate\npwd' }, explanation: "echo prints text, whoami shows username, date shows time, pwd shows your directory." }], callouts: [{ type: "info", title: "Cross-Platform", content: "Bash is available on Linux, macOS, and Windows (WSL, Git Bash, Cygwin)." }] }],
      quiz: { questions: [{ id: "bash-1-q1", type: "mcq", question: "What does Bash stand for?", options: ["Basic Shell", "Bourne Again SHell", "Binary SHell", "Bash SHell"], correctAnswer: "Bourne Again SHell", explanation: "Bash = Bourne Again SHell.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Shell", value: "Command interpreter" }, { label: "Terminal", value: "Window to shell" }, { label: "Bash", value: "Default Linux/macOS shell" }]
    },
    {
      id: "bash-2", number: 2, title: "Navigating the Filesystem", subtitle: "Moving around with shell commands", difficulty: "Absolute Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Navigate directories", "List contents", "Understand paths"], partLabel: "Part 1: Bash Foundations",
      sections: [
        { id: "bash-2-1", title: "pwd, ls, and cd", whyItMatters: "Navigation is the most fundamental shell skill.", content: `**pwd:** Shows current directory.\n\`\`\`bash\npwd\n# /home/user\n\`\`\`\n\n**ls:** List directory contents.\n\`\`\`bash\nls -l   # Detailed\nls -a   # Hidden files\nls -la  # Combined\n\`\`\`\n\n**cd:** Change directory.\n\`\`\`bash\ncd /home/user   # Absolute\ncd ..           # Up one\ncd ~            # Home\ncd -            # Previous\n\`\`\`` },
        { id: "bash-2-2", title: "Paths", whyItMatters: "Understanding paths prevents errors.", content: `**Absolute:** Start from root (/).\n\`\`\`bash\nls /etc/nginx/nginx.conf\n\`\`\`\n\n**Relative:** Start from current directory.\n\`\`\`bash\nls ./config/settings.json\n\`\`\`\n\nTab completion auto-completes paths.`, codeExamples: [{ id: "bash-2-ex1", title: "Navigation", description: "Moving through directories", code: { bash: 'cd ~\npwd\nls -la\nmkdir -p test/subdir\ncd test/subdir\npwd\ncd ../..\npwd' }, explanation: "Navigate home, list, create dirs, and move around." }] }
      ],
      quiz: { questions: [
        { id: "bash-2-q1", type: "mcq", question: "What command shows your current directory?", options: ["ls", "cd", "pwd", "dir"], correctAnswer: "pwd", explanation: "pwd = Print Working Directory.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "pwd", value: "Print working directory" }, { label: "ls -la", value: "Detailed listing" }, { label: "cd ~", value: "Go home" }]
    },
    {
      id: "bash-3", number: 3, title: "Working with Files and Directories", subtitle: "Creating, copying, moving, deleting", difficulty: "Absolute Beginner", estimatedMinutes: 50, xpReward: 60, prerequisites: [], learningObjectives: ["Create files and directories", "Copy and move files", "Delete safely"], partLabel: "Part 1: Bash Foundations",
      sections: [{
        id: "bash-3-1", title: "File Operations", whyItMatters: "File ops are the bread and butter of shell work.", content: `**Creating:**\n\`\`\`bash\nmkdir newdir\nmkdir -p parent/child\ntouch file.txt\necho "hello" > greeting.txt\ncat > notes.txt << EOF\nline1\nline2\nEOF\n\`\`\`\n\n**Viewing:**\n\`\`\`bash\ncat file.txt\nless file.txt\nhead -5 file.txt\ntail -5 file.txt\n\`\`\`\n\n**Copy/Move/Delete:**\n\`\`\`bash\ncp source.txt dest.txt\ncp -r dir/ dest/\nmv file.txt newname.txt\nrm file.txt\nrm -r dir/\n\`\`\`\n\n**\u26a0\ufe0f Safety:** Use -i flag to prompt before overwrite.`, codeExamples: [{ id: "bash-3-ex1", title: "File Ops", description: "Practice file management", code: { bash: 'cd ~\nmkdir -p practice/subdir\ntouch practice/file1.txt\necho "Hello" > practice/file2.txt\ncp practice/file2.txt practice/subdir/\nmv practice/file1.txt practice/renamed.txt\nls -la practice/\nrm -rf practice\necho "Done!"' }, explanation: "Create dirs, files, copy, rename, then clean up." }]
      }],
      quiz: { questions: [
        { id: "bash-3-q1", type: "mcq", question: "What flag makes cp copy directories recursively?", options: ["-r", "-f", "-i", "-v"], correctAnswer: "-r", explanation: "-r (recursive) copies directories.", difficulty: 1 },
        { id: "bash-3-q2", type: "mcq", question: "What command renames a file?", options: ["rename", "mv", "cp", "rn"], correctAnswer: "mv", explanation: "mv (move) renames files.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "mkdir -p", value: "Create nested dirs" }, { label: "cp -r", value: "Copy directory" }, { label: "mv", value: "Move/rename" }, { label: "rm -rf", value: "Delete (dangerous)" }]
    },
    {
      id: "bash-4", number: 4, title: "Viewing and Editing Files", subtitle: "Reading, searching, and modifying content", difficulty: "Absolute Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["View files with various tools", "Search contents with grep", "Use sorting tools"], partLabel: "Part 1: Bash Foundations",
      sections: [{
        id: "bash-4-1", title: "Viewing Commands", whyItMatters: "Different tools serve different viewing needs.", content: `**cat:**\n\`\`\`bash\ncat -n file.txt   # With line numbers\ncat a.txt b.txt > merged.txt\n\`\`\`\n\n**less:** Interactive scrolling.\n\`\`\`bash\nless file.txt  # Space=next, b=back, /search, q=quit\n\`\`\`\n\n**head/tail:**\n\`\`\`bash\nhead -20 file.txt\ntail -30 file.txt\ntail -f log.txt   # Follow (live)\n\`\`\`\n\n**grep:** Pattern search.\n\`\`\`bash\ngrep -i "error" log.txt\ngrep -r "TODO" src/\ngrep -c "import" *.py\n\`\`\`\n\n**wc:** Word count.\n\`\`\`bash\nwc -l file.txt   # Lines\nwc -w file.txt   # Words\n\`\`\``, codeExamples: [{ id: "bash-4-ex1", title: "Viewing", description: "View and search files", code: { bash: 'echo -e "apple\nbanana\ncherry\nApple\nBANANA" > fruits.txt\ncat -n fruits.txt\ngrep -i "apple" fruits.txt\nsort -f fruits.txt\nwc -l fruits.txt\nrm fruits.txt' }, explanation: "Create file, view, search, sort, count." }]
      }],
      quiz: { questions: [
        { id: "bash-4-q1", type: "mcq", question: "What command watches a file for live updates?", options: ["tail -f", "tail -n", "head -f", "cat -f"], correctAnswer: "tail -f", explanation: "tail -f follows a file showing new lines.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "grep", value: "Search text patterns" }, { label: "less", value: "Scroll viewer" }, { label: "tail -f", value: "Live follow" }, { label: "wc", value: "Word/line count" }]
    },
    {
      id: "bash-5", number: 5, title: "Permissions and Ownership", subtitle: "chmod, chown, and file security", difficulty: "Absolute Beginner", estimatedMinutes: 50, xpReward: 60, prerequisites: [], learningObjectives: ["Understand permissions", "Change with chmod", "Change ownership with chown"], partLabel: "Part 1: Bash Foundations",
      sections: [{
        id: "bash-5-1", title: "Permission Structure", whyItMatters: "Permissions control read/write/execute access.", content: `**Permission Groups:** Owner (u), Group (g), Others (o)\n\n**Permission Types:** r=4, w=2, x=1\n\n**chmod:**\n\`\`\`bash\nchmod 755 script.sh   # rwxr-xr-x\nchmod 644 file.txt    # rw-r--r--\nchmod 600 secret.txt  # rw-------\nchmod u+x script.sh   # Add execute\n\`\`\`\n\n**chown:** Change owner.\n\`\`\`bash\nsudo chown user:group file\`\`\``, codeExamples: [{ id: "bash-5-ex1", title: "Permissions", description: "Working with permissions", code: { bash: 'cd ~\ntouch test.sh\necho "#!/bin/bash\necho Hello" > test.sh\nchmod 644 test.sh\nls -l test.sh\nchmod u+x test.sh\nls -l test.sh\nrm test.sh' }, explanation: "Create script, set read-only, then add execute." }]
      }],
      quiz: { questions: [
        { id: "bash-5-q1", type: "mcq", question: "What does chmod 755 represent?", options: ["rwx------", "rwxr-xr-x", "rwxrwxrwx", "rw-r--r--"], correctAnswer: "rwxr-xr-x", explanation: "755 = owner rwx, group r-x, others r-x.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "chmod 755", value: "rwxr-xr-x" }, { label: "chmod 644", value: "rw-r--r--" }, { label: "chown", value: "Change owner" }]
    },
    {
      id: "bash-6", number: 6, title: "Pipes and Redirection", subtitle: "Chaining commands and controlling I/O", difficulty: "Absolute Beginner", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Use pipes to chain commands", "Redirect stdin/stdout/stderr", "Append vs overwrite"], partLabel: "Part 1: Bash Foundations",
      sections: [{
        id: "bash-6-1", title: "Standard Streams", whyItMatters: "I/O redirection is Unix's composable design philosophy.", content: `**Three Streams:** stdin (0), stdout (1), stderr (2)\n\n**Redirection:**\n\`\`\`bash\ncommand > file       # Stdout overwrite\ncommand >> file      # Stdout append\ncommand 2> file      # Stderr\ncommand &> file      # Both\ncommand < file       # Input from file\n\`\`\`\n\n**Pipes:** Pass stdout of one command as stdin to another.\n\`\`\`bash\nls -la | grep "^-" | wc -l  # Count files\nps aux | grep bash           # Find processes\n\`\`\`\n\n**/dev/null:** Discard output.\n\`\`\`bash\ncommand &> /dev/null\`\`\``, codeExamples: [{ id: "bash-6-ex1", title: "Pipes", description: "Chaining commands", code: { bash: 'echo -e "apple\nbanana\ncherry\napple" > items.txt\nsort items.txt | uniq -c\nwc -l < items.txt\nrm items.txt' }, explanation: "Pipe sort output to uniq for dedup and count." }]
      }],
      quiz: { questions: [
        { id: "bash-6-q1", type: "mcq", question: "What symbol redirects both stdout and stderr?", options: ["&>", "2>", "1>", ">"], correctAnswer: "&>", explanation: "&> redirects both stdout and stderr.", difficulty: 1 },
        { id: "bash-6-q2", type: "mcq", question: "What does the pipe (|) do?", options: ["Redirect to file", "Chain output to next command", "Create directory", "Show help"], correctAnswer: "Chain output to next command", explanation: "Pipe passes stdout to another command's stdin.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: ">", value: "Stdout overwrite" }, { label: ">>", value: "Stdout append" }, { label: "2>", value: "Stderr" }, { label: "|", value: "Pipe" }, { label: "&>", value: "Both streams" }]
    },
    {
      id: "bash-7", number: 7, title: "Environment Variables", subtitle: "Managing shell configuration", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["View and set variables", "Understand PATH", "Use variables in commands"], partLabel: "Part 1: Bash Foundations",
      sections: [{
        id: "bash-7-1", title: "Environment and Variables", whyItMatters: "Env vars configure how your shell and programs behave.", content: `**Viewing Variables:**\n\`\`\`bash\necho $HOME\necho $USER\necho $SHELL\necho $PATH\nprintenv  # All environment variables\n\`\`\`\n\n**Setting Variables:**\n\`\`\`bash\nMY_VAR="hello"         # Shell variable\nexport MY_VAR="hello"  # Environment variable\n\`\`\`\n\n**PATH:** Colon-separated list of directories for executables.\n\`\`\`bash\nexport PATH=$PATH:~/bin\n\`\`\`\n\n**Startup Files:**\n- ~/.bashrc: Interactive non-login shells\n- ~/.bash_profile: Login shells\n- Aliases, PATH, and prompt config go in .bashrc`, codeExamples: [{ id: "bash-7-ex1", title: "Variables", description: "Setting and using variables", code: { bash: 'NAME="Bash"\necho "Hello, $NAME!"\nexport COUNT=5\necho "Count is $COUNT"\necho "Home: $HOME"\necho "User: $USER"' }, explanation: "Set and use shell variables with interpolation." }]
      }],
      quiz: { questions: [
        { id: "bash-7-q1", type: "mcq", question: "What file should you edit for personal bash aliases?", options: ["/etc/bashrc", "~/.bashrc", "~/.profile", "/etc/profile"], correctAnswer: "~/.bashrc", explanation: "~/.bashrc is per-user config for interactive shells.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "$HOME", value: "Home directory" }, { label: "$PATH", value: "Command search path" }, { label: "export", value: "Set env var" }, { label: "~/.bashrc", value: "User config" }]
    },
    {
      id: "bash-8", number: 8, title: "Process Management", subtitle: "Running, monitoring, and controlling processes", difficulty: "Beginner", estimatedMinutes: 50, xpReward: 60, prerequisites: [], learningObjectives: ["View running processes", "Send signals", "Manage background jobs"], partLabel: "Part 1: Bash Foundations",
      sections: [{
        id: "bash-8-1", title: "Process Commands", whyItMatters: "Process management is critical for troubleshooting.", content: `**ps — Process Snapshot:**\n\`\`\`bash\nps aux          # All processes\ntop             # Real-time processes\npstree          # Process tree\n\`\`\`\n\n**Signals:**\n\`\`\`bash\nkill PID        # SIGTERM (graceful)\nkill -9 PID     # SIGKILL (force)\nkill -2 PID     # SIGINT (Ctrl+C)\n\`\`\`\n\n**Job Control:**\n\`\`\`bash\ncommand &        # Background\nCtrl+Z           # Suspend\nbg               # Resume in background\nfg               # Bring to foreground\njobs             # List jobs\nnohup cmd &      # Run after logout\`\`\``, codeExamples: [{ id: "bash-8-ex1", title: "Jobs", description: "Background job control", code: { bash: 'sleep 30 &\nsleep 30 &\njobs\nkill %1\nsleep 1\njobs\nkill %2\necho "Done"' }, explanation: "Start background jobs, list them, and kill them." }]
      }],
      quiz: { questions: [
        { id: "bash-8-q1", type: "mcq", question: "What signal does kill send by default?", options: ["SIGKILL (9)", "SIGTERM (15)", "SIGINT (2)", "SIGHUP (1)"], correctAnswer: "SIGTERM (15)", explanation: "kill sends SIGTERM (15) by default, asking graceful termination.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "ps aux", value: "All processes" }, { label: "kill PID", value: "Send SIGTERM" }, { label: "kill -9", value: "Force kill" }, { label: "jobs", value: "List bg jobs" }]
    },
    {
      id: "bash-9", number: 9, title: "Command History and Shortcuts", subtitle: "Working faster with shell history", difficulty: "Absolute Beginner", estimatedMinutes: 40, xpReward: 50, prerequisites: [], learningObjectives: ["Use command history", "Master keyboard shortcuts", "Search history efficiently"], partLabel: "Part 1: Bash Foundations",
      sections: [{
        id: "bash-9-1", title: "History and Shortcuts", whyItMatters: "History and shortcuts double your command-line speed.", content: `**History:**\n\`\`\`bash\nhistory 20     # Last 20 commands\n!!             # Re-run last\n!$             # Last argument\n!123           # Command #123\nCtrl+R         # Reverse search\n\`\`\`\n\n**Keyboard Shortcuts:**\n\`\`\`bash\nCtrl+A   # Start of line\nCtrl+E   # End of line\nCtrl+U   # Cut to start\nCtrl+K   # Cut to end\nCtrl+W   # Cut word back\nCtrl+Y   # Paste\nCtrl+L   # Clear screen\n\`\`\`\n\n**History Config:**\n\`\`\`bash\nexport HISTSIZE=10000\nexport HISTTIMEFORMAT="%F %T "\`\`\``, codeExamples: [{ id: "bash-9-ex1", title: "History", description: "Using command history", code: { bash: 'echo "first"\necho "second"\nhistory 5' }, explanation: "Run commands and view history." }]
      }],
      quiz: { questions: [
        { id: "bash-9-q1", type: "mcq", question: "What shortcut reverse-searches command history?", options: ["Ctrl+R", "Ctrl+F", "Ctrl+H", "Ctrl+S"], correctAnswer: "Ctrl+R", explanation: "Ctrl+R starts reverse search through history.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "!!", value: "Last command" }, { label: "!$", value: "Last argument" }, { label: "Ctrl+R", value: "Search history" }, { label: "Ctrl+A/E", value: "Start/End line" }]
    },
    {
      id: "bash-10", number: 10, title: "Finding Files and Content", subtitle: "Locating files with find, locate, which", difficulty: "Absolute Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Find files by name/type", "Use find with actions", "Locate executables"], partLabel: "Part 1: Bash Foundations",
      sections: [{
        id: "bash-10-1", title: "The find Command", whyItMatters: "find is essential for navigating large systems.",
        content: "**find:**\n\n```bash\nfind . -name \"*.txt\"       # By name\nfind . -iname \"readme*\"    # Case-insensitive\nfind . -type f             # Files only\nfind . -type d             # Dirs only\nfind . -size +100M         # Large files\nfind . -mtime -7           # Recent files\n```\n\n**With Actions:**\n\n```bash\nfind . -name \"*.tmp\" -delete\nfind . -name \"*.js\" -exec wc -l {} +\nfind . -name \"*.py\" | xargs grep \"import\"\n```\n\n**Other Tools:**\n\n```bash\nwhich python      # Executable path\nlocate nginx.conf # Database search\n```",
        codeExamples: [{ id: "bash-10-ex1", title: "Find", description: "Finding files", code: { bash: "cd ~\nmkdir -p findtest\ntouch findtest/file1.txt findtest/file2.py\nfind findtest -name \"*.txt\"\nfind findtest -type f -exec echo \"Found: {}\" +\nrm -rf findtest" }, explanation: "Create files and practice finding them." }]
      }],
      quiz: { questions: [{ id: "bash-10-q1", type: "mcq", question: "What find flag finds files modified in the last day?", options: ["-mtime -1", "-mtime +1", "-mmin -1", "-newer"], correctAnswer: "-mtime -1", explanation: "-mtime -1 finds files modified less than 1 day ago.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "find . -name", value: "Find by name" }, { label: "find -type f", value: "Files only" }, { label: "locate", value: "Fast search" }, { label: "xargs", value: "Execute on results" }]
    },
    {
      id: "bash-11", number: 11, title: "Writing Your First Script", subtitle: "Shebang, variables, and execution", difficulty: "Beginner", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Write a Bash script","Use shebang","Execute scripts"], partLabel: "Part 2: Intermediate Bash",
      sections: [
        {
          id: "bash-11-1", title: "Script Structure", whyItMatters: "Scripts automate everything you have learned manually.",
          content: "**Shebang:** First line tells the OS which interpreter.\n\n```bash\n#!/bin/bash\n```\n\n**Your First Script:**\n\n```bash\n#!/bin/bash\n# My first script\nNAME=\"Bash\"\necho \"Hello, $NAME!\"\n```\n\n**Execute:**\n\n```bash\nchmod +x script.sh\n./script.sh\n```\n\n**Best Practices:**\n- Use .sh extension\n- Add comments\n- Use set -e\n- Quote variables\n- Validate arguments upfront",
          codeExamples: [
            { id: "bash-11-ex1", title: "First Script", description: "Create and run a script", code: { bash: "#!/bin/bash\necho \"Hello, World!\"\necho \"Today is $(date)\"" }, explanation: "This simple script prints a greeting and today's date." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-11-q1","type":"mcq","question":"What does the shebang line look like?","options":["#!/bin/sh","#!/bin/bash","#!bash","//bin/bash"],"correctAnswer":"#!/bin/bash","explanation":"Tells OS to use Bash interpreter.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"#!/bin/bash","value":"Shebang"},{"label":"chmod +x","value":"Make executable"},{"label":"set -e","value":"Exit on error"}],
    },
    {
      id: "bash-12", number: 12, title: "Variables and Data Types", subtitle: "Strings, integers, arrays, and parameter expansion", difficulty: "Beginner", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Declare variables","Use parameter expansion","Work with arrays"], partLabel: "Part 2: Intermediate Bash",
      sections: [
        {
          id: "bash-12-1", title: "Variable Operations", whyItMatters: "Variables store data and make scripts dynamic.",
          content: "**Declaration:**\n\n```bash\nNAME=\"World\"\nCOUNT=42\ndeclare -r CONST=\"readonly\"\ndeclare -i NUM=5\n```\n\n**Parameter Expansion:**\n\n```bash\n${NAME:-default}  # Default value\n${NAME:?error}    # Error if unset\n${#NAME}          # Length\n${NAME/old/new}   # Replace\n${NAME^^}         # Uppercase\n${NAME,,}         # Lowercase\n```\n\n**Arrays:**\n\n```bash\narr=(\"apple\" \"banana\" \"cherry\")\necho ${arr[0]}       # First\necho ${arr[@]}       # All\necho ${#arr[@]}      # Count\narr+=(\"date\")        # Append\n```",
          codeExamples: [
            { id: "bash-12-ex1", title: "Variables", description: "Working with variables", code: { bash: "NAME=\"Bash\"\necho \"Hello, $NAME\"\necho \"Upper: ${NAME^^}\"\necho \"Lower: ${NAME,,}\"" }, explanation: "Shows variable declaration and case transformation." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-12-q1","type":"mcq","question":"How to get array length in Bash?","options":["${#arr[@]}","${arr.length}","length(arr)","${arr[@]}#"],"correctAnswer":"${#arr[@]}","explanation":"#arr[@] gives element count.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"${VAR:-default}","value":"Default value"},{"label":"${VAR^^}","value":"Uppercase"},{"label":"${#VAR}","value":"Length"}],
    },
    {
      id: "bash-13", number: 13, title: "Positional Arguments", subtitle: "Handling script input parameters", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Use $1-$9 positional args","Use $@ and $*","Use getopts for flags"], partLabel: "Part 2: Intermediate Bash",
      sections: [
        {
          id: "bash-13-1", title: "Argument Parsing", whyItMatters: "Scripts need input to be reusable.",
          content: "**Positional Parameters:**\n\n```bash\n#!/bin/bash\nNAME=${1:-World}\necho \"Hello, $NAME!\"\necho \"All args: $@\"\necho \"Count: $#\"\n```\n\n**Shift:**\n\n```bash\nshift  # Move $2 to $1\nset -- file1.txt file2.txt  # Set args\n```\n\n**getopts:**\n\n```bash\nwhile getopts \"n:a:\" opt; do\n  case $opt in\n    n) NAME=$OPTARG ;;\n    a) AGE=$OPTARG ;;\n  esac\ndone\n```",
          codeExamples: [
            { id: "bash-13-ex1", title: "Arguments", description: "Using script arguments", code: { bash: "#!/bin/bash\necho \"Script: $0\"\necho \"First arg: $1\"\necho \"All args: $@\"\necho \"Count: $#\"" }, explanation: "Demonstrates $0, $1, $@, and $#." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-13-q1","type":"mcq","question":"What variable holds all arguments?","options":["$@","$#","$0","$?"],"correctAnswer":"$@","explanation":"$@ expands all positional parameters.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"$1","value":"First argument"},{"label":"$@","value":"All arguments"},{"label":"$#","value":"Count"}],
    },
    {
      id: "bash-14", number: 14, title: "Conditionals: if, test, case", subtitle: "Decision making in scripts", difficulty: "Beginner", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Write if statements","Use test operators","Use case patterns"], partLabel: "Part 2: Intermediate Bash",
      sections: [
        {
          id: "bash-14-1", title: "Conditionals", whyItMatters: "Conditionals let scripts respond to different situations.",
          content: "**if / test:**\n\n```bash\nif [ -f \"file\" ]; then\n  echo \"File exists\"\nelif [ -d \"dir\" ]; then\n  echo \"Directory\"\nelse\n  echo \"Not found\"\nfi\n```\n\n**Test Operators:**\n- -f: File exists\n- -d: Directory exists\n- -z: String empty\n- -n: String not empty\n- -eq/-ne/-gt/-lt: Numeric compare\n- = / !=: String compare\n\n**case:**\n\n```bash\ncase $1 in\n  start) echo \"Starting...\" ;;\n  stop)  echo \"Stopping...\" ;;\n  *)     echo \"Usage: $0 {start|stop}\" ;;\nesac\n```",
          codeExamples: [
            { id: "bash-14-ex1", title: "Conditionals", description: "Using if and test", code: { bash: "FILE=\"test.txt\"\nif [ -f \"$FILE\" ]; then\n  echo \"$FILE exists\"\nelse\n  echo \"$FILE does not exist\"\nfi" }, explanation: "Check if file exists and report." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-14-q1","type":"mcq","question":"What flag checks if a file exists?","options":["-e","-f","-d","-s"],"correctAnswer":"-f","explanation":"-f returns true if file exists and is regular.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"[ -f file ]","value":"File exists"},{"label":"-d dir","value":"Dir exists"},{"label":"-z var","value":"Empty string"}],
    },
    {
      id: "bash-15", number: 15, title: "Loops: for, while, until", subtitle: "Iteration and repetition", difficulty: "Beginner", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Write for loops","Use while loops","Control loops with break"], partLabel: "Part 2: Intermediate Bash",
      sections: [
        {
          id: "bash-15-1", title: "Loop Structures", whyItMatters: "Loops automate repetitive tasks over data sets.",
          content: "**for Loop:**\n\n```bash\nfor file in *.txt; do\n  echo \"Processing $file\"\ndone\n\nfor i in {1..5}; do\n  echo \"$i\"\ndone\n\nfor ((i=0; i<10; i++)); do\n  echo $i\ndone\n```\n\n**while Loop:**\n\n```bash\nwhile read line; do\n  echo \"$line\"\ndone < input.txt\n\ncount=1\nwhile [ $count -le 5 ]; do\n  echo $count\n  ((count++))\ndone\n```\n\n**until:** Runs while condition is false.",
          codeExamples: [
            { id: "bash-15-ex1", title: "Loops", description: "Iterating with for", code: { bash: "for i in {1..5}; do\n  echo \"Number: $i\"\ndone" }, explanation: "Prints numbers 1 through 5." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-15-q1","type":"mcq","question":"Which loop reads a file line by line?","options":["for file in *.txt","while read line","until EOF","for ((;;))"],"correctAnswer":"while read line","explanation":"while read line iterates over file lines.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"for i in {1..5}","value":"Numeric loop"},{"label":"while read line","value":"File iteration"},{"label":"break","value":"Exit loop"}],
    },
    {
      id: "bash-16", number: 16, title: "Functions", subtitle: "Defining and using reusable code blocks", difficulty: "Beginner", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Define functions","Return values","Use local variables"], partLabel: "Part 2: Intermediate Bash",
      sections: [
        {
          id: "bash-16-1", title: "Functions", whyItMatters: "Functions organize code and avoid repetition.",
          content: "**Define and Call:**\n\n```bash\ngreet() {\n  echo \"Hello, $1!\"\n}\ngreet \"World\"\n```\n\n**Return Values:**\n\n```bash\nadd() {\n  echo $(( $1 + $2 ))\n}\nresult=$(add 3 5)\n```\n\n**local Variables:**\n\n```bash\ncount_files() {\n  local dir=${1:-.}\n  find \"$dir\" -type f | wc -l\n}\n```\n\nFunctions have their own $1, $2, etc.",
          codeExamples: [
            { id: "bash-16-ex1", title: "Function", description: "Creating a function", code: { bash: "greet() {\n  echo \"Hello, $1!\"\n  echo \"Today is $(date +%A)\"\n}\ngreet \"World\"" }, explanation: "Function that greets with the day name." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-16-q1","type":"mcq","question":"What keyword declares a local variable in a function?","options":["local","declare","private","var"],"correctAnswer":"local","explanation":"local restricts scope to the function.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"func() {}","value":"Define function"},{"label":"local var","value":"Local scope"},{"label":"return","value":"Exit status"}],
    },
    {
      id: "bash-17", number: 17, title: "Arrays and Associative Arrays", subtitle: "Advanced data structures", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Create indexed arrays","Use associative arrays","Iterate arrays"], partLabel: "Part 2: Intermediate Bash",
      sections: [
        {
          id: "bash-17-1", title: "Array Operations", whyItMatters: "Arrays handle collections of values efficiently.",
          content: "**Indexed Arrays:**\n\n```bash\narr=(red green blue)\necho ${arr[0]}       # red\necho ${arr[@]}        # all\necho ${!arr[@]}       # indices\narr+=(\"yellow\")       # append\nunset arr[1]          # remove\n```\n\n**Associative Arrays (Bash 4+):**\n\n```bash\ndeclare -A colors\ncolors[sky]=\"blue\"\ncolors[sun]=\"yellow\"\necho ${colors[sky]}\nfor key in \"${!colors[@]}\"; do\n  echo \"$key = ${colors[$key]}\"\ndone\n```",
          codeExamples: [
            { id: "bash-17-ex1", title: "Arrays", description: "Using indexed arrays", code: { bash: "arr=(apple banana cherry)\necho \"First: ${arr[0]}\"\necho \"All: ${arr[@]}\"\necho \"Count: ${#arr[@]}\"" }, explanation: "Basic array operations." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-17-q1","type":"mcq","question":"How to iterate indices of an array?","options":["${arr[@]}","${!arr[@]}","${#arr[@]}","${arr[*]}"],"correctAnswer":"${!arr[@]}","explanation":"! prefix returns index keys.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"arr+=()","value":"Append"},{"label":"declare -A","value":"Associative"},{"label":"${!arr[@]}","value":"Get keys"}],
    },
    {
      id: "bash-18", number: 18, title: "String Manipulation", subtitle: "Slicing, replacing, transforming strings", difficulty: "Beginner", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Slice strings","Replace substrings","Transform case"], partLabel: "Part 2: Intermediate Bash",
      sections: [
        {
          id: "bash-18-1", title: "String Operations", whyItMatters: "String manipulation is essential for text processing.",
          content: "**Slicing:**\n\n```bash\nstr=\"Hello World\"\necho ${str:0:5}    # Hello\necho ${str:6}      # World\n```\n\n**Replacement:**\n\n```bash\necho ${str/World/Bash}       # First\necho ${str//l/X}              # All\necho ${str/#Hello/Hi}         # Prefix\necho ${str/%World/Everyone}   # Suffix\n```\n\n**Case Transform:**\n\n```bash\necho ${str^^}   # HELLO WORLD\necho ${str,,}   # hello world\necho ${str^}    # Hello world\n```\n\n**Substring Removal:**\n\n```bash\nfile=\"image.jpg\"\necho ${file%.*}   # image (remove shortest suffix)\necho ${file#*.}   # jpg (remove shortest prefix)\n```",
          codeExamples: [
            { id: "bash-18-ex1", title: "Strings", description: "String manipulation", code: { bash: "str=\"Hello World\"\necho \"Slice: ${str:0:5}\"\necho \"Replace: ${str/World/Bash}\"\necho \"Upper: ${str^^}\"" }, explanation: "Demonstrates slicing, replacement, and case change." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-18-q1","type":"mcq","question":"What expression removes the file extension?","options":["${file%.*}","${file#*.}","${file:0:-4}","${file/.//}"],"correctAnswer":"${file%.*}","explanation":"%.* removes shortest suffix matching .*","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"${str:0:5}","value":"Slice"},{"label":"${str//a/b}","value":"Replace all"},{"label":"${str#pfx}","value":"Remove prefix"}],
    },
    {
      id: "bash-19", number: 19, title: "Arithmetic and Math", subtitle: "Integer math with let, (( )), and bc", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Perform integer math","Use bc for floats","Handle math in scripts"], partLabel: "Part 2: Intermediate Bash",
      sections: [
        {
          id: "bash-19-1", title: "Arithmetic", whyItMatters: "Math is needed for counters, calculations, and logic.",
          content: "**Integer Arithmetic:**\n\n```bash\na=5; b=3\necho $(( a + b ))    # 8\necho $(( a ** b ))   # 125 (power)\nlet \"result = a * b\"\n```\n\n**Floating Point (bc):**\n\n```bash\necho \"scale=2; 10/3\" | bc   # 3.33\n```\n\n**Number Bases:**\n\n```bash\necho $(( 0xFF ))    # 255 (hex)\necho $(( 8#77 ))    # 63 (octal)\necho $(( 2#1010 ))  # 10 (binary)\n```",
          codeExamples: [
            { id: "bash-19-ex1", title: "Math", description: "Arithmetic operations", code: { bash: "a=10; b=3\necho \"Sum: $(( a + b ))\"\necho \"Power: $(( a ** b ))\"\necho \"Float: $(echo \"scale=2; $a / $b\" | bc)\"" }, explanation: "Integer and floating point math." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-19-q1","type":"mcq","question":"What does $(( 5 ** 3 )) return?","options":["15","125","243","8"],"correctAnswer":"125","explanation":"** is exponent; 5 cubed = 125.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"$(( a + b ))","value":"Integer math"},{"label":"bc","value":"Float math"},{"label":"let","value":"Math assignment"}],
    },
    {
      id: "bash-20", number: 20, title: "Error Handling and Exit Codes", subtitle: "Trapping errors and robust scripts", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 70, prerequisites: [], learningObjectives: ["Understand exit codes","Use trap","Validate inputs"], partLabel: "Part 2: Intermediate Bash",
      sections: [
        {
          id: "bash-20-1", title: "Error Handling", whyItMatters: "Robust scripts handle failures gracefully.",
          content: "**Exit Codes:**\n\n```bash\ncommand\necho $?  # 0 = success, 1-255 = error\n```\n\n**trap:**\n\n```bash\ncleanup() {\n  rm -f /tmp/tempfile\n  echo \"Cleaned up\"\n  exit 1\n}\ntrap cleanup ERR\ntrap cleanup EXIT\n```\n\n**set Flags:**\n\n```bash\nset -e   # Exit on error\nset -u   # Error on unset vars\nset -o pipefail  # Pipe failures propagate\n```",
          codeExamples: [
            { id: "bash-20-ex1", title: "Error Handling", description: "Exit codes and trap", code: { bash: "#!/bin/bash\nset -e\ntrap \"echo 'Error on line $LINENO'\" ERR\necho \"Running...\"\nfalse\necho \"This never runs\"" }, explanation: "Script exits on error and shows line number." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-20-q1","type":"mcq","question":"What does set -e do?","options":["Exit on error","Echo commands","Expand aliases","Treat unset as error"],"correctAnswer":"Exit on error","explanation":"set -e exits on any command failure.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"$?","value":"Exit code"},{"label":"trap ERR","value":"Catch errors"},{"label":"set -e","value":"Exit on error"}],
    },
    {
      id: "bash-21", number: 21, title: "Regular Expressions with grep and sed", subtitle: "Pattern matching and substitution", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 80, prerequisites: [], learningObjectives: ["Use grep with regex","Use sed for substitution","Write regex patterns"], partLabel: "Part 2: Intermediate Bash",
      sections: [
        {
          id: "bash-21-1", title: "Regex Tools", whyItMatters: "Regex is the most powerful text processing technique.",
          content: "**grep with Regex:**\n\n```bash\ngrep -E \"^[A-Z]\" file.txt\ngrep -E \"[0-9]{3}-[0-9]{4}\" file.txt\ngrep -c \"ERROR\" log.txt\n```\n\n**sed (Stream Editor):**\n\n```bash\nsed 's/old/new/' file.txt    # Replace first per line\nsed 's/old/new/g' file.txt   # Replace all\nsed -i 's/old/new/g' file    # In-place\nsed '/pattern/d' file.txt    # Delete matching lines\n```\n\n**sed Ranges:**\n\n```bash\nsed -n '10,20p' file.txt     # Print lines 10-20\n```",
          codeExamples: [
            { id: "bash-21-ex1", title: "Regex", description: "Using grep and sed", code: { bash: "echo -e \"apple\\nbanana\\napple pie\\nAPPLE\" > fruits.txt\ngrep -i \"apple\" fruits.txt\nsed 's/apple/orange/g' fruits.txt\nrm fruits.txt" }, explanation: "Grep case-insensitive, sed global replace." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-21-q1","type":"mcq","question":"What sed flag replaces all occurrences per line?","options":["-i","-n","g","p"],"correctAnswer":"g","explanation":"g flag = global replacement.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"grep -E","value":"Extended regex"},{"label":"sed s///g","value":"Replace"},{"label":"sed -i","value":"In-place edit"}],
    },
    {
      id: "bash-22", number: 22, title: "Stream Editing with sed", subtitle: "Advanced sed patterns and scripting", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Use sed scripts","Hold/pattern space","Multi-line patterns"], partLabel: "Part 2: Intermediate Bash",
      sections: [
        {
          id: "bash-22-1", title: "Advanced sed", whyItMatters: "Sed scripts transform entire files non-interactively.",
          content: "**Multiple Commands:**\n\n```bash\nsed -e 's/foo/bar/' -e 's/baz/qux/' file\nsed 's/foo/bar/; s/baz/qux/' file\n```\n\n**Common Patterns:**\n\n```bash\nsed '/^$/d' file              # Remove blank lines\nsed 's/[ \\t]*$//' file       # Remove trailing spaces\nsed '/^#/d' file              # Remove comments\nsed -n '2{p;q}' file          # Print line 2 only\n```\n\n**Hold Space (N command):**\n\n```bash\nsed 'N; s/\\n/ /' file  # Join lines\n```",
          codeExamples: [
            { id: "bash-22-ex1", title: "Sed", description: "Common sed operations", code: { bash: "echo -e \"  hello  \\n# comment\\nworld\" > test.txt\nsed -i 's/[ \\t]*$//' test.txt\nsed -i '/^#/d' test.txt\ncat test.txt\nrm test.txt" }, explanation: "Trim trailing spaces and remove comments." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-22-q1","type":"mcq","question":"How to delete all blank lines with sed?","options":["sed '/^$/d'","sed '/./d'","sed 's/^$/DEL/'","sed -n '/^$/p'"],"correctAnswer":"sed '/^$/d'","explanation":"d command deletes lines matching regex ^$ (empty).","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"/^$/d","value":"Delete blank lines"},{"label":"-e","value":"Multiple commands"},{"label":"-n 5p","value":"Print line 5"}],
    },
    {
      id: "bash-23", number: 23, title: "Introduction to awk", subtitle: "Pattern scanning and text processing", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 80, prerequisites: [], learningObjectives: ["Understand awk basics","Use field variables","Write awk patterns"], partLabel: "Part 3: Text Processing",
      sections: [
        {
          id: "bash-23-1", title: "awk Basics", whyItMatters: "awk is the ultimate column-based text processor for structured data.",
          content: "**awk Structure:**\n\n```bash\nawk 'pattern { action }' file\n```\n\n**Field Variables:**\n$0 = whole line, $1 = first field\n$2 = second field, NF = number of fields\nNR = record number\n\n**Examples:**\n\n```bash\nawk '{ print $1 }' file.txt         # First column\nawk '{ print $1, $3 }' file.txt     # Multiple columns\nawk '{ print NR, $0 }' file.txt     # Line numbers\nawk 'NR > 1 { print $1 }' file.txt  # Skip header\n```",
          codeExamples: [
            { id: "bash-23-ex1", title: "awk Basics", description: "Column extraction", code: { bash: "echo -e \"Alice 25 NYC\\nBob 30 LA\" > data.txt\nawk '{ print $1, $2 }' data.txt\nawk 'NR==1 { print \"Header: \" $0 }' data.txt\nrm data.txt" }, explanation: "Print columns and detect header row." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-23-q1","type":"mcq","question":"What awk variable represents the first field?","options":["$0","$1","NF","NR"],"correctAnswer":"$1","explanation":"$1 is the first field, $0 is the whole line.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"$0","value":"Whole line"},{"label":"$1","value":"First field"},{"label":"NF","value":"Field count"},{"label":"NR","value":"Line number"}],
    },
    {
      id: "bash-24", number: 24, title: "Advanced awk", subtitle: "Patterns, arrays, and awk scripting", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 80, prerequisites: [], learningObjectives: ["Use awk patterns","Awk arrays","Write awk one-liners"], partLabel: "Part 3: Text Processing",
      sections: [
        {
          id: "bash-24-1", title: "Advanced awk", whyItMatters: "Awk can replace many grep/sed/cut combinations.",
          content: "**Patterns:**\n\n```bash\nawk '/error/ { print }' log.txt          # Regex match\nawk '$3 > 100 { print }' data.txt        # Numeric condition\nawk 'NR > 1 { sum += $2 } END { print sum }' data.txt\n```\n\n**Built-in Functions:**\n\n```bash\nawk '{ print length($0) }' file.txt\nawk '{ print toupper($1) }' file.txt\nawk '{ printf \"%-10s %d\\n\", $1, $2 }'\n```\n\n**Arrays:**\n\n```bash\nawk '{ count[$1]++ } END { for (k in count) print k, count[k] }'\n```",
          codeExamples: [
            { id: "bash-24-ex1", title: "Awk Patterns", description: "Filtering with awk", code: { bash: "echo -e \"Alice 25\\nBob 30\\nCharlie 15\" > data.txt\nawk '$2 >= 18 { print $1 \" is adult\" }' data.txt\nrm data.txt" }, explanation: "Filter rows where age >= 18." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-24-q1","type":"mcq","question":"How to sum column 2 in awk?","options":["{ sum += $1 } END { print sum }","{ sum += $2 } END { print sum }","SUM($2)","aggregate $2"],"correctAnswer":"{ sum += $2 } END { print sum }","explanation":"Accumulate $2 in sum variable, print at end.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"awk /pattern/","value":"Regex match"},{"label":"length()","value":"String length"},{"label":"toupper()","value":"Uppercase"}],
    },
    {
      id: "bash-25", number: 25, title: "cut, sort, uniq, and tr", subtitle: "Column cutting and data dedup", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Use cut to extract columns","Sort and deduplicate","Use tr for translation"], partLabel: "Part 3: Text Processing",
      sections: [
        {
          id: "bash-25-1", title: "Text Utilities", whyItMatters: "These tools form a pipeline that processes data end-to-end.",
          content: "**cut:**\n\n```bash\ncut -d',' -f1,3 data.csv\ncut -c1-10 file.txt\n```\n\n**sort:**\n\n```bash\nsort file.txt                # Alphabetical\nsort -n file.txt             # Numeric\nsort -k2 -t, data.csv        # By column 2\nsort -u file.txt             # Unique sorted\n```\n\n**uniq:**\n\n```bash\nuniq file.txt                # Remove adjacent dupes\nuniq -c file.txt             # Count occurrences\n```\n\n**tr:**\n\n```bash\necho \"hello\" | tr a-z A-Z\necho \"a,b,c\" | tr ',' '\\t'\n```",
          codeExamples: [
            { id: "bash-25-ex1", title: "Text Tools", description: "Pipeline with cut/sort/uniq", code: { bash: "echo -e \"apple\\nbanana\\napple\\ncherry\" > items.txt\nsort items.txt | uniq -c | sort -rn\nrm items.txt" }, explanation: "Sort, count duplicates, order by frequency." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-25-q1","type":"mcq","question":"What uniq flag shows occurrence counts?","options":["-c","-d","-u","-i"],"correctAnswer":"-c","explanation":"uniq -c prefixes each line with count.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"cut -d',' -f1","value":"Field extraction"},{"label":"sort -n","value":"Numeric sort"},{"label":"uniq -c","value":"Count occurrences"}],
    },
    {
      id: "bash-26", number: 26, title: "diff, comm, and patch", subtitle: "Comparing and merging files", difficulty: "Intermediate", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Compare files with diff","Use comm for common lines","Apply patches"], partLabel: "Part 3: Text Processing",
      sections: [
        {
          id: "bash-26-1", title: "File Comparison", whyItMatters: "Comparing files is critical for version control and code review.",
          content: "**diff:**\n\n```bash\ndiff file1.txt file2.txt        # Line differences\ndiff -u file1.txt file2.txt     # Unified format\ndiff -r dir1/ dir2/             # Recursive\n```\n\n**comm:** Compare sorted files.\n\n```bash\ncomm file1.txt file2.txt\ncomm -12 file1.txt file2.txt     # Only common lines\n```\n\n**patch:**\n\n```bash\ndiff -u old new > changes.patch\npatch < changes.patch\n```",
          codeExamples: [
            { id: "bash-26-ex1", title: "Diff", description: "Comparing files", code: { bash: "echo -e \"apple\\nbanana\" > a.txt\necho -e \"apple\\ncherry\" > b.txt\ndiff -u a.txt b.txt\nrm a.txt b.txt" }, explanation: "Shows unchanged vs changed lines." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-26-q1","type":"mcq","question":"What diff flag shows unified format?","options":["-u","-c","-e","-n"],"correctAnswer":"-u","explanation":"Unified diff (-u) is the standard patch format.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"diff -u","value":"Unified diff"},{"label":"comm -12","value":"Common lines"},{"label":"patch","value":"Apply diff"}],
    },
    {
      id: "bash-27", number: 27, title: "Archives and Compression", subtitle: "tar, gzip, zip, and rsync", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Create and extract tar archives","Use gzip/bzip2/xz","Use zip and rsync"], partLabel: "Part 3: Text Processing",
      sections: [
        {
          id: "bash-27-1", title: "Archives", whyItMatters: "Archiving and compression are essential for backups and distribution.",
          content: "**tar (Tape Archive):**\n\n```bash\ntar -cvf archive.tar dir/       # Create\ntar -xvf archive.tar            # Extract\ntar -czvf archive.tar.gz dir/   # With gzip\ntar -xzvf archive.tar.gz        # Extract gzip\ntar -cjvf archive.tar.bz2 dir/  # With bzip2\n```\n\n**zip:**\n\n```bash\nzip -r archive.zip dir/\nunzip archive.zip\n```\n\n**Other Tools:**\n\n```bash\ngzip file.txt                   # Compress (file.txt.gz)\ngunzip file.txt.gz              # Decompress\nrsync -avz src/ dest/           # Sync with compression\n```",
          codeExamples: [
            { id: "bash-27-ex1", title: "Archive", description: "Create and extract tarball", code: { bash: "mkdir -p archivetest && echo test > archivetest/file.txt\ntar -czvf test.tar.gz archivetest\nmkdir extract && cd extract && tar -xzvf ../test.tar.gz\ncd .. && rm -rf archivetest extract test.tar.gz" }, explanation: "Create a compressed archive, then extract." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-27-q1","type":"mcq","question":"What tar flag creates gzip compression?","options":["-z","-j","-J","-Z"],"correctAnswer":"-z","explanation":"-z uses gzip; -j uses bzip2; -J uses xz.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"tar -czvf","value":"Create .tar.gz"},{"label":"tar -xzvf","value":"Extract .tar.gz"},{"label":"rsync -avz","value":"Sync with compress"}],
    },
    {
      id: "bash-28", number: 28, title: "System Monitoring", subtitle: "top, htop, vmstat, iostat, netstat, dmesg", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Monitor system resources","Check disk and memory","View kernel messages"], partLabel: "Part 3: Text Processing",
      sections: [
        {
          id: "bash-28-1", title: "Monitoring Tools", whyItMatters: "Monitoring helps diagnose performance issues and bottlenecks.",
          content: "**Process/Memory:**\n\n```bash\ntop              # Interactive process viewer\nhtop             # Enhanced version\nfree -h          # Memory usage\nvmstat 2 5       # System stats every 2s, 5 times\n```\n\n**Disk:**\n\n```bash\ndf -h            # Disk free space\ndu -sh dir/      # Directory usage\niostat           # I/O statistics\n```\n\n**Network/System:**\n\n```bash\nnetstat -tulpn   # Listening ports\nss -tuln         # Modern netstat\ndmesg | tail     # Kernel messages\nuptime           # System uptime\n```",
          codeExamples: [
            { id: "bash-28-ex1", title: "Monitoring", description: "Quick system check", code: { bash: "echo \"Memory:\"\nfree -h\necho \"Disk:\"\ndf -h / | tail -1\necho \"Uptime:\"\nuptime" }, explanation: "Quick snapshot of system health." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-28-q1","type":"mcq","question":"What command shows disk space usage?","options":["du","df","free","vmstat"],"correctAnswer":"df","explanation":"df = disk free, shows filesystem disk usage.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"free -h","value":"Memory usage"},{"label":"df -h","value":"Disk free"},{"label":"du -sh","value":"Directory size"}],
    },
    {
      id: "bash-29", number: 29, title: "Date, Time, and Scheduling", subtitle: "Working with dates, cron, and at", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Use the date command","Schedule with cron","Use at for one-time tasks"], partLabel: "Part 3: Text Processing",
      sections: [
        {
          id: "bash-29-1", title: "Date and Scheduling", whyItMatters: "Scheduling is the foundation of automated system maintenance.",
          content: "**date:**\n\n```bash\ndate\ndate +\"%Y-%m-%d %H:%M:%S\"\ndate -d \"yesterday\"\n```\n\n**cron:**\n\n```bash\n# Format: minute hour day month weekday command\n0 3 * * * /usr/bin/backup.sh\n*/15 * * * * /usr/bin/check.sh\n```\n\nEdit with crontab -e.\n\n**at:** One-time scheduling.\n\n```bash\necho \"backup.sh\" | at 2:00 PM\natq   # List jobs\natrm 5  # Remove job 5\n```",
          codeExamples: [
            { id: "bash-29-ex1", title: "Date", description: "Date formatting", code: { bash: "echo \"Today: $(date +%A, %B %d)\"\necho \"Backup: $(date +%Y%m%d_%H%M%S)\"" }, explanation: "Format dates for filenames and reports." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-29-q1","type":"mcq","question":"What command edits the crontab?","options":["crontab -e","cron edit","crontab -m","at -e"],"correctAnswer":"crontab -e","explanation":"crontab -e opens the user's crontab for editing.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"crontab -e","value":"Edit cron jobs"},{"label":"date +%F","value":"ISO date"},{"label":"at","value":"One-time schedule"}],
    },
    {
      id: "bash-30", number: 30, title: "Networking Basics", subtitle: "curl, wget, ssh, ping, and DNS tools", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use curl and wget","Connect with SSH","Troubleshoot with ping/nslookup"], partLabel: "Part 3: Text Processing",
      sections: [
        {
          id: "bash-30-1", title: "Network Tools", whyItMatters: "Network commands are essential for remote work and troubleshooting.",
          content: "**HTTP Requests:**\n\n```bash\ncurl https://api.example.com\ncurl -O https://example.com/file.zip\nwget https://example.com/file.zip\n```\n\n**SSH:**\n\n```bash\nssh user@host\nssh -i key.pem user@host\nssh -p 2222 user@host\n```\n\n**Diagnostics:**\n\n```bash\nping -c 4 google.com\nnslookup example.com\nhost example.com\nnc -zv host 80   # Port check\ntracepath example.com\n```",
          codeExamples: [
            { id: "bash-30-ex1", title: "Network", description: "HTTP request with curl", code: { bash: "curl -s \"https://jsonplaceholder.typicode.com/todos/1\" | head -c 200\necho \"...\"" }, explanation: "Fetch a JSON response from an API." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-30-q1","type":"mcq","question":"What command checks if a remote port is open?","options":["ping","nc -zv","ss","host"],"correctAnswer":"nc -zv","explanation":"netcat -z (scan) -v (verbose) tests port openness.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"curl -O","value":"Download file"},{"label":"ssh user@host","value":"SSH connect"},{"label":"nc -zv host port","value":"Port check"}],
    },
    {
      id: "bash-31", number: 31, title: "Text Editors in Terminal", subtitle: "nano, vim basics, and sed", difficulty: "Intermediate", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Use nano for quick edits","Navigate vim basics","Edit files without an editor"], partLabel: "Part 3: Text Processing",
      sections: [
        {
          id: "bash-31-1", title: "Terminal Editors", whyItMatters: "Terminal editors are essential on servers without a GUI.",
          content: "**nano:** Beginner-friendly.\n\n```bash\nnano file.txt\n```\nCtrl+O save, Ctrl+X exit, Ctrl+W search.\n\n**vim:** Modal editor.\n\n```bash\nvim file.txt\ni         # Insert mode\nEsc       # Normal mode\n:wq       # Save and quit\n:q!       # Quit without save\n/pattern  # Search\n:%s/old/new/g  # Replace all\n```\n\n**Without Editor:**\n\n```bash\ncat > file.txt << EOF\ncontent\nEOF\nsed -i 's/foo/bar/' file.txt\n```",
          codeExamples: [
            { id: "bash-31-ex1", title: "Editing", description: "Create file without editor", code: { bash: "cat > test.txt << EOF\nHello World\nThis is a test\nEOF\ncat test.txt\nrm test.txt" }, explanation: "Create a file using heredoc." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-31-q1","type":"mcq","question":"What vim command saves and quits?","options":[":q",":wq",":x",":q!"],"correctAnswer":":wq","explanation":":w = write, :q = quit.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"nano file","value":"Simple editor"},{"label":"vimtutor","value":"Vim tutorial"},{"label":":wq","value":"Vim save & quit"}],
    },
    {
      id: "bash-32", number: 32, title: "Shell Aliases and Functions", subtitle: "Creating shortcuts and productivity tips", difficulty: "Intermediate", estimatedMinutes: 40, xpReward: 55, prerequisites: [], learningObjectives: ["Create aliases","Persist in .bashrc","Create function shortcuts"], partLabel: "Part 3: Text Processing",
      sections: [
        {
          id: "bash-32-1", title: "Aliases", whyItMatters: "Aliases save hundreds of keystrokes daily.",
          content: "**Creating Aliases:**\n\n```bash\nalias ll='ls -la'\nalias gs='git status'\nalias ..='cd ..'\n```\n\n**Make Permanent:**\n\n```bash\necho \"alias ll='ls -la'\" >> ~/.bashrc\nsource ~/.bashrc\n```\n\n**Function Aliases:**\n\n```bash\nmkcd() {\n  mkdir -p \"$1\" && cd \"$1\"\n}\n```\n\n**List/Remove:**\n\n```bash\nalias         # List all\nunalias ll    # Remove\n```",
          codeExamples: [
            { id: "bash-32-ex1", title: "Aliases", description: "Creating useful aliases", code: { bash: "alias ll='ls -la'\nalias today='date +%A'\nll\ntoday" }, explanation: "Create shortcuts for common commands." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-32-q1","type":"mcq","question":"Where should persistent aliases be added?","options":["~/.bashrc","~/.profile","/etc/profile","~/.bash_aliases"],"correctAnswer":"~/.bashrc","explanation":"~/.bashrc is sourced by interactive shells.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"alias ll='ls -la'","value":"Shortcut"},{"label":"source ~/.bashrc","value":"Reload config"},{"label":"unalias","value":"Remove alias"}],
    },
    {
      id: "bash-33", number: 33, title: "Shell Expansion and Quoting", subtitle: "Brace expansion, globbing, quoting rules", difficulty: "Intermediate", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Use brace expansion","Understand glob patterns","Master quoting rules"], partLabel: "Part 3: Text Processing",
      sections: [
        {
          id: "bash-33-1", title: "Expansion and Quoting", whyItMatters: "Expansion is what makes shell one-liners so powerful.",
          content: "**Brace Expansion:**\n\n```bash\necho {A,B,C}       # A B C\necho {1..5}        # 1 2 3 4 5\nmkdir -p dir/{src,docs,test}\nmv file.{txt,md}   # Rename extension\n```\n\n**Globbing:**\n\n```bash\nls *.txt            # All .txt files\nls file???          # 3 chars after file\nls [abc]*           # Starts with a/b/c\nls !(*.txt)         # Everything except .txt\n```\n\n**Quoting:**\n\n```bash\necho $VAR           # Variable expansion\necho \"$VAR\"         # Safe expansion\necho '$VAR'         # Literal $VAR\necho \\$VAR          # Escaped dollar\n```",
          codeExamples: [
            { id: "bash-33-ex1", title: "Expansion", description: "Brace expansion examples", code: { bash: "echo {1..5}\necho {app,api,web}{,-dev,-prod}\necho test.{txt,md,py}" }, explanation: "Brace expansion generates combinations." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-33-q1","type":"mcq","question":"What glob pattern matches any single character?","options":["*","?","[a-z]","."],"correctAnswer":"?","explanation":"? matches exactly one character.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"{1..10}","value":"Brace expand"},{"label":"*.txt","value":"Glob pattern"},{"label":"'$VAR'","value":"Literal string"}],
    },
    {
      id: "bash-34", number: 34, title: "Text Processing with xargs and parallel", subtitle: "Building pipelines and parallel execution", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Use xargs for batch operations","Handle filenames safely","Use GNU parallel"], partLabel: "Part 3: Text Processing",
      sections: [
        {
          id: "bash-34-1", title: "xargs and parallel", whyItMatters: "xargs and parallel let you process data in bulk with concurrency.",
          content: "**xargs:** Build and execute commands from stdin.\n\n```bash\nfind . -name \"*.txt\" | xargs wc -l\nfind . -name \"*.log\" | xargs rm\nfind . -type f | xargs -P 4 gzip\n```\n\n**Safety with null separator:**\n\n```bash\nfind . -name \"*.txt\" -print0 | xargs -0 wc -l\n```\n\n**GNU parallel:** Advanced parallel executor.\n\n```bash\nseq 1 10 | parallel -j 4 echo \"Job {}\"\nfind . -name \"*.jpg\" | parallel -j 4 convert {} {.}.png\n```\n\nCommon xargs flags: -n (max args), -I (replace), -P (parallel), -0 (null input)",
          codeExamples: [
            { id: "bash-34-ex1", title: "xargs", description: "Batch file processing", code: { bash: "echo -e \"apple\\nbanana\\ncherry\" > list.txt\ncat list.txt | xargs -I {} echo \"Fruit: {}\"\nrm list.txt" }, explanation: "xargs -I replaces {} with each input line." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-34-q1","type":"mcq","question":"What xargs flag handles filenames with spaces safely?","options":["-0","-n","-P","-I"],"correctAnswer":"-0","explanation":"-0 expects null-delimited input (find -print0).","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"xargs -I {}","value":"Replace token"},{"label":"xargs -0","value":"Null separator"},{"label":"xargs -P 4","value":"Parallel jobs"},{"label":"parallel -j 4","value":"GNU parallel"}],
    },
    {
      id: "bash-35", number: 35, title: "User and Group Management", subtitle: "Managing users, groups, and permissions", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Manage users and groups","Use sudo effectively","Set file permissions correctly"], partLabel: "Part 4: System Administration",
      sections: [
        {
          id: "bash-35-1", title: "User Management", whyItMatters: "User management is fundamental to system security and multi-user environments.",
          content: "**User Commands:**\n\n```bash\nuseradd -m alice          # Create user with home\npasswd alice               # Set password\nusermod -aG sudo alice     # Add to group\nuserdel -r alice           # Delete user and home\n```\n\n**Group Commands:**\n\n```bash\ngroupadd developers\ngroupdel developers\nusermod -aG developers bob\n```\n\n**sudo:** Run commands as root.\n\n```bash\nsudo -l                   # List allowed commands\nsudo -u alice command     # Run as alice\nsudo !!                   # Re-run last with sudo\nvisudo                    # Edit sudoers safely\n```\n\n**Permissions Recap:**\n\n```bash\nchown alice:dev file\nchmod 750 /srv/data      # rwxr-x---\n```",
          codeExamples: [
            { id: "bash-35-ex1", title: "Users", description: "Check current user info", code: { bash: "whoami\nid\ngroups\nwho\nlast | head -5" }, explanation: "Show current user, groups, and login history." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-35-q1","type":"mcq","question":"What command shows which sudo commands you can run?","options":["sudo -l","sudo -v","sudo -k","sudo -L"],"correctAnswer":"sudo -l","explanation":"sudo -l lists allowed commands for the user.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"useradd -m","value":"Create user"},{"label":"usermod -aG","value":"Add group"},{"label":"sudo -l","value":"List allowed"},{"label":"visudo","value":"Edit sudoers"}],
    },
    {
      id: "bash-36", number: 36, title: "Disk Management and Filesystems", subtitle: "Partitions, mount, fsck, LVM", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 75, prerequisites: [], learningObjectives: ["View disk layout","Mount and unmount filesystems","Check disk health"], partLabel: "Part 4: System Administration",
      sections: [
        {
          id: "bash-36-1", title: "Disk Management", whyItMatters: "Disk management ensures data integrity and optimal storage usage.",
          content: "**View Disks:**\n\n```bash\nlsblk             # Tree view of disks\nfdisk -l          # Partition table\nblkid             # UUID and filesystem type\ndf -hT            # Mounted filesystems with type\n```\n\n**Mount/Unmount:**\n\n```bash\nmount /dev/sdb1 /mnt/data\numount /mnt/data\nmount -a          # Mount all from fstab\n```\n\n**Filesystem Ops:**\n\n```bash\nmkfs.ext4 /dev/sdb1\nfsck /dev/sdb1\ntune2fs -l /dev/sdb1  # Filesystem details\n```\n\n**LVM:** Logical Volume Manager for flexible disk management.\n\n```bash\npvcreate /dev/sdb\nvgcreate vg_data /dev/sdb\nlvcreate -n data -L 50G vg_data\n```",
          codeExamples: [
            { id: "bash-36-ex1", title: "Disks", description: "View disk information", code: { bash: "lsblk -o NAME,SIZE,TYPE,MOUNTPOINT\ndf -hT | head -10\necho \"Check complete\"" }, explanation: "Show disks and filesystems." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-36-q1","type":"mcq","question":"What command shows mounted filesystems?","options":["lsblk","df -hT","fdisk -l","blkid"],"correctAnswer":"df -hT","explanation":"df shows mounted filesystems with disk usage; -T adds type.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"lsblk","value":"List block devices"},{"label":"df -hT","value":"Mounted FS"},{"label":"mount /dev /mnt","value":"Mount"},{"label":"fsck","value":"Check FS"}],
    },
    {
      id: "bash-37", number: 37, title: "Package Management", subtitle: "apt, yum, dnf, and snap", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Install/update/remove packages","Search packages","Manage repositories"], partLabel: "Part 4: System Administration",
      sections: [
        {
          id: "bash-37-1", title: "Package Managers", whyItMatters: "Package managers are the primary way to install and update software.",
          content: "**Debian/Ubuntu (apt):**\n\n```bash\napt update               # Refresh index\napt install nginx        # Install\napt remove nginx         # Remove\napt purge nginx          # Remove config too\napt upgrade              # Upgrade all\napt search \"web server\"  # Search\n```\n\n**RHEL/CentOS/Fedora (dnf/yum):**\n\n```bash\ndnf install nginx\ndnf remove nginx\ndnf groupinstall \"Development Tools\"\n```\n\n**snap:** Universal packages.\n\n```bash\nsnap install lxd\nsnap list\n```\n\n**dpkg/rpm:** Low-level.\n\n```bash\ndpkg -i package.deb\ndpkg -l | grep nginx\nrpm -qa | grep nginx\n```",
          codeExamples: [
            { id: "bash-37-ex1", title: "Packages", description: "Package management basics", code: { bash: "apt-cache search nginx | head -5\ndpkg -l | wc -l\necho \"Total packages: $(dpkg -l | wc -l)\"" }, explanation: "Search and count installed packages." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-37-q1","type":"mcq","question":"What apt command refreshes package index?","options":["apt update","apt upgrade","apt refresh","apt index"],"correctAnswer":"apt update","explanation":"apt update downloads the latest package index.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"apt update","value":"Refresh index"},{"label":"apt install","value":"Install"},{"label":"apt remove","value":"Remove"},{"label":"dpkg -l","value":"List packages"}],
    },
    {
      id: "bash-38", number: 38, title: "Process and Service Management", subtitle: "systemd, services, and process supervision", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Manage systemd services","Create service units","Use journalctl"], partLabel: "Part 4: System Administration",
      sections: [
        {
          id: "bash-38-1", title: "systemd", whyItMatters: "systemd is the standard init system for modern Linux distributions.",
          content: "**Service Management:**\n\n```bash\nsystemctl start nginx\nsystemctl stop nginx\nsystemctl restart nginx\nsystemctl status nginx\nsystemctl enable nginx   # Start on boot\nsystemctl disable nginx\n```\n\n**Create a Service Unit:** /etc/systemd/system/myapp.service\n\n```ini\n[Unit]\nDescription=My App\nAfter=network.target\n\n[Service]\nExecStart=/usr/bin/myapp\nRestart=always\nUser=myapp\n\n[Install]\nWantedBy=multi-user.target\n```\n\n**journalctl:** View logs.\n\n```bash\njournalctl -u nginx\njournalctl -u nginx -f   # Follow\njournalctl -u nginx --since \"1 hour ago\"\n```",
          codeExamples: [
            { id: "bash-38-ex1", title: "Services", description: "Check services", code: { bash: "systemctl list-units --type=service --state=running | head -10\necho \"Total running: $(systemctl list-units --type=service --state=running | wc -l)\"" }, explanation: "List all running services." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-38-q1","type":"mcq","question":"What command views logs for a specific systemd service?","options":["journalctl -u","systemctl logs","syslog -u","systemd-log"],"correctAnswer":"journalctl -u","explanation":"journalctl -u nginx shows logs for the nginx unit.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"systemctl start","value":"Start service"},{"label":"systemctl enable","value":"Auto-start"},{"label":"journalctl -u","value":"Service logs"}],
    },
    {
      id: "bash-39", number: 39, title: "Environment Configuration", subtitle: "Profiles, environment variables, and dotfiles", difficulty: "Intermediate", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Use bash startup files","Set environment variables","Manage dotfiles"], partLabel: "Part 4: System Administration",
      sections: [
        {
          id: "bash-39-1", title: "Shell Configuration", whyItMatters: "Proper environment configuration is key to a productive shell workflow.",
          content: "**Startup Files:**\n\n```bash\n~/.bashrc     # Interactive non-login shell\n~/.bash_profile  # Login shell\n~/.profile    # Login (fallback)\n/etc/bashrc   # System-wide\n```\n\n**Execution Order:**\n- Login shell: /etc/profile -> ~/.bash_profile -> ~/.bashrc\n- Interactive: ~/.bashrc\n\n**Common Settings:**\n\n```bash\nexport EDITOR=vim\nexport HISTSIZE=10000\nexport PS1='\\[\\e[32m\\]\\u@\\h \\[\\e[34m\\]\\w\\[\\e[0m\\] \\$ '\n```\n\n**Using envsubst:**\n\n```bash\nexport NAME=World\nenvsubst < template.txt > output.txt\n```",
          codeExamples: [
            { id: "bash-39-ex1", title: "Environment", description: "View and set env vars", code: { bash: "echo \"HOME: $HOME\"\necho \"SHELL: $SHELL\"\necho \"PATH: $PATH\"\necho \"EDITOR: ${EDITOR:-not set}\"" }, explanation: "Check current environment variables." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-39-q1","type":"mcq","question":"What file is sourced for interactive non-login shells?","options":["~/.bashrc","~/.bash_profile","~/.profile","/etc/profile"],"correctAnswer":"~/.bashrc","explanation":"~/.bashrc is the per-user config for interactive shells.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"~/.bashrc","value":"Interactive config"},{"label":"PS1","value":"Prompt format"},{"label":"export VAR=val","value":"Set env var"}],
    },
    {
      id: "bash-40", number: 40, title: "Log Management and Analysis", subtitle: "Syslog, logrotate, and log analysis", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Configure syslog","Rotate logs with logrotate","Analyze logs"], partLabel: "Part 4: System Administration",
      sections: [
        {
          id: "bash-40-1", title: "Log Management", whyItMatters: "Logs are the primary source of truth for troubleshooting.",
          content: "**Log Locations:**\n\n```bash\n/var/log/syslog      # System logs (Debian)\n/var/log/messages    # System logs (RHEL)\n/var/log/nginx/*     # Nginx access/error\n/var/log/auth.log    # Authentication\n```\n\n**logrotate:** Prevent logs from filling disk.\n\n/etc/logrotate.d/nginx:\n\n```\n/var/log/nginx/*.log {\n    daily\n    rotate 14\n    compress\n    delaycompress\n    missingok\n    notifempty\n    postrotate\n        systemctl reload nginx > /dev/null\n    endscript\n}\n```\n\n**Analysis Tools:**\n\n```bash\njournalctl -u nginx --since \"1 hour ago\" --no-pager\ngrep -c \"ERROR\" /var/log/syslog\nawk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -10\n```",
          codeExamples: [
            { id: "bash-40-ex1", title: "Logs", description: "Check recent auth failures", code: { bash: "journalctl -u sshd --since \"1 hour ago\" | grep \"Failed password\" | tail -5\necho \"Total failures: $(journalctl -u sshd --since \"1 hour ago\" | grep -c \"Failed password\")\"" }, explanation: "Check SSH auth failures." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-40-q1","type":"mcq","question":"What tool prevents logs from filling the disk?","options":["logrotate","logclean","syslog-clean","journalctl --vacuum"],"correctAnswer":"logrotate","explanation":"logrotate rotates, compresses, and removes old logs automatically.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"/var/log/","value":"Log directory"},{"label":"logrotate","value":"Log rotation"},{"label":"journalctl -u","value":"Service logs"}],
    },
    {
      id: "bash-41", number: 41, title: "Process Prioritization and Limits", subtitle: "nice, renice, ulimit, cgroups", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 70, prerequisites: [], learningObjectives: ["Set process priority with nice","Set resource limits with ulimit","Use cgroups"], partLabel: "Part 4: System Administration",
      sections: [
        {
          id: "bash-41-1", title: "Priority and Limits", whyItMatters: "Managing resources ensures critical processes have adequate CPU/memory.",
          content: "**Process Priority:** Range -20 (highest) to 19 (lowest).\n\n```bash\nnice -n 10 ./slow-script   # Start with low priority\nrenice -n -5 -p 1234       # Increase priority of PID 1234\ntop -p 1234                # Check priority (NI column)\n```\n\n**ulimit:** Set resource limits.\n\n```bash\nulimit -a                  # View all limits\nulimit -n 4096             # Max open files\nulimit -u 100              # Max user processes\n```\n\n**cgroups (Control Groups):** Limit resources per process group.\n\n```bash\ncgcreate -g cpu,memory:/mygroup\ncgset -r cpu.shares=512 mygroup\ncgexec -g cpu,memory:/mygroup ./script.sh\n```",
          codeExamples: [
            { id: "bash-41-ex1", title: "Limits", description: "Check current limits", code: { bash: "ulimit -a | head -10\necho \"Max processes: $(ulimit -u)\"\necho \"Open files: $(ulimit -n)\"" }, explanation: "View current resource limits." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-41-q1","type":"mcq","question":"What nice value gives lowest priority?","options":["-20","19","0","20"],"correctAnswer":"19","explanation":"19 is lowest priority (most nice).","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"nice -n 10","value":"Low priority"},{"label":"renice","value":"Change priority"},{"label":"ulimit -n","value":"Open files limit"}],
    },
    {
      id: "bash-42", number: 42, title: "SSH and Remote Access", subtitle: "Key-based auth, SSH config, port forwarding", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Configure key-based SSH","Use SSH config file","Set up port forwarding"], partLabel: "Part 4: System Administration",
      sections: [
        {
          id: "bash-42-1", title: "SSH", whyItMatters: "SSH is the standard remote access protocol for Linux servers.",
          content: "**Key-Based Authentication:**\n\n```bash\nssh-keygen -t ed25519 -C \"alice@laptop\"\nssh-copy-id user@server\n```\n\n**SSH Config (~/.ssh/config):**\n\n```\nHost myserver\n    HostName 192.168.1.100\n    User alice\n    Port 2222\n    IdentityFile ~/.ssh/server_ed25519\n```\n\nThen just: `ssh myserver`\n\n**Port Forwarding:**\n\n```bash\nssh -L 8080:localhost:80 user@server  # Local forward\nssh -R 8080:localhost:80 user@server  # Remote forward\nssh -D 1080 user@server               # SOCKS proxy\n```\n\n**Security:**\n- Disable root login: PermitRootLogin no\n- Use key-only auth: PasswordAuthentication no\n- Change port from 22",
          codeExamples: [
            { id: "bash-42-ex1", title: "SSH", description: "Generate SSH key", code: { bash: "ssh-keygen -t ed25519 -f test-key -N \"\" -C \"test@test\" 2>&1\nls -la test-key*\nrm -f test-key test-key.pub\necho \"Key generation works!\"" }, explanation: "Generate an ed25519 key pair." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-42-q1","type":"mcq","question":"What SSH config option sets the private key file?","options":["IdentityFile","KeyFile","PrivateKey","Identity"],"correctAnswer":"IdentityFile","explanation":"IdentityFile points to the private key for authentication.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"ssh-keygen -t ed25519","value":"Generate key"},{"label":"ssh-copy-id","value":"Copy key"},{"label":"~/.ssh/config","value":"Host config"},{"label":"ssh -L","value":"Port forward"}],
    },
    {
      id: "bash-43", number: 43, title: "Firewall and Security", subtitle: "iptables, nftables, ufw, fail2ban", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: [], learningObjectives: ["Configure iptables rules","Use ufw for simple firewall","Set up fail2ban"], partLabel: "Part 4: System Administration",
      sections: [
        {
          id: "bash-43-1", title: "Firewall", whyItMatters: "Firewalls are the first line of defense against network attacks.",
          content: "**iptables:** Low-level firewall.\n\n```bash\niptables -L -n -v           # List rules\niptables -A INPUT -p tcp --dport 22 -j ACCEPT\niptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT\niptables -P INPUT DROP      # Default: block\niptables-save > /etc/iptables.rules\n```\n\n**ufw:** Simplified firewall.\n\n```bash\nufw enable\nufw allow ssh\nufw allow 80/tcp\nufw allow 443/tcp\nufw status verbose\n```\n\n**nftables:** Modern replacement for iptables.\n\n```bash\nnft add rule inet filter input tcp dport 22 accept\n```\n\n**fail2ban:** Ban IPs after repeated failures.\n\n```bash\nfail2ban-client status sshd\nfail2ban-client set sshd banip 192.168.1.100\n```",
          codeExamples: [
            { id: "bash-43-ex1", title: "Firewall", description: "Check ufw status", code: { bash: "which ufw && ufw status verbose 2>/dev/null || echo \"ufw not available (using iptables/nftables)\"\niptables -L -n --line-numbers 2>/dev/null | head -15 || nft list ruleset 2>/dev/null | head -15" }, explanation: "Check firewall status with available tools." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-43-q1","type":"mcq","question":"What command saves iptables rules?","options":["iptables-save","iptables-store","iptables-export","iptables --save"],"correctAnswer":"iptables-save","explanation":"iptables-save outputs current rules to stdout.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"ufw enable","value":"Enable firewall"},{"label":"iptables -L","value":"List rules"},{"label":"fail2ban","value":"Brute force protection"}],
    },
    {
      id: "bash-44", number: 44, title: "Backup and Restore", subtitle: "rsync, duplicity, dd, and backup strategies", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Use rsync for backups","Full vs incremental backup","Automate backup scripts"], partLabel: "Part 4: System Administration",
      sections: [
        {
          id: "bash-44-1", title: "Backup Strategies", whyItMatters: "Backups protect against data loss and enable disaster recovery.",
          content: "**rsync:** Fast incremental file transfer.\n\n```bash\nrsync -avz /data/ user@remote:/backup/   # Remote backup\nrsync -av --delete /src/ /dest/          # Mirror (deletes extra)\nrsync -avz --link-dest=/prev /src/ /dest/  # Incremental\n```\n\n**dd:** Disk cloning.\n\n```bash\ndd if=/dev/sda of=/backup/disk.img bs=4M status=progress\ndd if=/dev/sda bs=4M | gzip > /backup/disk.img.gz\n```\n\n**Backup Script Example:**\n\n```bash\n#!/bin/bash\nBACKUP_DIR=\"/backup/$(date +%Y%m%d)\"\nmkdir -p \"$BACKUP_DIR\"\nrsync -av /home/ \"$BACKUP_DIR/home/\"\necho \"Backup complete: $BACKUP_DIR\"\n```\n\n**3-2-1 Rule:** 3 copies, 2 media, 1 offsite.",
          codeExamples: [
            { id: "bash-44-ex1", title: "Backup", description: "Local directory backup", code: { bash: "mkdir -p /tmp/backup-test/{src,dest}\necho test > /tmp/backup-test/src/file.txt\nrsync -av /tmp/backup-test/src/ /tmp/backup-test/dest/\ncat /tmp/backup-test/dest/file.txt\nrm -rf /tmp/backup-test\necho \"Backup works!\"" }, explanation: "Simple rsync mirror of local directory." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-44-q1","type":"mcq","question":"What rsync flag creates incremental backups?","options":["--link-dest","--incremental","--backup","--copy-dest"],"correctAnswer":"--link-dest","explanation":"--link-dest hardlinks unchanged files from previous backup.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"rsync -avz","value":"Remote backup"},{"label":"rsync --delete","value":"Mirror"},{"label":"dd bs=4M","value":"Disk clone"}],
    },
    {
      id: "bash-45", number: 45, title: "Performance Monitoring and Tuning", subtitle: "sar, perf, strace, and tuning", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: [], learningObjectives: ["Use sar for historical stats","Profile with perf","Trace system calls with strace"], partLabel: "Part 4: System Administration",
      sections: [
        {
          id: "bash-45-1", title: "Performance Tools", whyItMatters: "Performance analysis helps identify and resolve bottlenecks.",
          content: "**sar (System Activity Reporter):**\n\n```bash\nsar -u 2 5              # CPU every 2s, 5 times\nsar -r                   # Memory\nsar -b                   # I/O\nsar -n DEV               # Network\n```\n\n**perf:** Linux profiler.\n\n```bash\nperf top                 # Live profiling\nperf record ./myapp      # Record profile\nperf report              # Analyze\n```\n\n**strace:** Trace system calls.\n\n```bash\nstrace -c ls            # Count syscalls\nstrace -p 1234          # Attach to process\nstrace -e open,read ls  # Filter syscalls\n```\n\n**lsof:** List open files.\n\n```bash\nlsof -i :8080           # Who's using port 8080\nlsof -u alice           # Alice's open files\n```",
          codeExamples: [
            { id: "bash-45-ex1", title: "Performance", description: "Quick performance check", code: { bash: "echo \"Load:\"\nuptime\necho \"Memory:\"\nfree -h\necho \"Top process:\"\nps aux --sort=-%cpu | head -2" }, explanation: "Quick system performance overview." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-45-q1","type":"mcq","question":"What tool traces system calls?","options":["strace","perf","sar","ltrace"],"correctAnswer":"strace","explanation":"strace intercepts and records system calls.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"sar -u","value":"CPU history"},{"label":"perf top","value":"Live profiling"},{"label":"strace -c","value":"Syscall count"},{"label":"lsof -i :80","value":"Port usage"}],
    },
    {
      id: "bash-46", number: 46, title: "Sysadmin Scripting Toolkit", subtitle: "Combining tools for automation", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Write sysadmin scripts","Use config files","Send notifications"], partLabel: "Part 4: System Administration",
      sections: [
        {
          id: "bash-46-1", title: "Sysadmin Scripts", whyItMatters: "Sysadmin scripts automate routine maintenance tasks.",
          content: "**Health Check Script:**\n\n```bash\n#!/bin/bash\ntHRESHOLD=90\nUSAGE=$(df / | tail -1 | awk '{print $5}' | tr -d '%')\nif [ \"$USAGE\" -gt \"$THRESHOLD\" ]; then\n  echo \"Warning: Disk at ${USAGE}%\" | mail -s \"Disk Alert\" admin@example.com\nfi\n```\n\n**Config File Parsing:**\n\n```bash\n#!/bin/bash\nCONFIG=\"/etc/myapp.conf\"\nDB_HOST=$(grep '^db_host' \"$CONFIG\" | awk '{print $2}')\nDB_PORT=$(grep '^db_port' \"$CONFIG\" | awk '{print $2}')\n```\n\n**Notification Methods:**\n\n```bash\nmail -s \"Alert\" admin@example.com < report.txt\ncurl -s -X POST https://hooks.slack.com/... -d '{\"text\":\"Alert\"}'\nnotify-send \"Backup complete\"  # Desktop\n```",
          codeExamples: [
            { id: "bash-46-ex1", title: "Health Check", description: "Simple disk check", code: { bash: "THRESHOLD=90\nUSAGE=$(df / | tail -1 | awk '{print $5}' | tr -d '%')\nif [ $USAGE -gt $THRESHOLD ]; then\n  echo \"ALERT: Disk at ${USAGE}%\"\nelse\n  echo \"OK: Disk at ${USAGE}%\"\nfi" }, explanation: "Check disk usage and report status." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-46-q1","type":"mcq","question":"What awk expression extracts the percentage from df output?","options":["{print $5}","{print $1}","{print $2}","{print $NF}"],"correctAnswer":"{print $5}","explanation":"df output has filesystem, size, used, avail, use%, mount.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"df / | awk '{print $5}'","value":"Disk %"},{"label":"mail -s","value":"Email alerts"},{"label":"curl -X POST","value":"Webhook alerts"}],
    },
    {
      id: "bash-47", number: 47, title: "Advanced Scripting Techniques", subtitle: "Here-docs, process substitution, coproc", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Use here-docs effectively","Use process substitution","Use coproc"], partLabel: "Part 5: Advanced Bash",
      sections: [
        {
          id: "bash-47-1", title: "Advanced Scripting", whyItMatters: "Advanced Bash features enable elegant solutions to complex problems.",
          content: "**Here-Documents:**\n\n```bash\ncat << EOF > file.txt\nLine 1\nLine 2\nEOF\n\ncat <<- 'EOF'  # Indented, no expansion\n  Literal text with $VAR\nEOF\n```\n\n**Process Substitution:**\n\n```bash\ndiff <(ls dir1) <(ls dir2)\nwhile read line; do echo \"$line\"; done < <(command)\n```\n\n**coproc:** Run command in background with I/O.\n\n```bash\ncoproc MYPROC { command; }\necho \"input\" >&${MYPROC[1]}\nread output <&${MYPROC[0]}\n```\n\n**Named Pipes (FIFOs):**\n\n```bash\nmkfifo mypipe\ncommand1 > mypipe &\ncommand2 < mypipe\n```",
          codeExamples: [
            { id: "bash-47-ex1", title: "Here-doc", description: "Generate config with heredoc", code: { bash: "cat << EOF > /tmp/test.conf\nserver {\n  listen 80;\n  server_name example.com;\n}\nEOF\ncat /tmp/test.conf\nrm /tmp/test.conf" }, explanation: "Generate a config file using heredoc." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-47-q1","type":"mcq","question":"What syntax creates a named pipe?","options":["mkfifo","mkpipe","mknod","pipemake"],"correctAnswer":"mkfifo","explanation":"mkfifo creates a named pipe (FIFO) for inter-process communication.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"cat << EOF","value":"Here-document"},{"label":"<(cmd)","value":"Process substitution"},{"label":"coproc","value":"Background with I/O"},{"label":"mkfifo","value":"Named pipe"}],
    },
    {
      id: "bash-48", number: 48, title: "Debugging and Testing Scripts", subtitle: "ShellCheck, bash -x, assert patterns", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 70, prerequisites: [], learningObjectives: ["Debug with bash -x","Use ShellCheck","Write testable scripts"], partLabel: "Part 5: Advanced Bash",
      sections: [
        {
          id: "bash-48-1", title: "Debugging", whyItMatters: "Debugging tools save hours of troubleshooting.",
          content: "**Debug Modes:**\n\n```bash\nbash -x script.sh        # Trace execution\nbash -n script.sh        # Syntax check only\nset -x                   # Enable trace\nset +x                   # Disable trace\n```\n\n**PS4 Prompt:** Controls -x output prefix.\n\n```bash\nexport PS4='+${BASH_SOURCE}:${LINENO}:${FUNCNAME[0]}: '\n```\n\n**ShellCheck:** Static analysis.\n\n```bash\nshellcheck script.sh\n# Flags:\n# SC2086: Double quote to prevent globbing\n# SC2002: Useless cat\n```\n\n**assert Pattern:**\n\n```bash\nassert() {\n  if ! \"$@\"; then\n    echo \"Assertion failed: $@\" >&2\n    exit 1\n  fi\n}\n\nassert [ -f /etc/passwd ]\nassert grep -q root /etc/passwd\n```",
          codeExamples: [
            { id: "bash-48-ex1", title: "Debug", description: "Using debug mode", code: { bash: "#!/bin/bash\nset -x\nname=\"World\"\necho \"Hello, $name\"\nset +x\necho \"Debug off\"" }, explanation: "Enable trace to see each command executed." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-48-q1","type":"mcq","question":"What flag does bash syntax checking?","options":["bash -n","bash -x","bash -v","bash -c"],"correctAnswer":"bash -n","explanation":"bash -n reads and parses commands without executing.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"bash -x","value":"Trace execution"},{"label":"bash -n","value":"Syntax check"},{"label":"shellcheck","value":"Static analysis"},{"label":"PS4","value":"Debug prefix"}],
    },
    {
      id: "bash-49", number: 49, title: "Security Hardening", subtitle: "setuid, capabilities, AppArmor/SELinux", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Understand setuid/setgid","Use Linux capabilities","Apply AppArmor profiles"], partLabel: "Part 5: Advanced Bash",
      sections: [
        {
          id: "bash-49-1", title: "Hardening", whyItMatters: "Security hardening protects against privilege escalation and exploits.",
          content: "**setuid/setgid:** Run as file owner.\n\n```bash\nchmod u+s /usr/bin/passwd   # setuid (rwsr-xr-x)\nchmod g+s /shared/dir       # Inherit group\nfind / -perm -4000           # Find setuid files\n```\n\n**Linux Capabilities:** Fine-grained privileges.\n\n```bash\nsetcap cap_net_bind_service=+ep /usr/bin/node\ngetcap /usr/bin/node\n```\n\n**AppArmor/SELinux:** Mandatory Access Control.\n\n```bash\n# AppArmor\naa-status\naa-complain /usr/bin/myapp\naa-enforce /usr/bin/myapp\n\n# SELinux (RHEL/CentOS)\ngetenforce\nsetenforce 0    # Permissive (troubleshoot)\nchcon -t httpd_sys_content_t /srv/www\n```\n\n**SSH Security :**\n- PermitRootLogin no\n- PasswordAuthentication no\n- MaxAuthTries 3",
          codeExamples: [
            { id: "bash-49-ex1", title: "Security", description: "Check setuid files", code: { bash: "find / -perm -4000 2>/dev/null | head -10\necho \"---\"\nfind / -perm -2000 2>/dev/null | head -10" }, explanation: "Find all setuid and setgid binaries." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-49-q1","type":"mcq","question":"What command finds setuid binaries?","options":["find / -perm -4000","find / -uid 0","find / -type s","find / -perm +4000"],"correctAnswer":"find / -perm -4000","explanation":"-perm -4000 matches the setuid bit (4000 octal).","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"chmod u+s","value":"Setuid"},{"label":"getcap","value":"List capabilities"},{"label":"aa-status","value":"AppArmor status"}],
    },
    {
      id: "bash-50", number: 50, title: "POSIX Shell Compatibility", subtitle: "Writing portable shell scripts", difficulty: "Advanced", estimatedMinutes: 45, xpReward: 65, prerequisites: [], learningObjectives: ["Understand POSIX sh","Write portable scripts","Avoid Bashisms"], partLabel: "Part 5: Advanced Bash",
      sections: [
        {
          id: "bash-50-1", title: "POSIX Compatibility", whyItMatters: "POSIX-compliant scripts run on any Unix shell (sh, dash, bash, zsh).",
          content: "**POSIX vs Bash:**\n\n| Feature        | Bashism     | POSIX Alternative |\n|---------------|-------------|------------------|\n| Array         | arr=(a b)   | Not supported    |\n| [[ ]]         | Keyword     | [ ]              |\n| <<<           | Here-string | echo \"x\" | while |\n| let           | Math        | $(( ))            |\n| source        | . meaning   | .                 |\n| echo -e       | Escape      | printf            |\n\n**Shebang for Portability:**\n\n```bash\n#!/bin/sh\n```\n\n**Safe Patterns:**\n\n```bash\n# Use printf instead of echo\nprintf '%s\\n' \"$var\"\n\n# Use [ ] not [[ ]]\nif [ \"$var\" = \"value\" ]; then\n\n# Use ${x:-default}\ndefault=${1:-default}\n```",
          codeExamples: [
            { id: "bash-50-ex1", title: "POSIX", description: "Portable script example", code: { bash: "#!/bin/sh\nname=\"${1:-World}\"\nprintf \"Hello, %s!\\n\" \"$name\"" }, explanation: "POSIX-compliant greeting script." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-50-q1","type":"mcq","question":"What is the POSIX-compliant alternative to source?","options":[".","call","include","run"],"correctAnswer":".","explanation":". (dot) is the POSIX source command.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"#!/bin/sh","value":"POSIX shebang"},{"label":"printf","value":"Portable print"},{"label":"[ ]","value":"POSIX test"}],
    },
    {
      id: "bash-51", number: 51, title: "Shell Integration Patterns", subtitle: "FIFOs, signals, and event-driven scripting", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 70, prerequisites: [], learningObjectives: ["Use signals in scripts","Create event-driven patterns","Integrate with services"], partLabel: "Part 5: Advanced Bash",
      sections: [
        {
          id: "bash-51-1", title: "Integration Patterns", whyItMatters: "Integration patterns connect Bash with other services and systems.",
          content: "**Signal Handling:**\n\n```bash\ntrap 'echo \"Ctrl+C ignored\"' INT\ntrap 'cleanup; exit' EXIT TERM\n```\n\n**Watch and React:**\n\n```bash\nwhile inotifywait -e modify /etc/config; do\n  echo \"Config changed, reloading...\"\n  systemctl reload myapp\ndone\n```\n\n**Socket Communication:**\n\n```bash\nexec 3<>/dev/tcp/google.com/80\necho -e \"GET / HTTP/1.1\\r\\nHost: google.com\\r\\n\\r\\n\" >&3\ncat <&3\n```\n\n**API Integration:**\n\n```bash\ncurl -s -X POST \"https://api.example.com/data\" \\\n  -H \"Content-Type: application/json\" \\\n  -d \"{\\\"key\\\":\\\"$VALUE\\\"}\"\n```",
          codeExamples: [
            { id: "bash-51-ex1", title: "Signals", description: "Trapping SIGINT", code: { bash: "echo \"Press Ctrl+C to see the trap...\"\ntrap \"echo \\\"Caught INT, but continuing...\\\"\" INT\nfor i in 1 2 3; do sleep 1; done\ntrap - INT\necho \"Done\"" }, explanation: "Intercept Ctrl+C and continue running." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-51-q1","type":"mcq","question":"What command watches for filesystem changes?","options":["inotifywait","watch -f","filewatcher","fswatch"],"correctAnswer":"inotifywait","explanation":"inotifywait blocks until a filesystem event occurs.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"trap","value":"Signal handler"},{"label":"inotifywait","value":"File watcher"},{"label":"exec 3<>/dev/tcp","value":"TCP socket"}],
    },
    {
      id: "bash-52", number: 52, title: "CI/CD Pipeline Scripting", subtitle: "Bash in CI/CD, Git hooks, and automation", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Write CI/CD scripts","Create Git hooks","Automate deployments"], partLabel: "Part 5: Advanced Bash",
      sections: [
        {
          id: "bash-52-1", title: "CI/CD with Bash", whyItMatters: "Bash is the backbone of most CI/CD pipeline scripting.",
          content: "**CI Pipeline Script:**\n\n```bash\n#!/bin/bash\nset -e\nnpm install\nnpm run lint\nnpm run test\nnpm run build\n```\n\n**Git Hooks (.git/hooks/pre-commit):**\n\n```bash\n#!/bin/bash\nchanged=$(git diff --cached --name-only | grep '\\.ts$')\nif [ -n \"$changed\" ]; then\n  npx eslint $changed\nfi\n```\n\n**Deploy Script:**\n\n```bash\n#!/bin/bash\nset -e\nssh deploy@server \"cd /app && git pull && npm install && pm2 restart app\"\necho \"Deployed successfully\"\n```\n\n**Environment-Specific Config:**\n\n```bash\nENV=${1:-development}\nsource \".env.${ENV}\"\ndocker-compose -f \"docker-compose.${ENV}.yml\" up -d\n```",
          codeExamples: [
            { id: "bash-52-ex1", title: "CI Script", description: "Simple CI pipeline", code: { bash: "#!/bin/bash\nset -e\necho \"Stage 1: Lint\"\necho \"Linting passed\"\necho \"Stage 2: Test\"\necho \"Tests passed\"\necho \"Stage 3: Build\"\necho \"Build successful\"" }, explanation: "Staged CI pipeline script with failure handling." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-52-q1","type":"mcq","question":"What directory contains Git hooks?","options":[".git/hooks",".git/config","hooks/",".githooks/"],"correctAnswer":".git/hooks","explanation":"Git hooks are scripts in .git/hooks/ that run on events.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"set -e","value":"Exit on error"},{"label":"pre-commit hook","value":"Check before commit"},{"label":"ssh deploy","value":"Remote deploy"}],
    },
    {
      id: "bash-53", number: 53, title: "Docker and Container Management", subtitle: "Docker CLI, images, containers, compose", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: [], learningObjectives: ["Use Docker CLI","Build and manage images","Use Docker Compose"], partLabel: "Part 5: Advanced Bash",
      sections: [
        {
          id: "bash-53-1", title: "Docker CLI", whyItMatters: "Bash is the primary interface for Docker container management.",
          content: "**Container Lifecycle:**\n\n```bash\ndocker pull nginx\ndocker run -d --name web -p 80:80 nginx\ndocker ps\ndocker stop web\ndocker rm web\n```\n\n**Images:**\n\n```bash\ndocker build -t myapp:latest .\ndocker images\ndocker rmi myapp:latest\ndocker exec -it container_name bash\n```\n\n**Docker Compose:**\n\n```bash\ndocker-compose up -d\ndocker-compose down\ndocker-compose logs -f\ndocker-compose exec app bash\n```\n\n**docker-compose.yml:**\n\n```yaml\nversion: '3'\nservices:\n  web:\n    image: nginx\n    ports:\n      - \"80:80\"\n```",
          codeExamples: [
            { id: "bash-53-ex1", title: "Docker", description: "Docker status check", code: { bash: "docker --version 2>/dev/null || echo \"Docker not installed\"\ndocker ps 2>/dev/null | head -5 || echo \"No running containers\"\necho \"Docker check complete\"" }, explanation: "Check Docker availability and running containers." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-53-q1","type":"mcq","question":"What command runs a command inside a running container?","options":["docker exec","docker run","docker attach","docker shell"],"correctAnswer":"docker exec","explanation":"docker exec runs a command in a running container.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"docker ps","value":"Running containers"},{"label":"docker build -t","value":"Build image"},{"label":"docker-compose up","value":"Start services"}],
    },
    {
      id: "bash-54", number: 54, title: "Cloud CLI Tools", subtitle: "AWS, GCP, Azure CLI basics", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use AWS CLI","Use gcloud CLI","Automate cloud tasks"], partLabel: "Part 5: Advanced Bash",
      sections: [
        {
          id: "bash-54-1", title: "Cloud CLI", whyItMatters: "Cloud CLIs enable infrastructure management from the command line.",
          content: "**AWS CLI:**\n\n```bash\naws s3 ls\naws s3 cp file.txt s3://my-bucket/\naws ec2 describe-instances --query 'Reservations[*].Instances[*].[InstanceId,State.Name]' --output table\naws lambda invoke --function-name my-function output.json\n```\n\n**gcloud (GCP):**\n\n```bash\ngcloud compute instances list\ngcloud storage cp file.txt gs://my-bucket\ngcloud functions call my-function --data '{\"key\":\"value\"}'\n```\n\n**Azure CLI:**\n\n```bash\naz vm list --output table\naz storage blob upload --account-name mystore -c data -f file.txt\n```\n\n**Automation Pattern:**\n\n```bash\n#!/bin/bash\nfor region in us-east-1 us-west-2; do\n  aws ec2 describe-instances --region $region --query 'Reservations[*].Instances[*].[InstanceId,State.Name]' --output table\ndone\n```",
          codeExamples: [
            { id: "bash-54-ex1", title: "Cloud CLI", description: "List AWS S3 buckets", code: { bash: "aws --version 2>/dev/null || echo \"AWS CLI not installed\"\necho \"If AWS CLI is configured, run: aws s3 ls\"" }, explanation: "Check AWS CLI availability." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-54-q1","type":"mcq","question":"What AWS CLI command lists S3 buckets?","options":["aws s3 ls","aws s3 list","aws s3api list-buckets","Both a and c"],"correctAnswer":"Both a and c","explanation":"aws s3 ls (high-level) and aws s3api list-buckets (API-level) both work.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"aws s3 ls","value":"List buckets"},{"label":"gcloud compute","value":"GCP instances"},{"label":"az vm list","value":"Azure VMs"}],
    },
    {
      id: "bash-55", number: 55, title: "Project: Automated Backup System", subtitle: "Build a production backup script", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Implement full backup system","Add rotation and notifications","Handle errors"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "bash-55-1", title: "Backup System", whyItMatters: "A real backup system ties together most Bash concepts.",
          content: "**Project Requirements:**\n- Configurable source/destination\n- Full + incremental backups\n- Compression\n- Rotation (keep last N)\n- Email/notify on success/failure\n- Lock file to prevent concurrent runs\n\n**Script Structure:**\n\n```bash\n#!/bin/bash\nset -euo pipefail\n\nCONFIG=\"/etc/backup.conf\"\nLOCKFILE=\"/var/run/backup.lock\"\n\n# Prevent concurrent runs\nif [ -f \"$LOCKFILE\" ]; then\n  echo \"Backup already running\" >&2\n  exit 1\nfi\ntrap 'rm -f $LOCKFILE' EXIT\ntouch \"$LOCKFILE\"\n\n# Load config\nsource \"$CONFIG\"\n\n# Rotate\nfor i in $(seq $((KEEP-1)) -1 1); do\n  [ -d \"${DEST}.$i\" ] && mv \"${DEST}.$i\" \"${DEST}.$((i+1))\"\ndone\n[ -d \"$DEST\" ] && mv \"$DEST\" \"${DEST}.1\"\n\n# Backup\nrsync -av --delete \"$SOURCE\" \"$DEST\" || {\n  echo \"Backup failed\" | mail -s \"Backup ERROR\" \"$EMAIL\"\n  exit 1\n}\n\necho \"Backup complete\" | mail -s \"Backup OK\" \"$EMAIL\"\n```",
          codeExamples: [
            { id: "bash-55-ex1", title: "Backup Project", description: "Rotation logic", code: { bash: "KEEP=5\nfor i in $(seq $((KEEP-1)) -1 1); do\n  echo \"Rotating: .$i -> .$((i+1))\"\ndone\necho \"New backup set created\"" }, explanation: "Rotation shifts backups by one generation." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-55-q1","type":"mcq","question":"What file prevents concurrent backup runs?","options":[".lock","lockfile","PID file","journal"],"correctAnswer":"lockfile","explanation":"A lock file prevents multiple backup instances from running simultaneously.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"LOCKFILE","value":"Concurrency guard"},{"label":"rsync -av --delete","value":"Mirror backup"},{"label":"mail -s","value":"Email report"}],
    },
    {
      id: "bash-56", number: 56, title: "Project: Log Analysis Dashboard", subtitle: "Parse logs, generate reports", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Parse log formats","Generate HTML reports","Schedule analysis"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "bash-56-1", title: "Log Analyzer", whyItMatters: "Log analysis is a common real-world task that combines text processing tools.",
          content: "**Project Features:**\n- Parse Nginx access logs\n- Count status codes, IPs, URLs\n- Find slow requests\n- Generate HTML report\n- Email weekly summary\n\n**Nginx Log Format:**\n\n```bash\n$remote_addr - $remote_user [$time_local] \"$request\" $status $body_bytes_sent \"$http_referer\" \"$http_user_agent\"\n```\n\n**Analysis Script:**\n\n```bash\n#!/bin/bash\nLOG=\"/var/log/nginx/access.log\"\nREPORT=\"/tmp/report.html\"\n\n# Top IPs\necho \"<h2>Top IPs</h2><table>\" >> \"$REPORT\"\nawk '{print $1}' \"$LOG\" | sort | uniq -c | sort -rn | head -10 | while read count ip; do\n  echo \"<tr><td>$ip</td><td>$count</td></tr>\" >> \"$REPORT\"\ndone\necho \"</table>\" >> \"$REPORT\"\n\n# Status codes\necho \"<h2>Status Codes</h2>\" >> \"$REPORT\"\nawk '{print $9}' \"$LOG\" | sort | uniq -c | sort -rn | while read count code; do\n  echo \"<tr><td>$code</td><td>$count</td></tr>\" >> \"$REPORT\"\ndone\n```",
          codeExamples: [
            { id: "bash-56-ex1", title: "Log Analysis", description: "Count status codes", code: { bash: "echo -e '192.168.1.1 - - [01/Jan/2024:12:00:00] \"GET / HTTP/1.1\" 200 1234\n192.168.1.2 - - [01/Jan/2024:12:00:01] \"GET /404 HTTP/1.1\" 404 56' > log.txt\nawk '{print $9}' log.txt | sort | uniq -c | sort -rn\nrm log.txt" }, explanation: "Extract and count HTTP status codes from logs." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-56-q1","type":"mcq","question":"Which awk field has the HTTP status code in Nginx logs?","options":["$9","$1","$5","$7"],"correctAnswer":"$9","explanation":"In combined format, status is field 9.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"awk '{print $9}'","value":"Status code"},{"label":"uniq -c | sort -rn","value":"Frequency sort"},{"label":"HTML report","value":"Visual output"}],
    },
    {
      id: "bash-57", number: 57, title: "Project: Deployment Automation", subtitle: "Zero-downtime deploy system", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Create deploy pipeline","Implement rollback","Handle zero-downtime deploys"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "bash-57-1", title: "Deploy System", whyItMatters: "Deployment automation ensures reliable releases.",
          content: "**Deploy Flow:**\n1. Pull latest code\n2. Install dependencies\n3. Run migrations\n4. Build assets\n5. Switch symlink\n6. Reload service\n7. Health check\n\n**Script:**\n\n```bash\n#!/bin/bash\nset -euo pipefail\n\nAPP_DIR=\"/opt/myapp\"\nRELEASE_DIR=\"${APP_DIR}/releases/$(date +%Y%m%d%H%M%S)\"\nCURRENT_LINK=\"${APP_DIR}/current\"\n\n# Clone/update\nmkdir -p \"$RELEASE_DIR\"\ngit clone --depth 1 https://... \"$RELEASE_DIR\"\n\n# Build\ncd \"$RELEASE_DIR\"\nnpm install\nnpm run build\n\n# Switch symlink\nln -sfn \"$RELEASE_DIR\" \"$CURRENT_LINK\"\n\n# Reload\nif systemctl is-active --quiet myapp; then\n  systemctl reload myapp || systemctl restart myapp\nelse\n  systemctl start myapp\nfi\n\n# Health check\nsleep 5\nif curl -sf http://localhost/health; then\n  echo \"Deploy successful\"\nelse\n  echo \"Health check failed, rolling back...\"\n  # Rollback logic here\n  exit 1\nfi\n```",
          codeExamples: [
            { id: "bash-57-ex1", title: "Deploy", description: "Symlink switch for zero-downtime", code: { bash: "mkdir -p /tmp/deploy/{releases/v1,releases/v2}\necho v1 > /tmp/deploy/releases/v1/index.html\nln -sfn /tmp/deploy/releases/v1 /tmp/deploy/current\necho \"Current: $(cat /tmp/deploy/current/index.html)\"\nln -sfn /tmp/deploy/releases/v2 /tmp/deploy/current\necho \"After switch: $(cat /tmp/deploy/current/index.html)\"\nrm -rf /tmp/deploy" }, explanation: "Symlink switching enables instant rollback." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-57-q1","type":"mcq","question":"What does ln -sfn do?","options":["Create/force symlink","Soft link","Hard link","Symbolic follow"],"correctAnswer":"Create/force symlink","explanation":"ln -s symlink, -f force, -n treat as file.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"ln -sfn","value":"Symlink switch"},{"label":"systemctl reload","value":"Graceful reload"},{"label":"curl -sf health","value":"Health check"}],
    },
    {
      id: "bash-58", number: 58, title: "Project: System Monitor Dashboard", subtitle: "Real-time system monitoring", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Collect system metrics","Generate dashboard","Set up alerts"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "bash-58-1", title: "Monitor Dashboard", whyItMatters: "A custom dashboard teaches data collection and real-time display.",
          content: "**Metrics Collection:**\n\n```bash\n#!/bin/bash\nMETRICS_DIR=\"/var/lib/monitor\"\nmkdir -p \"$METRICS_DIR\"\n\nwhile true; do\n  TIMESTAMP=$(date +%s)\n  echo \"$TIMESTAMP $(free | awk '/Mem:/ {print $3}')\" >> \"$METRICS_DIR/memory\"\n  echo \"$TIMESTAMP $(df / | tail -1 | awk '{print $3}')\" >> \"$METRICS_DIR/disk\"\n  echo \"$TIMESTAMP $(uptime | awk -F'load average:' '{print $2}' | cut -d, -f1)\" >> \"$METRICS_DIR/load\"\n  sleep 60\ndone\n```\n\n**Alerting:**\n\n```bash\n#!/bin/bash\ncheck() {\n  local metric=$1 threshold=$2\n  local value=$(tail -1 \"$METRICS_DIR/$metric\" | awk '{print $2}')\n  if [ \"$value\" -gt \"$threshold\" ]; then\n    echo \"ALERT: $metric = $value (threshold: $threshold)\"\n  fi\n}\n\ncheck memory 8000000    # 8GB\ncheck disk 50000000     # 50GB\ncheck load 4.0          # Load average\n```\n\n**Generate Dashboard HTML:**\n\n```bash\necho \"<html><body><h1>System Monitor</h1>\" > /var/www/dashboard.html\necho \"<p>Memory: $(free -h | grep Mem | awk '{print $3}')</p>\" >> /var/www/dashboard.html\necho \"<p>Disk: $(df -h / | tail -1 | awk '{print $3}')</p>\" >> /var/www/dashboard.html\necho \"</body></html>\" >> /var/www/dashboard.html\n```",
          codeExamples: [
            { id: "bash-58-ex1", title: "Monitor", description: "Collect a single metric", code: { bash: "echo \"$(date +%s) $(free -m | awk '/Mem:/ {print $3}')\" > /tmp/metric\necho \"Memory metric collected:\"\ncat /tmp/metric\nrm /tmp/metric" }, explanation: "Collect a timestamped memory metric." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-58-q1","type":"mcq","question":"What uptime field shows load average?","options":["$10","$(NF-2)","Load field","{print $NF}"],"correctAnswer":"$(NF-2)","explanation":"Load average is the third-from-last field in uptime output.","difficulty":3}], passingScore: 70 },
      cheatSheet: [{"label":"free | awk '/Mem/'","value":"Memory usage"},{"label":"df / | tail -1","value":"Root disk"},{"label":"uptime | awk -F,","value":"Load average"}],
    },
    {
      id: "bash-59", number: 59, title: "Project: DevOps Automation Toolkit", subtitle: "Infrastructure automation", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Build an automation toolkit","Use modular functions","Implement dry-run mode"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "bash-59-1", title: "DevOps Toolkit", whyItMatters: "A modular toolkit provides reusable infrastructure automation.",
          content: "**Library Architecture:**\n\n```bash\nlib/\n  log.sh        # Color logging\n  utils.sh      # Common utilities\n  docker.sh     # Docker helpers\n  aws.sh        # AWS helpers\n  deploy.sh     # Deploy functions\n```\n\n**lib/log.sh:**\n\n```bash\n#!/bin/bash\nRED='\\033[0;31m'\nGREEN='\\033[0;32m'\nYELLOW='\\033[1;33m'\nNC='\\033[0m'\n\ninfo()  { echo -e \"${GREEN}[INFO]${NC} $@\"; }\nwarn()  { echo -e \"${YELLOW}[WARN]${NC} $@\"; }\nerror() { echo -e \"${RED}[ERROR]${NC} $@\" >&2; }\n```\n\n**lib/utils.sh:**\n\n```bash\n#!/bin/bash\nDRY_RUN=${DRY_RUN:-false}\n\nrun() {\n  if [ \"$DRY_RUN\" = true ]; then\n    info \"DRY-RUN: $@\"\n  else\n    \"$@\"\n  fi\n}\n\nrequire() {\n  for cmd in \"$@\"; do\n    if ! command -v \"$cmd\" >/dev/null 2>&1; then\n      error \"Required command not found: $cmd\"\n      exit 1\n    fi\n  done\n}\n```\n\n**Usage:**\n\n```bash\n#!/bin/bash\nDRY_RUN=true\nsource lib/log.sh\nsource lib/utils.sh\n\nrequire docker curl\nrun docker build -t myapp .\ninfo \"Build complete\"\n```",
          codeExamples: [
            { id: "bash-59-ex1", title: "Toolkit", description: "Using log functions", code: { bash: "RED='\\033[0;31m'\nGREEN='\\033[0;32m'\nNC='\\033[0m'\ninfo()  { echo -e \"${GREEN}[INFO]${NC} $@\"; }\nerror() { echo -e \"${RED}[ERROR]${NC} $@\" >&2; }\ninfo \"System check passed\"\nerror \"Connection failed\"" }, explanation: "Color-coded logging for scripts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"bash-59-q1","type":"mcq","question":"What command checks if a program is available?","options":["command -v","which","type","All of these"],"correctAnswer":"All of these","explanation":"command -v, which, and type all check command availability. command -v is most portable.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"DRY_RUN","value":"Dry run mode"},{"label":"command -v","value":"Check installed"},{"label":"source lib/","value":"Module import"}],
    },
    {
      id: "bash-60", number: 60, title: "Capstone: Complete Shell Mastery", subtitle: "Final project and review", difficulty: "Advanced", estimatedMinutes: 120, xpReward: 150, prerequisites: [], learningObjectives: ["Consolidate all concepts","Build a complex project","Write production-quality scripts"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "bash-60-1", title: "Final Project", whyItMatters: "The capstone demonstrates mastery of all Bash concepts.",
          content: "**Capstone Brief:** Build a server provisioning script that:\n\n1. **User Input:** Interactive prompts for server type (web/db/cache)\n2. **Validation:** Check prerequisites (OS, packages, network)\n3. **Installation:** Install and configure software based on type\n4. **Security:** Set up firewall, SSH hardening, fail2ban\n5. **Monitoring:** Install monitoring agent and configure alerts\n6. **Backup:** Schedule backup cron jobs\n7. **Reporting:** Generate provisioning report\n8. **Rollback:** Idempotent with safe rollback on failure\n\n**Project Structure:**\n\n```bash\nprovision/\n├── provision.sh       # Main entry point\n├── lib/\n│   ├── log.sh         # Logging\n│   ├── utils.sh       # Utilities\n│   ├── install.sh     # Package installation\n│   └── security.sh    # Hardening\n├── config/\n│   └── server.conf    # Configurable settings\n└── templates/\n    ├── nginx.conf.j2\n    └── motd.txt\n```\n\n**Skills Demonstrated:**\n- Script structure and organization\n- Error handling with trap\n- Input validation\n- Config file parsing\n- Package management\n- Service management\n- Text processing\n- Logging and reporting\n- Idempotent operations\n- Modular library design",
          codeExamples: [
            { id: "bash-60-ex1", title: "Capstone", description: "Provisioning script skeleton", code: { bash: "#!/bin/bash\nset -euo pipefail\n\nSERVER_TYPE=\"${1:-web}\"\n\necho \"Provisioning $SERVER_TYPE server...\"\necho \"1. Updating packages\"\necho \"2. Installing $SERVER_TYPE packages\"\necho \"3. Configuring services\"\necho \"4. Setting up firewall\"\necho \"5. Running health check\"\necho \"Provisioning complete!\"" }, explanation: "Capstone project skeleton showing the provisioning flow." },
          ],
        },
      ],
      quiz: { questions: undefined, passingScore: 70 },
      cheatSheet: [{"label":"Idempotent","value":"Safe to re-run"},{"label":"Modular design","value":"Reusable lib/"},{"label":"set -euo pipefail","value":"Strict mode"},{"label":"Provisioning","value":"Server setup"}],
    },
  ],
};
