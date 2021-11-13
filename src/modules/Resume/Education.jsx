import { Avatar, Divider, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
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
            'address': 'Marikavalasa Rd,Madhurawada,Vizag, 530048'
        },
        {
            'title': ' Chaitanya Residential college',
            'batch': '2019',
            'study_type': 'day Scholar',
            'degree': 'B.tech CSE',
            'score': '6.6',
            'img': cec,
            'webside': 'https://www.cec.ac.in/',
            'address': 'Kommadi, Madhurawada, Visakhapatnam, 530048'
        }

    ]


    return (
        <div className="collection">
            <Box>
                {
                    education.map(edu =>
                        <>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            marginY: '10px'
                        }} >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    marginY: '10px',
                                    width: '70%'
                                }}
                            >
                                <Typography >
                                    <strong>
                                        College Name
                                    </strong>
                                {/* </Typography>
                                <Typography > */}
                                    {': '+edu.title}
                                </Typography>
                                <Typography >
                                    <strong>
                                        Year of passing
                                    </strong>
                                {/* </Typography>
                                <Typography > */}
                                    {': '+edu.batch}
                                </Typography>
                                <Typography >
                                    <strong>
                                        Degree/course
                                    </strong>
                                {/* </Typography>
                                <Typography > */}
                                    {': '+edu.degree}
                                </Typography>
                                <Typography >
                                    <strong>
                                        Score
                                    </strong>
                                {/* </Typography>
                                <Typography > */}
                                    {': '+edu.score}
                                </Typography>
                                <Typography >
                                    <strong>
                                        Address
                                    </strong>
                                {/* </Typography>
                                <Typography > */}
                                    {': '+edu.address}
                                </Typography>
                                <Typography >
                                    <strong>
                                        Website
                                    </strong>
                                {/* </Typography>
                                <Typography > */}
                                    <Link  
                                        href={edu.webside}
                                        underline='hover'
                                        target="_blank"
                                        rel="noopener"
                                    >: click here to visit {edu.title} </Link> 
                                </Typography>
                                {/* </Box>
                            <Box
                            sx={{
                                display: 'flex',
                                flexDirection:'column',
                                justifyContent: 'flex-start',
                                marginY: '60px',
                                width:'50%'
                            }} 
                            > */}
                            </Box>
                            {/* <Divider orientation="vertical" flexItem /> */}
                            <Box
                                sx={{
                                    width: '30%',
                                    display: 'flex',
                                    justifyContent:'center',
                                    alignItems:'center'
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
                            <Divider orientation="horizontal" flexItem/>
                        </>
                    )
                }
            </Box>
        </div>
    )
}

export default Education
