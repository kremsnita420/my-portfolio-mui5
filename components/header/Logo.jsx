import NextLink from 'next/link'
import { Link, Typography } from '@mui/material'

export default function Logo() {
	return (
		<Typography variant='h4' component='div'>
			<NextLink href='/' passHref>
				<Link>
					{`<`}
					SafetDev
					{`/>`}
				</Link>
			</NextLink>
		</Typography>
	)
}
