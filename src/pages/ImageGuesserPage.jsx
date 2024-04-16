import React, { useEffect, useState } from 'react'
import CustomStepper from '../components/CustomStepper';
import Dropzone from '../components/Dropzone';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ImageResultPage from '../components/ImageResultPage';
import { FileContext } from '../contexts/FileContext'

const ImageGuesserPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [page, setPage] = useState();
    const [files, setFiles] = useState([]);

    useEffect(() => {
        setPage(pages[activeStep])
    }, [activeStep])

    const pages = [<Dropzone key='dropzone' />, <ImageResultPage key='image_result_page' />]
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
                <FileContext.Provider value={{ files, setFiles }}>
                    <CustomStepper activeStep={activeStep} setActiveStep={setActiveStep} />
                    {page}
                </FileContext.Provider>
            </Stack>
        </Box>
    )
}

export default ImageGuesserPage
