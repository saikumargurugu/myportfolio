import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { contactData } from './RouterData'

function Contact() {
    return (
        <Box 
        sx={{
            marginTop:'50px'
        }}
        >
            {contactData.map(contac1=>(
                <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{width:'10%'}}>
                <Typography>
                    {contac1.name}
                </Typography>
                </div>
                <div>
                <Typography>
                    {contac1.content}
                </Typography>
                </div>
                
                </div>
            ))}
        </Box>
    )
}

export default Contact
