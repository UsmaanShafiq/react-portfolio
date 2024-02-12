import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  const servicesMenuItems = ['Service 1', 'Service 2'];

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(
          (text, index) => (
            <ListItem key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
              {text === 'Services' && (
                <ListItemIcon onClick={(e) => e.stopPropagation()}>
                  <i className="fas fa-caret-down" />
                </ListItemIcon>
              )}
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {servicesMenuItems.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
    <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ backgroundColor: 'blue', '&:hover' : {backgroundColor:'#E0C175', color:'#000'} }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
    <div>
      
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
    </>
  );
};

export default MobileDrawer;
