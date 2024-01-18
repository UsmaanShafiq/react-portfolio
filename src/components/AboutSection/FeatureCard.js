import React from 'react'
import { Box } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import theme from '../../theme'

function FeatureCard({icon, title, caption, color, bg}) {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={
        {
            background:'#fff',
            padding:{md: '50px 40px', xs: '30px 20px'},
            borderRadius:'10px',
            boxShadow:'0px 26px 50px rgba(203, 206, 225, 0.24)',
            width:'100%',
            boxSizing:'border-box'
        }
    }>
        <Box sx={{
            background: bg,
            padding:'12px 14px',
            borderRadius:'50px',
            fontSize:'26px',
            color: color,
            marginBottom:'25px',
            width:'fit-content'
        }}>
            {icon}
        </Box>
        
        
        
        <Box component={'h2'} sx={{
            fontSize:'24px',
            color:theme.palette.custom.accent,
            lineHeight:'29px',
            fontWeight:'500',
            marginBottom:'20px'
        }}>{title}</Box>
        
        <Box component={'p'} sx={{
            fontSize:'18px',
            lineHeight:'30px',
            color:theme.palette.custom.text,
            fontWeight:'400'

        }}>{caption}</Box>
    </Box>
    </ThemeProvider>
  )
}

export default FeatureCard