/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '1/2': '50%',
        '1/3':'33.333333%',
        '2/3':'66.666667%',
        '1/5':'20%',
      },
      colors: {
        'almost-white':'#fffbf7',
        'peach':'#f7ded7',
        'dark-peach':'#b07560'
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
