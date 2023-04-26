import React from 'react';
import{ AppBar, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Header = () => {
  return  <div>
    <AppBar position='sticky'>
        <Typography>
            <AutoStoriesIcon />
            </Typography>

    </AppBar>
    </div>
  
}

export default Header