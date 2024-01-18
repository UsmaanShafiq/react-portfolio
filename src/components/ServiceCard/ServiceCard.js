import React from 'react'
import { Box } from '@mui/material'
function ServiceCard({icon, title, color, bg}) {
  return (
    <>
    <Box sx={
        {
            background:'#fff',
            padding:'65px 55px 55px 55px',
            borderRadius:'10px',
            boxShadow:'0px 26px 50px rgba(203, 206, 225, 0.24)',
        }
    }>
        <Box sx={{
            background: bg,
            padding:'12px 14px',
            borderRadius:'10px',
            fontSize:'20px',
            color: color,
            marginBottom:'40px',
            width:'fit-content'
        }}>
            {icon}
        </Box>
        
        
        
        <Box component={'h2'} sx={{
            fontSize:'24px',
            color:'rgb(41,41,41)',
            lineHeight:'29px',
            fontWeight:'500',
        }}>{title}</Box>
        
    </Box>
    </>
    
  )
}

export default ServiceCard