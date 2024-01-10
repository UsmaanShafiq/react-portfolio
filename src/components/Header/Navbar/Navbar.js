import React from 'react'
import  {NavLink}  from 'react-router-dom';
import { Box } from '@mui/material';
import styles from './Navbar.module.css';

function Navbar() {
  console.log(styles);
  return (
    <Box component="nav" className={styles.nav_wrapper} >
        <Box component="ul"  className={styles.menu_list}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="portfolio">Portfolio</NavLink></li>
            <li><NavLink to="services">Serices</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
        </Box>
    </Box>
  )
}

export default Navbar;