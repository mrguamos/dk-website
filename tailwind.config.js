// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'cafe-matcha': ['CafeMatcha'],
      },
      screens: {
        short: { raw: '(min-height: 300px)' },
        tall: { raw: '(min-height: 700px)' },
      },
    },
  },
  plugins: [],
}
