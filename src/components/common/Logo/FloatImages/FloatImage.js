import React from 'react';
import { Box } from '@mui/material';

const FloatImage = ({ url, top, left }) => {
  return (
    <Box
      component="img"
      src = {url}
      style={{
        position: 'absolute',
        top,
        left,
      }}
    />
  );
};

export default FloatImage;
