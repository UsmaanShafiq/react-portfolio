import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Logo from '../common/Logo/Logo'
import logo from '../../assets/images/logo-white.png'
import { Link } from 'react-router-dom'
import styles from './Footer.css'
function Footer() {
    console.log(styles.footer_link);
  return (
    <Container className='footer_wrapper' maxWidth='xl' sx={{backgroundColor:'#292930', padding:'100px 10px'}}>
        <Container className='top_footer'>
            <Grid container>
                <Grid item md={3} sm={1} xs={1}>
                    <Logo SiteLogo={logo}/>
                    <Typography variant='p' style={{fontSize:'14px', color:'#8a90a2', lineHeight:'26px'}}>
                        A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tationulla
                    </Typography>
                </Grid>
                <Grid item md={3} sm={1} xs={1}>
                    <Box>
                        <Typography variant='h3' color='#fff' 
                            style={{fontSize:'20px', fontFamily:'DM Sans', fontWeight:'600'}}>
                            Useful Links
                        </Typography>
                        <Box display='flex' flexDirection={'column'} className='footer_links' style={styles.footer_links}>
                            <Link className={styles.footer_link} to='/'>Home</Link>
                            <Link className={styles.footer_link} to='/about'>About</Link>
                            <Link className={styles.footer_link} to='/services'>Services</Link>
                            <Link className={styles.footer_link} to='/portfolio'>Portfolio</Link>
                            <Link className={styles.footer_link} to='/contact'>Contact</Link>
                        </Box>

                    </Box>
                </Grid>
                <Grid item md={3} sm={1} xs={1}>
                    <Box>Footer col 3</Box>
                </Grid>
                <Grid item md={3} sm={1} xs={1}>
                    <Box>Footer col 4</Box>
                </Grid>
            </Grid>
        </Container>
    </Container>
  )
}

export default Footer