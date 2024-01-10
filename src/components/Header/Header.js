import React from 'react'
import Logo from '../common/Logo/Logo';
import Navbar from './Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import styles from './Header.module.css'

function Header() {
  return (

    <Box component="header" 
      sx={{
        p: 5, 
        display:'flex', 
        justifyContent:'space-between', 
        alignItems:'center'
      }} 
      className='header_wrapper'>
      
      <Box component="div" className="row"
      sx={{
        display:'flex', 
        justifyContent:'space-between', 
        alignItems:'center',
        width:'100%'
      }} 
      >
        <div className={styles.logo_col}>
          <NavLink to="/">
            <Logo/>
          </NavLink>
        </div>
        
        <div className={styles.nav_col}>
          <Navbar/>
        </div>
            

        <div className={styles.btn_col}>
            <Button variant="contained" 
                sx={{
                  p:'20px 40px', 
                  fontFamily:'DM Sans', 
                  fontSize:'16px', 
                  fontWeight:'700', 
                  backgroundColor:'#5956E9',
                  borderRadius:'12px'}}>
                  Let's Talk
            </Button>
        </div>
      </Box>
      
      
      

    </Box>

  )
}

export default Header;