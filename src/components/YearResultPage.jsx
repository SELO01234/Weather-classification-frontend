import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Button, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Typography from '@mui/material/Typography';
import LoadingPage from './LoadingPage';
import { RecordContext } from '../contexts/RecordContext';
import YearPredictService from '../services/YearPredictService';

const YearResultPage = () => {
    const [datas, setDatas] = useState([]);
    const { rows } = useContext(RecordContext);

    useEffect(() => {

        const sendData = async () => {

            try {
                const response = await YearPredictService.predictWeather(rows);

                const responseData = response.data;
                console.log(response.data)

                setDatas(responseData)
            }
            catch (error) {
                console.log(error)
            }
        }

        sendData();
    }, [])

    return (
        <Box
            sx={{ width: '100%', height: '100%', overflowY: 'auto' }}
        >
            {datas.length !== 0 ? (
                datas.map((data) => (
                    <Card key={data.id} variant='outlined' sx={{ marginBottom: 1 }}>
                        <CardContent>
                            <Stack direction="row" spacing={2}>
                                <Typography variant="h5" component="div">
                                    id: {data.id}
                                </Typography>
                                <Typography variant="h6">
                                    weather: {data.condition}
                                </Typography>
                                <Box marginTop={2}>
                                    {data.condition === 'clear-day' ? (
                                        <WbSunnyIcon fontSize="large" color='suncolor' />
                                    ) : data.condition === 'partly-cloudy-day' ? (
                                        <CloudIcon fontSize="large" />
                                    ) : data.condition === 'rain' ? (
                                        <ThunderstormIcon fontSize="large" />
                                    ) : (
                                        <CloudIcon fontSize="large" />
                                    )}
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                ))
            ) : <LoadingPage />}
        </Box>
    )
}

export default YearResultPage
