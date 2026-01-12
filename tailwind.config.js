/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e2725b', // Keeping original primary for now, will replace usage with neons later
        'cyber-black': '#050505',
        'cyber-gray': '#1a1a1a',
        'neon-blue': '#00f3ff',
        'neon-purple': '#bc13fe',
        'neon-green': '#0aff0a',
        'acid-yellow': '#f0ff00',
      },
      boxShadow: {
        'neon-blue': '0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 40px #00f3ff',
        'neon-purple': '0 0 10px #bc13fe, 0 0 20px #bc13fe, 0 0 40px #bc13fe',
        'neon-green': '0 0 10px #0aff0a, 0 0 20px #0aff0a, 0 0 40px #0aff0a',
        'screen-glow': '0 0 20px rgba(0, 243, 255, 0.1), inset 0 0 20px rgba(0, 243, 255, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'blob': "blob 15s infinite alternate ease-in-out",
        'float-slow': "float 25s ease-in-out infinite",
        'pulse-glow': "pulse-glow 10s ease-in-out infinite",
        'tilt': "tilt 10s infinite linear",
        'wander': "wander 20s infinite alternate ease-in-out",
        'wander-delayed': "wander 25s infinite alternate-reverse ease-in-out",
        'wander-slow': "wander 30s infinite alternate ease-in-out",
        'flicker': "flicker 4s infinite",
        'neon-pulse': "neon-pulse 2s infinite ease-in-out",
      },
      keyframes: {
        wander: {
          "0%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(50px, -50px)" },
          "40%": { transform: "translate(-30px, 80px)" },
          "60%": { transform: "translate(80px, 20px)" },
          "80%": { transform: "translate(-50px, -60px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(150px, -200px) scale(1.4)",
          },
          "66%": {
            transform: "translate(-100px, 150px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "25%": {
            transform: "translate(100px, 200px)",
          },
          "50%": {
            transform: "translate(-150px, 400px)",
          },
          "75%": {
            transform: "translate(200px, -100px)",
          },
        },
        'pulse-glow': {
          "0%, 100%": {
            opacity: 0.2,
          },
          "50%": {
            opacity: 0.6,
          },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.4,
          },
        },
        "traffic-move": {
          "0%": {
            transform: "translateX(-100%) translateY(0)",
            opacity: 0,
          },
          "10%, 90%": {
            opacity: 1,
          },
          "100%": {
            transform: "translateX(200vw) translateY(50px)",
            opacity: 0,
          },
        },
        "traffic-move-reverse": {
          "0%": {
            transform: "translateX(100%) translateY(0)",
            opacity: 0,
          },
          "10%, 90%": {
            opacity: 1,
          },
          "100%": {
            transform: "translateX(-200vw) translateY(-50px)",
            opacity: 0,
          },
        },
        "neon-pulse": {
          "0%, 100%": {
            opacity: 0.6,
            filter: "brightness(1)",
          },
          "50%": {
            opacity: 1,
            filter: "brightness(1.2)",
          },
        },
      },
    },
  },
  plugins: [],
}
