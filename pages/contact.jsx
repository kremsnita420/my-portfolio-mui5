import { Typography, Container } from '@mui/material'
import { Box } from '@mui/system'
import Layout from '../components/Layout'

export default function ContactPage() {
	return (
		<Layout title='Contact'>
			<Container maxWidth='sm'>
				<Box sx={{ marginTop: '2rem' }}>
					<Typography
						sx={{ textAlign: 'center' }}
						variant='h1'
						component='h1'
						gutterBottom>
						Contact Page
					</Typography>
				</Box>
			</Container>
		</Layout>
	)
}
