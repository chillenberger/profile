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
        primary: '#e2725b',
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
        }
      },
    },
  },
  plugins: [],
}
