import { Typography } from '@mui/material'

export default function HeadTitle({ title }) {
	return (
		<Typography
			sx={{ textAlign: 'center' }}
			variant='h1'
			component='h1'
			gutterBottom>
			{title}
		</Typography>
	)
}
