module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '14px': '0.875rem',
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
        '50px': '50px',
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
        rightSideButtonFollowText: 'rgba(0, 0, 0, 0.6)',
        mainTextColor: '#958b7b',
      },
      minHeight: {
        3.25: '3.25rem',
      },
    },
  },
  plugins: [],
};
