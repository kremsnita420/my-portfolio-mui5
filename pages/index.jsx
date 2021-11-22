import { useContext } from 'react'
import Box from '@mui/material/Box'
import Layout from '../components/layout/Layout'

import { Divider, Paper, Typography } from '@mui/material'

import ParticlesContainer from '../components/Particles'
import HeroTextSvg from '../components/svgs/hero/HeroTextSvg'
import WebText from '../components/svgs/hero/WebText'
import FullstackTextSvg from '../components/svgs/hero/FullstackTextSvg'
import SelfthoughtTextSvg from '../components/svgs/hero/SelfthoughtTextSvg'

export default function HomePage() {
	return (
		<Layout title='Home Page'>
			<ParticlesContainer />
			<Box
				sx={{
					maxWidth: 'xl',
					marginTop: '4rem',
				}}>
				<Box
					variant='outlined'
					sx={{
						width: '70vw',
						padding: '2rem',
						background: '#EE516E',
						border: '5px solid',
						zIndex: '99',
						position: 'relative',
					}}
					elevation={3}>
					<WebText />
					<HeroTextSvg />
					<FullstackTextSvg />
					<SelfthoughtTextSvg />
				</Box>
			</Box>
		</Layout>
	)
}
