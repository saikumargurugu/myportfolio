import  React, { useRef, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './Resume.css'
import Avatar from '@mui/material/Avatar';
import proPic from '../../assets/images/saikumar.jpg'
// import AboutMe from './Resume/AboutMe';
import { Link } from "react-router-dom";
import { resumeRoutData } from './RouterData';


const drawerWidth = 240;


    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function PersistentDrawerLeft({
  ontoggle
}) {

    const ref =useRef(null);
    
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (open) {
                    setOpen(false)
                    ontoggle(10)
                }
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, open, ontoggle]);
    

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (open) {
                    setOpen(false)
                }
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, open]);

  const handleDrawerOpen = () => {
    setOpen(true);
    ontoggle(240)
  };

  const handleDrawerClose = () => {
    setOpen(false);
    ontoggle(10)
  };

  const renderImage = name =>{
     const images = {
        'About Me': <PersonOutlineRoundedIcon />,
        'Educational': <SchoolRoundedIcon />,
        'Tools Worked': <GitHubIcon />,
         'Work History': <WorkRoundedIcon />,
         'Certificates': <LibraryBooksRoundedIcon />,
         'Skils': <CodeIcon />

      }
      return images[name]
  }

  return (
    <Box ref={ref} sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx= {{backgroundColor:"#ADD8E6"}} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2,
                backgroundColor:"#ADD8E6",
                ...(open && { display: 'none' }) }}
          >
            <MenuIcon style={{color:"black"}} />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{color:'black'}} >
            Sai Kumar Gurugubebelli
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            height:740,
            maxHeight:980,
            boxSizing: 'border-box',
            backgroundColor:"#ADD8E6"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
            <div className="propic">
                 <Avatar
                 sx={{
                   marginTop:'30px',
                    height: 155,
                    width: 155,
                    }} 
                   alt="Sai Kumar GUrugubelli"
                    src={proPic}
                     />

            </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {resumeRoutData.map((text, index) => (
            <ListItem button key={text.title}>
              <Link
            style={{ textDecoration: 'none', color: 'black', display: 'flex', justifyContent:"center" }}
            to={`/resume/${text.route}`}
            onClick={()=>{
              setOpen(false)
              ontoggle(10)
            }}
            key={text.title}
            >
              <ListItemIcon>
                {renderImage(text.title)}
              </ListItemIcon>
              <ListItemText primary={text.title} 
                // onClick={text=>handleDisplayContent(text)}
              />
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

