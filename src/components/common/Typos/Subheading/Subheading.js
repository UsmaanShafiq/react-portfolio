import React from 'react'
import { Typography } from '@mui/material'

function Subheading({align, color, circle, text}) {
  return (
    <>
    <Typography variant='subtitle1' sx={{
        color:color,
        fontWeight:'500',
        textTransform:'capitalize',
        textAlign: align,
    '&:before': { 
    height: '12px',
    width: '12px',
    backgroundColor: circle,
    content: '""',
    display: 'inline-block',
    borderRadius: '50%',
    marginRight: '10px'
    }}} >{text}</Typography>
    </>
  )
}

export default Subheading