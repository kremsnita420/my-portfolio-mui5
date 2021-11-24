import { Typography } from '@mui/material'

export default function HeadTitle({ title }) {
	return (
		<Typography
			color='info'
			sx={{ textAlign: 'center', margin: '2rem 0' }}
			variant='h1'
			component='h1'
			gutterBottom>
			{title}
		</Typography>
	)
}
