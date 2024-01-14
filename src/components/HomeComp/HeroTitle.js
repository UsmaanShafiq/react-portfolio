import React from 'react'
import { Box } from '@mui/material'
import {Typography} from '@mui/material'

function HeroTitle() {
  return (
    <Box>
        <Typography 
        variant='h1' 
        fontSize={'62px'} 
        fontWeight={'700'} 
        fontFamily={'DM Sans'}
        textAlign={'center'}
        color={'#292930'}
        >
            Hi 👋 I am Usman, website and user interface <span style={{color:'#5956E9'}}>Designer</span>.
        </Typography>
    </Box>
  )
}

export default HeroTitle