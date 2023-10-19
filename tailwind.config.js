/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'sans']
      }
    },

/*     colors: {
      'neocyan': '#7DF9FF',
      'neogreen': '#2FFF2F',
      'neopurple': '#FF00F5',
      'neoblue' : '#3300FF',
      'neoyellow': '#FFF00f',
      'neoorange': '#FF4911',
    } */
  },
  plugins: [],
}
