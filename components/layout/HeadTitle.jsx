import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledHeadTitle = styled(Typography)(({ theme }) => ({
	textAlign: 'center',
}))

export default function StyledHeadTitleCustmization({ title }) {
	return (
		<StyledHeadTitle variant='h1' component='h1' gutterBottom>
			{title}
		</StyledHeadTitle>
	)
}
