import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LoadingPage from './LoadingPage';
import { RecordContext } from '../contexts/RecordContext';

const YearResultPage = () => {
    const [data, setData] = useState([]);
    const { rows } = useContext(RecordContext);

    useEffect(() => {

        const sendData = () => {
            console.log(rows);
        }

        sendData();
    }, [])

    return (
        <Box
            sx={{ width: '100%', height: '100%', overflowY: 'auto' }}
        >
            {data.length !== 0 ? (
                <Typography>Hello</Typography>
            ) : <LoadingPage />}
        </Box>
    )
}

export default YearResultPage
