import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        brutalist: ['"Rock Salt"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        terminal: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Cyberpunk Color System
        'obsidian': '#0A0A0A',
        'carbon': '#121212',
        'neon-blue': '#00D4FF',
        'terminal-green': '#00FF41',
        'warning-amber': '#FFB700',
        'glass': 'rgba(18, 18, 18, 0.8)',
        surface: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          80: "hsl(var(--surface-80))",
        },

        // System Colors (mapped to CSS variables)
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: {
          DEFAULT: "hsl(var(--foreground) / <alpha-value>)",
          20: "hsl(var(--foreground-20) / <alpha-value>)",
          40: "hsl(var(--foreground-40) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        crimson: {
          DEFAULT: "hsl(var(--crimson))",
          foreground: "hsl(var(--crimson-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        html: "hsl(var(--html-color))",
        css: "hsl(var(--css-color))",
        js: "hsl(var(--js-color))",
        python: "hsl(var(--python-color))",
        typescript: "hsl(var(--typescript-color))",
        c: "hsl(var(--c-color))",
        cpp: "hsl(var(--cpp-color))",
        java: "hsl(var(--java-color))",
        csharp: "hsl(var(--csharp-color))",
        w3css: "hsl(var(--w3css-color))",
        colors: "hsl(var(--colors-color))",
        php: "hsl(var(--php-color))",
        htmldom: "hsl(var(--htmldom-color))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-violet': 'var(--gradient-violet)',
        'gradient-card': 'var(--gradient-card)',
        'cyberpunk-grid': 'linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
        'radial-leak': 'radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)',
      },
      boxShadow: {
        glow: 'var(--glow-primary)',
        'glow-violet': 'var(--glow-violet)',
        'glow-neon': '0 0 20px rgba(0, 212, 255, 0.5)',
        'glow-crimson': '0 0 20px rgba(255, 0, 110, 0.5)',
        'glass-border': 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        elegant: 'var(--shadow-elegant)',
        card: 'var(--shadow-card)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { "0%": { opacity: "0", transform: "translateY(10px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.95)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        "slide-in-right": { "0%": { transform: "translateX(20px)", opacity: "0" }, "100%": { transform: "translateX(0)", opacity: "1" } },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.4)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.7)" },
        },
        "float": { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        "shimmer": { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "cyberpunk-pulse": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 5px rgba(0, 212, 255, 0.5)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 20px rgba(0, 212, 255, 0.8)" },
        },
        "terminal-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "glitch": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "cyberpunk-pulse": "cyberpunk-pulse 2s ease-in-out infinite",
        "terminal-blink": "terminal-blink 1s ease-in-out infinite",
        "glitch": "glitch 0.3s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
