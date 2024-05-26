import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ParameterTable from '../components/ParameterTable'
import { RecordContext } from '../contexts/RecordContext';
import YearPageStepper from '../components/YearPageStepper';
import YearResultPage from '../components/YearResultPage';

const YearGuesserPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [page, setPage] = useState();
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setPage(pages[activeStep])
    }, [activeStep])

    const pages = [<ParameterTable key='parameterTable' />, <YearResultPage key='yearResult' />]

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
            <Stack spacing={2} sx={{
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
                <RecordContext.Provider value={{ rows, setRows }}>
                    <YearPageStepper activeStep={activeStep} setActiveStep={setActiveStep} />
                    {page}
                </RecordContext.Provider>
            </Stack>
        </Box>
    )
}

export default YearGuesserPage
