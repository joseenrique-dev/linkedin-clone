module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      '12px': '13px',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '60%': '60%',
    },
    minWidth: {
      '1/2': '50%',
    },
    extend: {
      height: {
        '72px': '4.5rem',
      },
      width: {
        '72px': '4.5rem',
      },
      margin: {
        'user-info': '-12px -12px 0',
        'user-info-photo': '-38px auto 12px',
      },
      colors: {
        normalTextHeader: 'rgba(0,0,0,0.6)',
        focusTextHeader: 'rgba(0,0,0,0.9)',
        inputSearchBackground: '#EEF3F8',
        placeholderSearchColor: '#606264',
        navBorderLeftColor: '#EBEBEB',
        bgLeftSide: '#fff',
        photoUserImageLink: '#0a66c2',
        userConnTextFirstChild: 'rgba(0,0,0,0.6)',
        userConnTextNthChild: 'rgba(0,0,0,0.1)',
      },
      minHeight: {
        3.25: '3.25rem',
      },
    },
  },
  plugins: [],
};
