import React from 'react'
import { Container } from '@mui/material'
import {Stack} from '@mui/material'
import {Box} from '@mui/material'
import HeroTitle from '../../components/HomeComp/HeroTitle'
import Social from '../../components/common/Logo/Social/Social'
import FloatImage from '../../components/common/Logo/FloatImages/FloatImage'
import AboutSection from '../../components/AboutSection'
import heroimg from '../../assets/images/hero.png'
import bgCircle from '../../assets/images/bgCircle.jpg'
import circleFloatImage from '../../assets/images/hero-light-2.png';
import FloatImage2 from '../../assets/images/hero-light-1.png';
import FloatSpiral from '../../assets/images/Spiral.png';
import linkedinIcon from '../../assets/images/linkedin.png'
import githubIcon from '../../assets/images/code.png'
import gmailIcon from '../../assets/images/gmail.png'

function Home() {

  return (
    <>
    <Container 
        style={{
        maxWidth:'1000px', 
        backgroundImage:`url(${bgCircle})`,
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center',
        padding:'60px 0'
      }
        }>
    <Stack justifyContent='center' alignItems='center' >
    <HeroTitle/>
    
    <Box component={'img'} src={heroimg} sx={{
      marginTop:'50px',
      marginBottom:'60px',
      width: {lg:'auto', xs: '100%'}}} alt="hero_img" />
    </Stack>
    
    <Stack direction={{md:'row', xs: 'column'}} justifyContent={'center'} alignItems={'center'} spacing={2}>
      <Social iconSize='30px' text={'Linkedin'} url={''} icon={linkedinIcon} color={'#000'} bg={'#fff'}/>
      <Social iconSize='30px' text={'Github'} url={''} icon={githubIcon} color={'#000'} bg={'#fff'}/>
      <Social iconSize='30px' text={'Gmail'} url={''} icon={gmailIcon} color={'#000'} bg={'#fff'}/>
    </Stack>

      <FloatImage url={circleFloatImage} top={['50%', '0']} left={['5%', '0']} />
      <FloatImage url={FloatImage2} top={['52%', '0']} left={['80%', '0']} />
      <FloatImage url={FloatSpiral} top={['110%', '0']} left={['5%', '0']} />
      <FloatImage url={circleFloatImage} top={['120%', '0']} left={['80%', '0']} />

    </Container>


    <Container className='about_section' style={{ padding: '80px 0' }}>
        <AboutSection/>
    </Container>
    </>
  )
}

export default Home