import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloudIcon from '@mui/icons-material/Cloud';
import Box from '@mui/material/Box';

const NavBar = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar color='violet' >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <CloudIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                        WeatherGuessr
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar
