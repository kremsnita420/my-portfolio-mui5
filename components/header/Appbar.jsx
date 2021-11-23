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
	SvgIcon,
	Toolbar,
	Typography,
} from '@mui/material'
import {
	ArrowForwardIosOutlined,
	ArrowBackIosOutlined,
} from '@mui/icons-material'

import MenuItems from '../../data/MenuItems'
import { Store } from '../../src/StoreProvider'
import Cookies from 'js-cookie'
import YellowIntruderSvg from '../svgs/YellowIntruderSvg'
import BlackIntruderSvg from '../svgs/BlackIntruderSvg'
import Logo from './Logo'
import HoverUnderline from '../../components/svgs/HoverUnderline'
import CustomLink from './CustomLink'
import StyledButtonCustomization from './CustomLink'
import HoverCrossed from '../svgs/HoverCrossed'

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
					<Logo />

					<Box style={{ flexGrow: '1' }} />

					{/* main navigation buttons */}
					<Box sx={{ display: { md: 'block', xs: 'none' } }}>
						{MenuItems.map((item) => (
							<NextLink key={item.id} href={item.url} passHref>
								<Link>
									<Button>{item.label}</Button>
								</Link>
							</NextLink>
						))}
					</Box>

					{/* darkmode */}
					<IconButton
						sx={{
							'&:hover': {
								background: 'transparent',
							},
						}}
						size='small'
						onClick={darkModeChangeHandler}
						color='inherit'>
						{darkModeState ? <YellowIntruderSvg /> : <BlackIntruderSvg />}
					</IconButton>

					{/* sidebar icon toggle */}
					<Button
						sx={{
							lineHeight: 1,
							display: {
								md: 'none',
								xs: 'block',
							},
							'&:hover': {
								background: 'transparent',
							},
						}}
						edge='end'
						color='primary'
						aria-label='open drawer'
						onClick={sidebarOpenHandler}>
						<ArrowBackIosOutlined />
					</Button>

					{/* sidebar drawer */}
					<Drawer
						PaperProps={{
							sx: { width: '100%', height: '100%' },
						}}
						anchor='right'
						open={sidebarVisible}
						onClose={sidebarCloseHandler}>
						<Container
							maxWidth='xs'
							sx={{
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							{/* sidebar close icon toggle */}
							<Box>
								<Button
									sx={{
										'&:hover': {
											background: 'transparent',
										},
									}}
									edge='end'
									color='primary'
									aria-label='close drawer'
									onClick={sidebarCloseHandler}>
									<ArrowForwardIosOutlined />
								</Button>
							</Box>
							{/* side navigation buttons */}
							{MenuItems.map((item) => (
								<NextLink key={item.id} href={item.url} passHref>
									<Link>
										{router.pathname === item.url ? (
											<StyledButtonCustomization>
												{item.label}
												<HoverCrossed />
											</StyledButtonCustomization>
										) : (
											<StyledButtonCustomization>
												{item.label}
												<HoverUnderline />
											</StyledButtonCustomization>
										)}
									</Link>
								</NextLink>
							))}
						</Container>
					</Drawer>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

// MAKE CART RENDER ON CLIENTSIDE
export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
