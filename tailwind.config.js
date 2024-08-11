/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      colors: {
        "Brown": {
          100: '#ECE0D1',
          300: '#DBC1AC',
          600: '#967259',
          900: '#634832'
        },
        "gradiantShadow": {
          100: "#00000099",
          200: '#0000001a'
        },
        "club": {
          100: "#10B981",
          200: "#059669"
        },
        "prizeBtn": {
          100: '#FDBA74',
          200: '#FED7AA'
        },
        "desktopMenu": "#00000080"
      },
      boxShadow: {
        'shadow': '0px 1px 10px 0px rgba(0, 0, 0, 0.05)',
        'menuShadow': '0px 0px 0px 7000px #00000066'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      fontFamily: {
        'Dana': 'Dana',
        'DanaMedium': 'Dana medium',
        'DanaDemiBold': 'Dana demibold',
        'morabba': 'morabba light',
        'morabbaMedium': 'morabba medium',
        'morabbaBold': 'morabba bold',
      },
      backgroundImage: {
        "desktopBg": "url('../images/headerBgDesktop.webp')",
        "home": "url('../images/headerBgMobile.webp')",
        "productContent1": "url('../images/tu1 1.png')",
        "productContent2": "url('../images/ghch1 1.png')",
        "paint": "url('../images/paintt 1.svg')"
      },
      spacing: {
        50: '200px'
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'pulse-fast': 'pulse 2s infinite 1s',
        'pulse-delayed': 'pulse 2s infinite .5s',
        'pulse-more-delayed': 'pulse 2s infinite',
      },

    },
  },
  plugins: [],
}

