import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NotFoundPage = () => {
    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            position='fixed'
            sx={{
                width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '100%',
                },
                height: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '100%',
                }
            }}>
            <Box sx={{ borderLeft: '10px solid black' }}>
                <Typography variant="h1" marginLeft={2} >
                    404 Not Found
                </Typography>
            </Box>
        </Box>
    )
}

export default NotFoundPage
