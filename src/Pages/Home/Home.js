import React from 'react'
import { Container, Typography } from '@mui/material'
import {Stack} from '@mui/material'
import {Box, Grid} from '@mui/material'
import HeroTitle from '../../components/HeroTitle/HeroTitle'
import Social from '../../components/common/Social/Social'
import FloatImage from '../../components/common/FloatImages/FloatImage'
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
import Industry from '../../components/common/Industry/Industry'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'

function Home() {

  return (
    <>
    <ThemeProvider theme={theme}>
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
        <Subheading align='center' color='#fff' circle='#FFDC60' text='What I Offer' />
        <Typography variant='h2' sx={{color:'#fff', textAlign:'center', marginBottom:'40px'}}>
          Our Services
        </Typography>
        <Grid container spacing={5}>
          {/* First Row */}
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="Product Management" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="Web & Mobile Development" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="Fast Customer Support" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="Human Resources" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>

          {/* Second Row */}
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="Design and Vreatives" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="Meketing and Communcation" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="Business Development" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="Another Service Here" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>
        </Grid>  
      </Container>
    </Container>

    <Container className='industries_section' style={{ padding: '100px 0 100px 0' }}>
      <Container sx={{
        backgroundColor:'#F7F8FD', 
        padding:'80px',
        borderRadius:'20px',
        }}>
        <Typography 
          variant='h2' 
          color={theme.palette.custom.accent}
          textAlign={'center'}
        >
            Industries
        </Typography>
        
        
        <Box className='industries_pills' 
          display={'flex'} 
          flexWrap={'wrap'} 
          justifyContent={'center'} 
          gap={3}
          marginTop={'50px'}
        >
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#FFDC60'
        pillBg='#fff' textSize='18px' text='Manufacturing'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#82CEFD'
        pillBg='#fff' textSize='18px' text='Chemical Industry'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#FD346E'
        pillBg='#fff' textSize='18px' text='Supply Chain Solutlions'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#5956E9'
        pillBg='#fff' textSize='18px' text='Manufacturing'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#82CEFD'
        pillBg='#fff' textSize='18px' text='Telcom Cable'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#FD346E'
        pillBg='#fff' textSize='18px' text='Healthcare'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#5956E9'
        pillBg='#fff' textSize='18px' text='Banking'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#82CEFD'
        pillBg='#fff' textSize='18px' text='Human Capital Management'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#FFDC60'
        pillBg='#fff' textSize='18px' text='Fed and State GOVT'
        />

        </Box>
      </Container>
      
    </Container>
    </ThemeProvider>
    </>
  )
}

export default Home