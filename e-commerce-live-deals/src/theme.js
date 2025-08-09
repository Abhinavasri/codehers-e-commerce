import { createTheme } from '@mui/material/styles'

// A modern, slightly warm theme: teal primary + deep orange accent
const theme = createTheme({
  palette: {
    primary: {
      main: '#088F8F', // teal
      contrastText: '#fff'
    },
    secondary: {
      main: '#FF7A45', // orange accent
      contrastText: '#fff'
    },
    background: {
      default: '#F6F8FA',
      paper: '#fff'
    }
  },
  typography: {
    fontFamily: 'Inter, Roboto, Helvetica, Arial, sans-serif',
    h1: { fontWeight: 700, fontSize: '2rem' },
    h2: { fontWeight: 700, fontSize: '1.5rem' }
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 12, textTransform: 'none' }
      }
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 12 } }
    }
  }
})

export default theme