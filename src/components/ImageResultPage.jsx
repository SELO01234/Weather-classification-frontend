import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LoadingPage from './LoadingPage';
import ImageService from '../services/ImageService';
import { FileContext } from '../contexts/FileContext';

const ImageResultPage = () => {

    const [data, setData] = useState([]);
    const { files } = useContext(FileContext)

    useEffect(() => {

        const sendData = async () => {
            try {
                const response = await ImageService.sendImages(files);

                const responseData = response.data;

                setData([])
                // Update the state array
                setData((prevDataArray) => [...prevDataArray, responseData]);
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
            {data.length !== 0 ? (
                data.map((item, index) => (
                    <Box key={index} sx={{ width: '100%', height: '100%' }}>
                        {/* Iterate over each key-value pair in the object */}
                        {Object.entries(item).map(([key, value]) => (
                            <Card key={key} variant='outlined' sx={{ maxWidth: 350, maxHeight: 400, margin: '0 auto', marginTop: 1 }}>
                                <CardMedia
                                    component="img"
                                    image={(files.find((file) => file.path === key)).preview}
                                    sx={{ maxWidth: 350, maxHeight: 300 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {key}
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary">
                                        {value}
                                    </Typography>
                                </CardContent>
                            </Card>

                        ))}
                    </Box>
                ))
            ) : <LoadingPage />}
        </Box>
    )
}

export default ImageResultPage
