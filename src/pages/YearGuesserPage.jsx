import { Box, Stack } from '@mui/material'
import React from 'react'

const YearGuesserPage = () => {
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
                },
            }}>
            <Stack border={1} spacing={2} sx={{
                width: {
                    xs: 300,
                    sm: 500,
                    md: 900,
                    lg: 1200,
                },
                height: {
                    xs: 550,
                    sm: 600,
                    md: 600,
                    lg: 700,
                }
            }}>
                Year Guesser Page
            </Stack>
        </Box>
    )
}

export default YearGuesserPage
