import React from 'react';
import { Box, Typography } from '@mui/material';
import {ThemeProvider} from '@mui/material';
import theme from '../../theme';

function HeroTitle() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography
          variant='h1'
          fontFamily={'DM Sans'}
          textAlign={'center'}
          color={theme.palette.custom.accent}
          zIndex={10}
        >
          Hi 👋 I am Usman, website and user interface{' '}
          <span style={{ color: theme.palette.primary.main }}>Designer</span>.
        </Typography>
      </Box>
    </ThemeProvider>
      
  
  );
}

export default HeroTitle;
