import React from 'react'
import { Box, Typography } from '@mui/material'
import GradeIcon from '@mui/icons-material/Grade';
function Testimonial({img, name, title, content}) {
  return (
    <Box className="testimonial_slide_wrapper" sx={{
        backgroundColor:'rgb(58, 58, 66)',
        padding:'50px 35px',
        fontFamily:'DM Sans',
        borderRadius:'20px',
        width:'430px',
        margin:'10px 20px',
    }}>
        <Box className="author_info" marginBottom='30px' display='flex' justifyContent='space-between' alignItems='center'>
            <Box className="name_title" display='flex' alignItems='center'>
                <Box component='img' src={img} alt="client_img" sx={{marginRight:'15px'}} />
                <Box>
                <Typography 
                    style={{
                        fontSize:'18px',
                        color:'#fff',
                        fontFamily:'DM Sans',
                        fontWeight:'700',    
                    }}>
                    {name}
                </Typography>
                <Typography 
                    style={{
                        fontSize:'12px',
                        color:'#fff',
                        fontFamily:'DM Sans',
                        fontWeight:'500',    
                    }}>
                    {title}
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
            {content}
            </Typography>
        </Box>
    </Box>
  )
}

export default Testimonial