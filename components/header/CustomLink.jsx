import * as React from 'react'

import { alpha, styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import HoverUnderline from '../svgs/HoverUnderline'

const StyledButton = styled(Button)(({ theme }) => ({
	color: theme.palette.primary.main,
	fontSize: '2rem',
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: 'transparent',
	},
}))

export default function StyledButtonCustomization(props) {
	return <StyledButton>{props.children}</StyledButton>
}
