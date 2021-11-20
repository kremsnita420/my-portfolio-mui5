import { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import {
	AppBar,
	Button,
	Container,
	Drawer,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from '@mui/material'
import {
	ArrowForwardIosOutlined,
	ArrowBackIosOutlined,
} from '@mui/icons-material'

import MenuItems from './MenuItems'
import { Store } from '../../src/StoreProvider'
import Cookies from 'js-cookie'

function Navbar() {
	//fetch from store provider
	const { state, dispatch } = useContext(Store)
	const { darkMode } = state
	//states
	const [darkModeState, setDarkModeState] = useState(null)
	const [sidebarVisible, setSidebarVisible] = useState(false)

	const router = useRouter()

	//darkmode handler
	const darkModeChangeHandler = () => {
		dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' })
		const newDarkMode = !darkMode
		setDarkModeState(newDarkMode)
		Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF')
	}
	useEffect(() => {
		setDarkModeState(darkMode)
	}, [darkMode])

	//open-close sidebar
	const sidebarOpenHandler = () => {
		setSidebarVisible(true)
	}
	const sidebarCloseHandler = () => {
		setSidebarVisible(false)
	}

	return (
		<AppBar sx={{ zIndex: 100 }} position='relative' color='secondary'>
			<Container maxWidth='md'>
				<Toolbar>
					{/* logo */}
					<Typography variant='h4' component='div'>
						<NextLink href='/' passHref>
							<Link color='primary'>
								{`<`}
								<span style={{ color: '#eee' }}>{` SafetDev `}</span>
								{`/>`}
							</Link>
						</NextLink>
					</Typography>

					<Box style={{ flexGrow: '1' }} />

					{/* main navigation buttons */}
					<Box sx={{ display: { md: 'block', xs: 'none' } }}>
						{MenuItems.map((item) => (
							<NextLink key={item.id} href={item.url} passHref>
								<Link style={{ textDecoration: 'none' }}>
									{router.asPath === item.url ? (
										<Button
											size='large'
											sx={{
												borderBottom: '5px solid',
											}}
											color='primary'>
											{item.label}
										</Button>
									) : (
										<Button
											sx={{
												borderBottom: '5px solid transparent',
											}}
											size='large'
											color='primary'>
											{item.label}
										</Button>
									)}
								</Link>
							</NextLink>
						))}
					</Box>

					{/* darkmode */}
					<Button size='small' onClick={darkModeChangeHandler} color='inherit'>
						{darkModeState ? 'light' : 'dark '}
					</Button>

					{/* sidebar icon toggle */}
					<Box display='flex' alignItems='center'>
						<Button
							sx={{ display: { md: 'none', xs: 'block' } }}
							edge='end'
							color='primary'
							aria-label='open drawer'
							onClick={sidebarOpenHandler}>
							<ArrowBackIosOutlined />
						</Button>
					</Box>

					{/* sidebar drawer */}
					<Drawer
						sx={{ width: '100%' }}
						anchor='right'
						open={sidebarVisible}
						onClose={sidebarCloseHandler}>
						{/* sidebar icon toggle */}
						<Box>
							<Button
								edge='end'
								color='primary'
								aria-label='close drawer'
								onClick={sidebarCloseHandler}>
								<ArrowForwardIosOutlined />
							</Button>
						</Box>
						{/* side navigation buttons */}
						<Box>
							{MenuItems.map((item) => (
								<Box key={item.id}>
									<NextLink href={item.url} passHref>
										<Link>
											{router.asPath === item.url ? (
												<Button
													color='primary'
													size='large'
													sx={{
														margin: ' 10px 50px',
														textAlign: 'center',
														minWidth: '160px',
														letterSpacing: '2px',
														fontSize: '1.5rem',
														borderBottom: '5px solid',
													}}>
													{item.label}
												</Button>
											) : (
												<Button
													color='primary'
													size='large'
													sx={{
														margin: '10px 50px',
														border: '1px solid transparent',
														minWidth: '160px',
														letterSpacing: '2px',
														fontSize: '1rem',
														borderBottom: '5px solid transparent',
													}}>
													{item.label}
												</Button>
											)}
										</Link>
									</NextLink>
								</Box>
							))}
						</Box>
					</Drawer>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

// MAKE CART RENDER ON CLIENTSIDE
export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
