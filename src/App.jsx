import React from 'react'
import ImageGuesserPage from './pages/ImageGuesserPage';
import {
  createTheme,
  ThemeProvider,
  alpha
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';

const lightTheme = createTheme({
  palette: {
    violet: {
      main: '#784af4',
      light: alpha('#784af4', 0.5),
      dark: alpha('#784af4', 0.9),
    },
    closebutton: {
      main: '#f0f2f5',
      light: alpha('#f0f2f5', 0.5),
      dark: alpha('#f0f2f5', 0.9),
    },
    giantsOrange: {
      main: '#F46036',
      light: alpha('#F46036', 0.5),
      dark: alpha('#F46036', 0.9),
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <NavBar />
        <Routes>
          <Route path='/' element={<ImageGuesserPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App

