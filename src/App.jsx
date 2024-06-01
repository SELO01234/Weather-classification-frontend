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
import YearGuesserPage from './pages/YearGuesserPage';
import HomePage from './pages/HomePage';

const lightTheme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&.Mui-selected": {
            backgroundColor: alpha('#784af4', 0.5),
            "&:hover": {
              backgroundColor: alpha('#784af4', 0.5)
            }
          }
        }
      }
    }
  },
  palette: {
    violet: {
      main: '#784af4',
      light: alpha('#784af4', 0.5),
      dark: alpha('#784af4', 0.9),
    },
    suncolor: {
      main: '#FFDF22'
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
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/image/guess' element={<ImageGuesserPage />} />
          <Route path='/year/guess' element={<YearGuesserPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App

