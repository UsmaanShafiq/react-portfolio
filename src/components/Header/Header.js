import React from 'react'
import Logo from '../common/Logo/Logo';
import Navbar from './Navbar/Navbar'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Button, useMediaQuery } from '@mui/material';
// import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function Header() {
  const isDesktop = useMediaQuery('(min-width:900px)');
  
  return (
      <AppBar position='static' sx={{backgroundColor:'#fff', boxShadow:'none', 
      padding: {lg: '30px', sm: '20px', xs: '10px'}} }>
        <Toolbar>

          <Grid container alignItems={'center'} width={'100%'}>
            <Grid md={3} xs={8}>
              <Logo/>
            </Grid>

            <Grid md={6}  xs={4}><Navbar/></Grid>

            {
              isDesktop ? (
                <Grid md={3} sm={0} display={'flex'} justifyContent={'flex-end'}>
              <Box>
              <Button
                variant='contained'
                sx={{
                  p:'15px 30px',
                  backgroundColor: '#5956E9',
                  '&:hover': {
                    backgroundColor: '#FFDC60', color:'#000'
                  },
                  fontWeight:'600', fontFamily:'DM Sans', 
                  textTransform:'capitalize',
                  fontSize:'16px',
                  borderRadius:'10px'
                }}
              >
                Let's Talk
              </Button>

              </Box>
            </Grid>) : ''
              
            }
            
          </Grid>  
          
        </Toolbar>  
      </AppBar>
)
}

export default Header;