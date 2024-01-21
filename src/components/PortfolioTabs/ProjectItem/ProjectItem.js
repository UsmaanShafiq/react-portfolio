import React from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';
import { Box } from '@mui/material';
import prjectImg from '../../../assets/images/home.jpg'
function ProjectItem() {
    return (
        <Box className="project" sx={{boxShadow:'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'}}>
        <Box className="project_img" sx={{
            height:'400px', 
            backgroundImage:`url(${prjectImg})`,
            backgroundSize:'100%',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'top',
            transition: '5s',
            '&:hover':{
                backgroundPosition:'bottom',
                transition:'5s',
            }
            
            }}>
        </Box>
        <Box className="project_content" 
            sx={{padding:'20px 20px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Box className="project_title">This is project title.</Box>
            <Box className="link_icon"><CallMadeIcon/></Box>
        </Box>
        </Box>
    )
}

export default ProjectItem