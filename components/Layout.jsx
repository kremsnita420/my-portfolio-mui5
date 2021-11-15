import Head from 'next/head'
import {
	Container,
	ThemeProvider,
	CssBaseline,
	createTheme,
} from '@mui/material'
import classes from '../src/styles'

import Navbar from './header/Appbar'

export default function Layout({ title, description, children }) {
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
				xl: 2000,
			},
		},

		typography: {
			h1: {
				color: '#f0c000',
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
			mode: 'dark',
			primary: {
				main: '#f0c000',
			},
			secondary: {
				main: '#208080',
			},
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
			</ThemeProvider>
		</>
	)
}
