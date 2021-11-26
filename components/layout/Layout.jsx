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

import {
	amber,
	blue,
	deepOrange,
	green,
	grey,
	orange,
	red,
	purple,
} from '@mui/material/colors'
import StyledHeroBg from '../svgs/hero/StyledHeroBg'
import { createGenerateClassName, StylesProvider } from '@mui/styles'
const generateClassName = createGenerateClassName({
	productionPrefix: 'c',
})

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
			MuiButtonBase: {
				defaultProps: {
					// The props to apply
					disableRipple: true, // No more ripple, on the whole application
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
							main: grey[300],
						},
						warning: {
							main: red[800],
						},
						info: {
							main: blue[300],
						},
						divider: grey[600],
						background: {
							default: grey[300],
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
							main: purple[400],
						},
						secondary: {
							main: grey[700],
						},
						warning: {
							main: orange[900],
						},
						info: {
							main: deepOrange[400],
						},
						success: {
							main: green[900],
						},
						divider: deepOrange[700],
						background: {
							default: grey[700],
							paper: grey[900],
						},
						text: {
							primary: green[100],
							secondary: green[400],
						},
				  }),
		},
	})

	return (
		<>
			<Head>
				<title>{title ? `${title} - My Portfolio` : 'My Portfolio'}</title>
				{description && <meta name='description' content={description} />}
				{/* PWA primary color */}
				<meta name='theme-color' content={theme.palette.primary.main} />
			</Head>
			<StylesProvider generateClassName={generateClassName}>
				<ThemeProvider theme={theme}>
					<Appbar />
					<CssBaseline />
					<Container
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'flex-start',
							minHeight: '87.5vh',
						}}>
						<StyledHeroBg />
						<StyledHeroBg />
						{children}
					</Container>
				</ThemeProvider>
			</StylesProvider>
		</>
	)
}
