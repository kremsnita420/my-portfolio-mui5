import { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box } from '@mui/system'
import { AppBar, Button, Container, Drawer, Link, Toolbar } from '@mui/material'

import MenuItems from '../../data/MenuItems'
import { Store } from '../../src/StoreProvider'
import BackArrow from '../svgs/BackArrow'
import HoverUnderline from '../../components/svgs/HoverUnderline'
import StyledButtonCustomization from './CustomLink'
import StyledSidebarButton from './CustomSidebarLink'
import HoverCrossed from '../svgs/HoverCrossed'
import HamburgerMenu from '../svgs/HamburgerMenu'
import SunIcon from '../svgs/SunIcon'
import MoonIcon from '../svgs/MoonIcon'
import NavbarLogoSvg from '../svgs/hero/NavbarLogoSvg'

export default function Navbar() {
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
		if (typeof window !== 'undefined') {
			localStorage.setItem('darkMode', newDarkMode ? 'ON' : 'OFF')
		}
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
		<AppBar sx={{ zIndex: 100 }} position='relative' color='info'>
			<Container maxWidth='lg'>
				<Toolbar
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}>
					{/* logo */}
					<Box>
						<NextLink href='/' passHref>
							<Link>
								<NavbarLogoSvg />
							</Link>
						</NextLink>
					</Box>
					{/* main navigation buttons */}
					<Box sx={{ display: { md: 'block', xs: 'none' } }}>
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
					</Box>

					{/* darkmode */}
					<Box>
						<Button
							sx={{
								'&:hover': {
									background: 'transparent',
								},
							}}
							onClick={darkModeChangeHandler}
							color='inherit'>
							{darkModeState ? <MoonIcon /> : <SunIcon />}
						</Button>
					</Box>

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
						<HamburgerMenu />
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
							maxWidth='sm'
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
									<BackArrow />
								</Button>
							</Box>
							{/* side navigation buttons */}
							{MenuItems.map((item) => (
								<NextLink key={item.id} href={item.url} passHref>
									<Link>
										{router.pathname === item.url ? (
											<StyledSidebarButton>
												{item.label}
												<HoverCrossed />
											</StyledSidebarButton>
										) : (
											<StyledSidebarButton>
												{item.label}
												<HoverUnderline />
											</StyledSidebarButton>
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
//export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
