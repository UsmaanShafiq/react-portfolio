import React from 'react'
import { Box, ThemeProvider } from '@mui/material'
import theme from '../../theme'

function ServiceCard({icon, title, color, bg}) {
    
  return (
    <ThemeProvider theme={theme}>
    <Box sx={
        {
            background:'#fff',
            padding:'65px 55px 55px 55px',
            borderRadius:'10px',
            boxShadow:'0px 26px 50px rgba(203, 206, 225, 0.24)',
            borderBottom:'5px solid transparent',
            transition:'0.3s',
            '&:hover':{
                transition:'0.3s',
                borderBottom:`5px solid ${color}`,
            }
        }
    }>
        <Box sx={{
            background: bg,
            padding:'12px 14px',
            borderRadius:'10px',
            color: color,
            marginBottom:'40px',
            width:'fit-content',
            
        }}>
            {icon}
        </Box>

        <Box component={'h2'} sx={{
            fontSize:'20px',
            color: theme.palette.custom.accent,
            lineHeight:'29px',
            fontWeight:'500',
        }}>{title}</Box>
        
    </Box>
    </ThemeProvider>
    
  )
}

export default ServiceCard