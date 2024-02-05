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
            <ServiceCard icon={<CodeIcon/>} title="Custom Web Creation" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="E-commerce Solutions" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="Fast Customer Support" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="CMS Integration" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>

          {/* Second Row */}
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="Speed Optimization" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="Search Engine Optimization" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="Social Media Integration" color='#8B40E5' bg='#EEE3FB'/>
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard icon={<CodeIcon/>} title="Website Security & SSL" color='#8B40E5' bg='#EEE3FB'/>
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
        pillBg='#fff' textSize='18px' text='Technology'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#82CEFD'
        pillBg='#fff' textSize='18px' text='E-commerce'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#FD346E'
        pillBg='#fff' textSize='18px' text='Healthcare'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#5956E9'
        pillBg='#fff' textSize='18px' text='Education'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#82CEFD'
        pillBg='#fff' textSize='18px' text='Real Estate'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#FD346E'
        pillBg='#fff' textSize='18px' text='Finance'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#5956E9'
        pillBg='#fff' textSize='18px' text='Hospitality'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#82CEFD'
        pillBg='#fff' textSize='18px' text='Entertainment'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#FFDC60'
        pillBg='#fff' textSize='18px' text='Non-profit'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#26E78E'
        pillBg='#fff' textSize='18px' text='Retail'
        />
        <Industry 
        align='' color={theme.palette.custom.accent} 
        circleSize='20px' circleColor='#FF6F69'
        pillBg='#fff' textSize='18px' text='Events Management'
        />
        </Box>
      </Container>
      
    </Container>


    <CTA text="Ready to explore my skills further?" img={cta1} imgSize='60%' btnIcon={<FileDownloadOutlinedIcon/>} btnText='Download CV'/>

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
            <Testimonial img={testimg} name='Charabil' title='from Mozambique' content={
              `Excellent! I will work with him on the next projects soon. Congratulations on your ability to satisfy and respond to the client's wishes. You master your work.`
            }/>
            <Testimonial img={testimg} name='Claude V.' title='from United Kingdom' content={
              `It is always a pleasure working with Usman, he is very professional and his attention to detail
              is meticulous. He has great design skills and will sometimes advice you on an alternative design 
              that 95% of the time will work for you, i can not recommend him enough! A+++++`
            }/>
            <Testimonial img={testimg} name='Nitesh Gupta' title='from India' content={
              `I had a great experience working with Usman on my WordPress site. He's skilled, detail-oriented, 
              and highly responsive. He exceeded expectations, offering valuable insights that enhanced the project. 
              The process was smooth, and he delivered top-quality work on time. 
              I highly recommend Usman for anyone in need of a talented and reliable WordPress developer.`
            }/>
            <Testimonial img={testimg} name='Egrizzly' title='from United States' content={
              `I've been working with Usman for quite some time now, and I can confidently say that he is an 
              exceptional WordPress developer. He has become my go-to vendor for all things WordPress, and for good reason.`
            }/>
            <Testimonial img={testimg} name='Ianstrom' title='from Canada' content={
              `It was a great work effort done in a very reasonable amount of time. Will definitely use again and would recommend!`
            }/>
            <Testimonial img={testimg} name='Sefe Mark' title='from Australia' content={
              `Absolutely outstanding experience! Usman not only delivered on time but also exceeded my expectations. 
              The website is fast, visually stunning, and incredibly user-friendly. Communication was smooth, and all my requests were implemented flawlessly. 
              Highly recommend for anyone looking for top-tier web development. 5/5 stars!`
            }/>
          </Marquee>
      </Container>
        
    </ThemeProvider>
    </>
  )
}

export default Home