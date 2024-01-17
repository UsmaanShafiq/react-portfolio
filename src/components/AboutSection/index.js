import React from 'react'
import FeatureCard from './FeatureCard';
import { Grid, Button } from '@mui/material';
import Subheading from '../common/Typos/Subheading/Subheading';
import HeadingTwo from '../common/Typos/HeadingTwo/HeadingTwo';
import Paragraph from '../common/Typos/Paragraph/Paragraph';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GradeIcon from '@mui/icons-material/Grade';
import featuresBg from '../../assets/images/features.png'

function AboutSection() {
  return (
    <>
    <Grid container style={{maxWidth:'1140px'}} spacing={4}>
      
      <Grid item md={6} 
        display={'flex'}
        flexDirection={'row'} 
        gap={5}
        sx={{backgroundImage:`url(${featuresBg})`, backgroundRepeat:'no-repeat', backgroundSize:'contain'}}
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
        <Grid item xs={6} display={'flex'} flexDirection={'column'} gap={4} >
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

      <Grid item md={6} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'}>
        <Subheading circle={'#FFDC60'} text={'About Me'}/>
        <HeadingTwo text='We provide the best solution for your business development'/>
        <Paragraph>
          By understanding the client,s condition and leveraging our experience and knowledge. we support reform by recommending the most appropriate methods and sesources.
        </Paragraph>
        <br/>
        <Paragraph>
          At collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing.
        </Paragraph>
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
    </>
  )
}

export default AboutSection