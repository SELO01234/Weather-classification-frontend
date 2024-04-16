import { useDropzone } from 'react-dropzone'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import "../App.css"
import PropTypes from 'prop-types';
import React, { useCallback, useContext } from 'react'
import { FileContext } from '../contexts/FileContext';



const Dropzone = () => {

    const { files, setFiles } = useContext(FileContext)

    const onDrop = useCallback(acceptedFiles => {
        setFiles(previousFiles => [
            ...previousFiles,
            ...acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))
        ])
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg', '.jpg'],
        }
    })

    const removeFile = (name) => {
        setFiles(files => files.filter(file => file.name !== name))
    }

    return (
        <Box sx={{ width: '100%', height: '35%' }}>
            <Box
                className={`dragndrop ${isDragActive ? 'dragActive' : ''}`}
                sx={{ borderRadius: 2, marginLeft: 1, marginRight: 1 }}
                {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <Typography sx={{ color: '#784af4' }}>Drop the file here ...</Typography> :
                        <Box>
                            <CloudUploadIcon color='violet' />
                            <Typography sx={{ color: '#784af4' }}>Drag 'n' drop a file here, or click to select file</Typography>
                        </Box>
                }
            </Box>
            <Box sx={{ margin: 2 }}>
                <ImageList
                    gap={1}

                    sx={{ width: { xs: 280, sm: 480, md: 885, lg: 1180, }, height: { xs: 300, sm: 300, md: 300, lg: 450, } }}>
                    {
                        files.length === 0 ?
                            <ImageListItem></ImageListItem> :
                            files.map(file => (
                                <ImageListItem key={file.name}>
                                    <img src={file.preview} alt={file.name} style={{ maxWidth: 300, maxHeight: 300 }} />
                                    <ImageListItemBar
                                        position='top'
                                        title={file.name}
                                        sx={{
                                            maxWidth: 300, marginLeft: 'auto', marginRight: 'auto',
                                            background:
                                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                        }}
                                        actionIcon={
                                            <IconButton
                                                sx={{
                                                    backgroundColor: '#ed3749',
                                                    '&:hover': { color: '#ed3749', border: '1px solid #ed3749', backgroundColor: 'white' },
                                                }}
                                                size='small'
                                                color='closebutton'
                                                onClick={() => removeFile(file.name)}
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            ))
                    }
                </ImageList>
            </Box>
        </Box>
    )
}

export default Dropzone
