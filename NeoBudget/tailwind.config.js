module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#00FFFF", // electric-cyan
          50: "#E6FFFF", // electric-cyan-50
          100: "#CCFFFF", // electric-cyan-100
          200: "#99FFFF", // electric-cyan-200
          300: "#66FFFF", // electric-cyan-300
          400: "#33FFFF", // electric-cyan-400
          500: "#00FFFF", // electric-cyan-500
          600: "#00CCCC", // electric-cyan-600
          700: "#009999", // electric-cyan-700
          800: "#006666", // electric-cyan-800
          900: "#003333", // electric-cyan-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#FF0080", // neon-pink
          50: "#FFE6F2", // neon-pink-50
          100: "#FFCCE6", // neon-pink-100
          200: "#FF99CC", // neon-pink-200
          300: "#FF66B3", // neon-pink-300
          400: "#FF3399", // neon-pink-400
          500: "#FF0080", // neon-pink-500
          600: "#CC0066", // neon-pink-600
          700: "#99004D", // neon-pink-700
          800: "#660033", // neon-pink-800
          900: "#33001A", // neon-pink-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#39FF14", // electric-lime
          50: "#EAFFE6", // electric-lime-50
          100: "#D5FFCC", // electric-lime-100
          200: "#ABFF99", // electric-lime-200
          300: "#80FF66", // electric-lime-300
          400: "#56FF33", // electric-lime-400
          500: "#39FF14", // electric-lime-500
          600: "#2DCC10", // electric-lime-600
          700: "#21990C", // electric-lime-700
          800: "#166608", // electric-lime-800
          900: "#0A3304", // electric-lime-900
        },
        // Background Colors
        background: "#0A0A0A", // near-black
        surface: {
          DEFAULT: "#1A1A1A", // elevated-dark
          light: "#2A2A2A", // surface-light
          lighter: "#3A3A3A", // surface-lighter
        },
        // Text Colors
        text: {
          primary: "#FFFFFF", // white
          secondary: "#B3B3B3", // medium-gray
          muted: "#808080", // muted-gray
          disabled: "#4D4D4D", // disabled-gray
        },
        // Status Colors
        success: "#39FF14", // electric-lime
        warning: "#FFD700", // bright-gold
        error: "#FF073A", // neon-red
        info: "#00FFFF", // electric-cyan
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
        black: '900',
      },
      boxShadow: {
        'glow-primary': '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 40px #00FFFF',
        'glow-secondary': '0 0 10px #FF0080, 0 0 20px #FF0080, 0 0 40px #FF0080',
        'glow-accent': '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 40px #39FF14',
        'glow-success': '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 40px #39FF14',
        'glow-warning': '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 40px #FFD700',
        'glow-error': '0 0 10px #FF073A, 0 0 20px #FF073A, 0 0 40px #FF073A',
        'glow-sm': '0 0 5px currentColor, 0 0 10px currentColor',
        'glow-md': '0 0 10px currentColor, 0 0 20px currentColor',
        'glow-lg': '0 0 15px currentColor, 0 0 30px currentColor',
        'glow-xl': '0 0 20px currentColor, 0 0 40px currentColor',
      },
      textShadow: {
        'glow-primary': '0 0 10px #00FFFF, 0 0 20px #00FFFF',
        'glow-secondary': '0 0 10px #FF0080, 0 0 20px #FF0080',
        'glow-accent': '0 0 10px #39FF14, 0 0 20px #39FF14',
        'glow-sm': '0 0 5px currentColor',
        'glow-md': '0 0 10px currentColor',
        'glow-lg': '0 0 15px currentColor',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-glow': {
          'from': {
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor',
          },
          'to': {
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.7',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(180deg)',
            opacity: '1',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            opacity: '0.8',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'neon': '8px',
      },
      borderWidth: {
        '1': '1px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow-primary': {
          textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF',
        },
        '.text-shadow-glow-secondary': {
          textShadow: '0 0 10px #FF0080, 0 0 20px #FF0080',
        },
        '.text-shadow-glow-accent': {
          textShadow: '0 0 10px #39FF14, 0 0 20px #39FF14',
        },
        '.text-shadow-glow-sm': {
          textShadow: '0 0 5px currentColor',
        },
        '.text-shadow-glow-md': {
          textShadow: '0 0 10px currentColor',
        },
        '.text-shadow-glow-lg': {
          textShadow: '0 0 15px currentColor',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}