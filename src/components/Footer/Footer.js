import React from 'react'
import { Box, Container, ThemeProvider, Typography, Button } from '@mui/material'
import Logo from '../common/Logo/Logo'
import logo from '../../assets/images/logo-white.png'
import { Link } from 'react-router-dom'
import theme from '../../theme'

function Footer() {
   
  return (
    <ThemeProvider theme={theme}>
    <Container className='footer_wrapper' maxWidth='xl' sx={{backgroundColor:'#fff', padding:'100px 10px'}}>
        <Box className="footer_top" display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
            <Typography variant='h2' sx={{textAlign:'center', marginBottom:'20px'}}>Let’s build something together</Typography>
            <Typography variant='subtitle1' sx={{textAlign:'center', color:theme.palette.custom.text}}>
                At Collax we specialize in designing, building, shipping and scaling<br/> beautiful, 
                usable products with blazing-fast efficiency
            </Typography>
            <Button
                variant='contained'
                sx={{
                  p:'15px 30px',
                  marginTop: '30px',
                  backgroundColor: '#5956E9',
                  '&:hover': {
                    backgroundColor: '#FFDC60', color:'#000'
                  },
                  fontWeight:'600', fontFamily:'DM Sans', 
                  textTransform:'capitalize',
                  fontSize:'16px',
                  borderRadius:'10px',
                }}
              >
                Let's Connect
              </Button>
        </Box>
    </Container>
    </ThemeProvider>
  )
}

export default Footer