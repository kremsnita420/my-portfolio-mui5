import { useContext } from 'react'
import Box from '@mui/material/Box'
import Layout from '../components/layout/Layout'
import { Store } from '../src/StoreProvider'
import classes from '../styles/index.module.css'
import { motion } from 'framer-motion'
import { Divider, SvgIcon, Typography } from '@mui/material'

import ParticlesContainer from '../components/Particles'

export default function HomePage() {
	//fetch from store provider
	const { state } = useContext(Store)
	const { darkMode } = state

	const mainPathVariant = {
		transition: {
			duration: 5,
			ease: 'easeInOut',
		},
		variants: {
			visible: {
				pathLength: 0,
			},
			hidden: {
				pathLength: 1,
			},
		},
	}
	const secPathVariant = {
		transition: {
			duration: 5,
			ease: 'easeIn',
		},
		variants: {
			visible: {
				scale: '100%',
				opacity: 1,
				pathLength: 1,
			},
			hidden: {
				scale: '0%',
				opacity: 0,
				pathLength: 0,
			},
		},
	}
	const thirdPathVariant = {
		transition: {
			delay: 5,
			duration: 6,
			ease: 'easeIn',
		},
		variants: {
			visible: {
				pathLength: 1,
			},
			hidden: {
				pathLength: 0,
			},
		},
	}

	return (
		<Layout title='Home Page'>
			<ParticlesContainer />
			<Box
				sx={{
					marginTop: '4rem',
				}}>
				<Typography variant='h1' component='h1'>
					SAFET DURANOVIC
				</Typography>
				<Typography variant='h3' component='h3'>
					WEB DEVELOPER
				</Typography>
				<Divider />
				<Typography variant='h5' component='h5'>
					Fullstack, Selfthought
				</Typography>
			</Box>
		</Layout>
	)
}
