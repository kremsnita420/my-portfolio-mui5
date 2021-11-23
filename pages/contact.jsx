import { Button } from '@mui/material'

import Layout from '../components/layout/Layout'
import HeadTitle from '../components/layout/HeadTitle'
import Image from 'next/image'

export default function ContactPage() {
	return (
		<Layout title='Get in Touch' description='Get in Touch'>
			<HeadTitle title='Get in Touch' />

			<Button
				href='https://drive.google.com/file/d/1wcz3ZNxcJw6An1YzYbM6yyBDeZypXNXH/view?usp=sharing'
				target='_blank'
				rel='noopener'
				variant='outlined'>
				PDF Resume
			</Button>
			<Image
				src='https://cdn.glitch.com/0e4d1ff3-5897-47c5-9711-d026c01539b8%2Fbddfd6e4434f42662b009295c9bab86e.gif?v=1573157191712'
				width='250'
				height='350'
				alt='404 image'
			/>

			<Image
				src='/images/my-gif.gif'
				alt='this slowpoke moves'
				width='350'
				height='350'
			/>
			<Image
				src='/images/my-gif2.gif'
				alt='this slowpoke moves'
				width='350'
				height='350'
			/>
		</Layout>
	)
}
