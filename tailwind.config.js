module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // width: {
    //   1.5: '1.5rem',
    // },
    // height: {
    //   1.5: '1.5rem',
    // },
    minWidth: {
      '1/2': '50%',
    },
    extend: {
      colors: {
        normalTextHeader: 'rgba(0,0,0,0.6)',
        focusTextHeader: 'rgba(0,0,0,0.9)',
        inputSearchBackground: '#EEF3F8',
        placeholderSearchColor: '#606264',
        navBorderLeftColor: '#EBEBEB',
      },
      minHeight: {
        3.25: '3.25rem',
      },
    },
  },
  plugins: [],
};
