import { useContext } from "react"

import { amber, deepOrange, green, grey, red } from '@mui/material/colors'

import { Store } from "./StoreProvider"

//fetch from store provider
const { state } = useContext(Store)
const { darkMode } = state

export const theme = createTheme({
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

    typography: {
        h1: {
            fontSize: '3rem',
            fontWeight: 500,
            margin: '1rem 0',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
            margin: '1rem 0',
        },
    },
    palette: {
        mode: darkMode ? 'dark' : 'light',
        ...(darkMode === false
            ? {
                // palette values for light mode
                primary: {
                    main: amber[400],
                },
                secondary: {
                    main: grey[800],
                },
                divider: grey[200],
                background: {
                    default: grey[100],
                    paper: grey[200],
                },
                text: {
                    primary: grey[800],
                    secondary: grey[700],
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: grey[800],
                },
                secondary: {
                    main: green[700],
                },
                divider: deepOrange[700],
                background: {
                    default: deepOrange[600],
                    paper: deepOrange[600],
                },
                text: {
                    primary: grey[300],
                    secondary: grey[400],
                },
            }),
    },
})