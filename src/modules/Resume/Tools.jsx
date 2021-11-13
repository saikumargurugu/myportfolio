import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Resume.css'
import { Avatar, Link } from '@mui/material';
import { toolsUsed } from './RouterData'
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const assets = require.context('../../assets/images', true);
const loadImage = imageName => (assets(`./${imageName}`).default);


export default function Tools() {
    return (
        <div className="listcard" >
            {toolsUsed.map(tool=>
                <Card sx={{ minWidth: 275, marginTop:5 }}>
                <CardContent>
                    <div className='card'>
                        <Box
                            sx={{ display: 'flex', width: '150px' }}
                        >
                            <Avatar
                                sx={{
                                    marginTop: '30px',
                                    height: 125,
                                    width: 125,
                                    border:1
                                }}
                                alt="Git Version Control"
                                src={loadImage(tool.image)}
                            />
                        </Box>
                        <Box
                            sx={{ display: 'flex', flexDirection: 'column',marginLeft:'10px', justifyContent:"center" }}
                        >
                            <Typography sx={{ fontSize: 24 }} variant="h1" color="text.secondary" gutterBottom>
                                {tool.title}
                            <br/>
                            </Typography>
                            <Typography variant="body2">
                                {tool.description}
                            </Typography>
                            <br/>
                                {tool.otherPoints.examples.map(
                                        exe=>(
                                                <Typography>{bull}{exe} </Typography>
                                        )
                                    )
                                }
                            <CardActions>
                                <Button size="small">
                                    <Link
                                        href={tool.link}
                                        target="_blank"
                                        rel="noopener">
                                            Learn More
                                    </Link>
                                </Button>
                            </CardActions>
                        </Box>
                    </div>
                </CardContent>
            </Card>
            )}
        </div >
    );
}
