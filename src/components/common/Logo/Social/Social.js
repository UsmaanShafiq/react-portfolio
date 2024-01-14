import React from 'react'
import { Stack } from '@mui/material'
import Button from '@mui/material/Button'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Social() {
    const linkedInURL = 'https://www.linkedin.com/';

return(
    <Stack flexDirection={'row'} columnGap={2} justifyContent={'center'}>
        <Button variant='contained' 
        component={Link} 
        to={linkedInURL} 
        size='large'
        target='_blank' 
        
        startIcon={<LinkedInIcon/>}>
            Linkedin
        </Button>
        <Button variant='contained' 
        component={Link} 
        to={linkedInURL} 
        size='large'
        target='_blank' 
        startIcon={<LinkedInIcon/>}>
            Linkedin
        </Button>
        <Button variant='contained' 
        component={Link} 
        to={linkedInURL} 
        size='large'
        target='_blank' 
        startIcon={<LinkedInIcon/>}>
            Linkedin
        </Button>
    </Stack>
)
}

export default Social;