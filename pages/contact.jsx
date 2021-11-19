import { Typography, Container } from '@mui/material'
import { Box } from '@mui/system'
import Layout from '../components/Layout'
import HeadTitle from '../components/layout/HeadTitle'

export default function ContactPage() {
	return (
		<Layout title='Contact'>
			<Container maxWidth='sm'>
				<Box sx={{ marginTop: '2rem' }}>
					<HeadTitle title='Contact' />
				</Box>
			</Container>
		</Layout>
	)
}
