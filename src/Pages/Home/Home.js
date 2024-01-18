import React from 'react'
import { Container } from '@mui/material'
import {Stack} from '@mui/material'
import HeadingTwo from '../../components/common/Typos/HeadingTwo/HeadingTwo'
import {Box, Grid} from '@mui/material'
import HeroTitle from '../../components/HeroTitle/HeroTitle'
import Social from '../../components/common/Logo/Social/Social'
import FloatImage from '../../components/common/Logo/FloatImages/FloatImage'
import AboutSection from '../../components/AboutSection'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import heroimg from '../../assets/images/hero.png'
import bgCircle from '../../assets/images/bgCircle.jpg'
import circleFloatImage from '../../assets/images/hero-light-2.png';
import FloatImage2 from '../../assets/images/hero-light-1.png';
import FloatSpiral from '../../assets/images/Spiral.png';
import linkedinIcon from '../../assets/images/linkedin.png'
import githubIcon from '../../assets/images/code.png'
import gmailIcon from '../../assets/images/gmail.png'
import CodeIcon from '@mui/icons-material/Code';
import Subheading from '../../components/common/Typos/Subheading/Subheading'

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


    <Container className='about_section' style={{ padding: '150px 0 100px 0' }}>
        <AboutSection/>
    </Container>

    <Container maxWidth='xl' className='services_section' sx={{padding:'100px 0', backgroundColor:'#292930'}}>
      <Container padding={0}>
        <Subheading style={{color:'#fff',}} circle='#FFDC60' text='What I Serve' />
        <HeadingTwo text='Our Services' style={{color:'#fff'}}/>
      <Grid container spacing={5}>
      {/* First Row */}
      <Grid item xs={12} md={3}>
        <ServiceCard icon={<CodeIcon/>} title="Service 1" color='#8B40E5' bg='#EEE3FB'/>
      </Grid>
      <Grid item xs={12} md={3}>
        <ServiceCard icon={<CodeIcon/>} title="Service 2" color='#8B40E5' bg='#EEE3FB'/>
      </Grid>
      <Grid item xs={12} md={3}>
        <ServiceCard icon={<CodeIcon/>} title="Service 3" color='#8B40E5' bg='#EEE3FB'/>
      </Grid>
      <Grid item xs={12} md={3}>
        <ServiceCard icon={<CodeIcon/>} title="Service 4" color='#8B40E5' bg='#EEE3FB'/>
      </Grid>

      {/* Second Row */}
      <Grid item xs={12} md={3}>
        <ServiceCard icon={<CodeIcon/>} title="Service 5" color='#8B40E5' bg='#EEE3FB'/>
      </Grid>
      <Grid item xs={12} md={3}>
        <ServiceCard icon={<CodeIcon/>} title="Service 6" color='#8B40E5' bg='#EEE3FB'/>
      </Grid>
      <Grid item xs={12} md={3}>
        <ServiceCard icon={<CodeIcon/>} title="Service 7" color='#8B40E5' bg='#EEE3FB'/>
      </Grid>
      <Grid item xs={12} md={3}>
        <ServiceCard icon={<CodeIcon/>} title="Service 8" color='#8B40E5' bg='#EEE3FB'/>
      </Grid>
    </Grid>  
      </Container>
    </Container>
    </>
  )
}

export default Home