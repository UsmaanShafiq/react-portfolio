import React from 'react';
import { Box, Typography } from '@mui/material';
import {ThemeProvider} from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
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
          Hi, 👋 I'm Usman, a Versatile Professional experienced in {' '}
        
          <TypeAnimation
            sequence={[
            // Same substring at the start will only be typed out once, initially
            'ReactJS.',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Javascript.',
            1000,
            'JQuery.',
            1000,
            'HTML.',
            1000,
            'WordPress.',
            1000,
          ]}
          wrapper="span"
          speed={20}
          style={{color: theme.palette.primary.main, display: 'block' }}
          repeat={Infinity}
          />
        </Typography>
      </Box>
    </ThemeProvider>
      
  
  );
}

export default HeroTitle;
