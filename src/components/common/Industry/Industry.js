import React from 'react'
import { Typography } from '@mui/material'
function Industry({align, color, circleSize, circleColor, pillBg, textSize, text}) {
  return (
   
        <>
        <Typography sx={{
            display:'flex',
            alignItems:'center',            fontSize:textSize,
            color:color,
            fontWeight:'500',
            textTransform:'capitalize',
            textAlign: align,
            background:pillBg,
            borderRadius:'10px',
            padding:'12px 16px',
            fontFamily:'DM Sans',
        '&:before': { 
        height: circleSize,
        width: circleSize,
        backgroundColor: circleColor,
        content: '""',
        display: 'inline-block',
        borderRadius: '50%',
        marginRight: '10px'
        }}} >{text}</Typography>
        </>
   
  )
}

export default Industry