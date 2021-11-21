import { Typography, Container, Button } from '@mui/material'
import NextLink from 'next/link'
import { Box } from '@mui/system'
import Layout from '../components/layout/Layout'
import HeadTitle from '../components/layout/HeadTitle'

export default function ContactPage() {
	return (
		<Layout title='Contact' description='Get in Touch'>
			<HeadTitle title='Get in Touch' />

			<Button
				href='https://drive.google.com/file/d/1wcz3ZNxcJw6An1YzYbM6yyBDeZypXNXH/view?usp=sharing'
				target='_blank'
				rel='noopener'
				variant='outlined'>
				PDF Resume
			</Button>
		</Layout>
	)
}
