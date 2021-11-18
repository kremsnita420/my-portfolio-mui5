import Head from 'next/head'
import {
	Container,
	ThemeProvider,
	CssBaseline,
	createTheme,
} from '@mui/material'
import Navbar from './header/Appbar'
import classes from '../src/styles'

import { useContext } from 'react'
import { Store } from '../src/StoreProvider'
import Footer from './footer/Footer'
import { amber, deepOrange, green, grey, red } from '@mui/material/colors'

export default function Layout({ title, description, children }) {
	//fetch from store provider
	const { state } = useContext(Store)
	const { darkMode } = state

	const theme = createTheme({
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
							main: grey[400],
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
							main: amber[100],
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

	return (
		<>
			<Head>
				<title>{title ? `${title} - My Portfolio` : 'My Portfolio'}</title>
				{description && <meta name='description' content={description} />}
			</Head>

			<ThemeProvider theme={theme}>
				<Navbar />
				<CssBaseline />
				<Container maxWidth='xl' sx={classes.main}>
					{children}
				</Container>
				<Footer />
			</ThemeProvider>
		</>
	)
}
