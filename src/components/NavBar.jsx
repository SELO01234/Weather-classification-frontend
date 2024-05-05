import React, { useState } from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import CloudIcon from '@mui/icons-material/Cloud';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { ListItemButton, ListItemIcon, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar color='violet' >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            mr: 2, borderRadius: 2,
                            border: '1px solid', borderColor: '#dddddd', color: '#dddddd', padding: 0.5
                        }}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton onClick={() => { navigate('/home') }} sx={{ mr: 2, fontSize: 30, color: 'black' }}>
                        <CloudIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                        WeatherGuessr
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer variant='persistent' anchor='left' open={open}>
                <Stack sx={{ width: '100%' }} direction='row'>
                    <Box sx={{ marginRight: 'auto' }}>
                        <CloudIcon sx={{ marginTop: 2.5, marginLeft: 2.5, fontSize: 25 }} />
                    </Box>
                    <Box>
                        <IconButton onClick={handleDrawerClose}
                            sx={{
                                margin: 2,
                                borderRadius: 2,
                                backgroundColor: '#dedede',
                                '&:hover': { color: '#030203', backgroundColor: '#ebebeb' },
                            }}
                        >
                            <CloseIcon sx={{ fontSize: 15 }} />
                        </IconButton>
                    </Box>
                </Stack>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => { navigate('/image/guess') }}>
                            <ListItemIcon>
                                <CollectionsOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Image Weather Guesser" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => { navigate('/year/guess') }}>
                            <ListItemIcon>
                                <AssessmentOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Year Weather Guesser" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}

export default NavBar
