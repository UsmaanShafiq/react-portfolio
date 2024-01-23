import React from 'react'
import { Box, Container, ThemeProvider, Typography, Button } from '@mui/material'
import Logo from '../common/Logo/Logo'
import logo from '../../assets/images/logo.png'
import theme from '../../theme'
import handImage from '../../assets/images/creative-hand.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

function Footer() {
   
  return (
    <ThemeProvider theme={theme}>
    <Container className='footer_wrapper' maxWidth='100%' sx={{backgroundColor:'#fff', padding:'100px 10px', position:'relative'}}>
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

              <Typography variant='subtitle1' sx={{textAlign:'center', color:theme.palette.custom.accent, marginTop:'40px'}}>
                Copyright &copy; 2024 | All Right Reserved.
            </Typography>
            <Box component={'img'} src={handImage} position='absolute' left='0' bottom='0'/>
        </Box>
    </Container>

    <Container>
      <Box className='footer_bottom' display='flex' justifyContent='space-between' alignItems='center' padding='20px 0'>
          <Box className="footer_logo">
            <Logo SiteLogo={logo}/>
          </Box>
        
          <Box className="footer_social" display='flex' alignItems='center'>
            <GitHubIcon style={{padding:'10px', border:'1px solid #8a90a2', borderRadius:'50px', marginRight:'10px'}}/>
            <LinkedInIcon style={{padding:'10px', border:'1px solid #8a90a2', borderRadius:'50px', marginRight:'10px'}}/>
            <GoogleIcon style={{padding:'10px', border:'1px solid #8a90a2', borderRadius:'50px'}}/>
          </Box>
      </Box>
    </Container>
    </ThemeProvider>
  )
}

export default Footer