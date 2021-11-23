import { SvgIcon } from '@mui/material'
import { motion } from 'framer-motion'

export default function HoverUnderline() {
	return (
		<SvgIcon
			color='primary'
			sx={{
				width: '160px',
				height: '20px',
				position: 'absolute',
				top: '75%',
				left: '50%',
				transform: 'translate(-50%, -50%) rotate(-5deg)',
			}}
			viewBox='0 0 249 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M199.703 7.82874L232.132 11.0449C237.471 11.5745 241.166 14.9372 240.385 18.5558C239.603 22.1744 234.642 24.6785 229.302 24.149L200.1 21.2528L176.758 24.2188L147.825 24.2188L125.277 21.1626L98.5642 21.1626L74.2954 24.153L38.7617 26.8287L15.6014 24.1225C10.2836 23.5011 6.71592 20.0758 7.6328 16.4719C8.54967 12.8679 13.6039 10.45 18.9217 11.0714L39.3545 13.4589L71.4651 11.041L96.8021 7.91893L127.212 7.91893L149.76 10.9752L174.942 10.9751L199.703 7.82874Z'
				strokeWidth='14'
				strokeLinecap='round'
			/>
		</SvgIcon>
	)
}
