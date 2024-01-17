import React from 'react'
import { Typography } from '@mui/material'

function Subheading({circle, text}) {
  return (
    <>
    <Typography sx={{
        fontSize:'18px',
        color:'#8a90a2',
        fontWeight:'500',
        textTransform:'capitalize',
        fontFamily:'DM Sans',
        marginBottom:'20px',
    '&:before': { 
    height: '12px',
    width: '12px',
    backgroundColor: circle,
    content: '""',
    display: 'inline-block',
    borderRadius: '50%',
    marginRight: '10px'
    }}} variant='h5'>{text}</Typography>
    </>
  )
}

export default Subheading