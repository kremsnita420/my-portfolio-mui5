import { Typography, Container } from '@mui/material'
import { Box } from '@mui/system'
import Layout from '../../components/Layout'

export default function SingleProjectPage() {
	return (
		<Layout>
			<Container maxWidth='sm'>
				<Box sx={{ marginTop: '2rem' }}>
					<Typography
						sx={{ textAlign: 'center' }}
						variant='h3'
						component='h1'
						gutterBottom>
						Single Project Page
					</Typography>
				</Box>
			</Container>
		</Layout>
	)
}
