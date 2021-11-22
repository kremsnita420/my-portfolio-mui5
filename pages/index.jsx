import { useContext } from 'react'
import Box from '@mui/material/Box'
import Layout from '../components/layout/Layout'

import { Container, Divider, Paper, Typography } from '@mui/material'

import HeroTextSvg from '../components/svgs/hero/HeroTextSvg'
import WebText from '../components/svgs/hero/WebText'
import FullstackTextSvg from '../components/svgs/hero/FullstackTextSvg'
import SelfthoughtTextSvg from '../components/svgs/hero/SelfthoughtTextSvg'

export default function HomePage() {
	return (
		<Layout title='Home Page'>
			<Container
				maxWidth='md'
				sx={{
					marginTop: '15rem',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Box
					variant='outlined'
					sx={{
						width: '100%',
						height: '100%',
						padding: '2rem',
						background: '#EE516E',
						border: '2px solid',
						borderRadius: '5px',
						zIndex: '99',
						position: 'relative',
					}}>
					<WebText />
					<HeroTextSvg />
					<FullstackTextSvg />
					<SelfthoughtTextSvg />
				</Box>
			</Container>
		</Layout>
	)
}
