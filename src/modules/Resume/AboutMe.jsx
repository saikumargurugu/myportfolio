import React from 'react'
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import me_about from '../../assets/me/me_2019.jpg'



function AboutMe() {
    console.log(me_about);
    return (
        <div>
            <div>
            <img src={me_about} alt='_' className='' />
            </div>
              <Typography
              style={{
                fontFamily: "-apple-system"
              }}
              variant="h2">About Me</Typography>
            <Divider></Divider>
            <Typography
            style={{
                fontFamily: "sans-serif",
                fontWeight: 300,
                fontSize: "2rem",
                lineHeight: 1.167,
                letterSpacing: "-0.01562em",
                margin:'30px',
            }}
            
            >
                Well-qualified Full Stack Developer looking
                for a wide range of opportunities, I have been working <b> 2+ years
                in Aerosimple Technoligies.</b>. I believe
                that my strong technical experience and
                education make me a highly competitive
                candidate. My key strengths that would
                support my success in this position
                include:
               <ul>
                  <li> 
                I have successfully developed, and
                supported live-use applications.
                </li>
                <li>
                I strive continually for excellence.
                </li>
                </ul>
            </Typography>
        </div>
    )
}

export default AboutMe
