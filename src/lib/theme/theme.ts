import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1586fd',
    },
    secondary: {
      main: '#666f73',
    },
  },
  components :{
    MuiButton:{
        defaultProps :{
            variant :'outlined'
        },
        styleOverrides :{
            root :{
                padding :'8px 24px'
            }
        }
    },
    MuiContainer:{
        defaultProps :{
            maxWidth :'lg'
        }
    }
  }
});
