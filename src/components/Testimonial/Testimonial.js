import React from 'react'
import { Box, Typography } from '@mui/material'
import testimg from '../../assets/images/testi-3.png'
import GradeIcon from '@mui/icons-material/Grade';
function Testimonial() {
  return (
    <Box className="testimonial_slide_wrapper" sx={{
        backgroundColor:'rgb(58, 58, 66)',
        padding:'60px 35px',
        fontFamily:'DM Sans',
        borderRadius:'20px',
        width:'430px',
        margin:'20px 20px',
    }}>
        <Box className="author_info" marginBottom='30px' display='flex' justifyContent='space-between' alignItems='center'>
            <Box className="name_title" display='flex' alignItems='center'>
                <Box component='img' src={testimg} alt="client_img" sx={{marginRight:'15px'}} />
                <Box>
                <Typography 
                    style={{
                        fontSize:'18px',
                        color:'#fff',
                        fontFamily:'DM Sans',
                        fontWeight:'700',    
                    }}>
                    Albert Flores
                </Typography>
                <Typography 
                    style={{
                        fontSize:'12px',
                        color:'#fff',
                        fontFamily:'DM Sans',
                        fontWeight:'500',    
                    }}>
                    Founder of (Rirax)
                </Typography>
                </Box>
            </Box>
            <Box className="reviews">
                <GradeIcon style={{color:'#FFDC60'}}/>
                <GradeIcon style={{color:'#FFDC60'}}/>
                <GradeIcon style={{color:'#FFDC60'}}/>
                <GradeIcon style={{color:'#FFDC60'}}/>
                <GradeIcon style={{color:'#FFDC60'}}/>
            </Box>
        </Box>
        <Box className='content'>
            <Typography style={{
                        fontSize:'16px',
                        color:'#fff',
                        fontFamily:'DM Sans',
                        fontWeight:'500',
                        lineHeight:'30px'    
                    }}>
            Collax was very diligent, polite and extremely customer oriented. 
            I think Monika will go far with that attitude and ...he is such a honest, decent and reliable.
            </Typography>
        </Box>
    </Box>
  )
}

export default Testimonial