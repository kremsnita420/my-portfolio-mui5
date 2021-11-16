import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import NextLink from 'next/link'

import Layout from '../components/Layout'

export default function ProjectsPage() {
	return (
		<Layout title='Projects'>
			<Box sx={{ marginTop: '2rem' }}>
				<Typography
					sx={{ textAlign: 'center' }}
					variant='h1'
					component='h1'
					gutterBottom>
					All Projects Page
				</Typography>
			</Box>
		</Layout>
	)
}
