import React from 'react'
import HeroTitle from '../../components/HomeComp/HeroTitle'
import heroimg from '../../assets/images/hero.png'
import { Container } from '@mui/material'
import {Stack} from '@mui/material'
import {Box} from '@mui/material'
import Social from '../../components/common/Logo/Social/Social'
function Home() {
  return (
    <Container style={{maxWidth:'1000px'}}>
    <Stack justifyContent='center' alignItems='center' py={'60px'}>
    <HeroTitle/>
    <img src={heroimg} style={{marginTop:'50px'}} alt="hero_img" />
    </Stack>
    <Box>
    <Social/>
    </Box>
    
    </Container>
  )
}

export default Home