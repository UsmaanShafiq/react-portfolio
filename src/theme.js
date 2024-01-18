// theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#2E2AEB',
    },
    secondary: {
      main: '#FFDC60',
    },
    custom: {
      accent: '#292930',
      text: '#8a90a2'
    },
    background: {
      default: '#292930',
    },
  },


  typography: {
    body:{
      fontSize:'1.125rem', // 18px
    },
    h1: {
      fontSize: '4rem', // 64px / 16px = 4rem
      fontWeight: 700,
      fontFamily: 'DM Sans'
    },
    h2: {
      fontSize: '2.8125rem', // 45px / 16px = 2.8125rem
      fontWeight: 700,
      fontFamily: 'DM Sans'
    },
    subtitle1: {
      fontSize: '1.125rem', // 18px / 16px = 1.125rem
      fontWeight: 400,
      fontFamily: 'DM Sans'
    },
  }
});

export default responsiveFontSizes(theme);
