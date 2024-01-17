import React from 'react'
import { Box } from '@mui/material'

function FeatureCard({icon, title, caption, color, bg}) {
  return (
    <>
    <Box sx={
        {
            background:'#fff',
            padding:'50px 40px',
            borderRadius:'10px',
            boxShadow:'0px 26px 50px rgba(203, 206, 225, 0.24)',
            width:'fit-content'
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
            color:'rgb(41,41,41)',
            lineHeight:'29px',
            fontWeight:'500',
            marginBottom:'20px'
        }}>{title}</Box>
        
        <Box component={'p'} sx={{
            fontSize:'18px',
            lineHeight:'30px',
            color:'#8a90a2',
            fontWeight:'400'

        }}>{caption}</Box>
    </Box>
    </>
  )
}

export default FeatureCard