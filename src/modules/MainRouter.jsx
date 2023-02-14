import React, {useState} from 'react'
import Resume from './Resume/Resume'
import { styled } from '@mui/material/styles';
import {
    Routes,
    Route
  } from "react-router-dom";
import AboutMe from './Resume/AboutMe';
import Education from './Resume/Education';
import Tools from './Resume/Tools';
import Skills from './Resume/Skills';
import WorkHistory from './Resume/Workhistory';
import Contact from './Resume/Contact';
  
function MainRouter() {
    const [contentWidth, setContentWidth] = useState(240)
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
            <   Route path="/" element={<AboutMe />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/edu" element={<Education />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/skils" element={<Skills />} />
                <Route path="/work" element={<WorkHistory />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            </Main>
        </div>
    )
}

export default MainRouter
