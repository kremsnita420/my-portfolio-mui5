import Head from 'next/head'
import {
	Container,
	ThemeProvider,
	CssBaseline,
	createTheme,
} from '@mui/material'
import Appbar from '../header/Appbar'

import { useContext } from 'react'
import { Store } from '../../src/StoreProvider'
import Footer from '../footer/Footer'
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
			fontFamily: 'Big Shoulders Display',

			h1: {
				fontFamily: 'Odibee Sans',
				fontSize: '3rem',
				fontWeight: 500,
				margin: '1rem 0',
				letterSpacing: '3px',
			},
			h2: {
				fontFamily: 'Odibee Sans',
				fontSize: '2rem',
				fontWeight: 500,
				margin: '1rem 0',
			},
			p: {
				fontWeight: 300,
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

	return (
		<>
			<Head>
				<title>{title ? `${title} - My Portfolio` : 'My Portfolio'}</title>
				{description && <meta name='description' content={description} />}
			</Head>

			<ThemeProvider theme={theme}>
				<Appbar />
				<CssBaseline />
				<Container
					maxWidth='xl'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'flex-start',
						minHeight: '87.5vh',

						'& > *': {
							m: 2,
						},
					}}>
					{children}
				</Container>
				<Footer />
			</ThemeProvider>
		</>
	)
}
