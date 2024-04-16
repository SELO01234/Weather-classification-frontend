import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import StorageIcon from '@mui/icons-material/Storage';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EastIcon from '@mui/icons-material/East';


const uploadImageIcon = (
    <Box sx={{ m: 1, width: 100, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <ImageOutlinedIcon color='violet' fontSize='large' />
    </Box>
);
const processImageIcon = (
    <Box sx={{ m: 1, width: 100, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <StorageIcon color='giantsOrange' fontSize='large' />
    </Box>
);

const rightArrowIcon = (
    <Box sx={{ m: 1, width: 100, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <EastIcon fontSize='large' />
    </Box>
);

const resultIcon = (
    <Box sx={{ m: 1, width: 100, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ChecklistRtlIcon color='success' fontSize='large' />
    </Box>
);

const LoadingPage = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%', alignItems: 'center' }}>
            <Grow in={loading}>{uploadImageIcon}</Grow>
            {/* Conditionally applies the timeout prop to change the entry speed. */}
            <Grow
                in={loading}
                style={{ transformOrigin: '0 0 0' }}
                {...(loading ? { timeout: 500 } : {})}
            >
                {rightArrowIcon}
            </Grow>
            <Grow
                in={loading}
                style={{ transformOrigin: '0 0 0' }}
                {...(loading ? { timeout: 1000 } : {})}
            >
                {processImageIcon}
            </Grow>
            <Grow
                in={loading}
                style={{ transformOrigin: '0 0 0' }}
                {...(loading ? { timeout: 1500 } : {})}
            >
                {rightArrowIcon}
            </Grow>
            <Grow
                in={loading}
                style={{ transformOrigin: '0 0 0' }}
                {...(loading ? { timeout: 2000 } : {})}
            >
                {resultIcon}
            </Grow>
        </Box>
    )
}

export default LoadingPage
