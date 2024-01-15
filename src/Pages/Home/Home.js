import React from 'react'
import { Container } from '@mui/material'
import {Stack} from '@mui/material'
import {Box} from '@mui/material'
import HeroTitle from '../../components/HomeComp/HeroTitle'
import Social from '../../components/common/Logo/Social/Social'
import FloatImage from '../../components/common/Logo/FloatImages/FloatImage'
import heroimg from '../../assets/images/hero.png'
import bgCircle from '../../assets/images/bgCircle.jpg'
import circleFloatImage from '../../assets/images/hero-light-2.png';
import FloatImage2 from '../../assets/images/hero-light-1.png';
import FloatSpiral from '../../assets/images/Spiral.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
  return (
    <Container 
      style={{
        maxWidth:'1000px', 
        backgroundImage:`url(${bgCircle})`,
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center'
      }
        }>

    <Stack justifyContent='center' alignItems='center' py={'60px'}>
    <HeroTitle/>
    
    <Box component={'img'} src={heroimg} sx={{
      marginTop:'50px', 
      width: {lg:'auto', xs: '100%'}}} alt="hero_img" />
    
    </Stack>
    
    <Box>
      <Social text={'Linkedin'} url={'linkedin.com'} icon={<LinkedInIcon/>} color={'#000'} bg={'#fff'}/>
    </Box>

    <FloatImage url={circleFloatImage} top={'350px'} left={'50px'}/>
    <FloatImage url={FloatImage2} top={'320px'} left={'90%'}/>
    <FloatImage url={FloatSpiral} top={'700px'} left={'50px'}/>
    <FloatImage url={circleFloatImage} top={'780px'} left={'90%'}/>

    </Container>
  )
}

export default Home