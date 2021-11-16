import Head from 'next/head'
import {
	Container,
	ThemeProvider,
	CssBaseline,
	createTheme,
} from '@mui/material'
import classes from '../src/styles'

import Navbar from './header/Appbar'
import { useContext } from 'react'
import { Store } from '../src/StoreProvider'

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
			primary: {
				main: '#027955',
			},
			secondary: {
				main: '#7684ff',
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
