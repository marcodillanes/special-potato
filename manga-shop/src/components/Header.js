import React, { useState } from 'react';
// Noshua showed me the mui documentation in a differnent class, big help when i checked my bookmarks. 
// decided to implement material UI's library for the design of the application!
import{ AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
//import navlink from reactrouterdom
import {NavLink} from 'react-router-dom';

// utilizing toolbar to get a better feel of organizing components
const Header = () => {
    const [value, setValue] = useState();
  return  (<div>

    <AppBar sx={{ backgroundColor:"#22223b" }} position='sticky'>
        
        <Toolbar>
            <Typography>
                <AutoStoriesIcon />
            </Typography>
                <Tabs
                    sx={{ml:""}} //sx allows for inline css for the tabs 
                    textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/Add" label = 'Add Manga!'/>
                        <Tab LinkComponent={NavLink} to="/Manga" label = 'Manga!'/>
                        <Tab LinkComponent={NavLink} to="/About" label = 'ABOUT US'/>
                
            </Tabs>
        </Toolbar>
        

    </AppBar>
    </div>
  );
  
};

export default Header;