import React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import PageTitleBg from '../../assets/images/pt_bg.jpg'
import AboutSection from '../../components/AboutSection'
import { Container, Box, Typography } from '@mui/material'
import Industry from '../../components/common/Industry/Industry'
import theme from '../../theme'
function About() {
  return (
    <>
    <PageTitle pageTitle={'About Me'} image={PageTitleBg}/>
    
    <Container style={{padding:'100px 10px'}}>
      <AboutSection/>
    </Container>

    <Container maxWidth='100%' className='industries_section' style={{ padding: '100px 10px', backgroundColor:'#F7F8FD',  }}>
      <Container>
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
    </>
  )
}

export default About