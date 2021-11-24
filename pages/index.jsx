import { useContext } from 'react'
import Box from '@mui/material/Box'
import Layout from '../components/layout/Layout'

import { Container, SvgIcon } from '@mui/material'

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
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Box
					sx={{
						marginTop: '15rem',
						width: '100%',
						height: '100%',
						padding: '2rem',

						zIndex: 99,
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
