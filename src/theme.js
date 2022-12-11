import { createTheme } from '@mui/material/styles';

function UrbanTheme(){
    // Create a theme instance.
    const theme = createTheme({
        palette: {
            primary: {
                main: '#7D9113',
            },
            secondary: {
                main: '#7D9113',
            },
        },
        typography: {
            fontFamily: [
              'PT Serif',
              'serif',
            ].join(','),
        },
    });

    return(
        <ThemeProvider theme={theme}></ThemeProvider>
    );
}

export default UrbanTheme;