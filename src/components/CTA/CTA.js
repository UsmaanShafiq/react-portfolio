import React from 'react'
import {Box, Grid, Container, Typography, Button } from '@mui/material'
import Subheading from '../../components/common/Typos/Subheading/Subheading'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'

function CTA({text, img, imgSize, btnIcon, btnText}) {
  return (
    <ThemeProvider theme={theme}>
    <Container sx={{background:'#292930', padding:'60px 10px'}} maxWidth={'xl'}>
    <Container>
      <Grid container alignItems='center'>  
          <Grid item md={6}>
              <Subheading 
                circle={theme.palette.secondary.main}
                color={theme.palette.custom.text}
                align={'left'}
                text='Hire Me'/>
                <Typography variant='h2' color='#fff' marginTop='20px' marginBottom='30px'>{text}</Typography>
                <Button 
                    variant="outlined" size='large'
                    sx={{
                        borderColor:'#3f3f47', 
                        padding:'15px 30px', 
                        fontFamily:'DM Sans',
                        fontWeight:'600',
                        color:theme.palette.custom.text,
                        '&:hover':{
                                    backgroundColor: theme.palette.primary.main,
                                    color: '#fff',
                                } }} 
                    endIcon={btnIcon}>
                    {btnText}
                </Button>
          </Grid>
          <Grid item md={6} display='flex' justifyContent='center'>
            <Box component='img' src={img} sx={{width: {md: imgSize, xs:'100%'}}} alt="cta_image" />
          </Grid>
      </Grid>
    </Container>
  </Container>
  </ThemeProvider>
  )
}

export default CTA