import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

function PageTitle({pageTitle, image}) {
  return (
    <Container maxWidth='100%' 
        style={{
            backgroundImage:`url(${image})`,
            backgroundSize:'cover',
            backgroundPosition:'bottom right',
            backgroundRepeat:'no-repeat',
            padding:'150px 0',
            }}>
        <Container maxWidth='lg' style={{padding:'0'}}>
            <Stack>
                <Box component={'div'}>
                    <Typography variant='h2'>{pageTitle}</Typography>
                </Box>
            </Stack>
        </Container>
    </Container>
  )
}

export default PageTitle