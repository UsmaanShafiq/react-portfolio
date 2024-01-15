import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Stack, IconButton, useMediaQuery } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Navbar.module.css'


function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <>
    
  {
    isMobile ? (
      <Stack direction={'row'} justifyContent={'flex-end'} >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ backgroundColor: 'blue', '&:hover' : {backgroundColor:'#E0C175', color:'#000'} }}
      >
        <MenuIcon />
      </IconButton>
    </Stack>
    ) : (
      <Stack>
    <ul style={{listStyleType:'none', display:'flex', justifyContent:'center'}}>
      <li className={styles.menu_item}>
        <Button className={styles.menu_link} component={NavLink} to="/">
          Home
        </Button>
      </li>
      <li className={styles.menu_item}>
        <Button className={styles.menu_link} component={NavLink} to="/about">
          About
        </Button>
      </li>
      <li className={styles.menu_item}>
        <Button className={styles.menu_link} component={NavLink} to="/portfolio">
          Portfolio
        </Button>
      </li>
      <li className={styles.menu_item}>
        <Button className={styles.menu_link} component={NavLink} 
          id="service-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Services
        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Service #1</MenuItem>
        <MenuItem onClick={handleClose}>Service #2</MenuItem>
        <MenuItem onClick={handleClose}>Service #3</MenuItem>
      </Menu>
      </li>
      <li className={styles.menu_item}>
        <Button className={styles.menu_link} component={NavLink} to="/contact">
          Contact
        </Button>
      </li>
    </ul>
  </Stack>
    )
  }
 
  
  </>
  )
}

export default Navbar;