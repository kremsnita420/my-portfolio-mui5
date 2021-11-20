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
					<IconButton
						size='small'
						onClick={darkModeChangeHandler}
						color='inherit'>
						{darkModeState ? (
							<svg
								width='69'
								height='51'
								viewBox='0 0 69 51'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<g clipPath='url(#clip0_0_1)'>
									<path
										d='M8.57273 50C8.28997 50.0361 8.00283 50.0145 7.72865 49.9366C7.45446 49.8586 7.19891 49.7259 6.97742 49.5465C6.75593 49.367 6.57309 49.1446 6.43995 48.8925C6.3068 48.6405 6.2261 48.3641 6.20273 48.08C6.04273 44.08 5.78273 31.9 6.78273 23.53C6.89836 22.5526 7.37031 21.652 8.1083 21.0008C8.84628 20.3495 9.79849 19.9932 10.7827 20H15.7127C17.7885 19.9988 19.7835 20.8045 21.2762 22.2469C22.769 23.6893 23.6427 25.6554 23.7127 27.73C23.8727 33.61 23.7927 41.62 23.4627 47.13C23.4297 47.6376 23.2044 48.1135 22.8329 48.4609C22.4613 48.8083 21.9714 49.0011 21.4627 49H19.5727C19.2904 49.0275 19.0054 48.9967 18.7354 48.9095C18.4654 48.8223 18.2163 48.6805 18.0034 48.4929C17.7906 48.3054 17.6185 48.0761 17.498 47.8193C17.3774 47.5624 17.311 47.2836 17.3027 47V43H13.3027V47C13.3027 47.7957 12.9867 48.5587 12.4241 49.1213C11.8614 49.6839 11.0984 50 10.3027 50H8.57273Z'
										fill='#C38822'
									/>
									<path
										d='M6.43272 27V27.11C6.30272 28.27 6.30272 29.47 6.21272 30.72C6.06272 33.83 6.01273 39.26 6.06273 42.98H5.96272H3.14272C2.63407 42.9811 2.14411 42.7883 1.77256 42.4409C1.40101 42.0935 1.17579 41.6176 1.14272 41.11C0.956657 37.8587 0.976697 34.5988 1.20272 31.35C1.29272 30.35 1.41272 29.47 1.57272 28.62C1.66119 28.1629 1.90636 27.7509 2.26598 27.4552C2.6256 27.1595 3.07713 26.9985 3.54272 27H6.39272H6.43272Z'
										fill='#C38822'
									/>
									<path
										d='M6.43272 27V27.11C6.30272 28.27 6.30272 29.47 6.21272 30.72C6.21272 30.81 6.21272 30.9 6.21272 31H3.41272C2.93915 30.9923 2.4782 31.1529 2.11195 31.4532C1.7457 31.7535 1.49792 32.1741 1.41272 32.64C1.25272 33.49 1.13272 34.41 1.04272 35.37C1.04272 35.59 1.04272 37.81 1.04272 38.03C1.04272 36.41 1.04272 32.84 1.22272 31.37C1.31272 30.37 1.43272 29.49 1.59272 28.64C1.67641 28.1826 1.91688 27.7686 2.27277 27.4693C2.62866 27.17 3.07772 27.004 3.54272 27H6.39272H6.43272ZM18.4627 40H13.1027C11.3027 40 9.71272 36.83 9.21272 35.11C7.99827 30.774 7.6416 26.2426 8.16272 21.77C8.21265 21.5579 8.33052 21.3678 8.4984 21.2288C8.66628 21.0898 8.87498 21.0095 9.09272 21C10.7627 20.34 13.4027 20.36 16.2227 20.52C17.1103 20.4621 18 20.5931 18.8332 20.9044C19.6664 21.2156 20.4241 21.7 21.0564 22.3256C21.6886 22.9513 22.1809 23.7038 22.5009 24.5337C22.8209 25.3636 22.9613 26.2519 22.9127 27.14L22.5127 34.22C22.3927 36.32 20.6227 40 18.4627 40Z'
										fill='#F4F457'
									/>
									<path
										d='M25.7827 29.9C25.7168 30.6304 25.4387 31.3256 24.9827 31.9C24.6696 32.2914 24.2786 32.6135 23.8344 32.8458C23.3903 33.0782 22.9028 33.2159 22.4027 33.25L16.2027 33.69H15.9427C14.985 33.6875 14.0667 33.3086 13.3857 32.6352C12.7048 31.9617 12.3158 31.0476 12.3027 30.09V28C12.3027 27.4696 12.5134 26.9609 12.8885 26.5858C13.2636 26.2107 13.7723 26 14.3027 26H22.1427C23.0176 26.0044 23.8621 26.3212 24.524 26.8933C25.1859 27.4653 25.6216 28.255 25.7527 29.12C25.7877 29.3784 25.7977 29.6396 25.7827 29.9V29.9Z'
										fill='#4A646D'
									/>
									<path
										d='M25.7827 29.9C25.3547 30.1226 24.8844 30.2521 24.4027 30.28L18.2027 30.72H17.9427C16.9799 30.7174 16.0571 30.3344 15.3753 29.6545C14.6935 28.9746 14.308 28.0528 14.3027 27.09V26H22.1427C23.0176 26.0044 23.8621 26.3212 24.524 26.8933C25.1859 27.4653 25.6216 28.255 25.7527 29.12C25.7877 29.3784 25.7977 29.6396 25.7827 29.9V29.9Z'
										fill='#93C8DA'
									/>
									<path
										d='M22.4927 27.57H19.6527C19.2109 27.57 18.8527 27.9282 18.8527 28.37C18.8527 28.8118 19.2109 29.17 19.6527 29.17H22.4927C22.9346 29.17 23.2927 28.8118 23.2927 28.37C23.2927 27.9282 22.9346 27.57 22.4927 27.57Z'
										fill='white'
									/>
									<path
										d='M26.7427 29C26.6329 28.2772 26.3549 27.5903 25.9311 26.9945C25.5073 26.3987 24.9495 25.9108 24.3027 25.57C23.7627 23.6921 22.6312 22.0385 21.0765 20.8549C19.5217 19.6712 17.6266 19.0207 15.6727 19H10.7427C9.52141 19.0037 8.34368 19.4542 7.43177 20.2667C6.51986 21.0791 5.93684 22.1972 5.79273 23.41C5.68273 24.27 5.60273 25.15 5.52273 26C5.4495 25.9944 5.37595 25.9944 5.30273 26H3.54273C2.83236 25.9884 2.14094 26.2293 1.59156 26.6798C1.04218 27.1303 0.670515 27.7611 0.542727 28.46C-0.00421846 32.6836 -0.138185 36.9504 0.142727 41.2C0.193537 41.9605 0.531901 42.6731 1.0891 43.1932C1.6463 43.7132 2.38055 44.0017 3.14273 44H5.08273C5.08273 45.69 5.16273 47.1 5.20273 48.12C5.22904 48.5325 5.33785 48.9355 5.52271 49.3052C5.70757 49.6749 5.96473 50.0038 6.27896 50.2723C6.59319 50.5409 6.9581 50.7436 7.3521 50.8686C7.74609 50.9936 8.16116 51.0383 8.57273 51H10.3027C11.3636 51 12.381 50.5786 13.1312 49.8284C13.8813 49.0783 14.3027 48.0609 14.3027 47V44H16.3027V47C16.3127 47.4142 16.4061 47.8221 16.5774 48.1994C16.7487 48.5766 16.9944 48.9154 17.2997 49.1955C17.605 49.4756 17.9636 49.6912 18.3542 49.8294C18.7448 49.9677 19.1592 50.0257 19.5727 50H21.4227C22.1865 50.0015 22.9221 49.7117 23.4796 49.1895C24.0371 48.6674 24.3744 47.9523 24.4227 47.19C24.6427 43.44 24.7527 37.5 24.7527 33.46C25.1267 33.2085 25.4634 32.9056 25.7527 32.56C26.1497 32.0643 26.4421 31.4932 26.6123 30.8814C26.7824 30.2695 26.8268 29.6295 26.7427 29V29ZM3.14273 42C2.88759 42.0005 2.64192 41.9034 2.45602 41.7286C2.27011 41.5539 2.15803 41.3147 2.14273 41.06C1.87543 36.9731 2.01276 32.8699 2.55273 28.81C2.59741 28.5789 2.7222 28.3709 2.90512 28.2228C3.08804 28.0746 3.31737 27.9957 3.55273 28H5.36273C5.07273 32.22 5.02273 38.5 5.05273 42H3.14273ZM22.4227 47.07C22.405 47.3229 22.2918 47.5596 22.1062 47.7323C21.9205 47.9049 21.6762 48.0006 21.4227 48H19.5727C18.8127 48 18.3027 47.6 18.3027 47V44C18.5679 44 18.8223 43.8946 19.0098 43.7071C19.1974 43.5196 19.3027 43.2652 19.3027 43C19.3027 42.7348 19.1974 42.4804 19.0098 42.2929C18.8223 42.1054 18.5679 42 18.3027 42H14.3027C13.7723 42 13.2636 42.2107 12.8885 42.5858C12.5134 42.9609 12.3027 43.4696 12.3027 44V47C12.3027 47.5304 12.092 48.0391 11.7169 48.4142C11.3419 48.7893 10.8332 49 10.3027 49H8.57273C7.75273 49 7.22273 48.63 7.20273 48C7.04273 44.05 6.77273 32 7.77273 23.61C7.85888 22.8765 8.2126 22.2005 8.76614 21.7115C9.31969 21.2225 10.0342 20.955 10.7727 20.96H15.7027C17.0232 20.9646 18.3154 21.3427 19.4302 22.0505C20.545 22.7583 21.4368 23.7669 22.0027 24.96H14.3027C13.5071 24.96 12.744 25.2761 12.1814 25.8387C11.6188 26.4013 11.3027 27.1644 11.3027 27.96V30.05C11.3027 31.2806 11.7916 32.4608 12.6618 33.331C13.5319 34.2011 14.7121 34.69 15.9427 34.69H16.3027L22.5027 34.25H22.7727C22.7327 38 22.6327 43.6 22.4227 47.07ZM24.2027 31.31C23.9775 31.5974 23.6949 31.8347 23.373 32.0068C23.051 32.179 22.6968 32.2822 22.3327 32.31L16.1327 32.75C15.7688 32.7822 15.4021 32.7364 15.0572 32.6157C14.7123 32.495 14.3972 32.3021 14.1327 32.05C13.8644 31.8 13.6519 31.4962 13.5088 31.1585C13.3658 30.8207 13.2956 30.4567 13.3027 30.09V28C13.3027 27.7348 13.4081 27.4804 13.5956 27.2929C13.7832 27.1054 14.0375 27 14.3027 27H22.1427C22.6419 27.0011 23.1307 27.1431 23.5527 27.4098C23.9747 27.6764 24.3128 28.0568 24.528 28.5072C24.7433 28.9576 24.827 29.4596 24.7694 29.9555C24.7119 30.4514 24.5154 30.9209 24.2027 31.31V31.31Z'
										fill='black'
									/>
								</g>
								<path
									d='M22.6866 24.0166L23.9184 14.075L30.3037 17.5103L22.6866 24.0166Z'
									fill='#C4C4C4'
								/>
								<ellipse
									cx='43.2112'
									cy='10.3762'
									rx='24.2112'
									ry='10.3762'
									fill='#C4C4C4'
								/>
								<path
									d='M25.66 8.792V10.808C25.66 11.456 25.956 11.78 26.548 11.78C27.004 11.78 27.304 11.564 27.448 11.132C27.488 10.996 27.536 10.904 27.592 10.856C27.656 10.808 27.756 10.784 27.892 10.784H30.34C30.412 10.784 30.472 10.812 30.52 10.868C30.576 10.916 30.604 10.976 30.604 11.048C30.604 11.744 30.404 12.328 30.004 12.8C29.268 13.68 28.12 14.12 26.56 14.12C25.336 14.12 24.36 13.852 23.632 13.316C22.904 12.772 22.54 11.94 22.54 10.82V8.78C22.54 7.684 22.912 6.86 23.656 6.308C24.4 5.756 25.368 5.48 26.56 5.48C28.12 5.48 29.268 5.92 30.004 6.8C30.404 7.272 30.604 7.856 30.604 8.552C30.604 8.624 30.576 8.688 30.52 8.744C30.472 8.792 30.412 8.816 30.34 8.816H27.892C27.764 8.816 27.668 8.792 27.604 8.744C27.548 8.696 27.496 8.604 27.448 8.468C27.296 8.036 26.996 7.82 26.548 7.82C25.956 7.82 25.66 8.144 25.66 8.792ZM34.7928 11.54H38.1168C38.2048 11.54 38.2808 11.572 38.3448 11.636C38.4088 11.7 38.4408 11.776 38.4408 11.864V13.676C38.4408 13.764 38.4088 13.84 38.3448 13.904C38.2808 13.968 38.2048 14 38.1168 14H32.0688C31.9808 14 31.9048 13.968 31.8408 13.904C31.7768 13.84 31.7448 13.764 31.7448 13.676V5.924C31.7448 5.836 31.7768 5.76 31.8408 5.696C31.9048 5.632 31.9808 5.6 32.0688 5.6H34.4688C34.5568 5.6 34.6328 5.632 34.6968 5.696C34.7608 5.76 34.7928 5.836 34.7928 5.924V11.54ZM42.2981 14H39.8501C39.7621 14 39.6861 13.968 39.6221 13.904C39.5581 13.84 39.5261 13.764 39.5261 13.676V5.924C39.5261 5.836 39.5581 5.76 39.6221 5.696C39.6861 5.632 39.7621 5.6 39.8501 5.6H42.2981C42.3861 5.6 42.4621 5.632 42.5261 5.696C42.5901 5.76 42.6221 5.836 42.6221 5.924V13.676C42.6221 13.764 42.5901 13.84 42.5261 13.904C42.4621 13.968 42.3861 14 42.2981 14ZM47.0584 8.792V10.808C47.0584 11.456 47.3544 11.78 47.9464 11.78C48.4024 11.78 48.7024 11.564 48.8464 11.132C48.8864 10.996 48.9344 10.904 48.9904 10.856C49.0544 10.808 49.1544 10.784 49.2904 10.784H51.7384C51.8104 10.784 51.8704 10.812 51.9184 10.868C51.9744 10.916 52.0024 10.976 52.0024 11.048C52.0024 11.744 51.8024 12.328 51.4024 12.8C50.6664 13.68 49.5184 14.12 47.9584 14.12C46.7344 14.12 45.7584 13.852 45.0304 13.316C44.3024 12.772 43.9384 11.94 43.9384 10.82V8.78C43.9384 7.684 44.3104 6.86 45.0544 6.308C45.7984 5.756 46.7664 5.48 47.9584 5.48C49.5184 5.48 50.6664 5.92 51.4024 6.8C51.8024 7.272 52.0024 7.856 52.0024 8.552C52.0024 8.624 51.9744 8.688 51.9184 8.744C51.8704 8.792 51.8104 8.816 51.7384 8.816H49.2904C49.1624 8.816 49.0664 8.792 49.0024 8.744C48.9464 8.696 48.8944 8.604 48.8464 8.468C48.6944 8.036 48.3944 7.82 47.9464 7.82C47.3544 7.82 47.0584 8.144 47.0584 8.792ZM61.0033 13.604C61.0273 13.644 61.0393 13.696 61.0393 13.76C61.0393 13.816 61.0113 13.872 60.9553 13.928C60.9073 13.976 60.8473 14 60.7753 14H58.0393C57.8073 14 57.6433 13.908 57.5473 13.724L56.0833 11.108V13.676C56.0833 13.764 56.0513 13.84 55.9873 13.904C55.9233 13.968 55.8473 14 55.7593 14H53.4673C53.3793 14 53.3033 13.968 53.2393 13.904C53.1753 13.84 53.1433 13.764 53.1433 13.676V5.924C53.1433 5.836 53.1753 5.76 53.2393 5.696C53.3033 5.632 53.3793 5.6 53.4673 5.6H55.7593C55.8473 5.6 55.9233 5.632 55.9873 5.696C56.0513 5.76 56.0833 5.836 56.0833 5.924V8.3L57.4393 5.864C57.5273 5.688 57.6873 5.6 57.9193 5.6H60.5713C60.6433 5.6 60.7033 5.628 60.7513 5.684C60.8073 5.732 60.8353 5.788 60.8353 5.852C60.8353 5.908 60.8233 5.956 60.7993 5.996L58.6393 9.62L61.0033 13.604ZM62.1481 11.264H64.2361C64.3241 11.264 64.4001 11.296 64.4641 11.36C64.5281 11.424 64.5601 11.5 64.5601 11.588V13.676C64.5601 13.764 64.5281 13.84 64.4641 13.904C64.4001 13.968 64.3241 14 64.2361 14H62.1481C62.0601 14 61.9841 13.968 61.9201 13.904C61.8561 13.84 61.8241 13.764 61.8241 13.676V11.588C61.8241 11.5 61.8561 11.424 61.9201 11.36C61.9841 11.296 62.0601 11.264 62.1481 11.264ZM62.1481 5.6H64.2361C64.3241 5.6 64.4001 5.632 64.4641 5.696C64.5281 5.76 64.5601 5.836 64.5601 5.924V10.46C64.5601 10.548 64.5281 10.624 64.4641 10.688C64.4001 10.752 64.3241 10.784 64.2361 10.784H62.1481C62.0601 10.784 61.9841 10.752 61.9201 10.688C61.8561 10.624 61.8241 10.548 61.8241 10.46V5.924C61.8241 5.836 61.8561 5.76 61.9201 5.696C61.9841 5.632 62.0601 5.6 62.1481 5.6Z'
									fill='black'
								/>
								<defs>
									<clipPath id='clip0_0_1'>
										<rect
											width='32'
											height='32'
											fill='white'
											transform='translate(0 19)'
										/>
									</clipPath>
								</defs>
							</svg>
						) : (
							<svg
								width='72'
								height='48'
								viewBox='0 0 72 48'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<ellipse
									cx='25.6667'
									cy='11'
									rx='25.6667'
									ry='11'
									fill='#C4C4C4'
								/>
								<path
									d='M5.66 10.792V12.808C5.66 13.456 5.956 13.78 6.548 13.78C7.004 13.78 7.304 13.564 7.448 13.132C7.488 12.996 7.536 12.904 7.592 12.856C7.656 12.808 7.756 12.784 7.892 12.784H10.34C10.412 12.784 10.472 12.812 10.52 12.868C10.576 12.916 10.604 12.976 10.604 13.048C10.604 13.744 10.404 14.328 10.004 14.8C9.268 15.68 8.12 16.12 6.56 16.12C5.336 16.12 4.36 15.852 3.632 15.316C2.904 14.772 2.54 13.94 2.54 12.82V10.78C2.54 9.684 2.912 8.86 3.656 8.308C4.4 7.756 5.368 7.48 6.56 7.48C8.12 7.48 9.268 7.92 10.004 8.8C10.404 9.272 10.604 9.856 10.604 10.552C10.604 10.624 10.576 10.688 10.52 10.744C10.472 10.792 10.412 10.816 10.34 10.816H7.892C7.764 10.816 7.668 10.792 7.604 10.744C7.548 10.696 7.496 10.604 7.448 10.468C7.296 10.036 6.996 9.82 6.548 9.82C5.956 9.82 5.66 10.144 5.66 10.792ZM14.7928 13.54H18.1168C18.2048 13.54 18.2808 13.572 18.3448 13.636C18.4088 13.7 18.4408 13.776 18.4408 13.864V15.676C18.4408 15.764 18.4088 15.84 18.3448 15.904C18.2808 15.968 18.2048 16 18.1168 16H12.0688C11.9808 16 11.9048 15.968 11.8408 15.904C11.7768 15.84 11.7448 15.764 11.7448 15.676V7.924C11.7448 7.836 11.7768 7.76 11.8408 7.696C11.9048 7.632 11.9808 7.6 12.0688 7.6H14.4688C14.5568 7.6 14.6328 7.632 14.6968 7.696C14.7608 7.76 14.7928 7.836 14.7928 7.924V13.54ZM22.2981 16H19.8501C19.7621 16 19.6861 15.968 19.6221 15.904C19.5581 15.84 19.5261 15.764 19.5261 15.676V7.924C19.5261 7.836 19.5581 7.76 19.6221 7.696C19.6861 7.632 19.7621 7.6 19.8501 7.6H22.2981C22.3861 7.6 22.4621 7.632 22.5261 7.696C22.5901 7.76 22.6221 7.836 22.6221 7.924V15.676C22.6221 15.764 22.5901 15.84 22.5261 15.904C22.4621 15.968 22.3861 16 22.2981 16ZM27.0584 10.792V12.808C27.0584 13.456 27.3544 13.78 27.9464 13.78C28.4024 13.78 28.7024 13.564 28.8464 13.132C28.8864 12.996 28.9344 12.904 28.9904 12.856C29.0544 12.808 29.1544 12.784 29.2904 12.784H31.7384C31.8104 12.784 31.8704 12.812 31.9184 12.868C31.9744 12.916 32.0024 12.976 32.0024 13.048C32.0024 13.744 31.8024 14.328 31.4024 14.8C30.6664 15.68 29.5184 16.12 27.9584 16.12C26.7344 16.12 25.7584 15.852 25.0304 15.316C24.3024 14.772 23.9384 13.94 23.9384 12.82V10.78C23.9384 9.684 24.3104 8.86 25.0544 8.308C25.7984 7.756 26.7664 7.48 27.9584 7.48C29.5184 7.48 30.6664 7.92 31.4024 8.8C31.8024 9.272 32.0024 9.856 32.0024 10.552C32.0024 10.624 31.9744 10.688 31.9184 10.744C31.8704 10.792 31.8104 10.816 31.7384 10.816H29.2904C29.1624 10.816 29.0664 10.792 29.0024 10.744C28.9464 10.696 28.8944 10.604 28.8464 10.468C28.6944 10.036 28.3944 9.82 27.9464 9.82C27.3544 9.82 27.0584 10.144 27.0584 10.792ZM41.0033 15.604C41.0273 15.644 41.0393 15.696 41.0393 15.76C41.0393 15.816 41.0113 15.872 40.9553 15.928C40.9073 15.976 40.8473 16 40.7753 16H38.0393C37.8073 16 37.6433 15.908 37.5473 15.724L36.0833 13.108V15.676C36.0833 15.764 36.0513 15.84 35.9873 15.904C35.9233 15.968 35.8473 16 35.7593 16H33.4673C33.3793 16 33.3033 15.968 33.2393 15.904C33.1753 15.84 33.1433 15.764 33.1433 15.676V7.924C33.1433 7.836 33.1753 7.76 33.2393 7.696C33.3033 7.632 33.3793 7.6 33.4673 7.6H35.7593C35.8473 7.6 35.9233 7.632 35.9873 7.696C36.0513 7.76 36.0833 7.836 36.0833 7.924V10.3L37.4393 7.864C37.5273 7.688 37.6873 7.6 37.9193 7.6H40.5713C40.6433 7.6 40.7033 7.628 40.7513 7.684C40.8073 7.732 40.8353 7.788 40.8353 7.852C40.8353 7.908 40.8233 7.956 40.7993 7.996L38.6393 11.62L41.0033 15.604ZM45.6285 13.264H47.7165C47.8045 13.264 47.8805 13.296 47.9445 13.36C48.0085 13.424 48.0405 13.5 48.0405 13.588V15.676C48.0405 15.764 48.0085 15.84 47.9445 15.904C47.8805 15.968 47.8045 16 47.7165 16H45.6285C45.5405 16 45.4645 15.968 45.4005 15.904C45.3365 15.84 45.3045 15.764 45.3045 15.676V13.588C45.3045 13.5 45.3365 13.424 45.4005 13.36C45.4645 13.296 45.5405 13.264 45.6285 13.264ZM45.6285 7.6H47.7165C47.8045 7.6 47.8805 7.632 47.9445 7.696C48.0085 7.76 48.0405 7.836 48.0405 7.924V12.46C48.0405 12.548 48.0085 12.624 47.9445 12.688C47.8805 12.752 47.8045 12.784 47.7165 12.784H45.6285C45.5405 12.784 45.4645 12.752 45.4005 12.688C45.3365 12.624 45.3045 12.548 45.3045 12.46V7.924C45.3045 7.836 45.3365 7.76 45.4005 7.696C45.4645 7.632 45.5405 7.6 45.6285 7.6Z'
									fill='black'
								/>
								<g clipPath='url(#clip0_0_1)'>
									<path
										d='M60.198 26.0763C60.198 25.1428 60.843 24.3224 61.7686 24.2011C62.126 24.1543 62.4929 24.1205 62.808 24.1205C63.0256 24.1205 63.2679 24.1366 63.5147 24.162C64.6844 24.2823 65.5735 25.2187 65.7575 26.38C65.9441 27.5574 66.138 29.064 66.138 30.2405C66.138 31.642 65.8628 33.5122 65.6526 34.7359C65.52 35.5085 64.9282 36.1188 64.1531 36.2365C63.7062 36.3044 63.2141 36.3605 62.808 36.3605C62.4929 36.3605 62.126 36.3267 61.7686 36.2799C60.843 36.1586 60.198 35.3382 60.198 34.4047V26.0763Z'
										fill='#333232'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M59.198 34.4047V26.0763C59.198 24.699 60.1596 23.4034 61.6387 23.2096C62.0154 23.1602 62.4307 23.1205 62.808 23.1205C63.0711 23.1205 63.3498 23.1397 63.617 23.1672C65.2884 23.3392 66.4985 24.6667 66.7452 26.2235C66.933 27.409 67.138 28.9808 67.138 30.2405C67.138 31.7351 66.8487 33.6791 66.6382 34.9051C66.4367 36.0788 65.5273 37.0393 64.3033 37.2252C63.8405 37.2955 63.2898 37.3605 62.808 37.3605C62.4307 37.3605 62.0154 37.3208 61.6387 37.2714C60.1596 37.0775 59.198 35.782 59.198 34.4047ZM61.7686 24.2011C60.843 24.3224 60.198 25.1428 60.198 26.0763V34.4047C60.198 35.3382 60.843 36.1586 61.7686 36.2799C62.126 36.3267 62.4929 36.3605 62.808 36.3605C63.2141 36.3605 63.7062 36.3044 64.1531 36.2365C64.9282 36.1188 65.52 35.5085 65.6526 34.7359C65.8628 33.5122 66.138 31.642 66.138 30.2405C66.138 29.064 65.9441 27.5574 65.7575 26.38C65.5735 25.2187 64.6844 24.2823 63.5147 24.162C63.2679 24.1366 63.0256 24.1205 62.808 24.1205C62.4929 24.1205 62.126 24.1543 61.7686 24.2011Z'
										fill='black'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M60.198 34.2182V34.4046C60.198 35.3381 60.843 36.1585 61.7686 36.2798C62.126 36.3267 62.4929 36.3604 62.808 36.3604C63.2141 36.3604 63.7062 36.3044 64.1531 36.2365C64.9282 36.1188 65.52 35.5084 65.6526 34.7358C65.8628 33.5122 66.138 31.642 66.138 30.2404C66.138 29.064 65.9441 27.5573 65.7575 26.38C65.6923 25.9688 65.5388 25.5858 65.3157 25.2573C65.4823 26.3671 65.638 27.6864 65.638 28.7404C65.638 30.142 65.3628 32.0122 65.1526 33.2358C65.02 34.0084 64.4282 34.6188 63.6531 34.7365C63.2062 34.8044 62.7141 34.8604 62.308 34.8604C61.9929 34.8604 61.626 34.8267 61.2686 34.7798C60.8392 34.7236 60.4702 34.5168 60.198 34.2182Z'
										fill='#171717'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M63.7852 24.9277C64.0149 24.7745 64.3254 24.8366 64.4785 25.0664L64.0625 25.3437C64.4785 25.0664 64.4787 25.0666 64.4788 25.0667L64.479 25.0671L64.4796 25.068L64.4811 25.0702L64.4849 25.0762C64.4879 25.0808 64.4919 25.0869 64.4965 25.0944C64.5059 25.1093 64.5185 25.1298 64.5338 25.1558C64.5644 25.2078 64.6059 25.2819 64.6547 25.3778C64.7522 25.5697 64.8787 25.8487 65.0039 26.212C65.2547 26.9391 65.5 28.002 65.5 29.375C65.5 29.6511 65.2762 29.875 65 29.875C64.7239 29.875 64.5 29.6511 64.5 29.375C64.5 28.123 64.2766 27.1702 64.0586 26.538C63.9495 26.2216 63.8415 25.985 63.7633 25.8311C63.7242 25.7542 63.6925 25.6979 63.6718 25.6628C63.6615 25.6452 63.6539 25.6329 63.6495 25.626L63.6454 25.6195L63.7852 24.9277ZM63.6453 25.6194C63.6453 25.6194 63.6453 25.6194 63.6453 25.6193C63.6452 25.6191 63.6451 25.6191 63.6453 25.6193L63.6457 25.6199L63.6461 25.6204L63.6463 25.6207'
										fill='#4F4F4F'
									/>
									<path
										d='M48.8215 25.34C48.8215 21.5624 51.3277 18.5 54.4194 18.5C57.511 18.5 60.0172 21.5624 60.0172 25.34C60.0172 25.34 60.4951 29.0573 60.6064 31.46C60.8216 36.1005 60.0172 43.34 60.0172 43.34C60.0172 44.533 59.2258 45.5 58.2495 45.5H57.071C56.0947 45.5 55.3032 44.533 55.3032 43.34V40.0152C55.0153 40.071 54.7201 40.1 54.4194 40.1C53.9095 40.1 53.4156 40.0167 52.9462 39.8607V42.62C52.9462 43.813 52.744 44.78 51.7678 44.78H50.5893C49.2634 44.78 48.8932 43.7098 48.8215 42.44C48.5269 37.22 47.643 36.68 47.643 33.62C47.643 30.56 48.8215 25.34 48.8215 25.34Z'
										fill='#4F4F4F'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M61.8421 43.34C61.8421 44.533 60.9339 45.5 59.8137 45.5H58.4614C57.3411 45.5 56.4329 44.533 56.4329 43.34V40.0152C56.1071 40.0702 55.7731 40.0992 55.4329 40.1C55.4282 40.1 55.4235 40.1 55.4187 40.1C55.1855 40.1 54.9551 40.0867 54.7283 40.0609C54.3863 40.022 54.0522 39.9545 53.7283 39.8607V42.62C53.7283 43.813 53.4963 44.78 52.3761 44.78H51.0238C49.5024 44.78 49.0776 43.7098 48.9953 42.44C48.8162 39.6736 48.4471 38.2216 48.1397 37.0124C47.8671 35.9398 47.643 35.0583 47.643 33.62C47.643 30.56 48.9953 25.34 48.9953 25.34C48.9953 21.5624 51.8712 18.5 55.4187 18.5C58.9663 18.5 61.8421 21.5624 61.8421 25.34C61.8421 25.34 62.3905 29.0573 62.5182 31.46C62.7651 36.1005 61.8421 43.34 61.8421 43.34ZM62.8418 25.2652C62.8039 21.0286 59.5525 17.5 55.4187 17.5C51.3026 17.5 48.0614 20.9985 47.9963 25.2108C47.988 25.2439 47.9781 25.2834 47.9668 25.3289C47.9289 25.4811 47.8752 25.7009 47.8108 25.9738C47.6821 26.5191 47.5104 27.2786 47.3387 28.1361C46.9996 29.8286 46.643 31.9828 46.643 33.62C46.643 35.1854 46.8938 36.1709 47.1684 37.2504C47.1865 37.3215 47.2047 37.393 47.2229 37.4651C47.5085 38.5948 47.8334 39.9723 47.9974 42.5047C48.0424 43.1991 48.1857 44.0135 48.6581 44.6702C49.1808 45.3968 49.9928 45.78 51.0238 45.78H52.3761C52.8027 45.78 53.2155 45.6866 53.5805 45.4641C53.9465 45.241 54.1974 44.9289 54.3643 44.5993C54.6761 43.984 54.7283 43.2388 54.7283 42.62V41.0665C54.9558 41.0886 55.1861 41.1 55.4187 41.1C55.4235 41.1 55.4282 41.1 55.4329 41.1V43.34C55.4329 45.0251 56.7305 46.5 58.4614 46.5H59.8137C61.5212 46.5 62.8071 45.0646 62.8414 43.408L62.8448 43.3804C62.8517 43.3249 62.8617 43.2435 62.8742 43.1386C62.8993 42.9288 62.9347 42.6248 62.9765 42.2457C63.0599 41.488 63.1684 40.4291 63.2693 39.2236C63.4698 36.8254 63.6441 33.7988 63.5168 31.4069C63.451 30.1686 63.2782 28.6095 63.1246 27.3755C63.0474 26.7551 62.9742 26.2108 62.9203 25.8214C62.8934 25.6266 62.8712 25.4703 62.8558 25.3625C62.8502 25.3236 62.8455 25.291 62.8418 25.2652Z'
										fill='black'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M49.0112 24.8554C49.0007 25.0155 48.9953 25.1771 48.9953 25.34C48.9953 25.34 48.6008 26.8627 48.238 28.7455C48.6814 29.4946 49.4775 30.029 50.4387 30.0802L55.3481 30.3415C56.8326 30.4206 58.1805 29.479 58.6173 28.0579C59.2365 26.0431 57.7974 23.9827 55.6925 23.8707L52.1027 23.6796C50.922 23.6167 49.8099 24.0657 49.0112 24.8554Z'
										fill='#333232'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M49.2386 43.6592C49.5076 44.3263 50.0333 44.78 51.0238 44.78H52.376C53.4963 44.78 53.7283 43.8129 53.7283 42.62V39.8607C54.2669 40.0167 54.8337 40.1 55.4187 40.1C55.4235 40.1 55.4282 40.1 55.4329 40.1V39.0152C55.1026 39.071 54.7638 39.1 54.4187 39.1C53.8337 39.1 53.2669 39.0167 52.7283 38.8607V41.62C52.7283 42.8129 52.4963 43.78 51.376 43.78H50.0238C49.7204 43.78 49.4607 43.7374 49.2386 43.6592ZM56.6544 44.3223C56.9902 45.0214 57.6732 45.5 58.4613 45.5H59.8137C60.934 45.5 61.8421 44.5329 61.8421 43.34C61.8421 43.34 62.765 36.1005 62.5182 31.46C62.3904 29.0573 61.8421 25.34 61.8421 25.34C61.8421 23.1105 60.8404 21.1301 59.2901 19.8814C60.2574 21.0787 60.8421 22.6366 60.8421 24.34C60.8421 24.34 61.3904 28.0573 61.5182 30.46C61.765 35.1005 60.8421 42.34 60.8421 42.34C60.8421 43.5329 59.934 44.5 58.8137 44.5H57.4613C57.1745 44.5 56.9017 44.4366 56.6544 44.3223Z'
										fill='#333232'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M55.5686 19.3952C55.6264 19.6652 55.4544 19.931 55.1844 19.9889C53.2721 20.3987 52.0245 21.6864 51.2336 23.1877C50.4385 24.6969 50.1307 26.3796 50.0934 27.4548C50.0925 27.4828 50.0892 27.5106 50.0836 27.5381C49.9649 28.116 49.7865 29.0481 49.6381 29.9614C49.4875 30.8882 49.375 31.7529 49.375 32.2187C49.375 33.4866 49.4703 35.0578 50.0539 36.4292C50.162 36.6833 50.0436 36.9769 49.7895 37.085C49.5354 37.1932 49.2418 37.0748 49.1336 36.8207C48.4672 35.2547 48.375 33.5134 48.375 32.2187C48.375 31.6596 48.5022 30.7169 48.651 29.801C48.7986 28.8927 48.9748 27.9686 49.0956 27.3776C49.1434 26.1812 49.481 24.3688 50.3488 22.7216C51.2311 21.0469 52.6872 19.5013 54.9749 19.0111C55.2449 18.9532 55.5107 19.1252 55.5686 19.3952Z'
										fill='#6B6B6B'
									/>
									<path
										d='M46.9796 25.0596C47.5305 23.2673 49.2304 22.0799 51.1028 22.1796L54.6926 22.3707C56.7974 22.4827 58.2366 24.5431 57.6174 26.5579C57.1806 27.979 55.8327 28.9206 54.3481 28.8415L49.4388 28.5802C47.669 28.486 46.459 26.7537 46.9796 25.0596Z'
										fill='#54B0D7'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M51.1559 21.181L54.7457 21.3721C57.5002 21.5187 59.3836 24.2149 58.5732 26.8516C58.0017 28.7114 56.2378 29.9435 54.2949 29.8401L49.3856 29.5787C46.9662 29.4499 45.312 27.0817 46.0237 24.7658C46.7094 22.5349 48.8253 21.0569 51.1559 21.181ZM51.1028 22.1795C49.2304 22.0799 47.5304 23.2673 46.9796 25.0596C46.459 26.7536 47.669 28.4859 49.4388 28.5801L54.3481 28.8415C55.8327 28.9205 57.1806 27.979 57.6174 26.5579C58.2366 24.543 56.7974 22.4827 54.6926 22.3706L51.1028 22.1795Z'
										fill='black'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M47.2213 27.2168C47.6612 27.9809 48.4653 28.5283 49.4388 28.5801L54.348 28.8415C55.8327 28.9205 57.1806 27.979 57.6173 26.5579C58.0324 25.2072 57.5225 23.8361 56.5072 23.0452C56.9794 23.8047 57.1421 24.7603 56.8515 25.706C56.4148 27.1271 55.0669 28.0686 53.5822 27.9896L48.6729 27.7282C48.1234 27.699 47.6279 27.5118 47.2213 27.2168Z'
										fill='#4088A3'
									/>
									<path
										d='M47.8438 24.1406C48.1122 23.3368 49.2871 22.5989 50.296 22.6284C51.3048 22.658 51.2892 22.5355 53.1837 22.713C55.0782 22.8906 55.6308 23.8995 55.2502 25.0391C54.9818 25.8429 54.1026 26.2639 53.0938 26.2344C52.0849 26.2048 51.2969 26.4531 49.8907 26.4531C48.4844 26.4531 47.4631 25.2802 47.8438 24.1406Z'
										fill='#71D8F9'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M49.1291 24.129L48.942 23.6653C48.6859 23.7686 48.5621 24.06 48.6654 24.3161C48.7687 24.5721 49.0598 24.6959 49.3159 24.5928L49.3152 24.5931C49.3148 24.5932 49.3151 24.5931 49.3152 24.5931L49.3212 24.5908C49.3275 24.5884 49.3383 24.5843 49.3534 24.5789C49.3837 24.5682 49.4312 24.552 49.4942 24.5328C49.6202 24.4944 49.8075 24.4443 50.0426 24.4009C50.5141 24.3139 51.1693 24.256 51.9055 24.3695C52.1784 24.4115 52.4337 24.2243 52.4758 23.9514C52.5178 23.6785 52.3307 23.4232 52.0577 23.3811C51.1848 23.2466 50.4137 23.3156 49.8613 23.4175C49.5844 23.4685 49.3602 23.5283 49.2029 23.5762C49.1241 23.6002 49.0619 23.6213 49.0179 23.6369C48.9959 23.6448 48.9784 23.6513 48.9657 23.6561L48.9502 23.6621L48.9452 23.664L48.9434 23.6648L48.9426 23.6651C48.9425 23.6651 48.942 23.6653 49.1291 24.129Z'
										fill='#EDFEFF'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M51.4428 39.5278C51.56 39.2778 51.8577 39.1701 52.1077 39.2873C52.7014 39.5655 53.4572 39.7084 54.1993 39.7698C54.9347 39.8307 55.6205 39.8089 56.0528 39.7791C56.3283 39.7601 56.567 39.968 56.586 40.2435C56.605 40.519 56.397 40.7577 56.1215 40.7767C55.6559 40.8087 54.9171 40.8326 54.1168 40.7664C53.3232 40.7007 52.4321 40.5437 51.6833 40.1928C51.4333 40.0756 51.3256 39.7779 51.4428 39.5278Z'
										fill='black'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M57.2243 38.4714C57.499 38.4995 57.6989 38.7449 57.6708 39.0196C57.625 39.4671 57.5698 40.1959 57.5537 40.9174C57.5372 41.6583 57.5644 42.3256 57.6576 42.688C57.7264 42.9554 57.5653 43.228 57.2979 43.2968C57.0304 43.3655 56.7579 43.2045 56.6891 42.937C56.5573 42.4245 56.5377 41.6282 56.554 40.8951C56.5708 40.1427 56.628 39.3871 56.676 38.9179C56.7041 38.6432 56.9496 38.4433 57.2243 38.4714Z'
										fill='#6B6B6B'
									/>
									<path
										d='M45.3665 26.1249L38.6381 18.7032L45.4083 16.1073L45.3665 26.1249Z'
										fill='#C4C4C4'
									/>
								</g>
								<defs>
									<clipPath id='clip0_0_1'>
										<rect
											width='32'
											height='32'
											fill='white'
											transform='translate(40 16)'
										/>
									</clipPath>
								</defs>
							</svg>
						)}
					</IconButton>

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
