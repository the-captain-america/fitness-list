import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const theme = {
  font: {
    primary: `'IBM Plex Sans', sans-serif`,
  },
  weight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
  border: {
    defaultRadius: '7px',
    basic: '1px solid #dbdbdb',
  },
  button: {
    weight: 600,
    defaultSize: 'xlarge',
  },
  mq: {
    sm: 376,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  shadow: {
    primary: '0px 2px 2px 0px rgba(28, 17, 44, .15)',
    secondary: '0px 4px 14px 0px rgba(28, 17, 44, .10)',
  },
  colors: {
    orange: '#EF6C4D',
    grapefruit: '#EB3D2B',
    blueberry: '#5186EC',
    passionfruit: '#6C20CC',
    grape: '#BE8BFF',
    charcoal: '#1B1A29',
    ocean: '#1D2A43',
    greyXXXDark: '#5d646f',
    greyXXDark: '#8B8E94',
    greyXDark: '#B3B6BC',
    grey: '#BEC2CF',
    greyLight: '#D7DAE4',
    greyXLight: '#EDEEEF',
    greyXXLight: '#F6F5FC',
  },
  zIndex: {
    xs: 100,
    sm: 200,
    md: 300,
    lg: 400,
    xl: 500,
    xxl: 999,
  },
};

const layout = {
  grid: {
    gutterWidth: 32,
    gridColumns: 12,
    breakpoints: [375, 768, 1024, 1440],
    containerWidths: ['100%', 1224],
  },
  text: {
    align: {
      left: 'left',
      right: 'right',
      center: 'center',
    },
  },
  zIndex: {
    lg: 9999,
    med: 999,
    sm: 1050,
    xs: 100,
    header: 999,
    side: 9999,
    overlay: 9999,
  },
  align: {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  },
  custom: {
    wrapperTopMargin: 72,
    wrapperHeight: 40,
  },
  transition: {
    default: 'all 0.3s ease-in-out',
  },
  overlay: {
    relative: 'relative',
    absolute: 'absolute',
    fixed: 'fixed',
  },
  shadow: {
    default: '5px 15px 10px #00000024',
    xs: '0px 0px 16px -1px rgba(0, 0, 0, 0.14)',
    sm: '-3px -1px 13px 3px rgba(0,0,0, .1)',
    md: '3px 0px 15px 3px rgba(0, 0, 0, 0.14)',
    lg: '1px 2px 10px 2px rgba(0, 0, 0, 0.2)',
    xl: '-4px -1px 18px 4px rgba(0,0,0, .3)',
  },
};

const GlobalTheme = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  iframe { 
    display: none;
  }
  * {
    box-sizing: inherit;
    &:before {
      box-sizing: inherit;
    }
    &:after {
      box-sizing: inherit;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    padding: 0;
    margin: 0;
    background: #1F2429;
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #0d1116;
    border: none;
    box-shadow: none;
    }
  &::-webkit-scrollbar-thumb {
    background: #424244;
    border: none;
    border-radius: 8px;
    box-shadow: none;
  }
  
  * {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  h1 {
    font-weight: 500;
    font-size: 28px;
    line-height: 22px;
    margin-bottom: 24px;
  }
  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 16px;
  }
  h3 {
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    margin-bottom: 16px;
  }
  span {
    font-weight: 400;
    font-size: 16px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 16px;
  }
 

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #424244;
    -webkit-text-size: 16px;
    color: white;
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    background: #313133 !important;
    border-top: 0px solid transparent;
    border-right: 0px solid transparent;
    border-left: 0px solid transparent;
    border-bottom: 2px solid #424244;
    background-color: #313133 !important;
  }
`;

const ThemeProvider = ({ children }) => {
  return (
    <>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      <GlobalTheme />
    </>
  );
};

export { ThemeProvider };
