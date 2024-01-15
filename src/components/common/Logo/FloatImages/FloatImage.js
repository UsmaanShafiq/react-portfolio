import React from 'react';
import { Box } from '@mui/material';

const FloatImage = ({ url, top, left }) => {
  return (
    <Box
      component="img"
      src = {url}
      sx={{
        position: 'absolute',
        top:top[0],
        left:left[0],
        animation: `${'moveUpDown'} 3s infinite linear`, // Reference the keyframes using interpolation
        maxWidth: '100%',
        '@keyframes moveUpDown': {  // Define the keyframes within the style
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      }}
    />
  );
};

export default FloatImage;
