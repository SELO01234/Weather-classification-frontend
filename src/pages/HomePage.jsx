import { Box, Button, Stack, Typography } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react'
import sunnyImage from '../assets/sunny.jpg';
import rainyImage from '../assets/rainy.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

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
            <Stack direction='row'>
                <Box sx={{
                    width: {
                        xs: '100%',
                        sm: '50%',
                        md: '50%',
                        lg: '50%',
                    }
                }}
                    display='flex'
                    alignItems='center'
                >
                    <Stack spacing={2} sx={{ marginLeft: 2, marginRight: 2 }}>
                        <Box>
                            <Typography variant="h3" sx={{ color: '#784af4' }}>
                                Detect Weather
                            </Typography>
                            <Typography variant="h3">
                                From Images
                            </Typography>
                        </Box>
                        <Typography variant="h5" gutterBottom>
                            Weather Guessr provides effective tools
                            to predict weather by image and year
                        </Typography>
                        <Box display='flex' justifyContent='center'>
                            <Button variant="contained" endIcon={<ChevronRightIcon />} color='violet'
                                sx={{
                                    color: 'white',
                                    width: {
                                        xs: '90%',
                                        sm: '90%',
                                        md: '50%',
                                        lg: '50%',
                                    }
                                }}
                                onClick={() => { navigate('/image/guess') }}
                            >
                                Discover image guesser
                            </Button>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Button variant="contained" endIcon={<ChevronRightIcon />} color='violet'
                                sx={{
                                    color: 'white',
                                    width: {
                                        xs: '90%',
                                        sm: '90%',
                                        md: '50%',
                                        lg: '50%',
                                    }
                                }}
                                onClick={() => { navigate('/year/guess') }}
                            >
                                Discover year guesser
                            </Button>
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{
                    width: {
                        xs: '0%',
                        sm: '50%',
                        md: '50%',
                        lg: '50%',
                    },
                }}
                    display='flex'
                    alignItems='center'
                >
                    <ImageList sx={{ width: '90%', height: '100%' }} cols={2}>
                        <ImageListItem key={'sunny'} sx={{ maxWidth: 400, maxHeight: 400 }}>
                            <img
                                src={sunnyImage}
                                alt={'sunny'}
                                style={{ maxWidth: 400, maxHeight: 400 }}
                            />
                            <ImageListItemBar
                                title={'Sunny'}
                            />
                        </ImageListItem>
                        <ImageListItem key={'rainy'} sx={{ maxWidth: 400, maxHeight: 400 }}>
                            <img
                                src={rainyImage}
                                alt={'rainy'}
                                style={{ maxWidth: 400, maxHeight: 400 }}
                            />
                            <ImageListItemBar
                                title={'Rainy'}
                            />
                        </ImageListItem>
                    </ImageList>
                </Box>
            </Stack>
        </Box>
    )
}

export default HomePage
