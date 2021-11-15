import { useState } from 'react'
import {
	AppBar,
	Button,
	Container,
	Drawer,
	Link,
	Toolbar,
	Typography,
} from '@mui/material'
import {
	ArrowForwardIosOutlined,
	ArrowBackIosOutlined,
} from '@mui/icons-material'
import NextLink from 'next/link'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import MenuItems from './MenuItems'

export default function Navbar() {
	const [sidebarVisible, setSidebarVisible] = useState()
	const router = useRouter()

	//open-close sidebar
	const sidebarOpenHandler = () => {
		setSidebarVisible(true)
	}
	const sidebarCloseHandler = () => {
		setSidebarVisible(false)
	}
	return (
		<AppBar position='relative'>
			<Container maxWidth='md'>
				<Toolbar>
					{/* logo */}
					<Typography variant='h4' component='div'>
						<NextLink href='/' passHref>
							<Link>
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
											sx={{
												fontFamily: 'Odibee Sans',
												letterSpacing: '2px',
												fontSize: '1.5rem',
											}}
											variant='outlined'>
											{item.label}
										</Button>
									) : (
										<Button
											color='secondary'
											sx={{
												fontFamily: 'Odibee Sans',
												letterSpacing: '2px',
												fontSize: '1rem',
											}}>
											{item.label}
										</Button>
									)}
								</Link>
							</NextLink>
						))}
					</Box>

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
						anchor='right'
						open={sidebarVisible}
						onClose={sidebarCloseHandler}>
						{/* sidebar icon toggle */}
						<Box>
							<Button
								edge='end'
								color='secondary'
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
													variant='outlined'
													size='large'
													sx={{
														margin: ' 10px 50px',
														textAlign: 'center',
														minWidth: '160px',
														fontFamily: 'Odibee Sans',
														letterSpacing: '2px',
														fontSize: '1.5rem',
													}}>
													{item.label}
												</Button>
											) : (
												<Button
													color='secondary'
													size='large'
													sx={{
														margin: '10px 50px',
														border: '1px solid transparent',
														minWidth: '160px',
														fontFamily: 'Odibee Sans',
														letterSpacing: '2px',
														fontSize: '1rem',
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
