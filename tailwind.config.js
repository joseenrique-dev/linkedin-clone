module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        normalTextHeader: 'rgba(0,0,0,0.6)',
        focusTextHeader: 'rgba(0,0,0,0.9)',
        inputSearchBackground: '#EEF3F8',
        placeholderSearchColor: '#606264',
      },
      minHeight: {
        3.25: '3.25rem',
      },
    },
  },
  plugins: [],
};
