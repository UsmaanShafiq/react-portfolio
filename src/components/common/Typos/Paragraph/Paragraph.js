import React from 'react'
import { Box } from '@mui/material'
function Paragraph({children}) {
  return (
        <Box component='p'
        sx={{
            fontSize:'18px',
            lineHeight:'25px',
            color:'#8a90a2',
            fontFamily:'DM Sans',
            fontWeight:'500'
        }}
        >
            {children}
        </Box>
  )
}

export default Paragraph