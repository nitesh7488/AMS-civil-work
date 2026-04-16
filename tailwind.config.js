/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Primary palette ─────────────────────────────────── */
        orange:  { DEFAULT: '#F97316', dark: '#EA580C', light: '#FB923C', glow: '#FED7AA' },
        navy:    { DEFAULT: '#0B1120', mid: '#101827',  card: '#161F2E', border: '#1E2D45' },
        slate:   { DEFAULT: '#94A3B8', light: '#CBD5E1', muted: '#475569' },
        /* ── Status colours ──────────────────────────────────── */
        emerald: { DEFAULT: '#10B981', bg: 'rgba(16,185,129,0.12)', text: '#34D399' },
        sky:     { DEFAULT: '#3B82F6', bg: 'rgba(59,130,246,0.12)', text: '#60A5FA' },
        /* ── Legacy tokens (kept so old Tailwind classes don't break) */
        'brand-amber':    '#F97316',
        'brand-amber2':   '#EA580C',
        'brand-charcoal': '#0B1120',
        'brand-steel':    '#101827',
        'brand-iron':     '#1E2D45',
        'brand-smoke':    '#475569',
        'brand-ash':      '#CBD5E1',
        'brand-chalk':    '#F8FAFC',
      },

      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },

      spacing: {
        '18': '4.5rem', '22': '5.5rem', '88': '22rem',
        '100': '25rem', '112': '28rem', '128': '32rem',
      },

      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ticker:  { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        pulse2:  { '0%,100%': { opacity: '0.4' }, '50%': { opacity: '1' } },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        spin1: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeUp:  'fadeUp 0.65s ease-out forwards',
        fadeIn:  'fadeIn 0.5s ease-out forwards',
        scaleIn: 'scaleIn 0.45s ease-out forwards',
        slideUp: 'slideUp 0.7s ease-out forwards',
        ticker:  'ticker 36s linear infinite',
        pulse2:  'pulse2 2.4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        floatY:  'floatY 4s ease-in-out infinite',
        spin1:   'spin1 1s linear infinite',
      },

      boxShadow: {
        card:    '0 2px 24px 0 rgba(0,0,0,0.35)',
        orange:  '0 4px 30px 0 rgba(249,115,22,0.35)',
        glow:    '0 0 60px 0 rgba(249,115,22,0.18)',
        'inner-t': 'inset 0 8px 20px -8px rgba(0,0,0,0.6)',
      },

      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
        'gradient-hero':   'linear-gradient(135deg, #0B1120 0%, #101827 60%, #0B1120 100%)',
        'gradient-card':   'linear-gradient(160deg, #161F2E 0%, #101827 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
