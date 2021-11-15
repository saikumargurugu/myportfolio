import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Resume.css'
import { Avatar, Link } from '@mui/material';
import { workHistory } from './RouterData'
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


export default function WorkHistory() {
    return (
        <div className="listcard" >
            {Object.keys(workHistory).map(tool =>
                <Card sx={{ minWidth: 275, marginTop: 5 }}>
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
                                        border: 1
                                    }}
                                    alt="Git Version Control"
                                    src={loadImage(workHistory[tool].image)}
                                />
                            </Box>
                            <Box
                                sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', justifyContent: "center" }}
                            >
                                <Typography sx={{ fontSize: 24 }} variant="h1" color="text.secondary" gutterBottom>
                                    {workHistory[tool].company_name}
                                </Typography>
                                <Typography>
                                    {workHistory[tool].type}
                                </Typography>
                                <Typography variant="body2">
                                    {workHistory[tool].description}
                                </Typography>
                                <br />
                                <ul>
                                    {workHistory[tool].other_points.map(
                                        exe => (
                                            <li><Typography>{exe} </Typography></li>
                                        )
                                    )
                                    }
                                </ul>
                            </Box>
                            <Box>
                                {workHistory[tool].Projects.map(project => (
                                    <>
                                        <Typography sx={{ fontSize: 24 }} variant="h1" color="text.secondary" gutterBottom>
                                            {project.name}
                                        </Typography>
                                        {Object.keys(project.my_role).map(title =>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <div style={{ width: '30%' }}>{bull}{title}:</div>
                                                <div style={{ width: '30%' }}>{project.my_role[title]}</div>
                                            </div>
                                        )}
                                        <br />
                                        <Typography>
                                            <strong>Description:</strong> {project.description}
                                        </Typography>
                                        <br/>
                                        {Object.keys(project['Modules Developed and Worked']).map(title =>
                                            <div>
                                                <strong >{bull}{title}</strong>
                                                <div>{project['Modules Developed and Worked'][title]}</div>
                                            </div>
                                        )}
                                        <CardActions>
                                            <Button size="small">
                                                <Link
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener">
                                                    Learn More About {project.name}
                                                </Link>
                                            </Button>
                                        </CardActions>
                                    </>
                                ))}


                            </Box>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div >
    );
}
