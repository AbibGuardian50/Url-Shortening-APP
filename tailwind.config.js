/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'boostdesktop' : "url('/src/assets/bg-boost-desktop.svg')",
        'boostmobile' : "url('/src/assets/bg-boost-mobile.svg')",
        'shortendesktop' : "url('/src/assets/bg-shorten-desktop.svg')",
        'shortenmobile' : "url('/src/assets/bg-shorten-mobile.svg')",
      },
      colors: {
        'Cyan':  'hsl(180, 66%, 49%)',
        'Dark-Violet': 'hsl(257, 27%, 26%)',
        'Red': 'hsl(0, 87%, 67%)',
        'Gray': 'hsl(0, 0%, 75%)',
        'Grayish-Violet': 'hsl(257, 7%, 63%)',
        'Very-Dark-Blue': 'hsl(255, 11%, 22%)',
        'Very-Dark-Violet': 'hsl(260, 8%, 14%)',
      },
      fontFamily: {
        'inter' : ['inter', 'sans-serif'],
        'poppins': ["Poppins", 'sans-serif']
      },
    },
  },
  plugins: [],
}

