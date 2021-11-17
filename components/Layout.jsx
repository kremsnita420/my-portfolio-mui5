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
			...(darkMode === 'light'
				? {
						//light theme
						primary: {
							main: '#3b7a75',
						},
						secondary: {
							main: '#106da3',
						},
						background: {
							paper: '#eee',
							default: '#bdbdbd',
						},
				  }
				: {
						//dark theme
						primary: {
							main: '#f54906',
						},
						secondary: {
							main: '#5ad309',
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
