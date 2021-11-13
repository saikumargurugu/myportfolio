import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, {useRef} from 'react'
import Xarrow from "react-xarrows";
import { Skils } from './RouterData'
import './Resume.css'


function Skills() {

    const assets = require.context('../../assets/images', true);
    const loadImage = imageName => (assets(`./${imageName}`).default);
    const ref =useRef(null);
    const ref1 =useRef(null);
    const ref2 =useRef(null);
    const getref = cord =>{
        const data={
            'Frontend':ref,
            'Backend':ref1,
            'Database':ref2
        }
        return data[cord]
    }
    return (
        <div>
            {['Frontend','Backend','Database'].map(cord => (<Box
                    ref={getref(cord)}
                    sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent:"space-between",
                    marginBottom:`${cord==='database'?'1px':'150px'}`,
                    border: 1,
                    borderColor: 'grey.500',
                    borderRadius: 4,
                }}
            >
                <div><Typography variant="h3" sx={{
                    justifySelf: 'flex-start'
                }} >
                    {cord}
                </Typography>
                </div>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        overflowY: 'hidden',
                        paddingBottom: 2,
                    }}>
                    {Skils[cord.toLowerCase()].map(skill => (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginX: 4,
                                justifyContent: 'center',
                            }}
                        >
                            <Avatar
                                sx={{
                                    marginTop: '30px',
                                    height: 105,
                                    width: 105,
                                }}
                                alt={skill.title}
                                src={loadImage(skill.image)}
                            />
                            <Typography sx={{ justifyContent: 'center' }} >{skill.title}</Typography>
                            {/* <Rating name="read-only" value={4} readOnly /> */}
                        </Box>))}
                </Box>
            </Box>))}
            <Xarrow
                start={ref} //can be react ref
                end={ref1} //or an id
            />
            <Xarrow
                start={ref1} //can be react ref
                end={ref2} //or an id
            />
            <Xarrow
                start={ref1} //can be react ref
                end={ref} //or an id
            />
            <Xarrow
                start={ref2} //can be react ref
                end={ref1} //or an id
            />
            
        </div>
    )
}

export default Skills
