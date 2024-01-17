import React from 'react'
import { Typography } from '@mui/material';

function HeadingTwo({text}) {
  return (
    <Typography variant={'h2'} sx={{
        fontSize:'45px', 
        lineHeight:'54px', 
        fontWeight:'700', 
        fontFamily:'DM Sans',
        color:'#292930',
        marginBottom:'30px',
        }}>
        {text}
        </Typography>
  )
}

export default HeadingTwo