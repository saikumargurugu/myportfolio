import React, {useState} from 'react'
import Resume from './Resume/Resume'
import { styled, useTheme } from '@mui/material/styles';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import AboutMe from './Resume/AboutMe';
import Education from './Resume/Education';
  
function MainRouter() {
    const [contentWidth, setContentWidth] = useState(0)
    const ontoggle=(val)=> setContentWidth(val)
    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `${contentWidth}px`,
        marginTop:'38px',
        overflowY:'auto',
        // height: '895px',
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
    );
    
    
    return (
        <div className="mainbody">
            <Resume ontoggle={ontoggle} />
            <Main>
            <Routes>
                {/* <Route path="/resume" element={<Resume />} /> */}
                {/* <Routes> */}
        <Route path="/resume/aboutme" element={<AboutMe />} />
        <Route path="/resume/edu" element={<Education />} />
      {/* </Routes> */}
            </Routes>
            </Main>
        </div>
    )
}

export default MainRouter
