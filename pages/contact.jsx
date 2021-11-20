import { Typography, Container, Button } from '@mui/material'
import NextLink from 'next/link'
import { Box } from '@mui/system'
import Layout from '../components/layout/Layout'
import HeadTitle from '../components/layout/HeadTitle'

export default function ContactPage() {
	return (
		<Layout title='Contact' description='Get in Touch'>
			<Container maxWidth='sm'>
				<Box sx={{ marginTop: '2rem' }}>
					<HeadTitle title='Get in Touch' />
				</Box>
				<Button
					href='https://drive.google.com/file/d/1wcz3ZNxcJw6An1YzYbM6yyBDeZypXNXH/view?usp=sharing'
					target='_blank'
					rel='noopener'
					variant='outlined'>
					PDF Resume
				</Button>
			</Container>
		</Layout>
	)
}
