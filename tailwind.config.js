module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'wrapper': '1000px'
      },
      gridTemplateRows: {
        'layout-row': '100px 200px 400px 100px'
      },
      gridTemplateColumns: {
        'layout-col': 'repeat(3, 1fr) 120px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
