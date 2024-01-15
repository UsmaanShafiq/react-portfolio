import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';


function Social({iconSize, text, url, icon, color, bg}) {

return(
    
    <Button
    variant='contained'
    component={Link}
    to={url}
    size='large'
    target='_blank'
    sx={
        {
            padding: '12px 50px',
            borderRadius: '8px',
            backgroundColor: bg,
            color: color,
            boxShadow: '0px 11px 12px #EBE9F3',
            fontFamily: 'DM Sans',
            fontWeight: '700',
            fontSize: '16px',
            textTransform: 'capitalize',
            transition: 'transform 0.5s ease', // Add a smooth transition effect
            '&:hover': {
            transform:' translateY(-5px)',
            transition: 'transform 0.5s ease',
            backgroundColor: bg
            }
        }
    }
    
    startIcon={<img src={icon} alt="social_icon" style={{width:iconSize, height:iconSize}} />}
    endIcon={<EastIcon style={{fontSize:'16px', marginLeft:'8px'}}/>}
    >
    {text}
  </Button>
)
}

export default Social;