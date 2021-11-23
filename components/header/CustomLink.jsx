import * as React from 'react'

import { alpha, styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import HoverUnderline from '../svgs/HoverUnderline'

const StyledButton = styled(Button)(({ theme }) => ({
	color: theme.palette.success.main,
	maxWidth: '20rem',
	fontSize: '3rem',
	cursor: 'pointer',
	opacity: 0.5,
	'&:hover': {
		backgroundColor: 'transparent',
	},
}))

export default function StyledButtonCustomization(props) {
	return <StyledButton>{props.children}</StyledButton>
}
