import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from './TabPanel';
import styles from './PortfolioTabs.module.css';
import { Grid } from '@mui/material';
import ProjectItem from './ProjectItem/ProjectItem';

export default function PortfolioTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%' }} className={styles.tab_container}>
      <Tabs value={value} onChange={handleChange} centered indicatorColor='primary' textColor='#000' 
        sx={{
          background:'#F9FAFB',
          marginBottom:'0',
          width:'max-content',
          padding: '15px',
          margin:'0 auto'
          }}>
        <Tab className={styles.tab_item} label="All" />
        <Tab className={styles.tab_item} label="WordPress" />
        <Tab className={styles.tab_item} label="Shopify" />
        <Tab className={styles.tab_item} label="PHP" />
        <Tab className={styles.tab_item} label="Javascript" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Grid container textAlign='center' spacing={4}>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid> 
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container textAlign='center' spacing={4}>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid> 
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container textAlign='center' spacing={4}>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid> 
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Grid container textAlign='center' spacing={4}>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid> 
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid container textAlign='center' spacing={4}>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid>
          <Grid item md={3}>
            <ProjectItem/>
          </Grid> 
        </Grid>
      </TabPanel>
    </Box>
  );
}