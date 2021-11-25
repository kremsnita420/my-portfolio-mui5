import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            ...amber,
            ...('dark' && {
                main: amber[300],
            }),
        },
        ...('dark' && {
            background: {
                default: deepOrange[900],
                paper: deepOrange[900],
            },
        }),
        text: {
            ...('light'
                ? {
                    primary: grey[900],
                    secondary: grey[800],
                }
                : {
                    primary: '#fff',
                    secondary: grey[500],
                }),
        },
    },
});

export default theme;