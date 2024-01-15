import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

function Social({text, url, icon, color, bg}) {

return(
    
    <Button variant='contained' 
    component={Link} 
    to={url} 
    size='large'
    target='_blank' 
    style={{
        color:color,
        background:bg,
        padding:'12px 50px',
        borderRadius:'8px'
    }}
    
    startIcon={icon}>
        {text}
    </Button>
)
}

export default Social;