import { Avatar, Divider, Typography } from '@mui/material'
import { Box, width } from '@mui/system'
import React from 'react'
import "./Resume.css"
import cec from '../../assets/images/cec.jpg'
import scjc from '../../assets/images/scjc.jpg'
import srkp from '../../assets/images/srkp.png'

function Education() {
    const education = [
        {
            'title': 'Sri RamaKrishna Private School',
            'batch': '2013',
            'study_type': 'Day Scholar',
            'degree': 'SSC(10th)',
            'score': '5.8',
            'webside': 'http://www.ramakrishnaschool.com/',
            'img': srkp,
            'address': 'Santhi nagar,NAD jn, Visakhapatnam'
        },
        {
            'title': 'Sri Chaitanya Residential college',
            'batch': '2015',
            'study_type': 'Hosteler',
            'degree': 'Inter Meditate',
            'score': '7.2',
            'webside': 'https://srichaitanya.net/',
            'img': scjc,
            'address': 'Marikavalasa Rd,Madhurawada,Vizag,530048'
        },
        {
            'title': ' Chaitanya Residential college',
            'batch': '2019',
            'study_type': 'day Scholar',
            'degree': 'B.tech CSE',
            'score': '6.6',
            'img': cec,
            'webside': 'https://www.cec.ac.in/',
            'address': 'Kommadi, Madhurawada, Visakhapatnam,530048'
        }

    ]


    return (
        <div className="collection">
            <Box>
                {
                    education.map(edu =>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            marginY: '60px'
                        }} >
                            <Box
                            sx={{
                                display: 'flex',
                                flexDirection:'column',
                                justifyContent: 'flex-start',
                                marginY: '60px',
                                width:'70%'
                            }} 
                            >
                                <Typography >
                                    {edu.title}
                                </Typography>
                                <Typography >
                                    {edu.batch}
                                </Typography>
                                <Typography >
                                    {edu.degree}
                                </Typography>
                                <Typography >
                                    {edu.score}
                                </Typography>
                                <Typography >
                                    {edu.address}
                                </Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box
                            sx={{
                                width:'30%'
                            }} 
                            >
                                <Avatar
                                    sx={{
                                        height: 100,
                                        width: 100,
                                    }}
                                    alt="Sai Kumar GUrugubelli"
                                    src={edu.img}
                                />

                            </Box>
                        </Box>
                    )
                }
            </Box>
        </div>
    )
}

export default Education
