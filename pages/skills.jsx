import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Layout from '../components/Layout'

export default function SkillsPage() {
	return (
		<Layout>
			<Container maxWidth='sm'>
				<Box sx={{ marginTop: '2rem' }}>
					<Typography
						sx={{ textAlign: 'center' }}
						variant='h1'
						component='h1'
						gutterBottom>
						Skills Page
					</Typography>
				</Box>
			</Container>
		</Layout>
	)
}
