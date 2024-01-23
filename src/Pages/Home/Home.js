import React from 'react'
import {Stack, Box, Grid, Container, Typography } from '@mui/material'
import HeroTitle from '../../components/HeroTitle/HeroTitle'
import Social from '../../components/common/Social/Social'
import FloatImage from '../../components/common/FloatImages/FloatImage'
import AboutSection from '../../components/AboutSection'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import PortfolioTabs from '../../components/PortfolioTabs/PortfolioTabs'
import CTA from '../../components/CTA/CTA'
import heroimg from '../../assets/images/hero.png'
import bgCircle from '../../assets/images/bgCircle.jpg'
import circleFloatImage from '../../assets/images/hero-light-2.png';
import FloatImage2 from '../../assets/images/hero-light-1.png';
import FloatSpiral from '../../assets/images/Spiral.png';
import linkedinIcon from '../../assets/images/linkedin.png'
import githubIcon from '../../assets/images/code.png'
import gmailIcon from '../../assets/images/gmail.png'
import cta1 from '../../assets/images/cta-1.png'
import CodeIcon from '@mui/icons-material/Code';
import Subheading from '../../components/common/Typos/Subheading/Subheading'
import Industry from '../../components/common/Industry/Industry'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'
import Testimonial from '../../components/Testimonial/Testimonial'
import Marquee from 'react-fast-marquee'
import testimg from '../../assets/images/testi-3.png'

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

    <Container maxWidth='xl' className='services_section' sx={{padding:'100px 10px', backgroundColor:'#292930'}}>
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

    <Container className='industries_section' style={{ padding: '100px 10px' }}>
      <Container sx={{
        backgroundColor:'#F7F8FD', 
        padding:{md:'60px', sm: '30px'},
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


    <CTA text="Hi,👋 I am experts in every aspect lifecycle" img={cta1} imgSize='60%' btnIcon={<FileDownloadOutlinedIcon/>} btnText='Download CV'/>

    <Container className='portfolio_section' sx={{padding:'100px 10px'}}>
      <Subheading circle='#FFDC60' color='#000' text='Completed Projects' align='center'/>
      <Typography variant='h2'textAlign={'center'}>Creative work.</Typography>
      <PortfolioTabs/>
    </Container>

      <Container maxWidth='100%' style={{backgroundColor:'#292930', padding:'100px 0'}} >
        <Subheading 
          circle={theme.palette.secondary.main}
          color={theme.palette.custom.text}
          align={'center'}
          text='Testimonials'
        />
        <Typography variant='h2' color='#fff' marginTop='10px'align="center" marginBottom='40px'>What Client Says</Typography>
              
          <Marquee pauseOnHover={true} style={{padding:'0'}}>
            <Testimonial img={testimg} name='Sarah Thompson' title='UX Designer' content={
              `Working with CodexInno was an absolute pleasure! 
              Their ReactJS skills brought my design concepts to life seamlessly. 
              The attention to detail and commitment to creating a smooth user experience were remarkable. 
              I highly recommend CodexInno for anyone seeking a talented and collaborative developer.`
            }/>
            <Testimonial img={testimg} name='Alex Rodriguez' title='Startup Founder' content={
              `I am beyond impressed with the ReactJS expertise that CodexInno brought to our startup project. 
              Their ability to tackle complex challenges and deliver high-quality code on time was exceptional. 
              CodexInno is a reliable and dedicated developer, and I look forward to future collaborations.`
            }/>
            <Testimonial img={testimg} name='Emily Davis' title='Content Creator' content={
              `As a content creator, having a visually appealing and user-friendly website is crucial. 
              CodexInno not only met but exceeded my expectations in developing my ReactJS-based portfolio site. 
              They understood my vision and implemented it flawlessly.
              I'm grateful for their creativity and technical proficiency.`
            }/>
          </Marquee>
      </Container>
        
    </ThemeProvider>
    </>
  )
}

export default Home