import React from 'react'
import FeatureCard from './FeatureCard';
import { Grid, Button } from '@mui/material';
import Subheading from '../common/Typos/Subheading/Subheading';
import {Typography} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GradeIcon from '@mui/icons-material/Grade';
import featuresBg from '../../assets/images/features.png'
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

function AboutSection() {
  return (
    <ThemeProvider theme={theme}>
    <Grid container style={{maxWidth:'1140px'}} spacing={4}>
      
      <Grid item md={6} xs={12}
        display={'flex'}
        gap={5}
        sx={{
          flexDirection: 'row',  justifyContent: 'center' , 
          backgroundImage:`url(${featuresBg})`, 
          backgroundRepeat:'no-repeat', 
          backgroundSize:'contain'
        }}
      >
        <Grid item xs={6} display={'flex'} alignItems={'center'}>
          <FeatureCard 
            icon={<EmojiEventsIcon style={{fontSize:'30px'}}/>} 
            title={'Projects Done'} 
            caption={'250+ Projects Done'}
            color={'#fd346e'}
            bg={'pink'} 
          />
        </Grid>
        <Grid item xs={6}  display={'flex'} flexDirection={'column'} gap={4} >
          <FeatureCard 
            icon={<EmojiEmotionsIcon style={{fontSize:'30px'}}/>} 
            title={'Happy Customers'} 
            caption={'200+ Happy Clients'}
            color={'#1EE2CF'}
            bg={'#DDFBF8'} />
          
          <FeatureCard icon={<GradeIcon style={{fontSize:'30px'}}/>} 
            title={'Competitive Rate'} 
            caption={'100% Client Satisfied'}
            color={'#FFDC60'}
            bg={'#FFFAD9'} />
        </Grid>
      </Grid>

      <Grid item md={6}  xs={12} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'}>
        <Subheading circle={'#FFDC60'} text={'About Me'}/>
        <Typography variant='h2' marginBottom={'30px'}>
        The Creative Mind Behind the Code
        </Typography>
        <Typography variant='body' 
          style={{
            color: theme.palette.custom.text,
            lineHeight: '26px',
            }}>
          Welcome to my digital world! I'm Usman, a web developer fueled by creativity and driven by innovation. With a passion for crafting engaging online experiences, I specialize in designing and developing dynamic websites. My journey into web development has been a story of growth and learning, where I've honed my skills in various technologies. As a dedicated techie, 
          I find inspiration in coding, technology, and all things digital. Let's bring your digital vision to life!
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
                  borderRadius:'10px'
                }}
              >
                Read More
              </Button>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default AboutSection